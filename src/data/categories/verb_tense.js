export const verbTenseCategory = {
  categoryId: "verb_tense",
  // ▼ タイトルと説明文を生徒向けに修正
  title: "動詞のカタマリ（完了・進行形）",
  description: "have been studying のように、2語以上でセットになって働く「動詞(V)」を正確にまとめてなぞろう！",
  problems: [
    { 
      id: "verbTense-b-1", 
      tokens: ["I", "am", "reading", "a", "book."], 
      targetIndices: [1, 2], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【初級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "私は本を読んでいます。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "progressive", "present_participle"] 
    },
    { 
      id: "verbTense-b-2", 
      tokens: ["She", "will", "go", "to", "Tokyo."], 
      targetIndices: [1, 2], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【初級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼女は東京に行くつもりです。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb"] 
    },
    { 
      id: "verbTense-b-3", 
      tokens: ["He", "has", "finished", "his", "work."], 
      targetIndices: [1, 2], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【初級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼は仕事を終えました。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "past_participle"] 
    },
    { 
      id: "verbTense-b-4", 
      tokens: ["We", "are", "playing", "tennis."], 
      targetIndices: [1, 2], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【初級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "私たちはテニスをしています。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "progressive", "present_participle"] 
    },
    { 
      id: "verbTense-b-5", 
      tokens: ["They", "have", "lived", "here."], 
      targetIndices: [1, 2], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【初級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼らはここに住んでいます。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "past_participle"] 
    },
    { 
      id: "verbTense-b-6", 
      tokens: ["I", "can", "swim", "fast."], 
      targetIndices: [1, 2], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【初級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "私は速く泳ぐことができます。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb"] 
    },
    { 
      id: "verbTense-b-7", 
      tokens: ["She", "is", "washing", "her", "car."], 
      targetIndices: [1, 2], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【初級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼女は車を洗っています。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "progressive", "present_participle"] 
    },
    { 
      id: "verbTense-b-8", 
      tokens: ["He", "was", "watching", "TV."], 
      targetIndices: [1, 2], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【初級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼はテレビを見ていました。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "progressive", "present_participle"] 
    },
    { 
      id: "verbTense-b-9", 
      tokens: ["You", "must", "study", "hard."], 
      targetIndices: [1, 2], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【初級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "あなたは一生懸命勉強しなければなりません。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb"] 
    },
    { 
      id: "verbTense-b-10", 
      tokens: ["It", "will", "rain", "tomorrow."], 
      targetIndices: [1, 2], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【初級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "明日は雨が降るでしょう。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb"] 
    },
    { 
      id: "verbTense-b-11", 
      tokens: ["They", "were", "sleeping", "then."], 
      targetIndices: [1, 2], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【初級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼らはその時眠っていました。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "progressive", "present_participle"] 
    },
    { 
      id: "verbTense-b-12", 
      tokens: ["I", "have", "lost", "my", "key."], 
      targetIndices: [1, 2], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【初級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "私は鍵をなくしてしまいました。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "past_participle"] 
    },
    { 
      id: "verbTense-b-13", 
      tokens: ["She", "should", "see", "a", "doctor."], 
      targetIndices: [1, 2], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【初級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼女は医者に診てもらうべきです。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb"] 
    },
    { 
      id: "verbTense-b-14", 
      tokens: ["We", "are", "waiting", "for", "him."], 
      targetIndices: [1, 2], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【初級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "私たちは彼を待っています。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "progressive", "present_participle"] 
    },
    { 
      id: "verbTense-b-15", 
      tokens: ["He", "has", "left", "the", "room."], 
      targetIndices: [1, 2], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【初級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼は部屋を出てしまいました。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "past_participle"] 
    },
    { 
      id: "verbTense-i-1", 
      tokens: ["I", "have", "been", "studying", "English", "for", "two", "hours."], 
      targetIndices: [1, 2, 3], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【中級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "私は2時間ずっと英語を勉強しています。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "progressive", "past_participle", "present_participle"] 
    },
    { 
      id: "verbTense-i-2", 
      tokens: ["The", "letter", "has", "been", "written", "by", "him."], 
      targetIndices: [2, 3, 4], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【中級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "その手紙は彼によって書かれました。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "passive", "past_participle"] 
    },
    { 
      id: "verbTense-i-3", 
      tokens: ["She", "will", "be", "waiting", "at", "the", "station."], 
      targetIndices: [1, 2, 3], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【中級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼女は駅で待っていることでしょう。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "progressive", "present_participle"] 
    },
    { 
      id: "verbTense-i-4", 
      tokens: ["He", "may", "have", "missed", "the", "train."], 
      targetIndices: [1, 2, 3], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【中級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼はその電車に乗り遅れたのかもしれません。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "past_participle"] 
    },
    { 
      id: "verbTense-i-5", 
      tokens: ["We", "had", "been", "playing", "soccer", "before", "it", "rained."], 
      targetIndices: [1, 2, 3], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【中級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "雨が降るまで私たちはサッカーをしていました。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "progressive", "past_participle", "present_participle"] 
    },
    { 
      id: "verbTense-i-6", 
      tokens: ["The", "building", "is", "being", "built", "now."], 
      targetIndices: [2, 3, 4], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【中級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "その建物は現在建設中です。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "progressive", "passive", "present_participle", "past_participle"] 
    },
    { 
      id: "verbTense-i-7", 
      tokens: ["You", "should", "have", "told", "me", "earlier."], 
      targetIndices: [1, 2, 3], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【中級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "あなたは私にもっと早く言うべきでした。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "past_participle"] 
    },
    { 
      id: "verbTense-i-8", 
      tokens: ["She", "must", "have", "forgotten", "the", "promise."], 
      targetIndices: [1, 2, 3], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【中級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼女はその約束を忘れてしまったに違いありません。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "past_participle"] 
    },
    { 
      id: "verbTense-i-9", 
      tokens: ["They", "will", "have", "finished", "the", "work", "by", "tomorrow."], 
      targetIndices: [1, 2, 3], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【中級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼らは明日までにはその仕事を終えているでしょう。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "past_participle"] 
    },
    { 
      id: "verbTense-i-10", 
      tokens: ["I", "cannot", "have", "said", "such", "a", "thing."], 
      targetIndices: [1, 2, 3], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【中級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "私がそんなことを言ったはずがありません。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "negative", "perfect_tense", "past_participle"] 
    },
    { 
      id: "verbTense-i-11", 
      tokens: ["The", "problem", "has", "been", "solved", "at", "last."], 
      targetIndices: [2, 3, 4], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【中級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "その問題はついに解決されました。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "passive", "past_participle"] 
    },
    { 
      id: "verbTense-i-12", 
      tokens: ["He", "might", "have", "been", "sleeping", "at", "that", "time."], 
      targetIndices: [1, 2, 3, 4], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【中級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼はその時眠っていたのかもしれません。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "progressive", "past_participle", "present_participle"] 
    },
    { 
      id: "verbTense-i-13", 
      tokens: ["I", "have", "been", "looking", "for", "my", "glasses."], 
      targetIndices: [1, 2, 3], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【中級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "私はずっとメガネを探しています。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "progressive", "past_participle", "present_participle"] 
    },
    { 
      id: "verbTense-i-14", 
      tokens: ["The", "cake", "had", "been", "eaten", "by", "my", "brother."], 
      targetIndices: [2, 3, 4], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【中級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "そのケーキは兄によって食べられてしまっていた。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "passive", "past_participle"] 
    },
    { 
      id: "verbTense-i-15", 
      tokens: ["The", "door", "must", "be", "kept", "closed."], 
      targetIndices: [2, 3, 4], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【中級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "ドアは閉めておかなければなりません。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "passive", "past_participle"] 
    },
    { 
      id: "verbTense-a-1", 
      tokens: ["The", "project", "will", "have", "been", "completed", "by", "next", "month."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【上級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "そのプロジェクトは来月までには完了しているだろう。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "passive", "past_participle"] 
    },
    { 
      id: "verbTense-a-2", 
      tokens: ["The", "concert", "must", "have", "been", "canceled", "due", "to", "the", "storm."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【上級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "そのコンサートは嵐のためにキャンセルされたに違いない。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "passive", "past_participle"] 
    },
    { 
      id: "verbTense-a-3", 
      tokens: ["She", "might", "have", "been", "being", "followed", "by", "someone."], 
      targetIndices: [1, 2, 3, 4, 5], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【上級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼女は誰かにつけられていたのかもしれない。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "progressive", "passive", "past_participle", "present_participle"] 
    },
    { 
      id: "verbTense-a-4", 
      tokens: ["By", "the", "time", "you", "return,", "I", "will", "have", "been", "sleeping."], 
      targetIndices: [6, 7, 8, 9], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【上級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "あなたが戻る頃には、私はすでに眠っていることでしょう。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "progressive", "past_participle", "present_participle"] 
    },
    { 
      id: "verbTense-a-5", 
      tokens: ["The", "secret", "has", "been", "kept", "hidden", "for", "many", "years."], 
      targetIndices: [2, 3, 4], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【上級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "その秘密は何年もの間、隠されたままになっている。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "passive", "past_participle"] 
    },
    { 
      id: "verbTense-a-6", 
      tokens: ["The", "old", "bridge", "ought", "to", "have", "been", "repaired", "earlier."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【上級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "その古い橋はもっと早く修理されるべきだった。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "infinitive", "perfect_tense", "passive", "past_participle"] 
    },
    { 
      id: "verbTense-a-7", 
      tokens: ["She", "would", "have", "been", "waiting", "for", "hours."], 
      targetIndices: [1, 2, 3, 4], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【上級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼女は何時間も待っていただろうに。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "progressive", "past_participle", "present_participle"] 
    },
    { 
      id: "verbTense-a-8", 
      tokens: ["He", "should", "have", "been", "studying", "harder", "for", "the", "exam."], 
      targetIndices: [1, 2, 3, 4], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【上級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼は試験に向けてもっと一生懸命勉強しているべきだった。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "progressive", "past_participle", "present_participle"] 
    },
    { 
      id: "verbTense-a-9", 
      tokens: ["The", "money", "must", "have", "been", "stolen", "by", "the", "thief."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【上級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "そのお金は泥棒によって盗まれたに違いない。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "passive", "past_participle"] 
    },
    { 
      id: "verbTense-a-10", 
      tokens: ["We", "may", "have", "been", "making", "a", "big", "mistake."], 
      targetIndices: [1, 2, 3, 4], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【上級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "私たちは大きな間違いを犯していたのかもしれない。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "progressive", "past_participle", "present_participle"] 
    },
    { 
      id: "verbTense-a-11", 
      tokens: ["The", "work", "could", "have", "been", "done", "more", "carefully."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【上級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "その仕事はもっと注意深く行われることもできただろうに。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "passive", "past_participle"] 
    },
    { 
      id: "verbTense-a-12", 
      tokens: ["Had", "I", "known", "the", "truth,", "I", "would", "have", "told", "you."], 
      targetIndices: [6, 7, 8], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【上級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "もし真実を知っていたら、あなたに話していただろう。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "past_participle"] 
    },
    { 
      id: "verbTense-a-13", 
      tokens: ["By", "next", "year,", "they", "will", "have", "been", "married", "for", "ten", "years."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【上級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "来年で彼らは結婚して10年になるだろう。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "passive", "past_participle"] 
    },
    { 
      id: "verbTense-a-14", 
      tokens: ["He", "cannot", "have", "been", "working", "all", "night."], 
      targetIndices: [1, 2, 3, 4], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【上級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "彼が一晩中働いていたはずがない。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "negative", "perfect_tense", "progressive", "past_participle", "present_participle"] 
    },
    { 
      id: "verbTense-a-15", 
      tokens: ["The", "lost", "dog", "must", "have", "been", "wandering", "around", "the", "town."], 
      targetIndices: [3, 4, 5, 6], 
      targetRole: "V (助動詞・完了形・進行形のカタマリ)", 
      hint: "【上級】時制や相を作っている、動詞（V）のカタマリのすべてをなぞってください。", 
      translation: "その迷子になった犬は町をさまよっていたに違いない。", 
      modifiedIndices: [],
      grammarPoints: ["auxiliary_verb", "perfect_tense", "progressive", "past_participle", "present_participle"] 
    }
  ]
};