import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  MIX_PRESETS, MIX_COUNTS, MIX_COURSE_ID,
  getMixPreset, normalizeMixConfig, mixGroups, createMixSession,
  selectBalancedMix, makeMixCourse, getMixProblemLevel
} from '../src/lib/grammarMix.mjs';

const registry = readFileSync(new URL('../src/data/mockData.js', import.meta.url), 'utf8');
const categoryIds = [...registry.matchAll(/categoryId:\s*'([^']+)'/g)].map(m => m[1]);
assert.equal(categoryIds.length, 25, 'all 25 Tracegram data banks must be registered');
assert.equal(new Set(categoryIds).size, 25, 'every category has an independent key');

const fixture = categoryIds.map(id => ({
  categoryId: id,
  title: 'Course ' + id,
  problems: [1, 2, 3].flatMap(level => Array.from({ length: 15 }, (_, k) => ({
    id: `${id}-${['b','i','a'][level-1]}-${k+1}`,
    level,
    tokens: ['She', 'likes', 'English.'],
    targetIndices: [1]
  })))
}));
const withCustom = [...fixture, { categoryId: 'custom', title: 'Teacher', problems: [
  { id: 'custom-example', level: 1, tokens: ['Hello'], targetIndices: [0] }
]}];
const all = getMixPreset('all', withCustom);
assert.equal(all.categoryIds.length, 25);
assert(!all.categoryIds.includes('custom'), 'no teacher or Copeak content in the 1,125-question mix');
assert.deepEqual(all.levels, [1,2,3]);

for (const preset of MIX_PRESETS) {
  const config = getMixPreset(preset.id, fixture);
  assert(config.categoryIds.length >= 4, `${preset.id}: needs multiple categories`);
  assert(config.categoryIds.every(id => categoryIds.includes(id)), `${preset.id}: unknown category`);
  const groups = mixGroups(fixture, config);
  assert.equal(groups.length, config.categoryIds.length);
  assert(groups.every(g => g.problems.every(p => config.levels.includes(p.level))));
}

assert.equal(getMixProblemLevel({ id: 'basic-b-8' }), 1);
assert.equal(getMixProblemLevel({ id: 'basic-i-8' }), 2);
assert.equal(getMixProblemLevel({ id: 'basic-a-8' }), 3);
assert.equal(getMixProblemLevel({ id: 'example-a-9', level: 1 }), 1);

const j1 = getMixPreset('j1', fixture);
assert.deepEqual(j1.levels, [1]);
assert.equal(mixGroups(fixture,j1).every(g => g.problems.length === 15), true);

const selected = normalizeMixConfig({
  presetId:'hs1', categoryIds:['basic_find_verb','basic_5patterns','bad-name','basic_find_verb'],
  levels:[2,2,3,7], count:1000
}, withCustom);
assert.deepEqual(selected.categoryIds,['basic_find_verb','basic_5patterns']);
assert.deepEqual(selected.levels,[2,3]);
assert.equal(selected.count,20, 'unapproved counts fall back to safe default');

const config = { ...getMixPreset('all', withCustom), count:30 };
const groups = mixGroups(withCustom, config);
const questions = selectBalancedMix(groups, 30, () => 0.42);
assert.equal(questions.length,30);
assert.equal(new Set(questions.map(p=>p.id)).size,30);
const counts = Object.values(questions.reduce((acc,p)=>{
  acc[p.sourceCategoryId] = (acc[p.sourceCategoryId] || 0) + 1;
  return acc;
}, {}));
assert(Math.max(...counts) - Math.min(...counts) <= 1, 'round-robin allocation prevents category dominance');
assert(questions.every(p=>p.sourceCategoryId && p.sourceCategoryTitle));

const session=createMixSession(withCustom,config,()=>0.73);
assert(session && session.categoryId===MIX_COURSE_ID);
assert.equal(session.problems.length,30);
assert.equal(new Set(session.problems.map(p=>p.id)).size,30);

const restored=makeMixCourse(withCustom, session.mixConfig);
const lookup=new Map(restored.problems.map(p=>[p.id,p]));
assert(session.problems.every(p=>lookup.has(p.id)),'every session can be reconstructed after a reload');
assert(MIX_COUNTS.every(n=>n>0));

const noQuestions=createMixSession(fixture,{...config,categoryIds:[]});
assert.equal(noQuestions,null, 'invalid selection never starts an empty game');

console.log('Grammar Mix tests: 25 sources, 7 grade/all presets, unique balanced selection, level filtering and resume metadata PASSED');
