import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Layers, BarChart3, AlertTriangle, CheckCircle2, TrendingUp, Award, HelpCircle, Bug, Crosshair, FileText, Beaker } from 'lucide-react';

// 🌟 長文データのインポート（エラー回避のため .js を明記）
import { fast_fashion_L1 } from '../../data/summary/fast_fashion/level1_a2.js';
import { fast_fashion_L2 } from '../../data/summary/fast_fashion/level2_b1.js';
import { fast_fashion_L3 } from '../../data/summary/fast_fashion/level3_b2.js';
import { fast_fashion_L4 } from '../../data/summary/fast_fashion/level4_c1.js';

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
  gameMode, setGameMode, 
  setActiveSummary, 
  gameState, availableCategories, activeMain, activeCategory, isMultiplayer, isHost,
  setAppScreen, selectMainCategory, selectSubCategory, startGame,
  backToMain, backToSub, handleExitToTitle, setBattleSetup
}) {
  
  const [viewMode, setViewMode] = useState('element'); 
  const [logs, setLogs] = useState([]);
  
  // 🌟 問題数を選択・記憶するためのState
  const [tempCount, setTempCount] = useState(10);

  useEffect(() => {
    if (viewMode === 'reflection') {
      const savedLogs = localStorage.getItem('tracegram_learning_logs');
      if (savedLogs) {
        try {
          setLogs(JSON.parse(savedLogs));
        } catch (e) {
          console.error("Failed to parse learning logs", e);
        }
      }
    }
  }, [viewMode]);

  const analyzeWeaknesses = () => {
    if (logs.length === 0) return { stats: [], weaknesses: [], totalQuestions: 0, totalCorrect: 0 };

    const categoryMap = {};
    let totalQuestions = 0;
    let totalCorrect = 0;

    logs.forEach(log => {
      if (!categoryMap[log.categoryTitle]) {
        categoryMap[log.categoryTitle] = { title: log.categoryTitle, correct: 0, total: 0 };
      }
      categoryMap[log.categoryTitle].correct += log.correctCount || 0;
      categoryMap[log.categoryTitle].total += log.totalCount || 0;
      totalQuestions += log.totalCount || 0;
      totalCorrect += log.correctCount || 0;
    });

    const stats = Object.values(categoryMap).map(cat => ({
      ...cat,
      accuracy: Math.round((cat.correct / cat.total) * 100)
    }));

    const weaknesses = [...stats]
      .filter(cat => cat.total > 0)
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 3);

    return { stats, weaknesses, totalQuestions, totalCorrect };
  };

  const { stats, weaknesses, totalQuestions, totalCorrect } = analyzeWeaknesses();
  const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

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

    const SUMMARY_LIST = [fast_fashion_L1, fast_fashion_L2, fast_fashion_L3, fast_fashion_L4];

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
              <Layers size={22} /> 文の要素（SVO）
            </button>
            <button 
              onClick={() => setViewMode('grammar')}
              className={`flex items-center gap-2 px-6 md:px-8 py-3 rounded-full font-black text-sm md:text-lg transition-all whitespace-nowrap ${viewMode === 'grammar' ? 'bg-white text-purple-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <BookOpen size={22} /> 文法項目別
            </button>
            <button 
              onClick={() => setViewMode('reflection')}
              className={`flex items-center gap-2 px-6 md:px-8 py-3 rounded-full font-black text-sm md:text-lg transition-all whitespace-nowrap ${viewMode === 'reflection' ? 'bg-white text-rose-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <BarChart3 size={22} /> 📊 弱点分析レコード
            </button>
            <button 
              onClick={() => setViewMode('summary')}
              className={`flex items-center gap-2 px-6 md:px-8 py-3 rounded-full font-black text-sm md:text-lg transition-all whitespace-nowrap ${viewMode === 'summary' ? 'bg-white text-emerald-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <FileText size={22} /> 📖 長文・要約トレース
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
                          <div className="flex-1 flex items-center justify-center">
                            <h3 className={`font-black text-white text-center drop-shadow-md ${cat.id.length >= 8 ? 'text-2xl' : 'text-4xl'}`}>{cat.id}</h3>
                          </div>
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
            ) : viewMode === 'grammar' ? (
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
                        <div className="flex-1 flex items-center justify-center">
                          <h3 className="font-black text-white text-2xl lg:text-3xl text-center drop-shadow-md">{gram.title}</h3>
                        </div>
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
            ) : viewMode === 'reflection' ? (
              <motion.div key="reflection" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="w-full max-w-4xl">
                <h2 className="text-2xl md:text-3xl font-black text-slate-700 mb-6 text-center drop-shadow-sm">弱点克服のための学習記録・内省レポート</h2>
                
                {logs.length === 0 ? (
                  <div className="bg-white rounded-3xl p-10 border-2 border-slate-100 shadow-md text-center flex flex-col items-center justify-center min-h-[300px]">
                    <HelpCircle size={64} className="text-slate-300 mb-4 animate-bounce" />
                    <h3 className="text-xl font-black text-slate-600 mb-2">まだレコードデータがありません</h3>
                    <p className="text-slate-400 font-bold max-w-md leading-relaxed text-sm">
                      クイズを解いてゲームをクリアすると、自動的にここにスコアや正解率が記録され、あなたの苦手な英語構造を人工知能が自動で分析します！まずは1セクションクリアしてみましょう！
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-6 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl p-5 shadow-md flex flex-col justify-between">
                        <span className="font-black text-xs opacity-75 flex items-center gap-1"><Award size={14}/> 総解答トークン数</span>
                        <div className="text-4xl font-black my-2 tracking-tight">{totalQuestions}<span className="text-sm ml-1">語</span></div>
                        <p className="text-[11px] opacity-90 font-bold">これまでに構造分析に挑んだ英語の単語数です</p>
                      </div>
                      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl p-5 shadow-md flex flex-col justify-between">
                        <span className="font-black text-xs opacity-75 flex items-center gap-1"><CheckCircle2 size={14}/> トータル構造正解率</span>
                        <div className="text-4xl font-black my-2 tracking-tight">{overallAccuracy}<span className="text-xl ml-0.5">%</span></div>
                        <p className="text-[11px] opacity-90 font-bold">全学習範囲におけるなぞり判定の平均精度です</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-2xl p-5 shadow-md flex flex-col justify-between">
                        <span className="font-black text-xs opacity-75 flex items-center gap-1"><TrendingUp size={14}/> 総挑戦セッション数</span>
                        <div className="text-4xl font-black my-2 tracking-tight">{logs.length}<span className="text-sm ml-1">回</span></div>
                        <p className="text-[11px] opacity-90 font-bold">最後まで走り抜いたトレーニングの総回数です</p>
                      </div>
                    </div>

                    {weaknesses.length > 0 && (
                      <div className="bg-rose-50 border-2 border-rose-200 rounded-3xl p-5 shadow-sm">
                        <h3 className="text-rose-700 font-black text-lg flex items-center gap-2 mb-3">
                          <AlertTriangle size={20} className="text-rose-500 animate-pulse" /> 要注意！あなたの弱点トップ分野
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {weaknesses.map((weak, index) => (
                            <div key={index} className="bg-white p-4 rounded-xl border border-rose-100 shadow-sm flex flex-col justify-between">
                              <div>
                                <span className="text-xs bg-rose-100 text-rose-700 font-black px-2 py-0.5 rounded-full">RANK {index + 1}</span>
                                <h4 className="font-black text-slate-700 text-base mt-2">{weak.title}</h4>
                              </div>
                              <div className="text-right text-xl font-black text-rose-500 mt-2 tracking-tight">
                                正解率 {weak.accuracy}%
                              </div>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-rose-600 font-bold mt-3 italic">
                          💡 弱点に指定されたカテゴリは、前置詞の有無、修飾の連鎖、あるいは完了形と受動態の境界などを見失いやすい傾向にあります。メニューから重点的に復習しましょう！
                        </p>
                      </div>
                    )}

                    <div className="bg-white rounded-3xl p-5 md:p-6 border border-slate-100 shadow-md">
                      <h3 className="text-slate-700 font-black text-lg mb-4">全カテゴリの構造理解度チェック</h3>
                      <div className="flex flex-col gap-4">
                        {stats.map((stat, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                            <div className="sm:w-1/3">
                              <h4 className="font-black text-slate-700 text-sm md:text-base">{stat.title}</h4>
                              <p className="text-xs text-slate-400 font-bold">解答総数: {stat.total}語 / 正解: {stat.correct}語</p>
                            </div>
                            <div className="flex-1 flex items-center gap-3 w-full">
                              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${stat.accuracy}%` }}
                                  transition={{ duration: 0.8, ease: "easeOut" }}
                                  className={`h-full rounded-full ${stat.accuracy >= 80 ? 'bg-emerald-400' : stat.accuracy >= 50 ? 'bg-amber-400' : 'bg-rose-400'}`}
                                />
                              </div>
                              <span className={`font-black text-sm md:text-base min-w-[45px] text-right ${stat.accuracy >= 80 ? 'text-emerald-500' : stat.accuracy >= 50 ? 'text-amber-500' : 'text-rose-500'}`}>
                                {stat.accuracy}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </motion.div>
            ) : viewMode === 'summary' ? (
              <motion.div key="summary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="w-full">
                
                <div className="flex flex-col items-center justify-center mb-8">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-700 drop-shadow-sm">長文のコアを掴み、要約力を鍛えよう</h2>
                    <span className="flex items-center gap-1 bg-amber-100 text-amber-700 font-black text-xs px-3 py-1 rounded-full border border-amber-300 shadow-sm animate-pulse">
                      <Beaker size={14} /> 開発中 (BETA)
                    </span>
                  </div>
                  <p className="text-slate-500 font-bold mt-2 text-sm">サンプル問題として試験運用中です。予告なく仕様が変更される場合があります。</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {SUMMARY_LIST.map((summary) => (
                    <motion.div 
                      key={summary.id}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-[24px] shadow-md border-2 border-emerald-100 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-indigo-500 text-white font-black text-xs px-2 py-1 rounded-md">{summary.level}</span>
                          <span className="text-emerald-600 font-bold text-sm">{summary.theme}</span>
                        </div>
                        <h3 className="text-xl font-black text-slate-800 mb-2">{summary.title}</h3>
                        <p className="text-slate-500 text-sm font-bold mb-6">
                          パラグラフごとの論理展開を追いかけ、要約力を高めよう。
                        </p>
                      </div>
                      <button 
                        onClick={() => {
                          setActiveSummary(summary);
                          setAppScreen('summary');
                        }} 
                        className="mt-2 bg-emerald-500 hover:bg-emerald-400 text-white font-black py-4 rounded-xl shadow-sm transition-colors flex justify-center items-center gap-2"
                      >
                        CHALLENGE <FileText size={18} />
                      </button>
                    </motion.div>
                  ))}
                  
                  <div className="bg-slate-100 p-6 rounded-[24px] border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 min-h-[200px]">
                    <p className="font-black">Coming Soon...</p>
                    <p className="text-sm font-bold">新しい長文を追加予定です</p>
                  </div>

                </div>
              </motion.div>
            ) : null}
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
           <div className="bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-sm border border-slate-200 mb-10 flex justify-center mx-auto max-w-lg">
            <button 
              onClick={() => setGameMode('normal')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-black text-sm md:text-base transition-all ${
                gameMode === 'normal' ? 'bg-cyan-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              <Crosshair size={18} /> 通常トレース
            </button>
            <button 
              onClick={() => setGameMode('bug_slash')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-black text-sm md:text-base transition-all ${
                gameMode === 'bug_slash' ? 'bg-rose-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              <Bug size={18} /> バグ・スラッシュ
            </button>
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
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <select 
                        value={tempCount}
                        onChange={(e) => setTempCount(parseInt(e.target.value))}
                        className="bg-white/90 border-2 border-slate-200 rounded-full px-4 py-3 font-black text-slate-600 focus:outline-none focus:border-cyan-400"
                        onClick={(e) => e.stopPropagation()} 
                      >
                        <option value={10}>10問</option>
                        <option value={20}>20問</option>
                        <option value={50}>50問</option>
                      </select>

                      <button onClick={(e) => {
                          e.stopPropagation();
                          if (isMultiplayer && isHost) { 
                            setBattleSetup({ mainId: activeMain, subCategory: activeCategory, level: lvl.num }); 
                            setAppScreen('lobby'); 
                          } 
                          else { 
                            startGame(lvl.num, tempCount); 
                          }
                        }} 
                        className="bg-white/95 text-slate-800 px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-lg md:text-xl hover:scale-105 active:scale-95 transition-transform shadow-lg border border-slate-100 flex items-center gap-2"
                      >
                        {isMultiplayer && isHost ? "👑 待機ルームを開く" : "START 🚀"}
                      </button>
                    </div>
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