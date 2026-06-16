"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Award, ArrowLeft, Zap, CheckCircle2, Mic, Volume2, Timer, XCircle, BarChart2, Users, Gamepad2, Crown, LogIn, UserPlus } from 'lucide-react';
import { useTrace } from '../hooks/useTrace';
import { useMultiplayer } from '../hooks/useMultiplayer';

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

const SUB_MAPPING = {
  'BASIC': ['basic_find_verb', 'basic_remove_m', 'basic_5patterns'],
  'SUBJECT': ['subj_prep', 'subj_verbal', 'subj_clause', 'subj_it', 'subj_inversion'],
  'VERB': ['verb_transitive', 'verb_tense', 'verb_passive', 'verb_phrasal'],
  'OBJECT': ['obj_svoo', 'obj_verbal', 'obj_clause', 'obj_it'],
  'COMPLEMENT': ['comp_svc', 'comp_svoc', 'comp_causative', 'comp_clause'],
  'MODIFIER': ['mod_adj', 'mod_adv', 'mod_participle']
};

export default function StudentMode({ categories }) {
  const {
    gameState, availableCategories, activeMain, activeCategory, activeProblem, currentProblemIdx,
    score, combo, correctCount, selectedIndices, feedbackState, mainContainerRef, lastBonus,
    elapsedTime, selectedLevel, filteredProblems, setGameState,
    selectMainCategory, selectSubCategory, startGame, 
    backToMain, backToSub, backToLevelSelect,
    handlePointerDown, handlePointerMove, handlePointerUp, submitAnswer
  } = useTrace(categories);

  const {
    isMultiplayer, isHost, roomId, connectionStatus, errorMessage,
    playersData, myPeerId, battleConfig,
    createRoom, joinRoom, syncMyScore, startBattle, exitMultiplayer
  } = useMultiplayer();

  const [appScreen, setAppScreen] = useState('title'); 
  const [joinPin, setJoinPin] = useState('');
  const [battleSetup, setBattleSetup] = useState(null);
  const [pendingBattle, setPendingBattle] = useState(null);
  const [listeningId, setListeningId] = useState(null);
  const [speechFeedback, setSpeechFeedback] = useState({});

  const processedBattleRef = useRef(null);

  useEffect(() => {
    if (isMultiplayer) syncMyScore(score, combo);
  }, [score, combo, isMultiplayer, syncMyScore]);

  useEffect(() => {
    if (battleConfig && processedBattleRef.current !== battleConfig) {
      processedBattleRef.current = battleConfig; 
      selectMainCategory(battleConfig.mainId);
      selectSubCategory(battleConfig.subCategory);
      setPendingBattle(battleConfig.level);
    }
  }, [battleConfig, selectMainCategory, selectSubCategory]);

  useEffect(() => {
    if (pendingBattle !== null && activeCategory?.categoryId === battleConfig?.subCategory?.categoryId) {
      startGame(pendingBattle);
      setPendingBattle(null);
      setAppScreen('game');
    }
  }, [activeCategory, pendingBattle, battleConfig, startGame]);

  const handleExitToTitle = () => {
    exitMultiplayer();
    setAppScreen('title');
    setGameState('main_select');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startListening = (problemId, targetSentence) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("お使いのブラウザは音声認識に対応していません。（Chromeブラウザをおすすめします）");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => {
      setListeningId(problemId);
      setSpeechFeedback(prev => ({ ...prev, [problemId]: { status: 'listening', text: '' } }));
    };
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const cleanTarget = targetSentence.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
      const cleanTranscript = transcript.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
      const isCorrect = cleanTarget === cleanTranscript || cleanTarget.includes(cleanTranscript) || cleanTranscript.includes(cleanTarget);
      setSpeechFeedback(prev => ({ 
        ...prev, 
        [problemId]: { status: isCorrect ? 'correct' : 'wrong', text: transcript } 
      }));
    };
    recognition.onerror = () => {
      setListeningId(null);
      setSpeechFeedback(prev => ({ ...prev, [problemId]: { status: 'error', text: '音声を認識できませんでした' } }));
    };
    recognition.onend = () => {
      setListeningId(null);
    };
    recognition.start();
  };

  const hasAnyProblems = (mainId) => {
    return availableCategories.some(cat => SUB_MAPPING[mainId].includes(cat.categoryId) && cat.problems && cat.problems.length > 0);
  };

  // ==========================================
  // 📺 1. タイトル画面
  // ==========================================
  if (appScreen === 'title') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50 relative overflow-hidden z-10">
        <div className="text-center mb-16 relative">
          <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 tracking-tighter drop-shadow-sm mb-4">
            TraceGram
          </h1>
          <p className="text-xl md:text-2xl font-bold text-slate-500 tracking-widest">英語の「骨格」をなぞって見つけ出せ！</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setAppScreen('game')} className="flex-1 bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-2 border-slate-100 cursor-pointer flex flex-col items-center justify-center group hover:border-cyan-400 transition-colors">
            <div className="w-20 h-20 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
              <Gamepad2 size={40} />
            </div>
            <h2 className="text-3xl font-black text-slate-700 mb-2">ひとりで特訓</h2>
            <p className="text-slate-500 font-bold">自分のペースで構造をマスター</p>
          </motion.div>

          <div className="flex-1 flex flex-col gap-4">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => { createRoom(); setAppScreen('game'); }} className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-3xl shadow-lg flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full"><Crown size={28} /></div>
              <div className="text-left">
                <div className="text-2xl font-black">対戦ルームを作る</div>
                <div className="text-sm font-bold opacity-80">最大4人でのグループ対戦（ホスト）</div>
              </div>
            </motion.button>

            <div className="w-full bg-white p-6 rounded-3xl shadow-md border-2 border-slate-100 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-600 font-black mb-1"><LogIn size={20}/> ルームに参加する</div>
              <div className="flex gap-2">
                <input 
                  type="number" placeholder="6桁のID" value={joinPin} onChange={(e) => setJoinPin(e.target.value)}
                  className="flex-1 bg-slate-100 border-none rounded-xl px-4 text-2xl font-black tracking-widest text-center text-slate-700 focus:ring-4 focus:ring-emerald-400 outline-none"
                  maxLength={6}
                />
                <button 
                  onClick={() => { joinRoom(joinPin); setAppScreen('lobby'); }}
                  disabled={joinPin.length !== 6 || connectionStatus === 'connecting'}
                  className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 rounded-xl font-black text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  入室
                </button>
              </div>
              {errorMessage && <p className="text-rose-500 text-sm font-bold mt-2">{errorMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // 📺 2. ロビー待機画面
  // ==========================================
  if (appScreen === 'lobby') {
    const sortedPlayers = Object.values(playersData || {}).sort((a, b) => a.name.localeCompare(b.name));
    const MAX_PLAYERS = 4;
    const slots = Array.from({ length: MAX_PLAYERS });
    const isReadyToStart = sortedPlayers.length >= 2;

    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 z-10 relative overflow-y-auto">
        <button onClick={handleExitToTitle} className="absolute top-6 left-6 text-slate-500 hover:text-slate-700 font-black flex items-center gap-2">
          <ArrowLeft size={20} /> タイトルへ戻る
        </button>

        <div className="max-w-4xl w-full text-center mt-10">
          <h2 className="text-3xl font-black text-slate-700 mb-8">グループ対戦 待機ルーム</h2>
          
          <div className="inline-block bg-white px-10 py-6 rounded-3xl shadow-md border-2 border-slate-100 mb-10 relative">
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 text-sm font-black px-6 py-1 rounded-full border-2 border-white shadow-sm">
              ROOM ID
            </span>
            <div className="text-6xl md:text-8xl font-black text-slate-800 tracking-[0.2em] font-mono">
              {roomId || "------"}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
            {slots.map((_, index) => {
              const p = sortedPlayers[index];
              if (p) {
                return (
                  <motion.div key={p.id} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`p-4 rounded-2xl border-4 shadow-md font-black text-lg flex flex-col items-center justify-center gap-3 h-40 ${p.id === myPeerId ? 'bg-cyan-50 border-cyan-400 text-cyan-800' : 'bg-white border-slate-200 text-slate-600'}`}>
                    {p.id === Object.keys(playersData)[0] ? <Crown size={36} className="text-yellow-500"/> : <Users size={36} className="text-emerald-400"/>}
                    <div className="text-center leading-tight">
                      <div>{p.id === myPeerId ? "あなた" : p.name}</div>
                      {p.id === Object.keys(playersData)[0] && <div className="text-[10px] text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full mt-1 inline-block">ホスト</div>}
                    </div>
                  </motion.div>
                );
              } else {
                return (
                  <div key={`empty-${index}`} className="p-4 rounded-2xl border-4 border-dashed border-slate-200 bg-slate-50/50 text-slate-400 font-bold text-sm flex flex-col items-center justify-center gap-3 h-40 opacity-70">
                    <UserPlus size={36} className="text-slate-300" />
                    <span>募集中...</span>
                  </div>
                );
              }
            })}
          </div>

          {isHost ? (
            <motion.button 
              whileHover={isReadyToStart ? { scale: 1.05 } : {}} 
              whileTap={isReadyToStart ? { scale: 0.95 } : {}}
              onClick={() => {
                if(isReadyToStart) {
                  startBattle(battleSetup);
                  startGame(battleSetup.level);
                  setAppScreen('game');
                }
              }}
              disabled={!isReadyToStart}
              className={`w-full max-w-lg font-black text-2xl py-6 rounded-[2rem] shadow-lg border-4 border-white transition-all ${
                isReadyToStart 
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white animate-pulse shadow-[0_10px_30px_rgba(245,158,11,0.4)]' 
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed opacity-80'
              }`}
            >
              {isReadyToStart ? "🚀 このメンバーで対戦スタート！" : "👥 参加者を待っています..."}
            </motion.button>
          ) : (
            <div className="text-xl font-black text-slate-500 bg-white/60 p-6 rounded-2xl border-2 border-dashed border-slate-300">
              ⏳ ホストがスタートするのを待っています...
            </div>
          )}
        </div>
      </div>
    );
  }

  // ==========================================
  // 📺 3. メニュー画面
  // ==========================================
  if (gameState === 'main_select') {
    const MAIN_CATEGORIES = [
      { id: 'BASIC', title: '基礎マスター', desc: '英語の仕組みをイチから学ぶ', bg: "bg-[#fca5a5]", text: "text-[#7f1d1d]" },
      { id: 'SUBJECT', title: '主語マスター', desc: '文の主役を見つけ出せ！', bg: "bg-[#d8b4f8]", text: "text-[#581c87]" },
      { id: 'VERB', title: '動詞マスター', desc: '文の心臓部を捉えろ！', bg: "bg-[#fbb6d6]", text: "text-[#9d174d]" },
      { id: 'OBJECT', title: '目的語マスター', desc: '動作の対象を見極めろ！', bg: "bg-[#fbbf24]", text: "text-[#78350f]" },
      { id: 'COMPLEMENT', title: '補語マスター', desc: 'SやOのイコール状態を暴け！', bg: "bg-[#7ee2b8]", text: "text-[#065f46]" },
      { id: 'MODIFIER', title: '修飾語マスター', desc: '文を長くする飾りを仕分けろ！', bg: "bg-[#8bbff5]", text: "text-[#1d4ed8]" },
    ];
    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative">
        <button onClick={handleExitToTitle} className="absolute top-6 left-6 text-slate-500 font-black flex items-center gap-2"><ArrowLeft size={20} /> タイトル</button>
        <div className="max-w-5xl w-full mt-8">
          <h2 className="text-3xl font-black text-slate-700 mb-10 text-center">鍛えたい要素を選んでください</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MAIN_CATEGORIES.map((cat) => {
              const isAvailable = hasAnyProblems(cat.id);
              return (
                <motion.div key={cat.id} whileHover={isAvailable ? { scale: 1.03 } : {}} onClick={() => isAvailable && selectMainCategory(cat.id)} className={`relative p-1.5 rounded-[32px] shadow-md transition-all ${isAvailable ? 'cursor-pointer ' + cat.bg : 'cursor-not-allowed bg-slate-300 opacity-60'}`}>
                  <div className="border-4 border-white border-dashed rounded-[26px] py-10 px-6 h-full flex flex-col items-center justify-center text-center">
                    <h3 className={`font-black text-white mb-2 ${cat.id.length >= 8 ? 'text-2xl' : 'text-4xl'}`}>{cat.id}</h3>
                    <p className={`text-lg font-black mb-2 bg-white/40 px-4 py-1 rounded-full ${isAvailable ? cat.text : 'text-slate-700'}`}>{cat.title}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'sub_select') {
    const subCategories = availableCategories.filter(cat => SUB_MAPPING[activeMain].includes(cat.categoryId) && cat.problems?.length > 0);
    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative">
        <div className="max-w-4xl w-full">
          <button onClick={backToMain} className="mb-6 text-slate-500 font-black flex items-center gap-2"><ArrowLeft size={20} /> 戻る</button>
          <div className="flex flex-col gap-6">
            {subCategories.map((sub) => (
              <motion.div key={sub.categoryId} whileHover={{ scale: 1.02 }} onClick={() => selectSubCategory(sub)} className="p-6 bg-slate-100 rounded-[24px] cursor-pointer shadow-md flex justify-between items-center border-2 border-white">
                <div><h3 className="text-2xl font-black text-slate-700 mb-1">{sub.title}</h3><p className="text-sm font-bold text-slate-500">{sub.description}</p></div>
                <span className="bg-cyan-500 text-white px-5 py-2 rounded-full font-black text-sm">選ぶ</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'level_select') {
    const levels = [{ num: 1, name: "Level 1 (初級)", bg: "bg-[#7ee2b8]"}, { num: 2, name: "Level 2 (中級)", bg: "bg-[#fbbf24]"}, { num: 3, name: "Level 3 (上級)", bg: "bg-[#fbb6d6]"}];
    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative">
        <div className="max-w-4xl w-full">
          <button onClick={backToSub} className="mb-6 text-slate-500 font-black flex items-center gap-2"><ArrowLeft size={20} /> 戻る</button>
          <h2 className="text-3xl font-black text-slate-700 mb-10 text-center">{activeCategory.title}</h2>
          <div className="flex flex-col gap-6">
            {levels.map((lvl) => (
              <motion.div key={lvl.num} whileHover={{ scale: 1.02 }} className={`p-6 rounded-[24px] shadow-md border-2 border-white flex justify-between items-center ${lvl.bg}`}>
                <h3 className="text-2xl font-black text-white">{lvl.name}</h3>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isMultiplayer && isHost) {
                      setBattleSetup({ mainId: activeMain, subCategory: activeCategory, level: lvl.num });
                      setAppScreen('lobby');
                    } else {
                      startGame(lvl.num);
                    }
                  }} 
                  className="bg-white/90 text-slate-800 px-6 py-3 rounded-full font-black text-lg hover:scale-105 active:scale-95 transition-transform shadow-sm"
                >
                  {isMultiplayer && isHost ? "👑 この問題で待機ルームを開く" : "START"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // 📺 4. 待望のリザルト（ランキング）画面
  // ==========================================
  if (gameState === 'result') {
    const sortedPlayers = Object.values(playersData || {}).sort((a, b) => b.score - a.score);

    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 z-10 relative overflow-y-auto">
        <div className="max-w-3xl w-full text-center">
          <motion.h2 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="text-4xl md:text-6xl font-black text-slate-700 mb-8"
          >
            🏆 RESULT
          </motion.h2>
          
          {isMultiplayer && sortedPlayers.length > 0 ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl border-2 border-slate-100 mb-10">
              <h3 className="text-2xl font-black text-slate-600 mb-6 tracking-widest">最終ランキング</h3>
              <div className="flex flex-col gap-4">
                {sortedPlayers.map((player, index) => {
                  const isMe = player.id === myPeerId;
                  const isTop = index === 0;
                  
                  return (
                    <motion.div 
                      key={player.id}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className={`flex items-center justify-between p-4 md:p-6 rounded-2xl border-2 ${
                        index === 0 ? 'bg-gradient-to-r from-yellow-100 to-yellow-50 border-yellow-400 shadow-md' :
                        index === 1 ? 'bg-slate-50 border-slate-300' :
                        index === 2 ? 'bg-orange-50 border-orange-300' :
                        'bg-white border-slate-200'
                      } ${isMe ? 'ring-4 ring-cyan-400 ring-opacity-50' : ''}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-3xl md:text-5xl font-black italic w-10 text-left ${
                          index === 0 ? 'text-yellow-500 drop-shadow-sm' :
                          index === 1 ? 'text-slate-400' :
                          index === 2 ? 'text-orange-400' :
                          'text-slate-300'
                        }`}>
                          {index + 1}
                        </span>
                        <span className={`text-xl md:text-3xl font-bold ${isMe ? 'text-cyan-700' : 'text-slate-700'}`}>
                          {player.name === 'Host (You)' && isMe ? 'あなた' : player.name}
                        </span>
                        {isTop && <Crown className="text-yellow-500 ml-2 animate-bounce" size={32} />}
                      </div>
                      <span className="text-4xl md:text-6xl font-black tracking-tighter text-slate-800">
                        {player.score} <span className="text-lg md:text-2xl text-slate-400 font-bold tracking-normal">pts</span>
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border-2 border-slate-100 mb-10 flex flex-col items-center">
              <span className="text-slate-400 font-bold mb-2 tracking-widest text-xl">FINAL SCORE</span>
              <span className="text-8xl md:text-9xl font-black text-cyan-600 drop-shadow-md">{score}</span>
            </div>
          )}

          <button onClick={() => {
            if(isMultiplayer) setAppScreen('lobby');
            else backToLevelSelect();
          }} className="mx-auto px-8 py-5 font-black text-2xl flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-700 transition-transform hover:scale-105 active:scale-95 rounded-2xl shadow-md border-2 border-slate-200">
            <ArrowLeft size={28} /> {isMultiplayer ? "ロビーに戻る" : "レベル選択へ戻る"}
          </button>
        </div>
      </div>
    );
  }

  // ★ プレイ画面（問題表示）
  if (!activeProblem) return null;

  const cleanHint = activeProblem.hint.replace(/【.*?】/, '').trim();
  const roleColors = getElementColor(activeProblem.targetRole);
  const roleInitial = activeProblem.targetRole.charAt(0).toUpperCase();
  const sortedPlayers = Object.values(playersData || {}).sort((a, b) => b.score - a.score);

  return (
    <div className="flex-1 flex flex-col relative touch-none z-10 w-full overflow-hidden" ref={mainContainerRef} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onTouchMove={handlePointerMove} onTouchEnd={handlePointerUp}>
      
      {/* 上部中央ランキングボード */}
      {isMultiplayer && sortedPlayers.length > 0 && (
        <div className="absolute top-[80px] md:top-[90px] left-0 w-full z-40 flex flex-row flex-wrap justify-center gap-2 md:gap-4 px-2 pointer-events-none">
          {sortedPlayers.map((player, index) => {
            const isMe = player.id === myPeerId;
            const rankColors = index === 0 ? "bg-yellow-400 text-yellow-900 border-yellow-300" :
                               index === 1 ? "bg-slate-200 text-slate-700 border-slate-300" :
                               index === 2 ? "bg-amber-600 text-amber-50 border-amber-500" :
                               "bg-white/90 text-slate-600 border-slate-200";

            return (
              <motion.div key={player.id} layout initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} 
                className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border-2 shadow-md backdrop-blur-md ${rankColors} ${isMe ? 'ring-2 ring-cyan-400 ring-offset-1' : ''}`}
              >
                <span className="font-black text-sm md:text-base italic">{index + 1}</span>
                <span className="font-bold text-xs md:text-sm truncate max-w-[60px] md:max-w-[100px]">{player.name === 'Host (You)' && isMe ? 'あなた' : player.name}</span>
                <span className="font-black text-sm md:text-lg tracking-tighter ml-1">{player.score}</span>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* ヘッダー＆ゲームエリア */}
      <div className="flex justify-between items-end px-4 md:px-10 py-4 border-b border-slate-200/50 bg-white/30 backdrop-blur-sm w-full z-20">
        <div className="flex items-center gap-4">
          <button onClick={() => { if(isMultiplayer) setAppScreen('lobby'); else backToLevelSelect(); }} className="box p-2 text-rose-500"><XCircle size={22} /></button>
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

        <div className="w-full relative bg-white/60 rounded-3xl border border-slate-100 shadow-inner p-4 md:p-10 mb-4 flex items-center justify-center min-h-[160px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={`sentence-${currentProblemIdx}`} initial={{ x: 800, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -800, opacity: 0 }} transition={{ type: "tween", duration: 0.2 }} className="w-full">
              <div className="text-center leading-[3.5rem] md:leading-[5rem]">
                {activeProblem.tokens.map((token, idx) => {
                  const isSelected = selectedIndices.includes(idx);
                  let bgClass = "bg-transparent text-slate-700";
                  if (isSelected) bgClass = feedbackState === 'wrong' ? "bg-rose-300 text-rose-900" : `${roleColors.bg} ${roleColors.text} ${roleColors.shadow}`;
                  
                  {/* ★ここが一番の修正点です！消してしまった data-token-idx を復活させ、元の滑らかなアニメーションを持った motion.span に戻しました！ */}
                  return (
                    <motion.span 
                      key={idx} 
                      data-token-idx={idx} 
                      onPointerDown={(e) => handlePointerDown(e, idx)} 
                      className={`inline-block text-2xl md:text-4xl lg:text-5xl font-black px-1.5 md:px-2 mx-0.5 md:mx-1 rounded-lg cursor-pointer select-none transition-all duration-150 ${bgClass}`}
                    >
                      {token}
                    </motion.span>
                  );
                })}
              </div>
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