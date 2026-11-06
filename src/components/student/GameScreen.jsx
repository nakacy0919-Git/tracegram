import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, AlertTriangle } from 'lucide-react'; 
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
    osc.onended = () => { osc.disconnect(); gain.disconnect(); ctx.close().catch(() => {}); };
  } catch (e) {
    console.error("Audio playback failed", e);
  }
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
  combo,
  selectedIndices,
  feedbackState,
  lastBonus,
  mainContainerRef,
  handlePointerDown,
  handlePointerMove,
  handlePointerUp,
  submitAnswer,
  onExit,
  onRetryTrace
}) {
  
  const [displayTokens, setDisplayTokens] = useState([]);
  const [bugIndex, setBugIndex] = useState(null);
  const [isBugSlashed, setIsBugSlashed] = useState(true); 
  const [slashingIndex, setSlashingIndex] = useState(null); 
  const [shake, setShake] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  const SLASH_ANIMATION_DURATION = 300;

  useEffect(() => {
    if (!activeProblem) return;
    setShowTranslation(false);

    if (gameMode === 'bug_slash') {
      const bugDictionary = ["to", "at", "in", "on", "is", "are", "a", "the", "that", "with", "about", "for"];
      const randomBug = bugDictionary[Math.floor(Math.random() * bugDictionary.length)];
      
      const insertIdx = Math.floor(Math.random() * Math.max(1, activeProblem.tokens.length - 1)) + 1;
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

  const cleanHint = (activeProblem.hint || '指定された文法のまとまりをなぞってください').replace(/【.*?】/, '').trim();
  const roleInitial = (activeProblem.targetRole || '?').charAt(0).toUpperCase();
  const sortedPlayers = Object.values(playersData || {}).sort((a, b) => b.score - a.score);
  const targets = [...(activeProblem.targetIndices || (activeProblem.targetIndex !== undefined ? [activeProblem.targetIndex] : []))].sort((a,b)=>a-b);
  const requiresMultiStroke = targets.some((index, i) => i > 0 && index !== targets[i - 1] + 1);
  const flowAutoJudge = gameMode === 'flow' && !requiresMultiStroke;

  return (
    <div className="tg-workspace flex-1 flex flex-col relative z-10 w-full min-h-[100dvh] overflow-y-auto overflow-x-hidden" ref={mainContainerRef} onPointerMove={handlePointerMove} onPointerUp={() => handlePointerUp(flowAutoJudge)} onPointerCancel={() => handlePointerUp(false)}>
      
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

      <div className="flex justify-between items-center px-4 md:px-8 py-3 border-b border-[#d8d8ca] bg-[#f9f6ee]/95 backdrop-blur-sm w-full z-20 gap-4">
        <div className="flex items-center gap-4">
          <button type="button" onClick={onExit} aria-label="教材選択へ戻る" className="tg-outline rounded-full p-2.5 shrink-0"><ArrowLeft size={20}/></button>
          <div>
            <div className="text-xs md:text-sm font-semibold text-[#5e7565] truncate max-w-[45vw] md:max-w-[60vw]">{activeCategory.title} · Lv.{selectedLevel}</div>
            <div className="text-sm font-bold text-[#293b30]">Q {currentProblemIdx + 1} <span className="font-normal text-stone-500">/ {filteredProblems.length}</span></div>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-lg md:text-2xl font-bold text-[#376251] tabular-nums">{score.toLocaleString()}</div>
          <div className="text-[11px] font-semibold text-stone-500">{combo > 1 ? `${combo} combo` : 'SCORE'}</div>
        </div>
      </div>

      <div className="w-full h-1 bg-[#e5e4d9]"><div className="h-full bg-[#739a80] transition-all duration-500" style={{width: `${(currentProblemIdx / Math.max(1, filteredProblems.length)) * 100}%`}} /></div>
      <div className="flex-1 flex flex-col items-center justify-start py-5 px-3 md:px-7 w-full max-w-[1100px] mx-auto relative">
        
        <div className="w-full mb-4 flex items-start gap-3 px-2">
          <span className="w-9 h-9 shrink-0 rounded-full border border-[#a5b9a7] bg-[#e9f0e7] text-[#365e48] flex items-center justify-center font-bold text-lg">{roleInitial}</span>
          <div className="min-w-0">
            <p className="text-[#2b3d32] text-base md:text-xl font-bold leading-snug">
              {gameMode === 'bug_slash' && !isBugSlashed
                ? <span className="inline-flex items-center gap-2"><AlertTriangle size={18}/> 余分な単語を見つけよう</span>
                : cleanHint}
            </p>
            <p className="text-xs md:text-sm text-[#788679] mt-1">
              {gameMode === 'flow' ? (requiresMultiStroke ? '必要な単語を選び、判定を押す' : '単語をなぞり、指を離すと判定') :
                (gameMode === 'bug_slash' && !isBugSlashed ? '不要な単語をタップ' : 'なぞってから判定する')}
            </p>
          </div>
        </div>
        <motion.div 
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className={`tg-paper tg-note tg-margin tg-holes w-full relative rounded-[22px] py-8 px-4 pl-12 md:p-10 md:pl-16 mb-3 flex flex-col justify-center min-h-[190px] overflow-hidden touch-none transition-colors ${gameMode === 'bug_slash' && !isBugSlashed ? 'ring-2 ring-[#c4a387]' : ''}`}
        >
          <AnimatePresence mode="wait">
            <motion.div key={`sentence-${currentProblemIdx}-${isBugSlashed}`} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -5, opacity: 0 }} transition={{ duration: 0.2 }} className="w-full">
              <div className="text-left leading-[2.6rem] md:leading-[3.6rem] w-full relative">
                
                <AnimatePresence>
                  {displayTokens.map((token, idx) => {
                    const isBugWord = gameMode === 'bug_slash' && !isBugSlashed && idx === bugIndex;
                    const isSlashing = idx === slashingIndex;
                    
                    let isSelected = false;
                    let isGlowing = false;
                    let bgClass = "bg-transparent text-[#334239]";
                    
                    if (isBugSlashed) {
                      isSelected = selectedIndices.includes(idx);
                      isGlowing = activeProblem.modifiedIndices ? activeProblem.modifiedIndices.includes(idx) : activeProblem.modifiedIndex === idx;
                    }

                    if (isSlashing) {
                      bgClass = "text-[#874f43] bg-[#f3d9cb] border-b-[3px] border-[#b57362]";
                    } else if (isSelected) {
                      bgClass = feedbackState === 'wrong' ? "bg-[#f0cec4] text-[#783e36] border-b-[3px] border-[#a46e60]" : "bg-[#dbe9d9] text-[#2a503b] border-b-[3px] border-[#5c8a6e]";
                    } else if (isGlowing) {
                      bgClass = "bg-[#eee6c8] text-[#735838] border-b-2 border-dashed border-[#c3a56d]";
                    }

                    return (
                      <motion.span 
                        key={`token-${idx}`} 
                        data-token-idx={idx} // 🌟 ここが抜けていました！これがないとなぞり判定が動きません。
                        onPointerDown={(e) => handleTokenClick(e, idx)}
                         role="button"
                         tabIndex={gameMode === 'bug_slash' && !isBugSlashed ? -1 : 0}
                         aria-label={`${token} を選択`}
                         aria-pressed={isSelected}
                         onKeyDown={(e) => {
                           if (e.key === 'Enter' || e.key === ' ') {
                             e.preventDefault();
                             handleTokenClick(e, idx);
                             handlePointerUp(false);
                           }
                         }} 
                        exit={isBugWord ? { 
                          scale: [1, 2.5],  
                          opacity: 0, 
                          rotate: [0, -15, 15], 
                          filter: ["blur(0px)", "blur(5px)"],
                          y: -40 
                        } : {}}
                        transition={{ duration: SLASH_ANIMATION_DURATION / 1000, ease: "easeOut" }}
                        className={`inline-block text-xl md:text-3xl lg:text-4xl font-semibold px-1.5 md:px-2 mx-0.5 md:mx-1 rounded-md select-none transition-colors duration-150 ${bgClass}`}
                      >
                        {token}
                      </motion.span>
                    );
                  })}
                </AnimatePresence>

              </div>
              {activeProblem.translation && isBugSlashed && (
                <div className="w-full text-left mt-5 pt-3 border-t border-[#e3e6d9]">
                  <button type="button" onClick={() => setShowTranslation(prev=>!prev)}
                    className="text-xs font-bold text-[#5b7664] hover:underline">
                    {showTranslation ? '日本語訳を閉じる' : '日本語訳を見る'}
                  </button>
                  {showTranslation && <p className="text-sm md:text-base text-stone-600 mt-2 leading-relaxed">{activeProblem.translation}</p>}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="w-full flex flex-col items-center min-h-[100px] z-20">
          <AnimatePresence mode="wait">
            {feedbackState === 'idle' && isBugSlashed && (gameMode !== 'flow' || requiresMultiStroke) ? (
              <motion.button 
                key="answer-btn" 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} 
                onClick={submitAnswer} 
                disabled={selectedIndices.length === 0} 
                className={`flex items-center gap-2 font-semibold text-base md:text-lg px-8 py-3.5 rounded-xl transition-all ${selectedIndices.length === 0 ? "tg-outline text-stone-400 cursor-not-allowed" : "tg-primary"}`}
              >
                <CheckCircle2 size={20} /> 判定する
              </motion.button>
            ) : feedbackState === 'correct' ? (
              <motion.div key="correct-display" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-[#3d7960] font-semibold tg-serif text-3xl md:text-4xl">
                正解！
              </motion.div>
            ) : null}
          </AnimatePresence>
          {gameMode === 'flow' && !requiresMultiStroke && feedbackState === 'idle' && isBugSlashed && (
            <button type="button" onClick={submitAnswer} disabled={!selectedIndices.length}
              className="sr-only focus:not-sr-only focus:mt-2 focus:rounded-xl focus:px-5 focus:py-3 focus:tg-primary">
              選択した単語を判定する
            </button>
          )}
        </div>

      </div>

      <AnimatePresence>
        {feedbackState === 'wrong' && (
          <motion.div 
            key="wrong-modal-overlay"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#27352f]/65 backdrop-blur-[3px]"
          >
            <motion.div 
              key="wrong-modal-content"
              initial={{ scale: 0.9, y: 30, opacity: 0 }} 
              animate={{ scale: 1, y: 0, opacity: 1 }} 
              exit={{ scale: 0.9, y: 30, opacity: 0 }} 
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="tg-paper rounded-[22px] tg-note shadow-xl w-full max-w-2xl border border-[#d7d7c8] flex flex-col max-h-[90dvh]"
            >
              <div className="p-4 md:p-6 overflow-y-auto flex flex-col gap-4">
                <div className="w-full bg-[#edf2e6]/90 p-4 rounded-xl border border-[#d9e5d7] flex flex-col items-center">
                  <p className="text-[#3e6558] font-bold text-sm mb-2">正しい構造はこちら</p>
                  <div className="text-center leading-[2.5rem] w-full">
                   {activeProblem.tokens.map((token, idx) => {
                     const isTarget = (activeProblem.targetIndices || (activeProblem.targetIndex !== undefined ? [activeProblem.targetIndex] : [])).includes(idx);
                     return (
                       <span key={`ans-${idx}`} className={`inline-block text-lg md:text-2xl font-semibold px-1 mx-0.5 ${isTarget ? 'bg-[#d5e7d3] text-[#315a42] border-b-[3px] border-[#739878]' : 'text-stone-400'}`}>
                         {token}
                       </span>
                     );
                   })}
                  </div>
                  {activeProblem.translation && (
                    <p className="text-slate-500 font-bold mt-4 text-sm md:text-base italic">{activeProblem.translation}</p>
                  )}
                </div>
                <PronunciationMission key={activeProblem.id || currentProblemIdx} targetSentence={activeProblem.tokens.join(' ')} onComplete={onRetryTrace} onFallback={onRetryTrace} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}