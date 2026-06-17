import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Square, ArrowRight, RefreshCw, Sparkles } from 'lucide-react';

const calculateAccuracy = (targetSentence, transcript) => {
  if (!transcript) return 0;
  const normalize = (str) => str.toLowerCase().replace(/[.,?!'"\-]/g, '').trim();
  const targetWords = normalize(targetSentence).split(/\s+/);
  const transcriptWords = normalize(transcript).split(/\s+/);

  let matchCount = 0;
  targetWords.forEach(word => {
    if (transcriptWords.includes(word)) matchCount++;
  });

  const rawScore = Math.round((matchCount / targetWords.length) * 100);
  return rawScore > 100 ? 100 : rawScore;
};

export default function PronunciationMission({ targetSentence, onComplete }) {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [accuracy, setAccuracy] = useState(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (accuracy !== null && accuracy >= 80) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        
        const playNote = (freq, startTime, duration) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, startTime);
          gain.gain.setValueAtTime(0, startTime);
          gain.gain.linearRampToValueAtTime(0.2, startTime + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + duration);
        };

        const now = ctx.currentTime;
        playNote(523.25, now, 0.1);       // C5
        playNote(659.25, now + 0.1, 0.1); // E5
        playNote(783.99, now + 0.2, 0.2); // G5
        playNote(1046.50, now + 0.3, 0.5);// C6
      } catch (e) {
        console.error("Audio playback failed", e);
      }
    }
  }, [accuracy]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript(currentTranscript);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) recognitionRef.current.stop();
    };
  }, []);

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      alert("お使いのブラウザは音声認識に対応していません。（ChromeまたはSafariをご利用ください）");
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
      setAccuracy(calculateAccuracy(targetSentence, transcript));
    } else {
      setTranscript('');
      setAccuracy(null);
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      // 🌟 余白(p-5)を(p-3)などに削り、高さを節約
      className="bg-slate-800 text-white p-3 md:p-4 rounded-3xl shadow-2xl border-4 border-rose-400 flex flex-col items-center w-full relative"
    >
      <AnimatePresence>
        {accuracy !== null && accuracy >= 80 && (
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: [1, 1.5, 1.2], rotate: 0, opacity: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="absolute -top-8 -right-4 md:-top-10 md:-right-6 text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,0.8)] z-50 pointer-events-none"
          >
            <Sparkles size={80} fill="currentColor" />
          </motion.div>
        )}
      </AnimatePresence>

      <h3 className="text-base md:text-lg font-black text-rose-300 mb-0.5 flex items-center gap-2">
        <Mic size={18} /> 【必須】構造を意識して音読せよ！
      </h3>
      <p className="text-slate-400 font-bold mb-2 text-center text-xs">
        正しく発音し終えるまで次の問題には進めません。
      </p>

      {/* ターゲット英文の余白も削減 */}
      <div className="bg-slate-700 p-2 md:p-3 rounded-xl mb-2 w-full text-center">
        <p className="text-lg md:text-xl font-black text-cyan-300">{targetSentence}</p>
      </div>

      {/* 録音ボタンのパディングを削減 */}
      {accuracy === null ? (
        <button
          onClick={toggleRecording}
          className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full font-black text-base md:text-lg transition-all shadow-lg w-full md:w-auto justify-center ${
            isRecording 
              ? 'bg-rose-500 hover:bg-rose-400 animate-pulse ring-4 ring-rose-300/50' 
              : 'bg-emerald-500 hover:bg-emerald-400 ring-4 ring-emerald-300/50'
          }`}
        >
          {isRecording ? <Square size={18} fill="currentColor" /> : <Mic size={18} />}
          {isRecording ? 'タップして判定' : 'タップして音読開始'}
        </button>
      ) : (
        <div className="flex flex-col items-center w-full animate-in fade-in zoom-in duration-500">
          <div className="flex items-center gap-4 mb-2">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black flex items-baseline gap-1 justify-center">
                <span className={accuracy >= 80 ? 'text-emerald-400 drop-shadow-md' : 'text-amber-400'}>
                  {accuracy}
                </span>
                <span className="text-lg text-slate-400">%</span>
              </div>
              <p className="font-bold text-slate-400 text-xs mt-0.5">Accuracy</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
            <button
              onClick={() => { setTranscript(''); setAccuracy(null); }}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-600 hover:bg-slate-500 font-bold transition-all w-full md:w-auto"
            >
              <RefreshCw size={16} /> もう一度
            </button>
            <button
              onClick={onComplete}
              className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 font-black text-base md:text-lg transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)] w-full md:w-auto"
            >
              次の問題へ <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* リアルタイム文字起こしの余白も削減 */}
      {(transcript || isRecording) && accuracy === null && (
        <div className="mt-2 w-full bg-slate-900/50 p-2 rounded-xl border border-slate-700 min-h-[40px] flex items-center justify-center">
          <p className="text-sm md:text-base font-bold text-slate-300 text-center italic">
            {transcript || "Listening..."}
          </p>
        </div>
      )}
    </motion.div>
  );
}