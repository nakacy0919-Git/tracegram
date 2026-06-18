export const fast_fashion_L3 = {
  id: "ff-l3-b2",
  themeId: "fast_fashion",
  level: "Level 3 (B2 - Upper Intermediate)",
  wordCount: 279,
  title: "The Environmental and Social Costs of Fast Fashion",
  theme: "環境・経済・倫理",
  
  vocabulary: [
    { word: "revolutionize", meaning: "〜に革命を起こす", pos: "verb", synonyms: ["transform completely"], nuance: "物事を根本から良くも悪くも変えてしまうこと。" },
    { word: "relentless", meaning: "容赦ない、絶え間ない", pos: "adj", synonyms: ["endless", "continuous"], nuance: "休むことなく厳しく続く様子。" },
    { word: "exploit", meaning: "〜を搾取する", pos: "verb", synonyms: ["take advantage of"], nuance: "労働者などを不当に安い賃金で働かせ、利益を吸い取ること。" }
  ],

  paragraphs: [
    {
      p_id: 1,
      tokens: ["The", "rise", "of", "fast", "fashion", "has", "revolutionized", "the", "global", "clothing", "industry,", "providing", "consumers", "with", "affordable", "and", "trendy", "garments.", "While", "the", "ability", "to", "buy", "stylish", "clothes", "cheaply", "seems", "highly", "attractive,", "this", "convenience", "comes", "with", "hidden", "environmental", "and", "social", "costs.", "The", "business", "model", "relies", "on", "mass-producing", "items", "at", "lightning", "speed,", "fundamentally", "prioritizing", "profit", "over", "sustainability."],
      translation: "ファストファッションの台頭は、手頃で流行の服を消費者に提供し、世界の衣料品業界に革命を起こした。スタイリッシュな服を安く買える能力は非常に魅力的に思える一方で、この便利さには隠された環境的・社会的代償が伴う。このビジネスモデルは、光の速さでアイテムを大量生産することに依存しており、根本的に持続可能性よりも利益を優先しているのだ。",
      tasks: [
        {
          taskId: "p1-t1",
          category: "content", 
          type: "trace", 
          instruction: "【コア抽出】この段落の最後で、ファストファッション企業の「本質的な問題の姿勢」を表している部分をなぞってください。",
          targetIndices: [49, 50, 51, 52], // "prioritizing profit over sustainability."
          partialIndices: [50, 51, 52],
          explanation: "prioritize A over B (BよりもAを優先する)。持続可能性よりも利益(profit)を優先しているという痛烈な批判です。"
        }
      ]
    },
    {
      p_id: 2,
      tokens: ["One", "of", "the", "most", "severe", "consequences", "of", "this", "relentless", "production", "is", "water", "pollution.", "The", "textile", "industry", "consumes", "billions", "of", "liters", "of", "water", "annually", "and", "heavily", "utilizes", "toxic", "dyes.", "These", "hazardous", "chemicals", "are", "frequently", "discharged", "into", "local", "waterways", "without", "proper", "treatment,", "devastating", "aquatic", "ecosystems", "and", "endangering", "the", "health", "of", "nearby", "communities.", "Furthermore,", "the", "reliance", "on", "synthetic", "fabrics", "like", "polyester", "means", "that", "washing", "these", "garments", "releases", "countless", "microplastics", "into", "the", "ocean,", "eventually", "entering", "the", "food", "chain."],
      translation: "この容赦ない生産の最も深刻な結果の一つが水質汚染である。繊維産業は年間数十億リットルの水を消費し、有毒な染料を大量に使用する。これらの危険な化学物質は適切な処理なしに地元の水路に頻繁に排出され、水生生態系を破壊し、近隣コミュニティの健康を危険にさらしている。さらに、ポリエステルのような合成繊維への依存は、これらの衣服を洗うことで無数のマイクロプラスチックが海に放出され、最終的に食物連鎖に入り込むことを意味する。",
      tasks: [
        {
          taskId: "p2-t1",
          category: "vocabulary", 
          type: "tap", 
          instruction: "【語彙ハント】「dangerous（危険な）」と同義で使われている高度な形容詞をタップしてください。",
          targetIndex: 29, // "hazardous"
          explanation: "hazardous は dangerous よりもさらにフォーマルで、廃棄物や化学物質の「有害性」を表す際によく使われます。"
        },
        {
          taskId: "p2-t2",
          category: "structure", 
          type: "analyze", 
          instruction: "【分詞構文】「〜しながら」と同時進行の被害を付け足している、2つの現在分詞（〜ing）のカタマリを順番になぞってください。",
          targetV: [40, 41, 42], // "devastating aquatic ecosystems"
          targetO: [44, 45, 46, 47, 48, 49], // "endangering the health of nearby communities"
          explanation: "カンマの後ろの devastating(破壊しながら) と endangering(危険にさらしながら) が、文全体の結果・付帯状況を表す分詞構文です。"
        }
      ]
    },
    {
      p_id: 3,
      tokens: ["Beyond", "the", "environmental", "damage,", "the", "fast", "fashion", "industry", "is", "notorious", "for", "its", "unethical", "labor", "practices.", "To", "keep", "retail", "prices", "incredibly", "low,", "many", "multinational", "brands", "outsource", "their", "manufacturing", "to", "developing", "nations.", "In", "these", "countries,", "garment", "workers", "are", "often", "subjected", "to", "grueling", "hours,", "unsafe", "working", "conditions,", "and", "wages", "that", "barely", "cover", "their", "basic", "needs.", "This", "exploitative", "system", "allows", "consumers", "in", "wealthy", "countries", "to", "enjoy", "cheap", "fashion,", "while", "vulnerable", "workers", "pay", "the", "real", "price."],
      translation: "環境へのダメージを越えて、ファストファッション産業は非倫理的な労働慣行で悪名高い。小売価格を信じられないほど低く保つために、多くの多国籍ブランドは製造を発展途上国に外注している。これらの国々では、衣服労働者はしばしば過酷な長時間労働、安全でない労働条件、そして基本的な生活の必要性をかろうじて満たす程度の賃金に服従させられている。この搾取的なシステムは、裕福な国の消費者が安いファッションを楽しむことを可能にする一方で、脆弱な労働者がその「真の代償」を払っているのである。",
      tasks: [
        {
          taskId: "p3-t1",
          category: "summary", 
          type: "select", 
          instruction: "【段落要約】最後の文「vulnerable workers pay the real price」とはどういう意味ですか？",
          options: [
            { text: "Workers suffer the physical and financial hardships to keep the clothes cheap.", isCorrect: true, explanation: "pay the real price（真の代償を払う）とは、お金を払っているのではなく「過酷な労働という犠牲を払わされている」という比喩です。" },
            { text: "Workers have to buy the clothes they make at the original factory price.", isCorrect: false, explanation: "文字通り「服の値段を支払う」わけではありません。" }
          ]
        }
      ]
    },
    {
      p_id: 4,
      tokens: ["Fortunately,", "awareness", "of", "these", "alarming", "issues", "is", "gradually", "increasing.", "A", "growing", "number", "of", "environmentally", "conscious", "consumers", "are", "beginning", "to", "reject", "the", "throwaway", "culture.", "To", "truly", "mitigate", "this", "crisis,", "however,", "the", "industry", "must", "transition", "toward", "a", "circular", "economy,", "where", "clothes", "are", "designed", "to", "last", "longer", "and", "be", "recycled.", "Ultimately,", "both", "strict", "government", "regulations", "and", "a", "significant", "shift", "in", "consumer", "behavior", "are", "essential", "to", "hold", "these", "powerful", "brands", "accountable", "and", "protect", "our", "planet's", "future."],
      translation: "幸いなことに、これらの警告すべき問題に対する意識は徐々に高まっている。環境意識の高い消費者の増加により、使い捨て文化を拒絶し始めている。しかし、この危機を真に和らげるためには、業界は衣服が長持ちし、リサイクルされるように設計される「サーキュラーエコノミー（循環型経済）」へと移行しなければならない。最終的には、これらの強力なブランドに責任を取らせ、地球の未来を守るためには、厳格な政府の規制と消費者行動の大きな変化の両方が不可欠である。",
      tasks: [
        {
          taskId: "p4-t1",
          category: "content", 
          type: "trace", 
          instruction: "【解決策】筆者が結論として挙げている「事態を変えるために不可欠な2つの要素（A and B）」をなぞってください。",
          targetIndices: [49, 50, 51, 52, 53, 54, 55, 56, 57, 58], // "strict government regulations and a significant shift in consumer behavior"
          partialIndices: [49, 50, 51], // "strict government regulations" などを一部だけなぞった場合
          explanation: "both A and B（AとBの両方）。政府の規制（regulations）と、消費者の行動変化（behavior）の両輪が必要だと結論づけています。"
        }
      ]
    }
  ],

  globalTasks: [
    {
      taskId: "g-t1",
      category: "comprehension",
      type: "select",
      instruction: "【Main Idea】この長文を通じて筆者が伝えたいことはどれですか？",
      options: [
        { text: "Fast fashion causes severe environmental and social damage, requiring systemic changes from both governments and consumers.", isCorrect: true, explanation: "前半の環境ダメージ・社会（労働）ダメージと、後半の「政府と消費者の変化」という解決策を完璧に要約しています。" },
        { text: "Fast fashion relies heavily on outsourced labor in developing countries, which helps those economies grow rapidly.", isCorrect: false, explanation: "途上国への外注は言及されていますが、それが「経済を急速に成長させる」というポジティブな側面は語られていません。" }
      ]
    },
    {
      taskId: "g-t2",
      category: "readAloud",
      type: "voice",
      instruction: "【シャドーイング】この長文の核となる比喩表現を、感情を込めて音読しましょう。",
      targetSentence: "This exploitative system allows consumers to enjoy cheap fashion, while vulnerable workers pay the real price."
    }
  ]
};