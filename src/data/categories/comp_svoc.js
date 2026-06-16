export const compSvocCategory = {
  categoryId: "compSvoc",
  title: "Sub-2: 第5文型 (SVOC)",
  description: "目的語の役職や状態を表す名詞・形容詞",
 problems: [
    { 
      id: "compSvoc-b-1", 
      tokens: ["I", "make", "him", "happy."], 
      targetIndices: [3], 
      targetRole: "C (目的格補語)", 
      hint: "【初級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私は彼を幸せにする。", 
      modifiedIndices: [2],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-b-2", 
      tokens: ["We", "call", "him", "Ken."], 
      targetIndices: [3], 
      targetRole: "C (目的格補語)", 
      hint: "【初級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私たちは彼をケンと呼ぶ。", 
      modifiedIndices: [2],
      grammarPoints: ["noun"]
    },
    { 
      id: "compSvoc-b-3", 
      tokens: ["She", "kept", "the", "room", "clean."], 
      targetIndices: [4], 
      targetRole: "C (目的格補語)", 
      hint: "【初級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼女は部屋をきれいに保った。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-b-4", 
      tokens: ["He", "found", "the", "book", "interesting."], 
      targetIndices: [4], 
      targetRole: "C (目的格補語)", 
      hint: "【初級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼はその本が面白いとわかった。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-b-5", 
      tokens: ["They", "named", "the", "dog", "Pochi."], 
      targetIndices: [4], 
      targetRole: "C (目的格補語)", 
      hint: "【初級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼らはその犬をポチと名付けた。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["noun"]
    },
    { 
      id: "compSvoc-b-6", 
      tokens: ["The", "news", "made", "me", "sad."], 
      targetIndices: [4], 
      targetRole: "C (目的格補語)", 
      hint: "【初級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "その知らせは私を悲しくさせた。", 
      modifiedIndices: [3],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-b-7", 
      tokens: ["I", "left", "the", "door", "open."], 
      targetIndices: [4], 
      targetRole: "C (目的格補語)", 
      hint: "【初級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私はドアを開けっ放しにしておいた。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-b-8", 
      tokens: ["We", "elected", "him", "president."], 
      targetIndices: [3], 
      targetRole: "C (目的格補語)", 
      hint: "【初級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私たちは彼を大統領に選んだ。", 
      modifiedIndices: [2],
      grammarPoints: ["noun"]
    },
    { 
      id: "compSvoc-b-9", 
      tokens: ["You", "drive", "me", "crazy."], 
      targetIndices: [3], 
      targetRole: "C (目的格補語)", 
      hint: "【初級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "あなたは私を夢中にさせる（またはイライラさせる）。", 
      modifiedIndices: [2],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-b-10", 
      tokens: ["She", "dyed", "her", "hair", "red."], 
      targetIndices: [4], 
      targetRole: "C (目的格補語)", 
      hint: "【初級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼女は髪を赤く染めた。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-b-11", 
      tokens: ["He", "painted", "the", "wall", "white."], 
      targetIndices: [4], 
      targetRole: "C (目的格補語)", 
      hint: "【初級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼は壁を白く塗った。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-b-12", 
      tokens: ["I", "found", "the", "box", "empty."], 
      targetIndices: [4], 
      targetRole: "C (目的格補語)", 
      hint: "【初級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私はその箱が空だとわかった。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-b-13", 
      tokens: ["They", "left", "him", "alone."], 
      targetIndices: [3], 
      targetRole: "C (目的格補語)", 
      hint: "【初級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼らは彼を一人にしておいた。", 
      modifiedIndices: [2],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-b-14", 
      tokens: ["We", "consider", "him", "a", "genius."], 
      targetIndices: [3, 4], 
      targetRole: "C (目的格補語)", 
      hint: "【初級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私たちは彼を天才だと見なしている。", 
      modifiedIndices: [2],
      grammarPoints: ["noun"]
    },
    { 
      id: "compSvoc-b-15", 
      tokens: ["The", "music", "makes", "me", "relaxed."], 
      targetIndices: [4], 
      targetRole: "C (目的格補語)", 
      hint: "【初級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "その音楽は私をリラックスさせる。", 
      modifiedIndices: [3],
      grammarPoints: ["past_participle", "adjective"]
    },
    { 
      id: "compSvoc-i-1", 
      tokens: ["The", "warm", "weather", "makes", "the", "flowers", "beautiful."], 
      targetIndices: [6], 
      targetRole: "C (目的格補語)", 
      hint: "【中級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "暖かい天候が花を美しくする。", 
      modifiedIndices: [4, 5],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-i-2", 
      tokens: ["We", "found", "the", "sleeping", "baby", "cute."], 
      targetIndices: [5], 
      targetRole: "C (目的格補語)", 
      hint: "【中級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私たちはその眠っている赤ちゃんが可愛いとわかった。", 
      modifiedIndices: [2, 3, 4],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-i-3", 
      tokens: ["She", "considers", "her", "dog", "a", "member", "of", "the", "family."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "C (目的格補語)", 
      hint: "【中級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼女は自分の犬を家族の一員だと考えている。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["noun"]
    },
    { 
      id: "compSvoc-i-4", 
      tokens: ["They", "kept", "the", "old", "house", "clean."], 
      targetIndices: [5], 
      targetRole: "C (目的格補語)", 
      hint: "【中級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼らはその古い家をきれいに保った。", 
      modifiedIndices: [2, 3, 4],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-i-5", 
      tokens: ["He", "named", "his", "new", "boat", "Sea", "Bird."], 
      targetIndices: [5, 6], 
      targetRole: "C (目的格補語)", 
      hint: "【中級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼は新しいボートをシーバード号と名付けた。", 
      modifiedIndices: [2, 3, 4],
      grammarPoints: ["noun"]
    },
    { 
      id: "compSvoc-i-6", 
      tokens: ["The", "long", "journey", "made", "them", "very", "tired."], 
      targetIndices: [5, 6], 
      targetRole: "C (目的格補語)", 
      hint: "【中級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "その長い旅は彼らをとても疲れさせた。", 
      modifiedIndices: [4],
      grammarPoints: ["past_participle", "adjective"]
    },
    { 
      id: "compSvoc-i-7", 
      tokens: ["We", "elected", "him", "captain", "of", "the", "baseball", "team."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "C (目的格補語)", 
      hint: "【中級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私たちは彼を野球チームのキャプテンに選んだ。", 
      modifiedIndices: [2],
      grammarPoints: ["noun"]
    },
    { 
      id: "compSvoc-i-8", 
      tokens: ["I", "found", "the", "math", "problem", "too", "difficult."], 
      targetIndices: [5, 6], 
      targetRole: "C (目的格補語)", 
      hint: "【中級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私はその数学の問題が難しすぎるとわかった。", 
      modifiedIndices: [2, 3, 4],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-i-9", 
      tokens: ["Don't", "leave", "the", "water", "running."], 
      targetIndices: [4], 
      targetRole: "C (目的格補語)", 
      hint: "【中級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "水を出したままにしてはいけません。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["present_participle"]
    },
    { 
      id: "compSvoc-i-10", 
      tokens: ["She", "painted", "her", "fingernails", "bright", "pink."], 
      targetIndices: [4, 5], 
      targetRole: "C (目的格補語)", 
      hint: "【中級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼女は爪を明るいピンク色に塗った。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-i-11", 
      tokens: ["He", "likes", "his", "coffee", "black."], 
      targetIndices: [4], 
      targetRole: "C (目的格補語)", 
      hint: "【中級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼はコーヒーをブラックで飲むのが好きだ。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-i-12", 
      tokens: ["They", "proved", "the", "rumor", "false."], 
      targetIndices: [4], 
      targetRole: "C (目的格補語)", 
      hint: "【中級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼らはその噂が嘘だと証明した。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-i-13", 
      tokens: ["We", "believe", "him", "innocent", "of", "the", "crime."], 
      targetIndices: [3, 4, 5, 6], 
      targetRole: "C (目的格補語)", 
      hint: "【中級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私たちは彼がその犯罪に関して無実だと信じている。", 
      modifiedIndices: [2],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-i-14", 
      tokens: ["The", "bad", "news", "made", "everyone", "in", "the", "room", "quiet."], 
      targetIndices: [8], 
      targetRole: "C (目的格補語)", 
      hint: "【中級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "その悪い知らせは部屋にいる全員を静かにさせた。", 
      modifiedIndices: [4, 5, 6, 7],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-i-15", 
      tokens: ["I", "found", "the", "movie", "more", "interesting", "than", "the", "book."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "C (目的格補語)", 
      hint: "【中級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私はその映画が本より面白いとわかった。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-a-1", 
      tokens: ["The", "committee", "elected", "Mr.", "Smith", "chairman", "of", "the", "board."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "C (目的格補語)", 
      hint: "【上級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "委員会はスミス氏を会長に選んだ。", 
      modifiedIndices: [3, 4],
      grammarPoints: ["noun"]
    },
    { 
      id: "compSvoc-a-2", 
      tokens: ["Her", "constant", "complaining", "drives", "everyone", "in", "the", "office", "crazy."], 
      targetIndices: [8], 
      targetRole: "C (目的格補語)", 
      hint: "【上級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼女の絶え間ない不満は、オフィスの全員をイライラさせる。", 
      modifiedIndices: [4, 5, 6, 7],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-a-3", 
      tokens: ["We", "consider", "it", "our", "duty", "to", "help", "the", "poor", "people."], 
      targetIndices: [3, 4], 
      targetRole: "C (目的格補語)", 
      hint: "【上級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私たちは貧しい人々を助けるのが義務だと考えている。", 
      modifiedIndices: [2],
      grammarPoints: ["noun", "formal_it"]
    },
    { 
      id: "compSvoc-a-4", 
      tokens: ["I", "found", "the", "explanation", "given", "by", "the", "teacher", "very", "helpful."], 
      targetIndices: [8, 9], 
      targetRole: "C (目的格補語)", 
      hint: "【上級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私は先生による説明がとても役立つとわかった。", 
      modifiedIndices: [2, 3, 4, 5, 6, 7],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-a-5", 
      tokens: ["They", "kept", "the", "true", "purpose", "of", "the", "project", "secret."], 
      targetIndices: [8], 
      targetRole: "C (目的格補語)", 
      hint: "【上級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼らはプロジェクトの真の目的を秘密にしておいた。", 
      modifiedIndices: [2, 3, 4, 5, 6, 7],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-a-6", 
      tokens: ["He", "left", "the", "important", "documents", "locked", "in", "the", "safe."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "C (目的格補語)", 
      hint: "【上級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼は重要な書類を金庫に鍵をかけてしまっておいた。", 
      modifiedIndices: [2, 3, 4],
      grammarPoints: ["past_participle"]
    },
    { 
      id: "compSvoc-a-7", 
      tokens: ["The", "sudden", "noise", "made", "the", "sleeping", "child", "awake."], 
      targetIndices: [7], 
      targetRole: "C (目的格補語)", 
      hint: "【上級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "突然の騒音で、眠っていた子どもは目を覚ました。", 
      modifiedIndices: [4, 5, 6],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-a-8", 
      tokens: ["We", "proved", "his", "complicated", "theory", "wrong", "at", "last."], 
      targetIndices: [5], 
      targetRole: "C (目的格補語)", 
      hint: "【上級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私たちはついに彼の複雑な理論が間違っていると証明した。", 
      modifiedIndices: [2, 3, 4],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-a-9", 
      tokens: ["She", "named", "the", "newly", "discovered", "star", "Hope."], 
      targetIndices: [6], 
      targetRole: "C (目的格補語)", 
      hint: "【上級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼女は新しく発見された星を希望と名付けた。", 
      modifiedIndices: [2, 3, 4, 5],
      grammarPoints: ["noun"]
    },
    { 
      id: "compSvoc-a-10", 
      tokens: ["The", "judge", "declared", "the", "man", "guilty", "of", "all", "charges."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "C (目的格補語)", 
      hint: "【上級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "裁判官はその男をすべての容疑で有罪と宣告した。", 
      modifiedIndices: [3, 4],
      grammarPoints: ["adjective"]
    },
    { 
      id: "compSvoc-a-11", 
      tokens: ["I", "like", "my", "steak", "cooked", "medium", "rare."], 
      targetIndices: [4, 5, 6], 
      targetRole: "C (目的格補語)", 
      hint: "【上級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私はステーキをミディアムレアに焼いてもらうのが好きだ。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["past_participle"]
    },
    { 
      id: "compSvoc-a-12", 
      tokens: ["They", "appointed", "him", "manager", "of", "the", "new", "department."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "C (目的格補語)", 
      hint: "【上級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼らは彼を新部門のマネージャーに任命した。", 
      modifiedIndices: [2],
      grammarPoints: ["noun"]
    },
    { 
      id: "compSvoc-a-13", 
      tokens: ["His", "hard", "work", "made", "him", "a", "successful", "businessman."], 
      targetIndices: [5, 6, 7], 
      targetRole: "C (目的格補語)", 
      hint: "【上級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "彼の懸命な努力が、彼を成功した実業家にした。", 
      modifiedIndices: [4],
      grammarPoints: ["noun"]
    },
    { 
      id: "compSvoc-a-14", 
      tokens: ["We", "found", "the", "old", "castle", "completely", "ruined."], 
      targetIndices: [5, 6], 
      targetRole: "C (目的格補語)", 
      hint: "【上級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "私たちはその古い城が完全に廃墟になっているとわかった。", 
      modifiedIndices: [2, 3, 4],
      grammarPoints: ["past_participle", "adjective"]
    },
    { 
      id: "compSvoc-a-15", 
      tokens: ["The", "coach", "made", "the", "players", "ready", "for", "the", "big", "game."], 
      targetIndices: [5, 6, 7, 8, 9], 
      targetRole: "C (目的格補語)", 
      hint: "【上級】光っている目的語（O）の状態や身分を説明している補語（C）をなぞってください。", 
      translation: "コーチは選手たちに大一番に向けた準備をさせた。", 
      modifiedIndices: [3, 4],
      grammarPoints: ["adjective"]
    }
  ]
  };