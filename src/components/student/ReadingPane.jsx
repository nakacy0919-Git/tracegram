import React, { useRef, useEffect } from 'react';
import { BookOpen, ArrowLeftRight } from 'lucide-react';

export default function ReadingPane({
  summaryData,
  currentPhase,
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

  // 🌟 最終奥義：画面上の「絶対座標」を測定して確実にスクロールさせる
  useEffect(() => {
    if (currentPhase === 'paragraphs') {
      const timer = setTimeout(() => {
        const container = scrollContainerRef.current;
        const targetPara = paragraphRefs.current[currentParagraphIdx];

        if (container && targetPara) {
          // コンテナとターゲットの「画面上の実際のピクセル位置」を精密測定
          const containerRect = container.getBoundingClientRect();
          const targetRect = targetPara.getBoundingClientRect();

          // ターゲットがコンテナの上端から「どれだけ離れているか」を計算
          // -24 はヘッダーにピッタリくっつきすぎないための美しい余白です
          const scrollDistance = targetRect.top - containerRect.top - 24;

          // その差分の距離だけ、コンテナを強制的にスクロール（移動）させる
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
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-4 md:p-8 pb-[80vh] relative" 
        onPointerMove={handleTracePointerMove}
        onPointerUp={handleTracePointerUp}
        onTouchMove={handleTracePointerMove}
        onTouchEnd={handleTracePointerUp}
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {summaryData.paragraphs.map((p, idx) => {
            const isActive = currentPhase === 'paragraphs' && currentParagraphIdx === idx;
            
            return (
              <div 
                key={p.p_id || idx} 
                ref={(el) => (paragraphRefs.current[idx] = el)} 
                className={`relative p-6 rounded-2xl transition-all duration-500 ${
                  isActive 
                    ? 'bg-white border-2 border-indigo-300 shadow-lg scale-[1.02] z-10' 
                    : 'bg-slate-50/50 border border-slate-200 opacity-40'
                }`}
              >
                <div className={`text-xs font-black mb-4 flex items-center gap-2 ${isActive ? 'text-indigo-500' : 'text-slate-400'}`}>
                  PARAGRAPH {idx + 1} (第{idx + 1}段落) {isActive && <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />}
                </div>
                
                <div className={`leading-[2.5em] tracking-wide ${fontClass} ${textSizeClass} ${isActive ? 'text-slate-800' : 'text-slate-500'}`}>
                  {p.tokens.map((token, tIdx) => {
                    const isSelected = isActive && selectedIndices.includes(tIdx);
                    let tokenBg = "bg-transparent";
                    let tokenText = "text-inherit";
                    
                    if (isSelected) {
                      if (traceFeedback === 'wrong') { tokenBg = 'bg-rose-200'; tokenText = 'text-rose-900 shadow-[0_0_10px_rgba(254,205,211,0.8)]'; }
                      else if (traceFeedback === 'partial') { tokenBg = 'bg-amber-200'; tokenText = 'text-amber-900 shadow-[0_0_10px_rgba(253,230,138,0.8)]'; }
                      else if (traceFeedback === 'correct') { tokenBg = 'bg-emerald-200'; tokenText = 'text-emerald-900 shadow-[0_0_10px_rgba(167,243,208,0.8)]'; }
                      else { tokenBg = 'bg-indigo-200'; tokenText = 'text-indigo-900 shadow-[0_0_10px_rgba(199,210,254,0.8)]'; }
                    }

                    return (
                      <span
                        key={tIdx}
                        data-token-idx={tIdx}
                        onPointerDown={(e) => { if (isActive && isTraceTask) handleTracePointerDown(e, tIdx); }}
                        className={`inline-block px-1 mx-0.5 rounded-lg transition-colors ${isActive && isTraceTask ? 'cursor-pointer hover:bg-indigo-100' : ''} ${tokenBg} ${tokenText} ${isSelected ? 'font-black scale-105 transform' : ''}`}
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