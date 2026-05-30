export const subjVerbalCategory = {
  categoryId: "subjVerbal",
  title: "Sub-2: 準動詞の主語",
  description: "To master English / Playing games... などのカタマリが主語になるパターン",
  problems: [
    { 
      id: "subjVerbal-b-1", 
      tokens: ["To", "play", "tennis", "is", "fun."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【初級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "テニスをすることは楽しい。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-b-2", 
      tokens: ["Reading", "books", "is", "interesting."], 
      targetIndices: [0, 1], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【初級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "本を読むことは面白い。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-b-3", 
      tokens: ["To", "study", "English", "is", "important."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【初級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "英語を勉強することは重要だ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-b-4", 
      tokens: ["Swimming", "in", "the", "pool", "is", "fun."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【初級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "プールで泳ぐことは楽しい。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-b-5", 
      tokens: ["To", "speak", "English", "is", "not", "easy."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【初級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "英語を話すことは簡単ではない。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-b-6", 
      tokens: ["Listening", "to", "music", "makes", "me", "happy."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【初級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "音楽を聴くことは私を幸せにする。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-b-7", 
      tokens: ["To", "know", "oneself", "is", "difficult."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【初級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "自分自身を知ることは難しい。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-b-8", 
      tokens: ["Eating", "vegetables", "is", "healthy."], 
      targetIndices: [0, 1], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【初級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "野菜を食べることは健康的だ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-b-9", 
      tokens: ["To", "get", "up", "early", "is", "hard."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【初級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "早く起きることは大変だ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-b-10", 
      tokens: ["Taking", "a", "walk", "is", "refreshing."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【初級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "散歩をすることはさわやかだ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-b-11", 
      tokens: ["To", "help", "others", "is", "a", "good", "thing."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【初級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "他人を助けることは良いことだ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-b-12", 
      tokens: ["Watching", "movies", "is", "my", "hobby."], 
      targetIndices: [0, 1], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【初級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "映画を見ることは私の趣味です。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-b-13", 
      tokens: ["To", "learn", "new", "things", "is", "exciting."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【初級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "新しいことを学ぶのはワクワクする。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-b-14", 
      tokens: ["Playing", "the", "piano", "requires", "practice."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【初級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "ピアノを弾くことは練習を必要とする。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-b-15", 
      tokens: ["To", "eat", "too", "much", "is", "bad."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【初級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "食べすぎることは悪いことだ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-i-1", 
      tokens: ["Mastering", "a", "foreign", "language", "takes", "time."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【中級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "外国語を習得するには時間がかかる。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-i-2", 
      tokens: ["To", "travel", "around", "the", "world", "is", "my", "dream."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【中級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "世界中を旅することが私の夢だ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-i-3", 
      tokens: ["Making", "friends", "from", "different", "countries", "is", "wonderful."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【中級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "異なる国の友達を作ることは素晴らしい。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-i-4", 
      tokens: ["To", "read", "a", "book", "a", "week", "is", "my", "goal."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【中級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "1週間に1冊本を読むのが私の目標だ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-i-5", 
      tokens: ["Keeping", "a", "diary", "in", "English", "improves", "your", "writing."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【中級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "英語で日記をつけることは書く力を向上させる。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-i-6", 
      tokens: ["To", "tell", "the", "truth", "requires", "courage."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【中級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "真実を語るには勇気が必要だ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-i-7", 
      tokens: ["Waking", "up", "early", "in", "the", "morning", "is", "a", "good", "habit."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【中級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "朝早く起きることは良い習慣だ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-i-8", 
      tokens: ["To", "understand", "his", "theory", "completely", "is", "very", "hard."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【中級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "彼の理論を完全に理解することはとても難しい。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-i-9", 
      tokens: ["Solving", "this", "math", "problem", "is", "almost", "impossible."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【中級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "この数学の問題を解くことはほとんど不可能だ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-i-10", 
      tokens: ["To", "find", "a", "good", "job", "is", "not", "easy", "these", "days."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【中級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "最近では良い仕事を見つけるのは簡単ではない。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-i-11", 
      tokens: ["Living", "in", "a", "big", "city", "costs", "a", "lot", "of", "money."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【中級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "大都市に住むことはたくさんのお金がかかる。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-i-12", 
      tokens: ["To", "finish", "the", "work", "by", "tomorrow", "seems", "impossible."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【中級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "明日までにその仕事を終わらせることは不可能に思える。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-i-13", 
      tokens: ["Being", "loved", "by", "everyone", "is", "her", "greatest", "wish."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【中級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "みんなに愛されることが彼女の最大の願いだ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-i-14", 
      tokens: ["To", "make", "the", "same", "mistake", "again", "would", "be", "foolish."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【中級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "再び同じ間違いをすることは愚かだろう。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-i-15", 
      tokens: ["Talking", "with", "him", "about", "politics", "is", "useless."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【中級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "彼と政治について話すことは無駄だ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-a-1", 
      tokens: ["For", "him", "to", "pass", "the", "exam", "is", "a", "miracle."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【上級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "彼がその試験に合格することは奇跡だ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-a-2", 
      tokens: ["His", "coming", "late", "to", "the", "meeting", "annoyed", "everyone."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【上級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "彼が会議に遅れてきたことが皆を苛立たせた。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-a-3", 
      tokens: ["Not", "knowing", "what", "to", "do", "is", "a", "terrible", "feeling."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【上級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "何をすべきか分からないことはひどい気分だ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-a-4", 
      tokens: ["To", "have", "finished", "the", "project", "on", "time", "was", "a", "great", "relief."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【上級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "プロジェクトを時間通りに終えられたことは大きな安堵だった。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-a-5", 
      tokens: ["Her", "being", "angry", "with", "me", "is", "quite", "understandable."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【上級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "彼女が私に怒っていることは全くもって理解できる。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-a-6", 
      tokens: ["For", "a", "child", "to", "understand", "this", "book", "is", "impossible."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【上級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "子どもがこの本を理解することは不可能だ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-a-7", 
      tokens: ["Complaining", "about", "the", "poor", "service", "will", "get", "you", "nowhere."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【上級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "ひどいサービスについて不満を言っても何の解決にもならない。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-a-8", 
      tokens: ["Not", "having", "enough", "money", "to", "buy", "food", "is", "a", "serious", "problem."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【上級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "食べ物を買う十分なお金がないことは深刻な問題だ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-a-9", 
      tokens: ["To", "be", "asked", "to", "speak", "at", "the", "conference", "is", "an", "honor."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6, 7], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【上級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "会議で話すよう頼まれることは光栄なことだ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-a-10", 
      tokens: ["Their", "suddenly", "changing", "the", "original", "plan", "caused", "confusion."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【上級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "彼らが突然元の計画を変更したことが混乱を引き起こした。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-a-11", 
      tokens: ["For", "us", "to", "reach", "an", "agreement", "took", "several", "days."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【上級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "私たちが合意に達するのに数日かかった。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-a-12", 
      tokens: ["Having", "studied", "abroad", "gives", "you", "a", "broader", "perspective."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【上級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "留学したことがあると、より広い視野を得られる。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-a-13", 
      tokens: ["Never", "having", "seen", "snow", "before", "made", "him", "very", "excited."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【上級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "今まで一度も雪を見たことがなかったことが、彼をとても興奮させた。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-a-14", 
      tokens: ["To", "say", "that", "he", "is", "a", "genius", "is", "an", "understatement."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【上級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "彼が天才だと言うのは控えめな表現だ。", 
      modifiedIndices: [] 
    },
    { 
      id: "subjVerbal-a-15", 
      tokens: ["Being", "able", "to", "communicate", "effectively", "is", "essential", "for", "success."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (to不定詞句 / 動名詞句)", 
      hint: "【上級】主語（S）になっている準動詞（to不定詞・動名詞）のカタマリをすべてなぞってください。", 
      translation: "効果的にコミュニケーションを取れることは成功に不可欠だ。", 
      modifiedIndices: [] 
    }
  ]
};