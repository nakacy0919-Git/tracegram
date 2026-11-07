import { playTraceSound } from '../lib/traceAudio';
import { updateTokenSelection, sameSelectedIndices } from '../lib/traceSelection';
import { useState, useEffect, useRef } from 'react';
import { getProblemLevel } from '../data/mockData';

const SESSION_KEY = 'tracegram_active_session';

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
  const firstAttemptedIdsRef = useRef(new Set());
  const [categoryStats, setCategoryStats] = useState({});

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
    firstAttemptedIdsRef.current = new Set();
    setCategoryStats({});
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

  const resumeGame = (course, saved) => {
    if (!course?.problems || !saved || saved.categoryId !== course.categoryId || !Array.isArray(saved.problemIds)) return false;
    const byId = new Map(course.problems.map(p => [p.id, p]));
    const problems = saved.problemIds.map(id => byId.get(id)).filter(Boolean);
    if (problems.length !== saved.problemIds.length || !problems.length) return false;
    const index = Math.min(Math.max(0, Number(saved.index) || 0), problems.length - 1);
    clearAdvance();
    selectedIndicesRef.current = [];
    feedbackRef.current = 'idle';
    failedProblemIdsRef.current = new Set((Array.isArray(saved.failedProblemIds) ? saved.failedProblemIds : []).filter(id => typeof id === 'string'));
    firstAttemptedIdsRef.current = new Set((Array.isArray(saved.firstAttemptedIds) ? saved.firstAttemptedIds : []).filter(id => typeof id === 'string'));
    setCategoryStats(saved.categoryStats && typeof saved.categoryStats === 'object' && !Array.isArray(saved.categoryStats) ? saved.categoryStats : {});
    draggingRef.current = false;
    setActiveCategory(course);
    setSelectedLevel(saved.level || 1);
    setFilteredProblems(problems);
    setCurrentProblemIdx(index);
    setActiveProblem(problems[index]);
    setScore(Number(saved.score) || 0);
    setCombo(Number(saved.combo) || 0);
    setCorrectCount(Number(saved.correctCount) || 0);
    setFirstTryCount(Number(saved.firstTryCount) || 0);
    setWrongAttempts(Number(saved.wrongAttempts) || 0);
    setSelectedIndices([]);
    setFeedbackState('idle');
    setGameState('game');
    return true;
  };

  useEffect(() => {
    if (gameState !== 'game' || !activeCategory?.categoryId || !filteredProblems.length) return;
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify({
        categoryId: activeCategory.categoryId,
        level: selectedLevel,
        problemIds: filteredProblems.map(p => p.id),
        index: currentProblemIdx,
        score,
        combo,
        correctCount,
        firstTryCount,
        wrongAttempts,
        failedProblemIds: [...failedProblemIdsRef.current],
        firstAttemptedIds: [...firstAttemptedIdsRef.current],
        categoryStats,
        mixConfig: activeCategory.mixConfig || null,
        at: Date.now(),
      }));
    } catch {}
  }, [gameState, activeCategory, selectedLevel, filteredProblems, currentProblemIdx, score, combo, correctCount, firstTryCount, wrongAttempts, categoryStats]);

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
      try { localStorage.removeItem(SESSION_KEY); } catch {}
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
    const perfect = sameSelectedIndices(chosen, targets);

    // Record a category's *first* response, not just the eventual retry result.
    // Mixed sessions use the originating grammar category for each question.
    const sourceId = activeProblem.sourceCategoryId || activeCategory?.categoryId;
    const isFirstAttempt = Boolean(activeProblem.id) && !firstAttemptedIdsRef.current.has(activeProblem.id);
    if (isFirstAttempt) firstAttemptedIdsRef.current.add(activeProblem.id);
    if (sourceId) {
      setCategoryStats(previous => {
        const prior = previous[sourceId] || { attempted: 0, firstCorrect: 0, incorrect: 0 };
        return {
          ...previous,
          [sourceId]: {
            attempted: prior.attempted + (isFirstAttempt ? 1 : 0),
            firstCorrect: prior.firstCorrect + (isFirstAttempt && perfect ? 1 : 0),
            incorrect: prior.incorrect + (perfect ? 0 : 1),
          }
        };
      });
    }

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
      advanceTimerRef.current = setTimeout(() => nextProblem(), 1700);
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
      const next = updateTokenSelection(prev, idx, newMode);
      if (next !== prev) playTraceSound(prev.length, newMode === 'deselect');
      return next;
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
      const next = updateTokenSelection(prev, idx, dragModeRef.current);
      if (next !== prev) playTraceSound(prev.length, dragModeRef.current === 'deselect');
      return next;
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
    currentProblemIdx, score, combo, correctCount, firstTryCount, wrongAttempts, categoryStats, selectedIndices, feedbackState,
    mainContainerRef, lastBonus, selectedLevel, filteredProblems,
    setGameState, selectMainCategory, selectSubCategory, startGame, resumeGame,
    backToMain, backToSub, backToLevelSelect,
    handlePointerDown, handlePointerMove, handlePointerUp,
    submitAnswer, nextProblem, resetForRetry, addBonusScore
  };
}