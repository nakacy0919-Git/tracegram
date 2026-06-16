"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useTrace } from '../hooks/useTrace';
import { useMultiplayer } from '../hooks/useMultiplayer';

// ★ 各画面のコンポーネントをインポート
import TitleScreen from './student/TitleScreen';
import LobbyScreen from './student/LobbyScreen';
import MenuScreen from './student/MenuScreen';
import ResultScreen from './student/ResultScreen';
import GameScreen from './student/GameScreen'; // ← ★最後に追加！

export default function StudentMode({ categories }) {
  const {
    gameState, availableCategories, activeMain, activeCategory, activeProblem, currentProblemIdx,
    score, combo, correctCount, selectedIndices, feedbackState, mainContainerRef, lastBonus,
    selectedLevel, filteredProblems, setGameState,
    selectMainCategory, selectSubCategory, startGame, 
    backToMain, backToSub, backToLevelSelect,
    handlePointerDown, handlePointerMove, handlePointerUp, submitAnswer
  } = useTrace(categories);

  const {
    isMultiplayer, isHost, roomId, connectionStatus, errorMessage,
    playersData, myPeerId, battleConfig,
    createRoom, joinRoom, syncMyScore, startBattle, exitMultiplayer
  } = useMultiplayer();

  const [appScreen, setAppScreen] = useState('title'); 
  const [joinPin, setJoinPin] = useState('');
  const [battleSetup, setBattleSetup] = useState(null);
  const [pendingBattle, setPendingBattle] = useState(null);

  const processedBattleRef = useRef(null);

  // 正解サウンド生成システム
  useEffect(() => {
    if (feedbackState === 'correct') {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();

        const playNote = (freq, startTime, duration) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine'; 
          osc.frequency.setValueAtTime(freq, startTime);
          gain.gain.setValueAtTime(0, startTime);
          gain.gain.linearRampToValueAtTime(0.2, startTime + 0.05); 
          gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration); 
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + duration);
        };

        const now = ctx.currentTime;
        playNote(880, now, 0.4); 
        playNote(1108.73, now + 0.1, 0.6); 
      } catch (e) {
        console.error("Audio playback failed", e);
      }
    }
  }, [feedbackState]);

  useEffect(() => {
    if (isMultiplayer) syncMyScore(score, combo);
  }, [score, combo, isMultiplayer, syncMyScore]);

  useEffect(() => {
    if (battleConfig && processedBattleRef.current !== battleConfig) {
      processedBattleRef.current = battleConfig; 
      selectMainCategory(battleConfig.mainId);
      selectSubCategory(battleConfig.subCategory);
      setPendingBattle(battleConfig.level);
    }
  }, [battleConfig, selectMainCategory, selectSubCategory]);

  useEffect(() => {
    if (pendingBattle !== null && activeCategory?.categoryId === battleConfig?.subCategory?.categoryId) {
      startGame(pendingBattle);
      setPendingBattle(null);
      setAppScreen('game');
    }
  }, [activeCategory, pendingBattle, battleConfig, startGame]);

  const handleExitToTitle = () => {
    exitMultiplayer();
    setAppScreen('title');
    setGameState('main_select');
  };

  // ==========================================
  // 📺 画面のルーティング（切り替え）
  // ==========================================

  if (appScreen === 'title') {
    return (
      <TitleScreen 
        onSinglePlayer={() => setAppScreen('game')}
        onCreateRoom={() => { createRoom(); setAppScreen('game'); }}
        joinPin={joinPin}
        setJoinPin={setJoinPin}
        onJoinRoom={(pin) => { joinRoom(pin); setAppScreen('lobby'); }}
        connectionStatus={connectionStatus}
        errorMessage={errorMessage}
      />
    );
  }

  if (appScreen === 'lobby') {
    return (
      <LobbyScreen 
        roomId={roomId}
        playersData={playersData}
        myPeerId={myPeerId}
        isHost={isHost}
        onExit={handleExitToTitle}
        onStartBattle={() => {
          if (Object.values(playersData).length >= 2) {
            startBattle(battleSetup);
            startGame(battleSetup.level);
            setAppScreen('game');
          }
        }}
      />
    );
  }

  if (gameState === 'main_select' || gameState === 'sub_select' || gameState === 'level_select') {
    return (
      <MenuScreen
        gameState={gameState}
        availableCategories={availableCategories}
        activeMain={activeMain}
        activeCategory={activeCategory}
        isMultiplayer={isMultiplayer}
        isHost={isHost}
        setAppScreen={setAppScreen}
        selectMainCategory={selectMainCategory}
        selectSubCategory={selectSubCategory}
        startGame={startGame}
        backToMain={backToMain}
        backToSub={backToSub}
        handleExitToTitle={handleExitToTitle}
        setBattleSetup={setBattleSetup}
      />
    );
  }

  if (gameState === 'result') {
    return (
      <ResultScreen
        isMultiplayer={isMultiplayer}
        playersData={playersData}
        myPeerId={myPeerId}
        score={score}
        onBackToLobby={() => setAppScreen('lobby')}
        onBackToLevelSelect={backToLevelSelect}
      />
    );
  }

  // いずれにも当てはまらない場合（＝ゲーム本編）
  return (
    <GameScreen
      isMultiplayer={isMultiplayer}
      playersData={playersData}
      myPeerId={myPeerId}
      activeCategory={activeCategory}
      selectedLevel={selectedLevel}
      currentProblemIdx={currentProblemIdx}
      filteredProblems={filteredProblems}
      activeProblem={activeProblem}
      score={score}
      selectedIndices={selectedIndices}
      feedbackState={feedbackState}
      lastBonus={lastBonus}
      mainContainerRef={mainContainerRef}
      handlePointerDown={handlePointerDown}
      handlePointerMove={handlePointerMove}
      handlePointerUp={handlePointerUp}
      submitAnswer={submitAnswer}
      onExit={() => { if(isMultiplayer) setAppScreen('lobby'); else backToLevelSelect(); }}
    />
  );
}