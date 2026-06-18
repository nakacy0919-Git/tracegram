export const fast_fashion_L1 = {
  id: "ff-l1-a2",
  themeId: "fast_fashion",
  level: "Level 1 (A2 - Basic)",
  wordCount: 95,
  title: "Fast Fashion is Cheap but Bad for the Earth",
  theme: "環境・社会",
  
  vocabulary: [
    { word: "popular", meaning: "人気がある", pos: "adj", synonyms: ["famous", "well-liked"], nuance: "多くの人に好まれている状態。" },
    { word: "dangerous", meaning: "危険な", pos: "adj", synonyms: ["harmful", "unsafe"], nuance: "命や環境に悪い影響を与えるもの。" },
    { word: "garbage", meaning: "ゴミ", pos: "noun", synonyms: ["trash", "waste"], nuance: "生活から出る不要なもの。" }
  ],

  paragraphs: [
    {
      p_id: 1,
      tokens: ["Fast", "fashion", "is", "very", "popular", "around", "the", "world", "today.", "We", "can", "buy", "new", "and", "trendy", "clothes", "at", "very", "low", "prices.", "Many", "young", "people", "enjoy", "shopping", "for", "these", "cheap", "clothes", "every", "week.", "However,", "this", "cheap", "fashion", "has", "a", "big", "problem", "for", "our", "earth."],
      translation: "今日、ファストファッションは世界中でとても人気があります。私たちは新しくて流行の服をとても安い価格で買うことができます。多くの若者が毎週これらの安い服の買い物を楽しんでいます。しかし、この安いファッションは地球にとって大きな問題を持っています。",
      tasks: [
        {
          taskId: "p1-t1",
          category: "content", 
          type: "trace", 
          instruction: "【コア抽出】この段落で筆者が伝えたい「ネガティブな事実（メインアイデア）」をなぞってください。",
          targetIndices: [32, 33, 34, 35, 36, 37, 38, 39, 40, 41], // "this cheap fashion has a big problem for our earth."
          partialIndices: [35, 36, 37, 38],
          explanation: "However（しかし）の後ろに、筆者が一番言いたいことが来ます。"
        }
      ]
    },
    {
      p_id: 2,
      tokens: ["Making", "so", "many", "clothes", "uses", "a", "huge", "amount", "of", "water.", "Factory", "workers", "also", "use", "dangerous", "chemicals", "to", "color", "the", "clothes.", "This", "makes", "local", "rivers", "very", "dirty.", "Furthermore,", "when", "we", "throw", "away", "old", "clothes", "quickly,", "they", "become", "a", "mountain", "of", "garbage.", "We", "must", "think", "carefully", "about", "our", "beautiful", "nature", "before", "we", "buy", "new", "clothes."],
      translation: "そんなに多くの服を作ることは、巨大な量の水を使います。工場の労働者たちも服に色をつけるために危険な化学物質を使います。これは地元の川をとても汚くします。さらに、私たちが古い服をすぐに捨ててしまうと、それらはゴミの山になります。私たちは新しい服を買う前に、美しい自然について注意深く考えなければなりません。",
      tasks: [
        {
          taskId: "p2-t1",
          category: "vocabulary", 
          type: "tap", 
          instruction: "【語彙ハント】「harmful（有害な）」と似た意味で使われている単語をタップしてください。",
          targetIndex: 14, // "dangerous"
          explanation: "dangerous（危険な）は harmful と同じような意味で使われます。ここでは化学物質（chemicals）の危険性を表しています。"
        },
        {
          taskId: "p2-t2",
          category: "summary", 
          type: "select", 
          instruction: "【言い換え】「become a mountain of garbage」とはどういう意味ですか？",
          options: [
            { text: "Create a very large amount of waste", isCorrect: true, explanation: "mountain of garbage（ゴミの山）は、比喩的に「大量のゴミ（waste）」を生み出すことを表しています。" },
            { text: "Build a new mountain made of clothes", isCorrect: false, explanation: "文字通り「新しい山を作る」わけではありません。" }
          ]
        }
      ]
    }
  ],

  globalTasks: [
    {
      taskId: "g-t1",
      category: "comprehension",
      type: "select",
      instruction: "【Main Idea】この文章のまとめとして最も正しいものはどれですか？",
      options: [
        { text: "Fast fashion is cheap, but it causes water pollution and too much garbage.", isCorrect: true, explanation: "安いこと（cheap）の裏にある、水質汚染（water pollution）とゴミ（garbage）の問題を見事にまとめています。" },
        { text: "We should buy more fast fashion because it is cheap and trendy.", isCorrect: false, explanation: "筆者は環境のために注意深く考えるよう求めており、もっと買うべきだとは言っていません。" }
      ]
    },
    {
      taskId: "g-t2",
      category: "readAloud",
      type: "voice",
      instruction: "【音読ミッション】筆者のメッセージを相手に伝えるように音読しましょう。",
      targetSentence: "We must think carefully about our beautiful nature before we buy new clothes."
    }
  ]
};