export const fast_fashion_L2 = {
  id: "ff-l2-b1",
  themeId: "fast_fashion",
  level: "Level 2 (B1 - Intermediate)",
  wordCount: 198,
  title: "The Hidden Problems Behind Cheap Fast Fashion",
  theme: "環境・社会",
  
  vocabulary: [
    { word: "benefit", meaning: "利益、利点", pos: "noun", synonyms: ["advantage", "profit"], nuance: "良い効果や助けになること。" },
    { word: "massive", meaning: "大量の、巨大な", pos: "adj", synonyms: ["huge", "enormous"], nuance: "規模や量が非常に大きいことを強調します。" },
    { word: "disposable", meaning: "使い捨ての", pos: "adj", synonyms: ["throwaway"], nuance: "一度か数回使ったら捨てる前提で作られたもの。" }
  ],

  paragraphs: [
    {
      p_id: 1,
      tokens: ["In", "recent", "years,", "fast", "fashion", "has", "changed", "the", "way", "we", "buy", "clothes.", "Stores", "offer", "the", "latest", "trends", "at", "very", "low", "prices,", "allowing", "consumers", "to", "change", "their", "styles", "frequently.", "While", "this", "seems", "like", "a", "great", "benefit,", "it", "hides", "serious", "environmental", "problems."],
      translation: "近年、ファストファッションは私たちの服の買い方を変えました。店は最新のトレンドを非常に安い価格で提供し、消費者が頻繁にスタイルを変えることを可能にしています。これは大きな利点のように思えますが、深刻な環境問題を隠しています。",
      tasks: [
        {
          taskId: "p1-t1",
          category: "content", 
          type: "trace", 
          instruction: "【コア抽出】この段落で筆者が本当に伝えたい「問題点」の部分をなぞってください。",
          targetIndices: [35, 36, 37, 38, 39], // "it hides serious environmental problems."
          partialIndices: [37, 38, 39],
          explanation: "While（〜である一方で）という譲歩のあとに、筆者の言いたい「隠された問題（hides serious problems）」が来ます。"
        }
      ]
    },
    {
      p_id: 2,
      tokens: ["First,", "producing", "millions", "of", "cheap", "garments", "requires", "massive", "amounts", "of", "water.", "For", "example,", "making", "just", "one", "cotton", "t-shirt", "takes", "about", "2,700", "liters", "of", "water.", "In", "addition,", "factories", "use", "toxic", "chemicals", "to", "dye", "the", "fabrics.", "These", "harmful", "substances", "often", "flow", "into", "local", "rivers,", "making", "the", "water", "unsafe", "for", "animals", "and", "people", "living", "nearby."],
      translation: "第一に、何百万もの安い衣服を生産することは大量の水を必要とします。例えば、たった1枚の綿のTシャツを作るのに約2,700リットルの水がかかります。加えて、工場は生地を染めるために有毒な化学物質を使います。これらの有害物質はしばしば地元の川に流れ込み、近くに住む動物や人々にとって水を安全でないものにします。",
      tasks: [
        {
          taskId: "p2-t1",
          category: "vocabulary", 
          type: "tap", 
          instruction: "【語彙ハント】「poisonous（有毒な）」と同じ意味で使われている形容詞をタップしてください。",
          targetIndex: 28, // "toxic"
          explanation: "toxic は「有毒な」という意味で、環境問題の長文では poisonous よりもしばしば使われる重要単語です。"
        },
        {
          taskId: "p2-t2",
          category: "structure", 
          type: "analyze", 
          instruction: "【SVOC分解】最後の文「making the water unsafe」において、O(目的語)とC(補語)の関係になっている2語を順番になぞってください。",
          targetV: [43, 44], // "the water" (O)
          targetO: [45], // "unsafe" (C)
          explanation: "make O C（OをCの状態にする）の構造です。水を、unsafe（安全でない状態）にする、というつながりです。"
        }
      ]
    },
    {
      p_id: 3,
      tokens: ["Another", "major", "issue", "is", "the", "staggering", "amount", "of", "waste", "generated", "by", "this", "industry.", "Because", "fast", "fashion", "clothes", "are", "cheap", "and", "often", "made", "with", "low-quality", "synthetic", "materials,", "people", "throw", "them", "away", "after", "wearing", "them", "only", "a", "few", "times.", "Consequently,", "millions", "of", "tons", "of", "clothing", "end", "up", "in", "landfills", "or", "are", "burned", "every", "single", "year,", "causing", "more", "air", "pollution."],
      translation: "もう一つの大きな問題は、この産業によって生み出される驚くべき量の廃棄物です。ファストファッションの服は安く、しばしば低品質の合成素材で作られているため、人々はほんの数回着ただけでそれらを捨ててしまいます。結果として、何百万トンもの衣類が毎年ゴミ処理場に行き着くか、あるいは燃やされ、さらなる大気汚染を引き起こしています。",
      tasks: [
        {
          taskId: "p3-t1",
          category: "summary", 
          type: "select", 
          instruction: "【段落要約】この段落の論理展開（原因➡結果）として正しいものはどれですか？",
          options: [
            { text: "Clothes are cheap and low-quality ➡ People throw them away quickly ➡ Huge waste is created", isCorrect: true, explanation: "Because 〜（原因）から Consequently 〜（結果）への見事な論理展開です。" },
            { text: "Air pollution is increasing ➡ Factories use synthetic materials ➡ Clothes become cheap", isCorrect: false, explanation: "原因と結果の矢印が逆、あるいは無茶苦茶になっています。" }
          ]
        }
      ]
    },
    {
      p_id: 4,
      tokens: ["To", "protect", "our", "planet,", "we", "urgently", "need", "to", "change", "our", "shopping", "habits.", "Instead", "of", "buying", "cheap,", "disposable", "clothes", "every", "season,", "we", "should", "choose", "sustainable", "brands", "or", "buy", "second-hand", "items.", "It", "is", "time", "to", "value", "quality", "over", "quantity."],
      translation: "地球を守るために、私たちは買い物習慣を緊急に変える必要があります。毎シーズン安くて使い捨ての服を買う代わりに、私たちは持続可能なブランドを選ぶか、中古品を買うべきです。今こそ、量より質を重んじる時なのです。",
      tasks: [
        {
          taskId: "p4-t1",
          category: "content", 
          type: "trace", 
          instruction: "【コア抽出】「私たちが服を買うときに、今後大切にすべき考え方」をズバリ表している部分をなぞってください。",
          targetIndices: [33, 34, 35, 36], // "value quality over quantity."
          partialIndices: [34, 35, 36],
          explanation: "「質（quality）を、量（quantity）よりも（over）大切にする（value）」という素晴らしい表現です。"
        }
      ]
    }
  ],

  globalTasks: [
    {
      taskId: "g-t1",
      category: "comprehension",
      type: "select",
      instruction: "【Main Idea】この長文のMain Ideaとして最もふさわしいものはどれですか？",
      options: [
        { text: "Fast fashion creates serious water pollution and waste, so consumers must change their shopping habits.", isCorrect: true, explanation: "問題（水質汚染とゴミ）と、最終段落の解決策（消費者の行動変化）を過不足なく要約しています。" },
        { text: "Recycling clothes is the only way to stop global warming.", isCorrect: false, explanation: "リサイクルが「唯一の方法」とは書かれておらず、大気汚染には触れていますが地球温暖化（global warming）自体はメインテーマではありません。" }
      ]
    },
    {
      taskId: "g-t2",
      category: "readAloud",
      type: "voice",
      instruction: "【音読ミッション】A over B（BよりもA）の比較を強調して音読しましょう！",
      targetSentence: "It is time to value quality over quantity."
    }
  ]
};