"use client";
import { useState, useRef, useCallback } from 'react';
import { PROBLEM_SETS } from '../data/mockData';

let audioCtx = null;
const initAudio = () => {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
};

const playSound = (type) => {
  try {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    
    if (type === 'tick') {
      osc.type = 'sine'; osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(900, audioCtx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.start(); osc.stop(audioCtx.currentTime + 0.05);
    } else if (type === 'success') {
      osc.type = 'triangle'; osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1046.50, audioCtx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
      osc.start(); osc.stop(audioCtx.currentTime + 0.4);
    } else if (type === 'fail') {
      osc.type = 'sawtooth'; osc.frequency.setValueAtTime(180, audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(120, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
      osc.start(); osc.stop(audioCtx.currentTime + 0.15);
    }
  } catch (e) { console.error(e); }
};

export const useTrace = (categories) => {
  // ★ 状態管理を「select(選択)」「playing(プレイ中)」「result(結果)」の3フェーズに変更
  const [gameState, setGameState] = useState('select'); 
  const [activeCategory, setActiveCategory] = useState(null);
  
  const [currentProblemIdx, setCurrentProblemIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);

  const [selectedIndices, setSelectedIndices] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [feedbackState, setFeedbackState] = useState('idle');
  const mainContainerRef = useRef(null);

  const activeProblem = activeCategory?.problems[currentProblemIdx];

  // ★ ゲームスタート処理
  const startGame = useCallback((category) => {
    setActiveCategory(category);
    setCurrentProblemIdx(0);
    setScore(0);
    setCombo(0);
    setGameState('playing');
  }, []);

  // ★ メニューに戻る処理
  const backToMenu = useCallback(() => {
    setGameState('select');
    setActiveCategory(null);
  }, []);

  const nextProblem = useCallback(() => {
    if (currentProblemIdx < activeCategory.problems.length - 1) {
      setCurrentProblemIdx(prev => prev + 1);
    } else {
      setGameState('result'); // 全問終了でリザルト画面へ
    }
  }, [currentProblemIdx, activeCategory]);

  const triggerSuccess = useCallback(() => {
    setFeedbackState('correct'); playSound('success');
    setCombo(prev => {
      const newCombo = prev + 1;
      const bonus = newCombo >= 3 ? newCombo * 50 : 0;
      setScore(s => s + 100 + bonus);
      return newCombo;
    });
    setTimeout(() => {
      setFeedbackState('idle'); setSelectedIndices([]); nextProblem();
    }, 1000);
  }, [nextProblem]);

  const triggerFail = useCallback(() => {
    setFeedbackState('wrong'); playSound('fail');
    setCombo(0);
    setTimeout(() => {
      setFeedbackState('idle'); setSelectedIndices([]); nextProblem();
    }, 1000);
  }, [nextProblem]);

  const handlePointerDown = useCallback((e, index) => {
    initAudio();
    if (feedbackState !== 'idle' || gameState !== 'playing') return;

    setIsDragging(true);
    setSelectedIndices([index]);

    if (!activeProblem.targetIndices.includes(index)) {
      setIsDragging(false);
      triggerFail();
    } else {
      playSound('tick');
    }
  }, [activeProblem, feedbackState, gameState, triggerFail]);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging || feedbackState !== 'idle') return;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const element = document.elementFromPoint(clientX, clientY);

    if (element && element.hasAttribute('data-token-idx')) {
      const idx = parseInt(element.getAttribute('data-token-idx'), 10);
      
      setSelectedIndices(prev => {
        if (!prev.includes(idx)) {
          if (!activeProblem.targetIndices.includes(idx)) {
            setIsDragging(false);
            triggerFail();
            return [...prev, idx];
          }
          playSound('tick');
          return [...prev, idx].sort((a, b) => a - b);
        }
        return prev;
      });
    }
  }, [isDragging, feedbackState, activeProblem, triggerFail]);

  const handlePointerUp = useCallback((e) => {
    if (!isDragging || feedbackState !== 'idle') return;
    setIsDragging(false);
    
    const isCorrect = selectedIndices.length === activeProblem.targetIndices.length;
    isCorrect ? triggerSuccess() : triggerFail();
  }, [isDragging, feedbackState, selectedIndices, activeProblem, triggerSuccess, triggerFail]);

  return {
    gameState, availableCategories: categories, activeCategory, activeProblem, 
    currentProblemIdx, score, combo, selectedIndices, feedbackState, mainContainerRef,
    startGame, backToMenu, handlePointerDown, handlePointerMove, handlePointerUp
  };
};