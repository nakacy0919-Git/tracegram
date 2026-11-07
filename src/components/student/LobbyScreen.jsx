"use client";
import React from 'react';
import { ArrowLeft, Users, UserPlus, Play } from 'lucide-react';

export default function LobbyScreen({roomId,playersData,myPeerId,isHost,onExit,onStartBattle}) {
  const players=Object.values(playersData||{}).sort((a,b)=>String(a.name).localeCompare(String(b.name)));
  const ready=players.length>=2;
  return <main className="tg-workspace tg-fluid-screen p-4 md:p-9 overflow-y-auto">
    <div className="max-w-[780px] mx-auto">
      <button type="button" onClick={onExit}
        className="inline-flex gap-2 items-center text-[#516e5e] text-sm font-semibold mb-5 py-2">
        <ArrowLeft size={18}/> 学習ホームへ
      </button>
      <section className="tg-paper tg-margin tg-holes rounded-[22px] p-5 pl-12 md:p-10 md:pl-16">
        <span className="tg-tag">GROUP NOTE</span>
        <h1 className="tg-serif text-2xl md:text-3xl font-bold text-[#2e4637] mt-2">対戦ルーム</h1>
        <div className="bg-[#edf2e7] border border-[#d2dfd0] rounded-xl p-4 my-6 text-center">
          <p className="tg-tag mb-1">ROOM CODE</p>
          <p className="font-mono font-bold tracking-[.15em] text-3xl md:text-5xl text-[#315a41] tabular-nums">{roomId||'------'}</p>
          <p className="text-xs text-stone-500 mt-2">この番号を参加者に伝えてください</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {Array.from({length:4},(_,i)=>{
            const person=players[i];
            return <div key={person?.id||i} className={`min-h-[110px] border rounded-xl p-3 flex flex-col justify-center items-center gap-2 text-center ${person?'border-[#b8cfb8] bg-[#f5f8f0]':'border-dashed border-[#d9dbd0] bg-white/50'}`}>
              {person?<Users size={22} className="text-[#4b7855]"/>:<UserPlus size={22} className="text-stone-300"/>}
              <span className="text-sm font-semibold text-[#3b513e] break-all line-clamp-2">{person?(person.id===myPeerId?'あなた':person.name):'参加待ち'}</span>
            </div>;
          })}
        </div>
        {isHost?(
          <button type="button" disabled={!ready} onClick={onStartBattle}
            className="tg-primary rounded-xl w-full mt-7 py-4 px-6 font-semibold flex items-center justify-center gap-2">
            <Play size={19} fill="currentColor"/>{ready?'このメンバーで始める':'参加者を待っています'}
          </button>
        ):<p className="text-center text-stone-500 text-sm font-semibold pt-7">ホストが開始するまでお待ちください。</p>}
      </section>
    </div>
  </main>;
}
