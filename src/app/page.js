"use client";
import React, { useState } from 'react';
import StudentMode from '../components/StudentMode';
import TeacherMode from '../components/TeacherMode';
import { PROBLEM_SETS } from '../data/mockData';

export default function TraceGramApp() {
  const [mode, setMode] = useState('student');
  // ★ 大元で問題データ（categories）を管理する
  const [categories, setCategories] = useState(PROBLEM_SETS);

  // ★ 先生モードから新しい問題を受け取って追加する関数
  const addCustomProblem = (newProblem) => {
    setCategories(prev => {
      const customIndex = prev.findIndex(c => c.categoryId === "custom");
      
      if (customIndex >= 0) {
        // すでにオリジナルカテゴリがある場合は、そこに問題を追加
        const updatedCategories = [...prev];
        updatedCategories[customIndex] = {
          ...updatedCategories[customIndex],
          problems: [...updatedCategories[customIndex].problems, newProblem]
        };
        return updatedCategories;
      } else {
        // まだ無い場合は「🌟 先生のオリジナル課題」カテゴリを新設
        return [
          ...prev,
          {
            categoryId: "custom",
            title: "🌟 先生のオリジナル課題",
            description: "先生が新しく作成した特別トレーニングです。",
            problems: [newProblem]
          }
        ];
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans select-none">
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center z-10">
        <h1 className="text-2xl font-bold text-cyan-400 tracking-wider">TraceGram</h1>
        <button 
          onClick={() => setMode(mode === 'student' ? 'teacher' : 'student')} 
          className="bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded-lg font-bold shadow-md"
        >
          {mode === 'student' ? '先生モードへ' : '生徒モードへ'}
        </button>
      </header>

      <main className="flex-1 flex flex-col relative overflow-hidden">
        {mode === 'student' ? (
          /* 生徒には最新の問題リストを渡す */
          <StudentMode categories={categories} />
        ) : (
          /* 先生には問題を追加する関数を渡す */
          <TeacherMode addCustomProblem={addCustomProblem} />
        )}
      </main>
    </div>
  );
}