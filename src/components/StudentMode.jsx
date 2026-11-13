"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useTrace } from '../hooks/useTrace';
import { playCorrectChime } from '../lib/traceAudio';
import { useMultiplayer } from '../hooks/useMultiplayer';
import { createBattlePlan, resolveBattlePlan } from '../lib/battleSession.mjs';

import TitleScreen from './student/TitleScreen';
import OpeningSplash from './student/OpeningSplash';
import LobbyScreen from './student/LobbyScreen';
import MenuScreen from './student/MenuScreen';
import ResultScreen from './student/ResultScreen';
import GameScreen from './student/GameScreen';
import SummaryScreen from './student/SummaryScreen';

export default function StudentMode({ categories, onTeacherOpen }) {
  const {
    gameState, availableCategories, activeMain, activeCategory, activeProblem, currentProblemIdx,
    score, combo, correctCount, firstTryCount, wrongAttempts, categoryStats, selectedIndices, feedbackState, mainContainerRef, lastBonus,
    selectedLevel, filteredProblems, setGameState,
    selectMainCategory, selectSubCategory, startGame, resumeGame, 
    backToMain, backToSub, backToLevelSelect,
    handlePointerDown, handlePointerMove, handlePointerUp, submitAnswer, nextProblem, resetForRetry,
    addBonusScore
  } = useTrace(categories);

  const {
    isMultiplayer, isHost, roomId, connectionStatus, errorMessage,
    playersData, myPeerId, battleConfig, sessionStatus, latestCheer,
    createRoom, joinRoom, syncMyScore, startBattle, returnToLobby, sendCheer, exitMultiplayer
  } = useMultiplayer();

  const [appScreen, setAppScreen] = useState('main'); 
  const [joinPin, setJoinPin] = useState('');
  const [battleSetup, setBattleSetup] = useState(null);
  const [battleType, setBattleType] = useState('race');
  const [battleError, setBattleError] = useState('');
  const [playerName, setPlayerName] = useState('');

  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
    try { if (sessionStorage.getItem('tracegram_opening_seen') === 'yes') setShowOpening(false); } catch {}
  }, []);

  const dismissOpening = () => {
    try { sessionStorage.setItem('tracegram_opening_seen', 'yes'); } catch {}
    setShowOpening(false);
  };
  const [gameMode, setGameMode] = useState('flow');

  // 🌟 長文データを管理するState
  const [activeSummary, setActiveSummary] = useState(null);

  // 🌟 【超重要】メニュー画面の状態をホイスティング（画面を切り替えても記憶しておくため）
  const [menuViewMode, setMenuViewMode] = useState('home'); 
  const [summaryStep, setSummaryStep] = useState('genres');
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const processedBattleRef = useRef(null);

  // QR invite URLs prefill the room number, but never join a room without a tap.
  useEffect(() => {
    const pin = new URLSearchParams(window.location.search).get('battle');
    if (/^\\d{6}$/.test(pin || '')) {
      setJoinPin(pin);
      setAppScreen('title');
    }
  }, []);

  useEffect(() => {
    if (feedbackState === 'correct') playCorrectChime();
  }, [feedbackState]);

  useEffect(() => {
    if (isMultiplayer) syncMyScore(score, combo, correctCount, gameState === 'result');
  }, [score, combo, correctCount, gameState, isMultiplayer, syncMyScore]);

  useEffect(() => {
    if (!battleConfig || processedBattleRef.current === battleConfig.sessionId) return;
    processedBattleRef.current = battleConfig.sessionId;
    // Use only local catalog exercises. Never accept answer keys from a peer.
    const resolved = resolveBattlePlan(battleConfig, categories);
    if (!resolved || !startGame(battleConfig.level, resolved.problemIds.length,
      resolved.category, resolved.problemIds)) {
      setBattleError('この教材が端末にありません。全員が同じ版のTracegramを開いてください。');
      setAppScreen('lobby');
      return;
    }
    setBattleError('');
    setGameMode('flow'); // same play method on every iPad
    setAppScreen('game');
  }, [battleConfig, categories, startGame]);

  useEffect(() => {
    if (sessionStatus === 'lobby' && !isHost && isMultiplayer && appScreen === 'game') {
      setAppScreen('lobby');
    }
  }, [sessionStatus, isHost, isMultiplayer, appScreen]);

  useEffect(() => {
    if (connectionStatus === 'error') setAppScreen('title');
  }, [connectionStatus]);

  useEffect(() => {
    if (appScreen === 'title' && connectionStatus === 'connected') {
      setAppScreen(isHost ? 'main' : 'lobby');
    }
  }, [appScreen, connectionStatus, isHost]);

  const handleExitToTitle = () => {
    exitMultiplayer();
    setAppScreen('main');
    setMenuViewMode('home');
    setGameState('main_select');
    setBattleSetup(null);
    setBattleError('');
    processedBattleRef.current = null;
  };

  if (showOpening) return <OpeningSplash onEnter={dismissOpening} />;

  if (appScreen === 'title') {
    return (
      <TitleScreen 
         onSinglePlayer={() => setAppScreen('main')}
        onCreateRoom={() => createRoom(playerName)}
        playerName={playerName}
        setPlayerName={setPlayerName}
        joinPin={joinPin}
        setJoinPin={setJoinPin}
        onJoinRoom={(pin) => joinRoom(pin, playerName)}
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
        battleType={battleType}
        onBattleTypeChange={setBattleType}
        battleSetup={battleSetup}
        battleError={battleError}
        sessionStatus={sessionStatus}
        onExit={handleExitToTitle}
        onChooseCourse={() => {
          returnToLobby();
          setBattleError('');
          setAppScreen('main');
          backToMain();
          setMenuViewMode('grammar');
        }}
        onStartBattle={() => {
          if (!battleSetup?.subCategory) {
            setBattleError('先に文法教材を選んでください。');
            return;
          }
          const plan = createBattlePlan(battleSetup.subCategory,
            battleSetup.level, battleSetup.questionCount, battleType);
          if (!plan) {
            setBattleError('出題できる共通教材がありません。別の教材を選んでください。');
            return;
          }
          processedBattleRef.current = plan.sessionId;
          if (!startBattle(plan)) {
            setBattleError('参加人数を確認してください。チーム対抗戦は4人で遊べます。');
            return;
          }
          setGameMode('flow');
          if (startGame(plan.level, plan.problemIds.length, battleSetup.subCategory, plan.problemIds)) {
            setBattleError('');
            setAppScreen('game');
          }
        }}
      />
    );
  }

  // 🌟 長文・要約トレース画面
  if (appScreen === 'summary') {
    return (
      <SummaryScreen 
        summaryData={activeSummary} 
        // 🌟 戻るボタンを押した時、タイトルではなく「メニュー画面（一つ前の状態）」へ戻す
        onExit={() => setAppScreen('main')} 
      />
    );
  }

  // メニュー画面
  if (gameState === 'main_select' || gameState === 'sub_select' || gameState === 'level_select') {
    return (
      <MenuScreen
        gameMode={gameMode}
        setGameMode={setGameMode}
        onReplayOpening={() => setShowOpening(true)}
        onTeacherOpen={onTeacherOpen}
        setActiveSummary={setActiveSummary} 
        gameState={gameState}
        roomId={roomId}
        connectionStatus={connectionStatus}
        availableCategories={availableCategories}
        activeMain={activeMain}
        activeCategory={activeCategory}
        isMultiplayer={isMultiplayer}
        isHost={isHost}
        setAppScreen={setAppScreen}
        selectMainCategory={selectMainCategory}
        selectSubCategory={selectSubCategory}
        startGame={startGame}
        resumeGame={resumeGame}
        backToMain={backToMain}
        backToSub={backToSub}
        handleExitToTitle={handleExitToTitle}
        setBattleSetup={setBattleSetup}
        // 🌟 状態を子コンポーネントに渡す
        menuViewMode={menuViewMode}
        setMenuViewMode={setMenuViewMode}
        summaryStep={summaryStep}
        setSummaryStep={setSummaryStep}
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
        selectedArticle={selectedArticle}
        setSelectedArticle={setSelectedArticle}
      />
    );
  }

  if (gameState === 'result') {
    return (
      <ResultScreen
        isMultiplayer={isMultiplayer}
        playersData={playersData}
        myPeerId={myPeerId}
        battleMode={battleConfig?.mode || 'race'}
        score={score}
        activeCategory={activeCategory}
        selectedLevel={selectedLevel}
        correctCount={correctCount}
        firstTryCount={firstTryCount}
        wrongAttempts={wrongAttempts}
        categoryStats={categoryStats}
        totalCount={filteredProblems?.length || 0}
        onBackToLobby={() => { returnToLobby(); setAppScreen('lobby'); }}
        onBackToLevelSelect={() => {
          if (activeCategory?.categoryId === 'grammar_mix') { backToMain(); setMenuViewMode('mix'); }
          else backToLevelSelect();
        }}
        onBackToHome={() => { backToMain(); setMenuViewMode('home'); setAppScreen('main'); }}
      />
    );
  }

  return (
    <GameScreen
      gameMode={gameMode}
      addBonusScore={addBonusScore} 
      isMultiplayer={isMultiplayer}
      playersData={playersData}
      myPeerId={myPeerId}
      battleMode={battleConfig?.mode || 'race'}
      latestCheer={latestCheer}
      onCheer={sendCheer}
      activeCategory={activeCategory}
      selectedLevel={selectedLevel}
      currentProblemIdx={currentProblemIdx}
      filteredProblems={filteredProblems}
      activeProblem={activeProblem}
      score={score}
      combo={combo}
      selectedIndices={selectedIndices}
      feedbackState={feedbackState}
      lastBonus={lastBonus}
      mainContainerRef={mainContainerRef}
      handlePointerDown={handlePointerDown}
      handlePointerMove={handlePointerMove}
      handlePointerUp={handlePointerUp}
      submitAnswer={submitAnswer}
      onExit={() => {
        if (isMultiplayer) { returnToLobby(); setAppScreen('lobby'); }
        else if (activeCategory?.categoryId === 'grammar_mix') { backToMain(); setMenuViewMode('mix'); }
        else backToLevelSelect();
      }}
      onRetryTrace={resetForRetry}
    />
  );
}