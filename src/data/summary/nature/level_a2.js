export const nature_L1 = {
  id: "nat-l1-a2",
  themeId: "nature",
  level: "Level 1 (A2 - Basic)",
  wordCount: 134,
  title: "The Danger of Ocean Plastic",
  theme: "自然・環境",
  
  paragraphs: [
    {
      p_id: 1,
      rawText: "The ocean is very big and beautiful. But today, it has a big problem. People use a lot of plastic every day. Much of this plastic goes into the sea. This is very bad for the water and animals.",
      tokens: ["The", "ocean", "is", "very", "big", "and", "beautiful.", "But", "today,", "it", "has", "a", "big", "problem.", "People", "use", "a", "lot", "of", "plastic", "every", "day.", "Much", "of", "this", "plastic", "goes", "into", "the", "sea.", "This", "is", "very", "bad", "for", "the", "water", "and", "animals."],
      translation: "海はとても大きくて美しいです。しかし今日、海には大きな問題があります。人々は毎日たくさんのプラスチックを使います。このプラスチックの多くが海に入ります。これは水と動物にとってとても悪いことです。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "第一段落によると、現在の海が抱えている「大きな問題」の原因は何ですか？",
            instructionEn: "According to the first paragraph, what is the cause of the big problem in the ocean?",
            options: [
              { text: "The ocean is too big.", isCorrect: false, explanationJa: "海が大きいことは問題ではありません。", explanationEn: "The ocean being big is not the problem." },
              { text: "A lot of plastic goes into the sea.", isCorrect: true, explanationJa: "「Much of this plastic goes into the sea.」と述べられています。", explanationEn: "The text states that much of this plastic goes into the sea." },
              { text: "People drink too much water.", isCorrect: false, explanationJa: "人々が水を飲みすぎるという記述はありません。", explanationEn: "There is no mention of people drinking too much water." }
            ]
          },
          {
            type: "select",
            instructionJa: "人々はどれくらいの頻度でプラスチックを使っていますか？",
            instructionEn: "How often do people use plastic?",
            options: [
              { text: "Only in summer.", isCorrect: false, explanationJa: "夏だけとは書かれていません。", explanationEn: "It doesn't say only in summer." },
              { text: "Every day.", isCorrect: true, explanationJa: "「People use a lot of plastic every day.」と書かれています。", explanationEn: "The text says 'every day'." },
              { text: "Once a week.", isCorrect: false, explanationJa: "週に一度ではありません。", explanationEn: "It is not once a week." }
            ]
          },
          {
            type: "select",
            instructionJa: "プラスチックが海に入ることは、何に対して「とても悪い」と言われていますか？",
            instructionEn: "What is plastic going into the sea 'very bad' for?",
            options: [
              { text: "For the water and animals.", isCorrect: true, explanationJa: "最後の文に「bad for the water and animals」と明記されています。", explanationEn: "The last sentence states it is bad for the water and animals." },
              { text: "For the big ships.", isCorrect: false, explanationJa: "大きな船については言及されていません。", explanationEn: "Big ships are not mentioned." },
              { text: "For the plastic makers.", isCorrect: false, explanationJa: "プラスチック製造者については書かれていません。", explanationEn: "Plastic makers are not mentioned." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「しかし今日、それ（海）には大きな問題があります」という文の、主語(S)・動詞(V)・目的語(O)のカタマリを全てなぞりましょう。",
            instructionEn: "Trace the Subject (S), Verb (V), and Object (O) in the sentence meaning 'But today, it has a big problem.'",
            targetIndices: [9, 10, 11, 12, 13], 
            explanationJa: "主語は「it」、動詞は「has」、目的語は「a big problem」です。",
            explanationEn: "S is 'it', V is 'has', and O is 'a big problem'."
          },
          {
            type: "trace",
            instructionJa: "「人々は使う」という、文の核となる主語(S)と動詞(V)をなぞってください。",
            instructionEn: "Trace the core Subject (S) and Verb (V) meaning 'People use'.",
            targetIndices: [14, 15], 
            explanationJa: "People(人々が) が主語(S)で、use(使う) が動詞(V)です。",
            explanationEn: "'People' is the subject and 'use' is the verb."
          },
          {
            type: "trace",
            instructionJa: "「海の中へ」という場所・方向を表す前置詞のカタマリ（M）をなぞってください。",
            instructionEn: "Trace the prepositional phrase showing direction, meaning 'into the sea'.",
            targetIndices: [27, 28, 29], 
            explanationJa: "into は「〜の中へ」という前置詞で、後ろの名詞 the sea とセットになります。",
            explanationEn: "'into' is a preposition showing direction towards the inside of something."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落のメインアイデア（プラスチック問題の核心）を述べている一文をなぞってください。",
            instructionEn: "Trace the sentence that states the main idea (the core of the plastic problem) of this paragraph.",
            targetIndices: [22, 23, 24, 25, 26, 27, 28, 29], 
            explanationJa: "「プラスチックの多くが海に入る」という事実が、すべての問題の始まりです。",
            explanationEn: "The fact that much plastic goes into the sea is the start of the problem."
          },
          {
            type: "trace",
            instructionJa: "海の「現在のポジティブな状況（美しさ）」を端的に表している最初の一文をなぞってください。",
            instructionEn: "Trace the first sentence that shows the 'positive current situation' of the ocean.",
            targetIndices: [0, 1, 2, 3, 4, 5, 6], 
            explanationJa: "大きくて美しい、という現状の導入文です。",
            explanationEn: "This is the introductory sentence showing its vastness and beauty."
          }
        ],
        vocabulary: [
          {
            type: "trace",
            instructionJa: "「たくさんの〜」という意味の3語の熟語をなぞってください。",
            instructionEn: "Trace the three-word phrase that means 'many or a large amount of'.",
            targetIndices: [16, 17, 18], 
            explanationJa: "a lot of は「たくさんの」という意味の超重要熟語です。",
            explanationEn: "'a lot of' is a very common phrase meaning a large quantity."
          },
          {
            type: "tap",
            instructionJa: "「問題」という意味の単語をタップしてください。",
            instructionEn: "Tap the word that means 'a matter or situation regarded as unwelcome or harmful'.",
            targetIndex: 13, 
            explanationJa: "problem は「問題」という意味になります。",
            explanationEn: "'Problem' means an issue or difficulty."
          },
          {
            type: "voice",
            instructionJa: "プラスチックが大量に消費されている事実を音読しましょう！",
            instructionEn: "Read aloud the fact about mass plastic consumption!",
            targetSentence: "People use a lot of plastic every day."
          }
        ]
      }
    },
    {
      p_id: 2,
      rawText: "Many sea animals are in danger. Turtles and fish often eat the plastic. They think it is food. When they eat it, they get sick or die. Plastic rings can also hurt birds.",
      tokens: ["Many", "sea", "animals", "are", "in", "danger.", "Turtles", "and", "fish", "often", "eat", "the", "plastic.", "They", "think", "it", "is", "food.", "When", "they", "eat", "it,", "they", "get", "sick", "or", "die.", "Plastic", "rings", "can", "also", "hurt", "birds."],
      translation: "多くの海の動物が危険にさらされています。カメや魚はよくプラスチックを食べます。彼らはそれを食べ物だと思います。それを食べると、彼らは病気になるか死んでしまいます。プラスチックの輪は鳥を傷つけることもあります。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "なぜカメや魚はプラスチックを食べてしまうのですか？",
            instructionEn: "Why do turtles and fish eat the plastic?",
            options: [
              { text: "Because they are angry.", isCorrect: false, explanationJa: "怒っているからではありません。", explanationEn: "They are not angry." },
              { text: "Because they think it is food.", isCorrect: true, explanationJa: "「They think it is food.（彼らはそれを食べ物だと思う）」と書かれています。", explanationEn: "The text explicitly says 'They think it is food.'" },
              { text: "Because it tastes good.", isCorrect: false, explanationJa: "美味しいからとは書かれていません。", explanationEn: "It does not say it tastes good." }
            ]
          },
          {
            type: "select",
            instructionJa: "プラスチックの「輪（rings）」はどの動物を傷つけると書かれていますか？",
            instructionEn: "Which animals can be hurt by plastic rings?",
            options: [
              { text: "Turtles", isCorrect: false, explanationJa: "カメはプラスチックを食べてしまいますが、輪で傷つく例としては別の動物が挙げられています。", explanationEn: "Turtles are mentioned as eating plastic, not specifically hurt by rings here." },
              { text: "Birds", isCorrect: true, explanationJa: "「Plastic rings can also hurt birds.」と書かれています。", explanationEn: "The text says 'Plastic rings can also hurt birds.'" },
              { text: "Cats", isCorrect: false, explanationJa: "猫についての言及はありません。", explanationEn: "Cats are not mentioned." }
            ]
          },
          {
            type: "select",
            instructionJa: "動物がプラスチックを食べた後、どうなってしまいますか？",
            instructionEn: "What happens to the animals after they eat plastic?",
            options: [
              { text: "They get sick or die.", isCorrect: true, explanationJa: "「they get sick or die.」と明記されています。", explanationEn: "The text states they get sick or die." },
              { text: "They become stronger.", isCorrect: false, explanationJa: "強くなるわけではありません。", explanationEn: "They do not become stronger." },
              { text: "They swim faster.", isCorrect: false, explanationJa: "速く泳げるようになるわけではありません。", explanationEn: "They do not swim faster." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「彼らがそれを食べるとき」という、時を表す接続詞から始まる副詞節（M）をなぞってください。",
            instructionEn: "Trace the adverbial clause of time starting with a conjunction meaning 'When they eat it'.",
            targetIndices: [18, 19, 20, 21], 
            explanationJa: "When からコンマまでのカタマリが、主節の時を説明する副詞節です。",
            explanationEn: "The phrase starting with 'When' explains the timing."
          },
          {
            type: "trace",
            instructionJa: "「プラスチックの輪は鳥を傷つけることができる」の、動詞(V)と目的語(O)のカタマリをなぞってください。",
            instructionEn: "Trace the verb (V) and the object (O) in the sentence meaning 'Plastic rings can also hurt birds.'",
            targetIndices: [29, 30, 31, 32], 
            explanationJa: "can also hurt が動詞のカタマリで、birds が目的語です。",
            explanationEn: "'can also hurt' is the verb phrase and 'birds' is the object."
          },
          {
            type: "trace",
            instructionJa: "「彼らは病気になる」という、主語(S)と動詞(V)と補語(C)のカタマリをなぞってください。",
            instructionEn: "Trace the Subject(S), Verb(V), and Complement(C) meaning 'they get sick'.",
            targetIndices: [22, 23, 24], 
            explanationJa: "they(彼らが) が S、get(〜になる) が V、sick(病気の) が C です。",
            explanationEn: "'they' is S, 'get' is V, and 'sick' is C."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落で挙げられている「海での最初の被害」を一言で表しているトピックセンテンスをなぞってください。",
            instructionEn: "Trace the topic sentence that states the 'first damage in the sea' in this paragraph.",
            targetIndices: [0, 1, 2, 3, 4, 5], 
            explanationJa: "海の動物たちが危険にさらされている、というこの段落の主題です。",
            explanationEn: "This is the topic sentence stating that marine animals are in danger."
          },
          {
            type: "trace",
            instructionJa: "プラスチックを食べた動物に「何が起こるか（被害）」をまとめている一文をなぞってください。",
            instructionEn: "Trace the sentence that summarizes 'what happens (the damage)' to the animals that eat plastic.",
            targetIndices: [18, 19, 20, 21, 22, 23, 24, 25, 26], 
            explanationJa: "病気になるか死んでしまうという悲しい結果を述べています。",
            explanationEn: "This sentence concludes the sad result: they get sick or die."
          }
        ],
        vocabulary: [
          {
            type: "tap",
            instructionJa: "「しばしば、よく」という意味の副詞をタップしてください。",
            instructionEn: "Tap the adverb that means 'many times or frequently'.",
            targetIndex: 9, 
            explanationJa: "often は「よく、しばしば」という頻度を表す重要語彙です。",
            explanationEn: "'Often' is a crucial vocabulary word meaning frequently."
          },
          {
            type: "trace",
            instructionJa: "「危険な状態にある」という意味の3語の熟語をなぞってください。",
            instructionEn: "Trace the three-word phrase meaning 'at risk or in a dangerous situation'.",
            targetIndices: [3, 4, 5], 
            explanationJa: "are in danger で「危険にさらされている」という状態を表します。",
            explanationEn: "'Are in danger' expresses the state of being at risk."
          },
          {
            type: "voice",
            instructionJa: "動物の勘違いを説明している文を音読しましょう。",
            instructionEn: "Read aloud the sentence explaining the animals' misunderstanding.",
            targetSentence: "They think it is food."
          }
        ]
      }
    },
    {
      p_id: 3,
      rawText: "How does the plastic get there? We throw away things like water bottles and plastic bags. The wind blows them into rivers. Then, the rivers carry the plastic to the ocean.",
      tokens: ["How", "does", "the", "plastic", "get", "there?", "We", "throw", "away", "things", "like", "water", "bottles", "and", "plastic", "bags.", "The", "wind", "blows", "them", "into", "rivers.", "Then,", "the", "rivers", "carry", "the", "plastic", "to", "the", "ocean."],
      translation: "どのようにしてプラスチックはそこ（海）へ行くのでしょうか？私たちはペットボトルやビニール袋のようなものを捨てます。風がそれらを川へと吹き飛ばします。そして、川がプラスチックを海へと運びます。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "人々が捨てるものとして、本文で例に挙げられているのはどれですか？",
            instructionEn: "What items are mentioned as examples of things people throw away?",
            options: [
              { text: "Old shoes and hats", isCorrect: false, explanationJa: "古い靴や帽子については言及されていません。", explanationEn: "Old shoes and hats are not mentioned." },
              { text: "Water bottles and plastic bags", isCorrect: true, explanationJa: "「things like water bottles and plastic bags」と明記されています。", explanationEn: "The text states 'water bottles and plastic bags'." },
              { text: "Broken computers", isCorrect: false, explanationJa: "壊れたコンピュータについては書かれていません。", explanationEn: "Broken computers are not mentioned." }
            ]
          },
          {
            type: "select",
            instructionJa: "捨てられたプラスチックを「川の中へ」吹き飛ばすのは何ですか？",
            instructionEn: "What blows the thrown plastic into the rivers?",
            options: [
              { text: "The wind", isCorrect: true, explanationJa: "「The wind blows them into rivers.」と書かれています。", explanationEn: "The text says 'The wind blows them'." },
              { text: "The birds", isCorrect: false, explanationJa: "鳥が吹き飛ばすわけではありません。", explanationEn: "Birds do not blow them." },
              { text: "The rain", isCorrect: false, explanationJa: "雨ではなく風です。", explanationEn: "It is the wind, not the rain." }
            ]
          },
          {
            type: "select",
            instructionJa: "プラスチックを最終的に海まで運ぶ役割をしているのは何ですか？",
            instructionEn: "What carries the plastic to the ocean in the end?",
            options: [
              { text: "The rivers", isCorrect: true, explanationJa: "「the rivers carry the plastic to the ocean.」と書かれています。", explanationEn: "The text states the rivers carry them." },
              { text: "The cars", isCorrect: false, explanationJa: "車ではありません。", explanationEn: "It is not the cars." },
              { text: "The ships", isCorrect: false, explanationJa: "船ではありません。", explanationEn: "It is not the ships." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「私たちは投げ捨てる」という、主語(S)と群動詞(V)のカタマリをなぞってください。",
            instructionEn: "Trace the Subject (S) and phrasal Verb (V) meaning 'We throw away'.",
            targetIndices: [6, 7, 8], 
            explanationJa: "We が S で、throw away（〜を投げ捨てる）が群動詞の V です。",
            explanationEn: "'We' is S, and 'throw away' is the phrasal verb V."
          },
          {
            type: "trace",
            instructionJa: "「海へ」という、方向や到達点を表す前置詞のカタマリ（M）をなぞってください。",
            instructionEn: "Trace the prepositional phrase meaning 'to the ocean'.",
            targetIndices: [28, 29, 30], 
            explanationJa: "to は到達点を表す前置詞で、後ろの the ocean とセットになります。",
            explanationEn: "'to' is a preposition showing destination."
          },
          {
            type: "trace",
            instructionJa: "「川の中へ」という場所の移動を表す前置詞のカタマリ（M）をなぞってください。",
            instructionEn: "Trace the prepositional phrase meaning 'into rivers'.",
            targetIndices: [20, 21], 
            explanationJa: "into(〜の中へ) と rivers がセットになっています。",
            explanationEn: "'into rivers' shows the movement into a location."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落のトピック（読者への問いかけ）となっている最初の一文をなぞってください。",
            instructionEn: "Trace the first sentence that poses the topic question to the reader.",
            targetIndices: [0, 1, 2, 3, 4, 5], 
            explanationJa: "プラスチックがどうやって海に行くのか？という問いから始まっています。",
            explanationEn: "It starts with the question of how plastic gets to the ocean."
          },
          {
            type: "trace",
            instructionJa: "プラスチックが海に到達する「最終ステップ」を説明している文をなぞってください。",
            instructionEn: "Trace the sentence explaining the 'final step' of plastic reaching the ocean.",
            targetIndices: [22, 23, 24, 25, 26, 27, 28, 29, 30], 
            explanationJa: "川が海へと運び込む、という結末の文です。",
            explanationEn: "This sentence explains the final journey via rivers to the ocean."
          }
        ],
        vocabulary: [
          {
            type: "trace",
            instructionJa: "「〜を捨てる」という意味の2語の句動詞をなぞってください。",
            instructionEn: "Trace the two-word phrasal verb meaning 'to get rid of something'.",
            targetIndices: [7, 8], 
            explanationJa: "throw away は「〜を投げ捨てる」という意味の重要表現です。",
            explanationEn: "'throw away' is an important phrasal verb for discarding things."
          },
          {
            type: "tap",
            instructionJa: "「風」という意味の名詞をタップしてください。",
            instructionEn: "Tap the noun that means 'moving air'.",
            targetIndex: 17, 
            explanationJa: "wind は「風」を意味する基本的な自然の語彙です。",
            explanationEn: "'Wind' is a basic nature vocabulary word."
          },
          {
            type: "voice",
            instructionJa: "風がプラスチックを川に吹き飛ばす描写を音読しましょう！",
            instructionEn: "Read aloud the description of the wind blowing plastic into rivers!",
            targetSentence: "The wind blows them into rivers."
          }
        ]
      }
    },
    {
      p_id: 4,
      rawText: "We must help the ocean now. We can use paper bags instead of plastic bags. We can also pick up trash on the beach. Small actions can save many sea animals.",
      tokens: ["We", "must", "help", "the", "ocean", "now.", "We", "can", "use", "paper", "bags", "instead", "of", "plastic", "bags.", "We", "can", "also", "pick", "up", "trash", "on", "the", "beach.", "Small", "actions", "can", "save", "many", "sea", "animals."],
      translation: "私たちは今、海を助けなければなりません。プラスチックの袋の代わりに紙の袋を使うことができます。また、ビーチでゴミを拾うこともできます。小さな行動が多くの海の動物を救うことができます。",
      
      tasks: {
        comprehension: [
          {
            type: "select",
            instructionJa: "海を助けるために、私たちはプラスチックの袋の代わりに何を使うべきですか？",
            instructionEn: "What should we use instead of plastic bags to help the ocean?",
            options: [
              { text: "Paper bags", isCorrect: true, explanationJa: "「use paper bags instead of plastic bags」と書かれています。", explanationEn: "The text says we can use paper bags." },
              { text: "Plastic bottles", isCorrect: false, explanationJa: "ペットボトルを使うべきとは書かれていません。", explanationEn: "It does not suggest using plastic bottles." },
              { text: "New bags", isCorrect: false, explanationJa: "「新しい袋」ではなく「紙の袋」が正解です。", explanationEn: "It specifically mentions 'paper bags'." }
            ]
          },
          {
            type: "select",
            instructionJa: "ビーチで私たちにできるもう一つのアクションは何ですか？",
            instructionEn: "What is another action we can do on the beach?",
            options: [
              { text: "Pick up trash", isCorrect: true, explanationJa: "「pick up trash on the beach.」と書かれています。", explanationEn: "The text says we can pick up trash." },
              { text: "Build a sandcastle", isCorrect: false, explanationJa: "砂の城を作るとは書かれていません。", explanationEn: "Building sandcastles is not mentioned." },
              { text: "Swim fast", isCorrect: false, explanationJa: "速く泳ぐことではありません。", explanationEn: "Swimming fast is not mentioned." }
            ]
          },
          {
            type: "select",
            instructionJa: "筆者は「小さな行動」がどうなると言っていますか？",
            instructionEn: "What does the author say 'small actions' can do?",
            options: [
              { text: "They can save many sea animals.", isCorrect: true, explanationJa: "「Small actions can save many sea animals.」と最後の文に書かれています。", explanationEn: "The final sentence states 'Small actions can save many sea animals'." },
              { text: "They can make plastic clean.", isCorrect: false, explanationJa: "プラスチックを綺麗にするとは書かれていません。", explanationEn: "It doesn't say they make plastic clean." },
              { text: "They can build new beaches.", isCorrect: false, explanationJa: "新しいビーチを作るとは書かれていません。", explanationEn: "It doesn't say they build new beaches." }
            ]
          }
        ],
        structure: [
          {
            type: "trace",
            instructionJa: "「プラスチックの袋の代わりに」という、対比を表す前置詞のカタマリをなぞってください。",
            instructionEn: "Trace the prepositional phrase meaning 'instead of plastic bags'.",
            targetIndices: [11, 12, 13, 14], 
            explanationJa: "instead of 〜 で「〜の代わりに」という意味になり、後ろの名詞とセットで副詞句を作ります。",
            explanationEn: "'Instead of' is a preposition meaning in place of something else."
          },
          {
            type: "trace",
            instructionJa: "「救うことができる」という意味の、助動詞＋動詞の原形のカタマリをなぞってください。",
            instructionEn: "Trace the modal verb and base verb meaning 'can save'.",
            targetIndices: [26, 27], 
            explanationJa: "助動詞 can(〜できる) と動詞 save(救う) の組み合わせです。",
            explanationEn: "This is the modal verb 'can' combined with the base verb 'save'."
          },
          {
            type: "trace",
            instructionJa: "「ビーチで」という場所を表す前置詞のカタマリ（M）をなぞってください。",
            instructionEn: "Trace the prepositional phrase showing location meaning 'on the beach'.",
            targetIndices: [21, 22, 23], 
            explanationJa: "on は表面での接触を表す前置詞で、the beach とセットになります。",
            explanationEn: "'on the beach' shows the specific location."
          }
        ],
        summary: [
          {
            type: "trace",
            instructionJa: "この段落（結論）における、筆者からの「最も重要なメッセージ（希望）」を述べている最後の一文をなぞってください。",
            instructionEn: "Trace the last sentence that states the author's 'most important message of hope'.",
            targetIndices: [24, 25, 26, 27, 28, 29, 30], 
            explanationJa: "小さな行動が動物を救うという、この長文全体の最終的な結論メッセージです。",
            explanationEn: "This final sentence is the ultimate message of hope and conclusion for the passage."
          },
          {
            type: "trace",
            instructionJa: "私たちが起こすべき「行動の変化（宣言）」を提示している最初の一文をなぞってください。",
            instructionEn: "Trace the first sentence that declares the 'action' we must take.",
            targetIndices: [0, 1, 2, 3, 4, 5], 
            explanationJa: "「海を助けなければならない」という、この段落の軸となる宣言です。",
            explanationEn: "This sets the theme for the paragraph: we must help the ocean."
          }
        ],
        vocabulary: [
          {
            type: "trace",
            instructionJa: "「（ゴミなどを）拾い上げる」という意味の2語の群動詞をなぞってください。",
            instructionEn: "Trace the two-word phrasal verb meaning 'to lift something from the ground'.",
            targetIndices: [18, 19], 
            explanationJa: "pick up は「拾う」という意味の重要な句動詞です。",
            explanationEn: "'Pick up' is an important phrasal verb meaning to lift something."
          },
          {
            type: "tap",
            instructionJa: "「ゴミ」を意味する名詞をタップしてください。",
            instructionEn: "Tap the noun that means 'waste material or garbage'.",
            targetIndex: 20, 
            explanationJa: "trash は「ゴミ」を表す一般的な単語です。",
            explanationEn: "'Trash' is a common word for garbage or waste."
          },
          {
            type: "voice",
            instructionJa: "「〜の代わりに」という重要表現を含む解決策の文を音読しましょう！",
            instructionEn: "Read aloud the solution sentence containing the key phrase 'instead of'!",
            targetSentence: "We can use paper bags instead of plastic bags."
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
          { text: "How to Make Paper Bags", isCorrect: false, explanationJa: "紙袋の作り方についての文章ではありません。", explanationEn: "The passage is not about how to make paper bags." },
          { text: "The Danger of Ocean Plastic", isCorrect: true, explanationJa: "海に流れ込むプラスチックの危険性が全体のテーマです。", explanationEn: "The danger of plastic entering the sea is the main theme." },
          { text: "Why Fish Are Angry", isCorrect: false, explanationJa: "魚が怒っているという話ではありません。", explanationEn: "The author does not say fish are angry." }
        ]
      },
      {
        type: "select",
        instructionJa: "この長文を書いた筆者の主な目的は何ですか？",
        instructionEn: "What is the main purpose of the author?",
        options: [
          { text: "To teach how to swim with turtles.", isCorrect: false, explanationJa: "カメと泳ぐ方法を教えるのが目的ではありません。", explanationEn: "Teaching how to swim with turtles is not the purpose." },
          { text: "To warn about plastic hurting animals and ask us to help.", isCorrect: true, explanationJa: "プラスチックが動物を傷つけることを警告し、助けを求めることが目的です。", explanationEn: "The purpose is to warn about plastic hurting animals and ask for help." },
          { text: "To sell new paper bags.", isCorrect: false, explanationJa: "紙袋を売っているわけではありません。", explanationEn: "The author is not selling paper bags." }
        ]
      },
      {
        type: "select",
        instructionJa: "私たちが日常の「小さな行動」を変えることで、最終的に何が守られると主張されていますか？",
        instructionEn: "By changing our daily 'small actions', what is ultimately protected according to the author?",
        options: [
          { text: "Many sea animals", isCorrect: true, explanationJa: "小さな行動が「多くの海の動物」を救うと結論づけられています。", explanationEn: "The conclusion states that small actions can save many sea animals." },
          { text: "Plastic factories", isCorrect: false, explanationJa: "プラスチック工場を守るためではありません。", explanationEn: "It is not to protect plastic factories." },
          { text: "The wind", isCorrect: false, explanationJa: "風を守るためではありません。", explanationEn: "It is not to protect the wind." }
        ]
      }
    ],
    structure: [
      {
        type: "voice",
        instructionJa: "最後に、長文全体を通して音読し、英語の構造を口から定着させましょう！",
        instructionEn: "Finally, read the whole passage aloud to master the structure!",
        targetSentence: "The ocean is very big and beautiful. But today, it has a big problem. People use a lot of plastic every day. Much of this plastic goes into the sea."
      },
      {
        type: "voice",
        instructionJa: "動物たちの危機に関する事実を音読して、因果関係の文構造を定着させましょう。",
        instructionEn: "Read the facts about the danger to animals aloud to master the cause-and-effect structure.",
        targetSentence: "Turtles and fish often eat the plastic. They think it is food. When they eat it, they get sick or die."
      },
      {
        type: "voice",
        instructionJa: "ゴミが海へ流れるプロセスを音読して定着させましょう。",
        instructionEn: "Read the process of trash flowing into the sea aloud to master it.",
        targetSentence: "The wind blows them into rivers. Then, the rivers carry the plastic to the ocean."
      }
    ],
    summary: [
      {
        type: "select",
        instructionJa: "これまでのパラグラフごとの要点を踏まえ、長文全体の要約として最も適切なものを選んでください。",
        instructionEn: "Based on the main ideas of each paragraph, choose the best summary for the whole passage.",
        options: [
          { text: "Ocean plastic hurts animals, so we must use less plastic and pick up trash to save them.", isCorrect: true, explanationJa: "「プラスチックの被害」と「解決策（減らす、拾う）」という全段落の要旨が含まれています。", explanationEn: "This captures the main ideas from all paragraphs: damage and solutions." },
          { text: "Plastic is good because fish like to eat it. We should throw more plastic in the sea.", isCorrect: false, explanationJa: "筆者の主張と真逆の内容です。", explanationEn: "This is the exact opposite of what the author is arguing." },
          { text: "Paper bags are bad for the beach. Therefore, we should only use plastic.", isCorrect: false, explanationJa: "紙袋が悪いとは言っていません。プラスチックの代わりに使おうと言っています。", explanationEn: "The author doesn't say paper bags are bad, but rather to use them instead of plastic." }
        ]
      },
      {
        type: "select",
        instructionJa: "長文全体の内容と「一致している文」を1つ選んでください。",
        instructionEn: "Which statement is TRUE based on the whole text?",
        options: [
          { text: "Plastic helps sea animals grow bigger.", isCorrect: false, explanationJa: "プラスチックは動物を病気にさせたり死なせたりします。", explanationEn: "Plastic makes animals sick or die, it doesn't help them grow." },
          { text: "Plastic in the ocean is a big problem that hurts animals like turtles and birds.", isCorrect: true, explanationJa: "海の中のプラスチックがカメや鳥などの動物を傷つけているという本文の趣旨と一致します。", explanationEn: "This perfectly aligns with the text: plastic in the ocean hurts animals." },
          { text: "We cannot do anything to help the ocean.", isCorrect: false, explanationJa: "小さな行動で助けることができる（Small actions can save...）と書かれています。", explanationEn: "The text states that small actions can help." }
        ]
      },
      {
        type: "select",
        instructionJa: "この文章の「問題（Problem）」と「解決策（Solution）」の正しい組み合わせはどれですか？",
        instructionEn: "What is the correct combination of 'Problem' and 'Solution' in this text?",
        options: [
          { text: "Problem: Fish eat paper bags. Solution: Use plastic bags.", isCorrect: false, explanationJa: "魚が食べるのは紙ではなくプラスチックです。", explanationEn: "Fish eat plastic, not paper bags." },
          { text: "Problem: Plastic enters the sea and hurts animals. Solution: Use paper bags and pick up trash.", isCorrect: true, explanationJa: "本文全体の論理構成（問題提起と解決策）と完全に一致します。", explanationEn: "This perfectly matches the problem and solution presented in the text." },
          { text: "Problem: The ocean is too big. Solution: Drink more water.", isCorrect: false, explanationJa: "海が大きいことは問題として扱われていません。", explanationEn: "The ocean being big is not presented as a problem." }
        ]
      }
    ],
    vocabulary: [
      {
        type: "voice",
        instructionJa: "今回登場した重要語彙を含む文を音読して、文脈ごとの意味をインプットしましょう！",
        instructionEn: "Read the sentence aloud to input the meaning in context!",
        targetSentence: "We must help the ocean. We can use paper bags instead of plastic bags."
      },
      {
        type: "voice",
        instructionJa: "動物たちを救うための重要フレーズを音読して、表現を自分のものにしましょう！",
        instructionEn: "Read the key phrase for saving animals aloud to make it your own!",
        targetSentence: "We can also pick up trash on the beach. Small actions can save many sea animals."
      },
      {
        type: "voice",
        instructionJa: "原因を表す重要表現（throw away）を音読でマスターしましょう。",
        instructionEn: "Master the key expression for the cause (throw away) by reading aloud.",
        targetSentence: "We throw away things like water bottles and plastic bags."
      }
    ]
  }
};