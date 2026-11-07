// Tracegram-only mixed grammar sessions. Copeak data is deliberately excluded.
// Grade presets are editable suggested review ranges, not fixed curriculum claims.

export const MIX_PRESETS = Object.freeze([
  { id: 'all', name: '全25分野', hint: '収録済みの文法を幅広く復習', levels: [1, 2, 3], categoryIds: null },
  { id: 'j1', name: '中1の復習', hint: '動詞・基本文型・補語の基礎', levels: [1], categoryIds: [
    'basic_find_verb', 'basic_5patterns', 'verb_transitive', 'comp_svc'
  ] },
  { id: 'j2', name: '中2の復習', hint: '中1の基礎に目的語・不定詞・修飾語を追加', levels: [1], categoryIds: [
    'basic_find_verb', 'basic_remove_m', 'basic_5patterns',
    'verb_transitive', 'obj_svoo', 'obj_verbal', 'comp_svc', 'mod_adv'
  ] },
  { id: 'j3', name: '中3の復習', hint: '現在完了・受動態・関係詞節・後置修飾まで', levels: [1], categoryIds: [
    'basic_find_verb', 'basic_remove_m', 'basic_5patterns', 'subj_prep',
    'verb_transitive', 'verb_tense', 'verb_passive', 'obj_svoo', 'obj_verbal',
    'comp_svc', 'mod_adj', 'relative_clause'
  ] },
  { id: 'hs1', name: '高1の復習', hint: '5文型・時制・準動詞などの基礎と応用', levels: [1, 2], categoryIds: [
    'basic_find_verb', 'basic_remove_m', 'basic_5patterns', 'subj_prep',
    'subj_verbal', 'verb_transitive', 'verb_tense', 'verb_passive', 'verb_phrasal',
    'obj_svoo', 'obj_verbal', 'obj_clause', 'comp_svc', 'comp_svoc',
    'mod_adj', 'mod_adv'
  ] },
  { id: 'hs2', name: '高2の復習', hint: '関係詞・節・複雑な修飾を含む総合復習', levels: [1, 2, 3], categoryIds: [
    'basic_find_verb', 'basic_remove_m', 'basic_5patterns', 'subj_prep',
    'subj_verbal', 'subj_clause', 'subj_it',
    'verb_transitive', 'verb_tense', 'verb_passive', 'verb_phrasal',
    'obj_svoo', 'obj_verbal', 'obj_clause', 'obj_it',
    'comp_svc', 'comp_svoc', 'comp_causative',
    'mod_adj', 'mod_adv', 'mod_adj_extended', 'relative_clause'
  ] },
  { id: 'hs3', name: '高3・入試', hint: '25分野・全難易度から総合演習', levels: [1, 2, 3], categoryIds: null },
]);

export const MIX_COURSE_ID = 'grammar_mix';
export const MIX_LAST_KEY = 'tracegram_last_course';
export const MIX_PREF_KEY = 'tracegram_mix_settings_v1';
export const MIX_COUNTS = [10, 20, 30, 50];

export function eligibleMixCategories(categories) {
  return (Array.isArray(categories) ? categories : [])
    .filter(c => c && c.categoryId && c.categoryId !== 'custom' &&
      c.categoryId !== MIX_COURSE_ID && Array.isArray(c.problems) && c.problems.length > 0);
}

export function getMixPreset(id, categories) {
  const preset = MIX_PRESETS.find(item => item.id === id) || MIX_PRESETS[0];
  const valid = eligibleMixCategories(categories).map(c => c.categoryId);
  const categoryIds = preset.categoryIds
    ? preset.categoryIds.filter(cat => valid.includes(cat))
    : valid;
  return { presetId: preset.id, categoryIds, levels: [...preset.levels] };
}

export function getMixProblemLevel(problem) {
  const explicit = Number(problem?.level);
  if (Number.isInteger(explicit) && explicit >= 1 && explicit <= 3) return explicit;
  const match = String(problem?.id || '').match(/-([bia])-\d+$/i);
  return match ? ({ b: 1, i: 2, a: 3 })[match[1].toLowerCase()] : 1;
}

