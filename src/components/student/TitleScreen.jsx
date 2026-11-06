"use client";
import React from 'react';
import { Users, Crown, ArrowLeft, LogIn, ShieldCheck, LoaderCircle, Hash } from 'lucide-react';

export default function TitleScreen({
  onSinglePlayer, onCreateRoom, joinPin, setJoinPin, onJoinRoom,
  connectionStatus, errorMessage,
}) {
  const connecting = connectionStatus === 'connecting';
  return (
    <div className="min-h-[100dvh] flex-1 overflow-y-auto bg-[#f5f8fc] px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <button type="button" onClick={onSinglePlayer} className="inline-flex items-center gap-2 font-bold text-slate-600 bg-white border border-slate-200 rounded-full px-4 py-2 mb-6 hover:bg-slate-100">
          <ArrowLeft size={17}/> 学習ホームに戻る
        </button>
        <div className="rounded-[30px] bg-slate-900 text-white p-7 md:p-10 mb-5">
          <div className="flex gap-2 items-center text-cyan-300 text-xs font-black mb-2 tracking-widest"><Users size={17}/> TRACEGRAM BATTLE</div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">友達と、なぞって対戦。</h1>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">2〜4人で同じ英文法をトレース。ホストが教材を選んで対戦を始めます。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 space-y-4">
            <span className="inline-flex p-3 rounded-2xl bg-violet-50 text-violet-700"><Crown size={27}/></span>
            <h2 className="text-xl font-black text-slate-800">対戦ルームを作る</h2>
            <p className="text-sm text-slate-500">ルームを作成した後、学習ホームから教材とレベルを選べます。</p>
            <button type="button" disabled={connecting} onClick={onCreateRoom}
              className="w-full flex gap-2 items-center justify-center rounded-xl bg-violet-600 hover:bg-violet-500 disabled:bg-slate-300 text-white py-4 font-black">
              {connecting ? <LoaderCircle className="animate-spin" size={20}/> : <Crown size={20}/>}
              {connecting ? '接続しています…' : '新しいルームを作成'}
            </button>
          </section>
          <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 space-y-4">
            <span className="inline-flex p-3 rounded-2xl bg-cyan-50 text-cyan-700"><LogIn size={27}/></span>
            <h2 className="text-xl font-black text-slate-800">ルームに参加する</h2>
            <p className="text-sm text-slate-500">ホストが表示する6桁の番号を入力してください。</p>
            <label className="block text-xs text-slate-500 font-bold" htmlFor="battle-pin">ルーム番号</label>
            <input id="battle-pin" inputMode="numeric" autoComplete="off" maxLength={6} pattern="[0-9]{6}"
              value={joinPin} onChange={e=>setJoinPin(e.target.value.replace(/\D/g,'').slice(0,6))}
              placeholder="123456"
              className="w-full text-center rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-xl tracking-[0.3em] font-black outline-none focus:ring-2 focus:ring-cyan-400"/>
            <button type="button" disabled={connecting || !/^\d{6}$/.test(joinPin)}
              onClick={()=>onJoinRoom(joinPin)}
              className="w-full flex justify-center items-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-300 py-4 text-white font-black">
              <LogIn size={19}/> 参加する
            </button>
          </section>
        </div>
        {errorMessage && <p role="alert" className="rounded-xl border border-rose-200 bg-rose-50 text-rose-700 mt-5 p-4 font-bold text-sm">{errorMessage}</p>}
        <div className="flex gap-2 items-start text-slate-500 text-sm mt-6">
          <ShieldCheck size={19} className="shrink-0"/>
          ルーム番号を共有する相手とだけ接続してください。現在の対戦スコアは端末側で計算されます。
        </div>
      </div>
    </div>
  );
}
