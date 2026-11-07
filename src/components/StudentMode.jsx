"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useTrace } from '../hooks/useTrace';
import { playCorrectChime } from '../lib/traceAudio';
import { useMultiplayer } from '../hooks/useMultiplayer';

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
    score, combo, correctCount, firstTryCount, wrongAttempts, selectedIndices, feedbackState, mainContainerRef, lastBonus,
    selectedLevel, filteredProblems, setGameState,
    selectMainCategory, selectSubCategory, startGame, resumeGame, 
    backToMain, backToSub, backToLevelSelect,
    handlePointerDown, handlePointerMove, handlePointerUp, submitAnswer, nextProblem, resetForRetry,
    addBonusScore
  } = useTrace(categories);

  const {
    isMultiplayer, isHost, roomId, connectionStatus, errorMessage,
    playersData, myPeerId, battleConfig,
    createRoom, joinRoom, syncMyScore, startBattle, exitMultiplayer
  } = useMultiplayer();

  const [appScreen, setAppScreen] = useState('main'); 
  const [joinPin, setJoinPin] = useState('');
  const [battleSetup, setBattleSetup] = useState(null);
  const [pendingBattle, setPendingBattle] = useState(null);

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

  useEffect(() => {
    if (feedbackState === 'correct') playCorrectChime();
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
  };

  if (showOpening) return <OpeningSplash onEnter={dismissOpening} />;

  if (appScreen === 'title') {
    return (
      <TitleScreen 
         onSinglePlayer={() => setAppScreen('main')}
        onCreateRoom={() => createRoom()}
        joinPin={joinPin}
        setJoinPin={setJoinPin}
        onJoinRoom={(pin) => joinRoom(pin)}
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
            startGame(battleSetup.level, battleSetup.questionCount || 10, battleSetup.subCategory);
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
        score={score}
        activeCategory={activeCategory}
        selectedLevel={selectedLevel}
        correctCount={correctCount}
        firstTryCount={firstTryCount}
        wrongAttempts={wrongAttempts}
        totalCount={filteredProblems?.length || 0}
        onBackToLobby={() => setAppScreen('lobby')}
        onBackToLevelSelect={backToLevelSelect}
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
      onExit={() => { if(isMultiplayer) setAppScreen('lobby'); else backToLevelSelect(); }}
      onRetryTrace={resetForRetry}
    />
  );
}