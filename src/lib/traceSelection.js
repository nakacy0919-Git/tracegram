// Central word-selection rules shared by sentence games and long-form tracing.
export const normalizedIndices = (values) => [...new Set(values || [])].sort((a,b) => a-b);

export function updateTokenSelection(previous, index, mode) {
  if (!Number.isInteger(index) || index < 0) return previous;
  const selected = previous.includes(index);
  if (mode === 'select' && !selected) return normalizedIndices([...previous, index]);
  if (mode === 'deselect' && selected) return previous.filter(value => value !== index);
  return previous;
}

export function sameSelectedIndices(left, right) {
  const a = normalizedIndices(left);
  const b = normalizedIndices(right);
  return a.length === b.length && a.every((value, i) => value === b[i]);
}
