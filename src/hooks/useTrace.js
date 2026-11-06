import { useState, useEffect, useRef, useCallback } from 'react';

// 🎵 オーディオコンテキストは使い回し、長時間の音読学習でリソースを使い切らない。
let traceAudioContext = null;
const playTraceSound = (count, isDeselect = false) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = traceAudioContext && traceAudioContext.state !== 'closed'
      ? traceAudioContext : new AudioContext();
    traceAudioContext = ctx;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'triangle';
    const baseFreq = isDeselect ? 300 : 440;
    osc.frequency.setValueAtTime(baseFreq + (count * 30), ctx.currentTime);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {
    console.warn("Audio play failed", e);
  }
};

export function useTrace(categories) {
  const [gameState, setGameState] = useState('main_select'); 
  const [activeMain, setActiveMain] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  
  const [filteredProblems, setFilteredProblems] = useState([]);
  const [currentProblemIdx, setCurrentProblemIdx] = useState(0);
  const [activeProblem, setActiveProblem] = useState(null);

  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [lastBonus, setLastBonus] = useState(0);

  const [selectedIndices, setSelectedIndices] = useState([]);
  const [feedbackState, setFeedbackState] = useState('idle'); 
  const [isDragging, setIsDragging] = useState(false);
  const [dragMode, setDragMode] = useState('select'); 

  const mainContainerRef = useRef(null);
  const selectedIndicesRef = useRef([]);
  const draggingRef = useRef(false);
  const dragModeRef = useRef('select');
  const advanceTimerRef = useRef(null);
  const feedbackRef = useRef('idle');

  const updateSelection = (change) => {
    const next = change(selectedIndicesRef.current);
    selectedIndicesRef.current = next;
    setSelectedIndices(next);
  };
  const clearAdvance = () => {
    if (advanceTimerRef.current !== null) {
      clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }
  };
  useEffect(() => () => clearTimeout(advanceTimerRef.current), []);

  useEffect(() => {
    if (filteredProblems && filteredProblems.length > 0 && filteredProblems[currentProblemIdx]) {
      setActiveProblem(filteredProblems[currentProblemIdx]);
    } else {
      setActiveProblem(null);
    }
  }, [filteredProblems, currentProblemIdx]);

  const selectMainCategory = (mainId) => {
    setActiveMain(mainId);
    setGameState('sub_select');
  };

  const selectSubCategory = (subCat) => {
    setActiveCategory(subCat);
    setGameState('level_select');
  };

  const startGame = (level, questionCount) => {
    setSelectedLevel(level);
    
    let extractedProblems = [];
    
    if (activeCategory) {
      if (activeCategory.problems) {
        if (typeof activeCategory.problems === 'object' && !Array.isArray(activeCategory.problems)) {
          extractedProblems = activeCategory.problems[level] || activeCategory.problems[String(level)] || [];
        } else if (Array.isArray(activeCategory.problems)) {
          const hasLevelProp = activeCategory.problems.some(p => p && p.level !== undefined);
          if (hasLevelProp) {
            extractedProblems = activeCategory.problems.filter(p => p && String(p.level) === String(level));
          } else {
            extractedProblems = activeCategory.problems;
          }
        }
      } else if (activeCategory[level] && Array.isArray(activeCategory[level])) {
        extractedProblems = activeCategory[level];
      } else if (activeCategory[String(level)] && Array.isArray(activeCategory[String(level)])) {
        extractedProblems = activeCategory[String(level)];
      } else if (activeCategory.levels && activeCategory.levels[level]) {
        extractedProblems = activeCategory.levels[level].problems || activeCategory.levels[level] || [];
      } else if (activeCategory.levels && activeCategory.levels[String(level)]) {
        extractedProblems = activeCategory.levels[String(level)].problems || activeCategory.levels[String(level)] || [];
      }
    }

    if ((!extractedProblems || extractedProblems.length === 0) && activeCategory) {
      const keys = Object.keys(activeCategory);
      for (const key of keys) {
        if (Array.isArray(activeCategory[key]) && activeCategory[key].length > 0) {
          extractedProblems = activeCategory[key];
          break;
        }
      }
    }

    let finalProblems = [...(extractedProblems || [])];
    
    if (finalProblems.length > 0) {
      for (let i = finalProblems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [finalProblems[i], finalProblems[j]] = [finalProblems[j], finalProblems[i]];
      }
      
      if (questionCount && questionCount !== 'all' && !isNaN(questionCount)) {
        const limit = parseInt(questionCount, 10);
        finalProblems = finalProblems.slice(0, limit);
      }
    }

    clearAdvance();
    selectedIndicesRef.current = [];
    feedbackRef.current = 'idle';
    draggingRef.current = false;
    setFilteredProblems(finalProblems);
    setCurrentProblemIdx(0);
    setScore(0);
    setCombo(0);
    setCorrectCount(0);
    setSelectedIndices([]);
    setFeedbackState('idle');
    setGameState('game');
  };

  const backToMain = () => {
    setActiveMain(null);
    setGameState('main_select');
  };

  const backToSub = () => {
    setActiveCategory(null);
    setGameState('sub_select');
  };

  const backToLevelSelect = () => {
    clearAdvance();
    selectedIndicesRef.current = [];
    feedbackRef.current = 'idle';
    setSelectedIndices([]);
    setFeedbackState('idle');
    setGameState('level_select');
  };


  // 判定には画面の再描画を待たず、最後に触れた単語まで確実に反映する。
  const nextProblem = () => {
    clearAdvance();
    selectedIndicesRef.current = [];
    feedbackRef.current = 'idle';
    draggingRef.current = false;
    setIsDragging(false);
    setSelectedIndices([]);
    setFeedbackState('idle');
    if (currentProblemIdx + 1 < filteredProblems.length) {
      setCurrentProblemIdx(currentProblemIdx + 1);
    } else {
      setGameState('result');
    }
  };

  const resetForRetry = () => {
    clearAdvance();
    selectedIndicesRef.current = [];
    feedbackRef.current = 'idle';
    draggingRef.current = false;
    setIsDragging(false);
    setSelectedIndices([]);
    setFeedbackState('idle');
  };

  const submitAnswer = () => {
    const chosen = selectedIndicesRef.current;
    if (!activeProblem || !chosen.length || feedbackRef.current !== 'idle') return;
    const targets = activeProblem.targetIndices ||
      (activeProblem.targetIndex !== undefined ? [activeProblem.targetIndex] : []);
    const normalize = (indices) => [...new Set(indices)].sort((a, b) => a - b);
    const actual = normalize(chosen);
    const expected = normalize(targets);
    const perfect = actual.length === expected.length &&
      actual.every((index, i) => index === expected[i]);

    if (perfect) {
      feedbackRef.current = 'correct';
      setFeedbackState('correct');
      setScore(prev => prev + 1000 + combo * 100);
      setCombo(prev => prev + 1);
      setCorrectCount(prev => prev + 1);
      // 正解の光と音を楽しめる長さを確保。画面移動時はタイマーを取り消す。
      advanceTimerRef.current = setTimeout(() => nextProblem(), 900);
    } else {
      feedbackRef.current = 'wrong';
      setFeedbackState('wrong');
      setCombo(0);
    }
  };

  const handlePointerDown = (e, idx) => {
    if (feedbackRef.current !== 'idle') return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    draggingRef.current = true;
    setIsDragging(true);
    const selected = selectedIndicesRef.current;
    const isCurrentlySelected = selected.includes(idx);
    const newMode = isCurrentlySelected ? 'deselect' : 'select';
    setDragMode(newMode);
    dragModeRef.current = newMode;
    updateSelection(prev => {
      if (newMode === 'select' && !prev.includes(idx)) {
        playTraceSound(prev.length);
        return [...prev, idx].sort((a,b) => a-b);
      }
      if (newMode === 'deselect' && prev.includes(idx)) {
        playTraceSound(0, true);
        return prev.filter(i => i !== idx);
      }
      return prev;
    });
  };

  const handlePointerMove = (e) => {
    if (!draggingRef.current || feedbackRef.current !== 'idle') return;
    const element = document.elementFromPoint(e.clientX, e.clientY);
    const token = element?.closest?.('[data-token-idx]');
    if (!token || !mainContainerRef.current?.contains(token)) return;
    const idx = Number(token.dataset.tokenIdx);
    if (!Number.isInteger(idx) || idx < 0 || idx >= (activeProblem?.tokens?.length || 0)) return;
    updateSelection(prev => {
      if (dragModeRef.current === 'select' && !prev.includes(idx)) {
        playTraceSound(prev.length);
        return [...prev, idx].sort((a,b) => a-b);
      }
      if (dragModeRef.current === 'deselect' && prev.includes(idx)) {
        playTraceSound(0, true);
        return prev.filter(i => i !== idx);
      }
      return prev;
    });
  };

  const handlePointerUp = (autoJudge = false) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setIsDragging(false);
    if (autoJudge && selectedIndicesRef.current.length) submitAnswer();
  };

  useEffect(() => {
    const release = () => { draggingRef.current = false; setIsDragging(false); };
    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);
    window.addEventListener('blur', release);
    return () => {
      window.removeEventListener('pointerup', release);
      window.removeEventListener('pointercancel', release);
      window.removeEventListener('blur', release);
    };
  }, []);

  const addBonusScore = (scoreAmount) => {
    setScore(prev => prev + scoreAmount);
    setLastBonus(scoreAmount);
  };

  return {
    gameState, availableCategories: categories, activeMain, activeCategory, activeProblem,
    currentProblemIdx, score, combo, correctCount, selectedIndices, feedbackState,
    mainContainerRef, lastBonus, selectedLevel, filteredProblems,
    setGameState, selectMainCategory, selectSubCategory, startGame,
    backToMain, backToSub, backToLevelSelect,
    handlePointerDown, handlePointerMove, handlePointerUp,
    submitAnswer, nextProblem, resetForRetry, addBonusScore
  };
}