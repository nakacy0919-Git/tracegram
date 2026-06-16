import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mic, Square, ArrowRight, RefreshCw } from 'lucide-react';

// 簡単な正答率計算（単語の一致率）
const calculateAccuracy = (targetSentence, transcript) => {
  if (!transcript) return 0;
  const normalize = (str) => str.toLowerCase().replace(/[.,?!'"\-]/g, '').trim();
  const targetWords = normalize(targetSentence).split(/\s+/);
  const transcriptWords = normalize(transcript).split(/\s+/);

  let matchCount = 0;
  // 簡易的に「ターゲットの単語がどれくらい発話に含まれているか」で計算
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
    // Web Speech APIの初期化
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true; // リアルタイムで文字起こしを取得

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
      // 録音終了時にAccuracyを計算
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800 text-white p-6 rounded-3xl shadow-2xl border-4 border-rose-400 mt-6 flex flex-col items-center w-full"
    >
      <h3 className="text-xl font-black text-rose-300 mb-2 flex items-center gap-2">
        <Mic size={24} /> 追加ミッション：構造を意識して音読せよ！
      </h3>
      <p className="text-slate-300 font-bold mb-6 text-center text-sm">
        間違えた問題は、声に出して脳に定着させましょう。
      </p>

      {/* ターゲット英文の表示 */}
      <div className="bg-slate-700 p-4 rounded-xl mb-6 w-full text-center">
        <p className="text-2xl font-black text-cyan-300">{targetSentence}</p>
      </div>

      {/* 録音ボタン */}
      {accuracy === null ? (
        <button
          onClick={toggleRecording}
          className={`flex items-center gap-3 px-8 py-4 rounded-full font-black text-xl transition-all shadow-lg ${
            isRecording 
              ? 'bg-rose-500 hover:bg-rose-400 animate-pulse' 
              : 'bg-emerald-500 hover:bg-emerald-400'
          }`}
        >
          {isRecording ? <Square size={24} fill="currentColor" /> : <Mic size={24} />}
          {isRecording ? 'タップして終了' : 'タップして音読スタート'}
        </button>
      ) : (
        /* 結果表示エリア */
        <div className="flex flex-col items-center w-full animate-in fade-in zoom-in duration-500">
          <div className="text-6xl font-black mb-2 flex items-baseline gap-2">
            <span className={accuracy >= 80 ? 'text-emerald-400' : 'text-amber-400'}>
              {accuracy}
            </span>
            <span className="text-2xl text-slate-400">%</span>
          </div>
          <p className="font-bold text-slate-300 mb-6">Accuracy</p>
          
          <div className="flex gap-4">
            <button
              onClick={() => { setTranscript(''); setAccuracy(null); }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-600 hover:bg-slate-500 font-bold transition-all"
            >
              <RefreshCw size={20} /> もう一度
            </button>
            <button
              onClick={onComplete}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 font-black text-lg transition-all shadow-lg"
            >
              次の問題へ <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* リアルタイム文字起こし */}
      {(transcript || isRecording) && accuracy === null && (
        <div className="mt-6 w-full bg-slate-900/50 p-4 rounded-xl border border-slate-700 min-h-[80px] flex items-center justify-center">
          <p className="text-lg font-bold text-slate-300 text-center italic">
            {transcript || "Listening..."}
          </p>
        </div>
      )}
    </motion.div>
  );
}