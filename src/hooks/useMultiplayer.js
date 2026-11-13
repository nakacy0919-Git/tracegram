"use client";
import { useState, useRef, useCallback, useEffect } from 'react';
import { cleanPlayerName, MAX_PLAYERS, BATTLE_MODES, teamForSeat } from '../lib/battleSession.mjs';

// WebRTC data channels carry classroom progress. The public PeerJS service
// supplies signaling only; sharing a Wi-Fi network alone does not discover peers.
const PEER_OPTIONS = {
  config: { iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
  ] },
};
const MAX_SCORE = 10000000;
const emojis = ['👏', '🔥', '💡'];

export function useMultiplayer() {
  const [isMultiplayer, setIsMultiplayer] = useState(false);
  const [isHost, setIsHost] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [myPeerId, setMyPeerId] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [playersData, setPlayersData] = useState({});
  const [battleConfig, setBattleConfig] = useState(null);
  const [sessionStatus, setSessionStatus] = useState('lobby');
  const [latestCheer, setLatestCheer] = useState(null);

  const peerRef = useRef(null);
  const connectionsRef = useRef([]);
  const hostConnectionRef = useRef(null);
  const myPeerIdRef = useRef('');
  const playersRef = useRef({});
  const sessionRef = useRef('lobby');
  const nameRef = useRef('プレイヤー');
  const lastCheerRef = useRef(0);

  const publishPlayers = useCallback(next => {
    playersRef.current = next;
    setPlayersData(next);
    connectionsRef.current.forEach(conn => {
      if (conn.open) conn.send({ type: 'SYNC_SCORES', data: next });
    });
  }, []);

  const broadcast = useCallback(message => {
    connectionsRef.current.forEach(conn => {
      if (conn.open) conn.send(message);
    });
  }, []);

  const resetTransport = useCallback(() => {
    hostConnectionRef.current = null;
    connectionsRef.current.forEach(conn => { try { conn.close(); } catch {} });
    connectionsRef.current = [];
    const peer = peerRef.current;
    peerRef.current = null;
    try { peer?.destroy(); } catch {}
  }, []);

  const exitMultiplayer = useCallback(() => {
    resetTransport();
    playersRef.current = {};
    sessionRef.current = 'lobby';
    myPeerIdRef.current = '';
    setMyPeerId('');
    setIsMultiplayer(false);
    setIsHost(false);
    setRoomId('');
    setPlayersData({});
    setBattleConfig(null);
    setSessionStatus('lobby');
    setConnectionStatus('idle');
    setErrorMessage('');
    setLatestCheer(null);
  }, [resetTransport]);

  const fail = useCallback(message => {
    resetTransport();
    playersRef.current = {};
    sessionRef.current = 'lobby';
    myPeerIdRef.current = '';
    setIsMultiplayer(false);
    setIsHost(false);
    setMyPeerId('');
    setPlayersData({});
    setBattleConfig(null);
    setRoomId('');
    setSessionStatus('lobby');
    setConnectionStatus('error');
    setErrorMessage(message);
  }, [resetTransport]);

  const createRoom = useCallback(async name => {
    if (peerRef.current) return;
    setConnectionStatus('connecting');
    setErrorMessage('');
    nameRef.current = cleanPlayerName(name, 'ホスト');
    try {
      const { default: Peer } = await import('peerjs');
      if (peerRef.current) return;
      const random = new Uint32Array(1);
      window.crypto.getRandomValues(random);
      const pin = String(100000 + (random[0] % 900000));
      const id = 'tracegram-room-' + pin;
      const peer = new Peer(id, PEER_OPTIONS);
      peerRef.current = peer;
      peer.on('open', () => {
        myPeerIdRef.current = id;
        setMyPeerId(id);
        setRoomId(pin);
        setIsHost(true);
        setIsMultiplayer(true);
        setConnectionStatus('connected');
        sessionRef.current = 'lobby';
        publishPlayers({
          [id]: { id, name: nameRef.current, score: 0, combo: 0, correctCount: 0, finished: false, seat: 0, team: 'A' },
        });
      });

      peer.on('connection', conn => {
        conn.on('open', () => {
          if (sessionRef.current !== 'lobby' || connectionsRef.current.length >= MAX_PLAYERS - 1) {
            conn.send({ type: 'ROOM_REJECTED', reason: sessionRef.current !== 'lobby' ? '対戦中です。次の対戦を待ってください。' : 'このルームは満員です。' });
            setTimeout(() => conn.close(), 200);
            return;
          }
          const occupied = new Set(Object.values(playersRef.current).map(p => p.seat));
          const seat = [1, 2, 3].find(value => !occupied.has(value));
          if (seat === undefined) { conn.close(); return; }
          connectionsRef.current.push(conn);
          const id = conn.peer;
          const guestName = cleanPlayerName(conn.metadata?.name, 'プレイヤー ' + seat);
          publishPlayers({
            ...playersRef.current,
            [id]: { id, name: guestName, score: 0, combo: 0, correctCount: 0, finished: false, seat, team: teamForSeat(seat) },
          });
        });

        conn.on('data', data => {
          if (!data || typeof data !== 'object' || !playersRef.current[conn.peer]) return;
          if (data.type === 'UPDATE_SCORE' && sessionRef.current === 'playing') {
            const { score, combo, correctCount, finished } = data;
            if (![score, combo, correctCount].every(Number.isSafeInteger) ||
                score < 0 || score > MAX_SCORE || combo < 0 || combo > 10000 ||
                correctCount < 0 || correctCount > 50 || typeof finished !== 'boolean') return;
            const prior = playersRef.current[conn.peer];
            // A stale packet must not replace a newer result.
            if (score < prior.score || correctCount < prior.correctCount) return;
            publishPlayers({ ...playersRef.current, [conn.peer]: {
              ...prior, score, combo, correctCount, finished: prior.finished || finished,
            } });
          }
          if (data.type === 'CHEER' && sessionRef.current === 'playing' && emojis.includes(data.emoji)) {
            const message = { type: 'CHEER', emoji: data.emoji, from: playersRef.current[conn.peer].name, at: Date.now() };
            setLatestCheer(message);
            broadcast(message);
          }
        });

        conn.on('close', () => {
          connectionsRef.current = connectionsRef.current.filter(item => item !== conn);
          if (playersRef.current[conn.peer]) {
            const next = { ...playersRef.current };
            delete next[conn.peer];
            publishPlayers(next);
          }
        });
        conn.on('error', () => conn.close());
      });

      peer.on('error', error => {
        fail(error?.type === 'unavailable-id'
          ? '同じルーム番号が使われています。もう一度作成してください。'
          : '接続できませんでした。学校のWi-Fiとインターネット接続を確認してください。');
      });
    } catch {
      fail('ルームを作成できませんでした。通信環境を確認してください。');
    }
  }, [publishPlayers, broadcast, fail]);

  const joinRoom = useCallback(async (pin, name) => {
    if (!/^\d{6}$/.test(pin)) { setErrorMessage('6桁のルーム番号を入力してください。'); return; }
    if (peerRef.current) return;
    setConnectionStatus('connecting');
    setErrorMessage('');
    nameRef.current = cleanPlayerName(name, 'プレイヤー');
    try {
      const { default: Peer } = await import('peerjs');
      if (peerRef.current) return;
      const peer = new Peer(PEER_OPTIONS);
      peerRef.current = peer;
      peer.on('open', id => {
        myPeerIdRef.current = id;
        setMyPeerId(id);
        const conn = peer.connect('tracegram-room-' + pin, {
          reliable: true,
          metadata: { name: nameRef.current },
        });
        hostConnectionRef.current = conn;
        conn.on('open', () => {
          setIsMultiplayer(true);
          setIsHost(false);
          setRoomId(pin);
          setConnectionStatus('connected');
        });
        conn.on('data', data => {
          if (!data || typeof data !== 'object') return;
          if (data.type === 'SYNC_SCORES' && data.data && typeof data.data === 'object' && !Array.isArray(data.data)) {
            const safe = Object.fromEntries(Object.entries(data.data).slice(0, MAX_PLAYERS).filter(([id, p]) =>
              typeof id === 'string' && id.length < 120 && p && typeof p.name === 'string' &&
              p.name.length <= 18 && Number.isSafeInteger(p.score) && p.score >= 0 && p.score <= MAX_SCORE &&
              Number.isSafeInteger(p.correctCount) && p.correctCount >= 0 && p.correctCount <= 50 &&
              Number.isInteger(p.seat) && p.seat >= 0 && p.seat < MAX_PLAYERS)
              .map(([id, p]) => [id, { id, name: cleanPlayerName(p.name), score: p.score,
                combo: Number.isSafeInteger(p.combo) ? p.combo : 0,
                correctCount: p.correctCount, finished: p.finished === true, seat: p.seat, team: teamForSeat(p.seat) }]));
            playersRef.current = safe;
            setPlayersData(safe);
          }
          if (data.type === 'BATTLE_START' && data.config && typeof data.config === 'object') {
            sessionRef.current = 'playing';
            setSessionStatus('playing');
            setBattleConfig(data.config);
          }
          if (data.type === 'LOBBY') {
            sessionRef.current = 'lobby';
            setSessionStatus('lobby');
            setBattleConfig(null);
          }
          if (data.type === 'CHEER' && emojis.includes(data.emoji) &&
              typeof data.from === 'string' && data.from.length <= 18) {
            setLatestCheer({ emoji: data.emoji, from: cleanPlayerName(data.from), at: Date.now() });
          }
          if (data.type === 'ROOM_REJECTED') {
            fail(typeof data.reason === 'string' ? data.reason.slice(0, 80) : 'ルームに参加できません。');
          }
        });
        conn.on('close', () => {
          if (peerRef.current === peer) fail('ホストとの接続が切れました。もう一度参加してください。');
        });
        conn.on('error', () => fail('ルームに接続できません。6桁の番号を確認してください。'));
      });
      peer.on('error', () => fail('ルームが見つかりません。ルーム番号と通信環境を確認してください。'));
    } catch {
      fail('ルームに参加できませんでした。通信環境を確認してください。');
    }
  }, [fail]);

  const syncMyScore = useCallback((score, combo, correctCount, finished) => {
    if (!isMultiplayer || sessionRef.current !== 'playing') return;
    if (![score, combo, correctCount].every(Number.isSafeInteger)) return;
    const update = { type: 'UPDATE_SCORE', score, combo, correctCount, finished: Boolean(finished) };
    if (isHost) {
      const prior = playersRef.current[myPeerIdRef.current];
      if (!prior || score < prior.score || correctCount < prior.correctCount) return;
      publishPlayers({ ...playersRef.current, [myPeerIdRef.current]: {
        ...prior, score, combo, correctCount, finished: prior.finished || Boolean(finished),
      } });
    } else if (hostConnectionRef.current?.open) {
      hostConnectionRef.current.send(update);
    }
  }, [isMultiplayer, isHost, publishPlayers]);

  const startBattle = useCallback(config => {
    if (!isHost || sessionRef.current !== 'lobby' || !config || !BATTLE_MODES[config.mode] ||
        Object.keys(playersRef.current).length < 2 ||
        (config.mode === 'teams' && Object.keys(playersRef.current).length !== MAX_PLAYERS)) return false;
    const reset = Object.fromEntries(Object.entries(playersRef.current).map(([id, p]) =>
      [id, { ...p, score: 0, combo: 0, correctCount: 0, finished: false }]));
    publishPlayers(reset);
    sessionRef.current = 'playing';
    setSessionStatus('playing');
    setBattleConfig(config);
    broadcast({ type: 'BATTLE_START', config });
    return true;
  }, [isHost, publishPlayers, broadcast]);

  const returnToLobby = useCallback(() => {
    if (isHost) {
      sessionRef.current = 'lobby';
      setSessionStatus('lobby');
      setBattleConfig(null);
      broadcast({ type: 'LOBBY' });
    }
  }, [isHost, broadcast]);

  const sendCheer = useCallback(emoji => {
    if (!isMultiplayer || sessionRef.current !== 'playing' || !emojis.includes(emoji) ||
        Date.now() - lastCheerRef.current < 2500) return;
    lastCheerRef.current = Date.now();
    if (isHost) {
      const message = { type: 'CHEER', emoji, from: nameRef.current, at: Date.now() };
      setLatestCheer(message);
      broadcast(message);
    } else if (hostConnectionRef.current?.open) {
      hostConnectionRef.current.send({ type: 'CHEER', emoji });
    }
  }, [isMultiplayer, isHost, broadcast]);

  useEffect(() => () => {
    const peer = peerRef.current;
    try { peer?.destroy(); } catch {}
  }, []);

  return {
    isMultiplayer, isHost, roomId, connectionStatus, errorMessage,
    playersData, myPeerId, battleConfig, sessionStatus, latestCheer,
    createRoom, joinRoom, syncMyScore, startBattle, returnToLobby, sendCheer, exitMultiplayer,
  };
}
