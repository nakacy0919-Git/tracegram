export const compClauseCategory = {
  categoryId: "compClause",
  title: "Sub-4: 節の補語",
  description: "主語とイコールになる「that節」や「疑問詞の節」を見抜く特訓",
  problems: [
    // 🟢 【初級】基本的な that節・疑問詞節 の補語（C）
    { 
      id: "compClause-b-1", 
      tokens: ["The", "truth", "is", "that", "I", "was", "wrong."], 
      targetIndices: [3, 4, 5, 6], 
      targetRole: "C (that節)", 
      hint: "【初級】光っている主語とイコールになる補語（C：that節）の塊をなぞってください。", 
      translation: "実は、私が間違っていた（真実は〜ということだ）。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-b-2", 
      tokens: ["The", "problem", "is", "that", "we", "have", "no", "time."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "C (that節)", 
      hint: "【初級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "問題は、私たちに時間がないということだ。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-b-3", 
      tokens: ["This", "is", "what", "I", "want."], 
      targetIndices: [2, 3, 4], 
      targetRole: "C (関係代名詞what)", 
      hint: "【初級】光っている主語とイコールになる補語（C：whatの塊）をなぞってください。", 
      translation: "これが私の欲しいものだ。", 
      modifiedIndices: [0],
      grammarPoints: ["relative_pronoun", "noun_clause"]
    },
    { 
      id: "compClause-b-4", 
      tokens: ["The", "reason", "is", "that", "he", "was", "sick."], 
      targetIndices: [3, 4, 5, 6], 
      targetRole: "C (that節)", 
      hint: "【初級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "理由は、彼が病気だったということだ。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-b-5", 
      tokens: ["My", "dream", "is", "that", "I", "will", "be", "a", "doctor."], 
      targetIndices: [3, 4, 5, 6, 7, 8], 
      targetRole: "C (that節)", 
      hint: "【初級】光っている主語とイコールになる補語（C：that節）の塊をなぞってください。", 
      translation: "私の夢は、私が医者になることだ。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-b-6", 
      tokens: ["The", "question", "is", "whether", "he", "will", "come."], 
      targetIndices: [3, 4, 5, 6], 
      targetRole: "C (whether節)", 
      hint: "【初級】光っている主語の内容を説明する補語（C：「〜かどうか」の塊）をなぞってください。", 
      translation: "疑問なのは、彼が来るかどうかだ。", 
      modifiedIndices: [1],
      grammarPoints: ["whether_if_clause", "noun_clause"]
    },
    { 
      id: "compClause-b-7", 
      tokens: ["This", "is", "where", "I", "was", "born."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "C (疑問詞節)", 
      hint: "【初級】光っている主語とイコールになる補語（C：疑問詞whereの塊）をなぞってください。", 
      translation: "ここが私が生まれた場所だ。", 
      modifiedIndices: [0],
      grammarPoints: ["interrogative", "noun_clause"]
    },
    { 
      id: "compClause-b-8", 
      tokens: ["That", "is", "why", "he", "was", "late."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "C (疑問詞節)", 
      hint: "【初級】光っている主語とイコールになる補語（C：疑問詞whyの塊）をなぞってください。", 
      translation: "そういうわけで彼は遅刻したのだ。", 
      modifiedIndices: [0],
      grammarPoints: ["interrogative", "noun_clause"]
    },
    { 
      id: "compClause-b-9", 
      tokens: ["The", "trouble", "is", "that", "she", "doesn't", "know."], 
      targetIndices: [3, 4, 5, 6], 
      targetRole: "C (that節)", 
      hint: "【初級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "困ったことは、彼女が知らないということだ。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-b-10", 
      tokens: ["This", "is", "how", "I", "made", "it."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "C (疑問詞節)", 
      hint: "【初級】光っている主語とイコールになる補語（C：疑問詞howの塊）をなぞってください。", 
      translation: "このようにして私はそれを作った。", 
      modifiedIndices: [0],
      grammarPoints: ["interrogative", "noun_clause"]
    },
    { 
      id: "compClause-b-11", 
      tokens: ["The", "fact", "is", "that", "he", "failed."], 
      targetIndices: [3, 4, 5], 
      targetRole: "C (that節)", 
      hint: "【初級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "実は、彼は失敗したのだ。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-b-12", 
      tokens: ["My", "belief", "is", "that", "he", "is", "innocent."], 
      targetIndices: [3, 4, 5, 6], 
      targetRole: "C (that節)", 
      hint: "【初級】光っている主語とイコールになる補語（C：that節）の塊をなぞってください。", 
      translation: "私の信念は、彼が無実だということだ。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-b-13", 
      tokens: ["This", "is", "when", "we", "must", "act."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "C (疑問詞節)", 
      hint: "【初級】光っている主語とイコールになる補語（C：疑問詞whenの塊）をなぞってください。", 
      translation: "今こそ私たちが行動しなければならない時だ。", 
      modifiedIndices: [0],
      grammarPoints: ["interrogative", "noun_clause"]
    },
    { 
      id: "compClause-b-14", 
      tokens: ["The", "good", "news", "is", "that", "everyone", "is", "safe."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "C (that節)", 
      hint: "【初級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "良い知らせは、全員が無事だということだ。", 
      modifiedIndices: [2],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-b-15", 
      tokens: ["Her", "hope", "is", "that", "peace", "will", "last."], 
      targetIndices: [3, 4, 5, 6], 
      targetRole: "C (that節)", 
      hint: "【初級】光っている主語とイコールになる補語（C：that節）の塊をなぞってください。", 
      translation: "彼女の希望は、平和が続くことだ。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },

    // 🟡 【中級】少し長い名詞節の補語（C）
    { 
      id: "compClause-i-1", 
      tokens: ["The", "point", "is", "whether", "we", "can", "trust", "him."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "C (whether節)", 
      hint: "【中級】光っている主語の具体的内容を説明する補語（C：「〜かどうか」の塊）をなぞってください。", 
      translation: "重要な点は、私たちが彼を信用できるかどうかだ。", 
      modifiedIndices: [1],
      grammarPoints: ["whether_if_clause", "noun_clause"]
    },
    { 
      id: "compClause-i-2", 
      tokens: ["That", "is", "exactly", "what", "I", "was", "thinking."], 
      targetIndices: [3, 4, 5, 6], 
      targetRole: "C (関係代名詞what)", 
      hint: "【中級】光っている主語とイコールになる補語（C：whatの塊）をなぞってください。", 
      translation: "それはまさに私が考えていたことだ。", 
      modifiedIndices: [0],
      grammarPoints: ["relative_pronoun", "noun_clause"]
    },
    { 
      id: "compClause-i-3", 
      tokens: ["The", "important", "thing", "is", "what", "you", "learn."], 
      targetIndices: [4, 5, 6], 
      targetRole: "C (関係代名詞what)", 
      hint: "【中級】光っている主語とイコールになる補語（C：whatの塊）をなぞってください。", 
      translation: "重要なことは、あなたが何を学ぶかだ。", 
      modifiedIndices: [2],
      grammarPoints: ["relative_pronoun", "noun_clause"]
    },
    { 
      id: "compClause-i-4", 
      tokens: ["My", "opinion", "is", "that", "we", "should", "start", "now."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "C (that節)", 
      hint: "【中級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "私の意見は、私たちは今始めるべきだということだ。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-i-5", 
      tokens: ["The", "only", "problem", "is", "who", "will", "do", "it."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "C (疑問詞節)", 
      hint: "【中級】光っている主語とイコールになる補語（C：疑問詞whoの塊）をなぞってください。", 
      translation: "唯一の問題は、誰がそれをするかだ。", 
      modifiedIndices: [2],
      grammarPoints: ["interrogative", "noun_clause"]
    },
    { 
      id: "compClause-i-6", 
      tokens: ["What", "matters", "is", "whether", "you", "tried", "hard."], 
      targetIndices: [3, 4, 5, 6], 
      targetRole: "C (whether節)", 
      hint: "【中級】光っている主語（名詞節）とイコールになる補語（C：「〜かどうか」の塊）をなぞってください。", 
      translation: "重要なのは、あなたが一生懸命努力したかどうかだ。", 
      modifiedIndices: [1],
      grammarPoints: ["whether_if_clause", "noun_clause"]
    },
    { 
      id: "compClause-i-7", 
      tokens: ["The", "truth", "of", "the", "matter", "is", "that", "we", "lost."], 
      targetIndices: [6, 7, 8], 
      targetRole: "C (that節)", 
      hint: "【中級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "事の真相は、私たちが負けたということだ。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-i-8", 
      tokens: ["This", "is", "why", "I", "decided", "to", "quit."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "C (疑問詞節)", 
      hint: "【中級】光っている主語とイコールになる補語（C：疑問詞whyの塊）をなぞってください。", 
      translation: "これが、私が辞める決心をした理由だ。", 
      modifiedIndices: [0],
      grammarPoints: ["interrogative", "noun_clause"]
    },
    { 
      id: "compClause-i-9", 
      tokens: ["The", "conclusion", "is", "that", "the", "project", "was", "successful."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "C (that節)", 
      hint: "【中級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "結論は、そのプロジェクトが成功したということだ。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-i-10", 
      tokens: ["That", "is", "where", "you", "are", "wrong."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "C (疑問詞節)", 
      hint: "【中級】光っている主語とイコールになる補語（C：疑問詞whereの塊）をなぞってください。", 
      translation: "そこがあなたの間違っているところだ。", 
      modifiedIndices: [0],
      grammarPoints: ["interrogative", "noun_clause"]
    },
    { 
      id: "compClause-i-11", 
      tokens: ["My", "main", "concern", "is", "how", "we", "will", "pay", "for", "it."], 
      targetIndices: [4, 5, 6, 7, 8, 9], 
      targetRole: "C (疑問詞節)", 
      hint: "【中級】光っている主語とイコールになる補語（C：疑問詞howの塊）をなぞってください。", 
      translation: "私の主な懸念は、私たちがどうやってその代金を払うかだ。", 
      modifiedIndices: [2],
      grammarPoints: ["interrogative", "noun_clause"]
    },
    { 
      id: "compClause-i-12", 
      tokens: ["The", "best", "part", "is", "that", "it", "is", "free."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "C (that節)", 
      hint: "【中級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "一番良い部分は、それが無料だということだ。", 
      modifiedIndices: [2],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-i-13", 
      tokens: ["This", "is", "what", "we", "call", "a", "miracle."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "C (関係代名詞what)", 
      hint: "【中級】光っている主語とイコールになる補語（C：whatの塊）をなぞってください。", 
      translation: "これがいわゆる奇跡というものだ。", 
      modifiedIndices: [0],
      grammarPoints: ["relative_pronoun", "noun_clause"]
    },
    { 
      id: "compClause-i-14", 
      tokens: ["Her", "excuse", "was", "that", "she", "missed", "the", "train."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "C (that節)", 
      hint: "【中級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "彼女の言い訳は、電車に乗り遅れたということだった。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-i-15", 
      tokens: ["The", "focus", "is", "how", "to", "improve", "the", "system."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "C (疑問詞＋to不定詞)", 
      hint: "【中級】光っている主語とイコールになる補語（C：疑問詞句の塊）をなぞってください。", 
      translation: "焦点は、いかにしてシステムを改善するかだ。", 
      modifiedIndices: [1],
      grammarPoints: ["interrogative", "infinitive", "noun_clause"]
    },

    // 🔴 【上級】長く複雑な名詞節の補語（C）
    { 
      id: "compClause-a-1", 
      tokens: ["What", "surprised", "me", "most", "was", "that", "he", "refused."], 
      targetIndices: [5, 6, 7], 
      targetRole: "C (that節)", 
      hint: "【上級】光っている主語（名詞節）の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "私を最も驚かせたのは、彼が拒否したということだった。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-a-2", 
      tokens: ["The", "big", "question", "is", "whether", "or", "not", "they", "will", "agree."], 
      targetIndices: [4, 5, 6, 7, 8, 9], 
      targetRole: "C (whether節)", 
      hint: "【上級】光っている主語の内容を説明する補語（C：「〜かどうか」の塊）をなぞってください。", 
      translation: "大きな疑問は、彼らが同意するかどうかだ。", 
      modifiedIndices: [2],
      grammarPoints: ["whether_if_clause", "noun_clause"]
    },
    { 
      id: "compClause-a-3", 
      tokens: ["Things", "are", "not", "what", "they", "used", "to", "be."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "C (関係代名詞what)", 
      hint: "【上級】光っている主語の状態を説明する補語（C：whatの塊）をなぞってください。", 
      translation: "物事はかつて（過去）の状態とは違っている。", 
      modifiedIndices: [0],
      grammarPoints: ["relative_pronoun", "noun_clause"]
    },
    { 
      id: "compClause-a-4", 
      tokens: ["One", "advantage", "is", "that", "you", "can", "work", "from", "home."], 
      targetIndices: [3, 4, 5, 6, 7, 8], 
      targetRole: "C (that節)", 
      hint: "【上級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "一つの利点は、在宅勤務ができるということだ。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-a-5", 
      tokens: ["The", "tragedy", "was", "that", "nobody", "noticed", "the", "danger."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "C (that節)", 
      hint: "【上級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "悲劇だったのは、誰もその危険に気づかなかったということだ。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-a-6", 
      tokens: ["This", "is", "exactly", "why", "we", "need", "to", "take", "action", "now."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9], 
      targetRole: "C (疑問詞節)", 
      hint: "【上級】光っている主語とイコールになる補語（C：疑問詞whyの長い塊）をなぞってください。", 
      translation: "これこそまさに、私たちが今行動を起こす必要がある理由だ。", 
      modifiedIndices: [0],
      grammarPoints: ["interrogative", "noun_clause"]
    },
    { 
      id: "compClause-a-7", 
      tokens: ["My", "impression", "is", "that", "she", "is", "hiding", "something."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "C (that節)", 
      hint: "【上級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "私の印象は、彼女が何かを隠しているということだ。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-a-8", 
      tokens: ["The", "crucial", "factor", "is", "how", "much", "money", "we", "have."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "C (疑問詞節)", 
      hint: "【上級】光っている主語とイコールになる補語（C：疑問詞howの長い塊）をなぞってください。", 
      translation: "決定的な要因は、私たちがいくらお金を持っているかだ。", 
      modifiedIndices: [2],
      grammarPoints: ["interrogative", "noun_clause"]
    },
    { 
      id: "compClause-a-9", 
      tokens: ["What", "I", "mean", "is", "that", "this", "method", "is", "inefficient."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "C (that節)", 
      hint: "【上級】光っている主語（名詞節）の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "私が言いたいのは、この方法は非効率的だということだ。", 
      modifiedIndices: [2],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-a-10", 
      tokens: ["The", "beauty", "of", "the", "system", "is", "that", "it", "updates", "automatically."], 
      targetIndices: [6, 7, 8, 9], 
      targetRole: "C (that節)", 
      hint: "【上級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "そのシステムの素晴らしい点は、自動的に更新されるということだ。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-a-11", 
      tokens: ["That", "is", "where", "the", "two", "theories", "differ."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "C (疑問詞節)", 
      hint: "【上級】光っている主語とイコールになる補語（C：疑問詞whereの塊）をなぞってください。", 
      translation: "そこがその2つの理論が異なるところだ。", 
      modifiedIndices: [0],
      grammarPoints: ["interrogative", "noun_clause"]
    },
    { 
      id: "compClause-a-12", 
      tokens: ["The", "main", "difference", "is", "whether", "it", "is", "legal."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "C (whether節)", 
      hint: "【上級】光っている主語の内容を説明する補語（C：「〜かどうか」の塊）をなぞってください。", 
      translation: "主な違いは、それが合法かどうかだ。", 
      modifiedIndices: [2],
      grammarPoints: ["whether_if_clause", "noun_clause"]
    },
    { 
      id: "compClause-a-13", 
      tokens: ["His", "argument", "is", "that", "the", "data", "is", "incorrect."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "C (that節)", 
      hint: "【上級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "彼の主張は、そのデータが間違っているということだ。", 
      modifiedIndices: [1],
      grammarPoints: ["that_clause", "noun_clause"]
    },
    { 
      id: "compClause-a-14", 
      tokens: ["This", "is", "how", "the", "universe", "was", "created."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "C (疑問詞節)", 
      hint: "【上級】光っている主語とイコールになる補語（C：疑問詞howの塊）をなぞってください。", 
      translation: "このようにして宇宙は創造された。", 
      modifiedIndices: [0],
      grammarPoints: ["interrogative", "noun_clause"]
    },
    { 
      id: "compClause-a-15", 
      tokens: ["The", "harsh", "reality", "is", "that", "we", "are", "out", "of", "options."], 
      targetIndices: [4, 5, 6, 7, 8, 9], 
      targetRole: "C (that節)", 
      hint: "【上級】光っている主語の具体的内容を説明する補語（C：that節）の塊をなぞってください。", 
      translation: "厳しい現実は、私たちにはもう選択肢がないということだ。", 
      modifiedIndices: [2],
      grammarPoints: ["that_clause", "noun_clause"]
    }
  ]
};