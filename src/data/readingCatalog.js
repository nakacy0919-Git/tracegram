// 全長文教材の唯一の登録先。新教材追加時はこの配列だけ更新する。
import { fast_fashion_L1 } from './summary/fast_fashion/level1_a2.js';
import { fast_fashion_L2 } from './summary/fast_fashion/level2_b1.js';
import { fast_fashion_L3 } from './summary/fast_fashion/level3_b2.js';
import { fast_fashion_L4 } from './summary/fast_fashion/level4_c1.js';
import { nature_L1 } from './summary/nature/level_a2.js';
import { nature_L2 } from './summary/nature/level2_b1.js';
import { nature_L3 } from './summary/nature/level3_b2.js';
import { nature_L4 } from './summary/nature/level4_c1.js';

const levels = (items) => items.map((data, index) => ({
  num: index + 1,
  name: ['A2 初級', 'B1 中級', 'B2 上級', 'C1 発展'][index],
  data,
}));

export const READING_ARTICLES = [
  {
    id: 'fast_fashion',
    title: 'ファストファッションの光と影',
    englishTitle: 'The Hidden Impact of Fast Fashion',
    description: '服の生産・消費と環境、働く人々を考える',
    topics: ['環境', '経済', '社会', '倫理'],
    levels: levels([fast_fashion_L1, fast_fashion_L2, fast_fashion_L3, fast_fashion_L4]),
  },
  {
    id: 'ocean_plastic',
    title: '海洋プラスチックの脅威',
    englishTitle: 'The Threat of Marine Plastic Pollution',
    description: '海洋汚染と食物連鎖、私たちの暮らしへの影響',
    topics: ['環境', '科学', '国際社会'],
    levels: levels([nature_L1, nature_L2, nature_L3, nature_L4]),
  },
];
