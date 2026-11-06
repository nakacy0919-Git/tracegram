"use client";
import React, { useMemo, useEffect, useState } from 'react';
import { BookOpen, BookMarked, Target, Users, Search, ChevronRight, ArrowLeft, Play, Zap, Sparkles, Clock3, GraduationCap, Layers3, Trophy, RotateCcw, Info, CheckCircle2, ListFilter, Keyboard } from 'lucide-react';
import { CATALOG_GROUPS, getProblemLevel } from '../../data/mockData';
import { READING_ARTICLES } from '../../data/readingCatalog';

const STORAGE_LAST = 'tracegram_last_course';
const STORAGE_MISTAKES = 'tracegram_mistakes';
const card = 'rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-lg active:scale-[0.99]';
const groupStyles = {
  BASIC: 'bg-rose-50 text-rose-700',
  SUBJECT: 'bg-violet-50 text-violet-700',
  VERB: 'bg-amber-50 text-amber-800',
  OBJECT: 'bg-blue-50 text-blue-700',
  COMPLEMENT: 'bg-emerald-50 text-emerald-700',
  MODIFIER: 'bg-cyan-50 text-cyan-800',
  CUSTOM: 'bg-teal-50 text-teal-700',
};
const safeRead = (key, fallback) => {
  try { const value = JSON.parse(localStorage.getItem(key) || 'null'); return value ?? fallback; }
  catch { return fallback; }
};
const normalize = (text) => String(text || '').normalize('NFKC').toLowerCase();
const difficulty = (level) => level === 1 ? '初級' : level === 2 ? '中級' : '上級';

function Feature({ icon: Icon, title, caption, theme, onClick, detail }) {
  const colors = {
    grammar: 'bg-cyan-50 text-cyan-700',
    reading: 'bg-indigo-50 text-indigo-700',
    review: 'bg-amber-50 text-amber-800',
    battle: 'bg-rose-50 text-rose-700',
  };
  return (
    <button type="button" onClick={onClick} className={`${card} p-4 md:p-5 text-left flex items-start gap-3 min-h-[128px] w-full`}>
      <span className={`p-3 rounded-2xl flex-shrink-0 ${colors[theme]}`}><Icon size={25} strokeWidth={2.2}/></span>
      <span className="flex-1 min-w-0">
        <span className="block text-lg md:text-xl font-black text-slate-800 mb-1">{title}</span>
        <span className="block text-xs md:text-sm font-medium text-slate-500 leading-relaxed">{caption}</span>
        {detail && <span className="block mt-2 text-xs font-bold text-slate-600">{detail}</span>}
      </span>
      <ChevronRight size={17} className="text-slate-400 mt-3 shrink-0"/>
    </button>
  );
}

