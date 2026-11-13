// Pure, shared helpers for short classroom games. No student accounts or storage.
export const BATTLE_MODES = Object.freeze({
  race: { label: 'スピードバトル', description: '同じ英文を同じ順番で解き、得点を競う' },
  coop: { label: '協力チャレンジ', description: '全員の正解数を合計して目標達成を目指す' },
  teams: { label: 'チーム対抗 2 vs 2', description: '4人で2チームに分かれ、合計得点を競う' },
});

export const MAX_PLAYERS = 4;
export const MAX_BATTLE_QUESTIONS = 50;

export function getBattleLevel(problem) {
  if (Number.isInteger(Number(problem?.level)) && Number(problem.level) >= 1 && Number(problem.level) <= 3) {
    return Number(problem.level);
  }
  const match = String(problem?.id || '').match(/-([bia])-\d+$/i);
  return match ? { b: 1, i: 2, a: 3 }[match[1].toLowerCase()] : 1;
}

export function cleanPlayerName(input, fallback = 'プレイヤー') {
  const name = String(input ?? '').replace(/[\u0000-\u001F\u007F<>]/g, '').trim().slice(0, 18);
  return name || fallback;
}

// IDs are sent to peers, not whole exercises or answer keys. Each client looks
// up the same items in its own trusted copy of the catalog.
export function createBattlePlan(course, level, requestedCount, mode = 'race') {
  if (!course || !Array.isArray(course.problems) || !BATTLE_MODES[mode] ||
      !/^[a-zA-Z0-9_-]{1,80}$/.test(String(course.categoryId || '')) ||
      ['custom', 'review', 'grammar_mix'].includes(course.categoryId)) return null;
  if (!(level === 'all' || [1, 2, 3].includes(level))) return null;
  const candidates = course.problems.filter(p =>
    typeof p.id === 'string' && p.id.length <= 100 &&
    (level === 'all' || getBattleLevel(p) === level));
  const seen = new Set();
  const pool = candidates.filter(p => { if (seen.has(p.id)) return false; seen.add(p.id); return true; });
  if (!pool.length) return null;
  const limit = requestedCount === 'all' ? pool.length : Number(requestedCount);
  if (!Number.isInteger(limit) || limit < 1) return null;
  const count = Math.min(MAX_BATTLE_QUESTIONS, limit, pool.length);
  // One shuffle by the host, then an identical problem-ID order on each device.
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const random = typeof globalThis.crypto?.getRandomValues === 'function'
      ? globalThis.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296
      : Math.random();
    const j = Math.floor(random * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return {
    version: 1,
    sessionId: String(Date.now()) + '-' + Math.floor(Math.random() * 1000000),
    categoryId: course.categoryId,
    level,
    mode,
    problemIds: shuffled.slice(0, count).map(p => p.id),
  };
}

export function resolveBattlePlan(plan, categories) {
  if (!plan || plan.version !== 1 || !BATTLE_MODES[plan.mode] ||
      typeof plan.categoryId !== 'string' ||
      !(plan.level === 'all' || [1, 2, 3].includes(plan.level)) ||
      typeof plan.sessionId !== 'string' || plan.sessionId.length > 60 ||
      !Array.isArray(plan.problemIds) || plan.problemIds.length < 1 ||
      plan.problemIds.length > MAX_BATTLE_QUESTIONS) return null;
  const category = categories.find(c => c.categoryId === plan.categoryId);
  if (!category || !Array.isArray(category.problems)) return null;
  const uniqueIds = new Set(plan.problemIds);
  if (uniqueIds.size !== plan.problemIds.length) return null;
  const matching = new Map(category.problems.map(p => [p.id, p]));
  if (!plan.problemIds.every(id =>
    typeof id === 'string' && id.length <= 100 && matching.has(id) &&
    (plan.level === 'all' || getBattleLevel(matching.get(id)) === plan.level))) return null;
  return { category, problemIds: [...plan.problemIds] };
}

export const teamForSeat = seat => Number(seat) % 2 === 0 ? 'A' : 'B';

export function calculateBattleBoard(playersData, mode, questions) {
  const players = Object.values(playersData || {}).filter(p => p && typeof p.id === 'string');
  const totalSolved = players.reduce((sum, p) => sum + Math.max(0, Number(p.correctCount) || 0), 0);
  const possible = players.length * Math.max(0, Number(questions) || 0);
  const teams = { A: { score: 0, members: [] }, B: { score: 0, members: [] } };
  players.forEach(p => {
    const team = p.team === 'B' ? 'B' : 'A';
    teams[team].score += Math.max(0, Number(p.score) || 0);
    teams[team].members.push(p.name);
  });
  return {
    players: [...players].sort((a, b) => (b.score || 0) - (a.score || 0)),
    totalSolved, possible, teams,
    finishedCount: players.filter(p => p.finished).length,
    mode,
  };
}
