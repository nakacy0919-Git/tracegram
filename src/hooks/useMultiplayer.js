"use client";
import { useState, useRef, useCallback } from 'react';

export const useMultiplayer = () => {
  const [isMultiplayer, setIsMultiplayer] = useState(false);
  const [isHost, setIsHost] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [playersData, setPlayersData] = useState({});
  const [battleConfig, setBattleConfig] = useState(null); // ★追加：スタート時の問題データ

  const peerRef = useRef(null);
  const connectionsRef = useRef([]);
  const hostConnectionRef = useRef(null);
  const myPeerIdRef = useRef('');

  const createRoom = useCallback(async () => {
    setConnectionStatus('connecting');
    setErrorMessage('');
    
    const { default: Peer } = await import('peerjs');
    const newRoomId = Math.floor(100000 + Math.random() * 900000).toString();
    const peerId = `tracegram-room-${newRoomId}`;
    
    const peer = new Peer(peerId);
    peerRef.current = peer;
    myPeerIdRef.current = peerId;

    peer.on('open', () => {
      setIsMultiplayer(true);
      setIsHost(true);
      setRoomId(newRoomId);
      setConnectionStatus('connected');
      setPlayersData({
        [peerId]: { id: peerId, name: 'Host (You)', score: 0, combo: 0 }
      });
    });

    peer.on('connection', (conn) => {
      conn.on('open', () => {
        connectionsRef.current.push(conn);
        const guestIndex = connectionsRef.current.length;
        setPlayersData(prev => {
          const newData = { ...prev, [conn.peer]: { id: conn.peer, name: `Player ${guestIndex}`, score: 0, combo: 0 } };
          broadcast({ type: 'SYNC_SCORES', data: newData }, conn); 
          return newData;
        });
      });

      conn.on('data', (payload) => {
        if (payload.type === 'UPDATE_SCORE') {
          setPlayersData(prev => {
            const newData = { ...prev, [payload.peerId]: { ...prev[payload.peerId], score: payload.score, combo: payload.combo } };
            broadcast({ type: 'SYNC_SCORES', data: newData });
            return newData;
          });
        }
      });

      conn.on('close', () => {
        connectionsRef.current = connectionsRef.current.filter(c => c.peer !== conn.peer);
        setPlayersData(prev => {
          const newData = { ...prev };
          delete newData[conn.peer];
          broadcast({ type: 'SYNC_SCORES', data: newData });
          return newData;
        });
      });
    });

    peer.on('error', (err) => {
      setConnectionStatus('error');
      setErrorMessage('ルームの作成に失敗しました。');
    });
  }, []);

  const joinRoom = useCallback(async (joinId) => {
    if (joinId.length !== 6) {
      setErrorMessage('6桁のIDを入力してください。');
      return;
    }

    setConnectionStatus('connecting');
    setErrorMessage('');

    const { default: Peer } = await import('peerjs');
    const peer = new Peer();
    peerRef.current = peer;

    peer.on('open', (id) => {
      myPeerIdRef.current = id;
      const targetPeerId = `tracegram-room-${joinId}`;
      const conn = peer.connect(targetPeerId);
      hostConnectionRef.current = conn;

      conn.on('open', () => {
        setIsMultiplayer(true);
        setIsHost(false);
        setRoomId(joinId);
        setConnectionStatus('connected');
      });

      conn.on('data', (payload) => {
        if (payload.type === 'SYNC_SCORES') {
          setPlayersData(payload.data);
        }
        if (payload.type === 'BATTLE_START') {
          // ★追加：ホストからスタートの合図と「どの問題か」を受け取る
          setBattleConfig(payload.config);
        }
      });

      conn.on('close', () => {
        setConnectionStatus('error');
        setErrorMessage('ホストとの通信が切断されました。');
        exitMultiplayer();
      });
    });

    peer.on('error', (err) => {
      setConnectionStatus('error');
      setErrorMessage('ルームが見つかりません。IDを確認してください。');
    });
  }, []); // ← 依存配列から exitMultiplayer を外してエラーを防止

  const broadcast = useCallback((payload, specificConn = null) => {
    if (specificConn) {
      specificConn.send(payload);
    } else {
      connectionsRef.current.forEach(conn => {
        if (conn.open) conn.send(payload);
      });
    }
  }, []);

  const sendToHost = useCallback((payload) => {
    if (hostConnectionRef.current && hostConnectionRef.current.open) {
      hostConnectionRef.current.send(payload);
    }
  }, []);

  const syncMyScore = useCallback((newScore, newCombo) => {
    if (!isMultiplayer) return;
    if (isHost) {
      setPlayersData(prev => {
        const newData = { ...prev, [myPeerIdRef.current]: { ...prev[myPeerIdRef.current], score: newScore, combo: newCombo } };
        broadcast({ type: 'SYNC_SCORES', data: newData });
        return newData;
      });
    } else {
      sendToHost({ type: 'UPDATE_SCORE', peerId: myPeerIdRef.current, score: newScore, combo: newCombo });
    }
  }, [isMultiplayer, isHost, broadcast, sendToHost]);

  // ★追加：ホストがゲームを開始する関数
  const startBattle = useCallback((config) => {
    broadcast({ type: 'BATTLE_START', config });
  }, [broadcast]);

  const exitMultiplayer = useCallback(() => {
    if (peerRef.current) { peerRef.current.destroy(); peerRef.current = null; }
    connectionsRef.current = [];
    hostConnectionRef.current = null;
    setIsMultiplayer(false);
    setIsHost(false);
    setRoomId('');
    setPlayersData({});
    setBattleConfig(null);
    setConnectionStatus('idle');
  }, []);

  return {
    isMultiplayer, isHost, roomId, connectionStatus, errorMessage,
    playersData, myPeerId: myPeerIdRef.current, battleConfig,
    createRoom, joinRoom, syncMyScore, startBattle, exitMultiplayer
  };
};