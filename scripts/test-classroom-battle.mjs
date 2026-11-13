import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  createBattlePlan, resolveBattlePlan, calculateBattleBoard,
  cleanPlayerName, MAX_BATTLE_QUESTIONS, teamForSeat,
} from '../src/lib/battleSession.mjs';

const course = {
  categoryId: 'verb_tense', title: 'Verb Tense',
  problems: Array.from({ length: 24 }, (_, index) => ({
    id: 'test-b-' + (index + 1), level: 1, tokens: ['We', 'study'], targetIndices: [1],
  })),
};
const catalog = [course];
const plan = createBattlePlan(course, 1, 10, 'race');
assert.ok(plan);
assert.equal(plan.problemIds.length, 10);
assert.equal(new Set(plan.problemIds).size, 10);
assert.deepEqual(resolveBattlePlan(plan, catalog)?.problemIds, plan.problemIds,
  'all devices must use the host-provided order');
assert.equal(createBattlePlan(course, 1, 'all', 'coop')?.problemIds.length, 24);
assert.equal(createBattlePlan(course, 1, 999, 'teams')?.problemIds.length, 24);
assert.equal(createBattlePlan({ ...course, categoryId: 'custom' }, 1, 10, 'race'), null);
assert.equal(createBattlePlan(course, 2, 10, 'race'), null);
assert.equal(createBattlePlan(course, 1, 10, 'invalid'), null);
assert.equal(createBattlePlan(course, 1, 10, 'teams')?.mode, 'teams');
assert.equal(MAX_BATTLE_QUESTIONS, 50);

const duplicate = { ...plan, problemIds: [plan.problemIds[0], plan.problemIds[0]] };
const unknown = { ...plan, problemIds: ['not-in-catalog'] };
const outOfRange = { ...plan, problemIds: Array.from({length: 51}, (_, i) => 'x' + i) };
const manipulated = { ...plan, mode: 'admin' };
for (const test of [duplicate, unknown, outOfRange, manipulated]) {
  assert.equal(resolveBattlePlan(test, catalog), null, 'reject invalid peer messages');
}
assert.equal(cleanPlayerName(' <Alice> '), 'Alice');
assert.equal(cleanPlayerName('   ', 'ゲスト'), 'ゲスト');
assert.equal(cleanPlayerName('A'.repeat(50)).length, 18);
assert.deepEqual([0,1,2,3].map(teamForSeat), ['A','B','A','B']);

const players = {
  a: {id:'a',name:'A',score:2000,correctCount:2,seat:0,team:'A',finished:true},
  b: {id:'b',name:'B',score:3000,correctCount:3,seat:1,team:'B',finished:false},
  c: {id:'c',name:'C',score:4000,correctCount:4,seat:2,team:'A',finished:true},
  d: {id:'d',name:'D',score:1000,correctCount:1,seat:3,team:'B',finished:true},
};
const board = calculateBattleBoard(players, 'teams', 5);
assert.equal(board.teams.A.score, 6000);
assert.equal(board.teams.B.score, 4000);
assert.equal(board.totalSolved, 10);
assert.equal(board.possible, 20);
assert.equal(board.finishedCount, 3);
assert.equal(board.players[0].id, 'c');

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const student = read('src/components/StudentMode.jsx');
const trace = read('src/hooks/useTrace.js');
const room = read('src/components/student/LobbyScreen.jsx');
const multiplayer = read('src/hooks/useMultiplayer.js');
const qr = read('public/share-qr.js');
assert.match(student, /resolveBattlePlan\(battleConfig, categories\)/);
assert.match(student, /startBattle\(plan\)/);
assert.match(trace, /orderedIds\.map\(id => byId\.get\(id\)\)/);
assert.match(room, /data-share-qr data-share-url=\{inviteUrl\}/);
assert.match(qr, /candidate\.origin === window\.location\.origin/);
assert.match(multiplayer, /ROOM_REJECTED/);
assert.match(multiplayer, /SYNC_SCORES/);
assert.match(multiplayer, /BATTLE_START/);
assert.match(multiplayer, /returnToLobby/);
console.log('Classroom battle checks passed: catalog synchronization, scoring, team balance, invite security and UI wiring.');
