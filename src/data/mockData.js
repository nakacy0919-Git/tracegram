import { subjectCategory } from './categories/subject';
import { verbCategory } from './categories/verb';
import { objectCategory } from './categories/object';
import { complementCategory } from './categories/complement';

// 作成した4つのカテゴリデータをまとめてアプリに渡す
export const PROBLEM_SETS = [
  subjectCategory,
  verbCategory,
  objectCategory,
  complementCategory
];