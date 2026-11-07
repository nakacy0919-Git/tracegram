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
assert.match(game, /tg-recovery-overlay/);
assert.match(splash, /tg-opening-content/);
assert.match(splash, /tg-opening-logo/);

console.log('iPad layout checks passed: one viewport shell, rotation-aware panes, safe inner scrolling and compact landscape game.');
