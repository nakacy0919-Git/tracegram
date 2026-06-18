import { useState, useEffect, useRef, useCallback } from 'react';

// 🎵 なぞったときの効果音
const playTraceSound = (count, isDeselect = false) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
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
      finalProblems.sort(() => Math.random() - 0.5);
      
      if (questionCount && questionCount !== 'all' && !isNaN(questionCount)) {
        const limit = parseInt(questionCount, 10);
        finalProblems = finalProblems.slice(0, limit);
      }
    }

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
    setSelectedIndices([]);
    setFeedbackState('idle');
    setGameState('level_select');
  };

  const handlePointerDown = (e, idx) => {
    if (feedbackState === 'correct') return;

    if (feedbackState === 'wrong' || feedbackState === 'partial') {
      setFeedbackState('idle');
      setSelectedIndices([idx]);
      setDragMode('select');
      playTraceSound(1);
      setIsDragging(true);
      return;
    }

    setIsDragging(true);
    const isCurrentlySelected = selectedIndices.includes(idx);
    const newMode = isCurrentlySelected ? 'deselect' : 'select';
    setDragMode(newMode);

    setSelectedIndices(prev => {
      if (newMode === 'select' && !prev.includes(idx)) {
        playTraceSound(prev.length);
        return [...prev, idx].sort((a, b) => a - b);
      } else if (newMode === 'deselect' && prev.includes(idx)) {
        playTraceSound(0, true);
        return prev.filter(i => i !== idx);
      }
      return prev;
    });
  };

  const handlePointerMove = (e) => {
    if (!isDragging || feedbackState === 'correct') return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const element = document.elementFromPoint(clientX, clientY);

    if (element && element.hasAttribute('data-token-idx')) {
      const idx = parseInt(element.getAttribute('data-token-idx'), 10);
      
      setSelectedIndices(prev => {
        if (dragMode === 'select' && !prev.includes(idx)) {
          playTraceSound(prev.length);
          return [...prev, idx].sort((a, b) => a - b);
        } else if (dragMode === 'deselect' && prev.includes(idx)) {
          playTraceSound(0, true);
          return prev.filter(i => i !== idx);
        }
        return prev;
      });
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handlePointerUp);
      window.addEventListener('touchend', handlePointerUp);
    } else {
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
    }
    return () => {
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [isDragging]);

  const nextProblem = useCallback(() => {
    setSelectedIndices([]);
    setFeedbackState('idle');
    
    setCurrentProblemIdx(prevIdx => {
      if (filteredProblems && prevIdx + 1 < filteredProblems.length) {
        return prevIdx + 1;
      } else {
        setGameState('result');
        return prevIdx;
      }
    });
  }, [filteredProblems]);

  const submitAnswer = () => {
    if (!activeProblem || selectedIndices.length === 0) return;

    const targets = activeProblem.targetIndices || (activeProblem.targetIndex !== undefined ? [activeProblem.targetIndex] : []);
    const isPerfect = JSON.stringify([...selectedIndices].sort((a,b)=>a-b)) === JSON.stringify([...targets].sort((a,b)=>a-b));

    if (isPerfect) {
      setFeedbackState('correct');
      const basePoints = 1000;
      const comboBonus = combo * 100;
      setScore(prev => prev + basePoints + comboBonus);
      setCombo(prev => prev + 1);
      setCorrectCount(prev => prev + 1);

      // 🌟 【修正箇所】1200ms → 400ms に短縮し、超高速で次へ進むように変更
      setTimeout(() => {
        nextProblem();
      }, 400);

    } else {
      setFeedbackState('wrong');
      setCombo(0);
    }
  };

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
    submitAnswer, nextProblem, addBonusScore
  };
}