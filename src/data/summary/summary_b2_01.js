export const summary_b2_01 = {
  id: "sum-b2-01",
  level: "B2",
  title: "The Invisible Threat of Microplastics",
  theme: "環境問題・科学",
  
  vocabulary: [
    { word: "invisible", meaning: "目に見えない", pos: "adj" },
    { word: "particle", meaning: "粒子", pos: "noun" },
    { word: "accumulate", meaning: "蓄積する", pos: "verb" },
    { word: "marine", meaning: "海の、海洋の", pos: "adj" },
    { word: "consequence", meaning: "結果、影響", pos: "noun" }
  ],

  paragraphs: [
    {
      p_id: 1,
      tokens: ["Plastic", "pollution", "is", "a", "well-known", "issue,", "but", "a", "more", "invisible", "threat", "is", "now", "alarming", "scientists:", "microplastics.", "These", "tiny", "plastic", "particles,", "often", "less", "than", "five", "millimeters", "long,", "are", "accumulating", "in", "our", "oceans.", "Most", "importantly,", "they", "are", "entering", "the", "food", "chain", "and", "threatening", "marine", "life", "with", "unknown", "long-term", "consequences."],
      translation: "プラスチック汚染はよく知られた問題ですが、さらに目に見えない脅威が現在科学者たちを警戒させています。それがマイクロプラスチックです。5ミリ以下のこれらの微小なプラスチック粒子は、私たちの海に蓄積しています。最も重要なことに、それらは食物連鎖に入り込み、未知の長期的な影響で海洋生物を脅かしています。",
      
      // 🎯 トレースミッション：要約の「核」をなぞる
      traceTask: {
        instruction: "この段落の最も重要な主張（マイクロプラスチックが引き起こしている最大の問題）をなぞってください。",
        // "they are entering the food chain and threatening marine life" (インデックス: 33〜42)
        targetIndices: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42], 
        // "entering the food chain" など一部だけなぞった場合の部分点判定
        partialIndices: [35, 36, 37, 38], 
        explanation: "'Most importantly'（最も重要なことに）という強烈なディスコースマーカーの直後が、この段落の最大のコアです。海に漂っていること自体よりも、「食物連鎖に入り込み、生物を脅かしている」という被害の実態が要約には不可欠です。"
      },

      paraphraseTask: {
        question: "抽出したコア部分「entering the food chain and threatening marine life」を要約文として最も自然に言い換えている表現はどれですか？",
        options: [
          { text: "making the ocean water dirty and cloudy", isCorrect: false, explanation: "水が汚くなることではなく、生物への直接的な被害が論点です。" },
          { text: "putting ocean ecosystems and animals in danger", isCorrect: true, explanation: "正解！ 'threatening marine life' を 'putting ocean ecosystems and animals in danger' と的確にパラフレーズしています。" },
          { text: "increasing the number of fish in the sea", isCorrect: false, explanation: "文意が完全に逆（魚が増える）になってしまっています。" }
        ]
      }
    },
    {
      p_id: 2,
      tokens: ["To", "solve", "this", "crisis,", "reducing", "single-use", "plastics", "is", "essential.", "[ 1 ],", "governments", "must", "implement", "stricter", "regulations", "on", "manufacturing", "processes", "that", "release", "these", "particles."],
      translation: "この危機を解決するためには、使い捨てプラスチックを減らすことが不可欠です。（ 1 ）、政府はこれらの粒子を放出する製造過程に対してより厳格な規制を実施しなければなりません。",
      
      fillInTask: {
        blankToken: "[ 1 ]",
        question: "空所 [ 1 ] に入る、文脈を正しくつなぐディスコースマーカーを選びなさい。",
        options: [
          { text: "However", isCorrect: false, explanation: "逆接ではありません。「プラスチック削減」と「政府の規制」はどちらも解決策として並立しています。" },
          { text: "Furthermore", isCorrect: true, explanation: "正解！「〜を減らすことが不可欠だ。さらに（Furthermore）、政府は規制を実施すべきだ」と、解決策を追加（順接）しています。" },
          { text: "For instance", isCorrect: false, explanation: "政府の規制は、使い捨てプラスチック削減の「具体例」ではありません。" }
        ]
      }
    }
  ],

  comprehensionTasks: [
    {
      question: "この長文全体が最も伝えたいMain Idea（主旨）はどれですか？",
      options: [
        { text: "Microplastics are a severe threat to marine ecosystems and require strict actions.", isCorrect: true, explanation: "第1段落の「脅威（問題）」と第2段落の「アクション（解決策）」を過不足なくまとめた完璧な要約です。" },
        { text: "Scientists have discovered a new species of marine life.", isCorrect: false, explanation: "新種の生物の発見については書かれていません。" },
        { text: "Plastic recycling is the only way to save the environment.", isCorrect: false, explanation: "リサイクル（recycling）については本文で直接言及されておらず、「唯一の方法」と言い切るのも不適切です。" }
      ]
    }
  ]
};