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

export default function PronunciationMission({ targetSentence, onComplete, onFallback, onSkip }) {
  const [isRecording, setIsRecording] = useState(false);
  const [supported, setSupported] = useState(true);
  const [transcript, setTranscript] = useState('');
  const [accuracy, setAccuracy] = useState(null);
  const [error, setError] = useState('');
  const [slow, setSlow] = useState(false);
  const recognitionRef = useRef(null);
  const transcriptRef = useRef('');
  const recordingRef = useRef(false);

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
    utterance.rate = slow ? 0.72 : 0.94;
    const voice = window.speechSynthesis.getVoices().find(v => v.lang?.toLowerCase().startsWith('en'));
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  };

  // Skipping the oral practice returns to the same tracing exercise; it never awards points.
  const skipOralPractice = () => {
    recordingRef.current = false;
    try { recognitionRef.current?.abort(); } catch {}
    try { window.speechSynthesis?.cancel(); } catch {}
    setIsRecording(false);
    if (typeof onSkip === 'function') onSkip();
  };

  const passed = accuracy !== null && accuracy >= 80;
  return (
    <div className="tg-paper tg-note text-[#2b4032] p-4 md:p-6 rounded-2xl flex flex-col items-center w-full gap-3">
      <h3 className="text-lg md:text-xl font-semibold text-[#416b52] flex items-center gap-2">
        <Mic size={22} /> リーディング・リカバリー
      </h3>
      <p className="text-sm font-medium text-stone-600 text-center">
        間違えた構造を確認し、英文を音読してから同じ問題に再挑戦！
      </p>
      <p className="text-base md:text-lg font-semibold text-center leading-relaxed bg-[#f1f4e8] p-3 rounded-xl w-full select-text">
        {targetSentence}
      </p>
      <div className="flex items-center justify-center flex-wrap gap-2">
        <button type="button" onClick={playExample}
          className="tg-outline flex items-center gap-2 rounded-xl px-4 py-3 font-semibold">
          <Volume2 size={20}/> お手本を聞く
        </button>
        <label className="flex items-center gap-2 text-sm font-semibold cursor-pointer p-2 text-stone-600">
          <input type="checkbox" checked={slow} onChange={(e) => setSlow(e.target.checked)} />
          ゆっくり再生
        </label>
      </div>
      {!supported && (
        <div className="text-[#8d5d3b] font-semibold text-center flex items-start gap-2">
          <AlertCircle size={20} className="shrink-0"/> このブラウザでは音声認識が使えません。
        </div>
      )}
      {error && <p role="alert" className="text-[#8d5d3b] text-sm text-center font-semibold">{error}</p>}
      {supported && accuracy === null && (
        <button type="button" onClick={toggleRecording}
          className={`flex items-center justify-center gap-3 rounded-full px-8 py-4 text-lg font-black shadow-lg w-full md:w-auto ${isRecording ? 'bg-[#b26d5b] text-white' : 'tg-primary'}`}>
          {isRecording ? <Square size={20} /> : <Mic size={20} />}
          {isRecording ? '録音を止めて判定' : '音読して判定'}
        </button>
      )}
      {accuracy !== null && (
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="text-center">
            <span className={`text-5xl font-black ${passed ? 'text-[#40735b]' : 'text-[#ad7c4d]'}`}>{accuracy}%</span>
            <p className="text-xs font-semibold text-stone-500">音声認識による単語一致度（目標80%以上）</p>
          </div>
          {passed ? (
            <button type="button" onClick={() => onComplete(accuracy)}
              className="tg-primary flex items-center justify-center gap-2 rounded-xl py-4 px-8 font-semibold text-lg w-full md:w-auto">
              <CheckCircle2 size={22}/> クリア！もう一度なぞる <ArrowRight size={20}/>
            </button>
          ) : (
            <button type="button" onClick={() => { setAccuracy(null); setTranscript(''); transcriptRef.current = ''; setError(''); }}
              className="tg-outline flex items-center justify-center gap-2 rounded-xl py-3 px-7 font-semibold w-full md:w-auto">
              <RefreshCw size={20}/> もう一度音読
            </button>
          )}
        </div>
      )}
      {typeof onSkip === 'function' && (
        <button type="button" onClick={skipOralPractice}
          className="mt-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-[#c9d4c6] bg-[#fffef9] text-[#466752] text-sm font-semibold hover:bg-[#ebf2e9] transition-colors"
          aria-label="音読をスキップし、同じ英文のトレースに戻る">
          Skip <ArrowRight size={16} />
          <span className="text-xs font-normal">音読をとばして再挑戦</span>
        </button>
      )}
      {!!transcript && <p className="text-sm text-stone-600 text-center w-full select-text">認識結果: {transcript}</p>}
      {(!supported || /マイクを利用できません/.test(error)) && (
        <button type="button" onClick={onFallback}
          className="underline text-[#536f5c] text-sm font-semibold mt-2">
          音声認識を使わず、同じ問題をもう一度なぞる
        </button>
      )}
    </div>
  );
}
