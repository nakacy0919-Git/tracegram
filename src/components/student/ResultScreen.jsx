"use client";
import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Home, NotebookPen, RotateCcw } from 'lucide-react';

export default function ResultScreen({
  isMultiplayer, playersData, myPeerId, score, activeCategory,
  selectedLevel, correctCount, firstTryCount = 0, wrongAttempts = 0, categoryStats = {},
  totalCount, onBackToLobby, onBackToLevelSelect, onBackToHome
}) {
  const saved = useRef(false);
  const players = Object.values(playersData || {}).sort((a,b)=>(b.score||0)-(a.score||0));
  useEffect(()=>{
    if (isMultiplayer || saved.current || !activeCategory) return;
    try {
      const existing = JSON.parse(localStorage.getItem('tracegram_learning_logs') || '[]');
      const list = Array.isArray(existing) ? existing : [];
      const log = {
        id:Date.now(),date:new Date().toISOString(),
        categoryTitle:activeCategory.title,categoryId:activeCategory.categoryId,
        level:selectedLevel,score,correctCount:correctCount||0,
        firstTryCount:firstTryCount||0,wrongAttempts:wrongAttempts||0,
        totalCount:totalCount||0,
        mixConfig:activeCategory.mixConfig || null,
        categoryStats:activeCategory.categoryId === 'grammar_mix' ? categoryStats : null
      };
      localStorage.setItem('tracegram_learning_logs',JSON.stringify([...list,log].slice(-100)));
      saved.current = true;
    } catch(e) { console.warn('Could not save learning log',e); }
  },[isMultiplayer,activeCategory,selectedLevel,score,correctCount,firstTryCount,wrongAttempts,totalCount,categoryStats]);

  const accuracy = totalCount ? Math.round(firstTryCount / totalCount * 100) : 0;
  const isMix = activeCategory?.categoryId === 'grammar_mix';
  const byTopic = isMix ? Object.entries(categoryStats || {}).filter(([,stat]) => stat?.attempted > 0).map(([id,stat]) => ({
    id,
    title: activeCategory?.problems?.find(p => p.sourceCategoryId === id)?.sourceCategoryTitle?.replace(/^Sub-\\d+:\\s*/, '') || id,
    attempted: stat.attempted,
    firstCorrect: stat.firstCorrect || 0,
    incorrect: stat.incorrect || 0,
    rate: Math.round(100 * (stat.firstCorrect || 0) / stat.attempted),
  })).sort((a,b) => a.rate - b.rate || b.incorrect - a.incorrect || a.title.localeCompare(b.title,'ja')).slice(0,6) : [];
  return <main className="tg-workspace flex-1 min-h-[100dvh] overflow-y-auto px-4 py-8 md:py-12">
    <div className="max-w-[740px] mx-auto space-y-5">
      <div className="tg-paper tg-margin tg-holes rounded-[22px] p-5 pl-12 md:p-10 md:pl-16">
        <span className="tg-tag">TRACEGRAM · YOUR NOTE</span>
        <h1 className="tg-serif text-3xl md:text-4xl font-bold text-[#2d4535] mt-2">
          {isMultiplayer ? '対戦の記録' : '今日の学習記録'}
        </h1>
        <p className="mt-1 text-stone-500 text-sm">{activeCategory?.title || 'Tracegram'}</p>
        <div className="h-px bg-[#d9dfd3] mt-6 mb-6"/>
        {isMultiplayer ? (
          <div className="space-y-2">
            {players.map((person,index)=>(
              <div key={person.id || index}
                className={`rounded-xl px-4 py-3 border flex justify-between items-center gap-3 ${person.id===myPeerId?'bg-[#e9f0e6] border-[#afc5b2]':'bg-white/60 border-[#e5e5d9]'}`}>
                <div className="flex items-center gap-3 min-w-0">
                  <span className="tg-serif text-xl text-[#65816d] w-7">{index+1}.</span>
                  <span className="font-semibold text-[#2c4134] truncate">{person.id===myPeerId?'あなた':person.name}</span>
                </div>
                <span className="tabular-nums font-bold text-[#355845] whitespace-nowrap">{Number(person.score||0).toLocaleString()} pt</span>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="flex items-baseline gap-2 mb-6">
              <strong className="tg-serif text-5xl md:text-6xl text-[#3d6d53] tabular-nums">{Number(score||0).toLocaleString()}</strong>
              <span className="text-stone-500 text-sm">pts</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="border-l-[3px] border-[#86a98c] pl-3 py-1">
                <div className="text-xs text-stone-500 font-semibold">初回正答率</div>
                <div className="text-2xl font-bold text-[#315640] tabular-nums mt-1">{accuracy}%</div>
              </div>
              <div className="border-l-[3px] border-[#cbb395] pl-3 py-1">
                <div className="text-xs text-stone-500 font-semibold">誤答回数</div>
                <div className="text-2xl font-bold text-[#8c694f] tabular-nums mt-1">{wrongAttempts} <span className="text-sm">回</span></div>
              </div>
            </div>
            {isMix && byTopic.length > 0 && (
              <div className="mt-7 pt-5 border-t border-[#d9dfd3]">
                <h2 className="font-bold text-[#345746] text-base mb-1">分野別の初回正答率</h2>
                <p className="text-xs text-stone-500 mb-3">初回に間違えた分野から順に表示しています。各分野の出題数は異なります。</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {byTopic.map(topic => (
                    <div key={topic.id} className="rounded-xl border border-[#dde2d7] bg-[#fffef8] px-3 py-2.5 flex items-center justify-between gap-3">
                      <span className="font-semibold text-xs md:text-sm text-[#394b3e] min-w-0 line-clamp-2">{topic.title}</span>
                      <span className="shrink-0 font-bold text-sm text-[#51735b] tabular-nums">{topic.firstCorrect}/{topic.attempted}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
        <div className="flex flex-wrap gap-2 mt-8">
          <button type="button" onClick={isMultiplayer?onBackToLobby:onBackToLevelSelect}
            className="tg-primary rounded-xl px-6 py-3.5 font-semibold flex items-center gap-2">
            <RotateCcw size={18}/> {isMultiplayer?'ロビーへ戻る':'もう一度なぞる'}
          </button>
          {!isMultiplayer && onBackToHome && <button type="button" onClick={onBackToHome}
            className="tg-outline rounded-xl px-6 py-3.5 font-semibold inline-flex items-center gap-2">
            <Home size={18}/> ホーム
          </button>}
        </div>
      </div>
    </div>
  </main>;
}
