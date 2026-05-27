"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Target, Award, ArrowLeft } from 'lucide-react';
import { useTrace } from '../hooks/useTrace';

export default function StudentMode({ categories }) {
  const {
    gameState, availableCategories, activeCategory, activeProblem, currentProblemIdx,
    score, combo, selectedIndices, feedbackState, mainContainerRef,
    startGame, backToMenu, handlePointerDown, handlePointerMove, handlePointerUp
  } = useTrace(categories);

  if (gameState === 'select') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto">
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl font-bold text-center text-white mb-8">トレーニングを選ぼう</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableCategories.map((category) => (
              <motion.div key={category.categoryId} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => startGame(category)} className="bg-slate-900 border border-slate-700 hover:border-cyan-500 rounded-2xl p-6 cursor-pointer shadow-lg transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <Target size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
                </div>
                <p className="text-slate-400 text-sm mb-6">{category.description}</p>
                <div className="flex items-center justify-between text-sm font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span>全 {category.problems.length} 問</span>
                  <span className="flex items-center gap-1">PLAY <Play size={16} /></span>
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
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-slate-900 p-10 rounded-2xl border border-slate-800 shadow-2xl max-w-md w-full">
          <Award size={64} className="text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-cyan-400 mb-2">CLEAR!</h2>
          <p className="text-slate-400 mb-6">{activeCategory.title}</p>
          <div className="text-6xl font-black text-white mb-8">{score} <span className="text-2xl text-slate-400">pts</span></div>
          <button onClick={backToMenu} className="w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg">
            <ArrowLeft size={20} /> メニューに戻る
          </button>
        </motion.div>
      </div>
    );
  }

  if (!activeProblem) return null;

  const tokenVariants = {
    idle: { scale: 1, y: 0, x: 0 },
    selected: { scale: 0.95, y: 2 },
    correct: { scale: [1, 1.1, 1], y: [0, -8, 0], transition: { duration: 0.4, ease: "easeOut" } },
    wrong: { x: [0, -8, 8, -8, 8, 0], transition: { duration: 0.4 } }
  };

  return (
    <div className="flex-1 flex flex-col relative touch-none" ref={mainContainerRef} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onTouchMove={handlePointerMove} onTouchEnd={handlePointerUp}>
      
      <div className="flex justify-between items-end px-6 py-4 border-b border-slate-800/50 bg-slate-900/50 z-10">
        <div>
          <div className="text-sm text-slate-400 mb-1">{activeCategory.title}</div>
          <div className="text-xl font-bold">Q. {currentProblemIdx + 1} / {activeCategory.problems.length}</div>
        </div>
        <div className="text-right">
          <div className="h-6 mb-1">
            <AnimatePresence>
              {combo >= 3 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-orange-400 font-bold italic">
                  🔥 {combo} COMBO!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="text-3xl font-black text-cyan-400">{score}</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl mb-4 text-center text-slate-200 font-medium">{activeProblem.hint}</h2>
        {/* ★ 日本語訳の表示エリアを追加 */}
        {activeProblem.translation && (
          <p className="text-lg mb-12 text-center text-slate-400 font-medium">
            「{activeProblem.translation}」
          </p>
        )}
        
        <div className="flex flex-wrap justify-center gap-x-1 gap-y-3 max-w-4xl mx-auto">
          {activeProblem.tokens.map((token, idx) => {
            const isSelected = selectedIndices.includes(idx);
            // ★ 配列に対応
            const isGlowing = activeProblem.modifiedIndices 
              ? activeProblem.modifiedIndices.includes(idx) 
              : activeProblem.modifiedIndex === idx;
            
            let bgClass = "bg-transparent text-slate-200 hover:bg-slate-800/50";
            let animateState = "idle";

            if (isSelected) {
              if (feedbackState === 'correct') {
                bgClass = "bg-emerald-500 text-white shadow-emerald-500/50";
                animateState = "correct";
              } else if (feedbackState === 'wrong') {
                bgClass = "bg-rose-500 text-white shadow-rose-500/50";
                animateState = "wrong";
              } else {
                bgClass = "bg-blue-600 text-white shadow-blue-500/50";
                animateState = "selected";
              }
            } 
            else if (isGlowing) {
              bgClass = "bg-purple-900/40 border border-purple-400 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.6)] animate-pulse";
            }

            return (
              <motion.div key={idx} data-token-idx={idx} onPointerDown={(e) => handlePointerDown(e, idx)} className={`text-3xl md:text-4xl font-bold px-3 py-2 rounded-lg cursor-pointer select-none transition-colors duration-200 ${bgClass}`} variants={tokenVariants} initial="idle" animate={animateState}>
                {token}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}