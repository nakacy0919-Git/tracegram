// Shared low-latency sound for grammar and reading tracing.
// Reuse one AudioContext so long lessons do not exhaust browser audio resources.
let audioContext = null;

export function playTraceSound(count, isDeselect = false) {
  if (typeof window === 'undefined') return;
  try {
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) return;
    if (!audioContext || audioContext.state === 'closed') audioContext = new Context();
    const context = audioContext;
    if (context.state === 'suspended') context.resume().catch(() => {});
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.type = 'triangle';
    const start = context.currentTime;
    oscillator.frequency.setValueAtTime((isDeselect ? 300 : 440) + count * 30, start);
    gain.gain.setValueAtTime(0.08, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.09);
    oscillator.start(start);
    oscillator.stop(start + 0.1);
    oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
  } catch { /* Sound failures should never interrupt learning. */ }
}
