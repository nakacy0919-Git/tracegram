import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GripVertical, XCircle, BookOpen, PenTool, ArrowRight, CheckCircle2, AlertCircle, Trophy, Type } from 'lucide-react';
import PronunciationMission from './PronunciationMission'; 

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

export default function SummaryScreen({ onExit, summaryData }) {
  const [leftWidth, setLeftWidth] = useState(50); 
  const [isDraggingSplit, setIsDraggingSplit] = useState(false);
  const containerRef = useRef(null);

  // 🌟 文字サイズ調整用のState ('text-base' | 'text-xl' | 'text-2xl')
  const [textSizeClass, setTextSizeClass] = useState('text-xl');

  const [currentPhase, setCurrentPhase] = useState('paragraphs'); 
  const [currentParagraphIdx, setCurrentParagraphIdx] = useState(0);
  const [currentTaskIdx, setCurrentTaskIdx] = useState(0); 
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  const [selectedIndices, setSelectedIndices] = useState([]);
  const [traceFeedback, setTraceFeedback] = useState('idle'); 
  const [isTracing, setIsTracing] = useState(false);
  const [traceMode, setTraceMode] = useState('select');

  if (!summaryData) return null;

  const currentParagraph = summaryData.paragraphs[currentParagraphIdx];
  let currentTask = null;
  if (currentPhase === 'paragraphs' && currentParagraph?.tasks) {
    currentTask = currentParagraph.tasks[currentTaskIdx];
  } else if (currentPhase === 'global' && summaryData.globalTasks) {
    currentTask = summaryData.globalTasks[currentTaskIdx];
  }

  useEffect(() => {
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setSelectedIndices([]);
    setTraceFeedback('idle');
    setIsTracing(false);
  }, [currentParagraphIdx, currentTaskIdx, currentPhase]);

  // リサイズ処理
  const handleSplitMove = (clientX) => {
    if (!isDraggingSplit || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    let newLeftWidth = ((clientX - containerRect.left) / containerRect.width) * 100;
    if (newLeftWidth < 20) newLeftWidth = 20;
    if (newLeftWidth > 80) newLeftWidth = 80;
    setLeftWidth(newLeftWidth);
  };
  const onSplitMouseMove = (e) => handleSplitMove(e.clientX);
  const onSplitTouchMove = (e) => handleSplitMove(e.touches[0].clientX);
  const stopSplitDragging = () => setIsDraggingSplit(false);

  useEffect(() => {
    if (isDraggingSplit) {
      window.addEventListener('mousemove', onSplitMouseMove);
      window.addEventListener('mouseup', stopSplitDragging);
      window.addEventListener('touchmove', onSplitTouchMove, { passive: false });
      window.addEventListener('touchend', stopSplitDragging);
    } else {
      window.removeEventListener('mousemove', onSplitMouseMove);
      window.removeEventListener('mouseup', stopSplitDragging);
      window.removeEventListener('touchmove', onSplitTouchMove);
      window.removeEventListener('touchend', stopSplitDragging);
    }
    return () => {
      window.removeEventListener('mousemove', onSplitMouseMove);
      window.removeEventListener('mouseup', stopSplitDragging);
      window.removeEventListener('touchmove', onSplitTouchMove);
      window.removeEventListener('touchend', stopSplitDragging);
    };
  }, [isDraggingSplit]);

  // トレース処理
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

  const isTraceTask = currentTask && ['trace', 'tap', 'analyze'].includes(currentTask.type);
  const allowInteraction = currentPhase === 'paragraphs' && isTraceTask && traceFeedback !== 'correct';

  const handleTracePointerDown = (e, idx) => {
    if (!allowInteraction) return;
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

    if (currentTask.type === 'tap') {
      target = [currentTask.targetIndex];
    } else if (currentTask.type === 'analyze') {
      target = [...(currentTask.targetV || []), ...(currentTask.targetO || [])].sort((a, b) => a - b);
    } else {
      target = currentTask.targetIndices || [];
      partial = currentTask.partialIndices || [];
    }

    const isPerfect = JSON.stringify(selectedIndices) === JSON.stringify(target);
    const isPartial = selectedIndices.some(idx => target.includes(idx) || partial.includes(idx));

    if (isPerfect) setTraceFeedback('correct');
    else if (isPartial) setTraceFeedback('partial');
    else {
      setTraceFeedback('wrong');
      setTimeout(() => setSelectedIndices([]), 1500);
    }
  };

  const handleNextTask = () => {
    if (currentPhase === 'paragraphs') {
      if (currentTaskIdx + 1 < currentParagraph.tasks.length) {
        setCurrentTaskIdx(prev => prev + 1); 
      } else if (currentParagraphIdx + 1 < summaryData.paragraphs.length) {
        setCurrentParagraphIdx(prev => prev + 1); 
        setCurrentTaskIdx(0);
      } else {
        if (summaryData.globalTasks && summaryData.globalTasks.length > 0) {
          setCurrentPhase('global');
          setCurrentTaskIdx(0);
        } else {
          setCurrentPhase('completed');
        }
      }
    } else if (currentPhase === 'global') {
      if (currentTaskIdx + 1 < summaryData.globalTasks.length) {
        setCurrentTaskIdx(prev => prev + 1); 
      } else {
        setCurrentPhase('completed');
      }
    }
  };

  const handleOptionSelect = (idx) => {
    if (isAnswerRevealed) return;
    setSelectedOption(idx);
    setIsAnswerRevealed(true); 
  };

  // 🌟 修正：左画面（長文表示エリア）のレンダリング
  const renderLeftPane = () => {
    // さまざまな文字サイズクラスに対応する行間を動的に設定
    const leadingClass = textSizeClass === 'text-base' ? 'leading-[2.5rem]' : textSizeClass === 'text-xl' ? 'leading-[3.5rem]' : 'leading-[4.2rem]';

    return (
      <div 
        className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 text-slate-700 font-medium w-full ${textSizeClass} ${leadingClass} ${isTraceTask ? 'touch-none' : ''}`}
        onPointerMove={handleTracePointerMove}
        onPointerUp={handleTracePointerUp}
        onTouchMove={handleTracePointerMove}
        onTouchEnd={handleTracePointerUp}
      >
        {summaryData.paragraphs.map((paragraph, pIdx) => {
          const isActive = currentPhase === 'paragraphs' && pIdx === currentParagraphIdx;
          const isPast = currentPhase === 'global' || currentPhase === 'completed' || pIdx < currentParagraphIdx;
          const isFuture = currentPhase === 'paragraphs' && pIdx > currentParagraphIdx;

          // 🌟 段落ごとの状態に応じたスタイル付け
          let opacityClass = "transition-all duration-300 mb-8 last:mb-0 ";
          if (isFuture) opacityClass += "opacity-25 pointer-events-none select-none"; // 未来の段落はうっすら
          if (isPast && currentPhase === 'paragraphs') opacityClass += "opacity-50 pointer-events-none"; // 終わった段落も少し薄く

          return (
            <div key={paragraph.p_id} className={opacityClass}>
              {/* 🌟 段落カウンターの表示 */}
              <div className={`text-xs font-black tracking-wider uppercase mb-1 flex items-center gap-1.5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>
                <span>Paragraph {pIdx + 1}</span>
                <span className="opacity-60 font-bold">(第{pIdx + 1}段落)</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />}
              </div>

              {/* テキストコンテンツ */}
              <div className={isActive ? 'bg-indigo-50/20 p-2 rounded-xl border border-indigo-100/40 shadow-inner' : ''}>
                {isActive ? (
                  // アクティブな段落はインタラクティブに操作可能
                  paragraph.tokens.map((token, idx) => {
                    const isSelected = selectedIndices.includes(idx);
                    let spanClass = "inline-block px-1 mx-0.5 rounded transition-all cursor-pointer select-none ";
                    
                    if (isSelected) {
                      if (traceFeedback === 'wrong') spanClass += "bg-rose-200 text-rose-800";
                      else if (traceFeedback === 'partial') spanClass += "bg-amber-200 text-amber-900";
                      else spanClass += "bg-cyan-200 text-cyan-900 shadow-sm";
                    } else {
                      spanClass += "hover:bg-slate-100 text-slate-800 font-bold";
                    }
                    
                    return (
                      <span 
                        key={idx} 
                        data-token-idx={idx} 
                        onPointerDown={(e) => handleTracePointerDown(e, idx)} 
                        className={spanClass}
                      >
                        {token}
                      </span>
                    );
                  })
                ) : (
                  // それ以外の段落はプレーンテキストとして流す
                  <span className="text-slate-600 font-normal">
                    {paragraph.tokens.map((t, idx) => {
                      // 終わった段落の正解トレース箇所に薄い下線を入れておく
                      const isTarget = paragraph.traceTask?.targetIndices?.includes(idx);
                      return (
                        <span key={idx} className={isTarget ? "border-b border-emerald-300 text-slate-800" : ""}>
                          {t}{' '}
                        </span>
                      );
                    })}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderRightPane = () => {
    if (currentPhase === 'completed') {
      return (
        <div className="bg-white rounded-3xl p-10 shadow-md border-2 border-emerald-100 flex-1 flex flex-col items-center justify-center text-center">
          <Trophy size={64} className="text-yellow-400 mb-6 drop-shadow-md" />
          <h2 className="text-3xl font-black text-slate-800 mb-4">CHALLENGE CLEARED!</h2>
          <p className="text-slate-500 font-bold mb-8">長文の論理展開を完璧に捉え切りました。</p>
          <button onClick={onExit} className="px-10 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl transition-all shadow-md">
            メニューへ戻る
          </button>
        </div>
      );
    }

    if (!currentTask) return null;

    if (currentTask.type === 'voice') {
      return (
        <div className="bg-white rounded-3xl p-8 shadow-md border-2 border-teal-100 flex-1 flex flex-col">
           <span className="inline-block bg-indigo-100 text-indigo-700 font-black text-sm px-3 py-1 rounded-full mb-4 w-max">
            Final Task: Read Aloud
          </span>
          <h3 className="text-xl font-black text-slate-800 mb-6 leading-relaxed">
            {currentTask.instruction}
          </h3>
          <div className="flex-1">
            <PronunciationMission 
              targetSentence={currentTask.targetSentence} 
              onComplete={handleNextTask} 
            />
          </div>
        </div>
      );
    }

    if (currentTask.type === 'select') {
      const isGlobal = currentPhase === 'global';
      return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border-2 border-teal-100 flex-1 flex flex-col">
          <span className={`inline-block font-black text-sm px-3 py-1 rounded-full mb-4 w-max ${isGlobal ? 'bg-indigo-100 text-indigo-700' : 'bg-teal-100 text-teal-700'}`}>
            {isGlobal ? 'Comprehension' : 'Multiple Choice'}
          </span>
          
          <h3 className="text-xl font-black text-slate-800 mb-6 leading-relaxed">{currentTask.instruction}</h3>
          
          <div className="flex flex-col gap-3">
            {currentTask.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              let btnClass = "border-slate-200 hover:border-teal-400 hover:bg-teal-50 text-slate-700";
              if (isAnswerRevealed) {
                if (option.isCorrect) btnClass = "border-emerald-500 bg-emerald-50 text-emerald-800";
                else if (isSelected) btnClass = "border-rose-500 bg-rose-50 text-rose-800";
                else btnClass = "border-slate-200 opacity-50";
              }
              return (
                <button key={idx} onClick={() => handleOptionSelect(idx)} disabled={isAnswerRevealed} className={`text-left p-4 rounded-xl border-2 font-bold transition-all ${btnClass}`}>
                  {option.text}
                </button>
              );
            })}
          </div>

          {isAnswerRevealed && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-slate-600 font-bold text-sm leading-relaxed">
                <span className="text-indigo-500 font-black mr-2">解説:</span>
                {currentTask.options[selectedOption].explanation}
              </p>
              <button onClick={handleNextTask} className="mt-4 w-full py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-white font-black transition-all flex justify-center items-center gap-2">
                次へ進む <ArrowRight size={18} />
              </button>
            </motion.div>
          )}
        </div>
      );
    }

    return (
      <div className="bg-white rounded-3xl p-8 shadow-md border-2 border-teal-100 flex-1 flex flex-col">
        <span className="inline-block bg-teal-100 text-teal-700 font-black text-sm px-3 py-1 rounded-full mb-4 w-max">
          Task: {currentTask.type.toUpperCase()}
        </span>
        <h3 className="text-xl font-black text-slate-800 mb-6 leading-relaxed">{currentTask.instruction}</h3>
        
        <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 p-6 text-center">
          <AnimatePresence mode="wait">
            {traceFeedback === 'idle' && (
              <motion.p key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-slate-400 font-bold">左の長文で正解だと思う部分をなぞるかタップしてください。</motion.p>
            )}
            {traceFeedback === 'wrong' && (
              <motion.div key="wrong" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-rose-500 font-black flex flex-col items-center gap-2"><XCircle size={32} /><p>不正解。もう一度よく探してみましょう。</p></motion.div>
            )}
            {traceFeedback === 'partial' && (
              <motion.div key="partial" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-amber-500 font-black flex flex-col items-center gap-2"><AlertCircle size={32} /><p>惜しい！かすっていますが、過不足なく選びましょう。</p></motion.div>
            )}
            {traceFeedback === 'correct' && (
              <motion.div key="correct" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-emerald-500 font-black flex flex-col items-center gap-2">
                <CheckCircle2 size={40} />
                <p className="text-xl">PERFECT!</p>
                <p className="text-sm mt-2 text-slate-600 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">{currentTask.explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {traceFeedback === 'correct' ? (
          <button onClick={handleNextTask} className="mt-6 w-full py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-black text-lg transition-all shadow-md flex justify-center items-center gap-2 animate-bounce">
            次のタスクへ <ArrowRight size={20} />
          </button>
        ) : (
          <button onClick={judgeTrace} disabled={selectedIndices.length === 0} className={`mt-6 w-full py-4 rounded-xl font-black text-lg transition-all shadow-md flex justify-center items-center gap-2 ${selectedIndices.length === 0 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-400 text-white'}`}>
            判定する！
          </button>
        )}
      </div>
    );
  };

  return (
    <div className={`flex-1 flex flex-col h-full w-full bg-slate-50 relative ${isDraggingSplit ? 'select-none' : ''}`}>
      <div className="flex justify-between items-center px-6 py-3 bg-white border-b border-slate-200 shadow-sm z-20">
        <div className="flex items-center gap-4">
          <button onClick={onExit} className="text-rose-500 hover:scale-110 transition-transform">
            <XCircle size={28} />
          </button>
          <div>
            <span className="text-xs font-black text-white bg-indigo-500 px-2 py-0.5 rounded-full mr-2">{summaryData.level}</span>
            <span className="text-lg font-black text-slate-700">{summaryData.title}</span>
          </div>
        </div>
        <div className="text-sm font-bold text-slate-400">要約チャレンジモード</div>
      </div>

      <div ref={containerRef} className="flex-1 flex w-full h-full overflow-hidden relative">
        {/* 📖 左ペイン：長文表示エリア（幅いっぱい対応） */}
        <div style={{ width: `${leftWidth}%` }} className="h-full overflow-y-auto bg-slate-50 p-4 md:p-8 flex flex-col">
          <div className="w-full flex justify-between items-center mb-4 border-b border-slate-200 pb-2 flex-shrink-0">
            <div className="flex items-center gap-2 text-indigo-600">
              <BookOpen size={24} />
              <h2 className="text-xl font-black">Reading Passage</h2>
            </div>
            
            {/* 🌟 文字サイズ調整コントローラー */}
            <div className="flex bg-slate-200/60 p-1 rounded-xl items-center gap-1">
              <button 
                onClick={() => setTextSizeClass('text-base')} 
                className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${textSizeClass === 'text-base' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                小
              </button>
              <button 
                onClick={() => setTextSizeClass('text-xl')} 
                className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${textSizeClass === 'text-xl' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                中
              </button>
              <button 
                onClick={() => setTextSizeClass('text-2xl')} 
                className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${textSizeClass === 'text-2xl' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                大
              </button>
            </div>
          </div>
          <div className="w-full flex-1">
            {renderLeftPane()}
          </div>
        </div>

        <div onMouseDown={() => setIsDraggingSplit(true)} onTouchStart={() => setIsDraggingSplit(true)} className="w-4 flex flex-col items-center justify-center bg-slate-200/50 hover:bg-cyan-200 cursor-col-resize group transition-colors shadow-inner z-10">
          <div className="h-16 w-1.5 bg-slate-400 group-hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors">
            <GripVertical size={12} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div style={{ width: `${100 - leftWidth}%` }} className="h-full overflow-y-auto bg-slate-100 p-6 md:p-10 shadow-inner">
          <AnimatePresence mode="wait">
            <motion.div key={`${currentPhase}-${currentParagraphIdx}-${currentTaskIdx}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-2xl mx-auto h-full flex flex-col">
              <div className="flex items-center gap-2 mb-6 text-teal-600">
                <PenTool size={24} />
                <h2 className="text-2xl font-black">Mission</h2>
              </div>
              {renderRightPane()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}