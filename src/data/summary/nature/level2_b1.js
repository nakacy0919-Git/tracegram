export const nature_L2 = {
  id: "nat-l2-b1",
  themeId: "nature",
  level: "Level 2 (B1 - Intermediate)",
  wordCount: 167,
  title: "How Microplastics Affect Marine Life",
  theme: "自然・環境",
  
  vocabulary: [
    { word: "pollution", meaning: "汚染", pos: "noun", synonyms: ["contamination"], nuance: "環境が有害な物質によって汚されること。" },
    { word: "swallow", meaning: "〜を飲み込む", pos: "verb", synonyms: ["gulp down"], nuance: "食べ物などを喉の奥へ送り込むこと。" },
    { word: "harmful", meaning: "有害な", pos: "adj", synonyms: ["damaging", "dangerous"], nuance: "健康や環境に悪い影響を与える様子。" },
    { word: "reliance", meaning: "依存", pos: "noun", synonyms: ["dependence"], nuance: "何かを頼りにしている状態。" }
  ],

  paragraphs: [
    {
      p_id: 1,
      rawText: "Plastic pollution is one of the most serious threats to our oceans. Every year, millions of tons of plastic waste end up in the sea. Over time, sunlight and ocean waves break these plastics down into tiny pieces called microplastics. These tiny pieces are almost impossible to clean up completely.",
      tokens: ["Plastic", "pollution", "is", "one", "of", "the", "most", "serious", "threats", "to", "our", "oceans.", "Every", "year,", "millions", "of", "tons", "of", "plastic", "waste", "end", "up", "in", "the", "sea.", "Over", "time,", "sunlight", "and", "ocean", "waves", "break", "these", "plastics", "down", "into", "tiny", "pieces", "called", "microplastics.", "These", "tiny", "pieces", "are", "almost", "impossible", "to", "clean", "up", "completely."],
      translation: "プラスチック汚染は私たちの海にとって最も深刻な脅威の一つです。毎年、何百万トンものプラスチックごみが海に行き着きます。時間が経つにつれて、太陽の光と波がこれらのプラスチックを分解し、マイクロプラスチックと呼ばれる小さな破片にします。これらの小さな破片を完全に掃除することはほぼ不可能です。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "プラスチックを「マイクロプラスチック」に分解する主な原因は何ですか？",
            instructionEn: "What mainly breaks plastics down into microplastics?",
            options: [
              { text: "Sunlight and ocean waves", isCorrect: true, explanationJa: "「sunlight and ocean waves break these plastics down...」と書かれています。", explanationEn: "The text states 'sunlight and ocean waves break these plastics down'." },
              { text: "Big fish and turtles", isCorrect: false, explanationJa: "動物が分解するわけではありません。", explanationEn: "Animals do not break them down." },
              { text: "Chemicals in the sand", isCorrect: false, explanationJa: "砂の化学物質についての言及はありません。", explanationEn: "Chemicals in the sand are not mentioned." }
            ]
          },
          {
            type: "select",
            instructionJa: "マイクロプラスチックを海から取り除く（掃除する）のは簡単ですか？",
            instructionEn: "Is it easy to clean up microplastics from the sea?",
            options: [
              { text: "Yes, it takes only a few days.", isCorrect: false, explanationJa: "数日で終わるとは書かれていません。", explanationEn: "It does not say it takes a few days." },
              { text: "No, it is almost impossible.", isCorrect: true, explanationJa: "「almost impossible to clean up completely」と記載されています。", explanationEn: "The text says it is 'almost impossible to clean up completely'." },
              { text: "Yes, if we use big nets.", isCorrect: false, explanationJa: "大きな網を使えば解決するとは書かれていません。", explanationEn: "Big nets are not mentioned as a solution." }
            ]
          },
          {
            type: "select",
            instructionJa: "毎年どれくらいの量のプラスチックが海に行き着きますか？",
            instructionEn: "How much plastic waste ends up in the sea every year?",
            options: [
              { text: "Hundreds of pounds", isCorrect: false, explanationJa: "数百ポンドではありません。", explanationEn: "Not hundreds of pounds." },
              { text: "Millions of tons", isCorrect: true, explanationJa: "「millions of tons of plastic waste」と明記されています。", explanationEn: "The text explicitly says 'millions of tons'." },
              { text: "A few tiny pieces", isCorrect: false, explanationJa: "「tiny pieces」は分解された後の話です。", explanationEn: "'Tiny pieces' refers to after they are broken down." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「最も深刻な脅威の1つ」という、最上級を含む名詞のカタマリ（補語）をなぞってください。",
            instructionEn: "Trace the noun block (complement) including the superlative, meaning 'one of the most serious threats'.",
            targetIndices: [3, 4, 5, 6, 7, 8, 9, 10, 11], 
            explanationJa: "one of the + 最上級 + 複数形名詞（〜の中で最も…なものの1つ）という重要構文です。",
            explanationEn: "'one of the + superlative + plural noun' is an important grammatical structure."
          },
          {
            type: "trace",
            instructionJa: "「何百万トンものプラスチックごみ」という、文の主語(S)のカタマリをなぞってください。",
            instructionEn: "Trace the subject (S) block meaning 'millions of tons of plastic waste'.",
            targetIndices: [14, 15, 16, 17, 18, 19], 
            explanationJa: "「millions of tons of (何百万トンもの〜)」という表現が主語を作っています。",
            explanationEn: "'millions of tons of' creates a large subject phrase."
          },
          {
            type: "trace",
            instructionJa: "「マイクロプラスチックと呼ばれる」という、過去分詞が名詞を後ろから修飾しているカタマリをなぞってください。",
            instructionEn: "Trace the past participle phrase modifying the noun from behind, meaning 'called microplastics'.",
            targetIndices: [38, 39], 
            explanationJa: "called microplastics が直前の tiny pieces を修飾し、「マイクロプラスチックと呼ばれる小さな破片」となります。",
            explanationEn: "'called microplastics' modifies the preceding noun 'tiny pieces'."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落のメインテーマ（プラスチック汚染の脅威）を宣言している最初の一文をなぞってください。",
            instructionEn: "Trace the first sentence that declares the main theme (the threat of plastic pollution).",
            targetIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 
            explanationJa: "プラスチック汚染が最も深刻な脅威の一つであるという主題を提示しています。",
            explanationEn: "This introduces the main theme that plastic pollution is a serious threat."
          },
          {
            type: "trace",
            instructionJa: "マイクロプラスチックがなぜ厄介なのか（結果）を述べている最後の一文をなぞってください。",
            instructionEn: "Trace the last sentence stating why microplastics are so troublesome (the result).",
            targetIndices: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 
            explanationJa: "掃除するのがほぼ不可能であるという、絶望的な結果を述べています。",
            explanationEn: "It states the desperate result that cleaning them up is almost impossible."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「汚染」を意味する名詞をタップしてください。",
            instructionEn: "Tap the noun that means 'the presence of harmful substances (pollution)'.",
            targetIndex: 1, 
            explanationJa: "pollution は環境問題のトピックで必須の「汚染」という意味の単語です。",
            explanationEn: "'Pollution' is an essential word for environmental topics."
          },
          {
            type: "trace",
            instructionJa: "「〜に終わる、行き着く」という意味の句動詞をなぞってください。",
            instructionEn: "Trace the phrasal verb meaning 'to finally be in a particular place or state'.",
            targetIndices: [20, 21], 
            explanationJa: "end up は「最終的に〜に行き着く」という意味で非常によく使われます。",
            explanationEn: "'End up' is a very common phrasal verb meaning to finally arrive at a state or place."
          },
          {
            type: "voice",
            instructionJa: "プラスチックが分解されるプロセスを説明した文を音読しましょう！",
            instructionEn: "Read aloud the sentence explaining the process of plastics breaking down!",
            targetSentence: "Over time, sunlight and ocean waves break these plastics down into tiny pieces called microplastics."
          }
        ]
      }
    },
    {
      p_id: 2,
      rawText: "This pollution heavily affects marine life and the food chain. Small fish accidentally swallow microplastics, thinking they are plankton. Then, larger fish eat those small fish. Eventually, these harmful chemicals can reach human plates when we eat seafood. The danger is not just for animals, but for us humans too.",
      tokens: ["This", "pollution", "heavily", "affects", "marine", "life", "and", "the", "food", "chain.", "Small", "fish", "accidentally", "swallow", "microplastics,", "thinking", "they", "are", "plankton.", "Then,", "larger", "fish", "eat", "those", "small", "fish.", "Eventually,", "these", "harmful", "chemicals", "can", "reach", "human", "plates", "when", "we", "eat", "seafood.", "The", "danger", "is", "not", "just", "for", "animals,", "but", "for", "us", "humans", "too."],
      translation: "この汚染は海洋生物と食物連鎖に大きな影響を与えます。小魚はマイクロプラスチックをプランクトンだと思って誤って飲み込んでしまいます。その後、大きな魚がその小魚を食べます。最終的に、私たちがシーフードを食べる時に、これらの有害な化学物質が人間の皿に到達する可能性があります。この危険は動物だけでなく、私たち人間にも及んでいるのです。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "小魚はなぜマイクロプラスチックを飲み込んでしまうのですか？",
            instructionEn: "Why do small fish swallow microplastics?",
            options: [
              { text: "They think they are plankton.", isCorrect: true, explanationJa: "「thinking they are plankton（プランクトンだと思って）」と書かれています。", explanationEn: "The text explicitly says 'thinking they are plankton'." },
              { text: "They are forced by larger fish.", isCorrect: false, explanationJa: "大きな魚に強制されているわけではありません。", explanationEn: "They are not forced by larger fish." },
              { text: "They need plastic to grow.", isCorrect: false, explanationJa: "成長のためにプラスチックが必要なわけではありません。", explanationEn: "They don't need plastic to grow." }
            ]
          },
          {
            type: "select",
            instructionJa: "この段落によると、プラスチック汚染の最終的な被害者は誰ですか？",
            instructionEn: "According to this paragraph, who can be the final victims of plastic pollution?",
            options: [
              { text: "Only the small fish.", isCorrect: false, explanationJa: "小魚だけではありません。", explanationEn: "Not only small fish." },
              { text: "Humans, when they eat seafood.", isCorrect: true, explanationJa: "食物連鎖を通じて「人間の皿に到達する（reach human plates）」と書かれています。", explanationEn: "It mentions harmful chemicals can reach human plates." },
              { text: "Only the ocean waves.", isCorrect: false, explanationJa: "波は被害者ではありません。", explanationEn: "Ocean waves are not victims." }
            ]
          },
          {
            type: "select",
            instructionJa: "この汚染は何に対して「大きな影響（heavily affects）」を与えますか？",
            instructionEn: "What does this pollution heavily affect?",
            options: [
              { text: "Marine life and the food chain", isCorrect: true, explanationJa: "「heavily affects marine life and the food chain.」と明記されています。", explanationEn: "The text states it affects marine life and the food chain." },
              { text: "Only big ships", isCorrect: false, explanationJa: "船についての記載はありません。", explanationEn: "Ships are not mentioned." },
              { text: "Only the color of the ocean", isCorrect: false, explanationJa: "海の色についての言及はありません。", explanationEn: "The color of the ocean is not mentioned." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「それらがプランクトンだと思って」という、理由や付帯状況を表す分詞構文（現在分詞のカタマリ）をなぞってください。",
            instructionEn: "Trace the participle phrase starting with 'thinking' that expresses the reason or accompanying circumstances.",
            targetIndices: [15, 16, 17, 18], 
            explanationJa: "thinking... という現在分詞が、小魚がプラスチックを飲み込んでしまう理由を補足説明しています。",
            explanationEn: "The present participle 'thinking' adds supplementary information explaining why the fish swallow it."
          },
          {
            type: "trace",
            instructionJa: "「私たちがシーフードを食べるとき」という、時を表す副詞節のカタマリをなぞってください。",
            instructionEn: "Trace the adverbial clause of time meaning 'when we eat seafood'.",
            targetIndices: [34, 35, 36, 37], 
            explanationJa: "When が導く副詞節が、化学物質が人間の皿に届くタイミングを説明しています。",
            explanationEn: "The 'When' clause explains the timing of when chemicals reach human plates."
          },
          {
            type: "trace",
            instructionJa: "「動物たちにだけでなく、私たち人間にも」という、対比（not just A but B）を表すカタマリをなぞってください。",
            instructionEn: "Trace the phrase showing contrast meaning 'not just for animals, but for us humans too'.",
            targetIndices: [41, 42, 43, 44, 45, 46, 47, 48, 49], 
            explanationJa: "not just A but B (AだけでなくBも) という構文で対象の広がりを強調しています。",
            explanationEn: "'not just A but B' emphasizes that the scope includes humans as well."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落の主題（海洋生物と食物連鎖への影響）を宣言している最初の一文をなぞってください。",
            instructionEn: "Trace the first sentence declaring the subject of this paragraph (effects on marine life and the food chain).",
            targetIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
            explanationJa: "汚染が海の生き物と食物連鎖に影響を与えるというトピックセンテンスです。",
            explanationEn: "This is the topic sentence stating that pollution affects marine life and the food chain."
          },
          {
            type: "trace",
            instructionJa: "プラスチックの危険性が誰にまで及ぶか（最終的な結論）をまとめている最後の一文をなぞってください。",
            instructionEn: "Trace the final sentence summarizing who the danger ultimately reaches.",
            targetIndices: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 
            explanationJa: "人間にも危険が及ぶという警告です。",
            explanationEn: "It warns that the danger reaches humans too."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「誤って、うっかり」という意味の副詞をタップしてください。",
            instructionEn: "Tap the adverb that means 'by chance or by mistake (accidentally)'.",
            targetIndex: 12, 
            explanationJa: "accidentally はわざとではなく「偶然に、誤って」という意味で、事故（accident）から派生した単語です。",
            explanationEn: "'Accidentally' means by mistake, derived from the word 'accident'."
          },
          {
            type: "tap",
            instructionJa: "「有害な」という意味の形容詞をタップしてください。",
            instructionEn: "Tap the adjective that means 'causing or likely to cause harm'.",
            targetIndex: 28, 
            explanationJa: "harmful は「有害な」という意味で、chemicals(化学物質)を修飾しています。",
            explanationEn: "'Harmful' means causing damage, modifying 'chemicals' here."
          },
          {
            type: "voice",
            instructionJa: "食物連鎖を通じて人間に到達する恐ろしさを音読しましょう！",
            instructionEn: "Read aloud the terrifying fact about the food chain reaching humans!",
            targetSentence: "Eventually, these harmful chemicals can reach human plates when we eat seafood."
          }
        ]
      }
    },
    {
      p_id: 3,
      rawText: "To solve this crisis, we need to reduce our reliance on single-use plastics. Bringing reusable bottles and eco-bags is a very good start. Furthermore, local communities must improve their recycling systems. Protecting the ocean requires everyone's conscious effort and immediate action.",
      tokens: ["To", "solve", "this", "crisis,", "we", "need", "to", "reduce", "our", "reliance", "on", "single-use", "plastics.", "Bringing", "reusable", "bottles", "and", "eco-bags", "is", "a", "very", "good", "start.", "Furthermore,", "local", "communities", "must", "improve", "their", "recycling", "systems.", "Protecting", "the", "ocean", "requires", "everyone's", "conscious", "effort", "and", "immediate", "action."],
      translation: "この危機を解決するために、私たちは使い捨てプラスチックへの依存を減らす必要があります。繰り返し使えるボトルやエコバッグを持参することはとても良いスタートです。さらに、地域社会はリサイクルシステムを改善しなければなりません。海を守るには、すべての人の意識的な努力と即時の行動が必要です。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "この危機を解決するための「良いスタート」として挙げられている行動は何ですか？",
            instructionEn: "What is mentioned as a 'good start' to solve this crisis?",
            options: [
              { text: "Bringing reusable bottles and eco-bags.", isCorrect: true, explanationJa: "「Bringing reusable bottles and eco-bags is a very good start.」と記載されています。", explanationEn: "The text directly suggests bringing reusable bottles and eco-bags." },
              { text: "Cleaning the entire ocean by yourself.", isCorrect: false, explanationJa: "海全体を一人で掃除するとは書かれていません。", explanationEn: "It does not say to clean the entire ocean by yourself." },
              { text: "Stopping the ocean waves.", isCorrect: false, explanationJa: "波を止めることは不可能ですし、解決策として挙げられていません。", explanationEn: "Stopping ocean waves is impossible and not mentioned." }
            ]
          },
          {
            type: "select",
            instructionJa: "海を守るために最終的に必要だと筆者が述べていることは何ですか？",
            instructionEn: "What does the author state is ultimately required to protect the ocean?",
            options: [
              { text: "Everyone's conscious effort and immediate action.", isCorrect: true, explanationJa: "「Protecting the ocean requires everyone's conscious effort and immediate action.」と最後の文にあります。", explanationEn: "The last sentence explicitly states this." },
              { text: "Only the government's money.", isCorrect: false, explanationJa: "政府のお金だけが必要だとは書かれていません。", explanationEn: "It does not say only the government's money is needed." },
              { text: "More single-use plastics.", isCorrect: false, explanationJa: "使い捨てプラスチックは減らすべきもの（reduce）です。", explanationEn: "Single-use plastics should be reduced, not increased." }
            ]
          },
          {
            type: "select",
            instructionJa: "地域社会（local communities）は何を改善しなければなりませんか？",
            instructionEn: "What must local communities improve?",
            options: [
              { text: "Their recycling systems", isCorrect: true, explanationJa: "「local communities must improve their recycling systems.」と明記されています。", explanationEn: "The text says they must improve their recycling systems." },
              { text: "Their fishing boats", isCorrect: false, explanationJa: "漁船については書かれていません。", explanationEn: "Fishing boats are not mentioned." },
              { text: "Their school buildings", isCorrect: false, explanationJa: "学校の建物ではありません。", explanationEn: "School buildings are not mentioned." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「この危機を解決するために」という、目的を表す副詞的用法の不定詞のカタマリをなぞってください。",
            instructionEn: "Trace the infinitive phrase of purpose meaning 'To solve this crisis'.",
            targetIndices: [0, 1, 2, 3], 
            explanationJa: "To + 動詞の原形で文を始め、私たちが行動を変える「目的」を提示しています。",
            explanationEn: "Starting a sentence with an infinitive phrase sets up the 'purpose' of the action."
          },
          {
            type: "trace",
            instructionJa: "「繰り返し使えるボトルやエコバッグを持参すること」という、文の主語(S)になっている動名詞のカタマリをなぞってください。",
            instructionEn: "Trace the gerund phrase acting as the subject (S), meaning 'Bringing reusable bottles and eco-bags'.",
            targetIndices: [13, 14, 15, 16, 17], 
            explanationJa: "Bringing（持参すること）という動名詞が、文の主語の大きなカタマリを作っています。",
            explanationEn: "The gerund 'Bringing' forms a large phrase acting as the subject."
          },
          {
            type: "trace",
            instructionJa: "「海を守ること」という、文の主語(S)になっている動名詞のカタマリをなぞってください。",
            instructionEn: "Trace the gerund phrase acting as the subject (S), meaning 'Protecting the ocean'.",
            targetIndices: [31, 32, 33], 
            explanationJa: "Protecting が動名詞として使われ、主語を作っています。",
            explanationEn: "'Protecting' acts as a gerund to form the subject."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落（結論）における、私たちが起こすべき「行動の変化（宣言）」を提示している最初の一文をなぞってください。",
            instructionEn: "Trace the first sentence that declares the 'change in action' we must take.",
            targetIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
            explanationJa: "使い捨てプラスチックへの依存を減らす必要がある、というこの段落の軸となる解決策です。",
            explanationEn: "This sets the theme for the paragraph: the solution is to reduce reliance on single-use plastics."
          },
          {
            type: "trace",
            instructionJa: "筆者からの「最も重要なメッセージ（全員の努力が必要）」を述べている最後の一文をなぞってください。",
            instructionEn: "Trace the last sentence that states the author's 'most important message'.",
            targetIndices: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 
            explanationJa: "海を守るには全員の意識的な努力が必要だという、長文全体の力強い結論です。",
            explanationEn: "This is the powerful conclusion that protecting the ocean requires everyone's effort."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「使い捨ての」という意味の形容詞（ハイフンで繋がれた語）をタップしてください。",
            instructionEn: "Tap the hyphenated adjective that means 'designed to be used once and then thrown away'.",
            targetIndex: 11, 
            explanationJa: "single-use は「1回しか使わない＝使い捨ての」という意味で、プラスチック問題で頻出するB1レベルの重要語彙です。",
            explanationEn: "'Single-use' is a key B1-level term in environmental discussions."
          },
          {
            type: "tap",
            instructionJa: "「依存」という意味の名詞をタップしてください。",
            instructionEn: "Tap the noun that means 'dependence on or trust in someone or something'.",
            targetIndex: 9, 
            explanationJa: "reliance は「依存」という意味で、reliance on 〜（〜への依存）の形でよく使われます。",
            explanationEn: "'Reliance' means dependence, often used as 'reliance on'."
          },
          {
            type: "voice",
            instructionJa: "個人だけでなく「地域社会」が果たすべき役割についての文を音読しましょう！",
            instructionEn: "Read aloud the sentence about the role local communities must play!",
            targetSentence: "Furthermore, local communities must improve their recycling systems."
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
          { text: "We should eat more small fish to clean up the ocean.", isCorrect: false, explanationJa: "魚を食べて海を綺麗にするとは主張していません。", explanationEn: "The author doesn't suggest eating fish to clean the ocean." },
          { text: "Microplastics are dangerous to both marine life and humans, so we must reduce single-use plastics.", isCorrect: true, explanationJa: "前半の問題提起（生物と人間への危険）と、最終段落の解決策（使い捨ての削減）を完璧にカバーしています。", explanationEn: "This summarizes the problem (danger to life) and the solution (reduce single-use plastics)." },
          { text: "Sunlight is the biggest enemy of the ocean and we need to stop it.", isCorrect: false, explanationJa: "太陽光が海を壊しているわけではありません（太陽光はプラスチックを分解する要因の一つとして挙げられているだけです）。", explanationEn: "Sunlight is not the enemy; it just breaks down the plastic." }
        ]
      },
      {
        type: "select",
        instructionJa: "長文全体の内容と「一致しているもの」を1つ選んでください。",
        instructionEn: "Which of the following statements is TRUE based on the entire passage?",
        options: [
          { text: "Microplastics are very easy to remove from the ocean water.", isCorrect: false, explanationJa: "ほぼ不可能（almost impossible）と書かれているため誤りです。", explanationEn: "Incorrect. The text says it is almost impossible to clean them up." },
          { text: "Harmful chemicals from plastic can eventually be eaten by humans through seafood.", isCorrect: true, explanationJa: "食物連鎖を経て人間の皿に届く（reach human plates）という段落2の事実と完全に一致します。", explanationEn: "True. Chemicals can reach human plates when we eat seafood." },
          { text: "Local communities have already solved the recycling problem.", isCorrect: false, explanationJa: "リサイクルシステムを改善しなければならない（must improve）と書かれており、まだ解決していません。", explanationEn: "They must improve their systems; the problem is not yet solved." }
        ]
      },
      {
        type: "select",
        instructionJa: "この記事の「原因（Cause）」と「結果（Effect）」の関係として正しいものはどれですか？",
        instructionEn: "What is the correct Cause and Effect relationship in this article?",
        options: [
          { text: "Cause: People use reusable bags. Effect: Plastic pollution increases.", isCorrect: false, explanationJa: "エコバッグを使うことで汚染が増えるわけではありません。", explanationEn: "Using reusable bags does not increase pollution." },
          { text: "Cause: Plastics break down in the sea. Effect: Microplastics enter the food chain.", isCorrect: true, explanationJa: "プラスチックが分解される（原因）ことで、マイクロプラスチックが食物連鎖に入る（結果）という論理構成です。", explanationEn: "This matches the logic: breaking down leads to entering the food chain." },
          { text: "Cause: Small fish eat plankton. Effect: The ocean becomes clean.", isCorrect: false, explanationJa: "プランクトンを食べて海が綺麗になるという記述はありません。", explanationEn: "There is no mention of this making the ocean clean." }
        ]
      }
    ],
    structure: [
      {
        type: "voice",
        instructionJa: "最後に、長文全体を通して音読し、英語の構造を口から定着させましょう！",
        instructionEn: "Finally, read the whole passage aloud to master the structure!",
        targetSentence: "Plastic pollution is one of the most serious threats to our oceans. Every year, millions of tons of plastic waste end up in the sea. Over time, sunlight and ocean waves break these plastics down into tiny pieces called microplastics."
      },
      {
        type: "voice",
        instructionJa: "食物連鎖の恐ろしさを表す重要な一文を、副詞「Eventually(最終的に)」を意識して音読しましょう！",
        instructionEn: "Read this important sentence aloud, focusing on the adverb 'Eventually'!",
        targetSentence: "Eventually, these harmful chemicals can reach human plates when we eat seafood."
      },
      {
        type: "voice",
        instructionJa: "解決策を提案する一文を、「To solve this crisis（この危機を解決するために）」という目的のカタマリを意識して音読しましょう。",
        instructionEn: "Read the solution sentence aloud, focusing on the infinitive phrase of purpose.",
        targetSentence: "To solve this crisis, we need to reduce our reliance on single-use plastics."
      }
    ],
    summary: [
      {
        type: "select",
        instructionJa: "各段落の要旨を論理的に結合した、最も精度の高い「要約文」はどれですか？",
        instructionEn: "Which summary best combines the key points of all paragraphs logically?",
        options: [
          { text: "Plastic waste breaks down into microplastics. These tiny pieces enter the food chain, hurting marine life and humans. Therefore, everyone must take action to reduce plastic use.", isCorrect: true, explanationJa: "「マイクロプラスチックの発生」→「食物連鎖の被害」→「私たちの行動変化」という全段落の論理フローを完璧に繋いでいます。", explanationEn: "This perfectly connects the flow: creation of microplastics -> harm to food chain -> our required action." },
          { text: "Microplastics are used by small fish to grow. Humans are safe from this pollution because we don't drink ocean water.", isCorrect: false, explanationJa: "人間も被害を受ける（not just for animals, but for us too）と書かれているため真逆です。", explanationEn: "The text says the danger is for humans too, making this summary completely false." },
          { text: "To protect the ocean, we should only use plastic bottles once. The sun will naturally clean the sea for us.", isCorrect: false, explanationJa: "使い捨てを減らすべきであり、太陽はプラスチックを分解してマイクロプラスチックにする原因です。", explanationEn: "We should reduce single-use, and the sun breaks it down into microplastics." }
        ]
      }
    ],
    vocabulary: [
      {
        type: "voice",
        instructionJa: "B1レベルの重要語彙（pollution, reliance）を意識して、筆者の最終的な呼びかけを音読しましょう！",
        instructionEn: "Read the author's call to action aloud, focusing on B1 vocabulary!",
        targetSentence: "Protecting the ocean requires everyone's conscious effort and immediate action."
      },
      {
        type: "voice",
        instructionJa: "プラスチックが分解される様子を、前置詞「into」のイメージを意識しながら音読しましょう。",
        instructionEn: "Read aloud the sentence about plastic breaking down, focusing on the image of 'into'.",
        targetSentence: "Sunlight and ocean waves break these plastics down into tiny pieces called microplastics."
      },
      {
        type: "voice",
        instructionJa: "人間への被害を警告する文を、対比の「not just A but B」を強調して音読しましょう。",
        instructionEn: "Read the warning sentence aloud, emphasizing 'not just A but B'.",
        targetSentence: "The danger is not just for animals, but for us humans too."
      }
    ]
  }
};