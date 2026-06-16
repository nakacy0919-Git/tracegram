// ==========================================
// 1. 作成した全ファイルをインポート（実際のファイル名に合わせました！）
// ==========================================
import { basicFindVerbCategory } from './categories/basic_find_verb';
import { basicRemoveMCategory } from './categories/basic_remove_m';
import { basic5patternsCategory } from './categories/basic_5patterns';

import { subjectCategory } from './categories/subject'; // ← subj_prep の代わり
import { subjVerbalCategory } from './categories/subj_verbal';
import { subjClauseCategory } from './categories/subj_clause';
import { subjItCategory } from './categories/subj_it';
import { subjInversionCategory } from './categories/subj_inversion';

import { verbCategory } from './categories/verb'; // ← verb_transitive の代わり
import { verbTenseCategory } from './categories/verb_tense';
import { verbPassiveCategory } from './categories/verb_passive';
import { verbPhrasalCategory } from './categories/verb_phrasal';

import { objectCategory } from './categories/object'; // ← obj_svoo の代わり
import { objVerbalCategory } from './categories/obj_verbal';
import { objClauseCategory } from './categories/obj_clause';
import { objItCategory } from './categories/obj_it';

import { complementCategory } from './categories/complement'; // ← comp_svc の代わり
import { compSvocCategory } from './categories/comp_svoc';
import { compCausativeCategory } from './categories/comp_causative';
import { compClauseCategory } from './categories/comp_clause';

import { participleCategory } from './categories/participle'; // ← mod_adj の代わり
import { modAdvCategory } from './categories/mod_adv';
import { modParticipleCategory } from './categories/mod_participle';

// ==========================================
// 2. アプリのメニューに表示するリスト
// ==========================================
export const PROBLEM_SETS = [
  // 🔰 0. BASIC (基礎固め)
  { categoryId: 'basic_find_verb', title: 'Step 1: 動詞(V)の発見', description: '長い文の中から「動詞」だけを見つけ出す特訓', problems: basicFindVerbCategory.problems },
  { categoryId: 'basic_remove_m', title: 'Step 2: 飾り(M)を捨てる', description: '前置詞のカタマリをなぞって除外する特訓', problems: basicRemoveMCategory.problems },
  { categoryId: 'basic_5patterns', title: 'Step 3: 5文型とM', description: '残った単語をS・O・Cに仕分ける総仕上げ', problems: basic5patternsCategory.problems },

  // 🟢 1. SUBJECT (主語) マスター
  { categoryId: 'subj_prep', title: 'Sub-1: 前置詞句の修飾', description: 'The boys in the park... のようにMを伴う主語', problems: subjectCategory.problems },
  { categoryId: 'subj_verbal', title: 'Sub-2: 準動詞の主語', description: 'To master English / Playing games... などのカタマリ', problems: subjVerbalCategory.problems },
  { categoryId: 'subj_clause', title: 'Sub-3: 名詞節の主語', description: 'That he is alive / What I need... などの節', problems: subjClauseCategory.problems },
  { categoryId: 'subj_it', title: 'Sub-4: 形式主語 (it)', description: 'It is true that... / It is hard to... などの構文', problems: subjItCategory.problems },
  { categoryId: 'subj_inversion', title: 'Sub-5: 倒置・無生物主語', description: '文頭のMに惑わされず、後ろに隠れたSを見つける特訓', problems: subjInversionCategory.problems },

  // 🟠 2. VERB (動詞) マスター
  { categoryId: 'verb_transitive', title: 'Sub-1: 自動詞と他動詞', description: '目的語をとるかどうかの見極め', problems: verbCategory.problems },
  { categoryId: 'verb_tense', title: 'Sub-2: 動詞のカタマリ（完了・進行形）', description: 'have been studying のように2語以上でセットになる動詞を見抜く', problems: verbTenseCategory.problems },
  { categoryId: 'verb_passive', title: 'Sub-3: 受動態のカタマリ', description: 'is known to / has been made などの受動態', problems: verbPassiveCategory.problems },
  { categoryId: 'verb_phrasal', title: 'Sub-4: 助動詞と群動詞', description: '句動詞 look forward to などを1つのVとしてなぞる', problems: verbPhrasalCategory.problems },

  // 🔵 3. OBJECT (目的語) マスター
  { categoryId: 'obj_svoo', title: 'Sub-1: 第4文型 (O1 / O2)', description: '「誰に(O1)」「何を(O2)」を正確に分ける', problems: objectCategory.problems },
  { categoryId: 'obj_verbal', title: 'Sub-2: 準動詞の目的語', description: '動詞の後に続く to do や ~ing のカタマリ', problems: objVerbalCategory.problems },
  { categoryId: 'obj_clause', title: 'Sub-3: 名詞節の目的語', description: 'that節 や 疑問詞節のカタマリ', problems: objClauseCategory.problems },
  { categoryId: 'obj_it', title: 'Sub-4: 形式目的語 (it)', description: 'find it easy to do のように、後ろの真目的語とリンクさせる', problems: objItCategory.problems },

  // 🟣 4. COMPLEMENT (補語) マスター
  { categoryId: 'comp_svc', title: 'Sub-1: 第2文型 (SVC)', description: '主語の状態・変化を表す形容詞・名詞', problems: complementCategory.problems },
  { categoryId: 'comp_svoc', title: 'Sub-2: 第5文型 (SVOC)', description: '目的語の役職や状態を表す名詞・形容詞', problems: compSvocCategory.problems },
  { categoryId: 'comp_causative', title: 'Sub-3: 知覚・使役動詞の補語', description: 'Oの後にくる 原形不定詞 や 分詞(ing/ed)', problems: compCausativeCategory.problems },
  { categoryId: 'comp_clause', title: 'Sub-4: 補語になる節・句', description: 'The problem is that... / My dream is to...', problems: compClauseCategory.problems },

  // 🟡 5. MODIFIER (修飾語) マスター
  { categoryId: 'mod_adj', title: 'Sub-1: 形容詞のカタマリ', description: '名詞を修飾する分詞・関係詞・同格のthat', problems: participleCategory.problems },
  { categoryId: 'mod_adv', title: 'Sub-2: 副詞のカタマリ', description: '動詞・文全体を修飾する前置詞句や副詞節', problems: modAdvCategory.problems },
  { categoryId: 'mod_participle', title: 'Sub-3: 分詞構文', description: 'Seeing the police... のように現れる副詞句', problems: modParticipleCategory.problems },
];