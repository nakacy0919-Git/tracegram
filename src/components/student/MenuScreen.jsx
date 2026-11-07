"use client";
import React, { useMemo, useEffect, useState } from 'react';
import {
  ArrowLeft, ArrowRight, BookOpen, PencilLine, Search, ChevronRight, Play,
  RotateCcw, Users, NotebookPen, ListFilter, CircleHelp, Settings2, Shuffle
} from 'lucide-react';
import { CATALOG_GROUPS, getProblemLevel } from '../../data/mockData';
import { READING_ARTICLES } from '../../data/readingCatalog';
import GrammarMixSetup from './GrammarMixSetup';
import { MIX_COURSE_ID, makeMixCourse, createMixSession } from '../../lib/grammarMix.mjs';

const KEY_LAST = 'tracegram_last_course';
const KEY_SESSION = 'tracegram_active_session';
const KEY_MISTAKES = 'tracegram_mistakes';

function storage(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback; }
  catch { return fallback; }
}
const norm = (text) => String(text ?? '').normalize('NFKC').toLowerCase().trim();
const levelNames = { 1:'初級', 2:'中級', 3:'上級' };
const groupsLabel = new Map(CATALOG_GROUPS.map(group=>[group.id,group.title]));
const gameModes = [
  { id:'flow', title:'一筆フロー', detail:'指を離すと判定' },
  { id:'normal', title:'通常トレース', detail:'選んでから判定' },
  { id:'bug_slash', title:'バグ・スラッシュ', detail:'余分な単語を見つける' },
];

function Back({onClick,children='戻る'}) {
  return <button type="button" onClick={onClick}
    className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-600 hover:text-[#376252] py-2">
    <ArrowLeft size={17}/>{children}
  </button>;
}
function NotebookHeading({label,title,description}) {
  return <div className="space-y-1.5">
    <span className="tg-tag">{label}</span>
    <h2 className="tg-serif text-2xl md:text-3xl font-bold tracking-tight text-[#28372f]">{title}</h2>
    {description && <p className="text-sm text-stone-600 leading-relaxed">{description}</p>}
  </div>;
}
function SearchBox({value,onChange,placeholder}) {
  return <label className="relative block">
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718477]" size={18}/>
    <span className="sr-only">教材を検索</span>
    <input type="search" value={value} onChange={e=>onChange(e.target.value)}
      placeholder={placeholder}
      className="tg-paper w-full rounded-2xl pl-11 pr-4 py-3 text-sm md:text-base outline-none focus:ring-2 focus:ring-[#557965]"/>
  </label>;
}
function HomeTile({icon:Icon,title,detail,onClick,number}) {
  return <button type="button" onClick={onClick}
    className="tg-paper tg-course w-full min-h-[112px] rounded-[18px] p-4 md:p-5 text-left flex gap-4 items-center">
    <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e6ede5] text-[#426b5c] flex items-center justify-center">
      <Icon size={24} strokeWidth={1.8}/>
    </span>
    <span className="min-w-0 flex-1">
      <span className="block tg-serif text-lg md:text-xl text-[#27382d] font-bold">{title}</span>
      <span className="block text-[12px] md:text-sm text-stone-500 mt-1 leading-snug">{detail}</span>
    </span>
    <span className="flex flex-col items-end gap-2 text-stone-400 shrink-0">
      <span className="text-[10px] tracking-[.12em]">{number}</span>
      <ChevronRight size={18}/>
    </span>
  </button>;
}

