"use client";
import React, { useState, useEffect } from 'react';
import StudentMode from '../components/StudentMode';
import TeacherMode from '../components/TeacherMode';
import { PROBLEM_SETS, getProblemLevel } from '../data/mockData';
// 🛠️ 変更点: lucide-react から Settings（ギア）と Users（生徒）アイコンをインポート
import { ArrowLeft } from 'lucide-react'; 

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
    <div className="tg-app-shell text-[#2b332e] relative tg-workspace">
      <main className="tg-app-main">
        {mode === 'student'
          ? <StudentMode categories={categories} onTeacherOpen={() => setMode('teacher')} />
          : <TeacherMode addCustomProblem={addCustomProblem} />}
      </main>
      {mode === 'teacher' && (
        <button type="button" onClick={() => setMode('student')}
          className="fixed top-3 right-3 z-[100] tg-outline shadow-sm px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
          <ArrowLeft size={17}/> 学習画面へ
        </button>
      )}
    </div>
  );
}
