import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const SUB_MAPPING = {
  'BASIC': ['basic_find_verb', 'basic_remove_m', 'basic_5patterns'],
  'SUBJECT': ['subj_prep', 'subj_verbal', 'subj_clause', 'subj_it', 'subj_inversion'],
  'VERB': ['verb_transitive', 'verb_tense', 'verb_passive', 'verb_phrasal'],
  'OBJECT': ['obj_svoo', 'obj_verbal', 'obj_clause', 'obj_it'],
  'COMPLEMENT': ['comp_svc', 'comp_svoc', 'comp_causative', 'comp_clause'],
  'MODIFIER': ['mod_adj', 'mod_adv', 'mod_participle']
};

export default function MenuScreen({
  gameState, availableCategories, activeMain, activeCategory, isMultiplayer, isHost,
  setAppScreen, selectMainCategory, selectSubCategory, startGame,
  backToMain, backToSub, handleExitToTitle, setBattleSetup
}) {
  
  const hasAnyProblems = (mainId) => {
    return availableCategories.some(cat => 
      SUB_MAPPING[mainId].includes(cat.categoryId) && cat.problems && cat.problems.length > 0
    );
  };

  // ▼ 新設：統一された美しく上品な「戻るボタン」パーツ
  const BackButton = ({ onClick, text }) => (
    <motion.button
      whileHover={{ x: -5, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center gap-2 bg-white/90 backdrop-blur-md shadow-sm border-2 border-slate-200 text-slate-500 hover:text-cyan-600 hover:border-cyan-300 px-6 py-2.5 rounded-full font-black text-sm md:text-base transition-all z-20"
    >
      <ArrowLeft size={20} />
      {text}
    </motion.button>
  );

  // --- 3-1. メインカテゴリ選択画面 ---
  if (gameState === 'main_select') {
    const MAIN_CATEGORIES = [
      { id: 'BASIC', title: '基礎マスター', desc: '英語の仕組みをイチから学ぶ', bg: "bg-[#fca5a5]", text: "text-[#7f1d1d]" },
      { id: 'SUBJECT', title: '主語マスター', desc: '文の主役を見つけ出せ！', bg: "bg-[#d8b4f8]", text: "text-[#581c87]" },
      { id: 'VERB', title: '動詞マスター', desc: '文の心臓部を捉えろ！', bg: "bg-[#fbb6d6]", text: "text-[#9d174d]" },
      { id: 'OBJECT', title: '目的語マスター', desc: '動作の対象を見極めろ！', bg: "bg-[#fbbf24]", text: "text-[#78350f]" },
      { id: 'COMPLEMENT', title: '補語マスター', desc: 'SやOのイコール状態を暴け！', bg: "bg-[#7ee2b8]", text: "text-[#065f46]" },
      { id: 'MODIFIER', title: '修飾語マスター', desc: '文を長くする飾りを仕分けろ！', bg: "bg-[#8bbff5]", text: "text-[#1d4ed8]" },
    ];

    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative">
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
          <BackButton onClick={handleExitToTitle} text="タイトルへ戻る" />
        </div>
        <div className="max-w-5xl w-full mt-12 md:mt-8">
          <h2 className="text-3xl font-black text-slate-700 mb-10 text-center">鍛えたい要素を選んでください</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MAIN_CATEGORIES.map((cat) => {
              const isAvailable = hasAnyProblems(cat.id);
              return (
                <motion.div key={cat.id} whileHover={isAvailable ? { scale: 1.03 } : {}} onClick={() => isAvailable && selectMainCategory(cat.id)} className={`relative p-1.5 rounded-[32px] shadow-md transition-all ${isAvailable ? 'cursor-pointer ' + cat.bg : 'cursor-not-allowed bg-slate-300 opacity-60'}`}>
                  <div className="border-4 border-white border-dashed rounded-[26px] py-10 px-6 h-full flex flex-col items-center justify-center text-center">
                    <h3 className={`font-black text-white mb-2 ${cat.id.length >= 8 ? 'text-2xl' : 'text-4xl'}`}>{cat.id}</h3>
                    <p className={`text-lg font-black mb-2 bg-white/40 px-4 py-1 rounded-full ${isAvailable ? cat.text : 'text-slate-700'}`}>{cat.title}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // --- 3-2. サブカテゴリ選択画面 ---
  if (gameState === 'sub_select') {
    const subCategories = availableCategories.filter(cat => SUB_MAPPING[activeMain].includes(cat.categoryId) && cat.problems?.length > 0);
    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative">
        <div className="max-w-4xl w-full">
          <div className="mb-8">
            <BackButton onClick={backToMain} text="メイン選択へ戻る" />
          </div>
          <div className="flex flex-col gap-6">
            {subCategories.map((sub) => (
              <motion.div key={sub.categoryId} whileHover={{ scale: 1.02 }} onClick={() => selectSubCategory(sub)} className="p-6 bg-slate-100 rounded-[24px] cursor-pointer shadow-md flex justify-between items-center border-2 border-white">
                <div>
                  <h3 className="text-2xl font-black text-slate-700 mb-1">{sub.title}</h3>
                  <p className="text-sm font-bold text-slate-500">{sub.description}</p>
                </div>
                <span className="bg-cyan-500 text-white px-5 py-2 rounded-full font-black text-sm">選ぶ</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- 3-3. レベル選択画面 ---
  if (gameState === 'level_select') {
    const levels = [{ num: 1, name: "Level 1 (初級)", bg: "bg-[#7ee2b8]"}, { num: 2, name: "Level 2 (中級)", bg: "bg-[#fbbf24]"}, { num: 3, name: "Level 3 (上級)", bg: "bg-[#fbb6d6]"}];
    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative">
        <div className="max-w-4xl w-full">
          <div className="mb-8">
            <BackButton onClick={backToSub} text="カテゴリ選択へ戻る" />
          </div>
          <h2 className="text-3xl font-black text-slate-700 mb-10 text-center">{activeCategory.title}</h2>
          <div className="flex flex-col gap-6">
            {levels.map((lvl) => (
              <motion.div key={lvl.num} whileHover={{ scale: 1.02 }} className={`p-6 rounded-[24px] shadow-md border-2 border-white flex justify-between items-center ${lvl.bg}`}>
                <h3 className="text-2xl font-black text-white">{lvl.name}</h3>
                <button onClick={(e) => {
                    e.stopPropagation();
                    if (isMultiplayer && isHost) { setBattleSetup({ mainId: activeMain, subCategory: activeCategory, level: lvl.num }); setAppScreen('lobby'); } 
                    else { startGame(lvl.num); }
                  }} 
                  className="bg-white/90 text-slate-800 px-6 py-3 rounded-full font-black text-lg hover:scale-105 active:scale-95 transition-transform shadow-sm"
                >
                  {isMultiplayer && isHost ? "👑 この問題で待機ルームを開く" : "START"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}