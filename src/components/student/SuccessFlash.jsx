"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// A precise vector version of the round check in the supplied reference.
// There is no opaque badge, backdrop, canvas, or filled green disc.
const CONFETTI = Array.from({ length: 14 }, (_, index) => {
  const angle = (index / 14) * Math.PI * 2 - Math.PI / 2;
  const distance = 112 + (index % 3) * 13;
  return {
    id: index,
    x: Math.round(Math.cos(angle) * distance),
    y: Math.round(Math.sin(angle) * distance),
    rotate: index % 2 === 0 ? 135 + index * 23 : -125 - index * 16,
    color: ['#55c963', '#84dfaa', '#73badb', '#eac77e'][index % 4],
    width: index % 3 === 0 ? 8 : 6,
    height: index % 2 === 0 ? 11 : 8,
    delay: (index % 4) * 0.027,
  };
});

export default function SuccessFlash() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Correct! 正解"
      className="tg-success-overlay fixed inset-0 z-[80] pointer-events-none select-none flex items-center justify-center"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.12 }}
    >
      <motion.div
        className="tg-success-content relative flex flex-col items-center justify-center"
        initial={reduceMotion ? false : { scale: 0.72, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 400, damping: 24, mass: 0.72 }}
      >
        {!reduceMotion && (
          <div className="absolute left-1/2 top-[38%] w-0 h-0" aria-hidden="true">
            {CONFETTI.map(piece => (
              <motion.span
                key={piece.id}
                className="tg-success-confetti absolute block rounded-[2px]"
                style={{
                  width: piece.width,
                  height: piece.height,
                  backgroundColor: piece.color,
                }}
                initial={{ x: 0, y: 0, rotate: 0, scale: 0, opacity: 0 }}
                animate={{
                  x: piece.x,
                  y: piece.y,
                  rotate: piece.rotate,
                  scale: [0, 1, 0.82],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 0.66, delay: piece.delay, ease: 'easeOut', times: [0, 0.35, 1] }}
              />
            ))}
          </div>
        )}

        <motion.svg
          className="tg-success-icon relative z-10"
          viewBox="0 0 180 180"
          fill="none"
          aria-hidden="true"
          initial={reduceMotion ? false : { scale: 0.82 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 460, damping: 20, delay: 0.045 }}
        >
          <circle cx="90" cy="90" r="68" stroke="#55c95a" strokeWidth="18" />
          <path
            d="M 54 92 L 79 117 L 128 66"
            stroke="#55c95a"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>

        <motion.span
          className="tg-success-caption relative z-10 mt-2 leading-none"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.23, delay: reduceMotion ? 0 : 0.14 }}
        >
          Correct!
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
