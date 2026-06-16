import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
// 🌟 追加：先ほど作った音読ミッションのコンポーネントを読み込む
import PronunciationMission from './PronunciationMission'; 

const getElementColor = (role) => {
  if (!role) return { bg: "bg-cyan-200", text: "text-cyan-900", shadow: "shadow-[0_0_15px_rgba(165,243,252,0.8)]" };
  const r = role.toUpperCase();
  if (r.startsWith('S') || r.includes('主語')) return { bg: "bg-slate-300", text: "text-slate-800", shadow: "shadow-[0_0_15px_rgba(203,213,225,0.8)]" };
  if (r.startsWith('V') || r.includes('動詞')) return { bg: "bg-orange-200", text: "text-orange-900", shadow: "shadow-[0_0_15px_rgba(253,186,116,0.8)]" };
  if (r.startsWith('O') || r.includes('目的語')) return { bg: "bg-green-200", text: "text-green-900", shadow: "shadow-[0_0_15px_rgba(187,247,208,0.8)]" };
  if (r.startsWith('C') || r.includes('補語')) return { bg: "bg-cyan-200", text: "text-cyan-900", shadow: "shadow-[0_0_15px_rgba(165,243,252,0.8)]" };
  if (r.startsWith('M') || r.includes('修飾') || r.includes('副詞') || r.includes('形容詞') || r.includes('分詞')) return { bg: "bg-purple-200", text: "text-purple-900", shadow: "shadow-[0_0_15px_rgba(233,213,255,0.8)]" };
  return { bg: "bg-cyan-200", text: "text-cyan-900", shadow: "shadow-[0_0_15px_rgba(165,243,252,0.8)]" };
};

