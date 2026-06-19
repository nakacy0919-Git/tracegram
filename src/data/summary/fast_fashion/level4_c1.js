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

  paragraphs: [
    {
      p_id: 1,
      rawText: "The proliferation of fast fashion has irrevocably altered the global apparel landscape. While the democratization of trends offers unprecedented accessibility to consumers across socioeconomic strata, it belies a systemic ecological crisis of staggering proportions. The industry's fundamental paradigm is predicated on the rapid translation of high-fashion designs into mass-market commodities, a process that inherently prioritizes velocity and volume over sustainability. Consequently, the true cost of this ubiquitous accessibility is deferred, borne not by the final consumer at the cash register, but by marginalized communities and fragile ecosystems in the Global South.",
      tokens: ["The", "proliferation", "of", "fast", "fashion", "has", "irrevocably", "altered", "the", "global", "apparel", "landscape.", "While", "the", "democratization", "of", "trends", "offers", "unprecedented", "accessibility", "to", "consumers", "across", "socioeconomic", "strata,", "it", "belies", "a", "systemic", "ecological", "crisis", "of", "staggering", "proportions.", "The", "industry's", "fundamental", "paradigm", "is", "predicated", "on", "the", "rapid", "translation", "of", "high-fashion", "designs", "into", "mass-market", "commodities,", "a", "process", "that", "inherently", "prioritizes", "velocity", "and", "volume", "over", "sustainability.", "Consequently,", "the", "true", "cost", "of", "this", "ubiquitous", "accessibility", "is", "deferred,", "borne", "not", "by", "the", "final", "consumer", "at", "the", "cash", "register,", "but", "by", "marginalized", "communities", "and", "fragile", "ecosystems", "in", "the", "Global", "South."],
      translation: "ファストファッションの激増は、世界の衣料品業界の状況を決定的に変容させた。トレンドの大衆化は、あらゆる社会経済的階層の消費者に前例のないアクセスの良さを提供している一方で、驚くべき規模の構造的な環境危機を覆い隠している。業界の根本的なパラダイムは、ハイファッションのデザインを大量消費向けの商品へと急速に変換することに基づいており、このプロセスは本質的に持続可能性よりも速度と量を優先する。結果として、この偏在するアクセスの良さの真の代償は先送りされ、レジにいる最終消費者ではなく、グローバル・サウスの疎外されたコミュニティや脆弱な生態系によって負担されているのだ。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "第一段落によると、ファストファッションの「真の代償」は誰（または何）によって支払われていますか？",
            instructionEn: "According to the first paragraph, who or what pays the 'true cost' of fast fashion?",
            options: [
              { text: "The final consumers at the cash register.", isCorrect: false, explanationJa: "「not by the final consumer（最終消費者によってではなく）」と否定されています。", explanationEn: "The text explicitly says it is 'borne not by the final consumer'." },
              { text: "Marginalized communities and fragile ecosystems in the Global South.", isCorrect: true, explanationJa: "「borne ... by marginalized communities and fragile ecosystems in the Global South」と明記されています。", explanationEn: "This matches exactly: 'borne... by marginalized communities and fragile ecosystems in the Global South'." },
              { text: "The global apparel brands that mass-produce commodities.", isCorrect: false, explanationJa: "生産するブランド側が代償を払っているとは書かれていません。", explanationEn: "It does not say the brands are paying the cost." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「レジにいる最終消費者によってではなく、疎外されたコミュニティによって」という、対比構造（not A but B）を作っている前置詞のカタマリをなぞってください。",
            instructionEn: "Trace the prepositional phrases forming the contrast structure 'not A but B'.",
            targetIndices: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83], 
            explanationJa: "not by A (the final consumer...) but by B (marginalized communities...) という、代償を負担する者を対比させる美しいC1構文です。",
            explanationEn: "'not by A but by B' contrasts who is actually paying the true cost of fast fashion."
          },
          {
            type: "trace",
            instructionJa: "「ハイファッションのデザインを、大量消費向けの商品へと変換すること」という、前置詞 into を伴う名詞のカタマリをなぞってください。",
            instructionEn: "Trace the noun phrase including the preposition 'into' meaning 'translation of high-fashion designs into mass-market commodities'.",
            targetIndices: [43, 44, 45, 46, 47, 48, 49], 
            explanationJa: "translation of A into B（AをBに変換・翻訳すること）という、名詞構文の高度な使い方です。",
            explanationEn: "'translation of A into B' shows the process of changing runway designs into cheap, accessible goods."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "【コア抽出】「表面上のメリット（トレンドの大衆化）の裏に隠された真の脅威」を指摘している、belie の目的語（6語）をなぞってください。",
            instructionEn: "Trace the object of 'belies' (6 words) that points out the true threat hidden behind superficial benefits.",
            targetIndices: [27, 28, 29, 30, 31, 32, 33], 
            explanationJa: "「a systemic ecological crisis of staggering proportions（驚くべき規模の構造的な環境危機）」が隠されているという、段落の核心です。",
            explanationEn: "This phrase reveals the massive, underlying environmental crisis that fast fashion conceals."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「〜を偽る、〜と矛盾する（覆い隠す）」という意味のC1レベルの動詞をタップしてください。",
            instructionEn: "Tap the C1-level verb that means 'to fail to give a true notion or impression of (something); disguise or contradict'.",
            targetIndex: 26, 
            explanationJa: "belie は「外見は良く見えるが、実は裏に悪い事実が隠れている」という状況を一語で表せる超重要単語です。",
            explanationEn: "'Belie' is a highly advanced verb meaning to contradict or disguise a hidden truth."
          },
          {
            type: "tap",
            instructionJa: "「遍在する、どこにでもある」という意味の高度な形容詞をタップしてください。",
            instructionEn: "Tap the advanced adjective that means 'present, appearing, or found everywhere (ubiquitous)'.",
            targetIndex: 66, 
            explanationJa: "ubiquitous は「至る所に存在する」という意味で、現代のファストファッションのアクセスの良さを的確に表しています。",
            explanationEn: "'Ubiquitous' means found everywhere, perfectly describing the widespread availability of fast fashion."
          }
        ]
      }
    },
    {
      p_id: 2,
      rawText: "Furthermore, the intentional opacity of global supply chains perpetuates severe human rights abuses and environmental degradation. Multinational conglomerates frequently engage in 'greenwashing'—deploying deceptive marketing tactics to masquerade as environmentally responsible entities without implementing substantive operational reforms. They might release a limited capsule collection made from organic cotton, heavily promoted through glossy campaigns, while the vast majority of their production relies on exploitative labor practices and hazardous chemical dyes. This deliberate obfuscation allows brands to reap the reputational benefits of sustainability without shouldering the financial burdens of genuine ethical transformation.",
      tokens: ["Furthermore,", "the", "intentional", "opacity", "of", "global", "supply", "chains", "perpetuates", "severe", "human", "rights", "abuses", "and", "environmental", "degradation.", "Multinational", "conglomerates", "frequently", "engage", "in", "'greenwashing'—deploying", "deceptive", "marketing", "tactics", "to", "masquerade", "as", "environmentally", "responsible", "entities", "without", "implementing", "substantive", "operational", "reforms.", "They", "might", "release", "a", "limited", "capsule", "collection", "made", "from", "organic", "cotton,", "heavily", "promoted", "through", "glossy", "campaigns,", "while", "the", "vast", "majority", "of", "their", "production", "relies", "on", "exploitative", "labor", "practices", "and", "hazardous", "chemical", "dyes.", "This", "deliberate", "obfuscation", "allows", "brands", "to", "reap", "the", "reputational", "benefits", "of", "sustainability", "without", "shouldering", "the", "financial", "burdens", "of", "genuine", "ethical", "transformation."],
      translation: "さらに、グローバルなサプライチェーンの意図的な不透明性が、深刻な人権侵害と環境悪化を永続させている。多国籍企業はしばしば「グリーンウォッシュ」に関与している。つまり、実質的な業務改革を実行することなく、環境に責任を持つ企業であるかのように装うために、欺瞞的なマーケティング戦略を展開しているのだ。彼らは、搾取的な労働慣行や有害な化学染料に生産の大部分を依存している一方で、派手なキャンペーンを通じて大々的に宣伝されるオーガニックコットン製の限定コレクションを発売するかもしれない。この意図的なごまかしにより、ブランドは真の倫理的変革に伴う財政的負担を背負うことなく、持続可能性という評判上の利益を得ることができるのである。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "筆者が定義する「グリーンウォッシュ（greenwashing）」の意味を、最も正確に言い換えているものはどれですか？",
            instructionEn: "Which option most accurately paraphrases the author's definition of 'greenwashing'?",
            options: [
              { text: "Pretending to be eco-friendly to hide unethical business practices without making real changes.", isCorrect: true, explanationJa: "masquerade as...（〜と装う）と without implementing... reforms（改革を実行せずに）の完璧な言い換えです。", explanationEn: "This perfectly paraphrases 'masquerade as environmentally responsible entities without implementing substantive operational reforms'." },
              { text: "Investing heavily in green technologies to clean polluted rivers.", isCorrect: false, explanationJa: "企業が「実質的な改革を実行していない」と批判しているため、誤りです。", explanationEn: "The author criticizes companies for NOT implementing substantive reforms." },
              { text: "Selling organic cotton clothes at highly discounted prices.", isCorrect: false, explanationJa: "オーガニックコットンは「ごまかしの手段」の例であり、安売りについては言及されていません。", explanationEn: "Organic cotton is just an example of a deceptive tactic, and discounts aren't mentioned." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「環境に責任を持つ企業であるかのように装うために」という、目的を表す不定詞（to V）のカタマリをなぞってください。",
            instructionEn: "Trace the infinitive phrase of purpose meaning 'to masquerade as environmentally responsible entities'.",
            targetIndices: [25, 26, 27, 28, 29, 30], 
            explanationJa: "masquerade as 〜（〜を装う）という高度な動詞が不定詞になり、欺瞞的なマーケティング戦略の「目的」を示しています。",
            explanationEn: "'masquerade as' means to pretend to be something. This infinitive phrase shows the purpose of the deceptive tactics."
          },
          {
            type: "trace",
            instructionJa: "「ブランドが、持続可能性という評判上の利益を得ることを可能にする」という、allow O to V の構文をなぞってください。",
            instructionEn: "Trace the structure 'allow Object to Verb' showing what obfuscation enables brands to do.",
            targetIndices: [69, 70, 71, 72, 73, 74, 75, 76], 
            explanationJa: "allow brands to reap... で「ブランドが〜を刈り取る（得る）のを許す」という無生物主語の典型的かつ強力なC1構文です。",
            explanationEn: "'allow brands to reap...' is a classic advanced structure showing how an inanimate subject (obfuscation) enables an action."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "「意図的な不透明性」が何を引き起こしているか（トピックセンテンス）をなぞってください。",
            instructionEn: "Trace the topic sentence explaining what 'intentional opacity' perpetuates.",
            targetIndices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 
            explanationJa: "サプライチェーンの不透明性が、人権侵害と環境悪化を永続（perpetuate）させているという段落のテーマです。",
            explanationEn: "This sentence sets the theme: opacity in supply chains allows abuses and degradation to continue indefinitely."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「曖昧にすること、ごまかし」を意味する、極めて高度な抽象名詞をタップしてください。",
            instructionEn: "Tap the highly advanced noun meaning 'the action of making something obscure, unclear, or unintelligible (obfuscation)'.",
            targetIndex: 68, 
            explanationJa: "obfuscation は、意図的に真実を隠したり、議論を煙に巻いたりする悪意を含んだC1〜C2レベルの超難関語彙です。",
            explanationEn: "'Obfuscation' refers to deliberately hiding the truth or making things confusing."
          },
          {
            type: "tap",
            instructionJa: "「〜を永続させる、長引かせる」という意味の動詞をタップしてください。",
            instructionEn: "Tap the verb that means 'to make (something, typically an undesirable situation) continue indefinitely'.",
            targetIndex: 8, 
            explanationJa: "perpetuate は、悪い習慣や問題が「ずっと続くようにしてしまう」という意味の極めてアカデミックな動詞です。",
            explanationEn: "'Perpetuate' means to cause something, usually negative, to continue to exist."
          }
        ]
      }
    },
    {
      p_id: 3,
      rawText: "The material consequences of this relentless production cycle are unequivocally devastating. Textile dyeing and treatment are responsible for a significant fraction of global industrial water pollution, rendering vital waterways toxic. Moreover, the industry is overwhelmingly dependent on synthetic fibers such as polyester, which are derived from petrochemicals and are notoriously non-biodegradable. Every time these synthetic garments are washed, they shed microscopic plastic fibers, known as microplastics, into the wastewater system. These insidious particles bypass filtration plants, eventually accumulating in the oceans where they infiltrate the marine food web, posing an existential threat to biodiversity and, ultimately, human health.",
      tokens: ["The", "material", "consequences", "of", "this", "relentless", "production", "cycle", "are", "unequivocally", "devastating.", "Textile", "dyeing", "and", "treatment", "are", "responsible", "for", "a", "significant", "fraction", "of", "global", "industrial", "water", "pollution,", "rendering", "vital", "waterways", "toxic.", "Moreover,", "the", "industry", "is", "overwhelmingly", "dependent", "on", "synthetic", "fibers", "such", "as", "polyester,", "which", "are", "derived", "from", "petrochemicals", "and", "are", "notoriously", "non-biodegradable.", "Every", "time", "these", "synthetic", "garments", "are", "washed,", "they", "shed", "microscopic", "plastic", "fibers,", "known", "as", "microplastics,", "into", "the", "wastewater", "system.", "These", "insidious", "particles", "bypass", "filtration", "plants,", "eventually", "accumulating", "in", "the", "oceans", "where", "they", "infiltrate", "the", "marine", "food", "web,", "posing", "an", "existential", "threat", "to", "biodiversity", "and,", "ultimately,", "human", "health."],
      translation: "この容赦ない生産サイクルの物質的な影響は、紛れもなく壊滅的である。繊維の染色と加工は、世界の産業水質汚染のかなりの割合を占めており、不可欠な水路を有毒なものにしている。さらに、この業界はポリエステルなどの合成繊維に圧倒的に依存しているが、これらは石油化学製品から作られ、生分解性がない（自然に還らない）ことで悪名高い。これらの合成繊維の衣服が洗われるたびに、マイクロプラスチックとして知られる微小なプラスチック繊維が排水システムに放出される。これらの陰険な粒子は浄水場をすり抜け、最終的に海に蓄積し、そこで海洋の食物網に侵入して、生物多様性、そして最終的には人間の健康に対する実存的な脅威をもたらすのである。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "合成繊維（synthetic fibers）が引き起こす、最終的で最も恐ろしい「脅威」は何ですか？",
            instructionEn: "What is the ultimate and most terrifying 'threat' caused by synthetic fibers?",
            options: [
              { text: "They block the wastewater systems and filtration plants.", isCorrect: false, explanationJa: "浄水場を「すり抜ける（bypass）」と書かれており、詰まらせるとは言っていません。", explanationEn: "The text says they 'bypass' filtration plants, not block them." },
              { text: "They infiltrate the marine food web, threatening biodiversity and human health.", isCorrect: true, explanationJa: "「infiltrate the marine food web, posing an existential threat to biodiversity and, ultimately, human health」と一致します。", explanationEn: "This matches exactly: 'infiltrate the marine food web, posing an existential threat...'" },
              { text: "They make the textile dyeing process much more expensive.", isCorrect: false, explanationJa: "染色プロセスのコストについてはここでは言及されていません。", explanationEn: "Dyeing costs are not mentioned as a consequence of microplastics." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「不可欠な水路を有毒なものにしながら」という、SVOC（OをCにする）の構造を持つ分詞構文をなぞってください。",
            instructionEn: "Trace the participle phrase with an SVOC structure meaning 'rendering vital waterways toxic'.",
            targetIndices: [26, 27, 28, 29], 
            explanationJa: "render O C は make O C の非常にフォーマルな表現で、「OをCの状態にする」という意味です。",
            explanationEn: "'render Object Complement' is a highly formal alternative to 'make Object Complement'."
          },
          {
            type: "trace",
            instructionJa: "「それらは石油化学製品から作られ、生分解性がないことで悪名高い」という、polyester を説明する非制限用法の関係代名詞のカタマリをなぞってください。",
            instructionEn: "Trace the non-restrictive relative clause modifying 'polyester' (starting with 'which').",
            targetIndices: [42, 43, 44, 45, 46, 47, 48, 49, 50], 
            explanationJa: "カンマ + which で、先行詞（ポリエステルなどの合成繊維）の致命的な欠点を補足説明しています。",
            explanationEn: "The comma + 'which' adds supplementary critical information about the preceding noun (synthetic fibers)."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落のメインテーマ（物質的な影響がどれほど酷いか）を宣言している最初の一文をなぞってください。",
            instructionEn: "Trace the opening sentence that declares the main theme (how terrible the material consequences are).",
            targetIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
            explanationJa: "「紛れもなく壊滅的である（unequivocally devastating）」という強烈な言葉で段落をスタートさせています。",
            explanationEn: "The paragraph begins with a strong declaration using 'unequivocally devastating'."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「陰険な、密かに進行する」という意味の、気づかないうちに悪化する恐ろしさを表す形容詞をタップしてください。",
            instructionEn: "Tap the adjective that means 'proceeding in a gradual, subtle way, but with harmful effects (insidious)'.",
            targetIndex: 75, 
            explanationJa: "insidious は、マイクロプラスチックのように「目に見えないが確実に体を蝕む」ようなものに使われます。",
            explanationEn: "'Insidious' perfectly describes microplastics: unseen but causing profound, creeping harm."
          },
          {
            type: "tap",
            instructionJa: "「明確に、紛れもなく」という意味の強力な副詞をタップしてください。",
            instructionEn: "Tap the adverb that means 'in a way that leaves no doubt (unequivocally)'.",
            targetIndex: 9, 
            explanationJa: "unequivocally は「疑いの余地なく絶対に」という強い断定を表すC1レベルの副詞です。",
            explanationEn: "'Unequivocally' is an advanced adverb used to express absolute certainty."
          }
        ]
      }
    },
    {
      p_id: 4,
      rawText: "Compounding the physical waste is the psychological manipulation embedded within the fast fashion model. The industry relies on engineered obsolescence, both material and aesthetic. Garments are intentionally manufactured with inferior quality, ensuring they degrade quickly and necessitate frequent replacement. Simultaneously, the relentless introduction of micro-seasons—sometimes up to fifty-two 'seasons' a year—cultivates a culture of ephemeral consumption. Consumers are conditioned to view clothing as a disposable commodity rather than a durable investment, trapped in a perpetual cycle of acquisition and immediate disposal that exponentially exacerbates the global waste management crisis.",
      tokens: ["Compounding", "the", "physical", "waste", "is", "the", "psychological", "manipulation", "embedded", "within", "the", "fast", "fashion", "model.", "The", "industry", "relies", "on", "engineered", "obsolescence,", "both", "material", "and", "aesthetic.", "Garments", "are", "intentionally", "manufactured", "with", "inferior", "quality,", "ensuring", "they", "degrade", "quickly", "and", "necessitate", "frequent", "replacement.", "Simultaneously,", "the", "relentless", "introduction", "of", "micro-seasons—sometimes", "up", "to", "fifty-two", "'seasons'", "a", "year—cultivates", "a", "culture", "of", "ephemeral", "consumption.", "Consumers", "are", "conditioned", "to", "view", "clothing", "as", "a", "disposable", "commodity", "rather", "than", "a", "durable", "investment,", "trapped", "in", "a", "perpetual", "cycle", "of", "acquisition", "and", "immediate", "disposal", "that", "exponentially", "exacerbates", "the", "global", "waste", "management", "crisis."],
      translation: "物理的な廃棄物にさらに輪をかけているのが、ファストファッションのモデルに組み込まれた心理的操作である。業界は、物質的および美的な「計画的陳腐化」に依存している。衣服は意図的に劣った品質で製造され、確実に早く劣化し、頻繁な買い替えを必要とさせる。同時に、マイクロシーズン（時には1年に最大52の「シーズン」）の容赦ない導入が、つかの間の消費文化を育んでいる。消費者は衣服を耐久性のある投資としてではなく、使い捨ての商品として見るように条件付けられており、世界の廃棄物管理危機を指数関数的に悪化させる、獲得と即時廃棄の永遠のサイクルに囚われているのだ。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "この段落で説明されている「計画的陳腐化（engineered obsolescence）」の2つの側面を正しく説明しているものはどれですか？",
            instructionEn: "Which option correctly explains the two aspects of 'engineered obsolescence' described in this paragraph?",
            options: [
              { text: "Manufacturing clothes to degrade quickly AND introducing constant new trends to make them feel outdated.", isCorrect: true, explanationJa: "物質的（すぐ壊れる）と美的（すぐ流行遅れになる）の2つの側面を見事に説明しています。", explanationEn: "This perfectly captures both 'material' (degrading quickly) and 'aesthetic' (frequent new seasons) obsolescence." },
              { text: "Using cheaper synthetic materials AND paying workers lower wages.", isCorrect: false, explanationJa: "労働者の賃金については、この段落（心理的操作と陳腐化）のテーマではありません。", explanationEn: "Worker wages are not part of the obsolescence strategy discussed in this paragraph." },
              { text: "Selling clothes online globally AND opening massive physical stores.", isCorrect: false, explanationJa: "オンラインや実店舗での販売戦略については書かれていません。", explanationEn: "Sales channels are not mentioned here." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「物理的な廃棄物にさらに輪をかけているのが、〜という心理的操作である」という、強調のための倒置法が使われている最初の一文をなぞってください。",
            instructionEn: "Trace the opening sentence that uses inversion for emphasis ('Compounding the physical waste is...').",
            targetIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 
            explanationJa: "C(分詞) + V(is) + S(manipulation) という倒置構文です。本来は The psychological manipulation... is compounding the physical waste. となります。",
            explanationEn: "This is an inverted sentence (C + V + S) used to emphasize the relationship between physical waste and psychological manipulation."
          },
          {
            type: "trace",
            instructionJa: "「耐久性のある投資としてではなく、使い捨ての商品として」という、view A as B の B の部分にあたる対比フレーズをなぞってください。",
            instructionEn: "Trace the contrast phrase functioning as 'B' in 'view A as B' (meaning 'as a disposable commodity rather than a durable investment').",
            targetIndices: [61, 62, 63, 64, 65, 66, 67, 68, 69], 
            explanationJa: "view A as B（AをBとみなす）の B の部分に、rather than（〜ではなく）を用いた強烈な対比が組み込まれています。",
            explanationEn: "This phrase contains a strong contrast using 'rather than', showing how consumer perception is manipulated."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "消費者が最終的にどのような悲惨な状況に置かれているか（永遠のサイクル）を表現している部分をなぞってください。",
            instructionEn: "Trace the part that expresses the tragic situation consumers are finally placed in (the perpetual cycle).",
            targetIndices: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79], 
            explanationJa: "trapped in a perpetual cycle...（永遠のサイクルに囚われている）という表現が、消費者の心理的敗北を要約しています。",
            explanationEn: "'Trapped in a perpetual cycle' beautifully summarizes the psychological defeat and behavioral loop of consumers."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「つかの間の、短命の」という意味の、ファストファッションの儚さを表す極めて高度な形容詞をタップしてください。",
            instructionEn: "Tap the highly advanced adjective meaning 'lasting for a very short time (ephemeral)'.",
            targetIndex: 54, 
            explanationJa: "ephemeral consumption (つかの間の消費) は、次々に服を買っては捨てる行動を批判するC1レベルの強力なキーワードです。",
            explanationEn: "'Ephemeral' describes things that are short-lived or fleeting, perfect for fast fashion trends."
          },
          {
            type: "tap",
            instructionJa: "「陳腐化、時代遅れになること」を意味する名詞をタップしてください。",
            instructionEn: "Tap the noun that means 'the process of becoming obsolete or outdated (obsolescence)'.",
            targetIndex: 19, 
            explanationJa: "obsolescence は、企業が意図的に製品の寿命を短くする「計画的陳腐化」の文脈で必ず登場する最重要名詞です。",
            explanationEn: "'Obsolescence' is crucial in economics and ecology, referring to designing products to break or go out of style quickly."
          }
        ]
      }
    },
    {
      p_id: 5,
      rawText: "To meaningfully mitigate this escalating catastrophe, a radical departure from the linear 'take-make-dispose' model is imperative. Transitioning towards a circular economy, wherein garments are designed for longevity, reparability, and ultimate recyclability, must become the regulatory standard rather than a niche market trend. Furthermore, implementing policies such as Extended Producer Responsibility (EPR) would legally obligate brands to manage the end-of-life impact of their products, internalizing the environmental costs they currently externalize. Without such robust, legally binding interventions, the fast fashion industry will continue to unravel the ecological fabric of our planet.",
      tokens: ["To", "meaningfully", "mitigate", "this", "escalating", "catastrophe,", "a", "radical", "departure", "from", "the", "linear", "'take-make-dispose'", "model", "is", "imperative.", "Transitioning", "towards", "a", "circular", "economy,", "wherein", "garments", "are", "designed", "for", "longevity,", "reparability,", "and", "ultimate", "recyclability,", "must", "become", "the", "regulatory", "standard", "rather", "than", "a", "niche", "market", "trend.", "Furthermore,", "implementing", "policies", "such", "as", "Extended", "Producer", "Responsibility", "(EPR)", "would", "legally", "obligate", "brands", "to", "manage", "the", "end-of-life", "impact", "of", "their", "products,", "internalizing", "the", "environmental", "costs", "they", "currently", "externalize.", "Without", "such", "robust,", "legally", "binding", "interventions,", "the", "fast", "fashion", "industry", "will", "continue", "to", "unravel", "the", "ecological", "fabric", "of", "our", "planet."],
      translation: "この拡大する大惨事を意味のある形で軽減するためには、直線的な「大量生産・大量消費・大量廃棄」モデルからの根本的な脱却が不可欠である。衣服が長寿命、修理可能性、そして最終的なリサイクル可能性を考慮して設計される「サーキュラーエコノミー（循環型経済）」への移行は、ニッチな市場トレンドではなく、規制上の標準とならなければならない。さらに、拡大生産者責任（EPR）のような政策を導入することは、自社製品の寿命が尽きた後の影響を管理することをブランドに法的に義務付け、現在彼らが外部に押し付けている環境コストを内部化させることになろう。このような強力で法的拘束力のある介入なしには、ファストファッション業界は私たちの地球の生態系の織物を解きほぐし（破壊し）続けるだろう。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "「拡大生産者責任（EPR）」という政策が導入されると、ブランドはどうなりますか？",
            instructionEn: "What would happen to brands if policies like Extended Producer Responsibility (EPR) were implemented?",
            options: [
              { text: "They would be legally forced to manage the environmental impact of their clothes even after they are thrown away.", isCorrect: true, explanationJa: "「legally obligate brands to manage the end-of-life impact of their products（寿命が尽きた後の影響を管理することを法的に義務付ける）」と完全に一致します。", explanationEn: "This perfectly matches the text: 'legally obligate brands to manage the end-of-life impact of their products'." },
              { text: "They would receive financial rewards from the government for making clothes last longer.", isCorrect: false, explanationJa: "政府からの財政的な報酬（financial rewards）については書かれていません。", explanationEn: "The text does not mention financial rewards from the government." },
              { text: "They would be allowed to externalize their environmental costs to developing nations.", isCorrect: false, explanationJa: "外部化（externalize）するのではなく、内部化（internalize）させると書かれています。", explanationEn: "The text says EPR would force them to internalize, not externalize, the costs." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「現在彼ら（企業）が外部に押し付けている環境コストを内部化させながら」という、文末で結果を補足している分詞構文をなぞってください。",
            instructionEn: "Trace the participle phrase at the end of the sentence meaning 'internalizing the environmental costs they currently externalize'.",
            targetIndices: [65, 66, 67, 68, 69, 70, 71], 
            explanationJa: "internalize (内部化する) の現在分詞が、EPR政策を導入した結果どうなるかを見事に補足しています。後ろには関係代名詞の省略もあります。",
            explanationEn: "This present participle phrase supplements the result of implementing EPR, showing the shift of responsibility back to the brands."
          },
          {
            type: "trace",
            instructionJa: "「その中で（＝循環型経済の中で）衣服が〜のために設計されている」という、where と同じ働きをするフォーマルな関係副詞のカタマリをなぞってください。",
            instructionEn: "Trace the formal relative adverb clause modifying 'circular economy' (starting with 'wherein...').",
            targetIndices: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 
            explanationJa: "wherein は in which や where の非常にフォーマルな表現で、循環型経済の定義を導いています。",
            explanationEn: "'Wherein' is a highly formal relative adverb (similar to 'in which' or 'where') used to define the circular economy."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "【結論】法的介入がなければどうなるかという、筆者からの最終的な「警告」の一文をなぞってください。",
            instructionEn: "Trace the author's final 'warning' sentence about what will happen without legal interventions.",
            targetIndices: [72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89], 
            explanationJa: "Without...（〜がなければ）から始まるこの一文が、長文全体を締めくくる最も強力な警告メッセージです。",
            explanationEn: "This 'Without...' sentence serves as the ultimate, powerful warning concluding the entire passage."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「〜を軽減する、和らげる」という意味の動詞をタップしてください。",
            instructionEn: "Tap the verb that means 'to make less severe, harmful, or painful (mitigate)'.",
            targetIndex: 2, 
            explanationJa: "mitigate catastrophe（大惨事を軽減する）のように、問題を完全に無くすのではなく「マシにする・食い止める」というニュアンスで使われます。",
            explanationEn: "'Mitigate' is used for reducing the severity of a crisis, not necessarily eliminating it entirely."
          },
          {
            type: "tap",
            instructionJa: "「絶対に必要な、避けられない義務である」という意味の強烈な形容詞をタップしてください。",
            instructionEn: "Tap the strong adjective that means 'of vital importance; crucial (imperative)'.",
            targetIndex: 15, 
            explanationJa: "imperative は necessary や important を遥かに凌ぐ「絶対的な至上命題である」というニュアンスを持ちます。",
            explanationEn: "'Imperative' is much stronger than 'important' or 'necessary', indicating an absolute requirement."
          }
        ]
      }
    }
  ],

  // 🌍 500語を読み終えた後の総仕上げミッション
  globalTasks: {
    comprehension: [
      {
        type: "select",
        instructionJa: "【Main Idea】この長文を通じて、筆者が最も伝えたい結論はどれですか？",
        instructionEn: "What is the primary conclusion the author wants to convey through this text?",
        options: [
          { text: "The apparent benefits of fast fashion mask deep ecological and ethical crises, demanding a shift to a regulated circular economy.", isCorrect: true, explanationJa: "問題提起（見せかけの利益と環境/倫理危機）から、最終段落の解決策（法的規制を伴う循環型経済への移行）までを完全に包括した要約です。", explanationEn: "This captures the entire arc: from the hidden ecological/ethical crises to the final demand for a legally regulated circular economy." },
          { text: "Consumers are solely responsible for the environmental damage caused by throwing away clothes too quickly.", isCorrect: false, explanationJa: "筆者は消費者を責めるのではなく、企業の「計画的陳腐化」や「ごまかし」をシステムの問題として非難しています。", explanationEn: "The author blames systemic corporate practices like 'engineered obsolescence' and 'greenwashing', not solely consumers." },
          { text: "Fast fashion companies should stop using synthetic materials and focus entirely on organic cotton.", isCorrect: false, explanationJa: "オーガニックコットンはグリーンウォッシュの例として挙げられただけで、それが根本的な解決策だとは主張していません。", explanationEn: "Organic cotton was merely cited as an example of deceptive greenwashing, not the ultimate solution." }
        ]
      }
    ],
    structure: [
      {
        type: "voice",
        instructionJa: "【シャドーイング】この長文のハイライトである以下の警鐘を、感情を込めて音読し、脳に定着させましょう！",
        instructionEn: "Shadow the final warning of the text with emotion, locking the C1 structure into your brain!",
        targetSentence: "Without such robust, legally binding interventions, the fast fashion industry will continue to unravel the ecological fabric of our planet."
      }
    ],
    summary: [
      {
        type: "select",
        instructionJa: "各段落の論理構造（現状➡隠蔽➡実害➡洗脳➡解決策）を最も美しくまとめた要約文を選んでください。",
        instructionEn: "Choose the summary that most beautifully captures the logical structure of all paragraphs.",
        options: [
          { text: "Fast fashion's democratization hides its true cost: exploitative labor, greenwashing, massive water pollution, and engineered obsolescence. To survive, the industry must be legally forced into a circular model.", isCorrect: true, explanationJa: "「大衆化の裏の代償」「グリーンウォッシュ」「汚染」「計画的陳腐化」そして「法的拘束力のある循環型経済」という全キーワードが網羅されています。", explanationEn: "This summary perfectly hits every major theme: democratization's cost, greenwashing, pollution, engineered obsolescence, and the legal circular solution." },
          { text: "Although fast fashion is cheap, it causes water pollution through synthetic dyes. Therefore, consumers should stop buying clothes and make their own to mitigate the crisis.", isCorrect: false, explanationJa: "「自分で服を作れ」とは一切書かれていません。筆者は法的な規制とシステム変更を求めています。", explanationEn: "The author never suggests making your own clothes; they demand systemic, legal, and regulatory changes." }
        ]
      }
    ],
    vocabulary: [
      {
        type: "voice",
        instructionJa: "最高難易度の語彙（ubiquitous, deferred, marginalized）を意識して、第1段落の痛烈な批判文を音読しましょう。",
        instructionEn: "Read this sharp critique aloud, mastering the highest-level vocabulary (ubiquitous, deferred, marginalized).",
        targetSentence: "Consequently, the true cost of this ubiquitous accessibility is deferred, borne not by the final consumer at the cash register, but by marginalized communities."
      }
    ]
  }
};