"use client";
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * The original cyan/blue/violet Tracegram logo is the visual anchor.
 * A cool-toned notebook canvas and an animated traced ink line reinforce
 * the core gesture without adding another menu or disrupting the splash.
 */
export default function OpeningSplash({ onEnter }) {
  const reduceMotion = useReducedMotion();
  return (
    <div role="dialog" aria-modal="true" aria-label="Tracegram オープニング"
      className="tg-opening fixed inset-0 z-[200] flex flex-col items-center overflow-y-auto text-center">
      <div className="tg-opening-aura" aria-hidden="true"/>
      <div className="tg-opening-paper" aria-hidden="true"/>
      <div className="tg-opening-outline" aria-hidden="true"/>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="tg-opening-content relative z-10 w-full max-w-[750px] flex flex-col items-center px-6 py-8 sm:py-10"
      >
        <motion.div
          initial={reduceMotion ? false : { scale: 0.82, rotate: -7, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.18, 1, 0.3, 1] }}
          className="tg-opening-logo-wrap relative mb-3"
        >
          <span aria-hidden="true" className="tg-logo-halo"/>
          <img
            src="/tracegramlogo.png"
            alt="Tracegram ロゴ"
            className="tg-opening-logo relative z-10 w-40 h-40 sm:w-52 sm:h-52 object-contain"
          />
        </motion.div>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 13, letterSpacing: '0.09em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.012em' }}
          transition={{ delay: reduceMotion ? 0 : 0.23, duration: 0.75 }}
          className="tg-opening-title font-bold text-[clamp(3rem,8vw,5.5rem)] leading-tight"
        >
          Tracegram
        </motion.h1>

        <div className="tg-opening-ink w-[min(270px,62vw)] h-8 mt-1 mb-3" aria-hidden="true">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 280 34" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="tracegram-ink-gradient" x1="0" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#42e2ec"/>
                <stop offset=".5" stopColor="#77b5ff"/>
                <stop offset="1" stopColor="#bd8aff"/>
              </linearGradient>
            </defs>
            <motion.path
              d="M 7 20 C 65 3, 108 27, 153 15 S 233 10, 273 18"
              stroke="url(#tracegram-ink-gradient)" strokeWidth="3.6" strokeLinecap="round"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: reduceMotion ? 0 : 0.55, duration: 1.15, ease: 'easeInOut' }}
            />
          </svg>
        </div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.65, duration: 0.5 }}
          className="tg-opening-subtitle text-[clamp(0.92rem,2.5vw,1.1rem)] tracking-[0.09em] mb-8 sm:mb-10"
        >
          英文のしくみを、指でなぞる。
        </motion.p>

        <motion.button
          type="button"
          onClick={onEnter}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.9, duration: 0.5 }}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          className="tg-opening-start inline-flex justify-center items-center gap-3 px-9 py-4 rounded-full text-base sm:text-lg font-semibold min-w-56"
        >
          はじめる <ArrowRight size={20}/>
        </motion.button>
      </motion.div>
    </div>
  );
}
