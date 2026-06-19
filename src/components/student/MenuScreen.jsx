import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Layers, BarChart3, AlertTriangle, CheckCircle2, TrendingUp, Award, HelpCircle, Bug, Crosshair, FileText, Sparkles, ChevronRight, Leaf, Scroll, Cpu, Users, Globe, Brain, Landmark, Palette, PenTool, GraduationCap, Scale, HeartPulse, Rocket, Heart, HeartHandshake } from 'lucide-react';

// 🌟 長文データのインポート
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

const GENRE_LIST = [
  { id: "nature", label: "L1", title: "自然", icon: <Leaf size={24} />, fromColor: "from-emerald-400 to-teal-500", border: "border-emerald-200", bgLight: "bg-emerald-50" },
  { id: "history", label: "L2", title: "歴史", icon: <Scroll size={24} />, fromColor: "from-amber-500 to-orange-600", border: "border-amber-200", bgLight: "bg-amber-50" },
  { id: "science", label: "L3", title: "科学技術", icon: <Cpu size={24} />, fromColor: "from-cyan-400 to-blue-500", border: "border-cyan-200", bgLight: "bg-cyan-50" },
  { id: "relations", label: "L4", title: "人間関係", icon: <Users size={24} />, fromColor: "from-blue-500 to-indigo-600", border: "border-blue-200", bgLight: "bg-blue-50" },
  { id: "international", label: "L5", title: "国際社会", icon: <Globe size={24} />, fromColor: "from-purple-500 to-indigo-700", border: "border-purple-200", bgLight: "bg-purple-50" },
  { id: "philosophy", label: "L6", title: "心理・哲学", icon: <Brain size={24} />, fromColor: "from-rose-400 to-pink-600", border: "border-rose-200", bgLight: "bg-rose-50" },
  { id: "economics", label: "L7", title: "経済・ビジネス", icon: <Landmark size={24} />, fromColor: "from-amber-400 to-yellow-600", border: "border-yellow-200", bgLight: "bg-yellow-50" },
  { id: "culture", label: "L8", title: "芸術・文化", icon: <Palette size={24} />, fromColor: "from-orange-400 to-amber-500", border: "border-orange-200", bgLight: "bg-orange-50" },
  { id: "literature", label: "L9", title: "文学・言語", icon: <PenTool size={24} />, fromColor: "from-sky-400 to-blue-500", border: "border-sky-200", bgLight: "bg-sky-50" },
  { id: "education", label: "L10", title: "教育・学習", icon: <GraduationCap size={24} />, fromColor: "from-indigo-400 to-slate-600", border: "border-indigo-200", bgLight: "bg-indigo-50" },
  { id: "politics", label: "L11", title: "法律・政治", icon: <Scale size={24} />, fromColor: "from-stone-500 to-neutral-700", border: "border-stone-200", bgLight: "bg-stone-50" },
  { id: "medicine", label: "L12", title: "医療・健康", icon: <HeartPulse size={24} />, fromColor: "from-teal-400 to-cyan-500", border: "border-teal-200", bgLight: "bg-teal-50" },
  { id: "space", label: "L13", title: "宇宙・未来", icon: <Rocket size={24} />, fromColor: "from-violet-500 to-purple-600", border: "border-violet-200", bgLight: "bg-violet-50" },
  { id: "marriage", label: "L14", title: "婚姻・交友", icon: <Heart size={24} />, fromColor: "from-pink-400 to-fuchsia-500", border: "border-pink-200", bgLight: "bg-pink-50" },
  // 🌟 修正：一番最後のL15の icon を <HeartHandshake /> に変更しました
  { id: "ethics", label: "L15", title: "倫理・道徳", icon: <HeartHandshake size={24} />, fromColor: "from-purple-600 to-rose-700", border: "border-purple-300", bgLight: "bg-purple-50" }
];

