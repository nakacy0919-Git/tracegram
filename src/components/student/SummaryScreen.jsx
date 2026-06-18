import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GripVertical, XCircle, BookOpen, PenTool, ArrowRight, CheckCircle2, AlertCircle, Trophy } from 'lucide-react';
import PronunciationMission from './PronunciationMission'; 

// 🌟 NEW: なぞり時のポロロロッという心地よい効果音
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

  const [currentPhase, setCurrentPhase] = useState('paragraphs'); 
  const [currentParagraphIdx, setCurrentParagraphIdx] = useState(0);
  const [currentCompIdx, setCurrentCompIdx] = useState(0);
  
  const [taskStep, setTaskStep] = useState('trace'); 
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  // 🌟 NEW: なぞり（トレース）専用の状態管理
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [traceFeedback, setTraceFeedback] = useState('idle'); 
  const [isTracing, setIsTracing] = useState(false);
  const [traceMode, setTraceMode] = useState('select');

  if (!summaryData) return null;

  const currentParagraph = summaryData.paragraphs[currentParagraphIdx];

  useEffect(() => {
    if (currentPhase !== 'paragraphs' || !currentParagraph) return;
    
    if (currentParagraph.traceTask) setTaskStep('trace');
    else if (currentParagraph.fillInTask) setTaskStep('fillIn');
    else if (currentParagraph.paraphraseTask) setTaskStep('paraphrase');
    else handleNextTask();
    
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setSelectedIndices([]);
    setTraceFeedback('idle');
    setIsTracing(false); // 初期化
  }, [currentParagraphIdx, currentParagraph, currentPhase]);

  // --- スプリット画面のリサイズ処理 ---
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

  // --- 🌟 NEW: 滑らかなトレース（なぞり）処理 ---
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
    if (currentPhase !== 'paragraphs' || taskStep !== 'trace' || traceFeedback === 'correct') return;
    setIsTracing(true);
    const isCurrentlySelected = selectedIndices.includes(idx);
    const newTraceMode = isCurrentlySelected ? 'deselect' : 'select';
    setTraceMode(newTraceMode);
    updateTraceSelection(idx, newTraceMode);
    setTraceFeedback('idle');
  };

  const handleTracePointerMove = (e) => {
    if (!isTracing || taskStep !== 'trace' || traceFeedback === 'correct') return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const element = document.elementFromPoint(clientX, clientY);

    if (element && element.hasAttribute('data-token-idx')) {
      const idx = parseInt(element.getAttribute('data-token-idx'), 10);
      updateTraceSelection(idx, traceMode);
    }
  };

  const handleTracePointerUp = () => {
    setIsTracing(false);
  };

  // 画面外で指を離した時もトレースを終了させる
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
    if (selectedIndices.length === 0) return;
    const target = currentParagraph.traceTask.targetIndices;
    const partial = currentParagraph.traceTask.partialIndices || [];
    const isPerfect = JSON.stringify(selectedIndices) === JSON.stringify(target);
    const isPartial = selectedIndices.some(idx => target.includes(idx) || partial.includes(idx));

    if (isPerfect) {
      setTraceFeedback('correct');
    } else if (isPartial) {
      setTraceFeedback('partial');
    } else {
      setTraceFeedback('wrong');
      setTimeout(() => setSelectedIndices([]), 1500);
    }
  };

  const handleNextTask = () => {
    setIsAnswerRevealed(false);
    setSelectedOption(null);
    setSelectedIndices([]);
    setTraceFeedback('idle');
    setIsTracing(false);

    if (currentPhase === 'paragraphs') {
      if (taskStep === 'trace' && currentParagraph.paraphraseTask) {
        setTaskStep('paraphrase');
      } else if (taskStep === 'trace' && currentParagraph.fillInTask) {
        setTaskStep('fillIn');
      } else if (taskStep === 'paraphrase' && currentParagraph.fillInTask) {
        setTaskStep('fillIn');
      } else if (currentParagraphIdx + 1 < summaryData.paragraphs.length) {
        setCurrentParagraphIdx(prev => prev + 1); 
      } else {
        if (summaryData.comprehensionTasks && summaryData.comprehensionTasks.length > 0) {
          setCurrentPhase('comprehension');
        } else if (summaryData.readAloudTask) {
          setCurrentPhase('readAloud');
        } else {
          setCurrentPhase('completed');
        }
      }
    } else if (currentPhase === 'comprehension') {
      if (currentCompIdx + 1 < summaryData.comprehensionTasks.length) {
        setCurrentCompIdx(prev => prev + 1); 
      } else {
        if (summaryData.readAloudTask) {
          setCurrentPhase('readAloud');
        } else {
          setCurrentPhase('completed');
        }
      }
    } else if (currentPhase === 'readAloud') {
      setCurrentPhase('completed');
    }
  };

  const handleOptionSelect = (idx) => {
    if (isAnswerRevealed) return;
    setSelectedOption(idx);
    setIsAnswerRevealed(true); 
  };

  const renderLeftPane = () => {
    return (
      <div 
        // 🌟 NEW: トレース中のみ「touch-none」を付与して画面スクロールを止め、なぞりに全集中させる
        className={`bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-lg leading-[3rem] text-slate-700 font-medium ${taskStep === 'trace' ? 'touch-none' : ''}`}
        onPointerMove={handleTracePointerMove}
        onPointerUp={handleTracePointerUp}
        onTouchMove={handleTracePointerMove}
        onTouchEnd={handleTracePointerUp}
      >
        {currentPhase === 'paragraphs' ? (
          currentParagraph.tokens.map((token, idx) => {
            const isSelected = selectedIndices.includes(idx);
            let spanClass = "inline-block px-1 mx-0.5 rounded transition-all cursor-pointer select-none ";
            if (taskStep === 'trace') {
              if (isSelected) {
                if (traceFeedback === 'wrong') spanClass += "bg-rose-200 text-rose-800";
                else if (traceFeedback === 'partial') spanClass += "bg-amber-200 text-amber-900";
                else spanClass += "bg-cyan-200 text-cyan-900 shadow-sm";
              } else {
                spanClass += "hover:bg-slate-100";
              }
            } else {
              spanClass += "cursor-default";
              if (currentParagraph.traceTask?.targetIndices?.includes(idx)) {
                spanClass += " bg-emerald-50 text-emerald-800 font-bold border-b-2 border-emerald-200";
              }
            }
            return (
              <span 
                key={idx} 
                data-token-idx={idx} // 🌟 NEW: 要素位置からインデックスを取得するための目印
                onPointerDown={(e) => handleTracePointerDown(e, idx)} 
                className={spanClass}
              >
                {token}
              </span>
            );
          })
        ) : (
          summaryData.paragraphs.map(p => (
            <p key={p.p_id} className="mb-6 indent-4 leading-relaxed">
              {p.tokens.join(' ')}
            </p>
          ))
        )}
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
          
          <div className="w-full bg-slate-50 rounded-2xl p-6 text-left mb-8 border border-slate-200">
            <h3 className="font-black text-indigo-600 mb-4 flex items-center gap-2"><BookOpen size={20}/> 模範要約</h3>
            {summaryData.modelSummaries?.map((model, i) => (
              <div key={i} className="mb-4 last:mb-0">
                <span className="text-xs font-bold text-white bg-slate-400 px-2 py-0.5 rounded">{model.type}</span>
                <p className="font-bold text-slate-700 mt-2">{model.text}</p>
                <p className="text-sm text-slate-500 mt-1">{model.translation}</p>
              </div>
            ))}
          </div>

          <button onClick={onExit} className="px-10 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl transition-all shadow-md">
            メニューへ戻る
          </button>
        </div>
      );
    }

    if (currentPhase === 'readAloud') {
      return (
        <div className="bg-white rounded-3xl p-8 shadow-md border-2 border-teal-100 flex-1 flex flex-col">
           <span className="inline-block bg-indigo-100 text-indigo-700 font-black text-sm px-3 py-1 rounded-full mb-4 w-max">
            Final Task: Read Aloud
          </span>
          <h3 className="text-xl font-black text-slate-800 mb-6 leading-relaxed">
            {summaryData.readAloudTask.hint}
          </h3>
          <div className="flex-1">
            <PronunciationMission 
              targetSentence={summaryData.readAloudTask.targetSentence} 
              onComplete={handleNextTask} 
            />
          </div>
        </div>
      );
    }

    const isComprehension = currentPhase === 'comprehension';
    const taskData = isComprehension 
      ? summaryData.comprehensionTasks[currentCompIdx] 
      : (taskStep === 'paraphrase' ? currentParagraph.paraphraseTask : currentParagraph.fillInTask);

    if (currentPhase === 'paragraphs' && taskStep === 'trace') {
      return (
        <div className="bg-white rounded-3xl p-8 shadow-md border-2 border-teal-100 flex-1 flex flex-col">
          <span className="inline-block bg-teal-100 text-teal-700 font-black text-sm px-3 py-1 rounded-full mb-4 w-max">Task 1: Core Trace</span>
          <h3 className="text-xl font-black text-slate-800 mb-6 leading-relaxed">{currentParagraph.traceTask.instruction}</h3>
          
          <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 p-6 text-center">
            <AnimatePresence mode="wait">
              {traceFeedback === 'idle' && (
                <motion.p key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-slate-400 font-bold">左の長文の単語をスワイプしてなぞり、<br/>要約に不可欠な部分を選択してください。</motion.p>
              )}
              {traceFeedback === 'wrong' && (
                <motion.div key="wrong" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-rose-500 font-black flex flex-col items-center gap-2"><XCircle size={32} /><p>不正解。筆者の主張の核となる部分を探しましょう。</p></motion.div>
              )}
              {traceFeedback === 'partial' && (
                <motion.div key="partial" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-amber-500 font-black flex flex-col items-center gap-2"><AlertCircle size={32} /><p>惜しい！コア部分は含んでいますが、もう少し過不足なく選んでみましょう。</p></motion.div>
              )}
              {traceFeedback === 'correct' && (
                <motion.div key="correct" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="text-emerald-500 font-black flex flex-col items-center gap-2"><CheckCircle2 size={40} /><p className="text-xl">PERFECT!</p><p className="text-sm mt-2 text-slate-600 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">{currentParagraph.traceTask.explanation}</p></motion.div>
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
    }

    return (
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border-2 border-teal-100 flex-1 flex flex-col">
        <span className={`inline-block font-black text-sm px-3 py-1 rounded-full mb-4 w-max ${isComprehension ? 'bg-indigo-100 text-indigo-700' : 'bg-teal-100 text-teal-700'}`}>
          {isComprehension ? 'Comprehension Task' : `Task 2: ${taskStep === 'paraphrase' ? 'Paraphrase' : 'Fill in the Blank'}`}
        </span>
        
        <h3 className="text-xl font-black text-slate-800 mb-6 leading-relaxed">{taskData.question}</h3>
        
        <div className="flex flex-col gap-3">
          {taskData.options.map((option, idx) => {
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
              {taskData.options[selectedOption].explanation}
            </p>
            <button onClick={handleNextTask} className="mt-4 w-full py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-white font-black transition-all flex justify-center items-center gap-2">
              次へ進む <ArrowRight size={18} />
            </button>
          </motion.div>
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
        <div style={{ width: `${leftWidth}%` }} className="h-full overflow-y-auto bg-slate-50 p-6 md:p-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto h-full flex flex-col">
            <div className="flex items-center gap-2 mb-6 text-indigo-600">
              <BookOpen size={24} />
              <h2 className="text-2xl font-black">Reading Passage</h2>
            </div>
            {renderLeftPane()}
          </motion.div>
        </div>

        <div onMouseDown={() => setIsDraggingSplit(true)} onTouchStart={() => setIsDraggingSplit(true)} className="w-4 flex flex-col items-center justify-center bg-slate-200/50 hover:bg-cyan-200 cursor-col-resize group transition-colors shadow-inner z-10">
          <div className="h-16 w-1.5 bg-slate-400 group-hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors">
            <GripVertical size={12} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div style={{ width: `${100 - leftWidth}%` }} className="h-full overflow-y-auto bg-slate-100 p-6 md:p-10 shadow-inner">
          <AnimatePresence mode="wait">
            <motion.div key={`${currentPhase}-${currentParagraphIdx}-${currentCompIdx}-${taskStep}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-2xl mx-auto h-full flex flex-col">
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