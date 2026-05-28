"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Award, ArrowLeft } from 'lucide-react';
import { useTrace } from '../hooks/useTrace';

export default function StudentMode({ categories }) {
  const {
    gameState, availableCategories, activeCategory, activeProblem, currentProblemIdx,
    score, combo, selectedIndices, feedbackState, mainContainerRef,
    startGame, backToMenu, handlePointerDown, handlePointerMove, handlePointerUp
  } = useTrace(categories);

  if (gameState === 'select') {
    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative">
        <div className="max-w-4xl w-full">
          <h2 className="text-2xl font-bold text-slate-700 mb-10 tracking-wide">
            課題を選ぶ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {availableCategories.map((category) => (
              <motion.div 
                key={category.categoryId} 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                onClick={() => startGame(category)} 
                // ▼ いただいた box デザインを適用
                className="group box p-8 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-slate-700 mb-3 group-hover:text-cyan-600 transition-colors">{category.title}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">{category.description}</p>
                <div className="flex items-center justify-between text-sm font-bold text-slate-400 group-hover:text-cyan-500 transition-colors">
                  <span className="box-pressed px-4 py-1 text-slate-500">{category.problems.length} 問</span>
                  <span className="flex items-center gap-1">Play <Play size={16} /></span>
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
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center z-10 relative">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="box p-12 max-w-md w-full">
          <Award size={64} className="text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-black text-slate-700 mb-2">CLEAR!</h2>
          <p className="text-slate-500 mb-8">{activeCategory.title}</p>
          <div className="text-6xl font-black text-cyan-600 mb-12">{score} <span className="text-xl text-slate-400">pts</span></div>
          <button onClick={backToMenu} className="w-full box hover:scale-105 flex items-center justify-center gap-2 text-slate-600 font-bold py-4 px-8 transition-transform">
            <ArrowLeft size={18} /> 戻る
          </button>
        </motion.div>
      </div>
    );
  }

  if (!activeProblem) return null;

  const tokenVariants = {
    idle: { scale: 1, y: 0 },
    selected: { scale: 0.95, y: 2 },
    correct: { scale: [1, 1.05, 1], transition: { duration: 0.3 } },
    wrong: { x: [0, -4, 4, -4, 4, 0], transition: { duration: 0.3 } }
  };

  return (
    <div className="flex-1 flex flex-col relative touch-none z-10" ref={mainContainerRef} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onTouchMove={handlePointerMove} onTouchEnd={handlePointerUp}>
      
      <div className="flex justify-between items-end px-6 md:px-10 py-4 border-b border-slate-200/50 bg-white/30 backdrop-blur-sm">
        <div>
          <div className="text-xs text-slate-400 mb-1 font-bold">{activeCategory.title}</div>
          <div className="text-lg font-bold text-slate-700">Q. {currentProblemIdx + 1} <span className="text-sm text-slate-400">/ {activeCategory.problems.length}</span></div>
        </div>
        <div className="text-right">
          <div className="h-5 mb-1">
            <AnimatePresence>
              {combo >= 3 && (
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-purple-500 text-sm font-bold italic">
                  {combo} COMBO!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="text-2xl font-black text-cyan-600">{score}</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center p-6 md:p-12">
        <div className="w-full max-w-5xl mx-auto">
          
          <div className="mb-12 pl-4 border-l-4 border-cyan-400">
            <h2 className="text-lg md:text-xl text-slate-700 font-bold mb-2">
              {activeProblem.hint}
            </h2>
            {activeProblem.translation && (
              <p className="text-sm md:text-base text-slate-500 font-medium">
                {activeProblem.translation}
              </p>
            )}
          </div>
          
          <div className="flex flex-wrap justify-start gap-x-3 gap-y-5 w-full p-4">
            {activeProblem.tokens.map((token, idx) => {
              const isSelected = selectedIndices.includes(idx);
              const isGlowing = activeProblem.modifiedIndices ? activeProblem.modifiedIndices.includes(idx) : activeProblem.modifiedIndex === idx;
              
              // ▼ 基本は box、なぞると box-pressed（へこむ）になる
              let bgClass = "box text-slate-600";
              let animateState = "idle";

              if (isSelected) {
                if (feedbackState === 'correct') {
                  bgClass = "box-pressed text-emerald-600";
                  animateState = "correct";
                } else if (feedbackState === 'wrong') {
                  bgClass = "box-pressed text-rose-500";
                  animateState = "wrong";
                } else {
                  bgClass = "box-pressed text-cyan-600";
                  animateState = "selected";
                }
              } else if (isGlowing) {
                // 光らせる単語は、文字色を変えてパルスさせる
                bgClass = "box text-purple-500 animate-pulse";
              }

              return (
                <motion.div 
                  key={idx} 
                  data-token-idx={idx} 
                  onPointerDown={(e) => handlePointerDown(e, idx)} 
                  className={`text-2xl md:text-3xl lg:text-4xl font-bold px-6 py-4 cursor-pointer select-none ${bgClass}`} 
                  variants={tokenVariants} 
                  initial="idle" 
                  animate={animateState}
                >
                  {token}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}