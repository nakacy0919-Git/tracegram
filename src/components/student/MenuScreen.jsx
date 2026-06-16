import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Layers } from 'lucide-react';

const SUB_MAPPING = {
  'BASIC': ['basic_find_verb', 'basic_remove_m', 'basic_5patterns'],
  'SUBJECT': ['subj_prep', 'subj_verbal', 'subj_clause', 'subj_it', 'subj_inversion'],
  'VERB': ['verb_transitive', 'verb_tense', 'verb_passive', 'verb_phrasal'],
  'OBJECT': ['obj_svoo', 'obj_verbal', 'obj_clause', 'obj_it'],
  'COMPLEMENT': ['comp_svc', 'comp_svoc', 'comp_causative', 'comp_clause'],
  'MODIFIER': ['mod_adj', 'mod_adv', 'mod_participle']
};

const GRAMMAR_CATEGORIES = [
  { id: "infinitive", title: "不定詞", desc: "to＋動詞の原形が作るカタマリ", bg: "bg-[#8bbff5]", text: "text-[#1d4ed8]" },
  { id: "gerund", title: "動名詞", desc: "動詞ingが作る名詞のカタマリ", bg: "bg-[#7ee2b8]", text: "text-[#065f46]" },
  { id: "present_participle", title: "現在分詞", desc: "動詞ingで「〜している」様子", bg: "bg-[#5eead4]", text: "text-[#134e4a]" },
  { id: "past_participle", title: "過去分詞", desc: "「〜された」状態や様子", bg: "bg-[#fbbf24]", text: "text-[#78350f]" },
  { id: "relative_pronoun", title: "関係代名詞", desc: "名詞を後ろから長く説明する", bg: "bg-[#d8b4f8]", text: "text-[#581c87]" },
  { id: "noun_clause", title: "名詞節", desc: "thatや疑問詞の名詞カタマリ", bg: "bg-[#fbb6d6]", text: "text-[#9d174d]" },
  { id: "causative_verb", title: "使役動詞", desc: "make / let / have の使い方", bg: "bg-[#fca5a5]", text: "text-[#7f1d1d]" },
  { id: "formal_it", title: "形式主語・目的語", desc: "Itを仮のSやOに置く構文", bg: "bg-[#a5b4fc]", text: "text-[#312e81]" }
];

