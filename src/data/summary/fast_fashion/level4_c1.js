export const fast_fashion_L4 = {
  id: "ff-l4-c1-full",
  themeId: "fast_fashion",
  level: "Level 4 (C1 - Advanced)",
  wordCount: 506,
  title: "Unraveling the Ecological and Ethical Ramifications of Fast Fashion",
  theme: "環境・経済・倫理",
  
  // 📖 C1レベルの超詳細な語彙・類義語サポート
  vocabulary: [
    { word: "proliferation", meaning: "激増、拡散", pos: "noun", synonyms: ["rapid increase", "expansion"], nuance: "ネガティブな文脈で使われることが多い、極めてアカデミックな単語です。" },
    { word: "belie", meaning: "〜を偽る、〜と矛盾する", pos: "verb", synonyms: ["contradict", "conceal"], nuance: "「外見は良く見えるが、実は裏に悪い事実が隠れている」という状況を表すC1の超重要語彙。" },
    { word: "paradigm", meaning: "パラダイム、理論的枠組み", pos: "noun", synonyms: ["framework", "model"], nuance: "業界の根本的な構造や考え方を指します。" },
    { word: "obfuscation", meaning: "曖昧にすること、ごまかし", pos: "noun", synonyms: ["concealment", "confusion"], nuance: "意図的に事実を隠蔽する悪意を含みます。" },
    { word: "insidious", meaning: "陰険な、密かに進行する", pos: "adj", synonyms: ["stealthy", "subtle but harmful"], nuance: "病気や汚染など、気づかないうちに悪化していく恐ろしいものを指します。" },
    { word: "obsolescence", meaning: "陳腐化、時代遅れになること", pos: "noun", synonyms: ["outdatedness"], nuance: "planned obsolescence（計画的陳腐化：わざとすぐ壊れるように作る手法）として頻出。" },
    { word: "ephemeral", meaning: "つかの間の、短命の", pos: "adj", synonyms: ["fleeting", "short-lived"], nuance: "トレンドや喜びなど、すぐに消え去ってしまう儚いものを表します。" },
    { word: "mitigate", meaning: "〜を和らげる、軽減する", pos: "verb", synonyms: ["alleviate", "reduce"], nuance: "問題や苦痛を完全に無くすのではなく「マシにする」という現実的な解決策に使われます。" }
  ],

  // 📝 5パラグラフにわたる論理展開とミッション
  paragraphs: [
    {
      p_id: 1,
      tokens: ["The", "proliferation", "of", "fast", "fashion", "has", "irrevocably", "altered", "the", "global", "apparel", "landscape.", "While", "the", "democratization", "of", "trends", "offers", "unprecedented", "accessibility", "to", "consumers", "across", "socioeconomic", "strata,", "it", "belies", "a", "systemic", "ecological", "crisis", "of", "staggering", "proportions.", "The", "industry's", "fundamental", "paradigm", "is", "predicated", "on", "the", "rapid", "translation", "of", "high-fashion", "designs", "into", "mass-market", "commodities,", "a", "process", "that", "inherently", "prioritizes", "velocity", "and", "volume", "over", "sustainability.", "Consequently,", "the", "true", "cost", "of", "this", "ubiquitous", "accessibility", "is", "deferred,", "borne", "not", "by", "the", "final", "consumer", "at", "the", "cash", "register,", "but", "by", "marginalized", "communities", "and", "fragile", "ecosystems", "in", "the", "Global", "South."],
      translation: "ファストファッションの激増は、世界の衣料品業界の状況を決定的に変容させた。トレンドの大衆化は、あらゆる社会経済的階層の消費者に前例のないアクセスの良さを提供している一方で、驚くべき規模の構造的な環境危機を覆い隠している。業界の根本的なパラダイムは、ハイファッションのデザインを大量消費向けの商品へと急速に変換することに基づいており、このプロセスは本質的に持続可能性よりも速度と量を優先する。結果として、この偏在するアクセスの良さの真の代償は先送りされ、レジにいる最終消費者ではなく、グローバル・サウスの疎外されたコミュニティや脆弱な生態系によって負担されているのだ。",
      tasks: [
        {
          taskId: "p1-t1",
          category: "content", 
          type: "trace", 
          instruction: "【コア抽出】この段落で、筆者が「表面上のメリットの裏に隠された真の脅威」を指摘している部分（動詞のカタマリ）をなぞってください。",
          targetIndices: [26, 27, 28, 29, 30], // "belies a systemic ecological crisis"
          partialIndices: [28, 29, 30],
          explanation: "While（〜である一方で）という譲歩の接続詞の後に続く主節が筆者の本音です。'belies'（〜を偽る、覆い隠す）の目的語を捉えましょう。"
        },
        {
          taskId: "p1-t2",
          category: "structure", 
          type: "analyze", 
          instruction: "【SVO分解】最終文の「AではなくBによって負担されている」という対比構造を作っている、前置詞を含む2つのカタマリ(not A / but B)を順番になぞってください。",
          targetV: [73, 74, 75, 76], // "not by the final consumer" (Aの部分)
          targetO: [81, 82, 83, 84], // "but by marginalized communities" (Bの部分)
          explanation: "not A but B の構造です。安さの代償（cost）を支払っているのは先進国の消費者ではなく、途上国の人々であるという強烈なメッセージです。"
        }
      ]
    },
    {
      p_id: 2,
      tokens: ["Furthermore,", "the", "intentional", "opacity", "of", "global", "supply", "chains", "perpetuates", "severe", "human", "rights", "abuses", "and", "environmental", "degradation.", "Multinational", "conglomerates", "frequently", "engage", "in", "'greenwashing'—deploying", "deceptive", "marketing", "tactics", "to", "masquerade", "as", "environmentally", "responsible", "entities", "without", "implementing", "substantive", "operational", "reforms.", "They", "might", "release", "a", "limited", "capsule", "collection", "made", "from", "organic", "cotton,", "heavily", "promoted", "through", "glossy", "campaigns,", "while", "the", "vast", "majority", "of", "their", "production", "relies", "on", "exploitative", "labor", "practices", "and", "hazardous", "chemical", "dyes.", "This", "deliberate", "obfuscation", "allows", "brands", "to", "reap", "the", "reputational", "benefits", "of", "sustainability", "without", "shouldering", "the", "financial", "burdens", "of", "genuine", "ethical", "transformation."],
      translation: "さらに、グローバルなサプライチェーンの意図的な不透明性が、深刻な人権侵害と環境悪化を永続させている。多国籍企業はしばしば「グリーンウォッシュ」に関与している。つまり、実質的な業務改革を実行することなく、環境に責任を持つ企業であるかのように装うために、欺瞞的なマーケティング戦略を展開しているのだ。彼らは、搾取的な労働慣行や有害な化学染料に生産の大部分を依存している一方で、派手なキャンペーンを通じて大々的に宣伝されるオーガニックコットン製の限定コレクションを発売するかもしれない。この意図的なごまかしにより、ブランドは真の倫理的変革に伴う財政的負担を背負うことなく、持続可能性という評判上の利益を得ることができるのである。",
      tasks: [
        {
          taskId: "p2-t1",
          category: "vocabulary", 
          type: "tap", 
          instruction: "【語彙ハント】この段落の中から、最終文の主語 'obfuscation (ごまかし・隠蔽)' とほぼ同じ現象を指している単語を、第1文から1つタップしてください。",
          targetIndex: 3, // "opacity"
          explanation: "正解！'opacity' (不透明性) と 'obfuscation' (意図的な隠蔽) は、企業が不都合な真実を隠していることを非難する強力なパラフレーズのペアです。"
        },
        {
          taskId: "p2-t2",
          category: "summary", 
          type: "select", 
          instruction: "【言い換え】筆者が定義する 'greenwashing' の意味を、最も正確に言い換えているものはどれですか？",
          options: [
            { text: "Pretending to be eco-friendly to hide unethical business practices.", isCorrect: true, explanation: "完璧です！ masquerade (装う) ＝ Pretending であり、without implementing reforms (改革なしに) ＝ to hide unethical practices に合致しています。" },
            { text: "Investing heavily in green technologies to clean polluted rivers.", isCorrect: false, explanation: "筆者は企業が「実質的な改革を実行していない」と批判しています。" },
            { text: "Selling organic cotton clothes at highly discounted prices.", isCorrect: false, explanation: "オーガニックコットンは「ごまかしの手段」の例として挙げられているだけで、安売りについては言及されていません。" }
          ]
        }
      ]
    },
    {
      p_id: 3,
      tokens: ["The", "material", "consequences", "of", "this", "relentless", "production", "cycle", "are", "unequivocally", "devastating.", "Textile", "dyeing", "and", "treatment", "are", "responsible", "for", "a", "significant", "fraction", "of", "global", "industrial", "water", "pollution,", "rendering", "vital", "waterways", "toxic.", "Moreover,", "the", "industry", "is", "overwhelmingly", "dependent", "on", "synthetic", "fibers", "such", "as", "polyester,", "which", "are", "derived", "from", "petrochemicals", "and", "are", "notoriously", "non-biodegradable.", "Every", "time", "these", "synthetic", "garments", "are", "washed,", "they", "shed", "microscopic", "plastic", "fibers,", "known", "as", "microplastics,", "into", "the", "wastewater", "system.", "These", "insidious", "particles", "bypass", "filtration", "plants,", "eventually", "accumulating", "in", "the", "oceans", "where", "they", "infiltrate", "the", "marine", "food", "web,", "posing", "an", "existential", "threat", "to", "biodiversity", "and,", "ultimately,", "human", "health."],
      translation: "この容赦ない生産サイクルの物質的な影響は、紛れもなく壊滅的である。繊維の染色と加工は、世界の産業水質汚染のかなりの割合を占めており、不可欠な水路を有毒なものにしている。さらに、この業界はポリエステルなどの合成繊維に圧倒的に依存しているが、これらは石油化学製品から作られ、生分解性がない（自然に還らない）ことで悪名高い。これらの合成繊維の衣服が洗われるたびに、マイクロプラスチックとして知られる微小なプラスチック繊維が排水システムに放出される。これらの陰険な粒子は浄水場をすり抜け、最終的に海に蓄積し、そこで海洋の食物網に侵入して、生物多様性、そして最終的には人間の健康に対する実存的な脅威をもたらすのである。",
      tasks: [
        {
          taskId: "p3-t1",
          category: "content", 
          type: "trace", 
          instruction: "【因果関係のトレース】ポリエステルなどの合成繊維（synthetic fibers）が引き起こす、最終的で最も恐ろしい結果（脅威）をなぞってください。",
          targetIndices: [84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94], // "posing an existential threat to biodiversity and, ultimately, human health"
          partialIndices: [85, 86, 87, 88],
          explanation: "ポリエステル ➡ 洗濯 ➡ マイクロプラスチック ➡ 海洋汚染 ➡ 「生物多様性と人間の健康への脅威」という因果関係の終着点を捉える問題です。"
        }
      ]
    },
    {
      p_id: 4,
      tokens: ["Compounding", "the", "physical", "waste", "is", "the", "psychological", "manipulation", "embedded", "within", "the", "fast", "fashion", "model.", "The", "industry", "relies", "on", "engineered", "obsolescence,", "both", "material", "and", "aesthetic.", "Garments", "are", "intentionally", "manufactured", "with", "inferior", "quality,", "ensuring", "they", "degrade", "quickly", "and", "necessitate", "frequent", "replacement.", "Simultaneously,", "the", "relentless", "introduction", "of", "micro-seasons—sometimes", "up", "to", "fifty-two", "'seasons'", "a", "year—cultivates", "a", "culture", "of", "ephemeral", "consumption.", "Consumers", "are", "conditioned", "to", "view", "clothing", "as", "a", "disposable", "commodity", "rather", "than", "a", "durable", "investment,", "trapped", "in", "a", "perpetual", "cycle", "of", "acquisition", "and", "immediate", "disposal", "that", "exponentially", "exacerbates", "the", "global", "waste", "management", "crisis."],
      translation: "物理的な廃棄物にさらに輪をかけているのが、ファストファッションのモデルに組み込まれた心理的操作である。業界は、物質的および美的な「計画的陳腐化」に依存している。衣服は意図的に劣った品質で製造され、確実に早く劣化し、頻繁な買い替えを必要とさせる。同時に、マイクロシーズン（時には1年に最大52の「シーズン」）の容赦ない導入が、つかの間の消費文化を育んでいる。消費者は衣服を耐久性のある投資としてではなく、使い捨ての商品として見るように条件付けられており、世界の廃棄物管理危機を指数関数的に悪化させる、獲得と即時廃棄の永遠のサイクルに囚われているのだ。",
      tasks: [
        {
          taskId: "p4-t1",
          category: "summary", 
          type: "select", 
          instruction: "【論理展開】この段落で説明されている 'engineered obsolescence'（計画的陳腐化）の2つの側面を正しく説明している組み合わせを選んでください。",
          options: [
            { text: "品質を落としてすぐ壊れるようにすること ＆ 次々と新しいトレンドを出して古く感じさせること", isCorrect: true, explanation: "完璧です！ material (物質的＝すぐ壊れる) と aesthetic (美的＝すぐ流行遅れになる) の2つの側面を見事に説明しています。" },
            { text: "安い素材を使って服を作ること ＆ 労働者の賃金を安く抑えること", isCorrect: false, explanation: "労働者の賃金（第1・2段落の内容）は、陳腐化（obsolescence）とは関係ありません。" },
            { text: "オンラインショッピングを普及させること ＆ 大量の在庫を抱えること", isCorrect: false, explanation: "オンラインショッピングについては本文で言及されていません。" }
          ]
        },
        {
          taskId: "p4-t2",
          category: "vocabulary", 
          type: "tap", 
          instruction: "【語彙ハント】「短期間で消えてしまう、儚い」という意味の高度な形容詞をタップしてください。",
          targetIndex: 54, // "ephemeral"
          explanation: "正解！ ephemeral consumption (つかの間の消費) は、次々に服を買っては捨てるファストファッションの消費行動を批判する強力なキーワードです。"
        }
      ]
    },
    {
      p_id: 5,
      tokens: ["To", "meaningfully", "mitigate", "this", "escalating", "catastrophe,", "a", "radical", "departure", "from", "the", "linear", "'take-make-dispose'", "model", "is", "imperative.", "Transitioning", "towards", "a", "circular", "economy,", "wherein", "garments", "are", "designed", "for", "longevity,", "reparability,", "and", "ultimate", "recyclability,", "must", "become", "the", "regulatory", "standard", "rather", "than", "a", "niche", "market", "trend.", "Furthermore,", "implementing", "policies", "such", "as", "Extended", "Producer", "Responsibility", "(EPR)", "would", "legally", "obligate", "brands", "to", "manage", "the", "end-of-life", "impact", "of", "their", "products,", "internalizing", "the", "environmental", "costs", "they", "currently", "externalize.", "Without", "such", "robust,", "legally", "binding", "interventions,", "the", "fast", "fashion", "industry", "will", "continue", "to", "unravel", "the", "ecological", "fabric", "of", "our", "planet."],
      translation: "この拡大する大惨事を意味のある形で軽減するためには、直線的な「大量生産・大量消費・大量廃棄」モデルからの根本的な脱却が不可欠である。衣服が長寿命、修理可能性、そして最終的なリサイクル可能性を考慮して設計される「サーキュラーエコノミー（循環型経済）」への移行は、ニッチな市場トレンドではなく、規制上の標準とならなければならない。さらに、拡大生産者責任（EPR）のような政策を導入することは、自社製品の寿命が尽きた後の影響を管理することをブランドに法的に義務付け、現在彼らが外部に押し付けている環境コストを内部化させることになろう。このような強力で法的拘束力のある介入なしには、ファストファッション業界は私たちの地球の生態系の織物を解きほぐし（破壊し）続けるだろう。",
      tasks: [
        {
          taskId: "p5-t1",
          category: "content", 
          type: "trace", 
          instruction: "【解決策のトレース】筆者が提案している「サーキュラーエコノミー（循環型経済）」において、衣服が備えるべき3つの重要な性質をなぞってください。",
          targetIndices: [26, 27, 28, 29, 30], // "longevity, reparability, and ultimate recyclability"
          partialIndices: [26, 27],
          explanation: "longevity (長寿命), reparability (修理可能性), recyclability (リサイクル可能性) の3つが、使い捨て（dispose）に対抗するキーワードです。"
        }
      ]
    }
  ],

  // 🌍 500語を読み終えた後の総仕上げミッション
  globalTasks: [
    {
      taskId: "g-t1",
      category: "comprehension",
      type: "select",
      instruction: "【Main Idea】この長文を通じて、筆者が最も伝えたい結論はどれですか？",
      options: [
        { text: "The apparent benefits of fast fashion mask deep ecological and ethical crises, demanding a shift to a regulated circular economy.", isCorrect: true, explanation: "問題提起（見せかけの利益と環境/倫理危機）から、最終段落の解決策（法的規制を伴う循環型経済への移行）までを完全に包括した要約です。" },
        { text: "Consumers are solely responsible for the environmental damage caused by throwing away clothes too quickly.", isCorrect: false, explanation: "筆者は消費者を責めるのではなく、企業の「計画的陳腐化」や「ごまかし」をシステムの問題として非難しています。" },
        { text: "Fast fashion companies should stop using synthetic materials and focus entirely on organic cotton.", isCorrect: false, explanation: "オーガニックコットンはグリーンウォッシュの例として挙げられただけで、それが根本的な解決策だとは主張していません。" }
      ]
    },
    {
      taskId: "g-t2",
      category: "readAloud",
      type: "voice",
      instruction: "【シャドーイング】この長文のハイライトである以下の警鐘を、感情を込めて音読し、脳に定着させましょう！",
      targetSentence: "Without such robust, legally binding interventions, the fast fashion industry will continue to unravel the ecological fabric of our planet.",
      hint: "Without〜 のカンマでしっかり一呼吸置き、後半の will continue to unravel...（破壊し続けるだろう）に強い警告のトーンを乗せてください。"
    }
  ]
};