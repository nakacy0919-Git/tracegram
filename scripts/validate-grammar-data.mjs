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
// A course file existing in the repo is not enough: it must also be registered
// in the learner catalog so the exercises remain discoverable.
const registry = readFileSync(join(process.cwd(), 'src/data/mockData.js'), 'utf8');
const imports = [...registry.matchAll(/import\s*\{\s*(\w+)\s*\}\s*from\s*'\.\/categories\/([^']+)'/g)]
  .map(match => ({ variable: match[1], file: match[2] + '.js' }));
const uniqueImports = new Set(imports.map(item => item.file));
if (imports.length !== files.length || uniqueImports.size !== files.length) {
  errors.push(`Catalog imports ${uniqueImports.size} exercise files but disk has ${files.length}.`);
}
for (const file of files) {
  if (!uniqueImports.has(file)) errors.push(`${file}: file exists but is not imported in the catalog`);
}
for (const item of imports) {
  const reference = new RegExp('problems:\\s*' + item.variable + '\\.problems', 'g');
  const count = [...registry.matchAll(reference)].length;
  if (count !== 1) errors.push(`${item.file}: expected one catalog registration, found ${count}`);
}
const ids = [...registry.matchAll(/categoryId:\s*'([^']+)'/g)].map(match => match[1]);
if (new Set(ids).size !== imports.length || ids.length !== imports.length) {
  errors.push('Catalog categoryId values must be unique and registered once per exercise file.');
}

if (errors.length) {
  console.error('Grammar data validation failed:\n' + errors.join('\n'));
  process.exit(1);
}
console.log(`Grammar data checked: ${checked} problems across ${files.length} files.`);