export default function GameScreen({
  isMultiplayer,
  playersData,
  myPeerId,
  activeCategory,
  selectedLevel,
  currentProblemIdx,
  filteredProblems,
  activeProblem,
  score,
  selectedIndices,
  feedbackState,
  lastBonus,
  mainContainerRef,
  handlePointerDown,
  handlePointerMove,
  handlePointerUp,
  submitAnswer,
  onExit,
  onNextProblem
}) {
  if (!activeProblem) return null;

  const cleanHint = activeProblem.hint.replace(/【.*?】/, '').trim();
  const roleColors = getElementColor(activeProblem.targetRole);
  const roleInitial = activeProblem.targetRole.charAt(0).toUpperCase();
  const sortedPlayers = Object.values(playersData || {}).sort((a, b) => b.score - a.score);

  return (
    <div className="flex-1 flex flex-col relative touch-none z-10 w-full overflow-y-auto overflow-x-hidden" ref={mainContainerRef} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onTouchMove={handlePointerMove} onTouchEnd={handlePointerUp}>
      {/* リアルタイムランキング */}
      {isMultiplayer && sortedPlayers.length > 0 && (
        <div className="absolute top-[80px] md:top-[90px] left-0 w-full z-40 flex flex-row flex-wrap justify-center gap-2 md:gap-4 px-2 pointer-events-none">
          {sortedPlayers.map((player, index) => {
            const isMe = player.id === myPeerId;
            const rankColors = index === 0 ? "bg-yellow-400 text-yellow-900 border-yellow-300" : index === 1 ? "bg-slate-200 text-slate-700 border-slate-300" : index === 2 ? "bg-amber-600 text-amber-50 border-amber-500" : "bg-white/90 text-slate-600 border-slate-200";
            return (
              <motion.div key={player.id} layout initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border-2 shadow-md backdrop-blur-md ${rankColors} ${isMe ? 'ring-2 ring-cyan-400 ring-offset-1' : ''}`}>
                <span className="font-black text-sm md:text-base italic">{index + 1}</span>
                <span className="font-bold text-xs md:text-sm truncate max-w-[60px] md:max-w-[100px]">{player.name === 'Host (You)' && isMe ? 'あなた' : player.name}</span>
                <span className="font-black text-sm md:text-lg tracking-tighter ml-1">{player.score}</span>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* ヘッダーエリア */}
      <div className="flex justify-between items-end px-4 md:px-10 py-4 border-b border-slate-200/50 bg-white/30 backdrop-blur-sm w-full z-20">
        <div className="flex items-center gap-4">
          <button onClick={onExit} className="box p-2 text-rose-500"><XCircle size={22} /></button>
          <div>
            <div className="text-sm text-slate-400 mb-1 font-black">{activeCategory.title} [Lv.{selectedLevel}]</div>
            <div className="text-xl md:text-2xl font-black text-slate-700">Q. {currentProblemIdx + 1} / {filteredProblems.length}</div>
          </div>
        </div>
        <div className="flex items-end gap-4 text-right">
          <div><div className="text-6xl md:text-8xl font-black text-cyan-600 tracking-tighter drop-shadow-sm">{score}</div></div>
        </div>
      </div>

      {/* メインエリア */}
      <div className="flex-1 flex flex-col items-center justify-start p-4 md:p-6 w-full max-w-[1400px] mx-auto pb-20 relative">
        
        {/* 指示文 */}
        <div className="w-full flex justify-start mb-4 md:mb-6 text-left z-10 pt-2 md:pt-4 px-2">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-3xl md:text-4xl font-black shadow-md border-4 border-white flex-shrink-0 ${roleColors.bg} ${roleColors.text}`}>{roleInitial}</div>
            <p className={`text-xl md:text-3xl font-black ${roleColors.text} drop-shadow-sm leading-tight`}>{cleanHint}</p>
          </div>
        </div>

        {/* 英文エリア */}
        <div className="w-full relative bg-white/60 rounded-3xl border border-slate-100 shadow-inner p-5 md:p-10 mb-4 flex flex-col justify-center min-h-[140px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={`sentence-${currentProblemIdx}`} initial={{ x: 800, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -800, opacity: 0 }} transition={{ type: "tween", duration: 0.2 }} className="w-full">
              <div className="text-left leading-[3rem] md:leading-[5rem] w-full">
                {activeProblem.tokens.map((token, idx) => {
                  const isSelected = selectedIndices.includes(idx);
                  const isGlowing = activeProblem.modifiedIndices ? activeProblem.modifiedIndices.includes(idx) : activeProblem.modifiedIndex === idx;
                  let bgClass = "bg-transparent text-slate-700";
                  if (isSelected) {
                    bgClass = feedbackState === 'wrong' ? "bg-rose-300 text-rose-900 shadow-[0_0_15px_rgba(253,164,175,0.6)]" : `${roleColors.bg} ${roleColors.text} ${roleColors.shadow}`;
                  } else if (isGlowing) {
                    bgClass = "bg-amber-100 text-amber-700 shadow-[0_0_10px_rgba(254,243,199,0.5)] animate-pulse";
                  }
                  return (
                    <motion.span key={idx} data-token-idx={idx} onPointerDown={(e) => handlePointerDown(e, idx)} className={`inline-block text-2xl md:text-4xl lg:text-5xl font-black px-1.5 md:px-2 mx-0.5 md:mx-1 rounded-lg cursor-pointer select-none transition-all duration-150 ${bgClass}`}>{token}</motion.span>
                  );
                })}
              </div>
              {activeProblem.translation && (
                <div className="w-full text-left mt-4 md:mt-6">
                  <p className="text-base md:text-lg text-slate-500 font-bold bg-white/70 inline-block px-5 py-2 rounded-xl shadow-sm border border-slate-100 italic">{activeProblem.translation}</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* アクションエリア */}
        <div className="w-full flex flex-col items-center min-h-[140px] z-20">
          <AnimatePresence mode="wait">
            {feedbackState === 'idle' ? (
              <motion.button 
                key="answer-btn" 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} 
                onClick={submitAnswer} 
                disabled={selectedIndices.length === 0} 
                className={`flex items-center gap-3 font-black text-2xl px-16 py-5 rounded-3xl shadow-lg border-b-4 border-slate-200 transition-all ${selectedIndices.length === 0 ? "bg-slate-100 text-slate-300 cursor-not-allowed" : "bg-white text-cyan-600 hover:scale-105 active:scale-95 active:border-b-0"}`}
              >
                <CheckCircle2 size={32} /> Answer!
              </motion.button>
            ) : feedbackState === 'correct' ? (
              <motion.div key="correct-display" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-emerald-500 font-black text-4xl md:text-6xl tracking-widest drop-shadow-md">
                EXCELLENT!
              </motion.div>
            ) : (
              /* 🌟 変更点：間違えた場合のアクションエリア */
              <motion.div key="wrong-display" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center w-full max-w-3xl gap-4">
                
                {/* 構造の正解表示（音読のヒントとして一番上に配置） */}
                <div className="w-full bg-emerald-50/90 backdrop-blur-sm p-4 rounded-2xl border-2 border-emerald-200 shadow-sm flex flex-col items-center">
                  <p className="text-emerald-600 font-black text-sm mb-2 opacity-80">正しい構造はこちら</p>
                  <div className="text-center leading-[2.5rem] w-full">
                   {activeProblem.tokens.map((token, idx) => {
                     const isTarget = activeProblem.targetIndices.includes(idx);
                     return (
                       <span key={`ans-${idx}`} className={`inline-block text-lg md:text-2xl font-black px-1 mx-0.5 ${isTarget ? 'bg-emerald-200 text-emerald-900 border-b-2 border-emerald-400' : 'text-slate-400'}`}>
                         {token}
                       </span>
                     );
                   })}
                 </div>
                </div>

                {/* 🌟 呼び出し：音読ミッションコンポーネント */}
                {/* propsとして、英文全体（joinして結合）と、合格した時の次へ進む関数（onNextProblem）を渡す */}
                <PronunciationMission 
                  targetSentence={activeProblem.tokens.join(' ')} 
                  onComplete={onNextProblem} 
                />
                
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}