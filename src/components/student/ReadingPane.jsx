import React, { useRef, useEffect } from 'react';
import { BookOpen, ArrowLeftRight, Settings2 } from 'lucide-react';

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
    <div className="h-full flex flex-col bg-[#fcfaf4] relative">
      <div className="flex items-center justify-between px-3 md:px-5 py-2.5 border-b border-[#dcded2] bg-[#fffdf7] z-20 shrink-0">
        <div className="flex items-center gap-2 text-[#456b55] font-semibold text-sm">
          <BookOpen size={17}/> 本文
        </div>
        <details className="relative group">
          <summary className="list-none cursor-pointer inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 border border-[#dedfd4] text-xs font-semibold text-stone-600 hover:bg-[#f2f4ed]">
            <Settings2 size={15}/> 表示設定
          </summary>
          <div className="absolute top-full right-0 mt-2 w-[235px] p-4 tg-paper rounded-xl z-40 shadow-lg space-y-3">
            <span className="text-xs font-semibold text-stone-500 block">文字サイズ</span>
            <div className="flex gap-1.5">
              {[
                {label:'小',value:'text-lg'},{label:'中',value:'text-xl'},{label:'大',value:'text-2xl'}
              ].map(size=><button key={size.value} type="button" aria-pressed={textSizeClass===size.value}
                onClick={()=>setTextSizeClass(size.value)} className="tg-pill !rounded-lg !py-1.5 flex-1">{size.label}</button>)}
            </div>
            <span className="text-xs font-semibold text-stone-500 block">書体</span>
            <div className="flex gap-1.5">
              <button type="button" aria-pressed={fontClass==='font-sans'} onClick={()=>setFontClass('font-sans')} className="tg-pill !rounded-lg flex-1 !py-1.5">ゴシック</button>
              <button type="button" aria-pressed={fontClass==='font-serif'} onClick={()=>setFontClass('font-serif')} className="tg-pill !rounded-lg flex-1 !py-1.5">明朝</button>
            </div>
            <button type="button" onClick={()=>setIsSwapped(!isSwapped)}
              className="tg-outline w-full rounded-lg text-xs font-semibold py-2 flex items-center justify-center gap-2">
              <ArrowLeftRight size={15}/> 左右を入れ替える
            </button>
          </div>
        </details>
      </div>

      {/* 📖 本文スクロールエリア */}
      <div 
        id="left-scroll-pane" // 🌟 スクロール同期用のID
        ref={scrollContainerRef}
        className="tg-note flex-1 overflow-y-auto p-3 md:p-6 pb-10 relative" 
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
            let containerClass = 'bg-[#fcfaf4]/70 border border-[#d9ddcf] text-stone-600';
            if (isActive) {
              containerClass = 'bg-[#fffef9] border-2 border-[#a8c5ad] shadow-sm z-10';
            } else if (isGlobal) {
              if (isVoiceTarget) {
                containerClass = 'bg-[#fffef9] border-2 border-[#a8c5ad] z-10'; // 音読ターゲットはくっきり
              } else {
                containerClass = 'bg-[#fffef9] border border-[#dadfd5]'; // 全体問題時も白モヤを消して読みやすく
              }
            }
            
            return (
              <div 
                key={p.p_id || idx} 
                ref={(el) => (paragraphRefs.current[idx] = el)} 
                className={`relative p-4 md:p-6 rounded-xl transition-colors duration-200 ${containerClass}`}
              >
                <div className={`text-xs font-semibold tracking-wider mb-4 flex items-center gap-2 ${isActive ? 'text-[#507a5e]' : 'text-stone-400'}`}>
                  PARAGRAPH {idx + 1} (第{idx + 1}段落) {isActive && <span className="w-2 h-2 rounded-full bg-[#668e72]" />}
                </div>
                
                <div className={`leading-[2.5em] tracking-wide ${fontClass} ${textSizeClass}`}>
                  {p.tokens.map((token, tIdx) => {
                    const isSelected = isActive && selectedIndices.includes(tIdx);
                    const isPrevSelected = isActive && selectedIndices.includes(tIdx - 1);
                    const isNextSelected = isActive && selectedIndices.includes(tIdx + 1);

                    let tokenBg = "bg-transparent";
                    // 🌟 モヤを消すため、文字色もはっきりとした色に変更
                    let tokenText = (isActive || isGlobal) ? "text-[#344236] font-semibold" : "text-stone-500 font-medium";
                    let shapeClass = "rounded-lg"; 

                    if (isSelected) {
                      if (traceFeedback === 'wrong') { tokenBg = 'bg-[#f4d7cb] border-b-2 border-[#ad7567]'; tokenText = 'text-[#773e36] font-semibold'; }
                      else if (traceFeedback === 'partial') { tokenBg = 'bg-[#efe3b4] border-b-2 border-[#baa05d]'; tokenText = 'text-[#604a27] font-semibold'; }
                      else if (traceFeedback === 'correct') { tokenBg = 'bg-[#dcead6] border-b-2 border-[#6b9172]'; tokenText = 'text-[#345a42] font-semibold'; }
                      else { tokenBg = 'bg-[#dcead6] border-b-2 border-[#6b9172]'; tokenText = 'text-[#345a42] font-semibold'; }

                      if (isPrevSelected && isNextSelected) shapeClass = "rounded-none";
                      else if (isPrevSelected && !isNextSelected) shapeClass = "rounded-r-lg rounded-l-none";
                      else if (!isPrevSelected && isNextSelected) shapeClass = "rounded-l-lg rounded-r-none";
                      else shapeClass = "rounded-lg"; 
                    } else if (isActive && isTraceTask) {
                      tokenBg = "hover:bg-[#eef2e7]";
                    }

                    return (
                      <span
                        key={tIdx}
                        data-token-idx={tIdx}
                        onPointerDown={(e) => { if (isActive && isTraceTask) handleTracePointerDown(e, tIdx); }}
                        className={`inline-block px-1 py-1 mx-0 select-none transition-colors duration-150 ${isActive && isTraceTask ? 'cursor-pointer touch-none' : ''} ${shapeClass} ${tokenBg} ${tokenText}`}
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