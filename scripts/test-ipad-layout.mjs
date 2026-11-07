// Static regression checks for the iPad viewport layout contract.
// These guard against the exact CSS combinations that caused phantom space
// and horizontal overflow after rotating the screen.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const css = read('src/app/globals.css');
const page = read('src/app/page.js');
const menu = read('src/components/student/MenuScreen.jsx');
const summary = read('src/components/student/SummaryScreen.jsx');
const game = read('src/components/student/GameScreen.jsx');
const reading = read('src/components/student/ReadingPane.jsx');
const splash = read('src/components/student/OpeningSplash.jsx');

assert.match(page, /tg-app-shell/, 'app has one dynamic viewport shell');
assert.match(page, /tg-app-main/, 'main is a flex child that can shrink');
assert.doesNotMatch(page, /className="min-h-screen/, 'outer shell must not also allocate 100vh');

for (const [path, content] of Object.entries({
  menu, game,
  title: read('src/components/student/TitleScreen.jsx'),
  lobby: read('src/components/student/LobbyScreen.jsx'),
  results: read('src/components/student/ResultScreen.jsx'),
})) {
  assert.doesNotMatch(content, /min-h-\[100dvh\]/, path + ': nested viewport minimum is forbidden');
}
assert.match(css, /\.tg-app-shell\s*\{[^}]*min-height:\s*100dvh/s);
assert.match(css, /\.tg-app-main\s*\{[^}]*min-height:\s*0/s);
assert.match(css, /\.tg-reading-screen\s*\{[^}]*height:\s*100dvh/s);
assert.match(css, /\.tg-reading-split\s*\{[^}]*min-height:\s*0/s);
assert.match(css, /\.tg-reading-pane\s*\{[^}]*min-height:\s*0/s);
assert.match(css, /\.tg-task-pane\s*\{[^}]*min-height:\s*0/s);
assert.match(css, /\.tg-reading-task-inner\s*\{[^}]*overflow-y:\s*auto/s);
assert.match(css, /@media \(min-width:\s*900px\) and \(orientation:\s*landscape\)/);
assert.match(css, /\.tg-reading-pane\s*\{\s*flex:\s*0 0 calc\(var\(--left-pane-width,\s*50%\) - 6px\)/s);
assert.match(css, /\.tg-reading-split\.is-swapped\s*\{[^}]*column-reverse/s);
assert.match(css, /\.tg-reading-split\.is-swapped\s*\{[^}]*row-reverse/s);
assert.match(css, /@media \(orientation:\s*landscape\) and \(max-height:\s*760px\)/);
assert.match(css, /tg-recovery-modal[\s\S]*max-height:\s*calc\(100dvh - 32px\)/);
assert.match(summary, /tg-reading-screen/);
assert.match(summary, /tg-reading-split/);
assert.match(summary, /tg-reading-pane/);
assert.match(summary, /tg-task-pane/);
assert.match(summary, /tg-reading-task-inner/);
assert.doesNotMatch(summary, /h-\[42dvh\]|min-h-\[52dvh\]|lg:w-\[var\(--left-pane-width\)\]/);
assert.match(reading, /overflow-y-auto/, 'passage scrolls independently');
assert.match(game, /tg-game-workspace/);
assert.match(game, /tg-game-content/);
assert.match(game, /tg-success-medallion/, 'success uses a circular glossy medal instead of drawn marker');
assert.match(game, /tg-success-text/, 'Correct text is centered in the success medal');
assert.doesNotMatch(game, /M39 88 C22 48 104 19/, 'old hand-drawn oval is removed');
assert.match(css, /\\.tg-success-medallion\\s*\\{[\\s\\S]*?aspect-ratio:\\s*1\\s*\\/\\s*1/, 'success medal stays perfectly circular at every screen size');
assert.match(css, /\\.tg-success-text\\s*\\{[\\s\\S]*?linear-gradient/, 'Correct lettering uses a refined green gradient');
assert.match(css, /\\.tg-success-medallion::before\\s*\\{/, 'reflective glossy highlight is present');

assert.match(game, /tg-recovery-overlay/);
assert.match(splash, /tg-opening-content/);
assert.match(splash, /tg-opening-logo/);

// Brand-matched opening must remain notebook-like, responsive, and animated.
// Avoid reverting to the old green/copper colors that clash with the logo.
assert.match(splash, /tracegramlogo\.png/, 'use the original brand logo');
assert.match(splash, /tracegram-ink-gradient/, 'animated traced line carries the brand colors');
assert.match(splash, /useReducedMotion/, 'opening motion respects reduced-motion settings');
assert.match(splash, /tg-opening-paper/, 'notebook paper is present in the opening');
assert.match(css, /\.tg-opening-paper\s*\{[^}]*repeating-linear-gradient/s,
  'the welcome canvas retains notebook ruling');
assert.match(css, /\.tg-opening-paper::after\s*\{[^}]*radial-gradient/s,
  'notebook binder holes remain decorative and noninteractive');
assert.match(css, /\.tg-logo-halo\s*\{[^}]*conic-gradient/s,
  'logo glow uses cyan, blue and violet rather than green');
assert.doesNotMatch(css, /#334d47\s+0%,\s*#1d302d/, 'old forest-green splash background is gone');
assert.match(css, /\.tg-home-paper\s*\{/, 'landing page echoes the opening paper palette');


// Reading recovery must be a wide, scrollable dialog on tablets with an
// actual gauge, a dedicated transcript field, and icon-only example audio.
const oral = read('src/components/student/PronunciationMission.jsx');
assert.match(game, /max-w-\[980px\]/, 'recovery dialog uses the available width on iPad/PC');
assert.match(game, /overflow-y-auto overscroll-contain/, 'recovery dialog scrolls on short landscape screens');
assert.match(oral, /function AccuracyGauge\(/, 'accuracy uses a dedicated semi-circle SVG gauge');
assert.match(oral, /strokeDasharray/, 'meter fill uses the actual accuracy value');
assert.match(oral, /文字起こし・認識結果/, 'separate speech transcription pane exists');
assert.match(oral, /md:grid-cols-\[minmax\(0,0\.95fr\)_minmax\(0,1\.05fr\)\]/,
  'accuracy and transcription split into two columns on iPad');
assert.match(oral, /aria-label="お手本音声を聞く"/, 'speaker icon-only button stays accessible');
assert.doesNotMatch(oral, /ゆっくり再生|setSlow|rate = slow/, 'unwanted slow playback controls are gone');
assert.match(oral, /onSkip/, 'the skip route still allows retrying the original tracing question');


console.log('iPad layout checks passed: one viewport shell, rotation-aware panes, safe inner scrolling and compact landscape game.');
