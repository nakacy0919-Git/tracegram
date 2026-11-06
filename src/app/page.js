"use client";
import React, { useState, useEffect } from 'react';
import StudentMode from '../components/StudentMode';
import TeacherMode from '../components/TeacherMode';
import { PROBLEM_SETS, getProblemLevel } from '../data/mockData';
// 🛠️ 変更点: lucide-react から Settings（ギア）と Users（生徒）アイコンをインポート
import { Settings, Users } from 'lucide-react'; 

export default function TraceGramApp() {
  const [mode, setMode] = useState('student');
  const [categories, setCategories] = useState(PROBLEM_SETS);

  // 先生の課題は端末内にのみ保存。サーバーへの共有や公開はしない。
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('tracegram_custom_problems') || '[]');
      if (!Array.isArray(saved)) return;
      const valid = saved.slice(-100).filter(p => p &&
        typeof p.id === 'string' && Array.isArray(p.tokens) &&
        p.tokens.length > 0 && p.tokens.length <= 80 &&
        p.tokens.every(t => typeof t === 'string' && t.length <= 120) &&
        Array.isArray(p.targetIndices) &&
        p.targetIndices.every(i => Number.isInteger(i) && i >= 0 && i < p.tokens.length));
      if (valid.length) {
        setCategories(prev => [...prev.filter(c => c.categoryId !== 'custom'), {
          categoryId: 'custom', title: '🌟 先生のオリジナル課題',
          description: 'この端末で作成した特別トレーニングです。', groupId: 'CUSTOM', problems: valid.map(p => ({...p, level: getProblemLevel(p)}))
        }]);
      }
    } catch { /* 不正な保存データは読み込まない */ }
  }, []);

  const addCustomProblem = (newProblem) => {
    try {
      const existing = JSON.parse(localStorage.getItem('tracegram_custom_problems') || '[]');
      const list = Array.isArray(existing) ? existing : [];
      localStorage.setItem('tracegram_custom_problems', JSON.stringify([...list, newProblem].slice(-100)));
    } catch (error) { console.warn('Custom problem save failed', error); }
    setCategories(prev => {
      const customIndex = prev.findIndex(c => c.categoryId === "custom");
      if (customIndex >= 0) {
        const updatedCategories = [...prev];
        updatedCategories[customIndex] = { ...updatedCategories[customIndex], problems: [...updatedCategories[customIndex].problems, {...newProblem, level: 1}].slice(-100) };
        return updatedCategories;
      } else {
        return [...prev, { categoryId: "custom", title: "🌟 先生のオリジナル課題", description: "先生が新しく作成した特別トレーニングです。", groupId: "CUSTOM", problems: [{...newProblem, level: 1}] }];
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
        className="fixed top-3 right-3 z-[100] bg-white/95 backdrop-blur-sm shadow-sm hover:bg-slate-100 active:scale-95 transition-all text-slate-600 px-3 py-2 rounded-full font-bold text-xs border border-slate-200 flex items-center gap-2"
      >
        {mode === 'student' ? (
          /* 🎓 生徒の時は「先生モードへ」のギアアイコン */
          <>
            <Settings size={20} className="text-slate-500" />
            <span>教材作成</span>
          </>
        ) : (
          /* 🧑‍🏫 先生の時は「生徒モードへ」のユーザーアイコン */
          <>
            <Users size={20} className="text-slate-500" />
            <span>学習画面へ</span>
          </>
        )}
      </button>

    </div>
  );
}