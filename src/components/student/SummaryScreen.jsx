// src/components/student/SummaryScreen.jsx
import React, { useState, useRef, useEffect } from 'react';
import { GripVertical, XCircle } from 'lucide-react';
import ReadingPane from './ReadingPane';
import MissionPane from './MissionPane';
// 🌟 ここを新しい専用エンジンに変更
import { useSummaryTrace } from '../../hooks/useSummaryTrace';

export default function SummaryScreen({ onExit, summaryData }) {
  const [leftWidth, setLeftWidth] = useState(50); 
  const [isDraggingSplit, setIsDraggingSplit] = useState(false);
  const containerRef = useRef(null);
  const activeParagraphRef = useRef(null);

  const [isSwapped, setIsSwapped] = useState(false);
  const [textSizeClass, setTextSizeClass] = useState('text-xl');
  const [fontClass, setFontClass] = useState('font-sans'); 
  const [readAloudTarget, setReadAloudTarget] = useState('mission'); 
  const [missionTextSize, setMissionTextSize] = useState('medium'); 

  const [currentPhase, setCurrentPhase] = useState('paragraphs'); 
  const [currentParagraphIdx, setCurrentParagraphIdx] = useState(0);
  const [currentTaskIdx, setCurrentTaskIdx] = useState(0); 
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  if (!summaryData) return null;

  const currentParagraph = summaryData.paragraphs[currentParagraphIdx];
  let currentTask = null;
  if (currentPhase === 'paragraphs' && currentParagraph?.tasks) {
    currentTask = currentParagraph.tasks[currentTaskIdx];
  } else if (currentPhase === 'global' && summaryData.globalTasks) {
    currentTask = summaryData.globalTasks[currentTaskIdx];
  }

  // 🌟 ここも新しい専用エンジンに変更
  const {
    selectedIndices, setSelectedIndices,
    traceFeedback, setTraceFeedback,
    isTraceTask,
    handleTracePointerDown, handleTracePointerMove, handleTracePointerUp,
    judgeTrace, handleShowAnswer
  } = useSummaryTrace(currentTask, currentPhase);

  useEffect(() => {
    if (currentPhase === 'paragraphs' && activeParagraphRef.current) {
      setTimeout(() => {
        activeParagraphRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 150);
    }
  }, [currentParagraphIdx, currentPhase]);

  useEffect(() => {
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setSelectedIndices([]);
    setTraceFeedback('idle');
  }, [currentParagraphIdx, currentTaskIdx, currentPhase, setSelectedIndices, setTraceFeedback]);

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
        } else setCurrentPhase('completed');
      }
    } else if (currentPhase === 'global') {
      if (currentTaskIdx + 1 < summaryData.globalTasks.length) {
        setCurrentTaskIdx(prev => prev + 1); 
      } else setCurrentPhase('completed');
    }
  };

  const handleOptionSelect = (idx) => {
    if (isAnswerRevealed) return;
    setSelectedOption(idx);
    setIsAnswerRevealed(true); 
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
            activeParagraphRef={activeParagraphRef}
          />
        </div>

        <div onMouseDown={() => setIsDraggingSplit(true)} onTouchStart={() => setIsDraggingSplit(true)} className="w-4 flex flex-col items-center justify-center bg-slate-200/50 hover:bg-cyan-200 cursor-col-resize group transition-colors shadow-inner z-10">
          <div className="h-16 w-1.5 bg-slate-400 group-hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors">
            <GripVertical size={12} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div style={{ width: `${100 - leftWidth}%` }} className="h-full">
          <div className="h-full overflow-y-auto bg-slate-100 p-6 md:p-10 shadow-inner flex flex-col">
            <MissionPane 
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