export default function MenuScreen({
  gameState, availableCategories, activeMain, activeCategory, isMultiplayer, isHost,
  setAppScreen, selectMainCategory, selectSubCategory, startGame,
  backToMain, backToSub, handleExitToTitle, setBattleSetup
}) {
  
  const [viewMode, setViewMode] = useState('element'); 

  const hasAnyProblems = (mainId) => {
    return availableCategories.some(cat => 
      SUB_MAPPING[mainId].includes(cat.categoryId) && cat.problems && cat.problems.length > 0
    );
  };

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

  const handleGrammarSelect = (grammarId, grammarTitle, grammarDesc) => {
    let allFilteredProblems = [];
    availableCategories.forEach(cat => {
      if (cat.problems) {
        const matchingProblems = cat.problems.filter(p => p.grammarPoints && p.grammarPoints.includes(grammarId));
        allFilteredProblems = [...allFilteredProblems, ...matchingProblems];
      }
    });

    const pseudoCategory = {
      categoryId: `grammar_${grammarId}`,
      title: `【文法特訓】${grammarTitle}`,
      description: grammarDesc,
      problems: allFilteredProblems
    };

    selectSubCategory(pseudoCategory);
  };

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
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative w-full">
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
          <BackButton onClick={handleExitToTitle} text="タイトルへ戻る" />
        </div>
        
        <div className="max-w-5xl w-full mt-16 md:mt-10 flex flex-col items-center">
          
          <div className="flex bg-slate-200/50 p-1.5 rounded-full mb-10 shadow-inner max-w-full overflow-x-auto hide-scrollbar">
            <button 
              onClick={() => setViewMode('element')}
              className={`flex items-center gap-2 px-6 md:px-8 py-3 rounded-full font-black text-sm md:text-lg transition-all whitespace-nowrap ${viewMode === 'element' ? 'bg-white text-cyan-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <Layers size={22} /> 文の要素（SVO）から選ぶ
            </button>
            <button 
              onClick={() => setViewMode('grammar')}
              className={`flex items-center gap-2 px-6 md:px-8 py-3 rounded-full font-black text-sm md:text-lg transition-all whitespace-nowrap ${viewMode === 'grammar' ? 'bg-white text-purple-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <BookOpen size={22} /> 文法項目から選ぶ
            </button>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === 'element' ? (
              <motion.div key="element" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="w-full">
                <h2 className="text-2xl md:text-3xl font-black text-slate-700 mb-8 text-center drop-shadow-sm">鍛えたい「文の要素」を選んでください</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {MAIN_CATEGORIES.map((cat) => {
                    const isAvailable = hasAnyProblems(cat.id);
                    return (
                      <motion.div key={cat.id} whileHover={isAvailable ? { scale: 1.03 } : {}} onClick={() => isAvailable && selectMainCategory(cat.id)} className={`relative p-1.5 rounded-[32px] shadow-md transition-all ${isAvailable ? 'cursor-pointer ' + cat.bg : 'cursor-not-allowed bg-slate-300 opacity-60'}`}>
                        <div className="border-4 border-white border-dashed rounded-[26px] py-6 px-4 h-full flex flex-col items-center justify-between bg-white/10 min-h-[160px]">
                          {/* 中央の大きなテキスト */}
                          <div className="flex-1 flex items-center justify-center">
                            <h3 className={`font-black text-white text-center drop-shadow-md ${cat.id.length >= 8 ? 'text-2xl' : 'text-4xl'}`}>{cat.id}</h3>
                          </div>
                          {/* 🌟 魔法のラベル：1行なら中央、2行なら左詰めになる */}
                          <div className="w-full text-center mt-auto pt-3">
                            <span className={`inline-block text-left text-sm md:text-base font-black bg-white/60 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-sm ${isAvailable ? cat.text : 'text-slate-700'} leading-snug tracking-tighter max-w-full break-words`}>
                              {cat.title}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div key="grammar" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full">
                <h2 className="text-2xl md:text-3xl font-black text-slate-700 mb-8 text-center drop-shadow-sm">特訓したい「文法項目」を選んでください</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {GRAMMAR_CATEGORIES.map((gram) => (
                    <motion.div 
                      key={gram.id} 
                      whileHover={{ scale: 1.03 }} 
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleGrammarSelect(gram.id, gram.title, gram.desc)} 
                      className={`relative p-1.5 rounded-[32px] shadow-md transition-all cursor-pointer ${gram.bg}`}
                    >
                      <div className="border-4 border-white border-dashed rounded-[26px] py-6 px-3 h-full flex flex-col items-center justify-between bg-white/10 min-h-[140px]">
                        {/* 中央の大きなテキスト */}
                        <div className="flex-1 flex items-center justify-center">
                          <h3 className="font-black text-white text-2xl lg:text-3xl text-center drop-shadow-md">{gram.title}</h3>
                        </div>
                        {/* 🌟 魔法のラベル：1行なら中央、2行なら左詰めになる */}
                        <div className="w-full text-center mt-auto pt-3">
                          <span className={`inline-block text-left text-xs md:text-sm font-black bg-white/60 backdrop-blur-sm px-3 py-2 rounded-xl shadow-sm ${gram.text} leading-tight tracking-tighter max-w-full break-words`}>
                            {gram.desc}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  if (gameState === 'sub_select') {
    const subCategories = availableCategories.filter(cat => SUB_MAPPING[activeMain].includes(cat.categoryId) && cat.problems?.length > 0);
    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative w-full">
        <div className="max-w-4xl w-full">
          <div className="mb-8">
            <BackButton onClick={backToMain} text="メイン選択へ戻る" />
          </div>
          <div className="flex flex-col gap-6">
            {subCategories.map((sub) => (
              <motion.div key={sub.categoryId} whileHover={{ scale: 1.02 }} onClick={() => selectSubCategory(sub)} className="p-6 bg-white rounded-[24px] cursor-pointer shadow-md flex justify-between items-center border-2 border-slate-100 hover:border-cyan-300 transition-colors">
                <div>
                  <h3 className="text-2xl font-black text-slate-700 mb-1">{sub.title}</h3>
                  <p className="text-sm font-bold text-slate-500">{sub.description}</p>
                </div>
                <span className="bg-cyan-500 text-white px-6 py-3 rounded-full font-black text-sm shadow-sm hover:bg-cyan-400">選ぶ</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'level_select') {
    const levels = [{ num: 1, name: "Level 1 (初級)", bg: "bg-[#7ee2b8]", color: "text-[#065f46]"}, { num: 2, name: "Level 2 (中級)", bg: "bg-[#fbbf24]", color: "text-[#78350f]"}, { num: 3, name: "Level 3 (上級)", bg: "bg-[#fbb6d6]", color: "text-[#9d174d]"}];
    const isGrammarMode = activeCategory.title.includes('【文法特訓】');

    return (
      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto z-10 relative w-full">
        <div className="max-w-4xl w-full">
          <div className="mb-8">
            <BackButton onClick={isGrammarMode ? backToMain : backToSub} text={isGrammarMode ? "文法選択へ戻る" : "カテゴリ選択へ戻る"} />
          </div>
          
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black text-slate-700 mb-3 drop-shadow-sm">{activeCategory.title}</h2>
            {isGrammarMode && (
               <p className="text-lg font-bold text-purple-600 bg-purple-100 inline-block px-4 py-1 rounded-full border border-purple-200">
                 全カテゴリから抽出された特別メニューです
               </p>
            )}
          </div>

          <div className="flex flex-col gap-6">
            {levels.map((lvl) => {
              const levelKey = lvl.num === 1 ? '-b-' : lvl.num === 2 ? '-i-' : '-a-';
              const hasProblems = activeCategory.problems.some(p => p.id.includes(levelKey));

              return (
                <motion.div 
                  key={lvl.num} 
                  whileHover={hasProblems ? { scale: 1.02 } : {}} 
                  className={`p-6 md:p-8 rounded-[32px] shadow-md border-4 border-white flex justify-between items-center transition-all ${hasProblems ? lvl.bg : 'bg-slate-200 opacity-60'}`}
                >
                  <div>
                    <h3 className={`text-3xl font-black ${hasProblems ? lvl.color : 'text-slate-500'} drop-shadow-sm`}>{lvl.name}</h3>
                  </div>
                  
                  {hasProblems ? (
                    <button onClick={(e) => {
                        e.stopPropagation();
                        if (isMultiplayer && isHost) { setBattleSetup({ mainId: activeMain, subCategory: activeCategory, level: lvl.num }); setAppScreen('lobby'); } 
                        else { startGame(lvl.num); }
                      }} 
                      className="bg-white/95 text-slate-800 px-8 py-4 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-transform shadow-lg border border-slate-100 flex items-center gap-2"
                    >
                      {isMultiplayer && isHost ? "👑 待機ルームを開く" : "START 🚀"}
                    </button>
                  ) : (
                    <span className="bg-slate-300 text-slate-500 px-6 py-3 rounded-full font-black text-lg">
                      該当問題なし
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
}