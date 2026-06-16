"use client";
import React, { useState } from 'react';
import StudentMode from '../components/StudentMode';
import TeacherMode from '../components/TeacherMode';
import { PROBLEM_SETS } from '../data/mockData';
// 🛠️ 変更点: lucide-react から Settings（ギア）と Users（生徒）アイコンをインポート
import { Settings, Users } from 'lucide-react'; 

export default function TraceGramApp() {
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
    <div className="min-h-screen text-slate-800 flex flex-col font-sans select-none bg-slate-50 relative">
      
      {/* 🌟 沒入感維持のため、ヘッダーは削除したままです */}

      {/* メインエリア */}
      <main className="flex-1 flex flex-col">
        {mode === 'student' ? (
          <StudentMode categories={categories} />
        ) : (
          <TeacherMode addCustomProblem={addCustomProblem} />
        )}
      </main>

      {/* ▼ 変更点：モード切り替えボタンのコンテンツを修正し、アイコンをギアマークなどに変更 */}
      <button 
        onClick={() => setMode(mode === 'student' ? 'teacher' : 'student')} 
        className="fixed bottom-6 right-6 z-[99999] bg-white/90 backdrop-blur-sm shadow-lg hover:scale-110 active:scale-95 transition-all text-slate-600 px-6 py-4 rounded-full font-black text-sm border-2 border-slate-200 flex items-center gap-3"
      >
        {mode === 'student' ? (
          /* 🎓 生徒の時は「先生モードへ」のギアアイコン */
          <>
            <Settings size={20} className="text-slate-500" />
            <span>先生モードへ</span>
          </>
        ) : (
          /* 🧑‍🏫 先生の時は「生徒モードへ」のユーザーアイコン */
          <>
            <Users size={20} className="text-slate-500" />
            <span>生徒モードへ</span>
          </>
        )}
      </button>

    </div>
  );
}