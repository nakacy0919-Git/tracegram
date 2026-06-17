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
      className="bg-slate-800 text-white p-4 md:p-6 rounded-3xl shadow-lg flex flex-col items-center w-full relative"
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

      <h3 className="text-lg md:text-xl font-black text-rose-300 mb-1 flex items-center gap-2">
        <Mic size={20} /> 【必須】構造を意識して音読せよ！
      </h3>
      <p className="text-slate-400 font-bold mb-4 text-center text-xs md:text-sm">
        正しく発音し終えるまで次の問題には進めません。
      </p>

      {/* 録音ボタン / 結果表示 */}
      {accuracy === null ? (
        <button
          onClick={toggleRecording}
          className={`flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-lg md:text-xl transition-all shadow-lg w-full md:w-auto justify-center ${
            isRecording 
              ? 'bg-rose-500 hover:bg-rose-400 animate-pulse ring-4 ring-rose-300/50' 
              : 'bg-emerald-500 hover:bg-emerald-400 ring-4 ring-emerald-300/50'
          }`}
        >
          {isRecording ? <Square size={20} fill="currentColor" /> : <Mic size={20} />}
          {isRecording ? 'タップして判定' : 'タップして音読開始'}
        </button>
      ) : (
        <div className="flex flex-col items-center w-full animate-in fade-in zoom-in duration-500">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black flex items-baseline gap-1 justify-center">
                <span className={accuracy >= 80 ? 'text-emerald-400 drop-shadow-md' : 'text-amber-400'}>
                  {accuracy}
                </span>
                <span className="text-xl text-slate-400">%</span>
              </div>
              <p className="font-bold text-slate-400 text-xs mt-1">Accuracy</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => { setTranscript(''); setAccuracy(null); }}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-600 hover:bg-slate-500 font-bold transition-all w-full md:w-auto"
            >
              <RefreshCw size={18} /> もう一度
            </button>
            <button
              onClick={() => onComplete(accuracy || 0)} // 🌟 ここで正答率を渡す！
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 font-black text-lg transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)] w-full md:w-auto"
            >
              次の問題へ <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* リアルタイム文字起こし */}
      {(transcript || isRecording) && accuracy === null && (
        <div className="mt-4 w-full bg-slate-900/50 p-3 rounded-xl border border-slate-700 min-h-[60px] flex items-center justify-center">
          <p className="text-base md:text-lg font-bold text-slate-300 text-center italic">
            {transcript || "Listening..."}
          </p>
        </div>
      )}
    </motion.div>
  );
}