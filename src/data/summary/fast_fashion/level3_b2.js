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
      rawText: "The rise of fast fashion has revolutionized the global clothing industry, providing consumers with affordable and trendy garments. While the ability to buy stylish clothes cheaply seems highly attractive, this convenience comes with hidden environmental and social costs. The business model relies on mass-producing items at lightning speed, fundamentally prioritizing profit over sustainability.",
      tokens: ["The", "rise", "of", "fast", "fashion", "has", "revolutionized", "the", "global", "clothing", "industry,", "providing", "consumers", "with", "affordable", "and", "trendy", "garments.", "While", "the", "ability", "to", "buy", "stylish", "clothes", "cheaply", "seems", "highly", "attractive,", "this", "convenience", "comes", "with", "hidden", "environmental", "and", "social", "costs.", "The", "business", "model", "relies", "on", "mass-producing", "items", "at", "lightning", "speed,", "fundamentally", "prioritizing", "profit", "over", "sustainability."],
      translation: "ファストファッションの台頭は、手頃で流行の服を消費者に提供し、世界の衣料品業界に革命を起こした。スタイリッシュな服を安く買える能力は非常に魅力的に思える一方で、この便利さには隠された環境的・社会的代償が伴う。このビジネスモデルは、光の速さでアイテムを大量生産することに依存しており、根本的に持続可能性よりも利益を優先しているのだ。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "第一段落によると、ファストファッションのビジネスモデルにおける根本的な問題は何ですか？",
            instructionEn: "According to the first paragraph, what is the fundamental problem with the fast fashion business model?",
            options: [
              { text: "It relies on expensive, high-quality materials.", isCorrect: false, explanationJa: "高価で高品質な素材（expensive, high-quality）に依存しているとは書かれていません。", explanationEn: "It doesn't state that the model relies on expensive or high-quality materials." },
              { text: "It prioritizes making money over ecological sustainability.", isCorrect: true, explanationJa: "「prioritizing profit over sustainability（持続可能性よりも利益を優先している）」と明記されています。", explanationEn: "The text states it is 'fundamentally prioritizing profit over sustainability'." },
              { text: "It makes clothes too slowly for consumer demand.", isCorrect: false, explanationJa: "遅すぎる（too slowly）のではなく、光の速さ（lightning speed）で生産しています。", explanationEn: "It produces clothes at 'lightning speed', not too slowly." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「消費者に手頃で流行の衣服を提供しながら」という、前の文の結果や付帯状況を表す分詞構文（7語）をなぞってください。",
            instructionEn: "Trace the participle phrase showing result or accompanying circumstance meaning 'providing consumers with affordable and trendy garments' (7 words).",
            targetIndices: [11, 12, 13, 14, 15, 16, 17], 
            explanationJa: "providing A with B（AにBを提供する）という分詞構文が、文末から前の内容を補足しています。",
            explanationEn: "This is a present participle phrase ('providing A with B') that supplements the main clause."
          },
          {
            type: "trace",
            instructionJa: "ファストファッション企業の「本質的な問題の姿勢」を表しているフレーズをなぞってください。",
            instructionEn: "Trace the phrase indicating the 'fundamental problematic attitude' of the fast fashion business model.",
            targetIndices: [49, 50, 51, 52], 
            explanationJa: "prioritize A over B（BよりもAを優先する）の構造です。利益（profit）を持続可能性（sustainability）より優先しています。",
            explanationEn: "'prioritize A over B' means to treat A as more important than B. They prioritize profit over sustainability."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "【コア抽出】この長文全体のテーマとなる「隠された代償」について述べている一文をなぞってください。",
            instructionEn: "Trace the sentence that introduces the main theme of the text: the 'hidden costs'.",
            targetIndices: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], 
            explanationJa: "While（〜である一方で）という譲歩表現の後にある主節が、この文章全体のMain Idea（中心テーマ）を提示しています。",
            explanationEn: "The main clause after the concession 'While...' presents the Main Idea of the entire passage."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「〜に革命を起こす、劇的に変える」という意味の動詞をタップしてください。",
            instructionEn: "Tap the verb that means 'to change something completely or fundamentally (revolutionize)'.",
            targetIndex: 6, 
            explanationJa: "revolutionize は単に変えるだけでなく「根本から劇的に変える」という強いニュアンスを持つB2レベルの動詞です。",
            explanationEn: "'Revolutionize' is a strong B2-level verb meaning to change something fundamentally or dramatically."
          },
          {
            type: "tap",
            instructionJa: "「持続可能性（環境を破壊せずに維持できること）」を意味する名詞をタップしてください。",
            instructionEn: "Tap the noun that means 'the ability to be maintained at a certain rate or level (sustainability)'.",
            targetIndex: 52, 
            explanationJa: "sustainability は現代の環境問題を語る上で絶対に欠かせない最重要名詞です。",
            explanationEn: "'Sustainability' is the absolute core noun when discussing modern environmental issues."
          }
        ]
      }
    },
    {
      p_id: 2,
      rawText: "One of the most severe consequences of this relentless production is water pollution. The textile industry consumes billions of liters of water annually and heavily utilizes toxic dyes. These hazardous chemicals are frequently discharged into local waterways without proper treatment, devastating aquatic ecosystems and endangering the health of nearby communities. Furthermore, the reliance on synthetic fabrics like polyester means that washing these garments releases countless microplastics into the ocean, eventually entering the food chain.",
      tokens: ["One", "of", "the", "most", "severe", "consequences", "of", "this", "relentless", "production", "is", "water", "pollution.", "The", "textile", "industry", "consumes", "billions", "of", "liters", "of", "water", "annually", "and", "heavily", "utilizes", "toxic", "dyes.", "These", "hazardous", "chemicals", "are", "frequently", "discharged", "into", "local", "waterways", "without", "proper", "treatment,", "devastating", "aquatic", "ecosystems", "and", "endangering", "the", "health", "of", "nearby", "communities.", "Furthermore,", "the", "reliance", "on", "synthetic", "fabrics", "like", "polyester", "means", "that", "washing", "these", "garments", "releases", "countless", "microplastics", "into", "the", "ocean,", "eventually", "entering", "the", "food", "chain."],
      translation: "この容赦ない生産の最も深刻な結果の一つが水質汚染である。繊維産業は年間数十億リットルの水を消費し、有毒な染料を大量に使用する。これらの危険な化学物質は適切な処理なしに地元の水路に頻繁に排出され、水生生態系を破壊し、近隣コミュニティの健康を危険にさらしている。さらに、ポリエステルのような合成繊維への依存は、これらの衣服を洗うことで無数のマイクロプラスチックが海に放出され、最終的に食物連鎖に入り込むことを意味する。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "ポリエステルなどの合成繊維を洗濯すると、どのような問題が発生しますか？",
            instructionEn: "What problem occurs when synthetic fabrics like polyester are washed?",
            options: [
              { text: "It requires billions of liters of fresh water.", isCorrect: false, explanationJa: "数十億リットルの水を消費するのは「繊維の生産時（textile industry）」の話です。", explanationEn: "Consuming billions of liters of water refers to the production phase, not washing." },
              { text: "It discharges toxic dyes that immediately kill all fish.", isCorrect: false, explanationJa: "洗濯によって有毒な染料（toxic dyes）が出るのではなく、マイクロプラスチックが出ます。", explanationEn: "Washing releases microplastics, not toxic dyes." },
              { text: "It releases microplastics into the ocean, which enter the food chain.", isCorrect: true, explanationJa: "「releases countless microplastics into the ocean, eventually entering the food chain」と一致します。", explanationEn: "This matches exactly: 'releases countless microplastics into the ocean, eventually entering the food chain'." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「水生生態系を破壊し、そして近隣コミュニティの健康を危険にさらしながら」という、2つの現在分詞（〜ing）からなる分詞構文をなぞってください。",
            instructionEn: "Trace the two participle phrases showing result or accompanying circumstances (starting with 'devastating...').",
            targetIndices: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 
            explanationJa: "devastating（破壊する）と endangering（危険にさらす）という2つの現在分詞が and で結ばれ、有害物質の排出による「結果」を表しています。",
            explanationEn: "The present participles 'devastating' and 'endangering' are connected by 'and' to show the simultaneous results of discharging chemicals."
          },
          {
            type: "trace",
            instructionJa: "「これらの衣服を洗うことが、海に無数のマイクロプラスチックを放出すること」という、means の目的語になっている名詞節（that節）をなぞってください。",
            instructionEn: "Trace the noun clause (that-clause) acting as the object of the verb 'means'.",
            targetIndices: [59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73], 
            explanationJa: "means の後ろの that から文末までが巨大な名詞のカタマリ（名詞節）を作り、「〜ということを意味する」となります。",
            explanationEn: "The 'that-clause' forms a massive noun block acting as the object of the verb 'means'."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落のメインテーマ（最初の深刻な結果）を宣言しているトピックセンテンスをなぞってください。",
            instructionEn: "Trace the topic sentence that declares the main theme (the first severe consequence) of this paragraph.",
            targetIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
            explanationJa: "「容赦ない生産の最も深刻な結果の一つが水質汚染（water pollution）である」という冒頭の宣言です。",
            explanationEn: "The first sentence clearly declares that water pollution is one of the most severe consequences."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「有害な、危険な」という意味の、dangerous よりもフォーマルな形容詞をタップしてください。",
            instructionEn: "Tap the adjective that is a more formal synonym for 'dangerous' or 'harmful'.",
            targetIndex: 29, 
            explanationJa: "hazardous は、化学物質や廃棄物などが「健康や環境に有害・危険である」ことを表す際によく使われるB2レベル単語です。",
            explanationEn: "'Hazardous' is frequently used to describe chemicals or waste that pose risks to health and the environment."
          },
          {
            type: "tap",
            instructionJa: "「容赦ない、絶え間ない」という意味の形容詞をタップしてください。",
            instructionEn: "Tap the adjective that means 'unceasingly intense or harsh (relentless)'.",
            targetIndex: 8, 
            explanationJa: "relentless は production（生産）を修飾し、止まることなく環境を破壊し続ける厳しさを表しています。",
            explanationEn: "'Relentless' modifies production, showing how it continues intensely without stopping to consider the damage."
          }
        ]
      }
    },
    {
      p_id: 3,
      rawText: "Beyond the environmental damage, the fast fashion industry is notorious for its unethical labor practices. To keep retail prices incredibly low, many multinational brands outsource their manufacturing to developing nations. In these countries, garment workers are often subjected to grueling hours, unsafe working conditions, and wages that barely cover their basic needs. This exploitative system allows consumers in wealthy countries to enjoy cheap fashion, while vulnerable workers pay the real price.",
      tokens: ["Beyond", "the", "environmental", "damage,", "the", "fast", "fashion", "industry", "is", "notorious", "for", "its", "unethical", "labor", "practices.", "To", "keep", "retail", "prices", "incredibly", "low,", "many", "multinational", "brands", "outsource", "their", "manufacturing", "to", "developing", "nations.", "In", "these", "countries,", "garment", "workers", "are", "often", "subjected", "to", "grueling", "hours,", "unsafe", "working", "conditions,", "and", "wages", "that", "barely", "cover", "their", "basic", "needs.", "This", "exploitative", "system", "allows", "consumers", "in", "wealthy", "countries", "to", "enjoy", "cheap", "fashion,", "while", "vulnerable", "workers", "pay", "the", "real", "price."],
      translation: "環境へのダメージを越えて、ファストファッション産業は非倫理的な労働慣行で悪名高い。小売価格を信じられないほど低く保つために、多くの多国籍ブランドは製造を発展途上国に外注している。これらの国々では、衣服労働者はしばしば過酷な長時間労働、安全でない労働条件、そして基本的な生活の必要性をかろうじて満たす程度の賃金に服従させられている。この搾取的なシステムは、裕福な国の消費者が安いファッションを楽しむことを可能にする一方で、脆弱な労働者がその「真の代償」を払っているのである。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "「脆弱な労働者が真の代償を払っている（vulnerable workers pay the real price）」とは、文脈上どのような意味ですか？",
            instructionEn: "What does 'vulnerable workers pay the real price' mean in this context?",
            options: [
              { text: "Workers have to buy the clothes they make at the original factory price.", isCorrect: false, explanationJa: "労働者が服の代金を文字通り「支払う」わけではありません。", explanationEn: "It does not literally mean they pay money for the clothes." },
              { text: "Workers suffer the physical and financial hardships to keep the clothes cheap.", isCorrect: true, explanationJa: "「pay the real price（真の代償を払う）」とは、過酷な労働という犠牲を負わされているという比喩的表現です。", explanationEn: "'Pay the real price' is a metaphor meaning they suffer the hardships to make the system work." },
              { text: "Workers are paid very well to compensate for their hard labor.", isCorrect: false, explanationJa: "十分な賃金（paid very well）は支払われておらず、生活もままならない（barely cover basic needs）と書かれています。", explanationEn: "They are not paid well; their wages barely cover basic needs." }
            ]
          },
          {
            type: "select",
            instructionJa: "なぜ多国籍ブランドは製造を発展途上国に外注（outsource）するのですか？",
            instructionEn: "Why do multinational brands outsource their manufacturing to developing nations?",
            options: [
              { text: "To improve the working conditions in those nations.", isCorrect: false, explanationJa: "労働環境を改善するためではありません。", explanationEn: "They do not do it to improve working conditions." },
              { text: "To keep their retail prices incredibly low.", isCorrect: true, explanationJa: "「To keep retail prices incredibly low（小売価格を低く保つため）」と明記されています。", explanationEn: "The text explicitly states 'To keep retail prices incredibly low'." },
              { text: "To create high-quality, sustainable fashion lines.", isCorrect: false, explanationJa: "高品質で持続可能なファッションを作るためではありません。", explanationEn: "It is not to create high-quality or sustainable clothes." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「小売価格を信じられないほど低く保つために」という、目的を表す副詞的用法の不定詞のカタマリをなぞってください。",
            instructionEn: "Trace the infinitive phrase of purpose meaning 'To keep retail prices incredibly low'.",
            targetIndices: [15, 16, 17, 18, 19, 20], 
            explanationJa: "To + 動詞の原形が文頭に置かれ、なぜ外注するのかという「目的」を説明しています。keep O C (OをCに保つ) の構造も含まれます。",
            explanationEn: "The infinitive phrase at the beginning explains the purpose of outsourcing. It includes the structure 'keep + Object + Complement'."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落のトピック（環境問題から労働問題への転換）を宣言している最初の一文をなぞってください。",
            instructionEn: "Trace the first sentence that transitions the topic from environmental to labor issues.",
            targetIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 
            explanationJa: "「Beyond the environmental damage（環境ダメージを越えて）」というフレーズで、巧みに次の話題（労働・倫理問題）へ移行しています。",
            explanationEn: "The phrase 'Beyond the environmental damage' effectively transitions the topic to ethical and labor issues."
          },
          {
            type: "trace",
            instructionJa: "【コア抽出】先進国の消費者と途上国の労働者の「残酷な対比構造」を浮き彫りにしている最後の一文をなぞってください。",
            instructionEn: "Trace the final sentence that highlights the cruel contrast between consumers and workers.",
            targetIndices: [52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70], 
            explanationJa: "allow O to V（Oが〜するのを許す）と while（〜である一方で）を使い、構造的な搾取を見事に描写しています。",
            explanationEn: "It uses 'allow Object to Verb' and 'while' to beautifully but tragically describe the structural exploitation."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「非倫理的な、道徳に反する」という意味の形容詞をタップしてください。",
            instructionEn: "Tap the adjective that means 'morally wrong or unacceptable (unethical)'.",
            targetIndex: 12, 
            explanationJa: "unethical は ethical（倫理的な）の対義語で、企業活動への批判などで使われます。",
            explanationEn: "'Unethical' is the opposite of ethical, often used to criticize immoral business practices."
          },
          {
            type: "tap",
            instructionJa: "「搾取的な（利益を不当に吸い取る）」という意味の形容詞をタップしてください。",
            instructionEn: "Tap the adjective that means 'taking unfair advantage of a situation or person (exploitative)'.",
            targetIndex: 53, 
            explanationJa: "exploitative は動詞 exploit（搾取する）の形容詞形で、労働問題の長文における最重要語彙の一つです。",
            explanationEn: "'Exploitative' describes a system or person that treats others unfairly in order to benefit from their work."
          }
        ]
      }
    },
    {
      p_id: 4,
      rawText: "Fortunately, awareness of these alarming issues is gradually increasing. A growing number of environmentally conscious consumers are beginning to reject the throwaway culture. To truly mitigate this crisis, however, the industry must transition toward a circular economy, where clothes are designed to last longer and be recycled. Ultimately, both strict government regulations and a significant shift in consumer behavior are essential to hold these powerful brands accountable and protect our planet's future.",
      tokens: ["Fortunately,", "awareness", "of", "these", "alarming", "issues", "is", "gradually", "increasing.", "A", "growing", "number", "of", "environmentally", "conscious", "consumers", "are", "beginning", "to", "reject", "the", "throwaway", "culture.", "To", "truly", "mitigate", "this", "crisis,", "however,", "the", "industry", "must", "transition", "toward", "a", "circular", "economy,", "where", "clothes", "are", "designed", "to", "last", "longer", "and", "be", "recycled.", "Ultimately,", "both", "strict", "government", "regulations", "and", "a", "significant", "shift", "in", "consumer", "behavior", "are", "essential", "to", "hold", "these", "powerful", "brands", "accountable", "and", "protect", "our", "planet's", "future."],
      translation: "幸いなことに、これらの警告すべき問題に対する意識は徐々に高まっている。環境意識の高い消費者の増加により、使い捨て文化を拒絶し始めている。しかし、この危機を真に和らげるためには、業界は衣服が長持ちし、リサイクルされるように設計される「サーキュラーエコノミー（循環型経済）」へと移行しなければならない。最終的には、これらの強力なブランドに責任を取らせ、地球の未来を守るためには、厳格な政府の規制と消費者行動の大きな変化の両方が不可欠である。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "本文における「サーキュラーエコノミー（循環型経済）」の定義として正しいものはどれですか？",
            instructionEn: "According to the text, what defines a 'circular economy'?",
            options: [
              { text: "A system where fast fashion brands lower their prices continuously.", isCorrect: false, explanationJa: "価格を下げ続けるシステムではありません。", explanationEn: "It is not a system for continuously lowering prices." },
              { text: "An economy where clothes are designed to last longer and be recycled.", isCorrect: true, explanationJa: "「where clothes are designed to last longer and be recycled」と関係副詞の後ろで定義されています。", explanationEn: "This is perfectly defined right after 'circular economy, where...'." },
              { text: "A market where developing nations control the clothing industry.", isCorrect: false, explanationJa: "途上国が市場をコントロールするとは書かれていません。", explanationEn: "It does not mean developing nations control the industry." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「そこでは衣服が長持ちし、リサイクルされるように設計されている」という、circular economy（循環型経済）を後ろから説明する関係副詞のカタマリをなぞってください。",
            instructionEn: "Trace the relative adverb clause modifying 'circular economy' (starting with 'where...').",
            targetIndices: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 
            explanationJa: "関係副詞 where が使われ、先行詞の circular economy の中で「何が行われているか」を詳しく説明しています。",
            explanationEn: "The relative adverb 'where' introduces a clause that describes what happens inside a circular economy."
          },
          {
            type: "trace",
            instructionJa: "【解決策】強力なブランドに責任を取らせるために「不可欠な2つの要素（both A and B）」をなぞってください。",
            instructionEn: "Trace the two essential elements (both A and B) needed to hold powerful brands accountable.",
            targetIndices: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58], 
            explanationJa: "both A and B（AとBの両方）。政府の規制（regulations）と、消費者の行動変化（behavior）の両輪が必要だと結論づけています。",
            explanationEn: "'both A and B'. The author concludes that strict government regulations and a shift in consumer behavior are both required."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この危機を和らげるために「業界（industry）がすべきこと」を説明している一文をなぞってください。",
            instructionEn: "Trace the sentence that explains what the 'industry' must do to mitigate this crisis.",
            targetIndices: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 
            explanationJa: "「To truly mitigate this crisis...」から始まる文が、企業や業界に対する改善要求をまとめています。",
            explanationEn: "The sentence starting with 'To truly mitigate this crisis...' outlines the transition required by the industry."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「〜を和らげる、軽減する」という意味の高度な動詞をタップしてください。",
            instructionEn: "Tap the verb that means 'to make something less severe, harmful, or painful (mitigate)'.",
            targetIndex: 25, 
            explanationJa: "mitigate は環境問題や危機（crisis）による被害を「軽減する、和らげる」という意味のB2〜C1レベルの重要単語です。",
            explanationEn: "'Mitigate' is a high-level verb meaning to reduce the severity or harmfulness of something."
          },
          {
            type: "tap",
            instructionJa: "「不可欠な、絶対に必要な」という意味の形容詞をタップしてください。",
            instructionEn: "Tap the adjective that means 'absolutely necessary or extremely important (essential)'.",
            targetIndex: 60, 
            explanationJa: "essential は necessary よりも強く「それが無いと成り立たないほど絶対必要」というニュアンスを持ちます。",
            explanationEn: "'Essential' is stronger than necessary; it implies something is absolutely required."
          }
        ]
      }
    }
  ],

  globalTasks: {
    comprehension: [
      {
        type: "select",
        instructionJa: "【Main Idea】この長文を通じて筆者が伝えたいことはどれですか？",
        instructionEn: "What is the primary argument (Main Idea) the author wants to convey through this text?",
        options: [
          { text: "Fast fashion causes severe environmental and social damage, requiring systemic changes from both governments and consumers.", isCorrect: true, explanationJa: "前半の環境ダメージ・社会（労働）ダメージと、後半の「政府と消費者の変化」という解決策を完璧に要約しています。", explanationEn: "This perfectly summarizes both the environmental and labor damages, and the proposed solutions (government and consumer changes)." },
          { text: "Fast fashion relies heavily on outsourced labor in developing countries, which helps those economies grow rapidly.", isCorrect: false, explanationJa: "途上国への外注は言及されていますが、それが「経済を急速に成長させる」というポジティブな側面は語られていません。", explanationEn: "Outsourcing is mentioned, but the text never says it helps developing economies grow rapidly." }
        ]
      }
    ],
    structure: [
      {
        type: "voice",
        instructionJa: "【シャドーイング】対比構造（while）に注意しながら、この長文の核となる比喩表現を感情を込めて音読しましょう。",
        instructionEn: "Read the core metaphor of the text aloud with feeling, paying attention to the contrast (while).",
        targetSentence: "This exploitative system allows consumers in wealthy countries to enjoy cheap fashion, while vulnerable workers pay the real price."
      }
    ],
    summary: [
      {
        type: "select",
        instructionJa: "各段落の論理展開を最も正確にトレースした「要約文」を選んでください。",
        instructionEn: "Which summary most accurately traces the logical flow of all paragraphs?",
        options: [
          { text: "Fast fashion offers cheap clothes but hides extreme environmental harm (like pollution) and social harm (like labor exploitation). Real change requires the industry to embrace a circular economy, supported by government rules and better consumer choices.", isCorrect: true, explanationJa: "「利点と隠されたコスト」→「環境破壊」→「労働搾取」→「業界・政府・消費者の行動変化」という全段落の論理フローを完璧に繋いでいます。", explanationEn: "This brilliantly connects the flow: hidden costs -> environmental harm -> labor exploitation -> solutions by industry, government, and consumers." },
          { text: "Consumers love fast fashion because it is cheap. Although workers suffer, the water pollution caused by factories is slowly being fixed by the government, so we don't need to change our habits.", isCorrect: false, explanationJa: "政府によって水質汚染が直りつつある、習慣を変える必要はない、というのは筆者の主張と真逆です。", explanationEn: "Stating that pollution is being fixed and we don't need to change our habits is the exact opposite of the author's message." }
        ]
      }
    ],
    vocabulary: [
      {
        type: "voice",
        instructionJa: "B2レベルの重要語彙（sustainability, accountable）を意識して、筆者の最終結論を音読しましょう！",
        instructionEn: "Read the author's final conclusion aloud, focusing on key B2 vocabulary!",
        targetSentence: "Strict government regulations and a significant shift in consumer behavior are essential to hold these powerful brands accountable and protect our planet's future."
      }
    ]
  }
};