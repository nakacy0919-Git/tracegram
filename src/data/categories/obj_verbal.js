export const objVerbalCategory = {
  categoryId: "objVerbal",
  title: "Sub-2: 準動詞の目的語",
  description: "動詞の後に続く to do や ~ing のカタマリ",
  problems: [
    { 
      id: "objVerbal-b-1", 
      tokens: ["I", "like", "to", "play", "tennis."], 
      targetIndices: [2, 3, 4], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【初級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "私はテニスをするのが好きです。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-b-2", 
      tokens: ["She", "enjoys", "reading", "books."], 
      targetIndices: [2, 3], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【初級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼女は本を読んで楽しみます。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-b-3", 
      tokens: ["He", "decided", "to", "go", "there."], 
      targetIndices: [2, 3, 4], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【初級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼はそこへ行くことを決心した。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-b-4", 
      tokens: ["They", "stopped", "talking."], 
      targetIndices: [2], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【初級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼らは話すのをやめた。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-b-5", 
      tokens: ["We", "hope", "to", "see", "you."], 
      targetIndices: [2, 3, 4], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【初級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "私たちはあなたに会うことを望んでいます。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-b-6", 
      tokens: ["I", "want", "to", "buy", "a", "car."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【初級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "私は車を買いたい。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-b-7", 
      tokens: ["She", "finished", "cleaning", "the", "room."], 
      targetIndices: [2, 3, 4], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【初級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼女は部屋の掃除を終えた。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-b-8", 
      tokens: ["He", "began", "to", "run", "fast."], 
      targetIndices: [2, 3, 4], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【初級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼は速く走り始めた。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-b-9", 
      tokens: ["They", "like", "playing", "baseball."], 
      targetIndices: [2, 3], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【初級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼らは野球をするのが好きです。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-b-10", 
      tokens: ["I", "plan", "to", "visit", "Kyoto."], 
      targetIndices: [2, 3, 4], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【初級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "私は京都を訪れる計画を立てている。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-b-11", 
      tokens: ["She", "promised", "to", "help", "me."], 
      targetIndices: [2, 3, 4], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【初級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼女は私を手伝うと約束した。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-b-12", 
      tokens: ["He", "practices", "playing", "the", "piano."], 
      targetIndices: [2, 3, 4], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【初級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼はピアノを弾く練習をする。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-b-13", 
      tokens: ["We", "tried", "to", "open", "the", "door."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【初級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "私たちはドアを開けようとした。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-b-14", 
      tokens: ["They", "love", "watching", "movies."], 
      targetIndices: [2, 3], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【初級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼らは映画を観るのが大好きです。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-b-15", 
      tokens: ["I", "need", "to", "get", "up", "early."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【初級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "私は早く起きる必要がある。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-i-1", 
      tokens: ["The", "students", "stopped", "talking", "when", "the", "teacher", "entered", "the", "room."], 
      targetIndices: [3], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【中級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "先生が部屋に入ってきたとき、生徒たちは話すのをやめた。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objVerbal-i-2", 
      tokens: ["She", "decided", "to", "study", "English", "in", "Canada."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【中級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼女はカナダで英語を勉強することを決心した。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-i-3", 
      tokens: ["I", "enjoyed", "talking", "with", "him", "about", "the", "movie."], 
      targetIndices: [2, 3, 4, 5, 6, 7], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【中級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "私は彼とその映画について話すのを楽しんだ。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-i-4", 
      tokens: ["He", "promised", "not", "to", "be", "late", "for", "the", "meeting."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【中級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼は会議に遅刻しないと約束した。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-i-5", 
      tokens: ["We", "hope", "to", "see", "you", "again", "soon."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【中級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "私たちはすぐにまたあなたにお会いできることを願っています。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-i-6", 
      tokens: ["The", "boy", "admitted", "breaking", "the", "window", "yesterday."], 
      targetIndices: [3, 4, 5, 6], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【中級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "その少年は昨日窓を割ったことを認めた。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objVerbal-i-7", 
      tokens: ["She", "managed", "to", "finish", "the", "difficult", "task", "on", "time."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【中級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼女はどうにかその難しい仕事を時間通りに終えた。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-i-8", 
      tokens: ["I", "remember", "meeting", "him", "at", "the", "party", "last", "year."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【中級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "私は昨年パーティーで彼に会ったことを覚えている。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-i-9", 
      tokens: ["They", "refused", "to", "accept", "our", "offer."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【中級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼らは私たちの申し出を受け入れることを拒否した。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-i-10", 
      tokens: ["He", "avoided", "answering", "my", "question", "directly."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【中級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼は私の質問に直接答えることを避けた。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-i-11", 
      tokens: ["We", "plan", "to", "spend", "our", "vacation", "in", "Hawaii."], 
      targetIndices: [2, 3, 4, 5, 6, 7], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【中級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "私たちはハワイで休暇を過ごす計画を立てている。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-i-12", 
      tokens: ["She", "denied", "taking", "the", "money", "from", "the", "desk."], 
      targetIndices: [2, 3, 4, 5, 6, 7], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【中級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼女は机からお金を取ったことを否定した。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-i-13", 
      tokens: ["I", "forgot", "to", "bring", "my", "dictionary", "today."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【中級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "私は今日辞書を持ってくるのを忘れた。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-i-14", 
      tokens: ["The", "company", "expects", "to", "increase", "its", "sales", "this", "year."], 
      targetIndices: [3, 4, 5, 6, 7, 8], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【中級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "その会社は今年売上を伸ばすことを期待している。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objVerbal-i-15", 
      tokens: ["He", "missed", "seeing", "his", "favorite", "singer", "at", "the", "concert."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【中級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼はコンサートでお気に入りの歌手を見る機会を逃した。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-a-1", 
      tokens: ["I", "consider", "changing", "my", "job", "in", "the", "near", "future."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【上級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "私は近い将来、転職することを検討している。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-a-2", 
      tokens: ["He", "regrets", "having", "said", "such", "a", "terrible", "thing", "to", "her."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8, 9], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【上級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼は彼女にそんなひどいことを言ったことを後悔している。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-a-3", 
      tokens: ["She", "failed", "to", "understand", "the", "importance", "of", "the", "situation."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【上級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼女はその状況の重要性を理解できなかった。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-a-4", 
      tokens: ["The", "politician", "denied", "having", "accepted", "the", "bribe", "from", "the", "company."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【上級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "その政治家は会社から賄賂を受け取ったことを否定した。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objVerbal-a-5", 
      tokens: ["We", "cannot", "afford", "to", "buy", "a", "new", "house", "right", "now."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【上級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "私たちは今すぐ新しい家を買う余裕はない。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objVerbal-a-6", 
      tokens: ["I", "appreciate", "your", "taking", "the", "time", "to", "help", "me."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【上級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "あなたが時間を割いて私を助けてくれることに感謝します。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-a-7", 
      tokens: ["They", "threatened", "to", "leak", "the", "secret", "information", "to", "the", "press."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8, 9], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【上級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼らはその機密情報をマスコミに漏らすと脅迫した。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-a-8", 
      tokens: ["He", "offered", "to", "lend", "me", "some", "money", "to", "buy", "the", "book."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8, 9, 10], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【上級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼はその本を買うために私にいくらかお金を貸そうと申し出た。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-a-9", 
      tokens: ["She", "pretends", "to", "know", "nothing", "about", "the", "secret", "plan."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【上級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼女はその秘密の計画について何も知らないふりをしている。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-a-10", 
      tokens: ["I", "clearly", "remember", "being", "taken", "to", "the", "zoo", "by", "my", "father."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9, 10], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【上級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "私は父に動物園へ連れて行ってもらったことをはっきりと覚えている。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objVerbal-a-11", 
      tokens: ["He", "couldn't", "resist", "making", "a", "joke", "about", "the", "serious", "matter."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【上級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼はその深刻な問題について冗談を言うのを我慢できなかった。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objVerbal-a-12", 
      tokens: ["The", "committee", "agreed", "to", "postpone", "the", "meeting", "until", "next", "week."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【上級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "委員会は会議を来週まで延期することに同意した。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objVerbal-a-13", 
      tokens: ["She", "strictly", "forbade", "my", "going", "out", "late", "at", "night."], 
      targetIndices: [3, 4, 5, 6, 7, 8], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【上級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼女は私が夜遅くに出かけることを厳しく禁じた。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objVerbal-a-14", 
      tokens: ["They", "postponed", "making", "a", "final", "decision", "on", "the", "project."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【上級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼らはそのプロジェクトに関する最終決定を下すのを延期した。", 
      modifiedIndices: [1] 
    },
    { 
      id: "objVerbal-a-15", 
      tokens: ["He", "meant", "to", "send", "the", "email", "to", "you", "yesterday", "morning."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8, 9], 
      targetRole: "O (to不定詞句 / 動名詞句)", 
      hint: "【上級】光っている動詞の目的語（O）となっている、準動詞のカタマリをすべてなぞってください。", 
      translation: "彼は昨日の朝、あなたにそのメールを送るつもりだった。", 
      modifiedIndices: [1] 
    }
  ]
};