const ARTICLES_MASTER = [
  {
    id: "fast_fashion",
    title: "ファストファッションの光と影",
    englishTitle: "The Hidden Impact of Fast Fashion",
    desc: "安くてオシャレな服の裏側に隠された、地球環境への代償と労働問題に迫る。",
    genres: ["nature", "economics", "ethics"], 
    levels: [
      { num: 1, name: "Level 1 (A2 - 初級)", data: fast_fashion_L1 },
      { num: 2, name: "Level 2 (B1 - 中級)", data: fast_fashion_L2 },
      { num: 3, name: "Level 3 (B2 - 上級)", data: fast_fashion_L3 },
      { num: 4, name: "Level 4 (C1 - 最上級)", data: fast_fashion_L4 }
    ]
  }
];

export default function MenuScreen({
  gameMode, setGameMode, 
  setActiveSummary, 
  gameState, availableCategories, activeMain, activeCategory, isMultiplayer, isHost,
  setAppScreen, selectMainCategory, selectSubCategory, startGame,
  backToMain, backToSub, handleExitToTitle, setBattleSetup,
  menuViewMode, setMenuViewMode,
  summaryStep, setSummaryStep,
  selectedGenreId, setSelectedGenreId,
  selectedArticle, setSelectedArticle
}) {
  
  const [logs, setLogs] = useState([]);
  const [tempCount, setTempCount] = useState(10);

  useEffect(() => {
    const savedLogs = localStorage.getItem('tracegram_learning_logs');
    if (savedLogs) {
      try { setLogs(JSON.parse(savedLogs)); } catch (e) { console.error(e); }
    }
  }, []);

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
    const weaknesses = [...stats].filter(cat => cat.total > 0).sort((a, b) => a.accuracy - b.accuracy).slice(0, 3);
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
      className="flex items-center gap-2 bg-white shadow-sm border-2 border-slate-200 text-slate-500 hover:text-cyan-600 hover:border-cyan-300 px-5 py-2 rounded-full font-black text-xs md:text-sm transition-all z-20"
    >
      <ArrowLeft size={16} />
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

  const handleSummaryBack = () => {
    if (summaryStep === 'levels') {
      setSummaryStep('articles');
    } else if (summaryStep === 'articles') {
      setSummaryStep('genres');
    }
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
      <div className="flex-1 flex flex-col items-center p-4 md:p-10 overflow-y-auto z-10 relative w-full bg-slate-50/50">
        
        <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
          {menuViewMode === 'summary' && summaryStep !== 'genres' ? (
            <BackButton onClick={handleSummaryBack} text="一つ前の画面に戻る" />
          ) : (
            <BackButton onClick={handleExitToTitle} text="タイトルへ戻る" />
          )}
        </div>
        
        <div className="max-w-6xl w-full mt-16 md:mt-12 flex flex-col items-center">
          
          <div className="flex bg-slate-200/60 p-1.5 rounded-full mb-8 shadow-inner max-w-full overflow-x-auto hide-scrollbar border border-slate-300/40">
            <button 
              onClick={() => setMenuViewMode('element')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-sm md:text-base transition-all whitespace-nowrap ${menuViewMode === 'element' ? 'bg-white text-cyan-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <Layers size={18} /> 文の要素（SVO）
            </button>
            <button 
              onClick={() => setMenuViewMode('grammar')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-sm md:text-base transition-all whitespace-nowrap ${menuViewMode === 'grammar' ? 'bg-white text-purple-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <BookOpen size={18} /> 文法項目別
            </button>
            <button 
              onClick={() => setMenuViewMode('summary')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-sm md:text-base transition-all whitespace-nowrap ${menuViewMode === 'summary' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <FileText size={18} /> 📖 長文・要約トレース
            </button>
          </div>

          <AnimatePresence mode="wait">
            
            {menuViewMode === 'element' ? (
              <motion.div key="element" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="w-full flex flex-col gap-8">
                
                {logs.length > 0 && (
                  <div className="w-full bg-white rounded-3xl p-5 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                    <div className="lg:border-r border-slate-100 lg:pr-6">
                      <div className="flex items-center gap-2 text-slate-500 text-xs font-black mb-1"><BarChart3 size={16} className="text-cyan-500" /> 構造理解レコード概要</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black tracking-tight text-slate-800">{overallAccuracy}%</span>
                        <span className="text-xs font-bold text-slate-400">トータル正解率 ({totalQuestions}語分析)</span>
                      </div>
                    </div>
                    <div className="col-span-2 bg-rose-50/60 border border-rose-100 rounded-2xl p-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-2.5">
                        <AlertTriangle size={18} className="text-rose-500 flex-shrink-0 mt-0.5 animate-pulse" />
                        <div>
                          <h4 className="text-rose-800 font-black text-sm">現在の強化指定カテゴリ</h4>
                          <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {weaknesses.map((w, i) => (
                              <span key={i} className="text-[11px] bg-white border border-rose-200 rounded-lg px-2 py-0.5 font-black text-rose-700 shadow-2xs">
                                {w.title} ({w.accuracy}%)
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-400 font-medium md:max-w-[200px] leading-snug">
                        苦手な構文を重点的になぞることで、英語脳の回路が最速で強化されます。
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-700 mb-6 text-center">特訓したい「文の要素」を選択してください</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MAIN_CATEGORIES.map((cat) => {
                      const isAvailable = hasAnyProblems(cat.id);
                      return (
                        <motion.div key={cat.id} whileHover={isAvailable ? { scale: 1.02, y: -2 } : {}} onClick={() => isAvailable && selectMainCategory(cat.id)} className={`relative p-1 rounded-[28px] shadow-sm transition-all ${isAvailable ? 'cursor-pointer ' + cat.bg : 'cursor-not-allowed bg-slate-200 opacity-50'}`}>
                          {/* 🌟 透明なFragmentで包んでVS Codeの赤線を消去 */}
                          <>
                            <div className="border-2 border-white border-dashed rounded-[24px] py-6 px-4 h-full flex flex-col items-center justify-between bg-white/10 min-h-[140px]">
                              <h3 className="font-black text-white text-center drop-shadow-md text-3xl">{cat.id}</h3>
                              <span className={`inline-block text-xs md:text-sm font-black bg-white/70 backdrop-blur-sm px-4 py-2 rounded-xl mt-4 ${isAvailable ? cat.text : 'text-slate-500'} shadow-2xs w-full text-center truncate`}>
                                {cat.title}
                              </span>
                            </div>
                          </>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ) : menuViewMode === 'grammar' ? (
              <motion.div key="grammar" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="w-full">
                <h2 className="text-xl md:text-2xl font-black text-slate-700 mb-6 text-center">特訓したい「文法項目」を選択してください</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {GRAMMAR_CATEGORIES.map((gram) => (
                    <motion.div key={gram.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => handleGrammarSelect(gram.id, gram.title, gram.desc)} className={`relative p-1 rounded-[24px] shadow-sm transition-all cursor-pointer ${gram.bg}`}>
                      {/* 🌟 透明なFragmentで包んでVS Codeの赤線を消去 */}
                      <>
                        <div className="border-2 border-white border-dashed rounded-[20px] py-5 px-3 h-full flex flex-col items-center justify-between bg-white/10 min-h-[120px]">
                          <h3 className="font-black text-white text-lg md:text-xl text-center drop-shadow-md">{gram.title}</h3>
                          <span className={`inline-block text-[11px] font-black bg-white/70 backdrop-blur-sm px-2 py-1.5 rounded-lg ${gram.text} w-full text-center mt-3 truncate`}>
                            {gram.desc}
                          </span>
                        </div>
                      </>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : menuViewMode === 'summary' ? (
              <motion.div key="summary" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="w-full">
                
                {summaryStep === 'genres' && (
                  <div>
                    <div className="text-center mb-8">
                      <h2 className="text-xl md:text-2xl font-black text-slate-700">長文読解ジャンル選択</h2>
                      <p className="text-slate-400 font-bold text-xs mt-1">興味のあるアカデミック・トピックを選んで英語の長文に挑戦しよう！</p>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {GENRE_LIST.map((g) => {
                        const availableCount = ARTICLES_MASTER.filter(a => a.genres.includes(g.id)).length;
                        
                        return (
                          <motion.button
                            key={g.id}
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setSelectedGenreId(g.id);
                              setSummaryStep('articles');
                            }}
                            className={`bg-white rounded-2xl p-4 text-left border-2 ${g.border} shadow-sm flex flex-col justify-between items-start cursor-pointer transition-all h-[130px] group relative overflow-hidden`}
                          >
                            {/* 🌟 透明なFragmentで包んでVS Codeの赤線を消去 */}
                            <>
                              <div className="flex justify-between items-center w-full">
                                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase bg-slate-100 px-2 py-0.5 rounded-md">
                                  {g.label}
                                </span>
                                {availableCount > 0 && (
                                  <span className="text-[10px] bg-emerald-100 text-emerald-700 font-black px-1.5 py-0.5 rounded-md">
                                    {availableCount} 記事
                                  </span>
                                )}
                              </div>
                              
                              <div className="mt-auto w-full">
                                <div className={`p-2 rounded-xl bg-gradient-to-br ${g.fromColor} text-white mb-2 w-max shadow-sm group-hover:scale-110 transition-transform`}>
                                  {g.icon}
                                </div>
                                <h3 className="text-sm font-black text-slate-700 truncate w-full group-hover:text-indigo-600 transition-colors">
                                  {g.title}
                                </h3>
                              </div>
                            </>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {summaryStep === 'articles' && (
                  <div className="w-full max-w-3xl mx-auto">
                    {(() => {
                      const genreMeta = GENRE_LIST.find(g => g.id === selectedGenreId);
                      const matchedArticles = ARTICLES_MASTER.filter(a => a.genres.includes(selectedGenreId));

                      return (
                        <div>
                          <div className="flex items-center gap-3 mb-6 bg-white border border-slate-200 p-4 rounded-2xl shadow-2xs">
                            <div className={`p-2 rounded-xl bg-gradient-to-br ${genreMeta?.fromColor} text-white`}>
                              {genreMeta?.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-black text-slate-700">ジャンル: {genreMeta?.title} の記事一覧</h3>
                              <p className="text-xs text-slate-400 font-bold">読解・構造・要約・語彙を鍛えるための最適な長文</p>
                            </div>
                          </div>

                          {matchedArticles.length === 0 ? (
                            <div className="bg-white rounded-3xl p-10 border-2 border-dashed border-slate-200 text-center text-slate-400">
                              <HelpCircle size={44} className="mx-auto mb-2 opacity-50" />
                              <p className="font-black">記事がまだありません</p>
                              <p className="text-xs mt-1">このジャンルの長文は今後のアップデートで追加されます！</p>
                            </div>
                          ) : (
                            <div className="flex flex-col gap-4">
                              {matchedArticles.map((art) => (
                                <motion.div
                                  key={art.id}
                                  whileHover={{ scale: 1.01, x: 2 }}
                                  onClick={() => {
                                    setSelectedArticle(art);
                                    setSummaryStep('levels');
                                  }}
                                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-indigo-300 cursor-pointer flex justify-between items-center group transition-all"
                                >
                                  {/* 🌟 透明なFragmentで包んでVS Codeの赤線を消去 */}
                                  <>
                                    <div className="min-w-0 pr-4">
                                      <span className="text-[11px] font-black bg-emerald-50 text-emerald-600 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                                        Premium Article
                                      </span>
                                      <h4 className="text-lg font-black text-slate-800 mt-2 mb-1 group-hover:text-indigo-600 transition-colors">
                                        {art.title}
                                      </h4>
                                      <p className="text-xs text-slate-400 font-medium italic mb-2">{art.englishTitle}</p>
                                      <p className="text-xs text-slate-500 font-bold line-clamp-2">{art.desc}</p>
                                    </div>
                                    <ChevronRight size={20} className="text-slate-400 group-hover:text-indigo-500 transform group-hover:translate-x-1 transition-all flex-shrink-0" />
                                  </>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                )}

                {summaryStep === 'levels' && selectedArticle && (
                  <div className="w-full max-w-2xl mx-auto">
                    <div className="text-center mb-6">
                      <span className="text-[11px] font-black tracking-widest text-slate-400 uppercase bg-slate-200 px-3 py-1 rounded-full">難易度レベル選択</span>
                      <h3 className="text-xl md:text-2xl font-black text-slate-800 mt-2">{selectedArticle.title}</h3>
                      <p className="text-slate-400 font-bold text-xs mt-1">現在の実力に合ったレベルを選択して4構造特訓を開始しよう！</p>
                    </div>

                    <div className="flex flex-col gap-4">
                      {selectedArticle.levels.map((lvl) => {
                        const lvlMeta = 
                          lvl.num === 1 ? { bg: "bg-emerald-50/60 hover:bg-emerald-50 border-emerald-200", text: "text-emerald-700", label: "A2 Basic" } :
                          lvl.num === 2 ? { bg: "bg-cyan-50/60 hover:bg-cyan-50 border-cyan-200", text: "text-cyan-700", label: "B1 Intermediate" } :
                          lvl.num === 3 ? { bg: "bg-indigo-50/60 hover:bg-indigo-50 border-indigo-200", text: "text-indigo-700", label: "B2 Upper-Intermediate" } :
                          { bg: "bg-purple-50/60 hover:bg-purple-50 border-purple-200", text: "text-purple-700", label: "C1 Advanced" };

                        return (
                          <motion.button
                            key={lvl.num}
                            whileHover={{ y: -2, scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            onClick={() => {
                              setActiveSummary(lvl.data);
                              setAppScreen('summary');
                            }}
                            className={`w-full p-5 rounded-2xl border-2 text-left shadow-2xs cursor-pointer transition-all flex items-center justify-between ${lvlMeta.bg}`}
                          >
                            {/* 🌟 透明なFragmentで包んでVS Codeの赤線を消去 */}
                            <>
                              <div>
                                <span className={`text-[10px] font-black px-2 py-0.5 rounded bg-white border ${lvlMeta.text}`}>
                                  {lvlMeta.label}
                                </span>
                                <h4 className="text-base font-black text-slate-700 mt-2">
                                  {lvl.name}
                                </h4>
                                <p className="text-xs text-slate-400 font-bold mt-0.5">
                                  単語数: {lvl.data.wordCount || 150} words / {lvl.data.paragraphs?.length || 4} パラグラフ構成
                                </p>
                              </div>
                              <div className="flex items-center gap-1 text-xs font-black text-indigo-500 bg-white shadow-3xs px-4 py-2 rounded-full border border-slate-100">
                                4モード特訓を開く <Sparkles size={14} className="animate-pulse" />
                              </div>
                            </>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                )}

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
                {/* 🌟 ユーザーの画像で波線が出ていた原因箇所！透明なFragmentで包みました */}
                <>
                  <div>
                    <h3 className="text-2xl font-black text-slate-700 mb-1">{sub.title}</h3>
                    <p className="text-sm font-bold text-slate-500">{sub.description}</p>
                  </div>
                  <span className="bg-cyan-500 text-white px-6 py-3 rounded-full font-black text-sm shadow-sm hover:bg-cyan-400">選ぶ</span>
                </>
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
               <p className="text-lg font-bold text-purple-100 inline-block px-4 py-1 rounded-full border border-purple-200">
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
                  {/* 🌟 透明なFragmentで包んでVS Codeの赤線を消去 */}
                  <>
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
                  </>
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