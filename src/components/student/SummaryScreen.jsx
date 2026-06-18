import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GripVertical, XCircle, BookOpen, PenTool, ArrowRight, CheckCircle2, AlertCircle, Trophy, RefreshCcw, Eye, ArrowLeftRight } from 'lucide-react';
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

  const [isSwapped, setIsSwapped] = useState(false);
  const [textSizeClass, setTextSizeClass] = useState('text-xl');
  const [fontClass, setFontClass] = useState('font-sans'); 
  const [readAloudTarget, setReadAloudTarget] = useState('mission'); 

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

  const handleSplitMove = (clientX) => {
    if (!isDraggingSplit || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    let rawLeftWidth = ((clientX - containerRect.left) / containerRect.width) * 100;
    
    if (rawLeftWidth < 20) rawLeftWidth = 20;
    if (rawLeftWidth > 80) rawLeftWidth = 80;

    if (isSwapped) {
      setLeftWidth(100 - rawLeftWidth);
    } else {
      setLeftWidth(rawLeftWidth);
    }
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

  const handleNextTask = () => {
    if (currentPhase === 'paragraphs') {
      if (currentTaskIdx + 1 < currentParagraph.tasks.length) setCurrentTaskIdx(prev => prev + 1); 
      else if (currentParagraphIdx + 1 < summaryData.paragraphs.length) {
        setCurrentParagraphIdx(prev => prev + 1); 
        setCurrentTaskIdx(0);
      } else {
        if (summaryData.globalTasks && summaryData.globalTasks.length > 0) {
          setCurrentPhase('global');
          setCurrentTaskIdx(0);
        } else setCurrentPhase('completed');
      }
    } else if (currentPhase === 'global') {
      if (currentTaskIdx + 1 < summaryData.globalTasks.length) setCurrentTaskIdx(prev => prev + 1); 
      else setCurrentPhase('completed');
    }
  };

  const handleOptionSelect = (idx) => {
    if (isAnswerRevealed) return;
    setSelectedOption(idx);
    setIsAnswerRevealed(true); 
  };

  // 📖 左画面（長文表示エリア）
  const renderReadingPane = () => {
    const leadingClass = textSizeClass === 'text-base' ? 'leading-[2.5rem]' : textSizeClass === 'text-xl' ? 'leading-[3.5rem]' : 'leading-[4.2rem]';

    return (
      <div className="h-full overflow-y-auto bg-slate-50 p-4 md:p-8 flex flex-col">
        <div className="w-full flex justify-between items-center mb-4 border-b border-slate-200 pb-2 flex-shrink-0">
          <div className="flex items-center gap-2 text-indigo-600">
            <BookOpen size={24} />
            <h2 className="text-xl font-black">Reading Passage</h2>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsSwapped(!isSwapped)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-200/60 hover:bg-indigo-100 text-slate-500 hover:text-indigo-600 text-xs font-black transition-all"
              title="左右の画面を入れ替える"
            >
              <ArrowLeftRight size={16} /> 入替
            </button>

            <div className="flex bg-slate-200/60 p-1 rounded-xl items-center gap-1 hidden md:flex">
              <button onClick={() => setFontClass('font-sans')} className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${fontClass === 'font-sans' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>ゴシック</button>
              <button onClick={() => setFontClass('font-serif')} className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${fontClass === 'font-serif' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>明朝</button>
            </div>
            <div className="flex bg-slate-200/60 p-1 rounded-xl items-center gap-1 hidden lg:flex">
              <button onClick={() => setTextSizeClass('text-base')} className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${textSizeClass === 'text-base' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>小</button>
              <button onClick={() => setTextSizeClass('text-xl')} className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${textSizeClass === 'text-xl' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>中</button>
              <button onClick={() => setTextSizeClass('text-2xl')} className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${textSizeClass === 'text-2xl' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>大</button>
            </div>
          </div>
        </div>

        <div className="w-full mt-2 pb-16">
          <div 
            className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 text-slate-700 font-medium w-full h-fit break-words ${textSizeClass} ${leadingClass} ${fontClass} ${isTraceTask ? 'touch-none' : ''}`}
            onPointerMove={handleTracePointerMove}
            onPointerUp={handleTracePointerUp}
            onTouchMove={handleTracePointerMove}
            onTouchEnd={handleTracePointerUp}
          >
            {summaryData.paragraphs.map((paragraph, pIdx) => {
              const isActive = currentPhase === 'paragraphs' && pIdx === currentParagraphIdx;
              const isPast = currentPhase === 'global' || currentPhase === 'completed' || pIdx < currentParagraphIdx;
              const isFuture = currentPhase === 'paragraphs' && pIdx > currentParagraphIdx;

              let opacityClass = "transition-all duration-300 mb-8 last:mb-0 ";
              if (isFuture) opacityClass += "opacity-25 pointer-events-none select-none"; 
              if (isPast && currentPhase === 'paragraphs') opacityClass += "opacity-50 pointer-events-none"; 

              return (
                <div key={paragraph.p_id} className={opacityClass}>
                  <div className={`text-xs font-sans tracking-wider uppercase mb-1 flex items-center gap-1.5 ${isActive ? 'text-indigo-600 font-black' : 'text-slate-400 font-bold'}`}>
                    <span>Paragraph {pIdx + 1}</span>
                    <span className="opacity-60">(第{pIdx + 1}段落)</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />}
                  </div>

                  <div className={isActive ? 'bg-indigo-50/20 p-3 rounded-xl border-2 border-indigo-200 shadow-inner' : 'bg-slate-50/50 p-3 rounded-xl border border-slate-100'}>
                    {paragraph.tokens.map((token, idx) => {
                      let spanClass = "inline-block px-1.5 py-1 transition-all select-none ";
                      
                      if (isActive) {
                        spanClass += "cursor-pointer ";
                        const isSelected = selectedIndices.includes(idx);
                        const isPrevSelected = isSelected && selectedIndices.includes(idx - 1);
                        const isNextSelected = isSelected && selectedIndices.includes(idx + 1);
                        
                        if (isSelected) {
                          if (traceFeedback === 'wrong') spanClass += "bg-rose-200 text-rose-800 ";
                          else if (traceFeedback === 'partial') spanClass += "bg-amber-200 text-amber-900 ";
                          else spanClass += "bg-cyan-200 text-cyan-900 shadow-[0_2px_10px_rgba(165,243,252,0.4)] ";
                          
                          if (!isPrevSelected && !isNextSelected) spanClass += "rounded-lg ";
                          else if (!isPrevSelected) spanClass += "rounded-l-lg ";
                          else if (!isNextSelected) spanClass += "rounded-r-lg ";
                        } else {
                          spanClass += "hover:bg-slate-100 text-slate-800 rounded-lg ";
                        }
                      } else {
                        // 🌟 修正：非アクティブ段落の場合、過去の問題箇所のハイライト（下線や太字）を一切行わずプレーンに表示
                        spanClass += "text-slate-600 font-normal rounded-lg ";
                      }

                      return (
                        <span 
                          key={idx} 
                          data-token-idx={idx} 
                          onPointerDown={(e) => isActive && handleTracePointerDown(e, idx)} 
                          className={spanClass}
                        >
                          {token}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // 📝 右側タスクパネルのレンダリング
  const renderMissionPane = () => {
    if (currentPhase === 'completed') {
      return (
        <div className="bg-white rounded-3xl p-10 shadow-md border-2 border-emerald-100 flex flex-col items-center justify-center text-center mt-6">
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
      let readText = currentTask.targetSentence;
      if (readAloudTarget === 'all') {
        readText = summaryData.paragraphs.map(p => p.rawText || p.tokens.join(' ')).join(' ');
      } else if (typeof readAloudTarget === 'number') {
        readText = summaryData.paragraphs[readAloudTarget].rawText || summaryData.paragraphs[readAloudTarget].tokens.join(' ');
      }

      return (
        <div className="bg-white rounded-3xl p-8 shadow-md border-2 border-teal-100 flex flex-col">
           <span className="inline-block bg-indigo-100 text-indigo-700 font-black text-sm px-3 py-1 rounded-full mb-4 w-max">
            Final Task: Read Aloud
          </span>
          <h3 className="text-xl font-black text-slate-800 mb-6 leading-relaxed text-left">{currentTask.instruction}</h3>
          
          <div className="mb-4">
            <select 
              value={readAloudTarget}
              onChange={(e) => {
                const val = e.target.value;
                setReadAloudTarget(val === 'all' || val === 'mission' ? val : parseInt(val, 10));
              }}
              className="bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <option value="mission">指定のハイライト文のみ読む</option>
              <option value="all">長文を全文通しで読む</option>
              {summaryData.paragraphs.map((p, i) => <option key={i} value={i}>第{i + 1}段落を読む</option>)}
            </select>
          </div>
          <div>
            <PronunciationMission key={readAloudTarget} targetSentence={readText} onComplete={handleNextTask} />
          </div>
          <button 
            onClick={handleNextTask} 
            className="mt-6 text-slate-400 hover:text-slate-500 font-bold text-sm underline flex items-center justify-center gap-1 mx-auto transition-colors"
          >
            このタスクをスキップして次へ
          </button>
        </div>
      );
    }

    if (currentTask.type === 'select') {
      const isGlobal = currentPhase === 'global';
      return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border-2 border-teal-100 flex flex-col">
          <span className={`inline-block font-black text-sm px-3 py-1 rounded-full mb-4 w-max ${isGlobal ? 'bg-indigo-100 text-indigo-700' : 'bg-teal-100 text-teal-700'}`}>
            {isGlobal ? 'Comprehension' : 'Multiple Choice'}
          </span>
          <h3 className="text-xl font-black text-slate-800 mb-6 leading-relaxed text-left">{currentTask.instruction}</h3>
          
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
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-slate-600 font-bold text-sm leading-relaxed text-left w-full">
                <span className="text-indigo-500 font-black block mb-2 text-base">💡 解説:</span>
                {currentTask.options[selectedOption].explanation}
              </div>
              <button onClick={handleNextTask} className="mt-5 w-full py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-white font-black transition-all flex justify-center items-center gap-2">
                次へ進む <ArrowRight size={18} />
              </button>
            </motion.div>
          )}
        </div>
      );
    }

    return (
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border-2 border-teal-100 flex flex-col relative min-h-[400px]">
        <span className="inline-block bg-teal-100 text-teal-700 font-black text-sm px-3 py-1 rounded-full mb-4 w-max">
          Task: {currentTask.type.toUpperCase()}
        </span>
        <h3 className="text-xl font-black text-slate-800 mb-6 leading-relaxed text-left">{currentTask.instruction}</h3>
        
        <div className="w-full flex flex-col items-start justify-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 p-5 text-left mb-6 min-h-[120px]">
          <AnimatePresence mode="wait">
            {traceFeedback === 'idle' && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p className="text-slate-500 font-bold">左の長文で正解だと思う部分をなぞるかタップしてください。</p>
              </motion.div>
            )}
            {traceFeedback === 'wrong' && (
              <motion.div key="wrong" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-rose-500 font-black flex items-center gap-3">
                <XCircle size={28} />
                <p>不正解。もう一度よく探してみましょう。</p>
              </motion.div>
            )}
            {traceFeedback === 'partial' && (
              <motion.div key="partial" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-amber-500 font-black flex items-center gap-3">
                <AlertCircle size={28} />
                <p>惜しい！かすっていますが、過不足なく選びましょう。</p>
              </motion.div>
            )}
            {traceFeedback === 'correct' && (
              <motion.div key="correct" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-emerald-500 font-black flex flex-col items-start w-full">
                <div className="flex items-center gap-2 mb-3"><CheckCircle2 size={32} /><p className="text-xl">PERFECT!</p></div>
                <div className="text-sm text-slate-600 bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-left w-full leading-relaxed">
                  <span className="text-indigo-500 font-black block mb-1">💡 解説:</span>
                  {currentTask.explanation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {traceFeedback === 'correct' ? (
          <button onClick={handleNextTask} className="w-full py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-black text-lg transition-all shadow-md flex justify-center items-center gap-2 animate-bounce mt-auto">
            次のタスクへ <ArrowRight size={20} />
          </button>
        ) : (
          <div className="flex flex-col gap-4 mt-auto">
            <div className="flex gap-2">
              <button 
                onClick={() => { setSelectedIndices([]); setTraceFeedback('idle'); }} 
                disabled={selectedIndices.length === 0}
                className="bg-slate-200 hover:bg-slate-300 text-slate-600 px-6 py-4 rounded-xl font-black transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                title="選択をリセット"
              >
                <RefreshCcw size={20} />
              </button>
              <button 
                onClick={judgeTrace} 
                disabled={selectedIndices.length === 0} 
                className={`flex-1 py-4 rounded-xl font-black text-lg transition-all shadow-md flex justify-center items-center gap-2 ${selectedIndices.length === 0 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-400 text-white'}`}
              >
                判定する！
              </button>
            </div>
            
            <button 
              onClick={handleShowAnswer}
              className="text-slate-400 hover:text-slate-600 font-bold text-sm underline flex items-center justify-center gap-1 mx-auto transition-colors mt-1"
            >
              <Eye size={16} /> どうしてもわからないので解答を見る
            </button>
          </div>
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

      <div ref={containerRef} className={`flex-1 flex w-full h-full overflow-hidden relative ${isSwapped ? 'flex-row-reverse' : 'flex-row'}`}>
        
        <div style={{ width: `${leftWidth}%` }} className="h-full">
          {renderReadingPane()}
        </div>

        <div onMouseDown={() => setIsDraggingSplit(true)} onTouchStart={() => setIsDraggingSplit(true)} className="w-4 flex flex-col items-center justify-center bg-slate-200/50 hover:bg-cyan-200 cursor-col-resize group transition-colors shadow-inner z-10">
          <div className="h-16 w-1.5 bg-slate-400 group-hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors">
            <GripVertical size={12} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div style={{ width: `${100 - leftWidth}%` }} className="h-full">
          <div className="h-full overflow-y-auto bg-slate-100 p-6 md:p-10 shadow-inner flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div key={`${currentPhase}-${currentParagraphIdx}-${currentTaskIdx}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-2xl mx-auto w-full flex flex-col mb-10 h-full">
                <div className="flex items-center gap-2 mb-6 text-teal-600 flex-shrink-0">
                  <PenTool size={24} />
                  <h2 className="text-2xl font-black">Mission</h2>
                </div>
                {renderMissionPane()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
      </div>
    </div>
  );
}