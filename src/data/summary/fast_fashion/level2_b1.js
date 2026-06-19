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
      rawText: "In recent years, fast fashion has changed the way we buy clothes. Stores offer the latest trends at very low prices, allowing consumers to change their styles frequently. While this seems like a great benefit, it hides serious environmental problems.",
      tokens: ["In", "recent", "years,", "fast", "fashion", "has", "changed", "the", "way", "we", "buy", "clothes.", "Stores", "offer", "the", "latest", "trends", "at", "very", "low", "prices,", "allowing", "consumers", "to", "change", "their", "styles", "frequently.", "While", "this", "seems", "like", "a", "great", "benefit,", "it", "hides", "serious", "environmental", "problems."],
      translation: "近年、ファストファッションは私たちの服の買い方を変えました。店は最新のトレンドを非常に安い価格で提供し、消費者が頻繁にスタイルを変えることを可能にしています。これは大きな利点のように思えますが、深刻な環境問題を隠しています。",
      
      // 🌟 パラグラフ1：4モード完全対応＆大増量
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "第一段落によると、ファストファッションによって消費者は何ができるようになりましたか？",
            instructionEn: "According to the first paragraph, what does fast fashion allow consumers to do?",
            options: [
              { text: "They can design their own clothing brands.", isCorrect: false, explanationJa: "自分自身のブランドをデザインできるとは書かれていません。", explanationEn: "It is not mentioned that they can design their own brands." },
              { text: "They can change their fashion styles frequently at low prices.", isCorrect: true, explanationJa: "「allowing consumers to change their styles frequently」という記述と一致します。", explanationEn: "This matches the text: 'allowing consumers to change their styles frequently'." },
              { text: "They can learn how to protect the environment.", isCorrect: false, explanationJa: "環境を保護する方法を学べるとは書かれていません。", explanationEn: "It does not say they can learn how to protect the environment." }
            ]
          },
          {
            type: "select",
            instructionJa: "筆者は最近の服の買い方の変化についてどう考えていますか？",
            instructionEn: "What does the author think about the recent change in how we buy clothes?",
            options: [
              { text: "It is entirely positive and helps stores grow.", isCorrect: false, explanationJa: "全面的にポジティブだとは考えていません。後ろで問題点に触れています。", explanationEn: "The author does not think it is entirely positive, as serious problems are mentioned." },
              { text: "It appears beneficial but covers up major ecological issues.", isCorrect: true, explanationJa: "「While this seems like a great benefit, it hides...」の内容と完璧に一致します。", explanationEn: "This perfectly matches: 'While this seems like a great benefit, it hides serious environmental problems.'" },
              { text: "It makes clothing prices too expensive for young people.", isCorrect: false, explanationJa: "価格が高すぎる（expensive）のではなく、非常に安い（very low prices）と書かれています。", explanationEn: "The text says prices are 'very low', not 'too expensive'." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「私たちの服の買い方」という、先行詞 the way の後ろに関係副詞（またはその省略）が続く名詞のカタマリ（4語）をなぞってください。",
            instructionEn: "Trace the noun block meaning 'the way we buy clothes' (4 words).",
            targetIndices: [7, 8, 9, 10, 11], 
            explanationJa: "「the way we buy clothes」で、直前の changed の目的語(O)となる巨大な名詞のカタマリを作っています。",
            explanationEn: "'the way we buy clothes' forms a massive noun block acting as the object of 'changed'."
          },
          {
            type: "tap",
            instructionJa: "「〜である一方で、〜だけれども」という、譲歩・対比を表す接続詞をタップしてください。",
            instructionEn: "Tap the conjunction that indicates contrast or concession ('While').",
            targetIndex: 28, 
            explanationJa: "While は「〜の一方で」という逆接・対比のニュアンスを持ち、その後に筆者の本音が来ます。",
            explanationEn: "'While' introduces a concession, setting up the author's main critical point right after it."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "【コア抽出】この段落で筆者が本当に伝えたい「隠された問題点」の核心部分をなぞってください。",
            instructionEn: "Trace the core part that states the 'hidden problems' the author wants to convey.",
            targetIndices: [35, 36, 37, 38, 39], 
            explanationJa: "While（〜である一方で）という譲歩のあとに、筆者の言いたい「深刻な環境問題を隠している（it hides serious environmental problems.）」が来ます。",
            explanationEn: "After the concession 'While...', the author introduces the core message: 'it hides serious environmental problems.'"
          },
          {
            type: "trace",
            instructionJa: "ファストファッションが世間にウケている「一見良さそうに見えるメリット」を述べている部分（7語）をなぞってください。",
            instructionEn: "Trace the part that states the 'seemingly good benefit' of fast fashion (7 words).",
            targetIndices: [28, 29, 30, 31, 32, 33, 34], 
            explanationJa: "「While this seems like a great benefit（これは大きな利点のように思えるが）」の部分がメリットの要約です。",
            explanationEn: "'While this seems like a great benefit' summarizes the superficial advantage."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「利益、利点」を意味する名詞をタップしてください。",
            instructionEn: "Tap the noun that means 'an advantage or profit (benefit)'.",
            targetIndex: 34, 
            explanationJa: "benefit は「恩恵、利益、利点」を表す重要な名詞です。",
            explanationEn: "'Benefit' is an important noun meaning an advantage or something helpful."
          },
          {
            type: "tap",
            instructionJa: "「頻繁に、しばしば」という意味の副詞をタップしてください。",
            instructionEn: "Tap the adverb that means 'regularly or often (frequently)'.",
            targetIndex: 27, 
            explanationJa: "frequently は often のインテリジェントな言い換えとしてB1レベルの長文で多用されます。",
            explanationEn: "'Frequently' is a B1-level adverb meaning often or regularly."
          }
        ]
      }
    },
    {
      p_id: 2,
      rawText: "First, producing millions of cheap garments requires massive amounts of water. For example, making just one cotton t-shirt takes about 2,700 liters of water. In addition, factories use toxic chemicals to dye the fabrics. These harmful substances often flow into local rivers, making the water unsafe for animals and people living nearby.",
      tokens: ["First,", "producing", "millions", "of", "cheap", "garments", "requires", "massive", "amounts", "of", "water.", "For", "example,", "making", "just", "one", "cotton", "t-shirt", "takes", "about", "2,700", "liters", "of", "water.", "In", "addition,", "factories", "use", "toxic", "chemicals", "to", "dye", "the", "fabrics.", "These", "harmful", "substances", "often", "flow", "into", "local", "rivers,", "making", "the", "water", "unsafe", "for", "animals", "and", "people", "living", "nearby."],
      translation: "第一に、何百万もの安い衣服を生産することは大量の水を必要とします。例えば、たった1枚の綿のシャツを作るのに約2,700リットルの水がかかります。加えて、工場は生地を染めるために有毒な化学物質を使います。これらの有害物質はしばしば地元の川に流れ込み、近くに住む動物や人々にとって水を安全でないものにします。",
      
      // 🌟 パラグラフ2：4モード完全対応＆大増量
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "工場が使用する「化学物質」は、最終的に誰や何に悪影響を与えますか？",
            instructionEn: "Who or what do the chemicals used by factories ultimately harm?",
            options: [
              { text: "Only the workers in the clothing factories.", isCorrect: false, explanationJa: "工場で働く労働者だけ（Only the workers）とは書かれていません。", explanationEn: "It doesn't say it only harms factory workers." },
              { text: "Local rivers, animals, and nearby residents.", isCorrect: true, explanationJa: "川、動物、そして近くに住む人々（animals and people living nearby）を危険にさらすとあります。", explanationEn: "The text notes it harms local rivers, animals, and people living nearby." },
              { text: "The cotton plants growing in the fields.", isCorrect: false, explanationJa: "綿の植物（cotton plants）への被害については触れられていません。", explanationEn: "Damage to cotton plants is not mentioned." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "【SVOC分解】「making the water unsafe」において、O(目的語)とC(補語)の関係になっている語を含んだ「結果」を表す分詞構文（4語）をなぞってください。",
            instructionEn: "Trace the participle phrase showing result 'making the water unsafe' (4 words).",
            targetIndices: [42, 43, 44, 45], 
            explanationJa: "make + O(the water) + C(unsafe) の構造です。「水を安全でない状態にする」という結果を表す分詞構文になっています。",
            explanationEn: "This forms a participle phrase expressing result, using 'make + Object (the water) + Complement (unsafe)'."
          },
          {
            type: "trace",
            instructionJa: "「何百万もの安い衣服を生産すること」という、1文目の主語(S)になっている動名詞句のカタマリをなぞってください。",
            instructionEn: "Trace the gerund phrase acting as the subject (S) in the first sentence.",
            targetIndices: [1, 2, 3, 4, 5, 6], 
            explanationJa: "動名詞「producing（生産すること）」が率いる大きなカタマリが、文の主語(S)として機能しています。動詞は requires です。",
            explanationEn: "The gerund phrase led by 'producing' acts as the subject of the sentence. The verb is 'requires'."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落のトピック（最初の大きな問題点：水の大量消費）を端的に宣言している最初の一文をなぞってください。",
            instructionEn: "Trace the first sentence that clearly states the first major problem (water usage).",
            targetIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
            explanationJa: "この段落のトピックセンテンスであり、大量の水を消費するという事実を述べています。",
            explanationEn: "This is the topic sentence of the paragraph, introducing the massive water consumption."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "【語彙ハント】「poisonous（有毒な）」と同じ意味で使われている環境用語の形容詞をタップしてください。",
            instructionEn: "Tap the environmental adjective that means 'poisonous (toxic)'.",
            targetIndex: 28, 
            explanationJa: "toxic は「有毒な」という意味で、化学物質や汚染の文脈で非常によく使われる重要単語です。",
            explanationEn: "'Toxic' means poisonous and is widely used in environmental contexts."
          },
          {
            type: "tap",
            instructionJa: "「衣服、衣料品」を意味する名詞をタップしてください。",
            instructionEn: "Tap the noun that means 'clothing or pieces of apparel (garments)'.",
            targetIndex: 5, 
            explanationJa: "garments は clothes の少しフォーマルな表現（衣料品）です。",
            explanationEn: "'Garments' is a slightly more formal term for clothes or apparel."
          }
        ]
      }
    },
    {
      p_id: 3,
      rawText: "Another major issue is the staggering amount of waste generated by this industry. Because fast fashion clothes are cheap and often made with low-quality synthetic materials, people throw them away after wearing them only a few times. Consequently, millions of tons of clothing end up in landfills or are burned every single year, causing more air pollution.",
      tokens: ["Another", "major", "issue", "is", "the", "staggering", "amount", "of", "waste", "generated", "by", "this", "industry.", "Because", "fast", "fashion", "clothes", "are", "cheap", "and", "often", "made", "with", "low-quality", "synthetic", "materials,", "people", "throw", "them", "away", "after", "wearing", "them", "only", "a", "few", "times.", "Consequently,", "millions", "of", "tons", "of", "clothing", "end", "up", "in", "landfills", "or", "are", "burned", "every", "single", "year,", "causing", "more", "air", "pollution."],
      translation: "もう一つの大きな問題は、この産業によって生み出される驚くべき量の廃棄物です。ファストファッションの服は安く、しばしば低品質の合成素材で作られているため、人々はほんの数回着ただけでそれらを捨ててしまいます。結果として、何百万トンもの衣類が毎年ゴミ処理場に行き着くか、あるいは燃やされ、さらなる大気汚染を引き起こしています。",
      
      // 🌟 パラグラフ3：4モード完全対応＆大増量
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "なぜ人々はファストファッションの服をすぐに手放してしまう（捨てる）傾向にありますか？",
            instructionEn: "Why do people tend to dispose of fast fashion clothes so quickly?",
            options: [
              { text: "Because the styles go out of trend in a day.", isCorrect: false, explanationJa: "1日でトレンドが終わるから、とは書かれていません。", explanationEn: "The text does not state that trends change in a single day." },
              { text: "Because they are cheap and made from low-quality materials.", isCorrect: true, explanationJa: "「cheap and often made with low-quality synthetic materials」という理由が直接書かれています。", explanationEn: "The text explicitly notes they are 'cheap and often made with low-quality synthetic materials'." },
              { text: "Because the stores offer rewards for recycling.", isCorrect: false, explanationJa: "リサイクルの特典については言及されていません。", explanationEn: "Recycling rewards are not mentioned in this paragraph." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「この産業によって生み出される」という、直前の名詞 waste（廃棄物）を後ろから修飾している過去分詞句（4語）をなぞってください。",
            instructionEn: "Trace the past participle phrase modifying 'waste' from behind (4 words).",
            targetIndices: [9, 10, 11, 12], 
            explanationJa: "generated by this industry（この産業によって生み出された）が後置修飾として waste を説明しています。",
            explanationEn: "'generated by this industry' is a past participle phrase modifying the noun 'waste'."
          },
          {
            type: "trace",
            instructionJa: "「それらを投げ捨てる」という意味の、代名詞 them を挟み込んでいる熟語（群動詞）のカタマリ（3語）をなぞってください。",
            instructionEn: "Trace the phrasal verb block including the pronoun meaning 'throw them away'.",
            targetIndices: [27, 28, 29], 
            explanationJa: "throw away（捨てる）という熟語の間に、目的語の代名詞 them が挟まるルール（throw them away）を表しています。",
            explanationEn: "When the object is a pronoun like 'them', it must be placed between 'throw' and 'away'."
          }
        ],
        summary: [
          {
            type: "select",
            instructionJa: "【段落要約】この段落の論理展開（原因 ➡ 結果）を最もきれいにまとめているものはどれですか？",
            instructionEn: "Choose the option that best summarizes the logical flow of this paragraph.",
            options: [
              { text: "Clothes are cheap/low-quality ➡ People throw them away quickly ➡ Huge waste and air pollution", isCorrect: true, explanationJa: "Because 〜（原因）から Consequently 〜（結果）へと繋がる段落の要旨を完璧にまとめています。", explanationEn: "This perfectly captures the cause-and-effect structure from 'Because...' to 'Consequently...'." },
              { text: "Air pollution increases ➡ More landfills are built ➡ Clothing production stops", isCorrect: false, explanationJa: "生産が止まるとは書かれていませんし、論理の順序が不自然です。", explanationEn: "The text does not state production stops, and the sequence is incorrect." }
            ]
          },
          {
            type: "tap",
            instructionJa: "「結果として、したがって」という、強力な因果関係を導く論理的な接続詞をタップしてください。",
            instructionEn: "Tap the logical transition word that means 'as a result' or 'therefore' ('Consequently').",
            targetIndex: 37, 
            explanationJa: "Consequently は、前に書かれた原因を受けて「結果としてこうなる」という重い事実を導く接続詞です。",
            explanationEn: "'Consequently' is a powerful transition used to introduce a direct result of previous causes."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「驚くべき、信じられないほどの」という意味の、規模の大きさに呆れるようなニュアンスを持つ形容詞をタップしてください。",
            instructionEn: "Tap the adjective that means 'deeply shocking or astonishing (staggering)'.",
            targetIndex: 5, 
            explanationJa: "staggering は amount（量）や statistics（統計）を修飾し、「目を見張るような膨大な」という意味になります。",
            explanationEn: "'Staggering' is used to emphasize an astonishingly large or shocking amount."
          },
          {
            type: "tap",
            instructionJa: "「合成の、人工的な」という意味の、化学繊維の背景を表す形容詞をタップしてください。",
            instructionEn: "Tap the adjective that means 'artificial or man-made (synthetic)'.",
            targetIndex: 24, 
            explanationJa: "synthetic materials で「合成素材（ポリエステルなど）」という意味になります。",
            explanationEn: "'Synthetic' refers to chemical or man-made substances rather than natural ones."
          }
        ]
      }
    },
    {
      p_id: 4,
      rawText: "To protect our planet, we urgently need to change our shopping habits. Instead of buying cheap, disposable clothes every season, we should choose sustainable brands or buy second-hand items. It is time to value quality over quantity.",
      tokens: ["To", "protect", "our", "planet,", "we", "urgently", "need", "to", "change", "our", "shopping", "habits.", "Instead", "of", "buying", "cheap,", "disposable", "clothes", "every", "season,", "we", "should", "choose", "sustainable", "brands", "or", "buy", "second-hand", "items.", "It", "is", "time", "to", "value", "quality", "over", "quantity."],
      translation: "地球を守るために、私たちは買い物習慣を緊急に変える必要があります。毎シーズン安くて使い捨ての服を買う代わりに、私たちは持続可能なブランドを選ぶか、中古品を買うべきです。今こそ、量より質を重んじる時なのです。",
      
      // 🌟 パラグラフ4：4モード完全対応＆大増量
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "筆者がファストファッションの解決策として「提案していないもの」はどれですか？",
            instructionEn: "Which of the following is NOT suggested by the author as a solution?",
            options: [
              { text: "Choosing eco-friendly and sustainable brands.", isCorrect: false, explanationJa: "持続可能なブランドを選ぶことは提案されています。", explanationEn: "Choosing sustainable brands is directly suggested." },
              { text: "Buying used or second-hand clothing items.", isCorrect: false, explanationJa: "中古品を買うこと（buy second-hand items）も提案されています。", explanationEn: "Buying second-hand items is also suggested." },
              { text: "Stopping shopping entirely and making clothes by hand.", isCorrect: true, explanationJa: "買い物を完全にやめて手作りしろ、という極端な提案は書かれていません。", explanationEn: "The text does not suggest completely stopping shopping or making clothes by hand." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「地球を保護するために」という、目的を表す副詞的用法の不定詞のカタマリ（4語）をなぞってください。",
            instructionEn: "Trace the infinitive phrase of purpose meaning 'To protect our planet' (4 words).",
            targetIndices: [0, 1, 2, 3], 
            explanationJa: "To + 動詞の原形が文頭に置かれ、「〜するために」という目的を明確に表す副詞的な役割を果たしています。",
            explanationEn: "The infinitive phrase at the beginning of the sentence explicitly states the purpose."
          },
          {
            type: "trace",
            instructionJa: "「〜する代わりに」という、対比の条件を導く複合前置詞のカタマリ（2語）をなぞってください。",
            instructionEn: "Trace the two-word complex preposition meaning 'Instead of'.",
            targetIndices: [12, 13], 
            explanationJa: "Instead of 〜 で「〜の代わりに」という意味になり、直後に動名詞 buying が続いています。",
            explanationEn: "'Instead of' is a complex preposition followed by the gerund 'buying'."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "【コア抽出】この長文全体の結論であり、私たちが今後服に対して持つべき「最も重要なマインド」をズバリ述べている最後のフレーズをなぞってください。",
            instructionEn: "Trace the final key phrase that summarizes the most important mindset for consumers.",
            targetIndices: [33, 34, 35, 36], 
            explanationJa: "「value quality over quantity（量よりも質を大切にする）」という、筆者が最も生徒に届けたい強烈な結論メッセージです。",
            explanationEn: "'value quality over quantity' represents the absolute conclusion and final advice of the text."
          },
          {
            type: "trace",
            instructionJa: "私たちが「今すぐ（緊急に）変えなければならない大前提」を宣言している一文をなぞってください。",
            instructionEn: "Trace the sentence that declares the major premise we must urgently change.",
            targetIndices: [4, 5, 6, 7, 8, 9, 10, 11], 
            explanationJa: "「we urgently need to change our shopping habits（私たちは買い物習慣を緊急に変える必要がある）」という問題提起からの解決への一歩です。",
            explanationEn: "This sentence states the immediate action required: changing our shopping habits."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「使い捨ての」という意味の形容詞をタップしてください。",
            instructionEn: "Tap the adjective that means 'designed to be thrown away after use (disposable)'.",
            targetIndex: 16, 
            explanationJa: "disposable は dispose（処分する）から派生した形容詞で、現代の大量消費社会を批判する文脈で頻出します。",
            explanationEn: "'Disposable' comes from 'dispose' and describes items meant to be thrown away quickly."
          },
          {
            type: "tap",
            instructionJa: "「持続可能な、環境を維持できる」という意味の、現代で最も重要視される形容詞をタップしてください。",
            instructionEn: "Tap the essential adjective that means 'able to be maintained over time (sustainable)'.",
            targetIndex: 23, 
            explanationJa: "sustainable は「サステナブル、持続可能な」を意味する、入試や検定の環境問題における最重要単語です。",
            explanationEn: "'Sustainable' is the single most critical vocabulary word for modern environmental topics."
          }
        ]
      }
    }
  ],

  // 🌟 長文全体：4モード完全対応＆大増量
  globalTasks: {
    comprehension: [
      {
        type: "select",
        instructionJa: "【Main Idea】この長文を通じて、筆者が読者に最も伝えたい主張（Main Idea）は何ですか？",
        instructionEn: "What is the primary argument (Main Idea) the author wants to convey through this text?",
        options: [
          { text: "Fast fashion creates severe water and waste issues, meaning consumers must shift toward sustainable habits.", isCorrect: true, explanationJa: "前半で述べられた環境問題（水質汚染・廃棄物）と、最終段落の解決策（量より質への行動変化）を完璧にカバーしています。", explanationEn: "This perfectly summarizes both the environmental issues mentioned and the solution proposed in the text." },
          { text: "Synthetic materials are better than cotton because they save a massive amount of natural water.", isCorrect: false, explanationJa: "合成素材（synthetic materials）は低品質で廃棄の原因になると批判されているため、誤りです。", explanationEn: "This is incorrect because synthetic materials are criticized for being low-quality and causing waste." }
        ]
      },
      {
        type: "select",
        instructionJa: "長文全体の内容と「一致しているもの」を次の中から1つ選んでください。",
        instructionEn: "Which of the following statements is TRUE based on the entire passage?",
        options: [
          { text: "Making a cotton shirt is environmentally friendly because it uses very little water.", isCorrect: false, explanationJa: "シャツ1枚に2,700リットルの水を使うため、水の使用量が少ない（very little water）というのは嘘です。", explanationEn: "Incorrect. Making a shirt requires a huge amount of water (2,700 liters)." },
          { text: "The low price of fast fashion leads to quick disposal and further air pollution when burned.", isCorrect: true, explanationJa: "価格が安いためにすぐに捨てられ、燃やされることでさらなる大気汚染に繋がるという段落3の事実と完全に一致します。", explanationEn: "True. Cheap prices lead to fast disposal, and burning these items causes further air pollution." },
          { text: "The author suggests that people should only buy clothes from expensive foreign luxury stores.", isCorrect: false, explanationJa: "高級ブランドで買えとは言っていません。持続可能なブランドや中古品を提案しています。", explanationEn: "The author never suggests luxury stores, but rather sustainable brands or second-hand items." }
        ]
      }
    ],
    structure: [
      {
        type: "voice",
        instructionJa: "【構造定着】「It is time to 〜（〜する時だ）」という重要な構文を意識して、最後のメッセージを力強く音読しましょう！",
        instructionEn: "Read the final message aloud, focusing on the key structure 'It is time to...'!",
        targetSentence: "It is time to value quality over quantity."
      }
    ],
    summary: [
      {
        type: "select",
        instructionJa: "各段落の要旨を論理的に結合した、最も精度の高い「要約文」はどれですか？",
        instructionEn: "Which summary best combines the key points of all paragraphs logically?",
        options: [
          { text: "Fast fashion is affordable but causes deep environmental harm through water usage, river pollution, and mass waste. To fix this, we must transition from valuing quantity to prioritizing quality.", isCorrect: true, explanationJa: "全段落のコア（安さ、水の消費、川の汚染、大量廃棄、質への転換）のパズルが綺麗に組み合わさった完璧な要約です。", explanationEn: "This beautifully integrates all components: affordability, water issues, pollution, waste, and the mental shift to quality." },
          { text: "Factories are polluting local rivers with chemicals, which makes animals change their styles frequently.", isCorrect: false, explanationJa: "動物がスタイルを頻繁に変える、という意味不明な要約になっています。", explanationEn: "This summary is nonsensical as it implies animals frequently change their fashion styles." }
        ]
      }
    ],
    vocabulary: [
      {
        type: "voice",
        instructionJa: "今回登場した Intermediate（中級）の重要単語（massive, synthetic）を含む文を滑らかに音読しましょう。",
        instructionEn: "Read the sentence smoothly containing key intermediate words!",
        targetSentence: "Producing millions of cheap garments requires massive amounts of water and synthetic materials."
      }
    ]
  }
};