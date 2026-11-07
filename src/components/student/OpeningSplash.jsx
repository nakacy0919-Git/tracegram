"use client";
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * The original Tracegram logo is a core part of the product identity.
 * This is an intentionally short welcome, not another navigation layer.
 */
export default function OpeningSplash({ onEnter }) {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 };
  return (
    <div role="dialog" aria-modal="true" aria-label="Tracegram オープニング"
      className="tg-opening fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-y-auto px-6 py-10 text-center">
      <div aria-hidden="true" className="tg-opening-outline"/>
      <motion.div initial={reduceMotion ? false : {opacity: 0, scale: 0.78, y: 24}}
        animate={reveal}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="tg-opening-content relative w-full max-w-lg flex flex-col items-center">
        <motion.div
          initial={reduceMotion ? false : { rotate: -9, scale: 0.9 }}
          animate={reduceMotion ? undefined : { rotate: 0, scale: [0.9, 1.04, 1] }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mb-2">
          <span aria-hidden="true" className="tg-logo-halo"/>
          <img src="/tracegramlogo.png" alt="Tracegram ロゴ"
            className="tg-opening-logo relative z-10 w-40 h-40 sm:w-52 sm:h-52 object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.32)]"/>
        </motion.div>
        <motion.h1 initial={reduceMotion ? false : {opacity: 0, letterSpacing: '0.22em'}}
          animate={{opacity:1,letterSpacing:'0.025em'}}
          transition={{delay:reduceMotion?0:0.35,duration:0.8}}
          className="tg-opening-title font-bold text-[clamp(3.1rem,9vw,5.6rem)] leading-tight">
          Tracegram
        </motion.h1>
        <div className="relative w-64 max-w-full h-4 my-3" aria-hidden="true">
          <motion.svg viewBox="0 0 260 22" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" fill="none">
            <motion.path d="M4 13 C58 5 98 17 140 10 S219 7 255 10" stroke="#cda47a" strokeWidth="3" strokeLinecap="round"
              initial={reduceMotion ? false : {pathLength:0,opacity:0.4}}
              animate={{pathLength:1,opacity:1}}
              transition={{delay:reduceMotion?0:0.65,duration:1.15,ease:"easeInOut"}}/>
          </motion.svg>
        </div>
        <motion.p initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}}
          transition={{delay:reduceMotion?0:0.9,duration:0.5}}
          className="tg-opening-subtitle text-base sm:text-lg tracking-[0.13em] mt-1 mb-10">
          英文のしくみを、指でなぞる。
        </motion.p>
        <motion.button type="button" onClick={onEnter}
          initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}}
          transition={{delay:reduceMotion?0:1.05,duration:0.5}}
          whileTap={{scale:0.97}}
          className="tg-opening-start inline-flex justify-center items-center gap-3 px-9 py-4 rounded-full text-base sm:text-lg font-semibold min-w-56">
          はじめる <ArrowRight size={20}/>
        </motion.button>
        <p className="mt-4 text-xs text-stone-400">NOTE · TRACE · LEARN</p>
      </motion.div>
    </div>
  );
}
