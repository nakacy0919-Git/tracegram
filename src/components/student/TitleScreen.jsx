import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Crown, LogIn, ArrowRight } from 'lucide-react';

export default function TitleScreen({
  onSinglePlayer,
  onCreateRoom,
  joinPin,
  setJoinPin,
  onJoinRoom,
  connectionStatus,
  errorMessage
}) {
  // ★追加: 'splash' (オープニング) と 'menu' (メニュー) を切り替えるステート
  const [step, setStep] = useState('splash');

  return (
    <AnimatePresence mode="wait">
      {step === 'splash' ? (
        /* ＝＝＝ 🌟 新設：オープニング画面 ＝＝＝ */
        <motion.div 
          key="splash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-slate-900 w-full h-full"
        >
          {/* 上品に動く光のオーブ（グラデーション表現） */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-cyan-600/30 rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* ★修正: 灰色の枠や背景を完全削除！画像のみを美しく浮かび上がらせる */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="mb-8"
            >
              <img 
                src="/tracegramlogo.png" 
                alt="TraceGram Logo" 
                className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]" 
              />
            </motion.div>

            {/* タイトルロゴ */}
            <motion.h1 
              initial={{ opacity: 0, letterSpacing: "0px" }}
              animate={{ opacity: 1, letterSpacing: "8px" }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 mb-16 drop-shadow-lg text-center"
            >
              TraceGram
            </motion.h1>

            {/* Startボタン（グラスモーフィズム風） */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34,211,238,0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              onClick={() => setStep('menu')}
              className="px-10 py-5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold text-xl md:text-2xl tracking-[0.2em] hover:bg-white/20 transition-all flex items-center gap-4 group shadow-2xl"
            >
              Start TraceGram
              <motion.span 
                animate={{ x: [0, 5, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-cyan-300 group-hover:text-white"
              >
                <ArrowRight size={28} />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      ) : (
        /* ＝＝＝ 🎮 メニュー画面（Startを押した後に表示される） ＝＝＝ */
        <motion.div 
          key="menu"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50 relative overflow-hidden z-10 w-full h-full"
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}