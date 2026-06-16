import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Crown, Users, UserPlus } from 'lucide-react';

export default function LobbyScreen({
  roomId,
  playersData,
  myPeerId,
  isHost,
  onExit,
  onStartBattle
}) {
  const sortedPlayers = Object.values(playersData || {}).sort((a, b) => a.name.localeCompare(b.name));
  const MAX_PLAYERS = 4;
  const slots = Array.from({ length: MAX_PLAYERS });
  const isReadyToStart = sortedPlayers.length >= 2;

  return (
    <div className="flex-1 flex flex-col items-center p-6 md:p-12 z-10 relative overflow-y-auto">
      <button onClick={onExit} className="absolute top-6 left-6 text-slate-500 hover:text-slate-700 font-black flex items-center gap-2">
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
            onClick={onStartBattle}
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