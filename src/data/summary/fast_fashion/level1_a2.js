export const fast_fashion_L1 = {
  id: "ff-l1-a2",
  themeId: "fast_fashion",
  level: "Level 1 (A2 - Basic)",
  wordCount: 132,
  title: "The Hidden Cost of Fast Fashion",
  
  paragraphs: [
    {
      p_id: 1,
      rawText: "Fast fashion is very popular today. People can buy trendy clothes at low prices. Many stores sell new styles every week. However, this cheap fashion has a hidden cost. It causes serious problems for our planet.",
      tokens: ["Fast", "fashion", "is", "very", "popular", "today.", "People", "can", "buy", "trendy", "clothes", "at", "low", "prices.", "Many", "stores", "sell", "new", "styles", "every", "week.", "However,", "this", "cheap", "fashion", "has", "a", "hidden", "cost.", "It", "causes", "serious", "problems", "for", "our", "planet."],
      translation: "今日、ファストファッションはとても人気があります。人々は流行の服を低価格で買うことができます。多くの店が毎週新しいスタイルを販売しています。しかし、この安価なファッションには隠された代償があります。それは私たちの地球に深刻な問題を引き起こします。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "第一段落によると、ファストファッションの利点は何ですか？",
            instructionEn: "According to the first paragraph, what is the advantage of fast fashion?",
            options: [
              { text: "It causes problems for our planet.", isCorrect: false, explanationJa: "これは利点（advantage）ではなく、マイナス面です。", explanationEn: "This is not an advantage, but a negative aspect." },
              { text: "People can buy trendy clothes at low prices.", isCorrect: true, explanationJa: "本文に「People can buy trendy clothes at low prices.」と明記されています。", explanationEn: "The text clearly states 'People can buy trendy clothes at low prices'." },
              { text: "Clothes are made to last a long time.", isCorrect: false, explanationJa: "長持ちするとは書かれていません。", explanationEn: "It is not mentioned that the clothes last a long time." }
            ]
          },
          // 🌟 NEW
          {
            type: "select",
            instructionJa: "多くの店はどれくらいの頻度で新しいスタイルを販売していますか？",
            instructionEn: "How often do many stores sell new styles?",
            options: [
              { text: "Every day", isCorrect: false, explanationJa: "毎日（every day）ではありません。", explanationEn: "It does not say 'every day'." },
              { text: "Every week", isCorrect: true, explanationJa: "本文に「Many stores sell new styles every week.」と書かれています。", explanationEn: "The text states 'Many stores sell new styles every week'." },
              { text: "Every month", isCorrect: false, explanationJa: "毎月（every month）ではありません。", explanationEn: "It does not say 'every month'." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「しかし、この安価なファッションには隠された代償があります。」という文の、動詞(V)と目的語(O)のカタマリをなぞりましょう。",
            instructionEn: "Trace the verb (V) and the object (O) in the sentence meaning 'However, this cheap fashion has a hidden cost.'",
            targetIndices: [25, 26, 27, 28], 
            explanationJa: "動詞は「has(持っている)」、目的語は「a hidden cost(隠された代償を)」です。",
            explanationEn: "The verb is 'has' and the object block is 'a hidden cost'."
          },
          // 🌟 NEW
          {
            type: "trace",
            instructionJa: "「多くの店が」という、文の主語(S)のカタマリをなぞってください。",
            instructionEn: "Trace the subject (S) block meaning 'Many stores'.",
            targetIndices: [14, 15], 
            explanationJa: "「Many stores(多くの店が)」が直後の動詞「sell(販売する)」の主語になっています。",
            explanationEn: "'Many stores' is the subject of the verb 'sell'."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落のメインアイデア（筆者が一番言いたいマイナス面）を述べている一文をなぞってください。",
            instructionEn: "Trace the sentence that states the main idea (the negative aspect) of this paragraph.",
            targetIndices: [21, 22, 23, 24, 25, 26, 27, 28], 
            explanationJa: "前半のメリットを受けた上で、「However(しかし)」から始まるこの一文が、長文全体のテーマとなる核心です。",
            explanationEn: "Following the benefits, the sentence starting with 'However' presents the core theme of the entire passage."
          },
          // 🌟 NEW
          {
            type: "trace",
            instructionJa: "ファストファッションの「現在のポジティブな状況」を端的に表している最初の一文をなぞってください。",
            instructionEn: "Trace the first sentence that shows the 'positive current situation' of fast fashion.",
            targetIndices: [0, 1, 2, 3, 4, 5], 
            explanationJa: "世間ではとても人気がある、という現状の導入文です。",
            explanationEn: "This is the introductory sentence showing its current popularity."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「流行の、最新の」という意味で使われている形容詞をタップしてください。",
            instructionEn: "Tap the adjective that means 'fashionable and up-to-date'.",
            targetIndex: 9, 
            explanationJa: "trendy は「流行の」という意味の重要単語です。",
            explanationEn: "'Trendy' is an important word meaning fashionable or up-to-date."
          },
          {
            type: "tap",
            instructionJa: "「深刻な、重大な」という意味の単語をタップしてください。",
            instructionEn: "Tap the word that means 'serious or severe'.",
            targetIndex: 31, 
            explanationJa: "serious problems で「深刻な問題」という意味になります。",
            explanationEn: "'Serious problems' means issues that are severe or very bad."
          },
          // 🌟 NEW
          {
            type: "tap",
            instructionJa: "「地球、惑星」という意味の単語をタップしてください。",
            instructionEn: "Tap the word that means 'the Earth' or 'world'.",
            targetIndex: 35, 
            explanationJa: "planet は「惑星」ですが、the planet や our planet の形で「地球環境」を指す際によく使われます。",
            explanationEn: "'Planet' is often used to refer to the Earth, especially in environmental contexts."
          }
        ]
      }
    },
    {
      p_id: 2,
      rawText: "First, fast fashion uses too much water. Making just one cotton shirt takes about 2,700 liters of water. That is enough water for one person to drink for two and a half years! Also, factories often throw dirty water into rivers. This pollutes the environment and harms animals.",
      tokens: ["First,", "fast", "fashion", "uses", "too", "much", "water.", "Making", "just", "one", "cotton", "shirt", "takes", "about", "2,700", "liters", "of", "water.", "That", "is", "enough", "water", "for", "one", "person", "to", "drink", "for", "two", "and", "a", "half", "years!", "Also,", "factories", "often", "throw", "dirty", "water", "into", "rivers.", "This", "pollutes", "the", "environment", "and", "harms", "animals."],
      translation: "第一に、ファストファッションはあまりにも多くの水を使用します。たった1枚の綿のシャツを作るのに約2,700リットルの水が必要です。それは1人の人間が2年半飲むのに十分な水です！また、工場はしばしば汚水（汚い水）を川に捨てます。これは環境を汚染し、動物に害を与えます。",
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "1枚の綿のシャツを作るために使われる水の量は、どれくらいに相当しますか？",
            instructionEn: "How much water is equivalent to making one cotton shirt?",
            options: [
              { text: "Enough for one person to wash clothes for two years.", isCorrect: false, explanationJa: "洗濯（wash clothes）ではなく、飲むため（to drink）の水です。", explanationEn: "The text says water 'to drink', not 'to wash clothes'." },
              { text: "Enough for one person to drink for two and a half years.", isCorrect: true, explanationJa: "「That is enough water for one person to drink for two and a half years!」と書かれています。", explanationEn: "It is exactly stated as 'enough water for one person to drink for two and a half years'." },
              { text: "Enough for animals to drink for one year.", isCorrect: false, explanationJa: "動物の飲み水の話ではありません。", explanationEn: "It is not about water for animals to drink." }
            ]
          },
          // 🌟 NEW
          {
            type: "select",
            instructionJa: "工場は川に何を捨てることが多いですか？",
            instructionEn: "What do factories often throw into rivers?",
            options: [
              { text: "Dirty clothes", isCorrect: false, explanationJa: "服ではなく、水です。", explanationEn: "It says water, not clothes." },
              { text: "Dirty water", isCorrect: true, explanationJa: "「factories often throw dirty water into rivers.」と明記されています。", explanationEn: "The text explicitly states 'dirty water'." },
              { text: "New styles", isCorrect: false, explanationJa: "新しいスタイル（服）を川に捨てるわけではありません。", explanationEn: "They don't throw new styles into rivers." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「たった1枚の綿のシャツを作ること」という、動名詞を使った主語(S)のカタマリをなぞってください。",
            instructionEn: "Trace the subject (S) block using a gerund that means 'Making just one cotton shirt'.",
            targetIndices: [7, 8, 9, 10, 11], 
            explanationJa: "動名詞「Making(作ること)」がまとまって文の主語(S)になっています。動詞は takes です。",
            explanationEn: "The gerund phrase starting with 'Making' acts as the subject (S) of the verb 'takes'."
          },
          // 🌟 NEW
          {
            type: "trace",
            instructionJa: "「川の中へ」という場所を表す前置詞のカタマリをなぞってください。",
            instructionEn: "Trace the prepositional phrase meaning 'into rivers'.",
            targetIndices: [39, 40], 
            explanationJa: "into(〜の中へ)という前置詞と、rivers(川)がセットになっています。",
            explanationEn: "'into' is a preposition showing direction, combined with the noun 'rivers'."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落で挙げられているファストファッションの「最初の問題点」を一言で表している文をなぞってください。",
            instructionEn: "Trace the sentence that states the 'first problem' of fast fashion in this paragraph.",
            targetIndices: [0, 1, 2, 3, 4, 5, 6], 
            explanationJa: "段落のトピックセンテンス（水の使用量が多すぎる）です。",
            explanationEn: "This is the topic sentence of the paragraph stating it uses too much water."
          },
          // 🌟 NEW
          {
            type: "trace",
            instructionJa: "汚水を川に捨てることで「何が起こるか（被害）」をまとめている一文をなぞってください。",
            instructionEn: "Trace the sentence that summarizes 'what happens (the damage)' due to throwing dirty water into rivers.",
            targetIndices: [41, 42, 43, 44, 45, 46, 47], 
            explanationJa: "「This(これ＝川に汚水を捨てること)」が環境汚染と動物への被害に繋がるという結論の文です。",
            explanationEn: "This sentence concludes how 'This' (throwing dirty water) harms the environment and animals."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「汚染する」という意味の動詞をタップしてください。",
            instructionEn: "Tap the verb that means 'to make dirty or harmful (pollute)'.",
            targetIndex: 42, 
            explanationJa: "pollute は「〜を汚染する」という重要な環境語彙です。",
            explanationEn: "'Pollute' is a crucial environmental vocabulary word meaning to make something dirty."
          },
          // 🌟 NEW
          {
            type: "tap",
            instructionJa: "「環境」という意味の名詞をタップしてください。",
            instructionEn: "Tap the noun that means 'the natural world (environment)'.",
            targetIndex: 44, 
            explanationJa: "environment は環境問題で必ずと言っていいほど出題される超重要単語です。",
            explanationEn: "'Environment' is an essential word when discussing nature and ecology."
          }
        ]
      }
    },
    {
      p_id: 3,
      rawText: "Second, people throw away clothes very quickly. Because the clothes are cheap, they do not keep them for a long time. Every year, millions of tons of clothes end up in landfills. These clothes take a very long time to break down.",
      tokens: ["Second,", "people", "throw", "away", "clothes", "very", "quickly.", "Because", "the", "clothes", "are", "cheap,", "they", "do", "not", "keep", "them", "for", "a", "long", "time.", "Every", "year,", "millions", "of", "tons", "of", "clothes", "end", "up", "in", "landfills.", "These", "clothes", "take", "a", "very", "long", "time", "to", "break", "down."],
      translation: "第二に、人々は服をとても早く捨ててしまいます。服が安いため、人々はそれを長くは持ち続けません。毎年、何百万トンもの服が埋立地に行き着きます。これらの服が分解されるのには非常に長い時間がかかります。",
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "人々が服をすぐに捨ててしまう主な理由は何ですか？",
            instructionEn: "What is the main reason people throw away clothes quickly?",
            options: [
              { text: "Because they do not have big closets.", isCorrect: false, explanationJa: "クローゼットの大きさについては言及されていません。", explanationEn: "Closet size is not mentioned in the text." },
              { text: "Because the clothes are cheap.", isCorrect: true, explanationJa: "「Because the clothes are cheap, they do not keep them...」と理由が明記されています。", explanationEn: "The text states 'Because the clothes are cheap, they do not keep them'." },
              { text: "Because the clothes are very dirty.", isCorrect: false, explanationJa: "服が汚いからではありません。", explanationEn: "It is not because the clothes are dirty." }
            ]
          },
          // 🌟 NEW
          {
            type: "select",
            instructionJa: "毎年、何百万トンもの服は最終的にどうなりますか？",
            instructionEn: "What happens to millions of tons of clothes every year?",
            options: [
              { text: "They are sold in stores.", isCorrect: false, explanationJa: "店で売られるわけではありません。", explanationEn: "They are not sold in stores." },
              { text: "They are traded with friends.", isCorrect: false, explanationJa: "友達と交換するとは書かれていません。", explanationEn: "Trading with friends is not mentioned here." },
              { text: "They end up in landfills.", isCorrect: true, explanationJa: "「end up in landfills（埋立地に行き着く）」と明記されています。", explanationEn: "The text says they 'end up in landfills'." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「服が安いため」という、理由を表す接続詞から始まる副詞節（M）をなぞってください。",
            instructionEn: "Trace the adverbial clause of reason starting with a conjunction.",
            targetIndices: [7, 8, 9, 10, 11], 
            explanationJa: "Because からコンマまでのカタマリが、主節（they do not keep them）の理由を説明する副詞節です。",
            explanationEn: "The phrase starting with 'Because' up to the comma acts as an adverbial clause explaining the reason."
          },
          // 🌟 NEW
          {
            type: "trace",
            instructionJa: "「分解されるのに（分解するための）」という意味の、不定詞のカタマリをなぞってください。",
            instructionEn: "Trace the infinitive phrase meaning 'to break down'.",
            targetIndices: [39, 40, 41], 
            explanationJa: "to + 動詞の原形で「〜するための（時間がかかる）」という修飾をしています。",
            explanationEn: "This is an infinitive phrase (to + verb) modifying the noun 'time'."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落で述べられている「第二の問題点」を端的に表している最初の一文をなぞってください。",
            instructionEn: "Trace the first sentence that briefly states the 'second problem'.",
            targetIndices: [0, 1, 2, 3, 4, 5, 6], 
            explanationJa: "人々がすぐに服を捨てる（大量廃棄）ことが第二のトピックです。",
            explanationEn: "Mass disposal of clothes is the second topic presented in this sentence."
          },
          // 🌟 NEW
          {
            type: "trace",
            instructionJa: "「なぜ人々はすぐに服を捨ててしまうのか？」の理由を説明している一文をなぞってください。",
            instructionEn: "Trace the sentence that explains 'why' people throw away clothes quickly.",
            targetIndices: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 
            explanationJa: "Because(〜だから)を使って、安いから長持ちさせないという心理構造を説明しています。",
            explanationEn: "This sentence uses 'Because' to explain the reason behind their behavior."
          }
        ],
        vocabulary: [
          {
            type: "trace",
            instructionJa: "「〜に終わる、結局〜に行き着く」という意味の2語の熟語をなぞってください。",
            instructionEn: "Trace the two-word phrasal verb meaning 'to finally be in a particular place or situation'.",
            targetIndices: [28, 29], 
            explanationJa: "end up in 〜 で「結局〜に行き着く」というよく出る熟語です。",
            explanationEn: "'End up in' is a common phrasal verb meaning to finally be in a place."
          },
          {
            type: "tap",
            instructionJa: "「ゴミの埋立地」を意味する名詞をタップしてください。",
            instructionEn: "Tap the noun that means 'a place where garbage is buried'.",
            targetIndex: 31, 
            explanationJa: "landfill は環境問題の長文で必ず登場する「埋立地」という単語です。",
            explanationEn: "'Landfill' is a must-know word for environmental topics, meaning a place to bury trash."
          },
          // 🌟 NEW
          {
            type: "trace",
            instructionJa: "「分解される、細かく砕ける」という意味の2語の熟語をなぞってください。",
            instructionEn: "Trace the two-word phrasal verb meaning 'to separate into simpler substances (decompose)'.",
            targetIndices: [40, 41], 
            explanationJa: "break down は「分解される」という意味で、自然環境問題で頻出します。",
            explanationEn: "'Break down' is a key phrasal verb meaning to decompose."
          }
        ]
      }
    },
    {
      p_id: 4,
      rawText: "We need to change how we buy clothes. We should buy fewer clothes and choose better quality. We can also buy second-hand clothes or trade with friends. If we make small changes, we can protect the Earth for the future.",
      tokens: ["We", "need", "to", "change", "how", "we", "buy", "clothes.", "We", "should", "buy", "fewer", "clothes", "and", "choose", "better", "quality.", "We", "can", "also", "buy", "second-hand", "clothes", "or", "trade", "with", "friends.", "If", "we", "make", "small", "changes,", "we", "can", "protect", "the", "Earth", "for", "the", "future."],
      translation: "私たちは服の買い方を変える必要があります。私たちはより少ない服を買い、より良い品質のものを選ぶべきです。また、中古の服を買ったり、友達と交換したりすることもできます。もし私たちが小さな変化を起こせば、未来のために地球を守ることができます。",
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "筆者が私たちに提案している解決策として、当てはまらないものはどれですか？",
            instructionEn: "Which of the following is NOT suggested by the author as a solution?",
            options: [
              { text: "Buying fewer clothes.", isCorrect: false, explanationJa: "より少なく買う（buy fewer clothes）は提案されています。", explanationEn: "Buying fewer clothes is suggested." },
              { text: "Trading clothes with friends.", isCorrect: false, explanationJa: "友達と交換する（trade with friends）も提案されています。", explanationEn: "Trading with friends is suggested." },
              { text: "Washing clothes with less water.", isCorrect: true, explanationJa: "より少ない水で洗濯する、という提案は段落内には書かれていません。", explanationEn: "Washing with less water is not mentioned as a solution here." }
            ]
          },
          // 🌟 NEW
          {
            type: "select",
            instructionJa: "なぜ私たちは「小さな変化」を起こすべきだと筆者は言っていますか？",
            instructionEn: "Why does the author say we should make 'small changes'?",
            options: [
              { text: "To protect the Earth for the future.", isCorrect: true, explanationJa: "「we can protect the Earth for the future」と最後の文に書かれています。", explanationEn: "The final sentence states 'we can protect the Earth for the future'." },
              { text: "To make cheaper clothes.", isCorrect: false, explanationJa: "もっと安い服を作るためではありません。", explanationEn: "It is not to make clothes cheaper." },
              { text: "To buy more new styles.", isCorrect: false, explanationJa: "新しいスタイルをもっと買うためではありません。", explanationEn: "It is not to buy more styles." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「私たちの服の買い方（私たちがどのように服を買うか）」という、名詞のカタマリ（目的語）をなぞってください。",
            instructionEn: "Trace the noun clause (object) meaning 'how we buy clothes'.",
            targetIndices: [4, 5, 6, 7], 
            explanationJa: "疑問詞 how が導く名詞節で、change の目的語(O)になっています。",
            explanationEn: "This is a noun clause led by 'how', acting as the object of 'change'."
          },
          // 🌟 NEW
          {
            type: "trace",
            instructionJa: "「買うべきである」という意味の、助動詞＋動詞の原形のカタマリをなぞってください。",
            instructionEn: "Trace the modal verb and base verb meaning 'should buy'.",
            targetIndices: [9, 10], 
            explanationJa: "助動詞 should(〜すべき) と動詞 buy(買う) の組み合わせです。",
            explanationEn: "This is the modal verb 'should' combined with the base verb 'buy'."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落（結論）における、筆者からの「最も重要なメッセージ（条件と結果）」を述べている最後の一文をなぞってください。",
            instructionEn: "Trace the last sentence that states the author's 'most important message'.",
            targetIndices: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39], 
            explanationJa: "If から始まる最後の文が、この長文全体の最終的な結論（解決への道）です。",
            explanationEn: "The final sentence starting with 'If' is the ultimate conclusion and message of the passage."
          },
          // 🌟 NEW
          {
            type: "trace",
            instructionJa: "私たちが起こすべき「行動の変化（宣言）」を提示している最初の一文をなぞってください。",
            instructionEn: "Trace the first sentence that declares the 'change in action' we must take.",
            targetIndices: [0, 1, 2, 3, 4, 5, 6, 7], 
            explanationJa: "「服の買い方を変える必要がある」という、この段落の軸となる文です。",
            explanationEn: "This sets the theme for the paragraph: we need to change our buying habits."
          }
        ],
        vocabulary: [
          {
            type: "trace",
            instructionJa: "「中古の（古着の）」という意味の1単語（ハイフンで繋がれた語）をなぞってください。",
            instructionEn: "Trace the hyphenated word that means 'not new; owned by someone else before'.",
            targetIndices: [21], 
            explanationJa: "second-hand は「中古の」という意味の重要な形容詞です。",
            explanationEn: "'Second-hand' is an important adjective meaning previously owned."
          },
          // 🌟 NEW
          {
            type: "tap",
            instructionJa: "「品質、質」という意味の名詞をタップしてください。",
            instructionEn: "Tap the noun that means 'how good or bad something is (quality)'.",
            targetIndex: 16, 
            explanationJa: "quality は量（quantity）と対になる重要な単語で、「品質」を表します。",
            explanationEn: "'Quality' is a crucial noun referring to how good a product is."
          }
        ]
      }
    }
  ],

  globalTasks: {
    comprehension: [
      {
        type: "select",
        instructionJa: "この長文のタイトルとして最も適切なものはどれですか？",
        instructionEn: "What is the best title for this passage?",
        options: [
          { text: "How to Make Trendy Clothes", isCorrect: false, explanationJa: "服の作り方についての文章ではありません。", explanationEn: "The passage is not about how to make clothes." },
          { text: "The Hidden Cost of Fast Fashion", isCorrect: true, explanationJa: "安さの裏にある環境への代償（水質汚染や大量廃棄）が全体のテーマです。", explanationEn: "The hidden environmental cost (water pollution, waste) behind cheap clothes is the main theme." },
          { text: "Why We Need More Landfills", isCorrect: false, explanationJa: "埋立地がもっと必要だとは主張していません。", explanationEn: "The author does not argue that we need more landfills." }
        ]
      },
      // 🌟 NEW
      {
        type: "select",
        instructionJa: "この長文を書いた筆者の主な目的は何ですか？",
        instructionEn: "What is the main purpose of the author?",
        options: [
          { text: "To teach how to wash clothes with less water.", isCorrect: false, explanationJa: "洗濯の方法を教えるのが目的ではありません。", explanationEn: "Teaching how to wash clothes is not the purpose." },
          { text: "To warn about the negative effects of fast fashion.", isCorrect: true, explanationJa: "ファストファッションのネガティブな影響（水質汚染、廃棄）について警告し、行動を促すことが目的です。", explanationEn: "The purpose is to warn about the environmental damage of fast fashion." },
          { text: "To advertise new trendy clothes.", isCorrect: false, explanationJa: "服を宣伝（advertise）しているわけではありません。", explanationEn: "The author is not advertising clothes." }
        ]
      }
    ],
    structure: [
      {
        type: "voice",
        instructionJa: "最後に、長文全体を通して音読し、英語の構造を口から定着させましょう！",
        instructionEn: "Finally, read the whole passage aloud to master the structure!",
        targetSentence: "Fast fashion is very popular today. People can buy trendy clothes at low prices. Many stores sell new styles every week. However, this cheap fashion has a hidden cost. It causes serious problems for our planet."
      },
      // 🌟 NEW
      {
        type: "voice",
        instructionJa: "第2段落の水質汚染に関する事実を音読して、文構造を定着させましょう。",
        instructionEn: "Read the facts about water pollution aloud to master the structure.",
        targetSentence: "First, fast fashion uses too much water. Making just one cotton shirt takes about 2,700 liters of water. Also, factories often throw dirty water into rivers."
      }
    ],
    summary: [
      {
        type: "select",
        instructionJa: "これまでのパラグラフごとの要点を踏まえ、長文全体の要約として最も適切なものを選んでください。",
        instructionEn: "Based on the main ideas of each paragraph, choose the best summary for the whole passage.",
        options: [
          { text: "Fast fashion is cheap, but it harms the environment through water pollution and waste. We must change our buying habits to protect the Earth.", isCorrect: true, explanationJa: "「安さの裏にある環境破壊（水と廃棄）」と「購買行動の変更」という全段落の要旨が含まれています。", explanationEn: "This captures the main ideas from all paragraphs: cheapness, environmental harm, and changing habits." },
          { text: "Fast fashion is good because we can buy cheap clothes. We should throw them away quickly to buy more new styles.", isCorrect: false, explanationJa: "筆者の主張と真逆の内容です。", explanationEn: "This is the exact opposite of what the author is arguing." },
          { text: "Cotton shirts need a lot of water to make. Therefore, we should never buy clothes again.", isCorrect: false, explanationJa: "決して服を買うな、とは言っていません。買い方を変えようと言っています。", explanationEn: "The author doesn't say never buy clothes again, but rather to change how we buy them." }
        ]
      },
      // 🌟 NEW
      {
        type: "select",
        instructionJa: "長文全体の内容と「一致している文」を1つ選んでください。",
        instructionEn: "Which statement is TRUE based on the whole text?",
        options: [
          { text: "Fast fashion helps the environment by reducing water usage.", isCorrect: false, explanationJa: "水の使用量を減らすどころか、大量に使っています。", explanationEn: "Fast fashion uses too much water, it doesn't reduce it." },
          { text: "Fast fashion is affordable, but it creates serious environmental problems.", isCorrect: true, explanationJa: "手頃な価格（affordable）だが、環境に深刻な問題を引き起こしているという本文の趣旨と一致します。", explanationEn: "This perfectly aligns with the text: it's cheap but causes environmental issues." },
          { text: "People keep cheap clothes for a very long time.", isCorrect: false, explanationJa: "安いからすぐ捨てる（do not keep them for a long time）と書かれています。", explanationEn: "The text states they do not keep them for a long time." }
        ]
      }
    ],
    vocabulary: [
      {
        type: "voice",
        instructionJa: "今回登場した重要語彙を含む文を音読して、文脈ごとの意味をインプットしましょう！",
        instructionEn: "Read the sentence aloud to input the meaning in context!",
        targetSentence: "This cheap fashion has a hidden cost. Millions of tons of clothes end up in landfills."
      },
      // 🌟 NEW
      {
        type: "voice",
        instructionJa: "未来を守るための重要フレーズを音読して、表現を自分のものにしましょう！",
        instructionEn: "Read the key phrase for protecting the future aloud to make it your own!",
        targetSentence: "If we make small changes, we can protect the Earth for the future."
      }
    ]
  }
};