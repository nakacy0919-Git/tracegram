import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

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
  onExit
}) {
  if (!activeProblem) return null;

  const cleanHint = activeProblem.hint.replace(/【.*?】/, '').trim();
  const roleColors = getElementColor(activeProblem.targetRole);
  const roleInitial = activeProblem.targetRole.charAt(0).toUpperCase();
  const sortedPlayers = Object.values(playersData || {}).sort((a, b) => b.score - a.score);

  return (
    <div className="flex-1 flex flex-col relative touch-none z-10 w-full overflow-hidden" ref={mainContainerRef} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onTouchMove={handlePointerMove} onTouchEnd={handlePointerUp}>
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

      <div className="flex justify-between items-end px-4 md:px-10 py-4 border-b border-slate-200/50 bg-white/30 backdrop-blur-sm w-full z-20">
        <div className="flex items-center gap-4">
          <button onClick={onExit} className="box p-2 text-rose-500"><XCircle size={22} /></button>
          <div>
            <div className="text-sm text-slate-400 mb-1 font-black">{activeCategory.title} [Lv.{selectedLevel}]</div>
            <div className="text-xl md:text-2xl font-black text-slate-700">Q. {currentProblemIdx + 1} / {filteredProblems.length}</div>
          </div>
        </div>
        <div className="flex items-end gap-4 text-right">
          <div><div className="text-3xl md:text-5xl font-black text-cyan-600 tracking-tighter">{score}</div></div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-between p-4 md:p-8 w-full max-w-[1400px] mx-auto overflow-hidden relative">
        <div className="w-full flex justify-center mb-6 md:mb-10 text-center z-10 pt-4 md:pt-8">
          <AnimatePresence mode="wait">
            <motion.div key={`instruction-${activeProblem.targetRole}`} initial={{ x: 1000, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -1000, opacity: 0 }} transition={{ type: "tween", duration: 0.3 }} className="flex items-center gap-3">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl font-black shadow-md border-4 border-white ${roleColors.bg} ${roleColors.text}`}>{roleInitial}</div>
              <p className={`text-xl md:text-3xl font-black ${roleColors.text} drop-shadow-sm`}>{cleanHint}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full relative bg-white/60 rounded-3xl border border-slate-100 shadow-inner p-6 md:p-12 mb-4 flex flex-col justify-center min-h-[160px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={`sentence-${currentProblemIdx}`} initial={{ x: 800, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -800, opacity: 0 }} transition={{ type: "tween", duration: 0.2 }} className="w-full">
              <div className="text-left leading-[3.5rem] md:leading-[5rem] w-full">
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
                <div className="w-full text-left mt-6 md:mt-8">
                  <p className="text-base md:text-xl text-slate-500 font-bold bg-white/70 inline-block px-6 py-3 rounded-2xl shadow-sm border border-slate-100">{activeProblem.translation}</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full flex flex-col items-center min-h-[90px] z-10">
          <AnimatePresence mode="wait">
            {feedbackState === 'idle' ? (
              <motion.button key="answer-btn" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} onClick={submitAnswer} disabled={selectedIndices.length === 0} className={`box flex items-center gap-3 font-black text-2xl px-12 py-4 rounded-3xl transition-transform ${selectedIndices.length === 0 ? "opacity-50 cursor-not-allowed" : "text-cyan-600 hover:scale-105"}`}><CheckCircle2 size={32} /> Answer!</motion.button>
            ) : feedbackState === 'correct' ? (
              <motion.div key="bonus-display" className="text-emerald-500 font-black text-3xl">+{lastBonus?.points || 0} pts</motion.div>
            ) : <motion.div key="wrong-display" className="text-rose-500 font-black text-3xl">Miss...</motion.div>}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}