export default function MenuScreen({
  gameMode, setGameMode, onReplayOpening, onTeacherOpen, setActiveSummary,
  gameState, roomId, availableCategories, activeCategory, isMultiplayer, isHost,
  setAppScreen, selectSubCategory, startGame, resumeGame, backToMain, setBattleSetup,
  menuViewMode, setMenuViewMode, selectedArticle, setSelectedArticle
}) {
  const page = ['grammar','reading','review','mix'].includes(menuViewMode) ? menuViewMode : 'home';
  const [query,setQuery] = useState('');
  const [group,setGroup] = useState('ALL');
  const [level,setLevel] = useState(1);
  const [count,setCount] = useState(10);
  const [last,setLast] = useState(null);
  const [session,setSession] = useState(null);
  const [mistakes,setMistakes] = useState({});

  useEffect(()=>{
    setLast(storage(KEY_LAST,null));
    setSession(storage(KEY_SESSION,null));
    const saved=storage(KEY_MISTAKES,{});
    setMistakes(saved && typeof saved === 'object' && !Array.isArray(saved) ? saved : {});
  },[gameState]);

  const categories = useMemo(()=>availableCategories.filter(c=>Array.isArray(c.problems)&&c.problems.length>0),[availableCategories]);
  const byId = useMemo(()=>new Map(categories.map(c=>[c.categoryId,c])),[categories]);
  const problemMap = useMemo(()=>{
    const m=new Map();
    categories.forEach(c=>c.problems.forEach(p=>{ if (p.id) m.set(p.id,p); }));
    return m;
  },[categories]);
  const missed=Object.keys(mistakes).map(id=>problemMap.get(id)).filter(Boolean);
  const recent=last && (last.categoryId===MIX_COURSE_ID && last.mixConfig
    ? makeMixCourse(categories,last.mixConfig)
    : byId.get(last.categoryId));
  const resumeAvailable=!!(recent && session && session.categoryId===recent.categoryId && Array.isArray(session.problemIds) && session.problemIds.length);
  const topics=CATALOG_GROUPS.filter(g=>categories.some(c=>(c.groupId||'CUSTOM')===g.id));

  const filtered=categories.filter(c=>{
    if (group!=='ALL' && (c.groupId||'CUSTOM')!==group) return false;
    if (!norm(query)) return true;
    return norm([c.title,c.description,c.categoryId,...c.problems.flatMap(p=>p.grammarPoints||[])].join(' ')).includes(norm(query));
  });
  const readings=READING_ARTICLES.filter(a=>norm([a.title,a.englishTitle,a.description,...a.topics].join(' ')).includes(norm(query)));

  function navigate(next) {
    setQuery(''); setGroup('ALL');
    setSelectedArticle(null);
    setMenuViewMode(next);
    if(gameState!=='main_select')backToMain();
  }
  function choose(course) {
    setLevel([1,2,3].find(l=>course.problems.some(p=>getProblemLevel(p)===l)) || 1);
    setCount(10);
    setMenuViewMode('grammar');
    selectSubCategory(course);
  }
  function launch(lvl,qty,course=activeCategory) {
    if (!course) return;
    if (isMultiplayer && isHost) {
      setBattleSetup({mainId:course.groupId||'CUSTOM',subCategory:course,level:lvl,questionCount:qty});
      setAppScreen('lobby');
      return;
    }
    try {
      if(course.categoryId!=='review')localStorage.setItem(KEY_LAST,JSON.stringify({
        categoryId:course.categoryId, level:lvl, count:qty, mode:gameMode, at:Date.now()
      }));
    } catch {}
    startGame(lvl,qty,course);
  }
  function launchMix(course) {
    if (isMultiplayer || !course?.problems?.length) return;
    setGameMode('flow');
    try {
      localStorage.setItem(KEY_LAST, JSON.stringify({
        categoryId: MIX_COURSE_ID, level: 'all', count: course.problems.length,
        mode: 'flow', mixConfig: course.mixConfig, at: Date.now()
      }));
    } catch {}
    startGame('all', course.problems.length, course);
  }
  function launchReview() {
    if(!missed.length)return;
    launch('all',Math.min(20,missed.length),{
      categoryId:'review',groupId:'BASIC',title:'まちがいノート',
      description:'以前に間違えた英文をもう一度なぞります。',problems:missed
    });
  }
  const wrap='tg-workspace tg-fluid-screen overflow-y-auto px-4 pb-12 pt-4 md:px-7 md:pb-16';

  // One compact start action: difficulty first, optional play mode in disclosure.
  if(gameState==='level_select' && activeCategory) {
    const isReview=activeCategory.categoryId==='review';
    const availableLevels=isReview?['all']:[1,2,3];
    const options=availableLevels.map(l=>({
      value:l,
      amount:l==='all'?activeCategory.problems.length:
        activeCategory.problems.filter(p=>getProblemLevel(p)===l).length
    }));
    const chosen=options.find(o=>o.value===level && o.amount>0)||options.find(o=>o.amount>0);
    return <main className={wrap}>
      <div className="max-w-[780px] mx-auto">
        <Back onClick={()=>{backToMain();setMenuViewMode(isReview?'review':'grammar');}}>教材一覧</Back>
        <section className="tg-paper tg-margin tg-holes rounded-[22px] mt-2 p-5 pl-12 sm:p-9 sm:pl-16">
          <div className="tg-tag mb-2">LESSON · {groupsLabel.get(activeCategory.groupId)||'MY NOTE'}</div>
          <h1 className="tg-serif font-bold text-2xl md:text-3xl leading-snug text-[#2b3c30]">{activeCategory.title}</h1>
          <p className="mt-2 text-sm text-stone-600 leading-relaxed">{activeCategory.description}</p>
          <div className="h-px bg-[#d9dfd3] my-6"/>

          <h2 className="font-semibold text-[#31463b] text-sm mb-3">1. 難易度</h2>
          <div className="grid grid-cols-3 gap-2">
            {options.map(o=>(
              <button type="button" key={o.value} disabled={!o.amount} aria-pressed={chosen?.value===o.value}
                onClick={()=>setLevel(o.value)}
                className={`rounded-xl border p-3 text-left transition-colors ${chosen?.value===o.value?'border-[#557b68] bg-[#e8f0e5] text-[#2c5140]':'bg-white/70 border-[#dddcd1] text-stone-600'} disabled:opacity-35 disabled:cursor-not-allowed`}>
                <span className="block font-bold">{o.value==='all'?'復習':levelNames[o.value]}</span>
                <span className="block text-xs mt-1">{o.amount} 問</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-6 flex-wrap">
            <label htmlFor="question-count" className="font-semibold text-[#31463b] text-sm">2. 出題数</label>
            <select id="question-count" value={count} onChange={e=>setCount(e.target.value==='all'?'all':Number(e.target.value))}
              className="tg-outline rounded-xl px-4 py-2 font-semibold text-sm">
              <option value={5}>5 問</option><option value={10}>10 問</option><option value={20}>20 問</option><option value={50}>50 問</option><option value="all">すべて</option>
            </select>
          </div>
          <details className="border-t border-[#e1e2d6] mt-6 pt-4 group">
            <summary className="cursor-pointer flex items-center gap-2 text-sm text-stone-600 hover:text-[#3e6558] font-semibold select-none">
              <Settings2 size={16}/> プレイ方法を変更する
              <span className="font-normal text-xs text-stone-400">（現在：{gameModes.find(m=>m.id===gameMode)?.title}）</span>
            </summary>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
              {gameModes.map(m=>(
                <button key={m.id} type="button" aria-pressed={gameMode===m.id}
                  className={`rounded-xl border p-3 text-left ${gameMode===m.id?'bg-[#e8f0e5] border-[#658874]':'bg-white/70 border-[#dddcd1]'}`}
                  onClick={()=>setGameMode(m.id)}>
                  <span className="block text-sm font-bold">{m.title}</span>
                  <span className="text-[11px] text-stone-500">{m.detail}</span>
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-stone-500">離れた単語を選ぶときは、複数回なぞってから判定できます。</p>
          </details>
          <button type="button" disabled={!chosen?.amount}
            onClick={()=>launch(chosen.value,count)}
            className="tg-primary mt-7 w-full py-4 rounded-2xl flex items-center justify-center gap-3 text-lg font-bold">
            <PencilLine size={23}/> {isMultiplayer && isHost?'この教材で対戦する':'この英文をなぞる'} <ArrowRight size={20}/>
          </button>
        </section>
      </div>
    </main>;
  }

  return <main className={wrap}>
    <div className="max-w-[980px] mx-auto space-y-5">
      <header className="flex items-center justify-between gap-3 pr-[94px] md:pr-0">
        <button type="button" onClick={onReplayOpening}
          title="ロゴのオープニングを見る" aria-label="Tracegram オープニングを再生する"
          className="inline-flex gap-2.5 items-center rounded-xl hover:opacity-75 transition-opacity shrink-0">
          <img src="/tracegramlogo.png" alt="" className="h-11 w-11 object-contain"/>
          <span className="tg-brand-name tg-serif font-bold text-xl md:text-2xl tracking-tight">Tracegram</span>
        </button>
        <div className="hidden md:flex items-center gap-4 text-sm">
          <button type="button" onClick={()=>navigate('home')} className={page==='home'?'font-bold text-[#315747]':'text-stone-500 hover:text-[#315747]'}>ホーム</button>
          <button type="button" onClick={()=>navigate('grammar')} className={page==='grammar'?'font-bold text-[#315747]':'text-stone-500 hover:text-[#315747]'}>文法</button>
          <button type="button" onClick={()=>navigate('reading')} className={page==='reading'?'font-bold text-[#315747]':'text-stone-500 hover:text-[#315747]'}>長文</button>
          {onTeacherOpen && <button type="button" onClick={onTeacherOpen} className="text-stone-500 hover:text-[#315747]">教材作成</button>}
        </div>
      </header>

      {page==='home' && <>
        <section className="tg-paper tg-home-paper tg-margin tg-holes relative rounded-[22px] px-6 pl-12 sm:px-9 sm:pl-20 py-7 md:py-10 overflow-hidden">
          <div className="max-w-[610px] relative z-10">
            <span className="tg-tag">YOUR ENGLISH NOTEBOOK</span>
            <h1 className="tg-serif font-bold text-[clamp(1.8rem,4.1vw,3.1rem)] leading-[1.45] text-[#293b30] mt-3">
              英文のしくみを、<span className="tg-underline">なぞって</span>つかむ。
            </h1>
            <p className="text-stone-600 text-sm md:text-base mt-3 max-w-[530px] leading-relaxed">
              文のかたまりを指でつないで、英語の骨組みを見つけよう。
            </p>
          </div>
          <div aria-hidden="true" className="mt-6 sm:mt-7 bg-white/50 rounded-xl border border-[#e9e5d9] py-4 px-3 sm:px-7">
            <div className="flex flex-wrap gap-x-2 gap-y-2 tg-serif text-[clamp(1.15rem,3vw,1.8rem)] font-semibold tracking-[.02em] text-[#46554a]">
              <span className="relative whitespace-nowrap after:absolute after:left-0 after:-bottom-1 after:right-0 after:h-[3px] after:rounded-full after:bg-[#9ab6a0]">The little boy</span>
              <span className="whitespace-nowrap">is reading</span>
              <span className="whitespace-nowrap">a book.</span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-stone-400 tracking-wider mt-4">
              <span>SUBJECT — VERB — OBJECT</span>
              <PencilLine size={17} className="text-[#a68162]"/>
            </div>
          </div>
        </section>

        {isMultiplayer && isHost && <div className="tg-paper px-5 py-3 rounded-xl flex justify-between items-center gap-3">
          <span className="font-bold text-sm text-[#345a46]">対戦ルーム：教材を選んでください</span>
          <span className="font-mono font-bold tracking-widest">{roomId}</span>
        </div>}

        {recent && !isMultiplayer && <button type="button"
          onClick={()=>{
            setGameMode(['flow','normal','bug_slash'].includes(last.mode)?last.mode:'flow');
            if (resumeAvailable && resumeGame(recent,session)) return;
            if (last.categoryId===MIX_COURSE_ID && last.mixConfig) {
              const next=createMixSession(categories,last.mixConfig);
              if (next) launchMix(next);
            } else launch(last.level,last.count||10,recent);
          }}
          className="tg-paper tg-course rounded-2xl w-full px-5 py-4 flex justify-between items-center gap-3 text-left">
          <span className="flex min-w-0 items-center gap-3">
            <span className="rounded-full bg-[#e5eee6] p-2.5 text-[#3f6856] shrink-0"><Play size={17} fill="currentColor"/></span>
            <span className="min-w-0">
              <span className="text-[11px] tracking-wide text-stone-500 block">{resumeAvailable? `続きから · ${Math.min((session.index||0)+1,session.problemIds.length)}/${session.problemIds.length} 問`:'前回の教材'}</span>
              <span className="block truncate text-[#2e4333] font-bold text-sm md:text-base">{recent.title}</span>
            </span>
          </span><ChevronRight className="text-[#648371] shrink-0" size={19}/>
        </button>}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <HomeTile number="01" icon={PencilLine} title="文法をなぞる" detail="文型・主語・動詞・関係詞" onClick={()=>navigate('grammar')}/>
          <HomeTile number="02" icon={BookOpen} title="長文をなぞる" detail="読解・構造・要約・語彙" onClick={()=>navigate('reading')}/>
        </div>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-2 text-sm">
          <button type="button" onClick={()=>navigate('mix')} className="tg-pill flex items-center gap-2"><Shuffle size={17}/> Grammar Mix</button>
          <button type="button" onClick={()=>navigate('review')} className="tg-pill flex items-center gap-2">
            <RotateCcw size={17}/> まちがいノート <span className="text-xs opacity-65">{missed.length}</span>
          </button>
          <button type="button" onClick={()=>isMultiplayer && isHost?navigate('grammar'):setAppScreen('title')} className="tg-pill flex items-center gap-2">
            <Users size={17}/> みんなで対戦
          </button>
          {onTeacherOpen && <button type="button" onClick={onTeacherOpen} className="tg-pill md:hidden flex items-center gap-2">
            <NotebookPen size={17}/> 教材作成
          </button>}
        </div>
      </>}

      {page==='grammar' && <section className="tg-paper rounded-[22px] p-4 sm:p-6 space-y-5">
        <div className="flex justify-between items-start gap-3">
          <NotebookHeading label="GRAMMAR NOTE" title="文法をなぞる" description="学びたい項目を選んでください。"/>
          <Back onClick={()=>navigate('home')}>ホーム</Back>
        </div>
        <div className="flex gap-2 items-center border-b border-[#e4e7d9] pb-3" role="tablist" aria-label="文法の出題形式">
          <button type="button" role="tab" aria-selected="true" className="tg-pill is-active">単元別</button>
          {!isMultiplayer && <button type="button" role="tab" aria-selected="false" onClick={()=>navigate('mix')} className="tg-pill inline-flex gap-1.5 items-center"><Shuffle size={16}/> Grammar Mix</button>}
        </div>
        <SearchBox value={query} onChange={setQuery} placeholder="教材を検索（例：受動態・関係詞）"/>
        <div className="flex gap-2 overflow-x-auto pb-1" aria-label="文法分類">
          <button className="tg-pill whitespace-nowrap" type="button" aria-pressed={group==='ALL'} onClick={()=>setGroup('ALL')}>すべて</button>
          {topics.map(g=><button key={g.id} type="button" aria-pressed={group===g.id} onClick={()=>setGroup(g.id)}
            className="tg-pill whitespace-nowrap">{g.title}</button>)}
        </div>
        <div className="divide-y divide-[#e6e6dc]">
          {filtered.map((course,i)=>(
            <button type="button" key={course.categoryId} onClick={()=>choose(course)}
              className="tg-course w-full py-3.5 sm:py-4 px-2 rounded-lg text-left flex gap-3 items-center">
              <span className="text-[11px] text-stone-400 font-mono w-7 shrink-0">{String(i+1).padStart(2,'0')}</span>
              <span className="flex-1 min-w-0">
                <span className="block font-semibold text-[#273d31] text-sm md:text-base">{course.title.replace(/^Sub-\d+:\s*/, '')}</span>
                <span className="text-xs text-stone-500 line-clamp-1 mt-0.5">{course.description}</span>
              </span>
              <span className="text-xs text-stone-400 whitespace-nowrap">{course.problems.length}問</span>
              <ChevronRight size={18} className="text-stone-400 shrink-0"/>
            </button>
          ))}
          {!filtered.length && <div className="text-stone-500 text-sm text-center py-12">該当する教材はありません。</div>}
        </div>
      </section>}

      {page==='mix' && <GrammarMixSetup categories={categories} onLaunch={launchMix}
        onBack={()=>navigate('grammar')} isMultiplayer={isMultiplayer} />}
      {page==='reading' && <section className="tg-paper rounded-[22px] p-4 sm:p-6 space-y-5">
        <div className="flex items-start justify-between gap-3">
          <NotebookHeading label="READING NOTE" title="長文をなぞる"
            description={selectedArticle?'レベルを選んで始めよう。':'読んでみたい英文を選んでください。'}/>
          <Back onClick={()=>selectedArticle?setSelectedArticle(null):navigate('home')}>{selectedArticle?'記事一覧':'ホーム'}</Back>
        </div>
        {!selectedArticle ? <>
          <SearchBox value={query} onChange={setQuery} placeholder="記事名やテーマで検索"/>
          <div className="grid gap-3">
            {readings.map((a,i)=>(
              <button type="button" key={a.id} onClick={()=>setSelectedArticle(a)}
                className="tg-course rounded-xl border border-[#e6e5d9] p-4 md:p-5 text-left flex items-center gap-4">
                <span className="tg-serif text-3xl text-[#8da798] font-semibold">0{i+1}</span>
                <span className="flex-1 min-w-0">
                  <span className="block font-bold text-[#2c4033] text-lg">{a.title}</span>
                  <span className="block text-stone-500 text-xs md:text-sm mt-1 truncate">{a.englishTitle}</span>
                  <span className="block text-stone-400 text-xs mt-1">{a.topics.join(' · ')}</span>
                </span>
                <ChevronRight size={19} className="text-stone-400 shrink-0"/>
              </button>
            ))}
            {!readings.length && <p className="text-stone-500 text-sm text-center py-10">該当する記事はありません。</p>}
          </div>
        </> : <div className="tg-note rounded-xl border border-[#e4e4d9] p-5 space-y-4">
          <div>
            <h3 className="tg-serif font-bold text-2xl text-[#293d30]">{selectedArticle.title}</h3>
            <p className="text-sm mt-1 text-stone-500">{selectedArticle.englishTitle}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {selectedArticle.levels.map(l=>(
              <button key={l.num} type="button" onClick={()=>{setActiveSummary(l.data);setAppScreen('summary');}}
                className="tg-outline rounded-xl p-4 text-left">
                <span className="block tg-tag">LEVEL {l.num}</span>
                <span className="block font-bold mt-2 text-[#2e4435]">{l.name}</span>
                <span className="text-[11px] text-stone-500 mt-1 block">{l.data.paragraphs?.length||0} 段落</span>
              </button>
            ))}
          </div>
        </div>}
      </section>}

      {page==='review' && <section className="tg-paper tg-margin rounded-[22px] p-6 pl-12 md:p-9 md:pl-16 space-y-5">
        <div className="flex justify-between items-start gap-3">
          <NotebookHeading label="REVIEW NOTE" title="まちがいノート"/>
          <Back onClick={()=>navigate('home')}>ホーム</Back>
        </div>
        <p className="text-stone-600 leading-relaxed text-sm">
          {missed.length? `なぞり直せる英文が ${missed.length} 問あります。`:'まだ記録がありません。間違えた英文は自動でここに集まります。'}
        </p>
        {!!missed.length && <button type="button" onClick={launchReview}
          className="tg-primary rounded-xl px-6 py-3.5 font-bold inline-flex items-center gap-2">
          <PencilLine size={19}/> 復習する <ArrowRight size={18}/>
        </button>}
      </section>}
    </div>
  </main>;
}
