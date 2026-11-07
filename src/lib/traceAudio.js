// Shared low-latency sound for grammar and reading tracing.
// Reuse one AudioContext so long lessons do not exhaust browser audio resources.
let audioContext = null;

const getAudio = () => {
  if (typeof window === 'undefined') return null;
  const Context = window.AudioContext || window.webkitAudioContext;
  if (!Context) return null;
  if (!audioContext || audioContext.state === 'closed') audioContext = new Context();
  if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
  return audioContext;
};

export function playTraceSound(count, isDeselect = false) {
  if (typeof window === 'undefined') return;
  try {
    const context = getAudio();
    if (!context) return;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.type = 'triangle';
    const start = context.currentTime;
    oscillator.frequency.setValueAtTime((isDeselect ? 300 : 440) + count * 30, start);
    gain.gain.setValueAtTime(0.042, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.09);
    oscillator.start(start);
    oscillator.stop(start + 0.1);
    oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
  } catch { /* Sound failures should never interrupt learning. */ }
}


/**
 * Short original success chime: rising warm notes, finished by a soft upper tone.
 * Unlike a new AudioContext per answer, this reuses the context already unlocked
 * by the learner's touch gesture (important for iPad Safari and Chrome on iPad).
 */
export function playCorrectChime() {
  try {
    const context = getAudio();
    if (!context) return;
    const start = context.currentTime + 0.015;
    const notes = [
      { frequency: 523.25, delay: 0, duration: 0.36, gain: 0.065 },
      { frequency: 659.25, delay: 0.115, duration: 0.38, gain: 0.071 },
      { frequency: 783.99, delay: 0.235, duration: 0.44, gain: 0.074 },
      { frequency: 1046.50, delay: 0.405, duration: 0.51, gain: 0.057 },
    ];
    for (const note of notes) {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const at = start + note.delay;
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(note.frequency, at);
      oscillator.frequency.setTargetAtTime(note.frequency * 1.004, at + 0.08, 0.12);
      gain.gain.setValueAtTime(0.0001, at);
      gain.gain.exponentialRampToValueAtTime(note.gain, at + 0.018);
      gain.gain.exponentialRampToValueAtTime(0.0001, at + note.duration);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(at);
      oscillator.stop(at + note.duration + 0.025);
      oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
    }
  } catch { /* Sound unavailable: the visual celebration remains functional. */ }
}
