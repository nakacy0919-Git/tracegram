import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Crown, LogIn } from 'lucide-react';

export default function TitleScreen({
  onSinglePlayer,
  onCreateRoom,
  joinPin,
  setJoinPin,
  onJoinRoom,
  connectionStatus,
  errorMessage
}) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50 relative overflow-hidden z-10">
      <div className="text-center mb-16 relative">
        <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 tracking-tighter drop-shadow-sm mb-4">
          TraceGram
        </h1>
        <p className="text-xl md:text-2xl font-bold text-slate-500 tracking-widest">英語の「骨格」をなぞって見つけ出せ！</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onSinglePlayer} className="flex-1 bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-2 border-slate-100 cursor-pointer flex flex-col items-center justify-center group hover:border-cyan-400 transition-colors">
          <div className="w-20 h-20 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
            <Gamepad2 size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-700 mb-2">ひとりで特訓</h2>
          <p className="text-slate-500 font-bold">自分のペースで構造をマスター</p>
        </motion.div>

        <div className="flex-1 flex flex-col gap-4">
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onCreateRoom} className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-3xl shadow-lg flex items-center gap-4">
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
                onClick={() => onJoinRoom(joinPin)}
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