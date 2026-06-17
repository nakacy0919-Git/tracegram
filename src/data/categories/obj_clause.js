export const objClauseCategory = {
  categoryId: "objClause",
  title: "Sub-3: 名詞節の目的語",
  description: "that節 や 疑問詞節のカタマリ",
 problems: [
    { 
      id: "objClause-b-1", 
      tokens: ["I", "know", "that", "he", "is", "kind."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "O (名詞節)", 
      hint: "【初級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "私は彼が親切だということを知っている。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-b-2", 
      tokens: ["I", "think", "that", "she", "is", "right."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "O (名詞節)", 
      hint: "【初級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "私は彼女が正しいと思う。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-b-3", 
      tokens: ["Do", "you", "know", "where", "he", "lives?"], 
      targetIndices: [3, 4, 5], 
      targetRole: "O (名詞節)", 
      hint: "【初級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "あなたは彼がどこに住んでいるか知っていますか。", 
      modifiedIndices: [2],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "objClause-b-4", 
      tokens: ["I", "hope", "that", "it", "will", "rain."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "O (名詞節)", 
      hint: "【初級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "私は雨が降ることを望む。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-b-5", 
      tokens: ["He", "said", "that", "he", "was", "busy."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "O (名詞節)", 
      hint: "【初級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼は自分が忙しいと言った。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-b-6", 
      tokens: ["I", "wonder", "what", "it", "is."], 
      targetIndices: [2, 3, 4], 
      targetRole: "O (名詞節)", 
      hint: "【初級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "それは何だろうかと思う。", 
      modifiedIndices: [1],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "objClause-b-7", 
      tokens: ["She", "knows", "who", "broke", "the", "window."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "O (名詞節)", 
      hint: "【初級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼女は誰が窓を割ったのか知っている。", 
      modifiedIndices: [1],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "objClause-b-8", 
      tokens: ["I", "hear", "that", "he", "is", "sick."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "O (名詞節)", 
      hint: "【初級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼は病気だと聞いています。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-b-9", 
      tokens: ["Do", "you", "see", "what", "I", "mean?"], 
      targetIndices: [3, 4, 5], 
      targetRole: "O (名詞節)", 
      hint: "【初級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "私が言っている意味がわかりますか。", 
      modifiedIndices: [2],
      grammarPoints: ["interrogative", "relative_pronoun", "noun_clause"] 
    },
    { 
      id: "objClause-b-10", 
      tokens: ["I", "believe", "that", "you", "can", "do", "it."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "O (名詞節)", 
      hint: "【初級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "私はあなたならできると信じています。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-b-11", 
      tokens: ["I", "forgot", "when", "he", "will", "come."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "O (名詞節)", 
      hint: "【初級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼がいつ来るのか忘れました。", 
      modifiedIndices: [1],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "objClause-b-12", 
      tokens: ["I", "understand", "what", "you", "want."], 
      targetIndices: [2, 3, 4], 
      targetRole: "O (名詞節)", 
      hint: "【初級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "私はあなたが何を欲しいのかわかります。", 
      modifiedIndices: [1],
      grammarPoints: ["interrogative", "relative_pronoun", "noun_clause"] 
    },
    { 
      id: "objClause-b-13", 
      tokens: ["He", "noticed", "that", "she", "was", "crying."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "O (名詞節)", 
      hint: "【初級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼は彼女が泣いていることに気づいた。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-b-14", 
      tokens: ["I", "asked", "if", "he", "was", "free."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "O (名詞節)", 
      hint: "【初級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "私は彼が暇かどうか尋ねた。", 
      modifiedIndices: [1],
      grammarPoints: ["whether_if_clause", "noun_clause"] 
    },
    { 
      id: "objClause-b-15", 
      tokens: ["She", "thinks", "that", "he", "is", "a", "good", "doctor."], 
      targetIndices: [2, 3, 4, 5, 6, 7], 
      targetRole: "O (名詞節)", 
      hint: "【初級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼女は彼が良い医者だと思っています。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-i-1", 
      tokens: ["I", "don't", "know", "why", "she", "is", "angry", "with", "me."], 
      targetIndices: [3, 4, 5, 6, 7, 8], 
      targetRole: "O (名詞節)", 
      hint: "【中級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "私はなぜ彼女が私に怒っているのかわかりません。", 
      modifiedIndices: [2],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "objClause-i-2", 
      tokens: ["He", "explained", "that", "he", "had", "missed", "the", "train."], 
      targetIndices: [2, 3, 4, 5, 6, 7], 
      targetRole: "O (名詞節)", 
      hint: "【中級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼は電車に乗り遅れたのだと説明した。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-i-3", 
      tokens: ["Do", "you", "remember", "where", "you", "put", "the", "key?"], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "O (名詞節)", 
      hint: "【中級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "あなたは鍵をどこに置いたか覚えていますか。", 
      modifiedIndices: [2],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "objClause-i-4", 
      tokens: ["I", "wonder", "if", "it", "will", "rain", "tomorrow."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "O (名詞節)", 
      hint: "【中級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "明日は雨が降るだろうか。", 
      modifiedIndices: [1],
      grammarPoints: ["whether_if_clause", "noun_clause"] 
    },
    { 
      id: "objClause-i-5", 
      tokens: ["They", "realized", "that", "they", "were", "in", "danger."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "O (名詞節)", 
      hint: "【中級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼らは自分たちが危険な状態にあると気づいた。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-i-6", 
      tokens: ["We", "found", "that", "the", "door", "was", "locked."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "O (名詞節)", 
      hint: "【中級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "私たちはドアに鍵がかかっていることに気づいた。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-i-7", 
      tokens: ["She", "asked", "me", "whether", "I", "liked", "tea", "or", "coffee."], 
      targetIndices: [3, 4, 5, 6, 7, 8], 
      targetRole: "O (名詞節)", 
      hint: "【中級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼女は私に紅茶とコーヒーのどちらが好きか尋ねた。", 
      modifiedIndices: [1],
      grammarPoints: ["whether_if_clause", "noun_clause"] 
    },
    { 
      id: "objClause-i-8", 
      tokens: ["I", "can't", "understand", "how", "he", "solved", "the", "problem."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "O (名詞節)", 
      hint: "【中級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼がどうやってその問題を解いたのか私には理解できません。", 
      modifiedIndices: [2],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "objClause-i-9", 
      tokens: ["Nobody", "knows", "what", "will", "happen", "next."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "O (名詞節)", 
      hint: "【中級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "次に何が起こるかは誰も知らない。", 
      modifiedIndices: [1],
      grammarPoints: ["interrogative", "relative_pronoun", "noun_clause"] 
    },
    { 
      id: "objClause-i-10", 
      tokens: ["He", "promised", "that", "he", "would", "come", "to", "the", "party."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8], 
      targetRole: "O (名詞節)", 
      hint: "【中級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼はパーティーに来ると約束した。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-i-11", 
      tokens: ["I", "guess", "that", "she", "is", "telling", "the", "truth."], 
      targetIndices: [2, 3, 4, 5, 6, 7], 
      targetRole: "O (名詞節)", 
      hint: "【中級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼女は真実を話しているのだと私は推測する。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-i-12", 
      tokens: ["Please", "tell", "me", "what", "you", "want", "to", "do."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "O (名詞節)", 
      hint: "【中級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "あなたが何をしたいのか私に教えてください。", 
      modifiedIndices: [1],
      grammarPoints: ["interrogative", "relative_pronoun", "noun_clause"] 
    },
    { 
      id: "objClause-i-13", 
      tokens: ["I", "didn't", "know", "that", "you", "could", "speak", "French", "so", "well."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9], 
      targetRole: "O (名詞節)", 
      hint: "【中級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "あなたがそんなに上手にフランス語を話せるとは知りませんでした。", 
      modifiedIndices: [2],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-i-14", 
      tokens: ["Can", "you", "imagine", "how", "much", "this", "car", "costs?"], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "O (名詞節)", 
      hint: "【中級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "この車がいくらするか想像できますか。", 
      modifiedIndices: [2],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "objClause-i-15", 
      tokens: ["They", "suggested", "that", "we", "should", "start", "early", "in", "the", "morning."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8, 9], 
      targetRole: "O (名詞節)", 
      hint: "【中級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼らは私たちが朝早く出発すべきだと提案した。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-a-1", 
      tokens: ["I", "deeply", "regret", "that", "I", "didn't", "study", "harder", "in", "my", "youth."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9, 10], 
      targetRole: "O (名詞節)", 
      hint: "【上級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "私は若い頃にもっと一生懸命勉強しなかったことを深く後悔している。", 
      modifiedIndices: [2],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-a-2", 
      tokens: ["He", "could", "not", "explain", "why", "he", "had", "made", "such", "a", "terrible", "mistake."], 
      targetIndices: [4, 5, 6, 7, 8, 9, 10, 11], 
      targetRole: "O (名詞節)", 
      hint: "【上級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼はなぜあのようなひどい間違いをしてしまったのか説明できなかった。", 
      modifiedIndices: [3],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "objClause-a-3", 
      tokens: ["We", "must", "consider", "whether", "the", "new", "system", "is", "truly", "beneficial", "for", "us."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9, 10, 11], 
      targetRole: "O (名詞節)", 
      hint: "【上級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "私たちはその新しいシステムが私たちにとって本当に有益かどうかをよく考えなければならない。", 
      modifiedIndices: [2],
      grammarPoints: ["whether_if_clause", "noun_clause"] 
    },
    { 
      id: "objClause-a-4", 
      tokens: ["I", "doubt", "if", "he", "will", "be", "able", "to", "finish", "the", "task", "by", "tomorrow."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
      targetRole: "O (名詞節)", 
      hint: "【上級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼が明日までにその仕事を終えられるかどうか私は疑問に思う。", 
      modifiedIndices: [1],
      grammarPoints: ["whether_if_clause", "noun_clause"] 
    },
    { 
      id: "objClause-a-5", 
      tokens: ["They", "completely", "ignored", "what", "I", "had", "been", "trying", "to", "say", "all", "day."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9, 10, 11], 
      targetRole: "O (名詞節)", 
      hint: "【上級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼らは私が一日中言おうとしていたことを完全に無視した。", 
      modifiedIndices: [2],
      grammarPoints: ["relative_pronoun", "interrogative", "noun_clause"] 
    },
    { 
      id: "objClause-a-6", 
      tokens: ["The", "scientist", "proved", "that", "the", "earth", "revolves", "around", "the", "sun."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9], 
      targetRole: "O (名詞節)", 
      hint: "【上級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "その科学者は地球が太陽の周りを公転していることを証明した。", 
      modifiedIndices: [2],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-a-7", 
      tokens: ["The", "police", "investigated", "how", "the", "accident", "had", "happened", "on", "that", "night."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9, 10], 
      targetRole: "O (名詞節)", 
      hint: "【上級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "警察はその夜、その事故がどのようにして起きたのかを調査した。", 
      modifiedIndices: [2],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "objClause-a-8", 
      tokens: ["Many", "people", "believe", "that", "climate", "change", "is", "the", "biggest", "threat", "to", "our", "planet."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
      targetRole: "O (名詞節)", 
      hint: "【上級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "多くの人々は気候変動が地球にとって最大の脅威だと信じている。", 
      modifiedIndices: [2],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-a-9", 
      tokens: ["Did", "you", "notice", "that", "she", "was", "wearing", "a", "new", "ring", "on", "her", "finger?"], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
      targetRole: "O (名詞節)", 
      hint: "【上級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼女が指に新しい指輪をはめていることに気づきましたか。", 
      modifiedIndices: [2],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-a-10", 
      tokens: ["She", "demanded", "that", "he", "apologize", "for", "his", "rude", "behavior", "immediately."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8, 9], 
      targetRole: "O (名詞節)", 
      hint: "【上級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼女は彼に、その無礼な振る舞いをすぐに謝罪するよう要求した。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-a-11", 
      tokens: ["I", "can't", "imagine", "what", "the", "world", "will", "be", "like", "in", "fifty", "years."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9, 10, 11], 
      targetRole: "O (名詞節)", 
      hint: "【上級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "50年後に世界がどのようになっているか、私には想像できない。", 
      modifiedIndices: [2],
      grammarPoints: ["interrogative", "noun_clause"] 
    },
    { 
      id: "objClause-a-12", 
      tokens: ["The", "manager", "announced", "that", "the", "company", "would", "open", "a", "new", "branch", "in", "Tokyo."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
      targetRole: "O (名詞節)", 
      hint: "【上級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "マネージャーは会社が東京に新しい支店を開設すると発表した。", 
      modifiedIndices: [2],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-a-13", 
      tokens: ["He", "insisted", "that", "he", "had", "nothing", "to", "do", "with", "the", "scandal."], 
      targetIndices: [2, 3, 4, 5, 6, 7, 8, 9, 10], 
      targetRole: "O (名詞節)", 
      hint: "【上級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼は自分がそのスキャンダルとは何の関係もないと主張した。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-a-14", 
      tokens: ["She", "always", "complains", "that", "she", "doesn't", "have", "enough", "time", "to", "relax."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9, 10], 
      targetRole: "O (名詞節)", 
      hint: "【上級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "彼女はいつもリラックスする十分な時間がないと文句を言っている。", 
      modifiedIndices: [2],
      grammarPoints: ["that_clause", "noun_clause"] 
    },
    { 
      id: "objClause-a-15", 
      tokens: ["No", "one", "could", "foresee", "that", "the", "peaceful", "protest", "would", "turn", "into", "a", "riot."], 
      targetIndices: [4, 5, 6, 7, 8, 9, 10, 11, 12], 
      targetRole: "O (名詞節)", 
      hint: "【上級】光っている動詞の目的語（O）となっている名詞節をすべてなぞってください。", 
      translation: "その平和的な抗議行動が暴動に発展するとは誰も予測できなかった。", 
      modifiedIndices: [3],
      grammarPoints: ["that_clause", "noun_clause"] 
    }
  ]
};