export function normalizeMixConfig(input, categories) {
  const base = getMixPreset(input?.presetId, categories);
  const valid = new Set(eligibleMixCategories(categories).map(c => c.categoryId));
  const categoryIds = Array.isArray(input?.categoryIds)
    ? [...new Set(input.categoryIds.filter(id => valid.has(id)))]
    : base.categoryIds;
  const levels = Array.isArray(input?.levels)
    ? [...new Set(input.levels.map(Number).filter(n => [1, 2, 3].includes(n)))].sort()
    : base.levels;
  const count = MIX_COUNTS.includes(Number(input?.count)) ? Number(input.count) : 20;
  return { presetId: base.presetId, categoryIds, levels, count };
}

export function mixGroups(categories, config) {
  const options = normalizeMixConfig(config, categories);
  const categoriesById = new Map(eligibleMixCategories(categories).map(c => [c.categoryId, c]));
  const seen = new Set();
  return options.categoryIds.map(id => {
    const source = categoriesById.get(id);
    if (!source) return null;
    const problems = source.problems.filter(p => {
      if (!p?.id || seen.has(p.id) || !options.levels.includes(getMixProblemLevel(p))) return false;
      seen.add(p.id);
      return true;
    }).map(p => ({
      ...p,
      level: getMixProblemLevel(p),
      sourceCategoryId: id,
      sourceCategoryTitle: source.title,
    }));
    return { id, title: source.title, problems };
  }).filter(group => group && group.problems.length);
}

function shuffled(items, random) {
  const list = [...items];
  for (let i = list.length - 1; i > 0; i--) {
    const n = Math.max(0, Math.min(0.999999999, Number(random()) || 0));
    const j = Math.floor(n * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

/**
 * Each round draws at most one problem per category, then shuffles the final
 * sequence. This avoids large 45-question sources dominating small mixes.
 * No duplicate exercise IDs can appear in a session.
 */
export function selectBalancedMix(groups, requested, random = Math.random) {
  const prepared = (Array.isArray(groups) ? groups : [])
    .filter(g => Array.isArray(g?.problems) && g.problems.length)
    .map(g => ({ id: g.id, remaining: shuffled(g.problems, random) }));
  const total = prepared.reduce((sum, g) => sum + g.remaining.length, 0);
  const count = Math.max(0, Math.min(total, Math.floor(Number(requested) || 0)));
  const selected = [];
  const used = new Set();
  while (selected.length < count && prepared.some(g => g.remaining.length)) {
    let found = false;
    for (const group of shuffled(prepared.filter(g => g.remaining.length), random)) {
      if (selected.length >= count) break;
      let question;
      do { question = group.remaining.pop(); }
      while (question && used.has(question.id));
      if (question) {
        selected.push(question);
        used.add(question.id);
        found = true;
      }
    }
    if (!found) break;
  }
  return shuffled(selected, random);
}

export function makeMixCourse(categories, input, questions = null) {
  const config = normalizeMixConfig(input, categories);
  const groups = mixGroups(categories, config);
  const total = groups.reduce((n, group) => n + group.problems.length, 0);
  if (!total) return null;
  const preset = MIX_PRESETS.find(item => item.id === config.presetId) || MIX_PRESETS[0];
  const title = config.presetId === 'all' ? 'Grammar Mix · 全分野'
    : `Grammar Mix · ${preset.name}`;
  return {
    categoryId: MIX_COURSE_ID,
    title,
    description: '選択した文法分野から、順序をランダムに出題します。',
    groupId: 'BASIC',
    mixConfig: config,
    // A full pool is used only when reconstructing a saved session.
    problems: Array.isArray(questions) ? questions : groups.flatMap(group => group.problems),
  };
}

export function createMixSession(categories, input, random = Math.random) {
  const config = normalizeMixConfig(input, categories);
  const groups = mixGroups(categories, config);
  const selected = selectBalancedMix(groups, config.count, random);
  if (!selected.length) return null;
  return makeMixCourse(categories, config, selected);
}
