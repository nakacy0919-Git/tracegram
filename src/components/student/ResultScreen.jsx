import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Crown } from 'lucide-react';

export default function ResultScreen({
  isMultiplayer,
  playersData,
  myPeerId,
  score,
  onBackToLobby,
  onBackToLevelSelect
}) {
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

        <button 
          onClick={isMultiplayer ? onBackToLobby : onBackToLevelSelect} 
          className="mx-auto px-8 py-5 font-black text-2xl flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-700 transition-transform hover:scale-105 active:scale-95 rounded-2xl shadow-md border-2 border-slate-200"
        >
          <ArrowLeft size={28} /> {isMultiplayer ? "ロビーに戻る" : "レベル選択へ戻る"}
        </button>
      </div>
    </div>
  );
}