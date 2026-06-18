import { useState, useEffect } from 'react';

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

export function useSummaryTrace(currentTask, currentPhase) {
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [traceFeedback, setTraceFeedback] = useState('idle'); 
  const [isTracing, setIsTracing] = useState(false);
  const [traceMode, setTraceMode] = useState('select');

  const isTraceTask = currentTask && ['trace', 'tap', 'analyze'].includes(currentTask.type);
  const allowInteraction = currentPhase === 'paragraphs' && isTraceTask && traceFeedback !== 'correct';

  const updateTraceSelection = (idx, mode) => {
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

  const handleTracePointerDown = (e, idx) => {
    if (!allowInteraction) return;
    
    // 不正解のあとに触れたら、即座にリセットして新しくなぞり始める
    if (traceFeedback === 'wrong' || traceFeedback === 'partial') {
      setTraceFeedback('idle');
      setSelectedIndices([idx]);
      setTraceMode('select');
      playTraceSound(1);
      setIsTracing(true);
      return;
    }

    setIsTracing(true);
    const isCurrentlySelected = selectedIndices.includes(idx);
    const newTraceMode = isCurrentlySelected ? 'deselect' : 'select';
    setTraceMode(newTraceMode);
    updateTraceSelection(idx, newTraceMode);
    setTraceFeedback('idle');
  };

  const handleTracePointerMove = (e) => {
    if (!isTracing || !allowInteraction) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const element = document.elementFromPoint(clientX, clientY);

    if (element && element.hasAttribute('data-token-idx')) {
      const idx = parseInt(element.getAttribute('data-token-idx'), 10);
      updateTraceSelection(idx, traceMode);
    }
  };

  const handleTracePointerUp = () => setIsTracing(false);

  // 画面外で指を離した時の処理
  useEffect(() => {
    if (isTracing) {
      window.addEventListener('mouseup', handleTracePointerUp);
      window.addEventListener('touchend', handleTracePointerUp);
    } else {
      window.removeEventListener('mouseup', handleTracePointerUp);
      window.removeEventListener('touchend', handleTracePointerUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleTracePointerUp);
      window.removeEventListener('touchend', handleTracePointerUp);
    };
  }, [isTracing]);

  const judgeTrace = () => {
    if (selectedIndices.length === 0 || !currentTask) return;
    
    let target = [];
    let partial = [];

    if (currentTask.type === 'tap') target = [currentTask.targetIndex];
    else if (currentTask.type === 'analyze') target = [...(currentTask.targetV || []), ...(currentTask.targetO || [])].sort((a, b) => a - b);
    else {
      target = currentTask.targetIndices || [];
      partial = currentTask.partialIndices || [];
    }

    const isPerfect = JSON.stringify(selectedIndices) === JSON.stringify(target);
    const isPartial = selectedIndices.some(idx => target.includes(idx) || partial.includes(idx));

    if (isPerfect) setTraceFeedback('correct');
    else if (isPartial) setTraceFeedback('partial');
    else {
      setTraceFeedback('wrong');
      // 間違えたら800ミリ秒後に自動クリア
      setTimeout(() => {
        setTraceFeedback(prev => prev === 'wrong' ? 'idle' : prev);
        setSelectedIndices([]);
      }, 800);
    }
  };

  const handleShowAnswer = () => {
    if (!currentTask) return;
    let target = [];
    if (currentTask.type === 'tap') target = [currentTask.targetIndex];
    else if (currentTask.type === 'analyze') target = [...(currentTask.targetV || []), ...(currentTask.targetO || [])].sort((a, b) => a - b);
    else target = currentTask.targetIndices || [];

    setSelectedIndices(target);
    setTraceFeedback('correct'); 
  };

  return {
    selectedIndices,
    setSelectedIndices,
    traceFeedback,
    setTraceFeedback,
    isTraceTask,
    handleTracePointerDown,
    handleTracePointerMove,
    handleTracePointerUp,
    judgeTrace,
    handleShowAnswer
  };
}