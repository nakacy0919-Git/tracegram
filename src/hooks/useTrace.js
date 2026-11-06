import { playTraceSound } from '../lib/traceAudio';
import { useState, useEffect, useRef } from 'react';
import { getProblemLevel } from '../data/mockData';

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
  const [firstTryCount, setFirstTryCount] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const failedProblemIdsRef = useRef(new Set());

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


  const startGame = (level, questionCount = 10, categoryOverride = null) => {
    const course = categoryOverride || activeCategory;
    if (!course?.problems || !Array.isArray(course.problems)) return false;
    let extracted = level === 'all' ? [...course.problems] :
      course.problems.filter(problem => getProblemLevel(problem) === Number(level));
    if (!extracted.length) return false;

    // Uniform difficulty parsing for ID-based and explicit-level exercises.
    const problems = [...extracted];
    for (let i = problems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [problems[i], problems[j]] = [problems[j], problems[i]];
    }
    const limit = Number.parseInt(questionCount, 10);
    const finalProblems = Number.isInteger(limit) && limit > 0 ? problems.slice(0, limit) : problems;

    clearAdvance();
    failedProblemIdsRef.current = new Set();
    selectedIndicesRef.current = [];
    feedbackRef.current = 'idle';
    draggingRef.current = false;
    setActiveCategory(course);
    setSelectedLevel(level);
    setFilteredProblems(finalProblems);
    setCurrentProblemIdx(0);
    setActiveProblem(finalProblems[0] || null);
    setScore(0);
    setCombo(0);
    setCorrectCount(0);
    setFirstTryCount(0);
    setWrongAttempts(0);
    setSelectedIndices([]);
    setFeedbackState('idle');
    setGameState('game');
    return true;
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
      if (!failedProblemIdsRef.current.has(activeProblem.id)) {
        setFirstTryCount(prev => prev + 1);
      }
      if (activeCategory?.categoryId === 'review' && activeProblem.id) {
        try {
          const saved = JSON.parse(localStorage.getItem('tracegram_mistakes') || '{}');
          if (saved && typeof saved === 'object') {
            delete saved[activeProblem.id];
            localStorage.setItem('tracegram_mistakes', JSON.stringify(saved));
          }
        } catch {}
      }
      feedbackRef.current = 'correct';
      setFeedbackState('correct');
      setScore(prev => prev + 1000 + combo * 100);
      setCombo(prev => prev + 1);
      setCorrectCount(prev => prev + 1);
      // 正解の光と音を楽しめる長さを確保。画面移動時はタイマーを取り消す。
      advanceTimerRef.current = setTimeout(() => nextProblem(), 900);
    } else {
      failedProblemIdsRef.current.add(activeProblem.id);
      setWrongAttempts(prev => prev + 1);
      if (activeProblem.id) {
        try {
          const saved = JSON.parse(localStorage.getItem('tracegram_mistakes') || '{}');
          const valid = saved && typeof saved === 'object' && !Array.isArray(saved) ? saved : {};
          valid[activeProblem.id] = { count: Math.min(999, (valid[activeProblem.id]?.count || 0) + 1), at: Date.now() };
          const entries = Object.entries(valid).sort((a,b)=> (b[1].at || 0) - (a[1].at || 0)).slice(0, 300);
          localStorage.setItem('tracegram_mistakes', JSON.stringify(Object.fromEntries(entries)));
        } catch {}
      }
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
    currentProblemIdx, score, combo, correctCount, firstTryCount, wrongAttempts, selectedIndices, feedbackState,
    mainContainerRef, lastBonus, selectedLevel, filteredProblems,
    setGameState, selectMainCategory, selectSubCategory, startGame,
    backToMain, backToSub, backToLevelSelect,
    handlePointerDown, handlePointerMove, handlePointerUp,
    submitAnswer, nextProblem, resetForRetry, addBonusScore
  };
}