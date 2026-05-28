"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Award, ArrowLeft, Zap, CheckCircle2, Mic, Volume2, Timer, XCircle, BarChart2 } from 'lucide-react';
import { useTrace } from '../hooks/useTrace';

export default function StudentMode({ categories }) {
  const {
    gameState, availableCategories, activeCategory, activeProblem, currentProblemIdx,
    score, combo, correctCount, selectedIndices, feedbackState, mainContainerRef, lastBonus,
    elapsedTime, selectedLevel, filteredProblems,
    selectCategory, startGame, backToMenu, handlePointerDown, handlePointerMove, handlePointerUp, submitAnswer
  } = useTrace(categories);

  const [listeningId, setListeningId] = useState(null);
  const [speechFeedback, setSpeechFeedback] = useState({});

  // タイマー表示用のフォーマット関数（例: 65秒 -> "01:05"）
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

  // 1. ジャンル（カテゴリ）選択画面
  if (gameState === 'select') {
    const pastelColors = [
      { bg: "bg-[#8bbff5]", text: "text-[#1d4ed8]" },
      { bg: "bg-[#7ee2b8]", text: "text-[#065f46]" },
      { bg: "bg-[#d8b4f8]", text: "text-[#581c87]" },
      { bg: "bg-[#fbb6d6]", text: "text-[#9d174d]" },
      { bg: "bg-[#93c5fd]", text: "text-[#1e3a8a]" }
    ];

    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative">
        <div className="max-w-5xl w-full">
          <h2 className="text-3xl font-black text-slate-700 mb-10 tracking-wide drop-shadow-sm text-center">
            トレーニングを選択
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {availableCategories.map((category, index) => {
              const color = pastelColors[index % pastelColors.length];
              const englishTitle = category.categoryId.toUpperCase();

              return (
                <motion.div 
                  key={category.categoryId} 
                  whileHover={{ scale: 1.03, y: -4 }} whileTap={{ scale: 0.95 }} 
                  onClick={() => selectCategory(category)} // レベル選択へ
                  className={`relative group p-1.5 rounded-[32px] cursor-pointer shadow-[0_8px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_20px_rgba(0,0,0,0.15)] transition-all duration-300 ${color.bg}`}
                >
                  <div className="border-4 border-white border-dashed rounded-[26px] py-10 px-6 h-full flex flex-col items-center justify-center text-center">
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-widest drop-shadow-md">
                      {englishTitle}
                    </h3>
                    <p className={`text-lg font-black ${color.text} mb-2 bg-white/40 px-4 py-1 rounded-full`}>
                      {category.title}
                    </p>
                    <p className={`text-sm md:text-base font-bold ${color.text} leading-relaxed`}>
                      {category.description}
                    </p>
                    <div className="absolute -top-3 -right-3 bg-[#fbbf24] text-[#78350f] font-black text-sm px-5 py-2 rounded-full shadow-lg border-2 border-white transform rotate-6">
                      {category.problems.length} Qs
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

  // ★ 2. 追加：レベル選択画面（PicSpeak風パステルステッチデザイン）
  if (gameState === 'level_select') {
    const levels = [
      { num: 1, name: "Level 1 (初級)", desc: "基本となる名詞句や短い英文の構造トレーニング", bg: "bg-[#7ee2b8]", text: "text-[#065f46]" },
      { num: 2, name: "Level 2 (中級)", desc: "不定詞や動名詞、基本的な節をともなう長めの英文", bg: "bg-[#fbbf24]", text: "text-[#78350f]" },
      { num: 3, name: "Level 3 (上級)", desc: "受験頻出の形式名詞(it)や複雑な後置修飾・同格表現", bg: "bg-[#fbb6d6]", text: "text-[#9d174d]" }
    ];

    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative">
        <div className="max-w-4xl w-full">
          <button onClick={backToMenu} className="mb-6 flex items-center gap-2 text-slate-500 font-black text-md hover:text-slate-700 transition-colors">
            <ArrowLeft size={20} /> ジャンル選びに戻る
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
                  <span className="bg-white/80 px-4 py-2 rounded-full text-slate-700 font-black text-sm flex items-center gap-1 self-start md:self-auto shadow-sm">
                    15問 START <Play size={14} className="fill-current" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 3. リザルト画面（タイム・正解数・スコアを極太で表示）
  if (gameState === 'result') {
    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative">
        <div className="max-w-5xl w-full">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="box p-8 md:p-12 mb-12 text-center relative overflow-hidden">
            <Award size={80} className="text-yellow-500 mx-auto mb-4 drop-shadow-md" />
            <h2 className="text-5xl font-black text-slate-700 mb-2">🏆 MISSION CLEAR!</h2>
            <p className="text-slate-400 mb-8 font-black text-lg">{activeCategory.title} [Level {selectedLevel}]</p>
            
            {/* ★ タイム・正解数・スコアを並べて極太表示 */}
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

            <button onClick={backToMenu} className="mx-auto max-w-xs box hover:scale-105 flex items-center justify-center gap-2 text-slate-600 font-black text-xl py-4 px-8 transition-transform">
              <ArrowLeft size={24} /> メニューへ戻る
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

              return (
                <motion.div key={prob.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white/60 border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="text-2xl md:text-3xl font-black text-slate-700 leading-relaxed mb-4">
                        {prob.tokens.map((token, i) => {
                          const isTarget = prob.targetIndices.includes(i);
                          const isModified = prob.modifiedIndices ? prob.modifiedIndices.includes(i) : prob.modifiedIndex === i;
                          let hlClass = "";
                          if (isTarget) hlClass = "bg-cyan-200 text-cyan-900 px-1 rounded-md shadow-[0_0_8px_rgba(165,243,252,0.8)]";
                          else if (isModified) hlClass = "bg-purple-100 text-purple-800 px-1 rounded-md";
                          return <span key={i} className={`mr-2 inline-block ${hlClass}`}>{token}</span>;
                        })}
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                        <p className="text-cyan-700 font-bold mb-1">【構造】 {prob.targetRole}</p>
                        <p className="text-slate-600 font-medium">{prob.translation}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center min-w-[160px] bg-slate-50/50 rounded-2xl p-4 border border-slate-100">
                      <button onClick={() => startListening(prob.id, fullSentence)} disabled={isListening} className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all ${isListening ? "bg-rose-500 text-white animate-pulse shadow-[0_0_20px_rgba(244,63,94,0.6)]" : "box text-cyan-600 hover:scale-110 active:scale-95"}`}>
                        {isListening ? <Volume2 size={28} /> : <Mic size={28} />}
                      </button>
                      <div className="text-center h-12 flex flex-col justify-center">
                        {!feedback ? <span className="text-xs text-slate-400 font-bold">発音をチェック</span> : feedback.status === 'listening' ? <span className="text-xs text-rose-500 font-bold animate-pulse">聞き取り中...</span> : feedback.status === 'correct' ? <div className="text-emerald-500 font-black flex flex-col items-center"><span>Excellent! 🎉</span><span className="text-[10px] text-slate-400 truncate max-w-[140px] font-normal">{feedback.text}</span></div> : feedback.status === 'wrong' ? <div className="text-amber-500 font-bold flex flex-col items-center"><span>Try Again! 惜しい</span><span className="text-[10px] text-slate-400 truncate max-w-[140px] font-normal">{feedback.text}</span></div> : <span className="text-xs text-rose-400">エラー</span>}
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

  // 4. プレイ（問題演習）画面
  if (!activeProblem) return null;

  return (
    <div className="flex-1 flex flex-col relative touch-none z-10" ref={mainContainerRef} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onTouchMove={handlePointerMove} onTouchEnd={handlePointerUp}>
      
      {/* プレイ画面のヘッダー：タイマーと中断用ボタンを搭載 */}
      <div className="flex justify-between items-end px-6 md:px-10 py-4 border-b border-slate-200/50 bg-white/30 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          {/* ★ プレイ途中でメイン画面に戻れるボタン */}
          <button 
            onClick={backToMenu} 
            className="box p-2 text-rose-500 hover:scale-105 active:scale-95 transition-transform flex items-center justify-center"
            title="途中でやめる"
          >
            <XCircle size={22} />
          </button>
          <div>
            <div className="text-sm text-slate-400 mb-1 font-black tracking-wider">{activeCategory.title} [Lv.{selectedLevel}]</div>
            <div className="text-2xl font-black text-slate-700">Q. {currentProblemIdx + 1} <span className="text-base text-slate-400">/ {filteredProblems.length}</span></div>
          </div>
        </div>
        
        <div className="flex items-end gap-6 text-right">
          {/* ★ 追加：リアルタイムタイマーの表示 */}
          <div className="box-pressed px-3 py-1.5 flex items-center gap-1.5 text-slate-600 font-black text-md">
            <Timer size={18} className="text-slate-500" />
            <span>{formatTime(elapsedTime)}</span>
          </div>
          <div>
            <div className="h-6 mb-1 flex justify-end">
              <AnimatePresence>
                {combo >= 2 && <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-purple-600 text-lg font-black italic flex items-center gap-1 drop-shadow-[0_2px_2px_rgba(168,85,247,0.3)]"><Zap size={18} className="fill-current" /> {combo} COMBO!</motion.div>}
              </AnimatePresence>
            </div>
            <div className="text-4xl md:text-5xl font-black text-cyan-600 drop-shadow-[0_4px_4px_rgba(8,145,178,0.2)] tracking-tighter">{score}</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-between p-6 md:p-12">
        <div className="w-full max-w-5xl">
          <div className="mb-12 pl-5 border-l-8 border-cyan-400">
            <h2 className="text-xl md:text-2xl text-slate-800 font-black mb-3">{activeProblem.hint}</h2>
            {activeProblem.translation && <p className="text-base md:text-lg text-slate-500 font-bold">{activeProblem.translation}</p>}
          </div>
          
          <div className="w-full p-6 relative bg-white/40 rounded-3xl border border-slate-100 shadow-inner">
            <AnimatePresence>
              {feedbackState === 'correct' && combo >= 3 && <motion.div initial={{ scale: 0, opacity: 0, rotate: -15 }} animate={{ scale: 1, opacity: 1, rotate: -5 }} exit={{ scale: 1.5, opacity: 0 }} className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"><span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]">{combo} COMBO!!</span></motion.div>}
            </AnimatePresence>

            <div className="text-left leading-[4rem] md:leading-[5.5rem]">
              {activeProblem.tokens.map((token, idx) => {
                const isSelected = selectedIndices.includes(idx);
                const isGlowing = activeProblem.modifiedIndices ? activeProblem.modifiedIndices.includes(idx) : activeProblem.modifiedIndex === idx;
                
                let bgClass = "bg-transparent text-slate-700";
                if (isSelected) {
                  if (feedbackState === 'correct') bgClass = "bg-emerald-300 text-emerald-900 shadow-[0_0_15px_rgba(110,231,183,0.6)]"; 
                  else if (feedbackState === 'wrong') bgClass = "bg-rose-300 text-rose-900 shadow-[0_0_15px_rgba(253,164,175,0.6)]";
                  else bgClass = "bg-cyan-200 text-cyan-900 shadow-[0_0_15px_rgba(165,243,252,0.8)]";
                } else if (isGlowing) {
                  bgClass = "bg-purple-100 text-purple-700 shadow-[0_0_10px_rgba(216,180,254,0.5)] animate-pulse";
                }

                return (
                  <motion.span key={idx} data-token-idx={idx} onPointerDown={(e) => handlePointerDown(e, idx)} className={`inline-block text-3xl md:text-5xl font-black px-2 mx-1 rounded-lg cursor-pointer select-none transition-all duration-150 ${bgClass}`}>{token}</motion.span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full max-w-5xl flex flex-col items-center mt-10 min-h-[100px]">
          <AnimatePresence mode="wait">
            {feedbackState === 'idle' ? (
              <motion.button key="answer-btn" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} onClick={submitAnswer} disabled={selectedIndices.length === 0} className={`box flex items-center justify-center gap-3 font-black text-3xl px-16 py-6 rounded-3xl transition-all duration-200 ${selectedIndices.length === 0 ? "opacity-50 cursor-not-allowed text-slate-400" : "text-cyan-600 hover:scale-105 active:scale-95 cursor-pointer"}`}>
                <CheckCircle2 size={32} /> Answer!
              </motion.button>
            ) : feedbackState === 'correct' && lastBonus ? (
              <motion.div key="bonus-display" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap justify-center gap-4 items-center">
                <span className="text-emerald-500 font-black text-4xl drop-shadow-md">+{lastBonus.points} pts</span>
                {lastBonus.speed > 0 && <span className="box-pressed px-4 py-2 text-cyan-600 text-lg font-black">Speed +{lastBonus.speed}</span>}
                {lastBonus.combo > 0 && <span className="box-pressed px-4 py-2 text-purple-600 text-lg font-black">Combo +{lastBonus.combo}</span>}
              </motion.div>
            ) : feedbackState === 'wrong' ? (
              <motion.div key="wrong-display" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-rose-500 font-black text-4xl drop-shadow-md">
                Miss...
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}