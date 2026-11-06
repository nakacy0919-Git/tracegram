import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const folder = join(process.cwd(), 'src/data/categories');
const files = readdirSync(folder).filter(name => name.endsWith('.js'));
let checked = 0;
const errors = [];
const problemsRegex = /tokens:\s*\[([\s\S]*?)\]\s*,\s*targetIndices:\s*\[([\s\S]*?)\]/g;
const stringRegex = /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g;

for (const file of files) {
  const source = readFileSync(join(folder, file), 'utf8');
  const tokenFields = (source.match(/\btokens:\s*\[/g) || []).length;
  let matched = 0;
  for (const match of source.matchAll(problemsRegex)) {
    matched++;
    checked++;
    const tokenCount = (match[1].match(stringRegex) || []).length;
    const targetIndices = match[2].split(',').map(s => Number(s.trim()));
    const invalid = !tokenCount || !targetIndices.length ||
      targetIndices.some(n => !Number.isInteger(n) || n < 0 || n >= tokenCount) ||
      new Set(targetIndices).size !== targetIndices.length;
    if (invalid) errors.push(`${file} problem #${matched}: invalid indices ${JSON.stringify(targetIndices)} for ${tokenCount} tokens`);
  }
  if (tokenFields !== matched) {
    errors.push(`${file}: ${tokenFields} token fields but only ${matched} validated targetIndices`);
  }
}
if (errors.length) {
  console.error('Grammar data validation failed:\n' + errors.join('\n'));
  process.exit(1);
}
console.log(`Grammar data checked: ${checked} problems across ${files.length} files.`);
