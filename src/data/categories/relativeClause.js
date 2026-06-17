export const relativeClauseCategory = {
  categoryId: "relative-clause",
  title: "関係詞節マスター",
  description: "先行詞を修飾する形容詞節（関係代名詞・関係副詞）の範囲を正確に把握しよう。",
  problems: [
    // 🟢 【初級】基本的な関係代名詞（who, which, that）
    { 
      id: "rel-b-1", 
      tokens: ["The", "man", "who", "is", "reading", "a", "book", "is", "my", "father."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "M (関係詞節)", 
      hint: "【初級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "本を読んでいる男性は私の父です。", 
      modifiedIndices: [1],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-b-2", 
      tokens: ["I", "have", "a", "dog", "which", "has", "black", "ears."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "M (関係詞節)", 
      hint: "【初級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "私は黒い耳をした犬を飼っています。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-b-3", 
      tokens: ["This", "is", "the", "book", "that", "I", "bought", "yesterday."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "M (関係詞節)", 
      hint: "【初級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "これは私が昨日買った本です。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-b-4", 
      tokens: ["The", "girl", "who", "lives", "next", "door", "is", "kind."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (関係詞節)", 
      hint: "【初級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "隣に住んでいる少女は親切です。", 
      modifiedIndices: [1],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-b-5", 
      tokens: ["Look", "at", "the", "house", "which", "stands", "on", "the", "hill."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "M (関係詞節)", 
      hint: "【初級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "丘の上に立っている家を見なさい。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-b-6", 
      tokens: ["She", "is", "the", "teacher", "whom", "I", "respect", "most."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "M (関係詞節)", 
      hint: "【初級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "彼女は私が最も尊敬する先生です。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-b-7", 
      tokens: ["I", "need", "a", "box", "which", "is", "large", "enough."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "M (関係詞節)", 
      hint: "【初級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "私は十分に大きい箱が必要です。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-b-8", 
      tokens: ["The", "car", "that", "is", "parked", "there", "is", "mine."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (関係詞節)", 
      hint: "【初級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "あそこに停まっている車は私のものです。", 
      modifiedIndices: [1],
      grammarPoints: ["relative_pronoun", "past_participle"] 
    },
    { 
      id: "rel-b-9", 
      tokens: ["He", "is", "a", "writer", "who", "is", "famous", "in", "Japan."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "M (関係詞節)", 
      hint: "【初級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "彼は日本で有名な作家です。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-b-10", 
      tokens: ["I", "found", "the", "key", "that", "I", "lost."], 
      targetIndices: [4, 5, 6], 
      targetRole: "M (関係詞節)", 
      hint: "【初級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "私は失くした鍵を見つけた。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-b-11", 
      tokens: ["The", "woman", "who", "made", "this", "cake", "is", "my", "aunt."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (関係詞節)", 
      hint: "【初級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "このケーキを作った女性は私の叔母です。", 
      modifiedIndices: [1],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-b-12", 
      tokens: ["This", "is", "a", "story", "which", "makes", "people", "happy."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "M (関係詞節)", 
      hint: "【初級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "これは人々を幸せにする物語です。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-b-13", 
      tokens: ["Look", "at", "the", "bird", "that", "is", "flying", "in", "the", "sky."], 
      targetIndices: [4, 5, 6, 7, 8, 9], 
      targetRole: "M (関係詞節)", 
      hint: "【初級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "空を飛んでいる鳥を見なさい。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun", "present_participle"] 
    },
    { 
      id: "rel-b-14", 
      tokens: ["She", "bought", "a", "bag", "which", "looks", "very", "expensive."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "M (関係詞節)", 
      hint: "【初級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "彼女はとても高そうに見えるカバンを買った。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-b-15", 
      tokens: ["The", "boy", "who", "broke", "the", "window", "apologized."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (関係詞節)", 
      hint: "【初級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "窓を割った少年は謝った。", 
      modifiedIndices: [1],
      grammarPoints: ["relative_pronoun"] 
    },

    // 🟡 【中級】関係副詞（where, when, why）と所有格（whose）など
    { 
      id: "rel-i-1", 
      tokens: ["I", "remember", "the", "day", "when", "we", "first", "met."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "M (関係副詞節)", 
      hint: "【中級】光っている名詞（先行詞）を修飾している関係副詞（when）の塊をなぞってください。", 
      translation: "私たちが初めて会った日を覚えている。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-i-2", 
      tokens: ["This", "is", "the", "park", "where", "we", "used", "to", "play", "baseball."], 
      targetIndices: [4, 5, 6, 7, 8, 9], 
      targetRole: "M (関係副詞節)", 
      hint: "【中級】光っている名詞（先行詞）を修飾している関係副詞（where）の塊をなぞってください。", 
      translation: "これは私たちがかつて野球をした公園です。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-i-3", 
      tokens: ["Do", "you", "know", "the", "reason", "why", "she", "is", "angry?"], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "M (関係副詞節)", 
      hint: "【中級】光っている名詞（先行詞）を修飾している関係副詞（why）の塊をなぞってください。", 
      translation: "彼女が怒っている理由を知っていますか？", 
      modifiedIndices: [4],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-i-4", 
      tokens: ["I", "have", "a", "friend", "whose", "father", "is", "a", "doctor."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "M (関係詞節)", 
      hint: "【中級】光っている名詞（先行詞）を修飾している所有格（whose）の塊をなぞってください。", 
      translation: "私には父親が医者の友達がいます。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-i-5", 
      tokens: ["The", "house", "in", "which", "he", "lives", "is", "very", "old."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (関係詞節)", 
      hint: "【中級】「前置詞＋関係代名詞」から始まる形容詞節の塊をなぞってください。", 
      translation: "彼が住んでいる家はとても古い。", 
      modifiedIndices: [1],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-i-6", 
      tokens: ["The", "man", "whom", "I", "was", "talking", "to", "is", "my", "boss."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "M (関係詞節)", 
      hint: "【中級】光っている名詞（先行詞）を修飾している関係詞の塊をなぞってください。", 
      translation: "私が話しかけていた男性は私のボスです。", 
      modifiedIndices: [1],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-i-7", 
      tokens: ["That", "is", "the", "mountain", "whose", "top", "is", "covered", "with", "snow."], 
      targetIndices: [4, 5, 6, 7, 8, 9], 
      targetRole: "M (関係詞節)", 
      hint: "【中級】光っている名詞（先行詞）を修飾している所有格（whose）の塊をなぞってください。", 
      translation: "あれが頂上が雪で覆われている山です。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun", "past_participle"] 
    },
    { 
      id: "rel-i-8", 
      tokens: ["We", "visited", "a", "city", "where", "there", "are", "many", "old", "temples."], 
      targetIndices: [4, 5, 6, 7, 8, 9], 
      targetRole: "M (関係副詞節)", 
      hint: "【中級】光っている名詞（先行詞）を修飾している関係副詞（where）の塊をなぞってください。", 
      translation: "私たちは古い寺がたくさんある都市を訪れた。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-i-9", 
      tokens: ["The", "hotel", "where", "we", "stayed", "last", "night", "was", "comfortable."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "M (関係副詞節)", 
      hint: "【中級】光っている名詞（先行詞）を修飾している関係副詞（where）の塊をなぞってください。", 
      translation: "私たちが昨夜泊まったホテルは快適だった。", 
      modifiedIndices: [1],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-i-10", 
      tokens: ["Please", "tell", "me", "the", "time", "when", "the", "train", "will", "arrive."], 
      targetIndices: [5, 6, 7, 8, 9], 
      targetRole: "M (関係副詞節)", 
      hint: "【中級】光っている名詞（先行詞）を修飾している関係副詞（when）の塊をなぞってください。", 
      translation: "電車が到着する時間を教えてください。", 
      modifiedIndices: [4],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-i-11", 
      tokens: ["She", "works", "for", "a", "company", "whose", "office", "is", "in", "Tokyo."], 
      targetIndices: [5, 6, 7, 8, 9], 
      targetRole: "M (関係詞節)", 
      hint: "【中級】光っている名詞（先行詞）を修飾している所有格（whose）の塊をなぞってください。", 
      translation: "彼女はオフィスが東京にある会社で働いている。", 
      modifiedIndices: [4],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-i-12", 
      tokens: ["There", "are", "cases", "where", "you", "need", "to", "be", "careful."], 
      targetIndices: [3, 4, 5, 6, 7, 8], 
      targetRole: "M (関係副詞節)", 
      hint: "【中級】光っている名詞（cases=場合）を修飾している関係副詞（where）の塊をなぞってください。", 
      translation: "注意しなければならない場合（ケース）がある。", 
      modifiedIndices: [2],
      grammarPoints: ["relative_pronoun", "infinitive"] 
    },
    { 
      id: "rel-i-13", 
      tokens: ["The", "tool", "with", "which", "he", "fixed", "the", "car", "is", "mine."], 
      targetIndices: [2, 3, 4, 5, 6, 7], 
      targetRole: "M (関係詞節)", 
      hint: "【中級】「前置詞＋関係代名詞」から始まる形容詞節の塊をなぞってください。", 
      translation: "彼が車を修理するのに使った道具は私のものです。", 
      modifiedIndices: [1],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-i-14", 
      tokens: ["I", "can't", "forget", "the", "year", "when", "the", "earthquake", "happened."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "M (関係副詞節)", 
      hint: "【中級】光っている名詞（先行詞）を修飾している関係副詞（when）の塊をなぞってください。", 
      translation: "その地震が起きた年を忘れることができない。", 
      modifiedIndices: [4],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-i-15", 
      tokens: ["He", "didn't", "tell", "me", "the", "reason", "why", "he", "quit."], 
      targetIndices: [6, 7, 8, 9], 
      targetRole: "M (関係副詞節)", 
      hint: "【中級】光っている名詞（先行詞）を修飾している関係副詞（why）の塊をなぞってください。", 
      translation: "彼は辞めた理由を私に言わなかった。", 
      modifiedIndices: [5],
      grammarPoints: ["relative_pronoun"] 
    },

    // 🔴 【上級】関係代名詞の省略（接触節）、連鎖関係詞など
    { 
      id: "rel-a-1", 
      tokens: ["The", "person", "you", "are", "looking", "for", "has", "just", "left."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (関係詞節)", 
      hint: "【上級】光っている名詞を修飾している「関係代名詞が省略された」塊をなぞってください。", 
      translation: "あなたが探している人はちょうど帰りました。", 
      modifiedIndices: [1],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-a-2", 
      tokens: ["Those", "who", "want", "to", "join", "the", "club", "must", "sign", "up", "today."], 
      targetIndices: [1, 2, 3, 4, 5, 6], 
      targetRole: "M (関係詞節)", 
      hint: "【上級】代名詞Those（人々）を修飾している関係詞の塊をなぞってください。", 
      translation: "クラブに参加したい人は今日申し込まなければならない。", 
      modifiedIndices: [0],
      grammarPoints: ["relative_pronoun", "infinitive"] 
    },
    { 
      id: "rel-a-3", 
      tokens: ["This", "is", "the", "same", "watch", "that", "I", "lost", "yesterday."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "M (関係詞節)", 
      hint: "【上級】光っている名詞を修飾している関係詞の塊をなぞってください。", 
      translation: "これは私が昨日失くしたのと同じ時計だ。", 
      modifiedIndices: [4],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-a-4", 
      tokens: ["He", "is", "one", "of", "the", "greatest", "scientists", "that", "have", "ever", "lived."], 
      targetIndices: [7, 8, 9, 10], 
      targetRole: "M (関係詞節)", 
      hint: "【上級】光っている名詞を修飾している関係詞の塊をなぞってください。", 
      translation: "彼はこれまで生きてきた中で最も偉大な科学者の一人だ。", 
      modifiedIndices: [6],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-a-5", 
      tokens: ["The", "book", "I", "am", "reading", "now", "was", "written", "by", "him."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (関係詞節)", 
      hint: "【上級】光っている名詞を修飾している「関係代名詞が省略された」塊をなぞってください。", 
      translation: "私が今読んでいる本は彼によって書かれたものだ。", 
      modifiedIndices: [1],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-a-6", 
      tokens: ["Paris", "is", "a", "beautiful", "city,", "which", "I", "have", "visited", "twice."], 
      targetIndices: [5, 6, 7, 8, 9], 
      targetRole: "M (関係詞節)", 
      hint: "【上級】カンマ(,)以降の、先行詞について補足説明する関係詞の塊（非制限用法）をなぞってください。", 
      translation: "パリは美しい都市で、私はそこに2度訪れたことがある。", 
      modifiedIndices: [4],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-a-7", 
      tokens: ["The", "man", "who", "I", "thought", "was", "a", "stranger", "called", "my", "name."], 
      targetIndices: [2, 3, 4, 5, 6, 7], 
      targetRole: "M (連鎖関係代名詞)", 
      hint: "【上級】「私が〜だと思った」という挿入が含まれる複雑な関係詞の塊をなぞってください。", 
      translation: "見知らぬ人だと私が思った男性が、私の名前を呼んだ。", 
      modifiedIndices: [1],
      grammarPoints: ["relative_pronoun", "interruption"] 
    },
    { 
      id: "rel-a-8", 
      tokens: ["The", "house", "whose", "roof", "was", "blown", "off", "has", "been", "repaired."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "M (関係詞節)", 
      hint: "【上級】光っている名詞（先行詞）を修飾している所有格（whose）の塊をなぞってください。", 
      translation: "屋根が吹き飛ばされた家は修理された。", 
      modifiedIndices: [1],
      grammarPoints: ["relative_pronoun", "past_participle"] 
    },
    { 
      id: "rel-a-9", 
      tokens: ["Now", "is", "the", "time", "when", "we", "must", "make", "a", "decision."], 
      targetIndices: [4, 5, 6, 7, 8, 9], 
      targetRole: "M (関係副詞節)", 
      hint: "【上級】光っている名詞を修飾している関係副詞（when）の塊をなぞってください。", 
      translation: "今こそ私たちが決断を下さなければならない時だ。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-a-10", 
      tokens: ["There", "is", "nothing", "that", "you", "can", "do", "about", "this", "situation."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9], 
      targetRole: "M (関係詞節)", 
      hint: "【上級】代名詞nothingを修飾している関係詞の塊をなぞってください。", 
      translation: "この状況についてあなたにできることは何もない。", 
      modifiedIndices: [2],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-a-11", 
      tokens: ["I", "will", "give", "you", "all", "the", "money", "that", "I", "have."], 
      targetIndices: [7, 8, 9], 
      targetRole: "M (関係詞節)", 
      hint: "【上級】光っている名詞を修飾している関係詞の塊をなぞってください。", 
      translation: "私が持っているすべてのお金をあなたにあげよう。", 
      modifiedIndices: [6],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-a-12", 
      tokens: ["The", "woman", "I", "spoke", "to", "on", "the", "phone", "was", "helpful."], 
      targetIndices: [2, 3, 4, 5, 6, 7], 
      targetRole: "M (関係詞節)", 
      hint: "【上級】光っている名詞を修飾している「関係代名詞が省略された」塊をなぞってください。", 
      translation: "私が電話で話した女性はとても親切だった。", 
      modifiedIndices: [1],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-a-13", 
      tokens: ["You", "are", "the", "very", "person", "that", "I", "have", "been", "waiting", "for."], 
      targetIndices: [5, 6, 7, 8, 9, 10], 
      targetRole: "M (関係詞節)", 
      hint: "【上級】光っている名詞を修飾している関係詞の塊をなぞってください。", 
      translation: "あなたこそ、私がずっと待っていた人です。", 
      modifiedIndices: [4],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-a-14", 
      tokens: ["This", "is", "the", "point", "where", "the", "two", "rivers", "meet."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "M (関係副詞節)", 
      hint: "【上級】光っている名詞を修飾している関係副詞（where）の塊をなぞってください。", 
      translation: "ここが2つの川が交わる地点です。", 
      modifiedIndices: [3],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "rel-a-15", 
      tokens: ["The", "people", "with", "whom", "he", "worked", "respected", "him", "deeply."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (関係詞節)", 
      hint: "【上級】「前置詞＋関係代名詞」から始まる形容詞節の塊をなぞってください。", 
      translation: "彼と一緒に働いた人々は彼を深く尊敬していた。", 
      modifiedIndices: [1],
      grammarPoints: ["relative_pronoun"] 
    }
  ]
};