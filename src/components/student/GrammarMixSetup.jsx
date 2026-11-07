"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, BookOpen, Check, ChevronDown, PencilLine, Shuffle, SlidersHorizontal } from 'lucide-react';
import {
  MIX_PRESETS, MIX_PREF_KEY, MIX_COUNTS, eligibleMixCategories,
  getMixPreset, normalizeMixConfig, mixGroups, createMixSession,
} from '../../lib/grammarMix.mjs';

const standardLevelOptions = [
  { id: 'basic', label: '初級のみ', levels: [1] },
  { id: 'standard', label: '初級＋中級', levels: [1, 2] },
  { id: 'all', label: '全レベル', levels: [1, 2, 3] },
];
function levelOptionOf(levels) {
  return standardLevelOptions.find(option =>
    option.levels.length === levels.length && option.levels.every(l => levels.includes(l)))?.id || 'all';
}
function readPrefs(categories) {
  try {
    const stored = JSON.parse(localStorage.getItem(MIX_PREF_KEY) || 'null');
    if (stored && typeof stored === 'object') return normalizeMixConfig(stored, categories);
  } catch {}
  return { ...getMixPreset('all', categories), count: 30 };
}

export default function GrammarMixSetup({ categories, onLaunch, onBack, isMultiplayer = false }) {
  const [config, setConfig] = useState(() => ({ ...getMixPreset('all', categories), count: 30 }));
  const [loaded, setLoaded] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    setConfig(readPrefs(categories));
    setLoaded(true);
  }, [categories]);

  const normalized = normalizeMixConfig(config, categories);
  const available = eligibleMixCategories(categories);
  const selected = new Set(normalized.categoryIds);
  const groups = useMemo(() => mixGroups(categories, normalized), [categories, normalized.categoryIds.join('|'), normalized.levels.join('|')]);
  const total = groups.reduce((sum, group) => sum + group.problems.length, 0);
  const actualCount = Math.min(total, normalized.count);
  const currentPreset = MIX_PRESETS.find(p => p.id === normalized.presetId) || MIX_PRESETS[0];

  function choosePreset(preset) {
    setConfig({ ...getMixPreset(preset.id, categories), count: normalized.count });
    setShowCategories(false);
  }
  function toggleCategory(id) {
    const next = selected.has(id)
      ? normalized.categoryIds.filter(existing => existing !== id)
      : [...normalized.categoryIds, id];
    setConfig(previous => ({ ...previous, categoryIds: next }));
  }
  function start() {
    if (!actualCount || isMultiplayer) return;
    const course = createMixSession(categories, normalized);
    if (!course) return;
    try { localStorage.setItem(MIX_PREF_KEY, JSON.stringify(normalized)); } catch {}
    onLaunch(course);
  }

  return <section className="tg-paper tg-margin rounded-[22px] p-5 pl-11 sm:p-7 sm:pl-14 space-y-5" aria-label="Grammar Mix 設定">
    <div className="flex justify-between items-start gap-3">
      <div>
        <span className="tg-tag">GRAMMAR NOTE / MIX</span>
        <h2 className="tg-serif font-bold text-2xl md:text-3xl text-[#283e32] flex gap-2 items-center mt-2">
          <Shuffle size={25} className="text-[#54775f]"/> Grammar Mix
        </h2>
        <p className="text-sm text-stone-600 mt-1">単元を混ぜて、英文のしくみを見抜く。</p>
      </div>
      <button type="button" onClick={onBack} className="shrink-0 text-sm text-[#59725e] font-semibold inline-flex items-center gap-1.5 hover:underline py-2">
        <ArrowLeft size={16}/> 単元別へ
      </button>
    </div>

    <div className="border-t border-[#e3e4da] pt-4 space-y-3">
      <div className="flex gap-2 items-baseline justify-between">
        <h3 className="font-bold text-[#344b3a] text-sm">コースを選ぶ</h3>
        <span className="text-xs text-stone-500">学校の進度に合わせて変更できます</span>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1" aria-label="学年別コース">
        {MIX_PRESETS.map(preset => (
          <button key={preset.id} type="button" aria-pressed={normalized.presetId === preset.id}
            onClick={() => choosePreset(preset)}
            className="tg-pill whitespace-nowrap !px-3.5 !py-2">
            {preset.name}
          </button>
        ))}
      </div>
      <p className="text-xs text-stone-500">{currentPreset.hint}。学年は目安です。</p>
    </div>

    <div className="border-t border-[#e3e4da] pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label htmlFor="tg-mix-difficulty" className="block text-sm font-bold text-[#344b3a]">難易度</label>
        <select id="tg-mix-difficulty" value={levelOptionOf(normalized.levels)}
          onChange={e => setConfig(previous => ({
            ...previous,
            levels: standardLevelOptions.find(opt => opt.id === e.target.value).levels
          }))}
          className="tg-outline rounded-xl w-full px-4 py-3 font-semibold text-sm">
          {standardLevelOptions.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="tg-mix-count" className="block text-sm font-bold text-[#344b3a]">出題数</label>
        <select id="tg-mix-count" value={normalized.count}
          onChange={e => setConfig(previous => ({ ...previous, count: Number(e.target.value) }))}
          className="tg-outline rounded-xl w-full px-4 py-3 font-semibold text-sm">
          {MIX_COUNTS.map(qty => <option key={qty} value={qty}>{qty} 問</option>)}
        </select>
      </div>
    </div>

    <details className="border-t border-[#e3e4da] pt-4" open={showCategories}
      onToggle={e => setShowCategories(e.currentTarget.open)}>
      <summary className="cursor-pointer flex justify-between items-center gap-2 list-none text-sm font-bold text-[#415d49]">
        <span className="inline-flex items-center gap-2"><SlidersHorizontal size={17}/> 対象分野を調整</span>
        <span className="inline-flex items-center gap-2 text-xs text-stone-500">{normalized.categoryIds.length} / {available.length} 分野 <ChevronDown size={16}/></span>
      </summary>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[260px] overflow-y-auto pr-1">
        {available.map(course => (
          <label key={course.categoryId} className="flex items-center gap-3 rounded-lg px-3 py-2 bg-[#fffef8] border border-[#e7e7dd] cursor-pointer hover:bg-[#edf4eb]">
            <input type="checkbox" className="accent-[#547b65] w-4 h-4"
              checked={selected.has(course.categoryId)} onChange={() => toggleCategory(course.categoryId)}/>
            <span className="text-xs sm:text-sm text-[#344537] flex-1 min-w-0 truncate">
              {course.title.replace(/^Sub-\d+:\s*/, '')}
            </span>
          </label>
        ))}
      </div>
      <p className="text-xs text-stone-500 mt-2">各分野からできるだけ均等に選び、同じ問題は繰り返し出題しません。</p>
    </details>

    <div className="border-t border-[#e3e4da] pt-4">
      <div className="flex flex-wrap justify-between items-center gap-2 mb-3 text-sm">
        <span className="text-stone-500">{groups.length}分野からランダム出題</span>
        <strong className="font-bold text-[#345e45]">{actualCount}問 / 候補 {total}問</strong>
      </div>
      {isMultiplayer ? (
        <p className="rounded-xl p-3 text-sm text-[#876343] bg-[#f7f0e2]">Grammar Mixは個人学習モードで利用できます。対戦は単元別から始めてください。</p>
      ) : (
        <button type="button" disabled={!actualCount || !loaded} onClick={start}
          className="tg-primary rounded-xl w-full py-4 font-bold text-base md:text-lg flex items-center justify-center gap-3">
          <PencilLine size={21}/> ランダムトレース開始 <Shuffle size={19}/>
        </button>
      )}
      {!total && <p role="status" className="text-[#9a6146] text-sm mt-2">出題できる問題がありません。分野または難易度を見直してください。</p>}
    </div>
  </section>;
}
