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

export function useTrace() {
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [traceFeedback, setTraceFeedback] = useState('idle'); 
  const [isTracing, setIsTracing] = useState(false);
  const [traceMode, setTraceMode] = useState('select');

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

  const handlePointerDown = (e, idx) => {
    if (traceFeedback === 'correct') return;
    setIsTracing(true);
    const isCurrentlySelected = selectedIndices.includes(idx);
    const newTraceMode = isCurrentlySelected ? 'deselect' : 'select';
    setTraceMode(newTraceMode);
    updateTraceSelection(idx, newTraceMode);
    setTraceFeedback('idle');
  };

  const handlePointerMove = (e) => {
    if (!isTracing || traceFeedback === 'correct') return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const element = document.elementFromPoint(clientX, clientY);

    if (element && element.hasAttribute('data-token-idx')) {
      const idx = parseInt(element.getAttribute('data-token-idx'), 10);
      updateTraceSelection(idx, traceMode);
    }
  };

  const handlePointerUp = () => setIsTracing(false);

  useEffect(() => {
    if (isTracing) {
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
  }, [isTracing]);

  return {
    selectedIndices,
    setSelectedIndices,
    traceFeedback,
    setTraceFeedback,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp
  };
}