import React from 'react';
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
  handleTracePointerUp,
  activeParagraphRef
}) {
  // 文字サイズクラスに応じて行間（line-height）を自動調整
  const leadingClass = textSizeClass === 'text-base' ? 'leading-[2.5rem]' : textSizeClass === 'text-xl' ? 'leading-[3.5rem]' : 'leading-[4.2rem]';

  return (
    <div className="h-full flex flex-col bg-slate-50 border-r border-slate-200">
      
      {/* 🌟 左側の固定ヘッダー（設定コントローラー） */}
      <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 bg-white z-20 shadow-[0_4px_10px_-4px_rgba(0,0,0,0.05)] flex-shrink-0">
        <div className="flex items-center gap-2 text-indigo-600">
          <BookOpen size={24} />
          <h2 className="text-xl font-black">Reading Passage</h2>
        </div>
        
        <div className="flex items-center gap-2">
          {/* 左右入替ボタン */}
          <button 
            onClick={() => setIsSwapped(!isSwapped)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-200/60 hover:bg-indigo-100 text-slate-500 hover:text-indigo-600 text-xs font-black transition-all"
            title="左右の画面を入れ替える"
          >
            <ArrowLeftRight size={16} /> 入替
          </button>

          {/* フォント切替 */}
          <div className="flex bg-slate-200/60 p-1 rounded-xl items-center gap-1 hidden md:flex">
            <button onClick={() => setFontClass('font-sans')} className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${fontClass === 'font-sans' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>ゴシック</button>
            <button onClick={() => setFontClass('font-serif')} className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${fontClass === 'font-serif' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>明朝</button>
          </div>
          
          {/* 文字サイズ切替 */}
          <div className="flex bg-slate-200/60 p-1 rounded-xl items-center gap-1 hidden lg:flex">
            <button onClick={() => setTextSizeClass('text-base')} className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${textSizeClass === 'text-base' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>小</button>
            <button onClick={() => setTextSizeClass('text-xl')} className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${textSizeClass === 'text-xl' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>中</button>
            <button onClick={() => setTextSizeClass('text-2xl')} className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${textSizeClass === 'text-2xl' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>大</button>
          </div>
        </div>
      </div>

      {/* 📖 左側のスクロールエリア（長文本体） */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 md:py-8 pb-32">
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
              <div 
                key={paragraph.p_id} 
                ref={isActive ? activeParagraphRef : null} 
                className={`${opacityClass} scroll-mt-6 md:scroll-mt-8`}
              >
                {/* 段落番号の表示 */}
                <div className={`text-xs font-sans tracking-wider uppercase mb-1 flex items-center gap-1.5 ${isActive ? 'text-indigo-600 font-black' : 'text-slate-400 font-bold'}`}>
                  <span>Paragraph {pIdx + 1}</span>
                  <span className="opacity-60">(第{pIdx + 1}段落)</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />}
                </div>

                {/* 本文エリア */}
                <div className={isActive ? 'bg-indigo-50/20 p-3 rounded-xl border-2 border-indigo-200 shadow-inner' : 'bg-slate-50/50 p-3 rounded-xl border border-slate-100'}>
                  {paragraph.tokens.map((token, idx) => {
                    let spanClass = "inline-block px-1.5 py-1 transition-all select-none ";
                    
                    if (isActive) {
                      spanClass += "cursor-pointer ";
                      const isSelected = selectedIndices.includes(idx);
                      const isPrevSelected = isSelected && selectedIndices.includes(idx - 1);
                      const isNextSelected = isSelected && selectedIndices.includes(idx + 1);
                      
                      // 隙間のない美しいハイライト処理
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
                      // 過去・未来の段落はプレーンに表示
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
}