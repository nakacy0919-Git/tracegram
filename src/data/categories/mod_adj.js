export const modAdjCategory = {
  categoryId: "modAdj",
  title: "Sub-1: 形容詞のカタマリ",
  description: "名詞を修飾する分詞・関係詞・同格のthat",
  problems: [
    { 
      id: "modAdj-b-1", 
      tokens: ["The", "boy", "playing", "tennis", "is", "Ken."], 
      targetIndices: [2, 3], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【初級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "テニスをしている少年はケンだ。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-b-2", 
      tokens: ["I", "know", "the", "girl", "who", "is", "reading", "a", "book."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【初級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私は本を読んでいる少女を知っている。", 
      modifiedIndices: [3] 
    },
    { 
      id: "modAdj-b-3", 
      tokens: ["This", "is", "a", "picture", "taken", "by", "him."], 
      targetIndices: [4, 5, 6], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【初級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "これは彼によって撮られた写真だ。", 
      modifiedIndices: [3] 
    },
    { 
      id: "modAdj-b-4", 
      tokens: ["The", "dog", "running", "there", "is", "mine."], 
      targetIndices: [2, 3], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【初級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "あそこを走っている犬は私のものだ。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-b-5", 
      tokens: ["Look", "at", "the", "mountain", "covered", "with", "snow."], 
      targetIndices: [4, 5, 6], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【初級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "雪で覆われたあの山を見なさい。", 
      modifiedIndices: [3] 
    },
    { 
      id: "modAdj-b-6", 
      tokens: ["I", "have", "a", "friend", "who", "lives", "in", "Tokyo."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【初級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私には東京に住んでいる友達がいる。", 
      modifiedIndices: [3] 
    },
    { 
      id: "modAdj-b-7", 
      tokens: ["The", "book", "which", "I", "bought", "is", "interesting."], 
      targetIndices: [2, 3, 4], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【初級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私が買った本は面白い。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-b-8", 
      tokens: ["This", "is", "the", "house", "where", "he", "was", "born."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【初級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "これが彼の生まれた家だ。", 
      modifiedIndices: [3] 
    },
    { 
      id: "modAdj-b-9", 
      tokens: ["I", "like", "the", "song", "sung", "by", "her."], 
      targetIndices: [4, 5, 6], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【初級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私は彼女によって歌われたその歌が好きだ。", 
      modifiedIndices: [3] 
    },
    { 
      id: "modAdj-b-10", 
      tokens: ["The", "man", "standing", "at", "the", "door", "is", "my", "father."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【初級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "ドアのところに立っている男の人は私の父です。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-b-11", 
      tokens: ["She", "has", "a", "watch", "made", "in", "Switzerland."], 
      targetIndices: [4, 5, 6], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【初級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼女はスイス製の時計を持っている。", 
      modifiedIndices: [3] 
    },
    { 
      id: "modAdj-b-12", 
      tokens: ["The", "letter", "written", "in", "English", "is", "difficult."], 
      targetIndices: [2, 3, 4], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【初級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "英語で書かれた手紙は難しい。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-b-13", 
      tokens: ["I", "know", "the", "boy", "whom", "you", "met", "yesterday."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【初級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私はあなたが昨日会った少年を知っています。", 
      modifiedIndices: [3] 
    },
    { 
      id: "modAdj-b-14", 
      tokens: ["The", "cat", "sleeping", "on", "the", "sofa", "is", "cute."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【初級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "ソファで眠っている猫はかわいい。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-b-15", 
      tokens: ["He", "is", "the", "person", "who", "taught", "me", "English."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【初級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼は私に英語を教えてくれた人です。", 
      modifiedIndices: [3] 
    },
    { 
      id: "modAdj-i-1", 
      tokens: ["The", "students", "studying", "in", "the", "library", "are", "very", "quiet."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【中級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "図書館で勉強している学生たちはとても静かだ。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-i-2", 
      tokens: ["I", "remember", "the", "day", "when", "we", "first", "met."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【中級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私は私たちが初めて会った日を覚えている。", 
      modifiedIndices: [3] 
    },
    { 
      id: "modAdj-i-3", 
      tokens: ["The", "woman", "who", "is", "talking", "to", "my", "mother", "is", "a", "doctor."], 
      targetIndices: [2, 3, 4, 5, 6, 7], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【中級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私の母と話している女性は医者です。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-i-4", 
      tokens: ["There", "are", "many", "things", "which", "we", "must", "do", "today."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【中級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私たちが今日しなければならないことがたくさんある。", 
      modifiedIndices: [3] 
    },
    { 
      id: "modAdj-i-5", 
      tokens: ["The", "language", "spoken", "in", "that", "country", "is", "French."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【中級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "あの国で話されている言語はフランス語だ。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-i-6", 
      tokens: ["This", "is", "the", "only", "way", "that", "we", "can", "solve", "the", "problem."], 
      targetIndices: [5, 6, 7, 8, 9, 10], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【中級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "これが私たちがその問題を解決できる唯一の方法だ。", 
      modifiedIndices: [4] 
    },
    { 
      id: "modAdj-i-7", 
      tokens: ["We", "stayed", "at", "a", "hotel", "overlooking", "the", "beautiful", "ocean."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【中級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私たちは美しい海を見渡せるホテルに滞在した。", 
      modifiedIndices: [4] 
    },
    { 
      id: "modAdj-i-8", 
      tokens: ["The", "car", "parked", "in", "front", "of", "the", "house", "is", "my", "uncle's."], 
      targetIndices: [2, 3, 4, 5, 6, 7], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【中級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "家の前に停められている車は私の叔父のものです。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-i-9", 
      tokens: ["I", "can't", "forget", "the", "people", "whom", "I", "met", "during", "my", "trip."], 
      targetIndices: [5, 6, 7, 8, 9, 10], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【中級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私は旅行中に出会った人々を忘れることができない。", 
      modifiedIndices: [4] 
    },
    { 
      id: "modAdj-i-10", 
      tokens: ["The", "reason", "why", "he", "was", "late", "is", "obvious."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【中級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼が遅れた理由は明白だ。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-i-11", 
      tokens: ["She", "works", "for", "a", "company", "which", "makes", "computer", "games."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【中級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼女はコンピューターゲームを作る会社で働いている。", 
      modifiedIndices: [4] 
    },
    { 
      id: "modAdj-i-12", 
      tokens: ["The", "man", "whose", "car", "was", "stolen", "called", "the", "police."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【中級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "車を盗まれたその男は警察に電話した。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-i-13", 
      tokens: ["A", "girl", "carrying", "a", "big", "bag", "came", "into", "the", "room."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【中級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "大きなカバンを運んでいる少女が部屋に入ってきた。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-i-14", 
      tokens: ["The", "bridge", "built", "two", "hundred", "years", "ago", "is", "still", "strong."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【中級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "200年前に建てられたその橋はまだ丈夫だ。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-i-15", 
      tokens: ["I", "know", "a", "lot", "of", "people", "who", "are", "interested", "in", "Japanese", "history."], 
      targetIndices: [6, 7, 8, 9, 10, 11], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【中級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私は日本の歴史に興味がある人々をたくさん知っている。", 
      modifiedIndices: [5] 
    },
    { 
      id: "modAdj-a-1", 
      tokens: ["The", "fact", "that", "he", "lied", "to", "us", "is", "unforgivable."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【上級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼が私たちに嘘をついたという事実は許されない。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-a-2", 
      tokens: ["We", "came", "to", "the", "conclusion", "that", "the", "project", "should", "be", "stopped."], 
      targetIndices: [5, 6, 7, 8, 9, 10], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【上級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私たちはそのプロジェクトは中止されるべきだという結論に至った。", 
      modifiedIndices: [4] 
    },
    { 
      id: "modAdj-a-3", 
      tokens: ["The", "house", "in", "which", "I", "lived", "as", "a", "child", "has", "been", "torn", "down."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【上級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私が子どもの頃に住んでいた家は取り壊されてしまった。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-a-4", 
      tokens: ["The", "problem", "with", "which", "we", "are", "faced", "requires", "immediate", "action."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【上級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私たちが直面している問題は即座の行動を要求している。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-a-5", 
      tokens: ["He", "is", "the", "very", "man", "that", "I", "have", "been", "looking", "for."], 
      targetIndices: [5, 6, 7, 8, 9, 10], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【上級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼こそ私がずっと探していた男だ。", 
      modifiedIndices: [4] 
    },
    { 
      id: "modAdj-a-6", 
      tokens: ["I", "was", "surprised", "at", "the", "news", "that", "he", "had", "passed", "the", "exam."], 
      targetIndices: [6, 7, 8, 9, 10, 11], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【上級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私は彼が試験に合格したという知らせに驚いた。", 
      modifiedIndices: [5] 
    },
    { 
      id: "modAdj-a-7", 
      tokens: ["There", "is", "no", "proof", "that", "he", "stole", "the", "money."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【上級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼がそのお金を盗んだという証拠はない。", 
      modifiedIndices: [3] 
    },
    { 
      id: "modAdj-a-8", 
      tokens: ["The", "proposal", "that", "we", "should", "build", "a", "new", "factory", "was", "accepted."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【上級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私たちが新しい工場を建てるべきだという提案は受け入れられた。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-a-9", 
      tokens: ["I", "met", "a", "woman", "who", "I", "thought", "was", "an", "actress."], 
      targetIndices: [4, 5, 6, 7, 8, 9], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【上級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私は女優だと思う女性に会った。", 
      modifiedIndices: [3] 
    },
    { 
      id: "modAdj-a-10", 
      tokens: ["The", "system", "by", "which", "this", "machine", "operates", "is", "quite", "complex."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【上級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "この機械が作動するシステムはとても複雑だ。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-a-11", 
      tokens: ["She", "gave", "me", "the", "impression", "that", "she", "was", "not", "interested."], 
      targetIndices: [5, 6, 7, 8, 9], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【上級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼女は興味がないという印象を私に与えた。", 
      modifiedIndices: [4] 
    },
    { 
      id: "modAdj-a-12", 
      tokens: ["Those", "present", "at", "the", "meeting", "supported", "his", "plan."], 
      targetIndices: [1, 2, 3, 4], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【上級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "その会議に出席していた人々は彼の計画を支持した。", 
      modifiedIndices: [0] 
    },
    { 
      id: "modAdj-a-13", 
      tokens: ["Books", "written", "in", "easy", "English", "are", "suitable", "for", "beginners."], 
      targetIndices: [1, 2, 3, 4], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【上級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "簡単な英語で書かれた本は初心者に向いている。", 
      modifiedIndices: [0] 
    },
    { 
      id: "modAdj-a-14", 
      tokens: ["The", "extent", "to", "which", "they", "understood", "the", "issue", "remains", "unknown."], 
      targetIndices: [2, 3, 4, 5, 6, 7], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【上級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼らがその問題をどの程度理解していたかは不明のままだ。", 
      modifiedIndices: [1] 
    },
    { 
      id: "modAdj-a-15", 
      tokens: ["I", "cannot", "agree", "with", "the", "idea", "that", "money", "is", "everything."], 
      targetIndices: [6, 7, 8, 9], 
      targetRole: "M (形容詞句 / 形容詞節)", 
      hint: "【上級】光っている名詞を後ろから修飾している『形容詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "お金がすべてだという考えに私は同意できない。", 
      modifiedIndices: [5] 
    }
  ]
};