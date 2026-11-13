"use client";
import React from 'react';
import { Users, ArrowLeft, LogIn, PencilLine } from 'lucide-react';

export default function TitleScreen({
  onSinglePlayer, onCreateRoom, playerName, setPlayerName, joinPin, setJoinPin, onJoinRoom,
  connectionStatus, errorMessage
}) {
  const connecting = connectionStatus === 'connecting';
  return (
    <main className="tg-workspace tg-fluid-screen overflow-y-auto px-4 md:px-8 py-6 md:py-10">
      <div className="max-w-[900px] mx-auto">
        <button type="button" onClick={onSinglePlayer}
          className="inline-flex items-center gap-1.5 text-[#506f5d] text-sm font-semibold mb-5 py-2">
          <ArrowLeft size={17}/> 学習ホーム
        </button>
        <section className="tg-paper tg-margin tg-holes rounded-[22px] py-7 px-6 pl-12 md:px-10 md:pl-16">
          <span className="tg-tag">GROUP TRACE</span>
          <h1 className="tg-serif font-bold text-[#304235] text-2xl md:text-4xl mt-2">友達といっしょに、なぞる。</h1>
          <p className="text-sm text-stone-600 mt-3 mb-5">2〜4人で、対戦・協力・チーム戦。先生も生徒もすぐに参加できます。</p>
          <label htmlFor="battle-name" className="block text-sm font-semibold text-[#344c3b] mb-2">表示名（本名でなくてもOK）</label>
          <input id="battle-name" type="text" value={playerName} maxLength={18}
            onChange={event => setPlayerName(event.target.value.slice(0, 18))}
            autoComplete="off" placeholder="例：Team Sakura / Aさん"
            className="tg-outline rounded-xl w-full px-4 py-3 mb-5 text-base"/>
          <p className="text-xs text-stone-500 mb-5">同じWi-Fiでもインターネット接続が必要です。ルーム番号またはQRリンクで参加します。成績はサーバーに保存しません。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="rounded-xl border border-[#dce0d4] bg-[#fffef8] p-5 space-y-3">
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#e2ebe1] text-[#456951]"><PencilLine size={22}/></div>
              <h2 className="font-semibold text-xl text-[#2e4435]">ルームを作る</h2>
              <p className="text-stone-500 text-sm min-h-[40px]">教材を選んで、ルーム番号を友達に伝えます。</p>
              <button type="button" onClick={onCreateRoom} disabled={connecting}
                className="tg-primary w-full rounded-xl py-3.5 font-semibold flex justify-center items-center gap-2">
                <Users size={18}/> ルームを作成
              </button>
            </section>
            <section className="rounded-xl border border-[#dce0d4] bg-[#fffef8] p-5 space-y-3">
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#e2ebe1] text-[#456951]"><LogIn size={22}/></div>
              <h2 className="font-semibold text-xl text-[#2e4435]">ルームに入る</h2>
              <label className="block text-sm text-stone-500" htmlFor="battle-pin">6桁のルーム番号</label>
              <input id="battle-pin" inputMode="numeric" autoComplete="off"
                maxLength={6} pattern="[0-9]{6}"
                value={joinPin} onChange={e=>setJoinPin(e.target.value.replace(/\D/g,'').slice(0,6))}
                placeholder="123456"
                className="w-full rounded-xl border border-[#d7dcd0] bg-[#fcfaf4] text-center text-xl tracking-[.24em] font-semibold px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#749980]"/>
              <button type="button" onClick={()=>onJoinRoom(joinPin)} disabled={connecting || !/^\d{6}$/.test(joinPin)}
                className="tg-primary w-full rounded-xl py-3.5 font-semibold flex items-center justify-center gap-2">
                <LogIn size={18}/> 参加する
              </button>
            </section>
          </div>
          {connecting && <p role="status" className="mt-4 text-sm text-[#456c57] font-semibold">接続中です。学校のWi-Fiによっては通信が制限される場合があります。</p>}
          {errorMessage && <p role="alert" className="bg-[#f7e6df] border border-[#e7c3b6] text-[#854a3d] p-3 rounded-xl mt-4 text-sm">{errorMessage}</p>}
        </section>
      </div>
    </main>
  );
}
