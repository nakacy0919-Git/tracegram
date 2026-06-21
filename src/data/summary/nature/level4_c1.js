export const nature_L4 = {
  id: "nat-l4-c1",
  themeId: "nature",
  level: "Level 4 (C1 - Advanced)",
  wordCount: 285,
  title: "Unraveling the Ecological and Ethical Ramifications of Marine Plastic",
  theme: "自然・環境・倫理",
  
  vocabulary: [
    { word: "ramification", meaning: "予期せぬ結果、影響", pos: "noun", synonyms: ["consequence", "implication"], nuance: "ある行動が引き起こす、複雑で広範囲にわたる悪影響を指す極めてアカデミックな語彙。" },
    { word: "exacerbate", meaning: "〜を悪化させる", pos: "verb", synonyms: ["aggravate", "worsen"], nuance: "すでに悪い状況（問題や病気など）をさらにひどくすること。" },
    { word: "imperative", meaning: "絶対に必要な、避けられない義務", pos: "adj", synonyms: ["crucial", "mandatory"], nuance: "necessaryよりも遥かに強く、「そうしなければ致命的な結果を招く」というニュアンスを持ちます。" }
  ],

  paragraphs: [
    {
      p_id: 1,
      rawText: "The proliferation of single-use plastics has irrevocably altered the global marine landscape. While the democratization of synthetic materials offers unprecedented convenience to consumers, it belies a systemic ecological crisis of staggering proportions. The modern industrial paradigm is predicated on the rapid production and disposal of plastic commodities, a process that inherently prioritizes economic velocity over environmental sustainability. Consequently, the true cost of this ubiquitous convenience is deferred, borne not by the final consumer at the checkout counter, but by fragile marine ecosystems and marginalized coastal communities.",
      tokens: ["The", "proliferation", "of", "single-use", "plastics", "has", "irrevocably", "altered", "the", "global", "marine", "landscape.", "While", "the", "democratization", "of", "synthetic", "materials", "offers", "unprecedented", "convenience", "to", "consumers,", "it", "belies", "a", "systemic", "ecological", "crisis", "of", "staggering", "proportions.", "The", "modern", "industrial", "paradigm", "is", "predicated", "on", "the", "rapid", "production", "and", "disposal", "of", "plastic", "commodities,", "a", "process", "that", "inherently", "prioritizes", "economic", "velocity", "over", "environmental", "sustainability.", "Consequently,", "the", "true", "cost", "of", "this", "ubiquitous", "convenience", "is", "deferred,", "borne", "not", "by", "the", "final", "consumer", "at", "the", "checkout", "counter,", "but", "by", "fragile", "marine", "ecosystems", "and", "marginalized", "coastal", "communities."],
      translation: "使い捨てプラスチックの激増は、世界の海洋の状況を決定的に（不可逆的に）変容させた。合成素材の大衆化は消費者に前例のない利便性を提供している一方で、驚くべき規模の構造的な環境危機を覆い隠している。現代の産業パラダイムは、プラスチック製品の急速な生産と廃棄に基づいており、このプロセスは本質的に環境の持続可能性よりも経済的な速度を優先する。結果として、この偏在する利便性の真の代償は先送りされ、レジカウンターにいる最終消費者によってではなく、脆弱な海洋生態系と疎外された沿岸コミュニティによって負担されているのである。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "第一段落によると、プラスチックの利便性の「真の代償」は誰（または何）によって支払われていますか？",
            instructionEn: "According to the first paragraph, who or what pays the 'true cost' of this convenience?",
            options: [
              { text: "The final consumers at the checkout counter.", isCorrect: false, explanationJa: "「not by the final consumer（最終消費者によってではなく）」と否定されています。", explanationEn: "The text explicitly says it is 'borne not by the final consumer'." },
              { text: "Fragile marine ecosystems and marginalized coastal communities.", isCorrect: true, explanationJa: "「borne ... by fragile marine ecosystems and marginalized coastal communities」と明記されています。", explanationEn: "This matches exactly: 'borne... by fragile marine ecosystems and marginalized coastal communities'." },
              { text: "The industrial paradigm that produces synthetic materials.", isCorrect: false, explanationJa: "生産する産業側が代償を払っているとは書かれていません。", explanationEn: "It does not say the industrial paradigm is paying the cost." }
            ]
          },
          {
            type: "select",
            instructionJa: "現代の産業パラダイムは、持続可能性（sustainability）よりも何を優先（prioritize）していますか？",
            instructionEn: "What does the modern industrial paradigm prioritize over environmental sustainability?",
            options: [
              { text: "Economic velocity", isCorrect: true, explanationJa: "「prioritizes economic velocity over environmental sustainability」と書かれています。", explanationEn: "The text explicitly states it 'prioritizes economic velocity over environmental sustainability'." },
              { text: "The democratization of synthetic materials", isCorrect: false, explanationJa: "大衆化は背景として語られていますが、優先している対象として直接比較されているのは経済的な速度です。", explanationEn: "It prioritizes economic velocity, not the democratization of materials." },
              { text: "Marginalized coastal communities", isCorrect: false, explanationJa: "沿岸コミュニティは代償を払わされている側であり、優先されているわけではありません。", explanationEn: "Coastal communities are bearing the cost, not being prioritized." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「レジカウンターにいる最終消費者によってではなく、脆弱な海洋生態系によって」という、対比構造（not A but B）を作っている前置詞のカタマリをなぞってください。",
            instructionEn: "Trace the prepositional phrases forming the contrast structure 'not A but B'.",
            targetIndices: [68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84], 
            explanationJa: "not by A (the final consumer...) but by B (fragile marine ecosystems...) という、代償を負担する者を対比させる美しいC1構文です。",
            explanationEn: "'not by A but by B' contrasts who is actually paying the true cost."
          },
          {
            type: "trace",
            instructionJa: "「このプロセスは本質的に環境の持続可能性よりも経済的な速度を優先する」という、前の名詞（process）を修飾する関係代名詞のカタマリをなぞってください。",
            instructionEn: "Trace the relative clause modifying 'a process'.",
            targetIndices: [49, 50, 51, 52, 53, 54, 55, 56], 
            explanationJa: "that inherently prioritizes... が a process を後ろから修飾しています。prioritize A over B（BよりもAを優先する）の構造も含まれます。",
            explanationEn: "The relative clause starting with 'that' modifies 'a process' and includes the 'prioritize A over B' structure."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "【コア抽出】「表面上のメリット（合成素材の大衆化）の裏に隠された真の脅威」を指摘している、belie の目的語（6語）をなぞってください。",
            instructionEn: "Trace the object of 'belies' (6 words) that points out the true threat hidden behind superficial benefits.",
            targetIndices: [25, 26, 27, 28, 29, 30, 31], 
            explanationJa: "「a systemic ecological crisis of staggering proportions（驚くべき規模の構造的な環境危機）」が隠されているという、段落の核心です。",
            explanationEn: "This phrase reveals the massive, underlying environmental crisis that convenience conceals."
          },
          {
            type: "trace",
            instructionJa: "この段落のメインテーマ（プラスチックの激増が海を不可逆的に変えたこと）を宣言している最初の一文をなぞってください。",
            instructionEn: "Trace the first sentence that declares the main theme.",
            targetIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 
            explanationJa: "不可逆的な変化をもたらした、という強烈なトピックセンテンスです。",
            explanationEn: "This strong topic sentence declares that the change is irrevocable."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「〜を偽る、〜と矛盾する（覆い隠す）」という意味のC1レベルの動詞をタップしてください。",
            instructionEn: "Tap the C1-level verb that means 'to fail to give a true notion or impression of (something); disguise or contradict'.",
            targetIndex: 24, 
            explanationJa: "belie は「外見は良く見えるが、実は裏に悪い事実が隠れている」という状況を一語で表せる超重要単語です。",
            explanationEn: "'Belie' is a highly advanced verb meaning to contradict or disguise a hidden truth."
          },
          {
            type: "tap",
            instructionJa: "「遍在する、どこにでもある」という意味の高度な形容詞をタップしてください。",
            instructionEn: "Tap the advanced adjective that means 'present, appearing, or found everywhere (ubiquitous)'.",
            targetIndex: 62, 
            explanationJa: "ubiquitous は「至る所に存在する」という意味で、現代のプラスチックのアクセスの良さを的確に表しています。",
            explanationEn: "'Ubiquitous' means found everywhere, perfectly describing the widespread availability of plastics."
          }
        ]
      }
    },
    {
      p_id: 2,
      rawText: "The physical ramifications of this relentless cycle are unequivocally devastating. Macro-plastics physically entangle marine wildlife, but a far more insidious threat lies in the degradation of these materials into microplastics and nanoplastics. These microscopic particles bypass conventional filtration systems, eventually permeating the oceans where they are ingested by zooplankton and subsequently climb the trophic levels. This bioaccumulation ensures that toxic chemical additives and absorbed oceanic pollutants infiltrate the marine food web, posing an existential threat to biodiversity and ultimately to human health when seafood is consumed.",
      tokens: ["The", "physical", "ramifications", "of", "this", "relentless", "cycle", "are", "unequivocally", "devastating.", "Macro-plastics", "physically", "entangle", "marine", "wildlife,", "but", "a", "far", "more", "insidious", "threat", "lies", "in", "the", "degradation", "of", "these", "materials", "into", "microplastics", "and", "nanoplastics.", "These", "microscopic", "particles", "bypass", "conventional", "filtration", "systems,", "eventually", "permeating", "the", "oceans", "where", "they", "are", "ingested", "by", "zooplankton", "and", "subsequently", "climb", "the", "trophic", "levels.", "This", "bioaccumulation", "ensures", "that", "toxic", "chemical", "additives", "and", "absorbed", "oceanic", "pollutants", "infiltrate", "the", "marine", "food", "web,", "posing", "an", "existential", "threat", "to", "biodiversity", "and", "ultimately", "to", "human", "health", "when", "seafood", "is", "consumed."],
      translation: "この容赦ないサイクルの物理的な影響（結果）は、紛れもなく壊滅的である。マクロプラスチック（大きなプラスチック）は物理的に海洋野生生物を絡め取るが、はるかに陰険な脅威は、これらの物質がマイクロプラスチックやナノプラスチックへと劣化・分解することにある。これらの微視的な粒子は従来の濾過システムをすり抜け、最終的に海に浸透し、そこで動物プランクトンに摂取され、その後栄養段階（食物連鎖）を上がっていく。この生物濃縮は、有毒な化学添加物や吸収された海洋汚染物質が海洋の食物網に侵入することを確実なものにし、生物多様性に対して、そして最終的にはシーフードが消費される際の人間の健康に対して、実存的な脅威をもたらしているのである。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "マイクロプラスチックやナノプラスチックが「はるかに陰険な脅威（far more insidious threat）」とされる理由は何ですか？",
            instructionEn: "Why are microplastics and nanoplastics considered a 'far more insidious threat'?",
            options: [
              { text: "Because they physically entangle large marine wildlife like whales.", isCorrect: false, explanationJa: "野生生物を絡め取る（entangle）のは、大きなプラスチック（Macro-plastics）の特徴として対比されています。", explanationEn: "Entangling wildlife is a characteristic of macro-plastics, not microplastics." },
              { text: "Because they bypass filtration systems and accumulate in the food chain, eventually threatening human health.", isCorrect: true, explanationJa: "濾過システムをすり抜け、食物連鎖を通じて人間にも脅威を与えるというプロセスが詳細に描かれています。", explanationEn: "The text explains how they bypass filtration, climb trophic levels, and threaten human health." },
              { text: "Because they are completely invisible to zooplankton and cannot be eaten.", isCorrect: false, explanationJa: "動物プランクトンに「摂取される（ingested）」と書かれているため、食べられないというのは誤りです。", explanationEn: "The text explicitly states they are 'ingested by zooplankton'." }
            ]
          },
          {
            type: "select",
            instructionJa: "「生物濃縮（bioaccumulation）」によって何が引き起こされますか？",
            instructionEn: "What is caused by 'bioaccumulation' according to the text?",
            options: [
              { text: "Toxic chemicals and pollutants infiltrate the marine food web.", isCorrect: true, explanationJa: "「ensures that toxic chemical additives... infiltrate the marine food web」と明記されています。", explanationEn: "The text states it ensures that toxic chemicals infiltrate the marine food web." },
              { text: "Conventional filtration systems become stronger and more effective.", isCorrect: false, explanationJa: "濾過システムが強化されるとは書かれていません。", explanationEn: "It does not say filtration systems become stronger." },
              { text: "Zooplankton stop eating entirely.", isCorrect: false, explanationJa: "プランクトンが食べるのをやめるとは書かれていません。", explanationEn: "It does not say zooplankton stop eating." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「生物多様性に対して、そして最終的には人間の健康に対して実存的な脅威をもたらしながら」という、文末で結果・付帯状況を表す分詞構文をなぞってください。",
            instructionEn: "Trace the participle phrase at the end of the sentence meaning 'posing an existential threat to biodiversity and ultimately to human health'.",
            targetIndices: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81], 
            explanationJa: "posing（もたらす）という現在分詞が、生物濃縮が引き起こした「結果」を補足しています。",
            explanationEn: "This present participle phrase supplements the tragic result of bioaccumulation."
          },
          {
            type: "trace",
            instructionJa: "「そこで（海で）それらが動物プランクトンに摂取される」という、the oceans を修飾する関係副詞のカタマリをなぞってください。",
            instructionEn: "Trace the relative adverb clause modifying 'the oceans' (starting with 'where...').",
            targetIndices: [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54], 
            explanationJa: "関係副詞 where が、海の中で何が起きているか（食物連鎖のスタート）を説明しています。",
            explanationEn: "The relative adverb 'where' introduces a clause that describes what happens to the particles in the oceans."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "大きなプラスチックよりも「小さなプラスチックへの劣化」の方がはるかに恐ろしい脅威であることを示している一文をなぞってください。",
            instructionEn: "Trace the sentence indicating that the degradation into small plastics is a far more terrible threat than large plastics.",
            targetIndices: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 
            explanationJa: "but a far more insidious threat lies in...（しかし、はるかに陰険な脅威は〜にある）という対比構造です。",
            explanationEn: "The contrast structure highlights that degradation is a far more insidious threat."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「陰険な、密かに進行する」という意味の、気づかないうちに悪化する恐ろしさを表す形容詞をタップしてください。",
            instructionEn: "Tap the adjective that means 'proceeding in a gradual, subtle way, but with harmful effects (insidious)'.",
            targetIndex: 19, 
            explanationJa: "insidious は、マイクロプラスチックのように「目に見えないが確実に体を蝕む」ようなものに使われます。",
            explanationEn: "'Insidious' perfectly describes microplastics: unseen but causing profound, creeping harm."
          },
          {
            type: "tap",
            instructionJa: "「（食物などを）摂取する」という意味の、eat よりもアカデミックな動詞（の過去分詞形）をタップしてください。",
            instructionEn: "Tap the advanced verb meaning 'to take food, drink, or another substance into the body by swallowing or absorbing it (ingest)'.",
            targetIndex: 46, 
            explanationJa: "ingest は生物学や医学の文脈で「摂取する・飲み込む」という意味で多用されます（ここでは are ingested と受動態になっています）。",
            explanationEn: "'Ingested' is a formal, scientific term for swallowing or consuming."
          }
        ]
      }
    },
    {
      p_id: 3,
      rawText: "Compounding the physical waste is the corporate obfuscation embedded within the industry. Many multinational conglomerates frequently engage in 'greenwashing'—deploying deceptive marketing tactics to masquerade as environmentally responsible entities without implementing substantive operational reforms. They might release a limited collection made from recycled ocean plastic, heavily promoted through glossy campaigns, while the vast majority of their production relies on virgin petrochemicals. This deliberate misdirection allows brands to reap the reputational benefits of sustainability without shouldering the financial burdens of genuine ethical transformation.",
      tokens: ["Compounding", "the", "physical", "waste", "is", "the", "corporate", "obfuscation", "embedded", "within", "the", "industry.", "Many", "multinational", "conglomerates", "frequently", "engage", "in", "'greenwashing'—deploying", "deceptive", "marketing", "tactics", "to", "masquerade", "as", "environmentally", "responsible", "entities", "without", "implementing", "substantive", "operational", "reforms.", "They", "might", "release", "a", "limited", "collection", "made", "from", "recycled", "ocean", "plastic,", "heavily", "promoted", "through", "glossy", "campaigns,", "while", "the", "vast", "majority", "of", "their", "production", "relies", "on", "virgin", "petrochemicals.", "This", "deliberate", "misdirection", "allows", "brands", "to", "reap", "the", "reputational", "benefits", "of", "sustainability", "without", "shouldering", "the", "financial", "burdens", "of", "genuine", "ethical", "transformation."],
      translation: "物理的な廃棄物にさらに輪をかけているのが、業界に組み込まれた企業のごまかしである。多くの多国籍コングロマリットはしばしば「グリーンウォッシュ」に関与している。つまり、実質的な業務改革を実行することなく、環境に責任を持つ企業であるかのように装うために、欺瞞的なマーケティング戦略を展開しているのだ。彼らは、リサイクルされた海洋プラスチックで作られた限定コレクションを発売し、派手なキャンペーンを通じて大々的に宣伝するかもしれないが、その生産の大部分は未使用の（バージン）石油化学製品に依存している。この意図的な誤誘導により、ブランドは真の倫理的変革に伴う財政的負担を背負うことなく、持続可能性という評判上の利益を得ることができるのである。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "筆者が定義する「グリーンウォッシュ（greenwashing）」の意味を、最も正確に言い換えているものはどれですか？",
            instructionEn: "Which option most accurately paraphrases the author's definition of 'greenwashing'?",
            options: [
              { text: "Pretending to be eco-friendly to hide unethical business practices without making real changes.", isCorrect: true, explanationJa: "masquerade as...（〜と装う）と without implementing... reforms（改革を実行せずに）の完璧な言い換えです。", explanationEn: "This perfectly paraphrases 'masquerade as environmentally responsible entities without implementing substantive operational reforms'." },
              { text: "Investing heavily in green technologies to clean polluted rivers.", isCorrect: false, explanationJa: "企業が「実質的な改革を実行していない」と批判しているため、誤りです。", explanationEn: "The author criticizes companies for NOT implementing substantive reforms." },
              { text: "Selling recycled ocean plastics at highly discounted prices.", isCorrect: false, explanationJa: "リサイクルプラスチックは「ごまかしの手段」の例であり、安売りについては言及されていません。", explanationEn: "Recycled plastic is just an example of a deceptive tactic, and discounts aren't mentioned." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「物理的な廃棄物にさらに輪をかけているのが、〜という企業のごまかしである」という、強調のための倒置法が使われている最初の一文をなぞってください。",
            instructionEn: "Trace the opening sentence that uses inversion for emphasis ('Compounding the physical waste is...').",
            targetIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 
            explanationJa: "C(分詞) + V(is) + S(obfuscation) という倒置構文です。本来は The corporate obfuscation... is compounding the physical waste. となります。",
            explanationEn: "This is an inverted sentence (C + V + S) used to emphasize the relationship between physical waste and corporate obfuscation."
          },
          {
            type: "trace",
            instructionJa: "「ブランドが、持続可能性という評判上の利益を得ることを可能にする」という、allow O to V の構文をなぞってください。",
            instructionEn: "Trace the structure 'allow Object to Verb' showing what misdirection enables brands to do.",
            targetIndices: [65, 66, 67, 68, 69, 70, 71, 72], 
            explanationJa: "allow brands to reap... で「ブランドが〜を刈り取る（得る）のを許す」という無生物主語の典型的かつ強力なC1構文です。",
            explanationEn: "'allow brands to reap...' is a classic advanced structure showing how an inanimate subject enables an action."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "【コア抽出】この段落で筆者が本当に伝えたい「グリーンウォッシュ」の本質（何をせずに何を得ているか）を述べている最後の一文をなぞってください。",
            instructionEn: "Trace the final sentence that states the essence of 'greenwashing' (what they gain without doing what).",
            targetIndices: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80], 
            explanationJa: "真の負担を背負うことなく（without shouldering...）利益を得ているという、強烈な批判のまとめです。",
            explanationEn: "This powerful conclusion criticizes companies for gaining benefits without shouldering real financial burdens."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「曖昧にすること、ごまかし」を意味する、極めて高度な抽象名詞をタップしてください。",
            instructionEn: "Tap the highly advanced noun meaning 'the action of making something obscure, unclear, or unintelligible (obfuscation)'.",
            targetIndex: 7, 
            explanationJa: "obfuscation は、意図的に真実を隠したり、議論を煙に巻いたりする悪意を含んだC1〜C2レベルの超難関語彙です。",
            explanationEn: "'Obfuscation' refers to deliberately hiding the truth or making things confusing."
          },
          {
            type: "tap",
            instructionJa: "「欺瞞的な、人を欺くような」という意味の形容詞をタップしてください。",
            instructionEn: "Tap the adjective that means 'giving an appearance or impression different from the true one; misleading (deceptive)'.",
            targetIndex: 19, 
            explanationJa: "deceptive marketing tactics（欺瞞的なマーケティング戦略）のように、嘘や誇張を含むものに使われます。",
            explanationEn: "'Deceptive' means misleading, often used to describe dishonest marketing."
          }
        ]
      }
    },
    {
      p_id: 4,
      rawText: "To meaningfully mitigate this escalating catastrophe, a radical departure from the linear 'take-make-dispose' paradigm is imperative. Transitioning towards a circular economy, wherein plastics are designed for ultimate recyclability, must become the regulatory standard rather than a niche corporate social responsibility (CSR) initiative. Furthermore, implementing policies such as Extended Producer Responsibility (EPR) would legally obligate brands to manage the end-of-life impact of their products, internalizing the environmental costs they currently externalize. Without such robust, legally binding interventions, the industry will continue to unravel the ecological fabric of our planet.",
      tokens: ["To", "meaningfully", "mitigate", "this", "escalating", "catastrophe,", "a", "radical", "departure", "from", "the", "linear", "'take-make-dispose'", "paradigm", "is", "imperative.", "Transitioning", "towards", "a", "circular", "economy,", "wherein", "plastics", "are", "designed", "for", "ultimate", "recyclability,", "must", "become", "the", "regulatory", "standard", "rather", "than", "a", "niche", "corporate", "social", "responsibility", "(CSR)", "initiative.", "Furthermore,", "implementing", "policies", "such", "as", "Extended", "Producer", "Responsibility", "(EPR)", "would", "legally", "obligate", "brands", "to", "manage", "the", "end-of-life", "impact", "of", "their", "products,", "internalizing", "the", "environmental", "costs", "they", "currently", "externalize.", "Without", "such", "robust,", "legally", "binding", "interventions,", "the", "industry", "will", "continue", "to", "unravel", "the", "ecological", "fabric", "of", "our", "planet."],
      translation: "この拡大する大惨事を意味のある形で軽減するためには、直線的な「大量生産・大量消費・大量廃棄」パラダイムからの根本的な脱却が不可欠である。プラスチックが最終的なリサイクル可能性を考慮して設計される「サーキュラーエコノミー（循環型経済）」への移行は、ニッチな企業の社会的責任（CSR）の取り組みではなく、規制上の標準とならなければならない。さらに、拡大生産者責任（EPR）のような政策を導入することは、自社製品の寿命が尽きた後の影響を管理することをブランドに法的に義務付け、現在彼らが外部に押し付けている環境コストを内部化させることになろう。このような強力で法的拘束力のある介入なしには、業界は私たちの地球の生態系の織物を解きほぐし（破壊し）続けるだろう。",
      
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
            targetIndices: [63, 64, 65, 66, 67, 68, 69], 
            explanationJa: "internalize (内部化する) の現在分詞が、EPR政策を導入した結果どうなるかを見事に補足しています。後ろには関係代名詞の省略もあります。",
            explanationEn: "This present participle phrase supplements the result of implementing EPR, showing the shift of responsibility back to the brands."
          },
          {
            type: "trace",
            instructionJa: "「その中で（＝循環型経済の中で）プラスチックが最終的なリサイクルのために設計されている」という、where と同じ働きをするフォーマルな関係副詞のカタマリをなぞってください。",
            instructionEn: "Trace the formal relative adverb clause modifying 'circular economy' (starting with 'wherein...').",
            targetIndices: [21, 22, 23, 24, 25, 26, 27], 
            explanationJa: "wherein は in which や where の非常にフォーマルな表現で、循環型経済の定義を導いています。",
            explanationEn: "'Wherein' is a highly formal relative adverb (similar to 'in which' or 'where') used to define the circular economy."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落のメインテーマ（根本的なパラダイムからの脱却が必要であること）を宣言している最初の一文をなぞってください。",
            instructionEn: "Trace the first sentence that declares the main theme (the need for a radical departure from the current paradigm).",
            targetIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 
            explanationJa: "「意味のある軽減のためには根本的な脱却が不可欠（imperative）だ」という強力な宣言です。",
            explanationEn: "This strong declaration states that a radical departure is imperative for meaningful mitigation."
          },
          {
            type: "trace",
            instructionJa: "【結論】法的介入がなければどうなるかという、筆者からの最終的な「警告」の一文をなぞってください。",
            instructionEn: "Trace the author's final 'warning' sentence about what will happen without legal interventions.",
            targetIndices: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87], 
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

  globalTasks: {
    comprehension: [
      {
        type: "select",
        instructionJa: "【Main Idea】この長文を通じて、筆者が読者に最も伝えたい主張は何ですか？",
        instructionEn: "What is the primary argument (Main Idea) the author wants to convey through this text?",
        options: [
          { text: "The plastic industry masks an insidious ecological crisis and corporate obfuscation; therefore, overcoming this requires a legally enforced circular economy and strict producer accountability.", isCorrect: true, explanationJa: "「隠された危機（マイクロプラスチック等）」「企業のごまかし（グリーンウォッシュ）」「法的規制を伴う循環型経済とEPR」という、すべての段落の要旨を網羅しています。", explanationEn: "This comprehensively covers the hidden crisis, corporate obfuscation, and the need for legal circular solutions and EPR." },
          { text: "Consumers are solely responsible for marine plastic pollution, and the only solution is for individuals to stop buying synthetic materials entirely.", isCorrect: false, explanationJa: "筆者は消費者を責めるのではなく、企業の「計画的陳腐化」や「ごまかし」などのシステムの問題を非難しています。", explanationEn: "The author blames systemic corporate practices, not solely consumers, and demands legal regulations." },
          { text: "Greenwashing is a helpful strategy because releasing limited collections of recycled ocean plastic solves the global waste management crisis.", isCorrect: false, explanationJa: "グリーンウォッシュは「ごまかし（obfuscation）」として厳しく批判されています。", explanationEn: "Greenwashing is severely criticized as a deceptive tactic (obfuscation), not a helpful strategy." }
        ]
      }
    ],
    structure: [
      {
        type: "voice",
        instructionJa: "【シャドーイング】この長文のハイライトである以下の警鐘を、感情を込めて音読し、脳に定着させましょう！",
        instructionEn: "Shadow the final warning of the text with emotion, locking the C1 structure into your brain!",
        targetSentence: "Without such robust, legally binding interventions, the industry will continue to unravel the ecological fabric of our planet."
      },
      {
        type: "voice",
        instructionJa: "【構造定着】「not A but B」の対比構造を意識して、誰が本当に代償を払っているのかを音読しましょう。",
        instructionEn: "Read the sentence about the true cost aloud, focusing on the 'not A but B' contrast structure.",
        targetSentence: "Consequently, the true cost of this ubiquitous convenience is deferred, borne not by the final consumer at the checkout counter, but by fragile marine ecosystems and marginalized coastal communities."
      }
    ],
    summary: [
      {
        type: "select",
        instructionJa: "各段落の論理構造（パラダイムの批判➡物理的・微視的脅威➡企業の欺瞞➡法的・根本的解決）を最も美しくまとめた要約文を選んでください。",
        instructionEn: "Choose the summary that most beautifully captures the logical structure of all paragraphs.",
        options: [
          { text: "The convenience of plastics conceals devastating harm, especially the insidious infiltration of microplastics. Corporations compound this through greenwashing and externalized costs. To survive, society must legally enforce a circular economy via Extended Producer Responsibility.", isCorrect: true, explanationJa: "「利便性の裏の代償」「マイクロプラスチックの脅威」「グリーンウォッシュと外部化」「法的強制（EPR）」という全キーワードが網羅されています。", explanationEn: "This summary perfectly hits every major theme: convenience's cost, microplastics, greenwashing/externalized costs, and legal EPR." },
          { text: "Macro-plastics are the only real threat to the ocean. To fix this, multinational corporations should focus on short-term profits and continue the linear 'take-make-dispose' model without government interference.", isCorrect: false, explanationJa: "マクロよりもマイクロが脅威だとされ、短期的利益や直線的モデル（take-make-dispose）はすべて批判されているため、完全に誤りです。", explanationEn: "This is completely wrong. Microplastics are the insidious threat, and short-term profit and the linear model are explicitly criticized." }
        ]
      }
    ],
    vocabulary: [
      {
        type: "voice",
        instructionJa: "最高難易度の語彙（ubiquitous, deferred, marginalized）を意識して、第1段落の痛烈な批判文を音読しましょう。",
        instructionEn: "Read this sharp critique aloud, mastering the highest-level vocabulary (ubiquitous, deferred, marginalized).",
        targetSentence: "Consequently, the true cost of this ubiquitous convenience is deferred, borne not by the final consumer at the checkout counter, but by marginalized communities."
      },
      {
        type: "voice",
        instructionJa: "C1レベルの超重要語彙（obfuscation, masquerade, implement）を含む、グリーンウォッシュ批判の文を音読しましょう！",
        instructionEn: "Read the greenwashing critique aloud, focusing on C1 vocabulary like obfuscation and masquerade!",
        targetSentence: "Many multinational conglomerates deploy deceptive marketing tactics to masquerade as environmentally responsible entities without implementing substantive operational reforms."
      }
    ]
  }
};