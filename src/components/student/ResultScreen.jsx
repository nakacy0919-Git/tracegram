"use client";
import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Home, NotebookPen, RotateCcw } from 'lucide-react';

export default function ResultScreen({
  isMultiplayer, playersData, myPeerId, score, activeCategory,
  selectedLevel, correctCount, firstTryCount = 0, wrongAttempts = 0,
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
        totalCount:totalCount||0
      };
      localStorage.setItem('tracegram_learning_logs',JSON.stringify([...list,log].slice(-100)));
      saved.current = true;
    } catch(e) { console.warn('Could not save learning log',e); }
  },[isMultiplayer,activeCategory,selectedLevel,score,correctCount,firstTryCount,wrongAttempts,totalCount]);

  const accuracy = totalCount ? Math.round(firstTryCount / totalCount * 100) : 0;
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
