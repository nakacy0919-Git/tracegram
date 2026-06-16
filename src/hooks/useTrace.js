import { useState, useRef, useEffect } from 'react';

export function useTrace(categories) {
  // ★ 変更：初期状態を 'main_select'（5大カテゴリ選択）に変更
  const [gameState, setGameState] = useState('main_select'); 
  const [activeMain, setActiveMain] = useState(null); // 'SUBJECT', 'MODIFIER' など
  const [activeCategory, setActiveCategory] = useState(null); // サブカテゴリのデータ
  const [selectedLevel, setSelectedLevel] = useState(null); // 1 | 2 | 3
  const [filteredProblems, setFilteredProblems] = useState([]); 
  const [currentProblemIdx, setCurrentProblemIdx] = useState(0);
  
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [correctCount, setCorrectCount] = useState(0); 
  
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [feedbackState, setFeedbackState] = useState('idle');
  
  const [isDragging, setIsDragging] = useState(false);
  const [dragMode, setDragMode] = useState('select'); 
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0); 
  const [lastBonus, setLastBonus] = useState(null);

  const mainContainerRef = useRef(null);
  const audioCtxRef = useRef(null);
  const timerIntervalRef = useRef(null); 

  const activeProblem = filteredProblems[currentProblemIdx];

  const playTraceSound = (count, isDeselect = false) => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = 'triangle';
      const baseFreq = isDeselect ? 300 : 440;
      osc.frequency.setValueAtTime(baseFreq + (count * 30), ctx.currentTime);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.warn("Audio play failed", e);
    }
  };

  // ★ 追加：大カテゴリを選択
  const selectMainCategory = (mainId) => {
    setActiveMain(mainId);
    setGameState('sub_select');
  };

  // ★ 追加：サブカテゴリ（クエスト）を選択
  const selectSubCategory = (category) => {
    setActiveCategory(category);
    setGameState('level_select');
  };

  const startGame = (level) => {
    setSelectedLevel(level);
    const levelKey = level === 1 ? '-b-' : level === 2 ? '-i-' : '-a-';
    const filtered = activeCategory.problems.filter(p => p.id.includes(levelKey));
    
    setFilteredProblems(filtered);
    setCurrentProblemIdx(0);
    setScore(0);
    setCombo(0);
    setCorrectCount(0);
    setSelectedIndices([]);
    setFeedbackState('idle');
    setGameState('play');
    setStartTime(Date.now());
    setElapsedTime(0);
    setLastBonus(null);
  };

  useEffect(() => {
    if (gameState === 'play') {
      timerIntervalRef.current = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [gameState]);

  // ★ 戻るボタンの細分化
  const backToMain = () => {
    setGameState('main_select');
    setActiveMain(null);
  };

  const backToSub = () => {
    setGameState('sub_select');
    setActiveCategory(null);
    setSelectedLevel(null);
  };

  const backToLevelSelect = () => {
    setGameState('level_select');
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
  };

  const handlePointerDown = (e, idx) => {
    if (feedbackState !== 'idle') return;
    setIsDragging(true);
    const isCurrentlySelected = selectedIndices.includes(idx);
    const newDragMode = isCurrentlySelected ? 'deselect' : 'select';
    setDragMode(newDragMode);
    updateSelection(idx, newDragMode);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || feedbackState !== 'idle') return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const element = document.elementFromPoint(clientX, clientY);

    if (element && element.hasAttribute('data-token-idx')) {
      const idx = parseInt(element.getAttribute('data-token-idx'), 10);
      updateSelection(idx, dragMode);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const updateSelection = (idx, mode) => {
    setSelectedIndices(prev => {
      if (mode === 'select' && !prev.includes(idx)) {
        playTraceSound(prev.length);
        return [...prev, idx].sort((a, b) => a - b);
      } else if (mode === 'deselect' && prev.includes(idx)) {
        playTraceSound(0, true);
        return prev.filter(i => i !== idx);
      }
      return prev;
    });
  };

  const submitAnswer = () => {
    if (selectedIndices.length === 0 || feedbackState !== 'idle') return;

    const correctIndices = activeProblem.targetIndices;
    const isCorrect = JSON.stringify(selectedIndices) === JSON.stringify(correctIndices);

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
      const timeTaken = (Date.now() - startTime) / 1000;
      let speedBonus = 0;
      if (timeTaken <= 3) speedBonus = 50;
      else if (timeTaken <= 6) speedBonus = 30;
      else if (timeTaken <= 10) speedBonus = 10;

      const newCombo = combo + 1;
      const comboBonus = newCombo >= 3 ? 50 : 0;

      const earnedPoints = 100 + speedBonus + comboBonus;
      setScore(prev => prev + earnedPoints);
      setCombo(newCombo);
      setLastBonus({ speed: speedBonus, combo: comboBonus, points: earnedPoints });
      setFeedbackState('correct');
    } else {
      setCombo(0);
      setLastBonus(null);
      setFeedbackState('wrong');
    }

    setTimeout(() => {
      if (currentProblemIdx + 1 < filteredProblems.length) {
        setCurrentProblemIdx(prev => prev + 1);
        setSelectedIndices([]);
        setFeedbackState('idle');
        setStartTime(Date.now());
      } else {
        setGameState('result');
      }
    }, 600);
  };

  return {
    gameState, setGameState,availableCategories: categories, activeMain, activeCategory, activeProblem,
    currentProblemIdx, score, combo, correctCount, selectedIndices, feedbackState, mainContainerRef,
    lastBonus, elapsedTime, selectedLevel, filteredProblems,
    selectMainCategory, selectSubCategory, startGame, 
    backToMain, backToSub, backToLevelSelect, // ★ 戻る関数を追加
    handlePointerDown, handlePointerMove, handlePointerUp, submitAnswer
  };
}