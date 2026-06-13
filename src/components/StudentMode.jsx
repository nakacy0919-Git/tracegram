"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Award, ArrowLeft, Zap, CheckCircle2, Mic, Volume2, Timer, XCircle, BarChart2 } from 'lucide-react';
import { useTrace } from '../hooks/useTrace';

// 文型要素（S, V, O, C, M）に応じたテーマカラーを判定する関数
const getElementColor = (role) => {
  if (!role) return { bg: "bg-cyan-200", text: "text-cyan-900", shadow: "shadow-[0_0_15px_rgba(165,243,252,0.8)]" };
  
  const r = role.toUpperCase();
  
  if (r.startsWith('S') || r.includes('主語')) {
    return { bg: "bg-slate-300", text: "text-slate-800", shadow: "shadow-[0_0_15px_rgba(203,213,225,0.8)]" };
  }
  if (r.startsWith('V') || r.includes('動詞')) {
    return { bg: "bg-orange-200", text: "text-orange-900", shadow: "shadow-[0_0_15px_rgba(253,186,116,0.8)]" };
  }
  if (r.startsWith('O') || r.includes('目的語')) {
    return { bg: "bg-green-200", text: "text-green-900", shadow: "shadow-[0_0_15px_rgba(187,247,208,0.8)]" };
  }
  if (r.startsWith('C') || r.includes('補語')) {
    return { bg: "bg-cyan-200", text: "text-cyan-900", shadow: "shadow-[0_0_15px_rgba(165,243,252,0.8)]" };
  }
  if (r.startsWith('M') || r.includes('修飾') || r.includes('副詞') || r.includes('形容詞') || r.includes('分詞')) {
    return { bg: "bg-purple-200", text: "text-purple-900", shadow: "shadow-[0_0_15px_rgba(233,213,255,0.8)]" };
  }
  
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
    elapsedTime, selectedLevel, filteredProblems,
    selectMainCategory, selectSubCategory, startGame, 
    backToMain, backToSub, backToLevelSelect,
    handlePointerDown, handlePointerMove, handlePointerUp, submitAnswer
  } = useTrace(categories);

  const [listeningId, setListeningId] = useState(null);
  const [speechFeedback, setSpeechFeedback] = useState({});

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

  if (gameState === 'main_select') {
    const MAIN_CATEGORIES = [
      { id: 'BASIC', title: '基礎マスター', desc: '英語の仕組みをイチから学ぶ', bg: "bg-[#fca5a5]", text: "text-[#7f1d1d]", badge: "🔰 迷ったらココ！" },
      { id: 'SUBJECT', title: '主語マスター', desc: '文の主役を見つけ出せ！', bg: "bg-[#d8b4f8]", text: "text-[#581c87]" },
      { id: 'VERB', title: '動詞マスター', desc: '文の心臓部を捉えろ！', bg: "bg-[#fbb6d6]", text: "text-[#9d174d]" },
      { id: 'OBJECT', title: '目的語マスター', desc: '動作の対象を見極めろ！', bg: "bg-[#fbbf24]", text: "text-[#78350f]" },
      { id: 'COMPLEMENT', title: '補語マスター', desc: 'SやOのイコール状態を暴け！', bg: "bg-[#7ee2b8]", text: "text-[#065f46]" },
      { id: 'MODIFIER', title: '修飾語マスター', desc: '文を長くする飾りを仕分けろ！', bg: "bg-[#8bbff5]", text: "text-[#1d4ed8]" },
    ];

    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative">
        <div className="max-w-5xl w-full">
          <h2 className="text-3xl font-black text-slate-700 mb-10 tracking-wide drop-shadow-sm text-center">
            鍛えたい要素を選んでください
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MAIN_CATEGORIES.map((cat) => (
              <motion.div 
                key={cat.id} 
                whileHover={{ scale: 1.03, y: -4 }} whileTap={{ scale: 0.95 }} 
                onClick={() => selectMainCategory(cat.id)}
                className={`relative group p-1.5 rounded-[32px] cursor-pointer shadow-[0_8px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_20px_rgba(0,0,0,0.15)] transition-all duration-300 ${cat.bg}`}
              >
                <div className="border-4 border-white border-dashed rounded-[26px] py-10 px-6 h-full flex flex-col items-center justify-center text-center relative">
                  {cat.badge && (
                    <div className="absolute -top-4 -right-2 bg-yellow-400 text-yellow-900 font-black text-sm px-4 py-2 rounded-full shadow-lg border-2 border-white transform rotate-3 animate-pulse">
                      {cat.badge}
                    </div>
                  )}
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-widest drop-shadow-md">
                    {cat.id}
                  </h3>
                  <p className={`text-lg font-black ${cat.text} mb-2 bg-white/40 px-4 py-1 rounded-full`}>
                    {cat.title}
                  </p>
                  <p className={`text-sm font-bold ${cat.text} leading-relaxed`}>
                    {cat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'sub_select') {
    const subCategories = availableCategories.filter(cat => SUB_MAPPING[activeMain].includes(cat.categoryId));
    const mainTitleMapping = {
      'BASIC': '基礎マスター',
      'SUBJECT': '主語(S)マスター',
      'VERB': '動詞(V)マスター',
      'OBJECT': '目的語(O)マスター',
      'COMPLEMENT': '補語(C)マスター',
      'MODIFIER': '修飾語(M)マスター'
    };

    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative">
        <div className="max-w-4xl w-full">
          <button onClick={backToMain} className="mb-6 flex items-center gap-2 text-slate-500 font-black text-md hover:text-slate-700 transition-colors">
            <ArrowLeft size={20} /> 大ジャンル選びに戻る
          </button>
          <h2 className="text-3xl font-black text-slate-700 mb-2 text-center">
            {mainTitleMapping[activeMain] || activeMain}
          </h2>
          <p className="text-slate-400 font-bold text-center mb-10">
            学習したい具体的なテーマ（構造）を選んでください
          </p>
          
          <div className="flex flex-col gap-6">
            {subCategories.length === 0 ? (
              <div className="text-center text-slate-400 font-bold p-10 box border border-dashed border-slate-300">
                このテーマは現在開発中（COMING SOON）です！
              </div>
            ) : (
              subCategories.map((sub) => (
                <motion.div
                  key={sub.categoryId}
                  whileHover={{ scale: 1.02, x: 5 }} whileTap={{ scale: 0.98 }}
                  onClick={() => selectSubCategory(sub)}
                  className="relative p-1.5 rounded-[24px] cursor-pointer shadow-md bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <div className="border-2 border-white border-dashed rounded-[20px] py-6 px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black text-slate-700 drop-shadow-sm mb-1">{sub.title}</h3>
                      <p className="text-sm font-bold text-slate-500">{sub.description}</p>
                    </div>
                    <span className="bg-cyan-500 text-white px-5 py-2 rounded-full font-black text-sm flex items-center gap-1 shadow-sm shrink-0">
                      このテーマを学ぶ <Play size={14} className="fill-current" />
                    </span>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'level_select') {
    const levels = [
      { num: 1, name: "Level 1 (初級)", desc: "基本となる構造トレーニング", bg: "bg-[#7ee2b8]", text: "text-[#065f46]" },
      { num: 2, name: "Level 2 (中級)", desc: "句や節をともなう長めの英文", bg: "bg-[#fbbf24]", text: "text-[#78350f]" },
      { num: 3, name: "Level 3 (上級)", desc: "受験頻出の複雑な後置修飾・同格・倒置", bg: "bg-[#fbb6d6]", text: "text-[#9d174d]" }
    ];

    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative">
        <div className="max-w-4xl w-full">
          <button onClick={backToSub} className="mb-6 flex items-center gap-2 text-slate-500 font-black text-md hover:text-slate-700 transition-colors">
            <ArrowLeft size={20} /> テーマ選びに戻る
          </button>
          
          <h2 className="text-3xl font-black text-slate-700 mb-2 text-center">{activeCategory.title}</h2>
          <p className="text-slate-400 font-bold text-center mb-10">挑戦する難易度（レベル）を選んでください</p>
          
          <div className="flex flex-col gap-6">
            {levels.map((lvl) => (
              <motion.div
                key={lvl.num}
                whileHover={{ scale: 1.02, x: 5 }} whileTap={{ scale: 0.98 }}
                onClick={() => startGame(lvl.num)}
                className={`relative p-1.5 rounded-[24px] cursor-pointer shadow-md ${lvl.bg}`}
              >
                <div className="border-2 border-white border-dashed rounded-[20px] py-6 px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-white drop-shadow-sm mb-1">{lvl.name}</h3>
                    <p className={`text-sm font-bold ${lvl.text}`}>{lvl.desc}</p>
                  </div>
                  <span className="bg-white/80 px-4 py-2 rounded-full text-slate-700 font-black text-sm flex items-center gap-1 self-start md:self-auto shadow-sm shrink-0">
                    START <Play size={14} className="fill-current" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'result') {
    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative">
        <div className="max-w-5xl w-full">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="box p-8 md:p-12 mb-12 text-center relative overflow-hidden">
            <Award size={80} className="text-yellow-500 mx-auto mb-4 drop-shadow-md" />
            <h2 className="text-5xl font-black text-slate-700 mb-2">🏆 MISSION CLEAR!</h2>
            <p className="text-slate-400 mb-8 font-black text-lg">{activeCategory.title} [Level {selectedLevel}]</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              <div className="box-pressed p-4 rounded-2xl flex flex-col items-center justify-center">
                <span className="text-slate-400 font-black text-xs flex items-center gap-1 mb-1"><Timer size={14}/> TOTAL TIME</span>
                <span className="text-3xl font-black text-slate-700">{formatTime(elapsedTime)}</span>
              </div>
              <div className="box-pressed p-4 rounded-2xl flex flex-col items-center justify-center">
                <span className="text-slate-400 font-black text-xs flex items-center gap-1 mb-1"><BarChart2 size={14}/> SCORE</span>
                <span className="text-3xl font-black text-cyan-600">{score} <span className="text-sm text-slate-400">pts</span></span>
              </div>
              <div className="box-pressed p-4 rounded-2xl flex flex-col items-center justify-center">
                <span className="text-slate-400 font-black text-xs flex items-center gap-1 mb-1"><CheckCircle2 size={14}/> ACCURACY</span>
                <span className="text-3xl font-black text-emerald-600">{correctCount} <span className="text-sm text-slate-400">/ {filteredProblems.length}問</span></span>
              </div>
            </div>

            <button onClick={backToLevelSelect} className="mx-auto max-w-xs box hover:scale-105 flex items-center justify-center gap-2 text-slate-600 font-black text-xl py-4 px-8 transition-transform">
              <ArrowLeft size={24} /> レベル選択へ戻る
            </button>
          </motion.div>

          <h3 className="text-2xl font-black text-slate-700 mb-6 pl-4 border-l-8 border-purple-400">
            復習 ＆ 音読トレーニング
          </h3>
          <div className="flex flex-col gap-8 pb-20">
            {filteredProblems.map((prob, index) => {
              const fullSentence = prob.tokens.join(" ");
              const feedback = speechFeedback[prob.id];
              const isListening = listeningId === prob.id;
              
              const roleColors = getElementColor(prob.targetRole);

              return (
                <motion.div key={prob.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white/60 border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col gap-4 w-full">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1 w-full">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-700 leading-relaxed mb-4 break-words">
                        {prob.tokens.map((token, i) => {
                          const isTarget = prob.targetIndices.includes(i);
                          const isModified = prob.modifiedIndices ? prob.modifiedIndices.includes(i) : prob.modifiedIndex === i;
                          
                          let hlClass = "";
                          if (isTarget) {
                            hlClass = `${roleColors.bg} ${roleColors.text} px-1 rounded-md shadow-sm`;
                          } else if (isModified) {
                            hlClass = "bg-amber-100 text-amber-800 px-1 rounded-md"; 
                          }
                          return <span key={i} className={`mr-1.5 md:mr-2 inline-block ${hlClass}`}>{token}</span>;
                        })}
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                        <p className={`font-black mb-1 ${roleColors.text}`}>【構造】 {prob.targetRole}</p>
                        <p className="text-slate-600 font-medium text-lg">{prob.translation}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center min-w-[160px] bg-slate-50/50 rounded-2xl p-4 border border-slate-100 shrink-0">
                      <button onClick={() => startListening(prob.id, fullSentence)} disabled={isListening} className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all ${isListening ? "bg-rose-500 text-white animate-pulse shadow-[0_0_20px_rgba(244,63,94,0.6)]" : "box text-cyan-600 hover:scale-110 active:scale-95"}`}>
                        {isListening ? <Volume2 size={28} /> : <Mic size={28} />}
                      </button>
                      <div className="text-center h-12 flex flex-col justify-center">
                        {!feedback ? <span className="text-xs text-slate-400 font-bold">発音をチェック</span> : feedback.status === 'listening' ? <span className="text-xs text-rose-500 font-bold animate-pulse">聞き取り中...</span> : feedback.status === 'correct' ? <div className="text-emerald-500 font-black flex flex-col items-center"><span>Excellent! 🎉</span><span className="text-[10px] text-slate-400 truncate max-w-[140px] font-normal">{feedback.text}</span></div> : feedback.status === 'wrong' ? <div className="text-amber-500 font-bold flex flex-col items-center"><span>Try Again! 惜しい</span><span className="text-[10px] text-slate-400 truncate max-w-[140px] font-normal">{feedback.text}</span></div> : <span className="text-xs text-rose-400">エラーが発生しました</span>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ★ プレイ画面
  if (!activeProblem) return null;

  const cleanHint = activeProblem.hint.replace(/【.*?】/, '').trim();
  const roleColors = getElementColor(activeProblem.targetRole);
  const roleInitial = activeProblem.targetRole.charAt(0).toUpperCase();

  return (
    <div className="flex-1 flex flex-col relative touch-none z-10 w-full overflow-hidden" ref={mainContainerRef} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onTouchMove={handlePointerMove} onTouchEnd={handlePointerUp}>
      
      {/* ヘッダーエリア */}
      <div className="flex justify-between items-end px-4 md:px-10 py-4 border-b border-slate-200/50 bg-white/30 backdrop-blur-sm w-full z-20">
        <div className="flex items-center gap-4">
          <button onClick={backToLevelSelect} className="box p-2 text-rose-500 hover:scale-105 active:scale-95 transition-transform flex items-center justify-center" title="途中でやめる">
            <XCircle size={22} />
          </button>
          <div>
            <div className="text-sm text-slate-400 mb-1 font-black tracking-wider">{activeCategory.title} [Lv.{selectedLevel}]</div>
            <div className="text-xl md:text-2xl font-black text-slate-700">Q. {currentProblemIdx + 1} <span className="text-base text-slate-400">/ {filteredProblems.length}</span></div>
          </div>
        </div>
        <div className="flex items-end gap-4 md:gap-6 text-right">
          <div className="hidden md:flex box-pressed px-3 py-1.5 items-center gap-1.5 text-slate-600 font-black text-md">
            <Timer size={18} className="text-slate-500" />
            <span>{formatTime(elapsedTime)}</span>
          </div>
          <div>
            <div className="h-6 mb-1 flex justify-end">
              <AnimatePresence>
                {combo >= 2 && <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-purple-600 text-base md:text-lg font-black italic flex items-center gap-1 drop-shadow-[0_2px_2px_rgba(168,85,247,0.3)]"><Zap size={16} className="fill-current" /> {combo} COMBO!</motion.div>}
              </AnimatePresence>
            </div>
            <div className="text-3xl md:text-5xl font-black text-cyan-600 drop-shadow-[0_4px_4px_rgba(8,145,178,0.2)] tracking-tighter">{score}</div>
          </div>
        </div>
      </div>

      {/* メインプレイエリア */}
      <div className="flex-1 flex flex-col items-center justify-between p-4 md:p-8 w-full max-w-[1400px] mx-auto overflow-hidden relative">
        
        {/* ★ 指示エリア（固定化：targetRoleが変わった時だけスライド） */}
        <div className="w-full flex justify-center mb-6 md:mb-10 text-center z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`instruction-${activeProblem.targetRole}`} // ← 品詞が変わった時のみアニメーション
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -1000, opacity: 0 }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="flex items-center justify-center gap-3 md:gap-6"
            >
              {/* ふわふわ浮遊する丸いアイコン */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className={`w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center text-4xl md:text-6xl font-black shadow-md border-4 border-white ${roleColors.bg} ${roleColors.text} shrink-0`}
              >
                {roleInitial}
              </motion.div>
              
              <p className={`text-xl md:text-3xl lg:text-4xl font-black ${roleColors.text} drop-shadow-sm px-2 text-left`}>
                {cleanHint}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ★ 英文なぞりエリア（超高速スライドアニメーション） */}
        <div className="w-full relative bg-white/60 rounded-3xl border border-slate-100 shadow-inner p-4 md:p-10 mb-4 md:mb-8 flex items-center justify-center min-h-[160px] md:min-h-[200px] overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={`sentence-${currentProblemIdx}`}
              initial={{ x: 800, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }}    
              exit={{ x: -800, opacity: 0 }}   
              transition={{ type: "tween", duration: 0.2, ease: "easeOut" }} // ← 0.2秒の超高速移動
              className="w-full"
            >
              <div className="text-center leading-[3.5rem] md:leading-[5rem] lg:leading-[6rem]">
                {activeProblem.tokens.map((token, idx) => {
                  const isSelected = selectedIndices.includes(idx);
                  const isGlowing = activeProblem.modifiedIndices ? activeProblem.modifiedIndices.includes(idx) : activeProblem.modifiedIndex === idx;
                  
                  let bgClass = "bg-transparent text-slate-700";
                  
                  if (isSelected) {
                    if (feedbackState === 'wrong') {
                      bgClass = "bg-rose-300 text-rose-900 shadow-[0_0_15px_rgba(253,164,175,0.6)]";
                    } else {
                      bgClass = `${roleColors.bg} ${roleColors.text} ${roleColors.shadow}`;
                      if (feedbackState === 'correct') {
                        bgClass += " scale-105 z-10 transition-transform duration-150";
                      }
                    }
                  } else if (isGlowing) {
                    bgClass = "bg-amber-100 text-amber-700 shadow-[0_0_10px_rgba(254,243,199,0.5)] animate-pulse";
                  }

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
              
              {/* 和訳エリア（英文と一緒に高速スライド） */}
              {activeProblem.translation && (
                <div className="w-full text-center mt-6 md:mt-10 px-4">
                  <p className="text-base md:text-xl text-slate-500 font-bold bg-white/70 inline-block px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
                    {activeProblem.translation}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {feedbackState === 'correct' && combo >= 3 && <motion.div initial={{ scale: 0, opacity: 0, rotate: -15 }} animate={{ scale: 1, opacity: 1, rotate: -5 }} exit={{ scale: 1.5, opacity: 0 }} className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"><span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]">{combo} COMBO!!</span></motion.div>}
          </AnimatePresence>
        </div>

        {/* Answerボタンエリア */}
        <div className="w-full flex flex-col items-center min-h-[90px] md:min-h-[120px] z-10">
          <AnimatePresence mode="wait">
            {feedbackState === 'idle' ? (
              <motion.button key="answer-btn" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} onClick={submitAnswer} disabled={selectedIndices.length === 0} className={`box flex items-center justify-center gap-3 font-black text-2xl md:text-3xl px-12 md:px-16 py-4 md:py-6 rounded-3xl transition-all duration-200 ${selectedIndices.length === 0 ? "opacity-50 cursor-not-allowed text-slate-400" : "text-cyan-600 hover:scale-105 active:scale-95 cursor-pointer"}`}>
                <CheckCircle2 size={32} /> Answer!
              </motion.button>
            ) : feedbackState === 'correct' && lastBonus ? (
              <motion.div key="bonus-display" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap justify-center gap-2 md:gap-4 items-center">
                <span className="text-emerald-500 font-black text-3xl md:text-4xl drop-shadow-md">+{lastBonus.points} pts</span>
                {lastBonus.speed > 0 && <span className="box-pressed px-3 md:px-4 py-1.5 md:py-2 text-cyan-600 text-sm md:text-lg font-black">Speed +{lastBonus.speed}</span>}
                {lastBonus.combo > 0 && <span className="box-pressed px-3 md:px-4 py-1.5 md:py-2 text-purple-600 text-sm md:text-lg font-black">Combo +{lastBonus.combo}</span>}
              </motion.div>
            ) : feedbackState === 'wrong' ? (
              <motion.div key="wrong-display" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-rose-500 font-black text-3xl md:text-4xl drop-shadow-md">
                Miss...
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}