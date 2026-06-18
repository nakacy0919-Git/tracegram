import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle2, Sword, AlertTriangle } from 'lucide-react'; 
import PronunciationMission from './PronunciationMission'; 

const playSlashSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.6, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {
    console.error("Audio playback failed", e);
  }
};

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
  gameMode,
  addBonusScore,
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
  
  const [displayTokens, setDisplayTokens] = useState([]);
  const [bugIndex, setBugIndex] = useState(null);
  const [isBugSlashed, setIsBugSlashed] = useState(true); 
  const [slashingIndex, setSlashingIndex] = useState(null); 
  const [shake, setShake] = useState(false);

  const SLASH_ANIMATION_DURATION = 300;

  useEffect(() => {
    if (!activeProblem) return;

    if (gameMode === 'bug_slash') {
      const bugDictionary = ["to", "at", "in", "on", "is", "are", "a", "the", "that", "with", "about", "for"];
      const randomBug = bugDictionary[Math.floor(Math.random() * bugDictionary.length)];
      
      const insertIdx = Math.floor(Math.random() * (activeProblem.tokens.length - 1)) + 1;
      const newTokens = [...activeProblem.tokens];
      newTokens.splice(insertIdx, 0, randomBug);

      setDisplayTokens(newTokens);
      setBugIndex(insertIdx);
      setIsBugSlashed(false); 
      setSlashingIndex(null);
    } else {
      setDisplayTokens(activeProblem.tokens);
      setBugIndex(null);
      setIsBugSlashed(true);
      setSlashingIndex(null);
    }
  }, [activeProblem, gameMode]);

  const handleTokenClick = (e, idx) => {
    if (gameMode === 'bug_slash' && !isBugSlashed && slashingIndex === null) {
      if (idx === bugIndex) {
        playSlashSound();
        if (navigator.vibrate) navigator.vibrate(50);
        if (addBonusScore) addBonusScore(500); 
        
        setSlashingIndex(idx);
        
        setTimeout(() => {
          setIsBugSlashed(true);
          setDisplayTokens(activeProblem.tokens);
          setSlashingIndex(null);
        }, SLASH_ANIMATION_DURATION);

      } else {
        setShake(true);
        setTimeout(() => setShake(false), 400);
      }
      return; 
    }

    if (isBugSlashed) {
      handlePointerDown(e, idx);
    }
  };

  if (!activeProblem) return null;

  const cleanHint = activeProblem.hint.replace(/【.*?】/, '').trim();
  const roleColors = getElementColor(activeProblem.targetRole);
  const roleInitial = activeProblem.targetRole.charAt(0).toUpperCase();
  const sortedPlayers = Object.values(playersData || {}).sort((a, b) => b.score - a.score);

  return (
    <div className="flex-1 flex flex-col relative z-10 w-full overflow-y-auto overflow-x-hidden" ref={mainContainerRef} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onTouchMove={handlePointerMove} onTouchEnd={handlePointerUp}>
      
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

      <div className={`flex justify-between items-end px-4 md:px-10 py-2 md:py-3 border-b ${gameMode === 'bug_slash' ? 'border-rose-200 bg-rose-50/80' : 'border-slate-200/50 bg-white/30'} backdrop-blur-sm w-full z-20 transition-colors`}>
        <div className="flex items-center gap-4">
          <button onClick={onExit} className="box p-2 text-rose-500"><XCircle size={22} /></button>
          <div>
            <div className={`text-sm mb-1 font-black flex items-center gap-2 ${gameMode === 'bug_slash' ? 'text-rose-500' : 'text-slate-400'}`}>
              {gameMode === 'bug_slash' && <Sword size={16} />}
              {activeCategory.title} [Lv.{selectedLevel}]
            </div>
            <div className="text-xl md:text-2xl font-black text-slate-700">Q. {currentProblemIdx + 1} / {filteredProblems.length}</div>
          </div>
        </div>
        <div className="flex items-end gap-4 text-right">
          <div><div className="text-5xl md:text-7xl font-black text-cyan-600 tracking-tighter drop-shadow-sm">{score}</div></div>
        </div>
      </div>

      <div className={`flex-1 flex flex-col items-center justify-start p-2 md:p-4 w-full max-w-[1400px] mx-auto ${feedbackState === 'wrong' ? 'pb-80' : 'pb-4'} relative`}>
        
        <div className="w-full flex justify-start mb-2 md:mb-3 text-left z-10 pt-1 md:pt-2 px-2">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-md border-4 border-white flex-shrink-0 ${roleColors.bg} ${roleColors.text}`}>{roleInitial}</div>
            <p className={`text-lg md:text-2xl font-black ${roleColors.text} drop-shadow-sm leading-tight`}>
              {gameMode === 'bug_slash' && !isBugSlashed 
                ? <span className="text-rose-600 flex items-center gap-2"><AlertTriangle size={24} className="animate-pulse" /> 英文をスキャンし、不正なバグ単語を破壊せよ！</span> 
                : cleanHint
              }
            </p>
          </div>
        </div>

        <motion.div 
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className={`w-full relative rounded-3xl border shadow-inner p-4 md:p-6 mb-2 md:mb-3 flex flex-col justify-center min-h-[100px] overflow-hidden touch-none transition-colors ${
            gameMode === 'bug_slash' && !isBugSlashed ? 'bg-rose-50 border-rose-200' : 'bg-white/60 border-slate-100'
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div key={`sentence-${currentProblemIdx}-${isBugSlashed}`} initial={{ x: 800, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -800, opacity: 0 }} transition={{ type: "tween", duration: 0.2 }} className="w-full">
              <div className="text-left leading-[2.5rem] md:leading-[4rem] w-full relative">
                
                <AnimatePresence>
                  {displayTokens.map((token, idx) => {
                    const isBugWord = gameMode === 'bug_slash' && !isBugSlashed && idx === bugIndex;
                    const isSlashing = idx === slashingIndex;
                    
                    let isSelected = false;
                    let isGlowing = false;
                    let bgClass = "bg-transparent text-slate-700";
                    
                    if (isBugSlashed) {
                      isSelected = selectedIndices.includes(idx);
                      isGlowing = activeProblem.modifiedIndices ? activeProblem.modifiedIndices.includes(idx) : activeProblem.modifiedIndex === idx;
                    }

                    if (isSlashing) {
                      bgClass = "text-rose-600 bg-rose-200 border-b-4 border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.6)] scale-110";
                    } else if (isSelected) {
                      bgClass = feedbackState === 'wrong' ? "bg-rose-300 text-rose-900 shadow-[0_0_15px_rgba(253,164,175,0.6)]" : `${roleColors.bg} ${roleColors.text} ${roleColors.shadow}`;
                    } else if (isGlowing) {
                      bgClass = "bg-amber-100 text-amber-700 shadow-[0_0_10px_rgba(254,243,199,0.5)] animate-pulse";
                    }

                    return (
                      <motion.span 
                        key={`token-${idx}`} 
                        data-token-idx={idx} // 🌟 ここが抜けていました！これがないとなぞり判定が動きません。
                        onPointerDown={(e) => handleTokenClick(e, idx)} 
                        exit={isBugWord ? { 
                          scale: [1, 2.5],  
                          opacity: 0, 
                          rotate: [0, -15, 15], 
                          filter: ["blur(0px)", "blur(5px)"],
                          y: -40 
                        } : {}}
                        transition={{ duration: SLASH_ANIMATION_DURATION / 1000, ease: "easeOut" }}
                        className={`inline-block text-2xl md:text-4xl lg:text-5xl font-black px-1.5 md:px-2 mx-0.5 md:mx-1 rounded-lg select-none transition-all duration-150 ${bgClass}`}
                      >
                        {token}
                      </motion.span>
                    );
                  })}
                </AnimatePresence>

              </div>
              {activeProblem.translation && isBugSlashed && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full text-left mt-2 md:mt-4">
                  <p className="text-sm md:text-base text-slate-500 font-bold bg-white/70 inline-block px-4 py-1.5 rounded-xl shadow-sm border border-slate-100 italic">{activeProblem.translation}</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="w-full flex flex-col items-center min-h-[100px] z-20">
          <AnimatePresence mode="wait">
            {feedbackState === 'idle' && isBugSlashed ? (
              <motion.button 
                key="answer-btn" 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} 
                onClick={submitAnswer} 
                disabled={selectedIndices.length === 0} 
                className={`flex items-center gap-2 md:gap-3 font-black text-xl md:text-2xl px-12 md:px-16 py-4 md:py-5 rounded-3xl shadow-lg border-b-4 border-slate-200 transition-all ${selectedIndices.length === 0 ? "bg-slate-100 text-slate-300 cursor-not-allowed" : "bg-white text-cyan-600 hover:scale-105 active:scale-95 active:border-b-0"}`}
              >
                <CheckCircle2 size={28} /> Answer!
              </motion.button>
            ) : feedbackState === 'correct' ? (
              <motion.div key="correct-display" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-emerald-500 font-black text-4xl md:text-6xl tracking-widest drop-shadow-md">
                EXCELLENT!
              </motion.div>
            ) : feedbackState === 'wrong' ? (
              <motion.div key="wrong-display" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center w-full max-w-3xl gap-2 md:gap-3">
                <div className="w-full bg-emerald-50/90 backdrop-blur-sm p-2 md:p-3 rounded-2xl border-2 border-emerald-200 shadow-sm flex flex-col items-center">
                  <p className="text-emerald-600 font-black text-xs md:text-sm mb-1 opacity-80">正しい構造はこちら</p>
                  <div className="text-center leading-[2rem] md:leading-[2.5rem] w-full">
                   {activeProblem.tokens.map((token, idx) => {
                     const isTarget = activeProblem.targetIndices.includes(idx);
                     return (
                       <span key={`ans-${idx}`} className={`inline-block text-base md:text-xl font-black px-1 mx-0.5 ${isTarget ? 'bg-emerald-200 text-emerald-900 border-b-2 border-emerald-400' : 'text-slate-400'}`}>
                         {token}
                       </span>
                     );
                   })}
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

      </div>

      <AnimatePresence>
        {feedbackState === 'wrong' && (
          <motion.div 
            key="wrong-modal-overlay"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div 
              key="wrong-modal-content"
              initial={{ scale: 0.9, y: 30, opacity: 0 }} 
              animate={{ scale: 1, y: 0, opacity: 1 }} 
              exit={{ scale: 0.9, y: 30, opacity: 0 }} 
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl border-4 border-rose-100 flex flex-col max-h-[90dvh]"
            >
              <div className="p-4 md:p-6 overflow-y-auto flex flex-col gap-4">
                <div className="w-full bg-emerald-50/90 p-4 rounded-2xl border-2 border-emerald-200 shadow-sm flex flex-col items-center">
                  <p className="text-emerald-600 font-black text-sm mb-2 opacity-80">正しい構造はこちら</p>
                  <div className="text-center leading-[2.5rem] w-full">
                   {activeProblem.tokens.map((token, idx) => {
                     const isTarget = activeProblem.targetIndices.includes(idx);
                     return (
                       <span key={`ans-${idx}`} className={`inline-block text-xl md:text-3xl font-black px-1 mx-0.5 ${isTarget ? 'bg-emerald-200 text-emerald-900 border-b-2 border-emerald-400' : 'text-slate-400'}`}>
                         {token}
                       </span>
                     );
                   })}
                  </div>
                  {activeProblem.translation && (
                    <p className="text-slate-500 font-bold mt-4 text-sm md:text-base italic">{activeProblem.translation}</p>
                  )}
                </div>
                <PronunciationMission targetSentence={activeProblem.tokens.join(' ')} onComplete={(acc) => onNextProblem(acc)} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}