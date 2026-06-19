import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GripVertical, XCircle, BookOpen, Compass, FileText, Type, Sparkles, ArrowRight, ChevronLeft } from 'lucide-react';
import ReadingPane from './ReadingPane';
import MissionPane from './MissionPane';
import { useSummaryTrace } from '../../hooks/useSummaryTrace';

export default function SummaryScreen({ onExit, summaryData }) {
  const [leftWidth, setLeftWidth] = useState(50); 
  const [isDraggingSplit, setIsDraggingSplit] = useState(false);
  const containerRef = useRef(null);

  const [isSwapped, setIsSwapped] = useState(false);
  const [textSizeClass, setTextSizeClass] = useState('text-xl');
  const [fontClass, setFontClass] = useState('font-sans'); 
  const [readAloudTarget, setReadAloudTarget] = useState('mission'); 
  
  // 🌟 デフォルトを 'small'（小サイズ）に修正
  const [missionTextSize, setMissionTextSize] = useState('small'); 

  const [currentMode, setCurrentMode] = useState(null); 
  const [currentPhase, setCurrentPhase] = useState('paragraphs'); 
  const [currentParagraphIdx, setCurrentParagraphIdx] = useState(0);
  const [currentTaskIdx, setCurrentTaskIdx] = useState(0); 
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  if (!summaryData) return null;

  const currentParagraph = summaryData.paragraphs[currentParagraphIdx];
  let currentTask = null;

  if (currentMode && currentPhase === 'paragraphs' && currentParagraph?.tasks) {
    if (Array.isArray(currentParagraph.tasks)) {
      currentTask = currentParagraph.tasks[currentTaskIdx];
    } else {
      currentTask = (currentParagraph.tasks[currentMode] || [])[currentTaskIdx];
    }
  } else if (currentMode && currentPhase === 'global' && summaryData.globalTasks) {
    if (Array.isArray(summaryData.globalTasks)) {
      currentTask = summaryData.globalTasks[currentTaskIdx];
    } else {
      currentTask = (summaryData.globalTasks[currentMode] || [])[currentTaskIdx];
    }
  }

  const {
    selectedIndices, setSelectedIndices,
    traceFeedback, setTraceFeedback,
    isTraceTask,
    handleTracePointerDown, handleTracePointerMove, handleTracePointerUp,
    judgeTrace, handleShowAnswer
  } = useSummaryTrace(currentTask, currentPhase);

  useEffect(() => {
    setCurrentTaskIdx(0);
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setSelectedIndices([]);
    setTraceFeedback('idle');
  }, [currentMode, currentParagraphIdx]);

  useEffect(() => {
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setSelectedIndices([]);
    setTraceFeedback('idle');
  }, [currentTaskIdx, currentPhase, setSelectedIndices, setTraceFeedback]);

  const handleSplitMove = (clientX) => {
    if (!isDraggingSplit || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    let rawLeftWidth = ((clientX - containerRect.left) / containerRect.width) * 100;
    if (rawLeftWidth < 20) rawLeftWidth = 20;
    if (rawLeftWidth > 80) rawLeftWidth = 80;
    if (isSwapped) setLeftWidth(100 - rawLeftWidth);
    else setLeftWidth(rawLeftWidth);
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

  const handleNextTask = () => {
    const getTasksLength = () => {
      if (currentPhase === 'paragraphs' && currentParagraph?.tasks) {
        if (Array.isArray(currentParagraph.tasks)) return currentParagraph.tasks.length;
        return (currentParagraph.tasks[currentMode] || []).length;
      }
      if (currentPhase === 'global' && summaryData.globalTasks) {
        if (Array.isArray(summaryData.globalTasks)) return summaryData.globalTasks.length;
        return (summaryData.globalTasks[currentMode] || []).length;
      }
      return 0;
    };

    const tasksLength = getTasksLength();

    if (currentPhase === 'paragraphs') {
      if (currentTaskIdx + 1 < tasksLength) {
        setCurrentTaskIdx(prev => prev + 1); 
      } else if (currentParagraphIdx + 1 < summaryData.paragraphs.length) {
        setCurrentParagraphIdx(prev => prev + 1); 
        setCurrentTaskIdx(0);
      } else {
        setCurrentPhase('global');
        setCurrentTaskIdx(0);
      }
    } else if (currentPhase === 'global') {
      if (currentTaskIdx + 1 < tasksLength) {
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

  const modesList = [
    { 
      id: 'comprehension', 
      label: '読解問題', 
      subLabel: 'Comprehension',
      icon: <BookOpen size={36} />, 
      color: 'from-emerald-500 to-teal-600 shadow-emerald-100 ring-emerald-500/10 hover:ring-emerald-500/30', 
      bgLight: 'bg-emerald-50/50',
      desc: '大学入試や英検形式の設問にチャレンジ。文脈を正確に見抜く力を測ります。'
    },
    { 
      id: 'structure', 
      label: '構造理解', 
      subLabel: 'Structure & Syntax',
      icon: <Compass size={36} />, 
      color: 'from-cyan-500 to-blue-600 shadow-cyan-100 ring-cyan-500/10 hover:ring-cyan-500/30', 
      bgLight: 'bg-cyan-50/50',
      desc: 'SVOCや複雑な修飾関係、英文の「骨組み」を指先でなぞって英語脳を作ります。'
    },
    { 
      id: 'summary', 
      label: '要約トレーニング', 
      subLabel: 'Logical Summary',
      icon: <FileText size={36} />, 
      color: 'from-indigo-500 to-purple-600 shadow-indigo-100 ring-indigo-500/10 hover:ring-indigo-500/30', 
      bgLight: 'bg-indigo-50/50',
      desc: 'パラグラフごとの重要情報をトレースし、論理の結合から要約の最適解を導きます。'
    },
    { 
      id: 'vocabulary', 
      label: '重要語彙', 
      subLabel: 'Vocabulary Hunt',
      icon: <Type size={36} />, 
      color: 'from-fuchsia-500 to-pink-600 shadow-fuchsia-100 ring-fuchsia-500/10 hover:ring-fuchsia-500/30', 
      bgLight: 'bg-fuchsia-50/50',
      desc: '長文に登場する重要語彙・熟語をハント。日本語訳に頼らないコアのニュアンスを習得。'
    },
  ];

  if (currentMode === null) {
    return (
      <div className="flex-1 flex flex-col h-full w-full bg-slate-50 overflow-y-auto p-6 md:p-12 selection:bg-indigo-100">
        <div className="flex justify-between items-center max-w-6xl w-full mx-auto mb-8 md:mb-12">
          <button onClick={onExit} className="flex items-center gap-2 font-black text-slate-500 hover:text-rose-500 transition-colors group">
            <XCircle size={24} className="group-hover:scale-110 transition-transform" /> 記事選択へ戻る
          </button>
          <div className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-black border border-indigo-100">
            <Sparkles size={14} className="animate-pulse" /> 4つのアプローチで長文を解剖
          </div>
        </div>

        <div className="max-w-6xl w-full mx-auto text-center mb-10 md:mb-14">
          <span className="text-xs font-black tracking-widest text-slate-400 bg-slate-200/60 px-3 py-1 rounded-full">{summaryData.level}</span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-800 mt-3 mb-4 tracking-tight leading-tight">{summaryData.title}</h1>
          <p className="text-slate-500 font-bold max-w-2xl mx-auto text-sm md:text-base">
            ひとつの良質な英文を、異なる4つの認知モードで攻略します。トレーニングしたいモードを選択してください。
          </p>
        </div>

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {modesList.map((m, idx) => (
            <motion.button
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setCurrentMode(m.id)}
              className="bg-white rounded-3xl p-6 md:p-8 text-left border border-slate-200 shadow-xl flex flex-col md:flex-row gap-5 items-start cursor-pointer group hover:border-slate-300 transition-all relative overflow-hidden ring-4 ring-transparent"
            >
              <div className={`p-4 md:p-5 rounded-2xl bg-gradient-to-br ${m.color} text-white shadow-lg flex-shrink-0 transform group-hover:scale-105 transition-transform`}>
                {m.icon}
              </div>

              <div className="flex-1 flex flex-col h-full justify-between z-10">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">
                      {m.label}
                    </h2>
                    <span className="text-xs font-black tracking-wide text-slate-400 uppercase italic">
                      {m.subLabel}
                    </span>
                  </div>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-4">
                    {m.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-1 text-sm font-black text-slate-400 group-hover:text-indigo-500 mt-auto transition-colors">
                  このモードを開始する <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${m.bgLight} transition-opacity duration-300 pointer-events-none z-0`} />
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex-1 flex flex-col h-full w-full bg-slate-50 relative ${isDraggingSplit ? 'select-none' : ''}`}>
      
      <div className="flex justify-between items-center px-6 py-3 bg-white border-b border-slate-200 shadow-sm z-20 flex-shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentMode(null)} 
            className="flex items-center gap-1 text-indigo-500 hover:text-indigo-700 font-black text-sm bg-indigo-50 px-3 py-2 rounded-xl border border-indigo-100 transition-all active:scale-95"
          >
            <ChevronLeft size={16} /> モード選択に戻る
          </button>
          <div>
            <span className="text-xs font-black text-white bg-slate-500 px-2 py-0.5 rounded-full mr-2">{summaryData.level}</span>
            <span className="text-lg font-black text-slate-700">{summaryData.title}</span>
          </div>
        </div>
        <div className="text-sm font-black text-slate-400">要約チャレンジモード</div>
      </div>

      <div className="bg-white border-b border-slate-200 px-6 py-2 flex gap-2 overflow-x-auto z-20 flex-shrink-0 shadow-sm">
        {modesList.map((m) => {
          const isActive = currentMode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setCurrentMode(m.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-black text-xs transition-all duration-200 ${
                isActive 
                  ? `${m.color.replace('text-white', '')} border-2 bg-slate-50 scale-102` 
                  : 'bg-slate-50/50 text-slate-400 hover:text-slate-600 border-2 border-transparent'
              }`}
            >
              <span className="scale-80">{m.icon}</span>
              {m.label}
            </button>
          );
        })}
      </div>

      <div ref={containerRef} className={`flex-1 flex w-full h-full overflow-hidden relative ${isSwapped ? 'flex-row-reverse' : 'flex-row'}`}>
        
        <div style={{ width: `${leftWidth}%` }} className="h-full">
          <ReadingPane 
            summaryData={summaryData}
            currentPhase={currentPhase}
            currentParagraphIdx={currentParagraphIdx}
            selectedIndices={selectedIndices}
            traceFeedback={traceFeedback}
            isTraceTask={isTraceTask}
            isSwapped={isSwapped}
            setIsSwapped={setIsSwapped}
            fontClass={fontClass}
            setFontClass={setFontClass}
            textSizeClass={textSizeClass}
            setTextSizeClass={setTextSizeClass}
            handleTracePointerDown={handleTracePointerDown}
            handleTracePointerMove={handleTracePointerMove}
            handleTracePointerUp={handleTracePointerUp}
          />
        </div>

        <div onMouseDown={() => setIsDraggingSplit(true)} onTouchStart={() => setIsDraggingSplit(true)} className="w-4 flex flex-col items-center justify-center bg-slate-200/50 hover:bg-indigo-200 cursor-col-resize group transition-colors shadow-inner z-10">
          <div className="h-16 w-1.5 bg-slate-400 group-hover:bg-indigo-500 rounded-full flex items-center justify-center transition-colors">
            <GripVertical size={12} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div style={{ width: `${100 - leftWidth}%` }} className="h-full">
          <div className="h-full overflow-y-auto bg-slate-100 p-6 md:p-10 shadow-inner flex flex-col">
            <MissionPane 
              currentMode={currentMode}
              currentPhase={currentPhase}
              currentTask={currentTask}
              currentParagraphIdx={currentParagraphIdx}
              currentTaskIdx={currentTaskIdx}
              summaryData={summaryData}
              traceFeedback={traceFeedback}
              selectedIndices={selectedIndices}
              selectedOption={selectedOption}
              isAnswerRevealed={isAnswerRevealed}
              readAloudTarget={readAloudTarget}
              missionTextSize={missionTextSize}
              setMissionTextSize={setMissionTextSize}
              onExit={onExit}
              handleNextTask={handleNextTask}
              handleOptionSelect={handleOptionSelect}
              judgeTrace={judgeTrace}
              handleShowAnswer={handleShowAnswer}
              setSelectedIndices={setSelectedIndices}
              setTraceFeedback={setTraceFeedback}
              setReadAloudTarget={setReadAloudTarget}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}