export default function MenuScreen({
  gameMode, setGameMode, setActiveSummary,
  gameState, availableCategories, activeCategory, isMultiplayer, isHost,
  setAppScreen, selectSubCategory, startGame, backToMain, setBattleSetup,
  menuViewMode, setMenuViewMode, selectedArticle, setSelectedArticle,
}) {
  const view = ['home', 'grammar', 'reading', 'review'].includes(menuViewMode) ? menuViewMode : 'home';
  const [search, setSearch] = useState('');
  const [group, setGroup] = useState('ALL');
  const [count, setCount] = useState(10);
  const [last, setLast] = useState(null);
  const [mistakes, setMistakes] = useState({});

  useEffect(() => {
    const stored = safeRead(STORAGE_LAST, null);
    if (stored && typeof stored.categoryId === 'string') setLast(stored);
    const items = safeRead(STORAGE_MISTAKES, {});
    setMistakes(items && typeof items === 'object' && !Array.isArray(items) ? items : {});
  }, [gameState]);

  const allCategories = useMemo(() => availableCategories.filter(c =>
    c && Array.isArray(c.problems) && c.problems.length > 0), [availableCategories]);
  const totalQuestions = allCategories.reduce((sum, c) => sum + c.problems.length, 0);
  const groups = CATALOG_GROUPS.filter(g => allCategories.some(c => (c.groupId || 'CUSTOM') === g.id));
  const byId = useMemo(() => new Map(allCategories.map(c => [c.categoryId, c])), [allCategories]);
  const byProblemId = useMemo(() => {
    const result = new Map();
    allCategories.forEach(c => c.problems.forEach(p => { if (p.id) result.set(p.id, p); }));
    return result;
  }, [allCategories]);
  const missedProblems = Object.keys(mistakes).map(id => byProblemId.get(id)).filter(Boolean);
  const recentCategory = last && byId.get(last.categoryId);
  const filteredCourses = allCategories.filter(c => {
    if (group !== 'ALL' && (c.groupId || 'CUSTOM') !== group) return false;
    if (!search.trim()) return true;
    const tags = c.problems.flatMap(p => p.grammarPoints || []).join(' ');
    return normalize([c.title, c.description, c.categoryId, tags].join(' ')).includes(normalize(search.trim()));
  });
  const filteredArticles = READING_ARTICLES.filter(a =>
    normalize([a.title, a.englishTitle, a.description, ...a.topics].join(' ')).includes(normalize(search.trim())));

  const go = (next) => {
    setSearch('');
    setMenuViewMode(next);
    setSelectedArticle(null);
    if (gameState !== 'main_select') backToMain();
  };
  const chooseCourse = (c) => {
    setMenuViewMode('grammar');
    selectSubCategory(c);
  };
  const launch = (level, selectedCount, chosen = activeCategory) => {
    if (!chosen) return;
    if (isMultiplayer && isHost) {
      setBattleSetup({ mainId: chosen.groupId || 'CUSTOM', subCategory: chosen, level, questionCount: selectedCount });
      setAppScreen('lobby');
      return;
    }
    try {
      if (chosen.categoryId !== 'review') localStorage.setItem(STORAGE_LAST, JSON.stringify({
        categoryId: chosen.categoryId, level, count: selectedCount, mode: gameMode, at: Date.now(),
      }));
    } catch {}
    startGame(level, selectedCount, chosen);
  };
  const openReview = () => {
    if (!missedProblems.length) return;
    const category = {
      categoryId: 'review', title: '苦手克服トレース', groupId: 'BASIC',
      description: '前に間違えた文だけを出題します。',
      problems: missedProblems,
    };
    setGameMode('flow');
    launch('all', Math.min(20, missedProblems.length), category);
  };

  const backButton = (onClick, label = '教材一覧に戻る') => (
    <button type="button" onClick={onClick} className="inline-flex items-center gap-2 text-slate-600 font-bold text-sm bg-white border border-slate-200 rounded-full px-4 py-2 hover:bg-slate-100">
      <ArrowLeft size={17} /> {label}
    </button>
  );

  // 選択した教材のレベルとプレイ方法を1ページで選ぶ。
  if (gameState === 'level_select' && activeCategory) {
    const review = activeCategory.categoryId === 'review';
    const levels = review ? ['all'] : [1, 2, 3];
    const number = (lv) => lv === 'all' ? activeCategory.problems.length :
      activeCategory.problems.filter(p => getProblemLevel(p) === lv).length;
    return (
      <div className="flex-1 w-full bg-[#f5f8fc] overflow-y-auto px-4 md:px-8 py-7">
        <div className="max-w-4xl mx-auto space-y-5">
          {backButton(() => { backToMain(); setMenuViewMode(review ? 'review' : 'grammar'); })}
          <div className="rounded-[30px] bg-slate-900 text-white p-6 md:p-9">
            <div className="text-cyan-300 font-black text-xs tracking-widest mb-2">TRACEGRAM / COURSE</div>
            <h1 className="text-2xl md:text-4xl font-black leading-tight">{activeCategory.title}</h1>
            <p className="text-slate-300 text-sm md:text-base mt-3">{activeCategory.description}</p>
            <div className="mt-4 text-sm font-bold text-cyan-200">{activeCategory.problems.length} 問収録</div>
          </div>

          <section className="bg-white p-5 md:p-7 rounded-3xl border border-slate-200 space-y-3">
            <h2 className="text-lg font-black text-slate-800">プレイモード</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {[
                { id: 'flow', label: '⚡ 一筆フロー', detail: '離すとすぐに正誤判定' },
                { id: 'normal', label: '✋ 通常トレース', detail: '選んでから答え合わせ' },
                { id: 'bug_slash', label: '🪲 バグ・スラッシュ', detail: '余分な語を破壊してから解析' },
              ].map(mode => (
                <button key={mode.id} type="button" onClick={() => setGameMode(mode.id)}
                  aria-pressed={gameMode === mode.id}
                  className={`rounded-2xl p-4 text-left border-2 transition-colors ${gameMode === mode.id ? 'border-cyan-500 bg-cyan-50' : 'border-slate-200 bg-white hover:bg-slate-50'}`}>
                  <span className="font-black block text-slate-800">{mode.label}</span>
                  <span className="text-xs text-slate-500">{mode.detail}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 font-medium">※ 離れた単語を選ぶ問題は、通常トレースで一語ずつ選択できます。</p>
          </section>

          <section className="space-y-3">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h2 className="text-lg font-black text-slate-800">難易度を選んですぐ開始</h2>
              <label className="flex gap-2 items-center text-sm font-bold text-slate-600">
                出題数
                <select value={count} onChange={(e)=>setCount(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                  className="bg-white border border-slate-200 rounded-xl px-3 py-2">
                  <option value={5}>5問</option><option value={10}>10問</option><option value={20}>20問</option><option value={50}>50問</option><option value="all">すべて</option>
                </select>
              </label>
            </div>
            {levels.map(lv => {
              const available = number(lv);
              const label = lv === 'all' ? '間違えた問題を復習' : `Level ${lv} / ${difficulty(lv)}`;
              return (
                <div key={lv} className="rounded-2xl bg-white border border-slate-200 p-4 flex gap-3 justify-between items-center">
                  <div>
                    <div className="font-black text-lg text-slate-800">{label}</div>
                    <p className="text-sm text-slate-500">{available} 問からランダム出題</p>
                  </div>
                  <button type="button" disabled={!available} onClick={() => launch(lv, count)}
                    className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-xl px-4 md:px-6 py-3 font-black inline-flex gap-2 items-center whitespace-nowrap">
                    <Play size={17} fill="currentColor"/> 開始
                  </button>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    );
  }

  const home = view === 'home' || view === 'element' || view === 'sub_select';
  return (
    <div className="flex-1 w-full bg-[#f5f8fc] overflow-y-auto px-4 md:px-8 py-6 md:py-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-700 font-black text-xs tracking-widest mb-1"><Zap size={15}/> TRACEGRAM</div>
            <h1 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900">英語を、なぞって理解する。</h1>
            <p className="mt-2 text-slate-500 text-sm md:text-base">学びたい教材を選ぶだけ。あとからプレイ方法を変えられます。</p>
          </div>
          {!home && backButton(() => go('home'), 'ホーム')}
        </header>

        {home && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Feature icon={Layers3} title="文法トレース" caption="主語・動詞・目的語・関係詞などを直感的に分析" theme="grammar" detail={`${allCategories.length}分野・${totalQuestions.toLocaleString()}問`} onClick={()=>go('grammar')}/>
              <Feature icon={BookOpen} title="長文トレース" caption="英文を読みながら構造・読解・要約を学ぶ" theme="reading" detail={`${READING_ARTICLES.length}記事 / 4段階の難易度`} onClick={()=>go('reading')}/>
              <Feature icon={Target} title="苦手克服" caption="前に間違えた英文だけを集中的にトレース" theme="review" detail={`${missedProblems.length}問の復習候補`} onClick={()=>go('review')}/>
              <Feature icon={Users} title="みんなで対戦" caption="友達と同じ文法問題に挑戦。最大4人まで" theme="battle" onClick={()=>setAppScreen('title')}/>
            </div>
            {recentCategory && (
              <section className="rounded-2xl bg-slate-900 text-white px-5 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="flex gap-3 items-center">
                  <span className="bg-white/15 p-2.5 rounded-xl"><Clock3 size={20}/></span>
                  <div>
                    <div className="text-xs text-cyan-200 font-bold">前回の教材から再開</div>
                    <div className="font-black">{recentCategory.title} · Lv.{last.level}</div>
                  </div>
                </div>
                <button type="button" onClick={() => { setGameMode(last.mode || 'flow'); launch(last.level, last.count || 10, recentCategory); }}
                  className="bg-white text-slate-900 px-5 py-3 rounded-xl font-black flex items-center gap-2 hover:bg-cyan-100">
                  <Play size={16} fill="currentColor"/> もう一度学習
                </button>
              </section>
            )}
          </>
        )}

        {(home || view === 'grammar' || view === 'reading') && (
          <div className="relative">
            <Search size={20} className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400"/>
            <input type="search" value={search} onChange={e=>setSearch(e.target.value)}
              aria-label="教材を検索" placeholder="文法・教材を検索（例：関係詞、受動態、海洋プラスチック）"
              className="w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 py-4 shadow-sm text-slate-800 font-medium outline-none focus:ring-2 focus:ring-cyan-400"/>
          </div>
        )}

        {(view === 'grammar' || (home && search.trim())) && (
          <section className="space-y-4">
            <div className="flex gap-2 justify-between items-center">
              <h2 className="text-xl font-black text-slate-800">文法教材を探す</h2>
              <span className="text-sm text-slate-500 font-bold">{filteredCourses.length} 分野</span>
            </div>
            <div className="flex gap-2 flex-wrap" aria-label="文法カテゴリ">
              <button type="button" onClick={()=>setGroup('ALL')} aria-pressed={group==='ALL'}
                className={`px-3.5 py-2 rounded-full border text-sm font-bold ${group==='ALL' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-slate-200'}`}>すべて</button>
              {groups.map(g=>(
                <button key={g.id} type="button" onClick={()=>setGroup(g.id)} aria-pressed={group===g.id}
                  className={`px-3.5 py-2 rounded-full border text-sm font-bold ${group===g.id ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-slate-200'}`}>{g.title}</button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredCourses.map(c => (
                <button key={c.categoryId} type="button" onClick={() => chooseCourse(c)} className={`${card} p-4 text-left flex gap-3 items-center`}>
                  <span className={`p-3 rounded-xl font-black shrink-0 ${groupStyles[c.groupId]||groupStyles.CUSTOM}`}>{(CATALOG_GROUPS.find(g=>g.id===c.groupId)?.title || '教材').slice(0,4)}</span>
                  <span className="flex-1 min-w-0">
                    <span className="font-black text-slate-800 block text-base">{c.title}</span>
                    <span className="text-xs text-slate-500 line-clamp-2">{c.description}</span>
                    <span className="text-xs text-cyan-700 font-bold">{c.problems.length} 問 · Lv.1–3</span>
                  </span>
                  <ChevronRight size={19} className="text-slate-400 shrink-0"/>
                </button>
              ))}
            </div>
            {!filteredCourses.length && <p className="rounded-xl bg-white border p-6 text-slate-500">該当する教材はありません。検索語を変えてください。</p>}
          </section>
        )}

        {(view === 'reading' || (home && search.trim())) && (
          <section className="space-y-4">
            <div className="flex gap-2 justify-between items-center">
              <h2 className="text-xl font-black text-slate-800">長文教材</h2>
              <span className="text-sm text-slate-500 font-bold">{filteredArticles.length} 記事</span>
            </div>
            {!selectedArticle ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredArticles.map(a=>(
                  <button key={a.id} type="button" onClick={()=>{setSelectedArticle(a);setMenuViewMode('reading');}}
                    className={`${card} p-5 text-left space-y-2`}>
                    <span className="text-xs font-black text-indigo-600">READING · A2–C1</span>
                    <h3 className="font-black text-lg text-slate-800">{a.title}</h3>
                    <p className="text-sm text-slate-600">{a.englishTitle}</p>
                    <p className="text-sm text-slate-500">{a.description}</p>
                    <div className="flex gap-1.5 flex-wrap">{a.topics.map(t=><span key={t} className="text-xs rounded-full bg-indigo-50 text-indigo-700 px-3 py-1">{t}</span>)}</div>
                    <span className="inline-flex items-center gap-1 text-indigo-700 font-bold text-sm">レベルを選ぶ <ChevronRight size={16}/></span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-slate-200 p-4 md:p-6 rounded-3xl space-y-4">
                {backButton(()=>setSelectedArticle(null), '記事一覧')}
                <h3 className="text-xl md:text-2xl font-black">{selectedArticle.title}</h3>
                <p className="text-slate-500">{selectedArticle.englishTitle}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedArticle.levels.map(l=>(
                    <button key={l.num} type="button" onClick={()=>{setActiveSummary(l.data); setAppScreen('summary');}}
                      className="rounded-2xl border-2 border-indigo-100 hover:border-indigo-400 bg-indigo-50/40 p-4 flex items-center justify-between gap-2">
                      <span className="text-left"><span className="font-black text-slate-800 block">{l.name}</span>
                      <span className="text-slate-500 text-xs">{l.data.wordCount || 0} words · {l.data.paragraphs?.length || 0} paragraphs</span></span>
                      <Play size={18} className="text-indigo-600 shrink-0"/>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {!filteredArticles.length && <p className="rounded-xl bg-white border p-6 text-slate-500">該当する記事はありません。</p>}
          </section>
        )}

        {view === 'review' && (
          <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-9 space-y-4">
            <span className="inline-flex gap-2 items-center text-amber-700 text-sm font-black"><Target size={19}/> あなたの苦手克服</span>
            <h2 className="font-black text-2xl text-slate-800">{missedProblems.length ? `${missedProblems.length}問を復習できます` : 'まだ復習する問題はありません'}</h2>
            <p className="text-sm text-slate-500">学習中に間違えた問題を、この端末に記録します。復習で正解した問題は復習リストから外れます。</p>
            {!!missedProblems.length && (
              <button onClick={openReview} type="button"
                className="inline-flex gap-2 items-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-black rounded-2xl px-6 py-4">
                <RotateCcw size={19}/> 苦手な問題を始める
              </button>
            )}
          </section>
        )}

        {home && !search.trim() && (
          <section className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6">
            <div className="flex gap-2 items-center mb-3"><GraduationCap className="text-cyan-700" size={20}/><h2 className="font-black text-slate-800 text-lg">迷ったら、ここから</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {allCategories.filter(c=>c.groupId==='BASIC').slice(0,3).map((c,i)=>(
                <button key={c.categoryId} onClick={()=>chooseCourse(c)} type="button"
                  className="text-left rounded-xl border border-slate-200 bg-slate-50 hover:bg-cyan-50 p-4 flex gap-3 items-center">
                  <span className="text-cyan-700 font-black">{String(i+1).padStart(2,'0')}</span>
                  <span className="font-bold text-slate-700 flex-1 text-sm">{c.title}</span>
                  <ChevronRight size={16} className="text-slate-400"/>
                </button>
              ))}
            </div>
          </section>
        )}
        <p className="text-center text-xs text-slate-400 pb-4">教材と学習履歴は現在この端末内で管理しています。先生が作成した教材は別端末には自動共有されません。</p>
      </div>
    </div>
  );
}
