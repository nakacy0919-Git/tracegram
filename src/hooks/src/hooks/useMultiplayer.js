"use client";
import { useState, useRef, useCallback } from 'react';

export const useMultiplayer = () => {
  const [isMultiplayer, setIsMultiplayer] = useState(false);
  const [isHost, setIsHost] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // ★ 追加：全員のスコアを管理する状態（ランキング用）
  const [playersData, setPlayersData] = useState({});

  const peerRef = useRef(null);
  const connectionsRef = useRef([]); // ホストが持つゲストの接続リスト
  const hostConnectionRef = useRef(null); // ゲストが持つホストへの接続
  const myPeerIdRef = useRef(''); // 自分のIDを保持

  // 1. ホストとして部屋を作る
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
      
      // ★ ホスト自身のデータを初期化
      setPlayersData({
        [peerId]: { id: peerId, name: 'Player 1 (Host)', score: 0, combo: 0 }
      });
    });

    peer.on('connection', (conn) => {
      if (connectionsRef.current.length >= 3) {
        conn.send({ type: 'ERROR', message: 'ルームは満員です' });
        setTimeout(() => conn.close(), 500);
        return;
      }

      conn.on('open', () => {
        connectionsRef.current.push(conn);
        
        // ★ 新しいゲストが来たらスコアボードに追加
        const guestIndex = connectionsRef.current.length + 1;
        setPlayersData(prev => {
          const newData = { ...prev, [conn.peer]: { id: conn.peer, name: `Player ${guestIndex}`, score: 0, combo: 0 } };
          // 全員に最新のスコアボードを同期
          broadcast({ type: 'SYNC_SCORES', data: newData }, conn); 
          return newData;
        });
      });

      // ★ ゲストからデータ（スコア更新など）を受け取った時の処理
      conn.on('data', (payload) => {
        if (payload.type === 'UPDATE_SCORE') {
          setPlayersData(prev => {
            const newData = { 
              ...prev, 
              [payload.peerId]: { ...prev[payload.peerId], score: payload.score, combo: payload.combo } 
            };
            // スコアが更新されたら、即座に全員へ最新状態をばらまく！
            broadcast({ type: 'SYNC_SCORES', data: newData });
            return newData;
          });
        }
      });

      conn.on('close', () => {
        connectionsRef.current = connectionsRef.current.filter(c => c.peer !== conn.peer);
        setPlayersData(prev => {
          const newData = { ...prev };
          delete newData[conn.peer]; // 切断した人を削除
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

  // 2. ゲストとして部屋に入る
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
      myPeerIdRef.current = id; // 自動生成された自分のIDを保持
      const targetPeerId = `tracegram-room-${joinId}`;
      const conn = peer.connect(targetPeerId);
      hostConnectionRef.current = conn;

      conn.on('open', () => {
        setIsMultiplayer(true);
        setIsHost(false);
        setRoomId(joinId);
        setConnectionStatus('connected');
      });

      // ★ ホストからデータを受け取った時の処理
      conn.on('data', (payload) => {
        if (payload.type === 'SYNC_SCORES') {
          // ホストから最新のスコアボードが送られてきたら画面を更新
          setPlayersData(payload.data);
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
  }, []);

  // 3. 通信ヘルパー関数
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

  // ★ 追加：自分のスコアを送信する専用関数
  const syncMyScore = useCallback((newScore, newCombo) => {
    if (!isMultiplayer) return;

    if (isHost) {
      // 自分がホストなら、自分のデータを直接更新して全員にばらまく
      setPlayersData(prev => {
        const newData = { 
          ...prev, 
          [myPeerIdRef.current]: { ...prev[myPeerIdRef.current], score: newScore, combo: newCombo } 
        };
        broadcast({ type: 'SYNC_SCORES', data: newData });
        return newData;
      });
    } else {
      // 自分がゲストなら、ホストに「スコア上がったよ！」と報告する
      sendToHost({ type: 'UPDATE_SCORE', peerId: myPeerIdRef.current, score: newScore, combo: newCombo });
    }
  }, [isMultiplayer, isHost, broadcast, sendToHost]);

  const exitMultiplayer = useCallback(() => {
    if (peerRef.current) { peerRef.current.destroy(); peerRef.current = null; }
    connectionsRef.current = [];
    hostConnectionRef.current = null;
    setIsMultiplayer(false);
    setIsHost(false);
    setRoomId('');
    setPlayersData({});
    setConnectionStatus('idle');
  }, []);

  return {
    isMultiplayer, isHost, roomId, connectionStatus, errorMessage,
    playersData, myPeerId: myPeerIdRef.current, // ★ 追加
    createRoom, joinRoom, syncMyScore, exitMultiplayer // ★ 追加
  };
};