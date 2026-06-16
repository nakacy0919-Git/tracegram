"use client";
import React, { useState } from 'react';
import StudentMode from '../components/StudentMode';
import TeacherMode from '../components/TeacherMode';
import { PROBLEM_SETS } from '../data/mockData';

export default function TraceGramApp() {
  // ★変更点：不要になった showSplash ステートを削除しました
  const [mode, setMode] = useState('student');
  const [categories, setCategories] = useState(PROBLEM_SETS);

  const addCustomProblem = (newProblem) => {
    setCategories(prev => {
      const customIndex = prev.findIndex(c => c.categoryId === "custom");
      if (customIndex >= 0) {
        const updatedCategories = [...prev];
        updatedCategories[customIndex] = { ...updatedCategories[customIndex], problems: [...updatedCategories[customIndex].problems, newProblem] };
        return updatedCategories;
      } else {
        return [...prev, { categoryId: "custom", title: "🌟 先生のオリジナル課題", description: "先生が新しく作成した特別トレーニングです。", problems: [newProblem] }];
      }
    });
  };

  return (
    <div className="min-h-screen text-slate-800 flex flex-col font-sans select-none relative overflow-hidden pattern-bg">
      
      {/* ヘッダーエリア */}
      <header className="bg-white/40 backdrop-blur-md border-b border-slate-200/50 px-6 py-4 flex justify-between items-center z-40 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative rounded-full overflow-hidden shadow-sm border border-slate-200 bg-white flex-shrink-0">
            <img src="/tracegramlogo.png" alt="TraceGram Logo" className="object-cover w-full h-full" />
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 tracking-wide">
            TraceGram
          </h1>
        </div>
        
        <button 
          onClick={() => setMode(mode === 'student' ? 'teacher' : 'student')} 
          className="box hover:scale-105 text-slate-600 transition-transform px-5 py-2 font-bold text-sm"
        >
          {mode === 'student' ? '先生用' : '生徒用'}
        </button>
      </header>

      {/* メインエリア */}
      <main className="flex-1 flex flex-col relative z-10 overflow-hidden">
        {mode === 'student' ? (
          <StudentMode categories={categories} />
        ) : (
          <TeacherMode addCustomProblem={addCustomProblem} />
        )}
      </main>
    </div>
  );
}