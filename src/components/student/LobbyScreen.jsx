"use client";
import React, { useEffect, useState } from 'react';
import { ArrowLeft, Users, UserPlus, Play, Copy, QrCode, BookOpen, RefreshCcw } from 'lucide-react';
import { BATTLE_MODES, MAX_PLAYERS } from '../../lib/battleSession.mjs';

export default function LobbyScreen({
  roomId, playersData, myPeerId, isHost, onExit, onStartBattle,
  onChooseCourse, battleSetup, battleType, onBattleTypeChange, battleError, sessionStatus,
}) {
  const players = Object.values(playersData || {}).sort((a,b) => a.seat - b.seat);
  const ready = players.length >= 2 && !!battleSetup?.subCategory &&
    (battleType !== 'teams' || players.length === MAX_PLAYERS);
  const [inviteUrl, setInviteUrl] = useState('');
  const [copyMessage, setCopyMessage] = useState('');

  useEffect(() => {
    if (!roomId) return;
    const url = new URL(window.location.href);
    url.searchParams.set('battle', roomId);
    url.hash = '';
    setInviteUrl(url.toString());
  }, [roomId]);

  const copyInvite = async () => {
    if (!inviteUrl) return;
    try {
      await navigator.clipboard.writeText(inviteUrl);
      setCopyMessage('招待リンクをコピーしました');
    } catch {
      setCopyMessage('リンクを長押ししてコピーしてください');
    }
  };

  return <main className="tg-workspace tg-fluid-screen p-4 md:p-9 overflow-y-auto">
    <div className="max-w-[840px] mx-auto">
      <button type="button" onClick={onExit} className="inline-flex gap-2 items-center text-[#516e5e] text-sm font-semibold mb-4 py-2">
        <ArrowLeft size={18}/> 学習ホームへ
      </button>
      <section className="tg-paper tg-margin tg-holes rounded-[22px] p-5 pl-12 md:p-9 md:pl-16">
        <span className="tg-tag">CLASSROOM ARENA · 2–4 PLAYERS</span>
        <h1 className="tg-serif text-2xl md:text-3xl font-bold text-[#2e4637] mt-2">
          {isHost ? '教室バトルを準備' : '参加しました！'}
        </h1>
        <div className="bg-[#edf2e7] border border-[#d2dfd0] rounded-xl p-4 my-5 text-center">
          <p className="tg-tag mb-1">ROOM CODE</p>
          <p className="font-mono font-bold tracking-[.15em] text-3xl md:text-5xl text-[#315a41] tabular-nums">{roomId || '------'}</p>
          <p className="text-xs text-stone-500 mt-2">この6桁の番号、またはQRでiPadから参加</p>
          <div className="flex justify-center flex-wrap gap-2 mt-3">
            <button type="button" onClick={copyInvite} disabled={!inviteUrl}
              className="tg-outline rounded-xl px-4 py-2.5 font-semibold text-sm inline-flex items-center gap-2">
              <Copy size={17}/> 招待リンクをコピー
            </button>
            <button type="button" data-share-qr data-share-url={inviteUrl} disabled={!inviteUrl}
              className="tg-outline rounded-xl px-4 py-2.5 font-semibold text-sm inline-flex items-center gap-2">
              <QrCode size={17}/> 参加用QRを表示
            </button>
          </div>
          {copyMessage && <p className="text-xs text-[#44694e] mt-2" role="status">{copyMessage}</p>}
          {inviteUrl && <p className="text-[10px] text-stone-500 break-all mt-2 select-all">{inviteUrl}</p>}
        </div>
        <div className="flex items-center justify-between gap-3 mb-2">
          <h2 className="font-bold text-[#344b3b]">参加メンバー</h2>
          <span className="text-xs text-stone-500 tabular-nums">{players.length}/{MAX_PLAYERS} 人</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {Array.from({length:MAX_PLAYERS},(_,i)=>{
            const person=players.find(p => p.seat === i);
            return <div key={person?.id||i} className={'min-h-[102px] border rounded-xl p-3 flex flex-col justify-center items-center gap-1.5 text-center ' +
              (person ? 'border-[#b8cfb8] bg-[#f5f8f0]' : 'border-dashed border-[#d9dbd0] bg-white/50')}>
              {person?<Users size={21} className="text-[#4b7855]"/>:<UserPlus size={21} className="text-stone-300"/>}
              <span className="text-sm font-semibold text-[#3b513e] break-all line-clamp-2">
                {person ? (person.id===myPeerId ? person.name + '（あなた）' : person.name) : '参加待ち'}
              </span>
              {person && <span className="text-[10px] text-stone-500">チーム {person.team}</span>}
            </div>;
          })}
        </div>
        {isHost ? <>
          <div className="border-t border-[#e2e5d9] mt-5 pt-5">
            <h2 className="font-bold text-[#344b3b] mb-2">ゲームの種類</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {Object.entries(BATTLE_MODES).map(([key, item]) =>
                <button key={key} type="button" disabled={key==='teams' && players.length !== MAX_PLAYERS}
                  aria-pressed={battleType===key} onClick={()=>onBattleTypeChange(key)}
                  className={'rounded-xl border p-3 text-left disabled:opacity-40 disabled:cursor-not-allowed ' +
                    (battleType===key?'border-[#517865] bg-[#e9f0e5]':'border-[#daddd0] bg-white/70')}>
                  <span className="block font-bold text-sm">{item.label}</span>
                  <span className="text-[11px] text-stone-500 mt-1 block">{item.description}</span>
                </button>)}
            </div>
          </div>
          <div className="border-t border-[#e2e5d9] mt-5 pt-5 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="font-bold text-[#344b3b]">{battleSetup?.subCategory?.title || '教材が未選択です'}</p>
              <p className="text-xs text-stone-500 mt-1">
                {battleSetup ? '難易度 ' + battleSetup.level + ' · ' + battleSetup.questionCount + ' 問（最大50問）' :
                  'ホストが教材と難易度を選びます'}
              </p>
            </div>
            <button type="button" onClick={onChooseCourse} className="tg-outline rounded-xl px-3 py-2.5 font-semibold text-sm inline-flex gap-1.5 shrink-0 items-center">
              <BookOpen size={17}/>{battleSetup ? '変更' : '教材を選ぶ'}
            </button>
          </div>
          {battleError && <p role="alert" className="text-[#9b4e3a] text-sm mt-3">{battleError}</p>}
          <button type="button" disabled={!ready || sessionStatus==='playing'} onClick={onStartBattle}
            className="tg-primary rounded-xl w-full mt-5 py-4 px-6 font-semibold flex items-center justify-center gap-2">
            <Play size={19} fill="currentColor"/>{!battleSetup ? '教材を選んでください' :
              players.length < 2 ? '2人以上の参加を待っています' :
              battleType==='teams' && players.length!==4 ? 'チーム対抗戦は4人で開始' : '全員でスタート！'}
          </button>
        </> : <>
          <div className="mt-6 rounded-xl border border-[#dce3d6] bg-[#f7f8f1] p-4 text-center">
            <RefreshCcw className="inline-block text-[#62836a] mb-2" size={20}/>
            <p className="text-sm font-semibold text-[#375743]">ホストが教材を選んでいます</p>
            <p className="text-xs text-stone-500 mt-1">同じ英文が全員のiPadに同じ順番で表示されます。</p>
          </div>
          {battleError && <p role="alert" className="text-[#9b4e3a] text-sm mt-3">{battleError}</p>}
        </>}
        <p className="text-[11px] text-stone-500 mt-4">生徒アカウント不要 · 表示名のみ共有 · 通信環境により参加できない場合があります。</p>
      </section>
    </div>
  </main>;
}
