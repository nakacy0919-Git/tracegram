// 各ジャンルのデータをインポート
import { subjectCategory } from './categories/subject';
import { verbCategory } from './categories/verb';           // 新規追加
import { objectCategory } from './categories/object';       // 新規追加
import { complementCategory } from './categories/complement'; // 新規追加
import { relativeClauseCategory } from './categories/relativeClause';
import { participleCategory } from './categories/participle';

// アプリ全体に提供する問題セットの配列（表示したい順番に並べます）
export const PROBLEM_SETS = [
  subjectCategory,
  verbCategory,           // 追加
  objectCategory,         // 追加
  complementCategory,     // 追加
  relativeClauseCategory,
  participleCategory
];