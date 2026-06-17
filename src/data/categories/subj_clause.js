export const subjClauseCategory = {
  categoryId: "subjClause",
  title: "Sub-3: 名詞節の主語",
  description: "That he is alive / What I need... などの節が主語",
  problems: [
    { 
      id: "subjClause-b-1", 
      tokens: ["That", "he", "is", "kind", "is", "true."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "S (名詞節)", 
      hint: "【初級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼が親切だというのは本当だ。", 
      modifiedIndices: [],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-b-2", 
      tokens: ["What", "you", "need", "is", "money."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (名詞節)", 
      hint: "【初級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "あなたに必要なのはお金です。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun", "noun_clause"] 
    },
    { 
      id: "subjClause-b-3", 
      tokens: ["Whether", "it", "will", "rain", "is", "unknown."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "S (名詞節)", 
      hint: "【初級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "雨が降るかどうかはわからない。", 
      modifiedIndices: [],
      grammarPoints: ["whether_if_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-b-4", 
      tokens: ["Where", "she", "lives", "is", "a", "secret."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (名詞節)", 
      hint: "【初級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼女がどこに住んでいるかは秘密だ。", 
      modifiedIndices: [],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-b-5", 
      tokens: ["When", "he", "comes", "is", "important."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (名詞節)", 
      hint: "【初級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼がいつ来るかが重要だ。", 
      modifiedIndices: [],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-b-6", 
      tokens: ["How", "they", "did", "it", "is", "a", "mystery."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "S (名詞節)", 
      hint: "【初級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼らがそれをどうやったのかは謎だ。", 
      modifiedIndices: [],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-b-7", 
      tokens: ["That", "she", "likes", "dogs", "is", "clear."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "S (名詞節)", 
      hint: "【初級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼女が犬好きだということは明らかだ。", 
      modifiedIndices: [],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-b-8", 
      tokens: ["What", "he", "said", "is", "wrong."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (名詞節)", 
      hint: "【初級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼が言ったことは間違っている。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun", "interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-b-9", 
      tokens: ["Whether", "he", "is", "rich", "doesn't", "matter."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "S (名詞節)", 
      hint: "【初級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼がお金持ちかどうかは関係ない。", 
      modifiedIndices: [],
      grammarPoints: ["whether_if_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-b-10", 
      tokens: ["Why", "she", "cried", "is", "unknown."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (名詞節)", 
      hint: "【初級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼女がなぜ泣いたのかはわからない。", 
      modifiedIndices: [],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-b-11", 
      tokens: ["Who", "broke", "the", "window", "is", "unclear."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "S (名詞節)", 
      hint: "【初級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "誰が窓を割ったのかは不明だ。", 
      modifiedIndices: [],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-b-12", 
      tokens: ["What", "she", "bought", "is", "a", "bag."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (名詞節)", 
      hint: "【初級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼女が買ったのはバッグだ。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun", "noun_clause"] 
    },
    { 
      id: "subjClause-b-13", 
      tokens: ["That", "the", "earth", "is", "round", "is", "a", "fact."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (名詞節)", 
      hint: "【初級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "地球が丸いということは事実だ。", 
      modifiedIndices: [],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-b-14", 
      tokens: ["What", "we", "want", "is", "peace."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (名詞節)", 
      hint: "【初級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "私たちが望むものは平和だ。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun", "noun_clause"] 
    },
    { 
      id: "subjClause-b-15", 
      tokens: ["Whether", "they", "win", "or", "lose", "doesn't", "matter."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (名詞節)", 
      hint: "【初級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼らが勝つか負けるかは問題ではない。", 
      modifiedIndices: [],
      grammarPoints: ["whether_if_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-i-1", 
      tokens: ["That", "he", "will", "pass", "the", "exam", "is", "certain."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (名詞節)", 
      hint: "【中級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼が試験に合格するのは確実だ。", 
      modifiedIndices: [],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-i-2", 
      tokens: ["What", "I", "want", "to", "do", "is", "travel", "around", "the", "world."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (名詞節)", 
      hint: "【中級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "私がしたいことは世界中を旅することだ。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun", "infinitive", "noun_clause"] 
    },
    { 
      id: "subjClause-i-3", 
      tokens: ["Whether", "she", "will", "come", "to", "the", "party", "is", "not", "known."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6], 
      targetRole: "S (名詞節)", 
      hint: "【中級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼女がパーティーに来るかどうかは知られていない。", 
      modifiedIndices: [],
      grammarPoints: ["whether_if_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-i-4", 
      tokens: ["Where", "we", "should", "go", "tomorrow", "is", "the", "problem."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (名詞節)", 
      hint: "【中級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "明日私たちがどこへ行くべきかが問題だ。", 
      modifiedIndices: [],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-i-5", 
      tokens: ["How", "he", "solved", "the", "difficult", "puzzle", "is", "amazing."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (名詞節)", 
      hint: "【中級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼がその難しいパズルをどうやって解いたかは驚きだ。", 
      modifiedIndices: [],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-i-6", 
      tokens: ["What", "she", "is", "holding", "in", "her", "hand", "is", "a", "key."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6], 
      targetRole: "S (名詞節)", 
      hint: "【中級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼女が手に持っているものは鍵だ。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun", "noun_clause"] 
    },
    { 
      id: "subjClause-i-7", 
      tokens: ["That", "the", "rumor", "is", "true", "surprised", "everyone."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (名詞節)", 
      hint: "【中級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "その噂が本当だったことは全員を驚かせた。", 
      modifiedIndices: [],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-i-8", 
      tokens: ["Why", "he", "was", "absent", "from", "school", "is", "a", "mystery."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (名詞節)", 
      hint: "【中級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼がなぜ学校を休んだかは謎だ。", 
      modifiedIndices: [],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-i-9", 
      tokens: ["What", "matters", "most", "is", "your", "health."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (名詞節)", 
      hint: "【中級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "最も重要なのはあなたの健康だ。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun", "noun_clause"] 
    },
    { 
      id: "subjClause-i-10", 
      tokens: ["Whether", "the", "weather", "will", "be", "fine", "tomorrow", "is", "doubtful."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6], 
      targetRole: "S (名詞節)", 
      hint: "【中級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "明日天気が良くなるかどうかは疑わしい。", 
      modifiedIndices: [],
      grammarPoints: ["whether_if_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-i-11", 
      tokens: ["Whoever", "comes", "first", "can", "get", "the", "ticket."], 
      targetIndices: [0, 1, 2], 
      targetRole: "S (名詞節)", 
      hint: "【中級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "最初に来た人は誰でもそのチケットを手に入れられる。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun", "noun_clause"] 
    },
    { 
      id: "subjClause-i-12", 
      tokens: ["That", "the", "earth", "revolves", "around", "the", "sun", "is", "well", "known."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6], 
      targetRole: "S (名詞節)", 
      hint: "【中級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "地球が太陽の周りを回っていることはよく知られている。", 
      modifiedIndices: [],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-i-13", 
      tokens: ["What", "he", "is", "saying", "now", "is", "not", "important."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (名詞節)", 
      hint: "【中級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼が今言っていることは重要ではない。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun", "noun_clause"] 
    },
    { 
      id: "subjClause-i-14", 
      tokens: ["Where", "the", "key", "was", "hidden", "remained", "a", "mystery."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (名詞節)", 
      hint: "【中級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "その鍵がどこに隠されていたかは謎のままだった。", 
      modifiedIndices: [],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-i-15", 
      tokens: ["How", "you", "use", "your", "time", "is", "up", "to", "you."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (名詞節)", 
      hint: "【中級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "あなたが自分の時間をどう使うかはあなた次第だ。", 
      modifiedIndices: [],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-a-1", 
      tokens: ["That", "he", "should", "have", "made", "such", "a", "mistake", "is", "unbelievable."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6, 7], 
      targetRole: "S (名詞節)", 
      hint: "【上級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼がそんな間違いをしたなんて信じられない。", 
      modifiedIndices: [],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-a-2", 
      tokens: ["What", "seemed", "to", "be", "a", "disadvantage", "turned", "out", "to", "be", "an", "advantage."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (名詞節)", 
      hint: "【上級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "不利に見えたことが、結果的には有利になった。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun", "infinitive", "noun_clause"] 
    },
    { 
      id: "subjClause-a-3", 
      tokens: ["Whether", "the", "new", "plan", "will", "succeed", "or", "fail", "remains", "to", "be", "seen."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6, 7], 
      targetRole: "S (名詞節)", 
      hint: "【上級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "新しい計画が成功するか失敗するかはまだわからない。", 
      modifiedIndices: [],
      grammarPoints: ["whether_if_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-a-4", 
      tokens: ["Exactly", "when", "the", "universe", "was", "created", "is", "still", "a", "topic", "of", "debate."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (名詞節)", 
      hint: "【上級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "正確にいつ宇宙が創られたかは、いまだに議論の的だ。", 
      modifiedIndices: [],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-a-5", 
      tokens: ["How", "the", "ancient", "pyramids", "were", "built", "continues", "to", "fascinate", "scientists."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (名詞節)", 
      hint: "【上級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "古代のピラミッドがどうやって建てられたかは、今でも科学者たちを魅了している。", 
      modifiedIndices: [],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-a-6", 
      tokens: ["What", "little", "money", "he", "had", "was", "spent", "on", "books."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (名詞節)", 
      hint: "【上級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼が持っていたなけなしのお金は本に費やされた。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun", "noun_clause"] 
    },
    { 
      id: "subjClause-a-7", 
      tokens: ["That", "the", "climate", "is", "changing", "rapidly", "is", "recognized", "globally."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (名詞節)", 
      hint: "【上級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "気候が急速に変化しているということは、世界的に認識されている。", 
      modifiedIndices: [],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-a-8", 
      tokens: ["Why", "she", "suddenly", "resigned", "from", "her", "post", "is", "yet", "to", "be", "explained."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6], 
      targetRole: "S (名詞節)", 
      hint: "【上級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼女がなぜ突然職を辞したのかはまだ説明されていない。", 
      modifiedIndices: [],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-a-9", 
      tokens: ["Whatever", "you", "decide", "to", "do", "is", "fine", "with", "me."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "S (名詞節)", 
      hint: "【上級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "あなたが何をしようと決めても私は構わない。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun", "infinitive", "noun_clause"] 
    },
    { 
      id: "subjClause-a-10", 
      tokens: ["Whether", "we", "can", "trust", "his", "words", "is", "a", "difficult", "question."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (名詞節)", 
      hint: "【上級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "私たちが彼の言葉を信じられるかどうかは難しい問題だ。", 
      modifiedIndices: [],
      grammarPoints: ["whether_if_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-a-11", 
      tokens: ["What", "initially", "looked", "like", "a", "disaster", "ended", "up", "saving", "us."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "S (名詞節)", 
      hint: "【上級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "最初は災難に見えたことが、結果的に私たちを救うことになった。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun", "noun_clause"] 
    },
    { 
      id: "subjClause-a-12", 
      tokens: ["That", "such", "a", "tragic", "event", "could", "happen", "here", "shocked", "the", "entire", "town."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6, 7], 
      targetRole: "S (名詞節)", 
      hint: "【上級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "あのような悲惨な出来事がここで起こり得るということが、町全体にショックを与えた。", 
      modifiedIndices: [],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "subjClause-a-13", 
      tokens: ["How", "long", "the", "economic", "crisis", "will", "last", "is", "anyone's", "guess."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6], 
      targetRole: "S (名詞節)", 
      hint: "【上級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "その経済危機がどれくらい続くかは誰にもわからない。", 
      modifiedIndices: [],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-a-14", 
      tokens: ["What", "they", "are", "discussing", "in", "the", "meeting", "is", "strictly", "confidential."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6], 
      targetRole: "S (名詞節)", 
      hint: "【上級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "彼らが会議で話し合っていることは極秘だ。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun", "interrogative", "noun_clause"] 
    },
    { 
      id: "subjClause-a-15", 
      tokens: ["Whether", "or", "not", "you", "agree", "with", "him", "doesn't", "change", "the", "facts."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6], 
      targetRole: "S (名詞節)", 
      hint: "【上級】主語（S）になっている名詞節（that節や疑問詞節など）の塊をすべてなぞってください。", 
      translation: "あなたが彼に賛成するかどうかは事実を変えない。", 
      modifiedIndices: [],
      grammarPoints: ["whether_if_clause", "noun_clause"] 
    }
  ]
};