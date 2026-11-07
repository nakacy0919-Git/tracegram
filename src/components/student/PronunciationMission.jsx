"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Mic, Square, ArrowRight, RefreshCw, Volume2, AlertCircle, CheckCircle2 } from 'lucide-react';

// 単語の重複・順序・抜けをすべて反映する単語単位の編集距離。
// ブラウザの文字起こしから算出する一致度であり、発音の音響評価ではない。
export const calculateReadingMatch = (expected, spoken) => {
  const words = (value) => String(value || '')
    .toLowerCase().normalize('NFKC')
    .replace(/[^a-z0-9\s']/g, ' ')
    .trim().split(/\s+/).filter(Boolean);
  const a = words(expected), b = words(spoken);
  if (!a.length || !b.length) return 0;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const next = [i];
    for (let j = 1; j <= b.length; j++) {
      next[j] = Math.min(next[j - 1] + 1, prev[j] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = next;
  }
  return Math.max(0, Math.round(100 * (1 - prev[b.length] / Math.max(a.length, b.length))));
};


// Half-circle meter: visualizes Web Speech word-match accuracy, not acoustic
// pronunciation quality. A unique SVG gradient avoids shared-DOM ID clashes.
function AccuracyGauge({ accuracy, id }) {
  const value = accuracy == null ? null : Math.min(100, Math.max(0, accuracy));
  const passed = value != null && value >= 80;
  const fill = passed ? '#6fae97' : '#c49b72';

  return (
    <div className="relative mx-auto w-full max-w-[305px]" role="img"
      aria-label={value == null ? '単語一致度：判定前' : `単語一致度：${value}パーセント`}>
      <svg viewBox="0 0 320 200" className="w-full h-auto overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="40%">
            <stop offset="0%" stopColor={passed ? '#93c6b1' : '#ddbd9a'}/>
            <stop offset="56%" stopColor={fill}/>
            <stop offset="100%" stopColor={passed ? '#538b76' : '#ae825c'}/>
          </linearGradient>
          <filter id={`${id}-glow`} x="-25%" y="-35%" width="150%" height="170%">
            <feGaussianBlur stdDeviation="2.2"/>
          </filter>
        </defs>
        <path d="M 34 165 A 126 126 0 0 1 286 165" fill="none"
          stroke="#e5eae2" strokeWidth="28" strokeLinecap="round"/>
        {value != null && value > 0 && (
          <>
            <path d="M 34 165 A 126 126 0 0 1 286 165" fill="none"
              stroke={fill} strokeWidth="27" strokeLinecap="round" opacity=".16"
              filter={`url(#${id}-glow)`} pathLength="100"
              strokeDasharray={`${value} 100`}/>
            <path d="M 34 165 A 126 126 0 0 1 286 165" fill="none"
              stroke={`url(#${id})`} strokeWidth="25" strokeLinecap="round"
              pathLength="100" strokeDasharray={`${value} 100`}
              className="transition-[stroke-dasharray] duration-700 ease-out"/>
          </>
        )}
        <line x1="34" y1="180" x2="34" y2="187" stroke="#bbc7bd" strokeWidth="2"/>
        <line x1="286" y1="180" x2="286" y2="187" stroke="#bbc7bd" strokeWidth="2"/>
      </svg>
      <div className="pointer-events-none absolute inset-x-0 bottom-[8%] flex flex-col items-center">
        <span className="text-[clamp(2.9rem,5.4vw,4.45rem)] font-extrabold tracking-[-0.06em] leading-none tabular-nums"
          style={{ color: value == null ? '#9eaba1' : passed ? '#447862' : '#a27652' }}>
          {value == null ? '—' : `${value}%`}
        </span>
        <span className="mt-2 text-[11px] font-semibold tracking-wider text-[#819486]">ACCURACY</span>
      </div>
    </div>
  );
}

export default function PronunciationMission({ targetSentence, onComplete, onFallback, onSkip }) {
  const [isRecording, setIsRecording] = useState(false);
  const [supported, setSupported] = useState(true);
  const [transcript, setTranscript] = useState('');
  const [accuracy, setAccuracy] = useState(null);
  const [error, setError] = useState('');
  const recognitionRef = useRef(null);
  const transcriptRef = useRef('');
  const recordingRef = useRef(false);
  const idRef = useRef('tracegram-accuracy');

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = (event) => {
      const full = Array.from(event.results).map(result => result[0]?.transcript || '').join(' ').trim();
      transcriptRef.current = full;
      setTranscript(full);
    };
    recognition.onerror = (event) => {
      setError(event.error === 'not-allowed' || event.error === 'service-not-allowed'
        ? 'マイクを利用できません。ブラウザのマイク許可を確認してください。'
        : '音声を認識できませんでした。もう一度試してください。');
      recordingRef.current = false;
      setIsRecording(false);
    };
    recognition.onend = () => {
      if (recordingRef.current) {
        recordingRef.current = false;
        setAccuracy(calculateReadingMatch(targetSentence, transcriptRef.current));
      }
      setIsRecording(false);
    };
    recognitionRef.current = recognition;
    return () => {
      recordingRef.current = false;
      recognition.onresult = null;
      recognition.onend = null;
      recognition.onerror = null;
      try { recognition.abort(); } catch {}
      window.speechSynthesis?.cancel();
      recognitionRef.current = null;
    };
  }, [targetSentence]);

  const toggleRecording = () => {
    if (!recognitionRef.current) return;
    if (isRecording) {
      try { recognitionRef.current.stop(); }
      catch {
        recordingRef.current = false;
        setIsRecording(false);
        setAccuracy(calculateReadingMatch(targetSentence, transcriptRef.current));
      }
      return;
    }
    setError('');
    setTranscript('');
    transcriptRef.current = '';
    setAccuracy(null);
    try {
      window.speechSynthesis?.cancel();
      recognitionRef.current.start();
      recordingRef.current = true;
      setIsRecording(true);
    } catch {
      recordingRef.current = false;
      setError('録音を開始できませんでした。少し待って再試行してください。');
    }
  };

  const playExample = () => {
    if (!('speechSynthesis' in window)) {
      setError('このブラウザではお手本音声を再生できません。');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(targetSentence);
    utterance.lang = 'en-US';
    utterance.rate = 0.94;
    const voice = window.speechSynthesis.getVoices().find(v => v.lang?.toLowerCase().startsWith('en'));
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  };

  const resetReading = () => {
    setAccuracy(null);
    setTranscript('');
    transcriptRef.current = '';
    setError('');
  };

  // Skip goes back to the *same* trace problem without awarding a correct answer.
  const skipOralPractice = () => {
    recordingRef.current = false;
    try { recognitionRef.current?.abort(); } catch {}
    try { window.speechSynthesis?.cancel(); } catch {}
    setIsRecording(false);
    if (typeof onSkip === 'function') onSkip();
  };

  const passed = accuracy !== null && accuracy >= 80;

  return (
    <section className="w-full min-w-0 flex flex-col gap-4 md:gap-5 text-[#30483c]"
      aria-label="リーディング・リカバリー">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center justify-center size-9 rounded-xl bg-[#e4f0e9] text-[#548674]">
          <Mic size={19}/>
        </span>
        <div className="min-w-0">
          <h3 className="font-bold text-[18px] md:text-xl tracking-tight">リーディング・リカバリー</h3>
          <p className="text-xs md:text-sm text-[#718577] mt-0.5">
            英文を音読して、同じ問題のトレースに再挑戦
          </p>
        </div>
      </div>

      <div className="flex items-center w-full min-w-0 gap-2 rounded-[17px] border border-[#d5e6da] bg-gradient-to-r from-[#eaf4eb] via-[#f6faf4] to-[#eef6ef] p-2 md:p-2.5 shadow-[inset_0_1px_1px_rgba(255,255,255,.9)]">
        <button type="button" onClick={playExample} aria-label="お手本音声を聞く"
          title="お手本音声を聞く"
          className="flex shrink-0 items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl border border-[#b7d6c4] bg-white/90 text-[#51866d] hover:bg-[#e8f2ea] active:scale-95 transition-transform shadow-sm">
          <Volume2 size={25}/>
        </button>
        <p className="flex-1 min-w-0 px-2 md:px-4 text-lg md:text-2xl font-semibold text-[#304b3b] leading-snug select-text">
          {targetSentence}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-3 md:gap-5 items-stretch">
        <div className="rounded-[18px] border border-[#d6e6da] bg-gradient-to-b from-[#fbfdf9] via-[#f2f8f1] to-[#edf5ee] px-3 py-3 md:px-5 md:py-5 flex flex-col items-center justify-center min-w-0">
          <div className="flex items-center justify-between gap-2 w-full">
            <span className="text-sm font-bold text-[#527b68]">単語一致度</span>
            <span className="text-[11px] md:text-xs font-semibold text-[#6f927d] rounded-full border border-[#c9dfcd] bg-white/75 px-3 py-1">
              目標 80%以上
            </span>
          </div>
          <AccuracyGauge accuracy={accuracy} id={idRef.current}/>
          <p className="text-center text-[11px] md:text-xs text-[#7d9182] leading-relaxed">
            音声認識による単語の一致度
          </p>
        </div>

        <div className="rounded-[18px] border border-[#d6e6da] bg-[#fffefa] p-3 md:p-5 min-w-0 flex flex-col">
          <div className="flex items-center gap-2 text-[#527b68] text-sm font-bold mb-3">
            <Mic size={17}/> 文字起こし・認識結果
          </div>
          <div role="status" aria-live="polite"
            className="flex-1 min-h-[105px] md:min-h-[150px] rounded-[15px] border border-[#e0e8df] bg-gradient-to-br from-[#f1f6ef] to-[#fafcf8] px-4 py-4 md:px-5 md:py-5">
            <p className={`break-words whitespace-pre-wrap text-base md:text-xl leading-relaxed ${transcript ? 'font-semibold text-[#314f3e]' : 'text-[#9aa99b] text-sm md:text-base'}`}>
              {transcript || (isRecording ? '音声を認識しています…' : '音読した英文がここに表示されます')}
            </p>
          </div>
          <p className="text-[11px] text-[#849588] mt-3">※ 発音そのものの採点ではなく、認識された単語の一致度です。</p>
        </div>
      </div>

      {!supported && (
        <p role="alert" className="flex items-center gap-2 text-sm font-semibold text-[#a0784e] bg-[#faf3e9] border border-[#eadbc4] rounded-xl px-4 py-3">
          <AlertCircle size={19} className="shrink-0"/> このブラウザでは音声認識を利用できません。
        </p>
      )}
      {error && (
        <p role="alert" className="flex items-center gap-2 text-sm font-semibold text-[#a0784e] bg-[#faf3e9] border border-[#eadbc4] rounded-xl px-4 py-3">
          <AlertCircle size={19} className="shrink-0"/> {error}
        </p>
      )}

      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2 md:gap-3">
        {accuracy === null ? (
          <button type="button" onClick={toggleRecording} disabled={!supported}
            className={`min-h-[52px] inline-flex flex-1 sm:flex-none items-center justify-center gap-2.5 px-6 md:px-10 py-3 rounded-xl font-bold text-base md:text-lg transition-colors shadow-[0_3px_0_rgba(51,85,68,.20)] ${isRecording ? 'bg-[#b78175] text-white hover:bg-[#a86e63]' : 'bg-[#548675] text-white hover:bg-[#447967] disabled:opacity-50'}`}>
            {isRecording ? <Square size={21}/> : <Mic size={22}/>}
            {isRecording ? '録音を止めて判定' : '音読して判定'}
          </button>
        ) : passed ? (
          <button type="button" onClick={() => onComplete(accuracy)}
            className="min-h-[52px] inline-flex flex-1 sm:flex-none items-center justify-center gap-2.5 px-6 md:px-10 py-3 rounded-xl font-bold text-base md:text-lg bg-[#548675] text-white hover:bg-[#447967] transition-colors shadow-[0_3px_0_rgba(51,85,68,.20)]">
            <CheckCircle2 size={21}/> クリア！もう一度なぞる <ArrowRight size={20}/>
          </button>
        ) : (
          <button type="button" onClick={resetReading}
            className="min-h-[52px] inline-flex flex-1 sm:flex-none items-center justify-center gap-2.5 px-6 md:px-10 py-3 rounded-xl font-bold text-base md:text-lg border border-[#b9d2c2] bg-[#ecf5ee] text-[#48725e] hover:bg-[#e0eee3]">
            <RefreshCw size={21}/> もう一度音読
          </button>
        )}
        {typeof onSkip === 'function' && (
          <button type="button" onClick={skipOralPractice}
            className="min-h-[48px] inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#cbded0] bg-[#fffefa] text-[#5f8270] hover:bg-[#eef5ef] px-5 py-3 text-sm font-semibold transition-colors"
            aria-label="音読をスキップし、同じ英文のトレースに戻る">
            Skip <ArrowRight size={16}/> <span className="font-normal">音読をとばして再挑戦</span>
          </button>
        )}
      </div>

      {typeof onSkip !== 'function' && typeof onFallback === 'function' &&
        (!supported || /マイクを利用できません/.test(error)) && (
          <button type="button" onClick={onFallback}
            className="text-sm font-semibold text-[#548675] underline">
            音声認識を使わず、同じ問題をもう一度なぞる
          </button>
        )}
    </section>
  );
}
