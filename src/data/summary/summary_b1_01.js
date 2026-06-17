export const summary_b1_01 = {
  id: "sum-b1-01",
  level: "B1",
  title: "The Hidden Cost of Fast Fashion",
  theme: "環境問題・社会",
  
  // 📖 1. ワンタップ辞書データ（長文中の単語をタップした時に表示）
  vocabulary: [
    { word: "transform", meaning: "〜を一変させる、変容させる", pos: "verb" },
    { word: "garment", meaning: "衣類", pos: "noun" },
    { word: "convenience", meaning: "便利さ", pos: "noun" },
    { word: "pollute", meaning: "〜を汚染する", pos: "verb" },
    { word: "ecosystem", meaning: "生態系", pos: "noun" }
  ],

  // 📝 2. パラグラフごとの読解＆要約ミッション
  paragraphs: [
    {
      p_id: 1,
      // 左画面に表示されるパラグラフ本文
      tokens: ["Fast", "fashion", "has", "completely", "transformed", "the", "clothing", "industry,", "offering", "trendy", "garments", "at", "low", "prices.", "However,", "this", "convenience", "comes", "with", "a", "hidden", "environmental", "cost."],
      translation: "ファストファッションは、流行の服を低価格で提供し、衣料品業界を一変させました。しかし、この便利さには隠れた環境への代償が伴います。",
      
      // ▶︎ ミッションA: コア抽出トレース（要約に欠かせない部分をなぞる）
      traceTask: {
        instruction: "この段落の「筆者の最大の主張（問題提起）」となっている部分をなぞってください。",
        targetIndices: [14, 15, 16, 17, 18, 19, 20, 21, 22], // "However, this convenience comes with a hidden environmental cost."
        partialIndices: [20, 21, 22], // "hidden environmental cost" だけなぞった場合は「惜しい！」で部分点
        explanation: "逆接の接続詞 'However' の後ろには、筆者の強い主張が来ます。ファストファッションの「安さ」ではなく「環境への悪影響」がこの文章のメインテーマです。"
      },

      // ▶︎ ミッションB: パラフレーズ（言い換え）問題
      paraphraseTask: {
        question: "抽出したコア部分「comes with a hidden environmental cost」を要約文として最も自然に言い換えている表現はどれですか？",
        options: [
          { 
            text: "causes severe damage to the environment", 
            isCorrect: true, 
            explanation: "正解！ 'cost'（代償）を 'damage'（ダメージ・被害）と言い換え、環境に悪影響を与えていることを明確に表現できています。" 
          },
          { 
            text: "makes environmental clothes more expensive", 
            isCorrect: false, 
            explanation: "不正解。 'cost' を「金銭的な値段」と直訳してしまっています。ここでの cost は「犠牲・代償」という比喩表現です。" 
          },
          { 
            text: "hides the true price of nature", 
            isCorrect: false, 
            explanation: "不正解。直訳的で不自然です。文脈上の「環境破壊」というコアな意味が伝わりません。" 
          }
        ]
      }
    },
    {
      p_id: 2,
      // 意図的に [ 1 ] という空所（ブランク）トークンを混ぜておく
      tokens: ["[ 1 ]", "the", "production", "process", "requires", "massive", "amounts", "of", "water", "and", "toxic", "chemicals.", "These", "harmful", "substances", "often", "pollute", "local", "rivers", "and", "harm", "ecosystems."],
      translation: "（ 1 ）、生産過程では大量の水と有毒な化学物質が必要です。これらの有害物質はしばしば地元の川を汚染し、生態系に害を及ぼします。",
      
      // ▶︎ ミッションC: 大学入試レベルの論理展開（空所補充）問題
      fillInTask: {
        blankToken: "[ 1 ]",
        question: "空所 [ 1 ] に入る、前の段落との論理関係を示す最も適切なディスコースマーカー（つなぎ言葉）を選びなさい。",
        options: [
          { text: "For instance,", isCorrect: true, explanation: "前の段落の「環境への代償」の具体例（水質汚染など）を述べているため、For instance（例えば）が正解です。" },
          { text: "Therefore,", isCorrect: false, explanation: "Therefore（それゆえに）は「原因→結果」を表します。文脈に合いません。" },
          { text: "In contrast,", isCorrect: false, explanation: "In contrast（対照的に）は逆接です。前の段落とは順接（具体化）の関係にあります。" }
        ]
      },
      traceTask: null, // パラグラフによってはトレース問題をお休みすることも可能
      paraphraseTask: null
    }
  ],

  // 🎯 3. 長文全体の読解・要約ミッション
  comprehensionTasks: [
    {
      question: "この文章の最も適切なタイトル（Main Idea）を次の中から選びなさい。",
      options: [
        { text: "The Dark Side of Cheap Clothes", isCorrect: true, explanation: "安価な服（Cheap Clothes）の裏にある環境破壊（Dark Side）を見事にまとめたタイトルです。" },
        { text: "How to Make Trendy Garments", isCorrect: false, explanation: "服の作り方についてはメインで語られていません。" },
        { text: "The History of the Clothing Industry", isCorrect: false, explanation: "歴史については言及されていません。" }
      ]
    }
  ],

  // 💡 4. 模範要約パターン（生徒が最後に自分の答えと見比べる用）
  modelSummaries: [
    {
      type: "Brief (一文要約)",
      text: "Fast fashion provides cheap clothes but causes serious environmental damage.",
      translation: "ファストファッションは安価な服を提供するが、深刻な環境破壊を引き起こす。"
    },
    {
      type: "Detailed (詳細要約)",
      text: "Although fast fashion has revolutionized the industry by offering affordable and trendy clothing, it severely harms the environment. For example, its production processes consume vast amounts of water and release toxic chemicals into local ecosystems.",
      translation: "ファストファッションは手頃で流行の服を提供することで業界に革命を起こしたが、環境をひどく悪化させる。例えば、その生産過程は膨大な水を消費し、地域の生態系に有毒な化学物質を放出する。"
    }
  ],

  // 🎤 5. 最終音読ミッション（パラフレーズ後の美しい英文を脳に定着させる）
  readAloudTask: {
    targetSentence: "Fast fashion provides cheap clothes but causes serious environmental damage.",
    hint: "要約のコアとなるこの一文を、イントネーションを意識して音読しましょう！"
  }
};