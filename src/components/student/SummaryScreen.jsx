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
  
  // 🌟 初期値を 'all'（全文通しで読む）に変更
  const [readAloudTarget, setReadAloudTarget] = useState('all'); 
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

  useEffect(() => {
    // 別の学習モードを選択したら先頭の段落から始める。
    setCurrentPhase('paragraphs');
    setCurrentParagraphIdx(0);
    setCurrentTaskIdx(0);
  }, [currentMode]);

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
      <div className="tg-workspace flex-1 w-full overflow-y-auto p-4 md:p-10">
        <div className="max-w-4xl mx-auto">
          <button type="button" onClick={onExit}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4c6954] hover:underline py-2 mb-4">
            <ChevronLeft size={17}/> 記事一覧へ
          </button>
          <div className="tg-paper tg-margin tg-holes rounded-[22px] p-6 pl-12 md:p-10 md:pl-16">
            <span className="tg-tag">READING NOTE / {summaryData.level}</span>
            <h1 className="tg-serif text-2xl md:text-4xl font-bold text-[#2c3c31] mt-3 mb-2 leading-snug">{summaryData.title}</h1>
            <p className="text-sm text-stone-500 mt-1 mb-7">学習する内容を選びましょう。</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {modesList.map((m, idx) => (
                <button key={m.id} type="button" onClick={() => setCurrentMode(m.id)}
                  className="tg-course border border-[#dedfd2] rounded-xl px-5 py-5 text-left flex items-center gap-4 bg-[#fffdf8]">
                  <span className="tg-serif text-2xl text-[#8da596] shrink-0">0{idx + 1}</span>
                  <span className="flex-1 min-w-0">
                    <span className="font-semibold block text-base md:text-lg text-[#2d4334]">{m.label}</span>
                    <span className="text-xs text-stone-500 block mt-1">{[
                      '内容を確かめる', '文のかたまりをなぞる', '大事な情報をまとめる', '語句を文脈で学ぶ'
                    ][idx]}</span>
                  </span>
                  <ArrowRight size={18} className="text-[#668677] shrink-0"/>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`tg-workspace flex-1 flex flex-col h-full w-full relative ${isDraggingSplit ? 'select-none' : ''}`}>
      
      <div className="bg-[#faf8f2] border-b border-[#dce0d5] px-3 md:px-7 py-2.5 flex items-center gap-3 shrink-0">
        <button type="button" onClick={() => setCurrentMode(null)}
          className="tg-outline rounded-full p-2.5" aria-label="学習モードを選び直す" title="戻る">
          <ChevronLeft size={19}/>
        </button>
        <div className="min-w-0 flex-1">
          <span className="tg-tag">READING / {summaryData.level}</span>
          <h1 className="font-semibold text-[#314334] text-sm md:text-base truncate">{summaryData.title}</h1>
        </div>
      </div>
      <div className="flex gap-1.5 px-3 md:px-7 py-2 bg-[#f4f1e8] border-b border-[#dce0d5] overflow-x-auto shrink-0">
        {modesList.map(m=>(
          <button type="button" key={m.id} onClick={()=>setCurrentMode(m.id)}
            aria-pressed={currentMode===m.id}
            className={`tg-pill whitespace-nowrap !py-1.5 !px-3 ${currentMode===m.id?'is-active':''}`}>
            {m.label}
          </button>
        ))}
      </div>

      <div ref={containerRef} style={{ '--left-pane-width': `${leftWidth}%`, '--right-pane-width': `${100 - leftWidth}%` }}
        className={`flex-1 flex w-full h-full min-h-0 overflow-y-auto lg:overflow-hidden relative ${isSwapped ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col lg:flex-row'}`}>
        
        <div className="w-full lg:w-[var(--left-pane-width)] h-[42dvh] lg:h-full flex-shrink-0">
          <ReadingPane 
            summaryData={summaryData}
            currentPhase={currentPhase}
            currentTask={currentTask} // 🌟 追加：現在なんのタスクをしているか渡す
            readAloudTarget={readAloudTarget} // 🌟 追加：音読ターゲットを渡す
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

        <div onMouseDown={() => setIsDraggingSplit(true)} onTouchStart={() => setIsDraggingSplit(true)} className="hidden lg:flex w-3 flex-col items-center justify-center bg-[#e0e1d4] hover:bg-[#ccd9cc] cursor-col-resize group z-10">
          <div className="h-16 w-1.5 bg-slate-400 group-hover:bg-indigo-500 rounded-full flex items-center justify-center transition-colors">
            <GripVertical size={12} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="w-full lg:w-[var(--right-pane-width)] min-h-[52dvh] lg:min-h-0 lg:h-full flex-shrink-0">
          <div className="h-full overflow-y-auto bg-[#f6f3ea] p-3 md:p-5 flex flex-col">
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