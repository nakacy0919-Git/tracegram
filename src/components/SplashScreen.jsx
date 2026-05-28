"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      // 背景は白 ＋ ドットパターン
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white pattern-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* 画面の中央に配置するための相対ポジションコンテナ */}
      <div className="relative flex flex-col items-center">
        
        {/* 1. ロゴ：ここが画面の真ん中に位置するように配置されます */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, filter: 'blur(10px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          // ニューモーフィズムの立体感のある円形フレーム
          className="relative w-72 h-72 rounded-full box p-4 flex items-center justify-center z-10"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/tracegramlogo.png"
              alt="TraceGram Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* 2. テキスト：ロゴの位置に干渉せず、ロゴのすぐ下に配置 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          // absoluteを使うことで、ロゴが真ん中からズレないように調整
          className="absolute top-[320px] whitespace-nowrap"
        >
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 tracking-wider uppercase font-serif drop-shadow-sm">
            Welcome to TraceGram
          </h1>
        </motion.div>
        
      </div>
    </motion.div>
  );
}