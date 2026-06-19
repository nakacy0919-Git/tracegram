import React, { useRef, useEffect } from 'react';
import { BookOpen, ArrowLeftRight } from 'lucide-react';

export default function ReadingPane({
  summaryData,
  currentPhase,
  currentTask, // 🌟 受け取り
  readAloudTarget, // 🌟 受け取り
  currentParagraphIdx,
  selectedIndices,
  traceFeedback,
  isTraceTask,
  isSwapped,
  setIsSwapped,
  fontClass,
  setFontClass,
  textSizeClass,
  setTextSizeClass,
  handleTracePointerDown,
  handleTracePointerMove,
  handleTracePointerUp
}) {
  const scrollContainerRef = useRef(null);
  const paragraphRefs = useRef([]); 

  const isVoiceMode = currentPhase === 'global' && currentTask?.type === 'voice';

  // 🌟 左の本文をスクロールした時、右の音読パネルも全く同じ割合で追従させる！
  const handleScrollSync = (e) => {
    if (isVoiceMode) {
      if (window._isSyncingLeft) {
        window._isSyncingLeft = false;
        return;
      }
      const rightPane = document.getElementById('right-scroll-pane');
      if (rightPane) {
        const leftPane = e.currentTarget;
        const leftScrollable = leftPane.scrollHeight - leftPane.clientHeight;
        const rightScrollable = rightPane.scrollHeight - rightPane.clientHeight;
        if (leftScrollable > 0 && rightScrollable > 0) {
          const ratio = leftPane.scrollTop / leftScrollable;
          window._isSyncingRight = true;
          rightPane.scrollTop = ratio * rightScrollable;
        }
      }
    }
  };

  useEffect(() => {
    if (currentPhase === 'paragraphs') {
      const timer = setTimeout(() => {
        const container = scrollContainerRef.current;
        const targetPara = paragraphRefs.current[currentParagraphIdx];

        if (container && targetPara) {
          const containerRect = container.getBoundingClientRect();
          const targetRect = targetPara.getBoundingClientRect();
          const scrollDistance = targetRect.top - containerRect.top - 24;

          container.scrollBy({
            top: scrollDistance,
            behavior: 'smooth'
          });
        }
      }, 150); 
      return () => clearTimeout(timer);
    }
  }, [currentParagraphIdx, currentPhase]);

  if (!summaryData) return null;

  return (
    <div className="h-full flex flex-col bg-white relative">
      {/* 👑 ヘッダー部分 */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-slate-200 bg-white/90 backdrop-blur-sm z-20 flex-shrink-0">
        <div className="flex items-center gap-2 text-indigo-600 font-black">
          <BookOpen size={20} /> Reading Passage
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsSwapped(!isSwapped)} className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-indigo-500 transition-colors bg-slate-100 px-2 py-1 rounded-lg">
            <ArrowLeftRight size={14} /> 入替
          </button>
          <div className="flex bg-slate-100 p-0.5 rounded-lg">
            <button onClick={() => setFontClass('font-sans')} className={`px-2 py-1 text-xs font-bold rounded-md ${fontClass === 'font-sans' ? 'bg-white shadow-sm' : 'text-slate-500'}`}>ゴシック</button>
            <button onClick={() => setFontClass('font-serif')} className={`px-2 py-1 text-xs font-bold rounded-md ${fontClass === 'font-serif' ? 'bg-white shadow-sm' : 'text-slate-500'}`}>明朝</button>
          </div>
          <div className="flex bg-slate-100 p-0.5 rounded-lg">
            <button onClick={() => setTextSizeClass('text-lg')} className={`px-2 py-1 text-xs font-bold rounded-md ${textSizeClass === 'text-lg' ? 'bg-white shadow-sm' : 'text-slate-500'}`}>小</button>
            <button onClick={() => setTextSizeClass('text-xl')} className={`px-2 py-1 text-xs font-bold rounded-md ${textSizeClass === 'text-xl' ? 'bg-white shadow-sm' : 'text-slate-500'}`}>中</button>
            <button onClick={() => setTextSizeClass('text-2xl')} className={`px-2 py-1 text-xs font-bold rounded-md ${textSizeClass === 'text-2xl' ? 'bg-white shadow-sm' : 'text-slate-500'}`}>大</button>
          </div>
        </div>
      </div>

      {/* 📖 本文スクロールエリア */}
      <div 
        id="left-scroll-pane" // 🌟 スクロール同期用のID
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-4 md:p-8 pb-32 relative" 
        onScroll={handleScrollSync} // 🌟 右パネルを自動追従させる
        onPointerMove={handleTracePointerMove}
        onPointerUp={handleTracePointerUp}
        onTouchMove={handleTracePointerMove}
        onTouchEnd={handleTracePointerUp}
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {summaryData.paragraphs.map((p, idx) => {
            
            if (currentPhase === 'paragraphs' && idx < currentParagraphIdx) {
              return null; 
            }

            const isActive = currentPhase === 'paragraphs' && currentParagraphIdx === idx;
            const isGlobal = currentPhase === 'global';
            const isVoiceTarget = isVoiceMode && (readAloudTarget === 'all' || readAloudTarget === idx);

            // 🌟 「白の透明フィルターがかかって読みにくい」問題を完全解消！
            let containerClass = 'bg-slate-50/50 border border-slate-200 opacity-40';
            if (isActive) {
              containerClass = 'bg-white border-2 border-indigo-300 shadow-lg scale-[1.02] z-10';
            } else if (isGlobal) {
              if (isVoiceTarget) {
                containerClass = 'bg-white border-2 border-teal-400 shadow-lg scale-[1.01] z-10 opacity-100'; // 音読ターゲットはくっきり
              } else {
                containerClass = 'bg-white border border-slate-200 opacity-100'; // 全体問題時も白モヤを消して読みやすく
              }
            }
            
            return (
              <div 
                key={p.p_id || idx} 
                ref={(el) => (paragraphRefs.current[idx] = el)} 
                className={`relative p-6 rounded-2xl transition-all duration-500 ${containerClass}`}
              >
                <div className={`text-xs font-black mb-4 flex items-center gap-2 ${isActive ? 'text-indigo-500' : 'text-slate-400'}`}>
                  PARAGRAPH {idx + 1} (第{idx + 1}段落) {isActive && <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />}
                </div>
                
                <div className={`leading-[2.5em] tracking-wide ${fontClass} ${textSizeClass}`}>
                  {p.tokens.map((token, tIdx) => {
                    const isSelected = isActive && selectedIndices.includes(tIdx);
                    const isPrevSelected = isActive && selectedIndices.includes(tIdx - 1);
                    const isNextSelected = isActive && selectedIndices.includes(tIdx + 1);

                    let tokenBg = "bg-transparent";
                    // 🌟 モヤを消すため、文字色もはっきりとした色に変更
                    let tokenText = (isActive || isGlobal) ? "text-slate-800 font-bold" : "text-slate-500 font-medium";
                    let shapeClass = "rounded-lg"; 

                    if (isSelected) {
                      if (traceFeedback === 'wrong') { tokenBg = 'bg-rose-300'; tokenText = 'text-rose-950 font-bold shadow-sm'; }
                      else if (traceFeedback === 'partial') { tokenBg = 'bg-amber-300'; tokenText = 'text-amber-950 font-bold shadow-sm'; }
                      else if (traceFeedback === 'correct') { tokenBg = 'bg-emerald-300'; tokenText = 'text-emerald-950 font-bold shadow-sm'; }
                      else { tokenBg = 'bg-cyan-300'; tokenText = 'text-cyan-950 font-bold shadow-sm'; }

                      if (isPrevSelected && isNextSelected) shapeClass = "rounded-none";
                      else if (isPrevSelected && !isNextSelected) shapeClass = "rounded-r-lg rounded-l-none";
                      else if (!isPrevSelected && isNextSelected) shapeClass = "rounded-l-lg rounded-r-none";
                      else shapeClass = "rounded-lg"; 
                    } else if (isActive && isTraceTask) {
                      tokenBg = "hover:bg-slate-200/50";
                    }

                    return (
                      <span
                        key={tIdx}
                        data-token-idx={tIdx}
                        onPointerDown={(e) => { if (isActive && isTraceTask) handleTracePointerDown(e, tIdx); }}
                        className={`inline-block px-1 py-1 mx-0 select-none transition-colors duration-150 ${isActive && isTraceTask ? 'cursor-pointer' : ''} ${shapeClass} ${tokenBg} ${tokenText}`}
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
}