import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, AlertTriangle } from 'lucide-react'; 
import PronunciationMission from './PronunciationMission';
import SuccessFlash from './SuccessFlash';
import { BATTLE_MODES, calculateBattleBoard } from '../../lib/battleSession.mjs'; 

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
  battleMode = 'race',
  latestCheer,
  onCheer,
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
  const board = calculateBattleBoard(playersData, battleMode, filteredProblems.length);
  const sortedPlayers = board.players;
  const targets = [...(activeProblem.targetIndices || (activeProblem.targetIndex !== undefined ? [activeProblem.targetIndex] : []))].sort((a,b)=>a-b);
  const requiresMultiStroke = targets.some((index, i) => i > 0 && index !== targets[i - 1] + 1);
  const flowAutoJudge = gameMode === 'flow' && !requiresMultiStroke;

  return (
    <div className="tg-workspace tg-fluid-screen tg-game-workspace flex flex-col relative z-10 overflow-y-auto" ref={mainContainerRef} onPointerMove={handlePointerMove} onPointerUp={() => handlePointerUp(flowAutoJudge)} onPointerCancel={() => handlePointerUp(false)}>
      
      {isMultiplayer && sortedPlayers.length > 0 && (
        <div className="relative z-30 w-full bg-[#f2f5ec] border-b border-[#dce3d6] px-3 py-2">
          <div className="max-w-[1050px] mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              <span className="text-xs font-bold text-[#3c6650]">{BATTLE_MODES[battleMode]?.label}</span>
              {battleMode === 'coop' ? (
                <span className="text-xs md:text-sm font-semibold text-[#355d47]">
                  全員の正解 {board.totalSolved}/{board.possible} · 完了 {board.finishedCount}/{sortedPlayers.length}
                </span>
              ) : battleMode === 'teams' ? (
                <span className="text-xs md:text-sm font-bold text-[#3f624c]">
                  A組 {board.teams.A.score.toLocaleString()} pt : B組 {board.teams.B.score.toLocaleString()} pt
                </span>
              ) : sortedPlayers.map((player, index) => (
                <span key={player.id} className={'text-xs px-2 py-1 rounded-full border font-bold ' +
                  (player.id === myPeerId ? 'bg-[#d8ebdf] border-[#83b295]' : 'bg-white/80 border-[#dce3d6]')}>
                  {index + 1}位 {player.name} {player.score.toLocaleString()}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <span className="sr-only">友達にエールを送る</span>
              {['👏', '🔥', '💡'].map(emoji => (
                <button key={emoji} type="button" title={'エール ' + emoji}
                  aria-label={emoji + ' のエールを送る'} onClick={() => onCheer?.(emoji)}
                  className="rounded-lg border border-[#d7e0d4] bg-white/80 hover:bg-[#dcefe3] px-2 py-1 text-base">
                  {emoji}
                </button>
              ))}
            </div>
          </div>
          {latestCheer && Date.now() - latestCheer.at < 12000 &&
            <p role="status" className="text-[11px] text-center text-[#52765b] mt-1">
              {latestCheer.from} さんから {latestCheer.emoji} エール！
            </p>}
        </div>
      )}

      <div className="flex justify-between items-center px-4 md:px-8 py-3 border-b border-[#d8d8ca] bg-[#f9f6ee]/95 backdrop-blur-sm w-full z-20 gap-4">
        <div className="flex items-center gap-4">
          <button type="button" onClick={onExit} aria-label="教材選択へ戻る" className="tg-outline rounded-full p-2.5 shrink-0"><ArrowLeft size={20}/></button>
          <div>
            <div className="text-xs md:text-sm font-semibold text-[#5e7565] truncate max-w-[45vw] md:max-w-[60vw]">{activeCategory.title} · {activeCategory.categoryId === 'grammar_mix' ? 'MIX' : selectedLevel === 'all' ? '復習' : `Lv.${selectedLevel}`}</div>
            <div className="text-sm font-bold text-[#293b30]">Q {currentProblemIdx + 1} <span className="font-normal text-stone-500">/ {filteredProblems.length}</span></div>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-lg md:text-2xl font-bold text-[#376251] tabular-nums">{score.toLocaleString()}</div>
          <div className="text-[11px] font-semibold text-stone-500">{combo > 1 ? `${combo} combo` : 'SCORE'}</div>
        </div>
      </div>

      <div className="w-full h-1 bg-[#e5e4d9]"><div className="h-full bg-[#739a80] transition-all duration-500" style={{width: `${(currentProblemIdx / Math.max(1, filteredProblems.length)) * 100}%`}} /></div>
      <div className="tg-game-content flex-1 flex flex-col items-center justify-start py-5 px-3 md:px-7 w-full max-w-[1100px] mx-auto relative">
        
        <div className="tg-game-hint w-full mb-4 flex items-start gap-3 px-2">
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
          className={`tg-game-note tg-paper tg-note tg-margin tg-holes w-full relative rounded-[22px] py-8 px-4 pl-12 md:p-10 md:pl-16 mb-3 flex flex-col justify-center min-h-[190px] overflow-hidden touch-none transition-colors ${gameMode === 'bug_slash' && !isBugSlashed ? 'ring-2 ring-[#c4a387]' : ''}`}
        >
          <AnimatePresence mode="wait">
            <motion.div key={`sentence-${currentProblemIdx}-${isBugSlashed}`} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -5, opacity: 0 }} transition={{ duration: 0.2 }} className="w-full">
              <div className="tg-game-sentence text-left leading-[2.6rem] md:leading-[3.6rem] w-full relative">
                
                <AnimatePresence>
                  {displayTokens.map((token, idx) => {
                    const isBugWord = gameMode === 'bug_slash' && !isBugSlashed && idx === bugIndex;
                    const isSlashing = idx === slashingIndex;
                    
                    const isSelected = isBugSlashed && selectedIndices.includes(idx);
                    const isGlowing = isBugSlashed &&
                      (activeProblem.modifiedIndices
                        ? activeProblem.modifiedIndices.includes(idx)
                        : activeProblem.modifiedIndex === idx);
                    const previousSelected = isSelected && selectedIndices.includes(idx - 1);
                    const nextSelected = isSelected && selectedIndices.includes(idx + 1);
                    const markerShape = previousSelected && nextSelected ? 'tg-mark-middle'
                      : nextSelected ? 'tg-mark-start' : previousSelected ? 'tg-mark-end' : '';
                    const markerClass = isSlashing ? 'tg-mark-slash'
                      : isSelected ? `tg-mark-selected ${markerShape} ${feedbackState === 'wrong' ? 'tg-mark-wrong' : ''}`
                      : isGlowing ? 'tg-mark-focus' : '';

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
                        className={`tg-ink-token text-xl md:text-3xl lg:text-4xl font-semibold select-none transition-colors duration-150 ${markerClass}`}
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

        <div className="tg-game-feedback w-full flex flex-col items-center min-h-[100px] z-20">
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
              <SuccessFlash key={`correct-${currentProblemIdx}`} />
            ) : null}
          </AnimatePresence>
          {gameMode === 'flow' && !requiresMultiStroke && feedbackState === 'idle' && isBugSlashed && (
            <button type="button" onClick={submitAnswer} disabled={!selectedIndices.length}
              className="sr-only focus:not-sr-only focus:mt-2 focus:rounded-xl focus:px-5 focus:py-3 focus:bg-[#3e6558] focus:text-white">
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
            className="tg-recovery-overlay fixed inset-0 z-[100] flex items-center justify-center px-3 py-3 sm:px-5 sm:py-4 bg-[#24332c]/65 backdrop-blur-[3px]"
          >
            <motion.div
              key="wrong-modal-content"
              role="dialog" aria-modal="true" aria-labelledby="tg-recovery-title"
              initial={{ scale: 0.96, y: 13, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.97, y: 10, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="tg-recovery-modal tg-paper tg-note rounded-[22px] shadow-[0_18px_70px_rgba(17,37,25,.30)] w-full max-w-[980px] min-w-0 max-h-[calc(100dvh-28px)] overflow-hidden flex flex-col border border-[#d4e2d5]"
            >
              <div className="w-full min-w-0 min-h-0 overflow-y-auto overscroll-contain p-3 sm:p-5 md:px-7 md:py-5 flex flex-col gap-3 md:gap-4">
                <div className="w-full rounded-[17px] bg-gradient-to-r from-[#eef6ee] via-[#f6faf4] to-[#eaf4ec] px-4 py-3 md:py-4 border border-[#d4e6d7] text-center">
                  <h2 id="tg-recovery-title" className="text-[#58816c] font-bold text-xs md:text-sm tracking-wide mb-2">
                    正しい構造はこちら
                  </h2>
                  <div className="w-full leading-[2rem] md:leading-[2.4rem]">
                    {activeProblem.tokens.map((token, idx) => {
                      const isTarget = (activeProblem.targetIndices ||
                        (activeProblem.targetIndex !== undefined ? [activeProblem.targetIndex] : [])).includes(idx);
                      return (
                        <span key={`ans-${idx}`}
                          className={`inline-block text-lg md:text-2xl font-semibold px-1 mx-0.5 ${isTarget ?
                            'bg-[#d4e9d9] text-[#365b43] border-b-[3px] border-[#81b298]' :
                            'text-[#748678]'}`}>
                          {token}
                        </span>
                      );
                    })}
                  </div>
                  {activeProblem.translation && (
                    <p className="text-[#647a76] font-medium mt-2 text-sm md:text-base">
                      {activeProblem.translation}
                    </p>
                  )}
                </div>
                <PronunciationMission
                  key={activeProblem.id || currentProblemIdx}
                  targetSentence={activeProblem.tokens.join(' ')}
                  onComplete={onRetryTrace}
                  onFallback={onRetryTrace}
                  onSkip={onRetryTrace}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}