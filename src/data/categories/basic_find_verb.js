export const basicFindVerbCategory = {
  categoryId: "basicFindVerb",
  title: "Step 1: 動詞(V)の発見",
  description: "長い文の中から「動詞」だけを見つけ出す特訓",
  problems: [
    { 
      id: "basicFindVerb-b-1", 
      tokens: ["I", "run", "fast."], 
      targetIndices: [1], 
      targetRole: "V (動詞)", 
      hint: "【初級】この文の述語動詞（V）をなぞってください。", 
      translation: "私は速く走る。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-b-2", 
      tokens: ["She", "is", "a", "student."], 
      targetIndices: [1], 
      targetRole: "V (動詞)", 
      hint: "【初級】この文の述語動詞（V）をなぞってください。", 
      translation: "彼女は学生です。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-b-3", 
      tokens: ["He", "loves", "apples."], 
      targetIndices: [1], 
      targetRole: "V (動詞)", 
      hint: "【初級】この文の述語動詞（V）をなぞってください。", 
      translation: "彼はリンゴが大好きです。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-b-4", 
      tokens: ["They", "play", "baseball."], 
      targetIndices: [1], 
      targetRole: "V (動詞)", 
      hint: "【初級】この文の述語動詞（V）をなぞってください。", 
      translation: "彼らは野球をします。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-b-5", 
      tokens: ["We", "studied", "English."], 
      targetIndices: [1], 
      targetRole: "V (動詞)", 
      hint: "【初級】この文の述語動詞（V）をなぞってください。", 
      translation: "私たちは英語を勉強しました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-b-6", 
      tokens: ["The", "dog", "barked", "loudly."], 
      targetIndices: [2], 
      targetRole: "V (動詞)", 
      hint: "【初級】この文の述語動詞（V）をなぞってください。", 
      translation: "その犬は大きな声で吠えた。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-b-7", 
      tokens: ["Tom", "bought", "a", "car."], 
      targetIndices: [1], 
      targetRole: "V (動詞)", 
      hint: "【初級】この文の述語動詞（V）をなぞってください。", 
      translation: "トムは車を買った。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-b-8", 
      tokens: ["The", "flowers", "look", "beautiful."], 
      targetIndices: [2], 
      targetRole: "V (動詞)", 
      hint: "【初級】この文の述語動詞（V）をなぞってください。", 
      translation: "その花は美しく見える。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-b-9", 
      tokens: ["I", "want", "some", "water."], 
      targetIndices: [1], 
      targetRole: "V (動詞)", 
      hint: "【初級】この文の述語動詞（V）をなぞってください。", 
      translation: "私は水が欲しいです。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-b-10", 
      tokens: ["She", "smiled", "at", "me."], 
      targetIndices: [1], 
      targetRole: "V (動詞)", 
      hint: "【初級】この文の述語動詞（V）をなぞってください。", 
      translation: "彼女は私に微笑んだ。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-b-11", 
      tokens: ["The", "sun", "shines", "brightly."], 
      targetIndices: [2], 
      targetRole: "V (動詞)", 
      hint: "【初級】この文の述語動詞（V）をなぞってください。", 
      translation: "太陽が明るく輝いている。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-b-12", 
      tokens: ["He", "opened", "the", "door."], 
      targetIndices: [1], 
      targetRole: "V (動詞)", 
      hint: "【初級】この文の述語動詞（V）をなぞってください。", 
      translation: "彼はドアを開けた。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-b-13", 
      tokens: ["My", "mother", "made", "a", "cake."], 
      targetIndices: [2], 
      targetRole: "V (動詞)", 
      hint: "【初級】この文の述語動詞（V）をなぞってください。", 
      translation: "母はケーキを作った。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-b-14", 
      tokens: ["The", "train", "arrived", "early."], 
      targetIndices: [2], 
      targetRole: "V (動詞)", 
      hint: "【初級】この文の述語動詞（V）をなぞってください。", 
      translation: "電車は早く到着した。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-b-15", 
      tokens: ["Birds", "fly", "in", "the", "sky."], 
      targetIndices: [1], 
      targetRole: "V (動詞)", 
      hint: "【初級】この文の述語動詞（V）をなぞってください。", 
      translation: "鳥は空を飛ぶ。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-i-1", 
      tokens: ["The", "book", "on", "the", "desk", "belongs", "to", "me."], 
      targetIndices: [5], 
      targetRole: "V (動詞)", 
      hint: "【中級】この文の述語動詞（V）をなぞってください。", 
      translation: "机の上の本は私のものです。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-i-2", 
      tokens: ["Reading", "books", "is", "fun."], 
      targetIndices: [2], 
      targetRole: "V (動詞)", 
      hint: "【中級】この文の述語動詞（V）をなぞってください。", 
      translation: "本を読むことは楽しい。", 
      modifiedIndices: [],
      grammarPoints: ["gerund"] 
    },
    { 
      id: "basicFindVerb-i-3", 
      tokens: ["To", "learn", "English", "takes", "time."], 
      targetIndices: [3], 
      targetRole: "V (動詞)", 
      hint: "【中級】この文の述語動詞（V）をなぞってください。", 
      translation: "英語を学ぶには時間がかかる。", 
      modifiedIndices: [],
      grammarPoints: ["infinitive"] 
    },
    { 
      id: "basicFindVerb-i-4", 
      tokens: ["The", "man", "standing", "there", "looks", "tired."], 
      targetIndices: [4], 
      targetRole: "V (動詞)", 
      hint: "【中級】この文の述語動詞（V）をなぞってください。", 
      translation: "あそこに立っている男性は疲れているように見える。", 
      modifiedIndices: [],
      grammarPoints: ["present_participle"] 
    },
    { 
      id: "basicFindVerb-i-5", 
      tokens: ["A", "lot", "of", "people", "attended", "the", "meeting."], 
      targetIndices: [4], 
      targetRole: "V (動詞)", 
      hint: "【中級】この文の述語動詞（V）をなぞってください。", 
      translation: "たくさんの人がその会議に出席した。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-i-6", 
      tokens: ["The", "dog", "running", "in", "the", "yard", "found", "a", "bone."], 
      targetIndices: [6], 
      targetRole: "V (動詞)", 
      hint: "【中級】この文の述語動詞（V）をなぞってください。", 
      translation: "庭を走っている犬が骨を見つけた。", 
      modifiedIndices: [],
      grammarPoints: ["present_participle"] 
    },
    { 
      id: "basicFindVerb-i-7", 
      tokens: ["That", "tall", "tree", "provides", "good", "shade."], 
      targetIndices: [3], 
      targetRole: "V (動詞)", 
      hint: "【中級】この文の述語動詞（V）をなぞってください。", 
      translation: "あの高い木はよい日陰を提供してくれる。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-i-8", 
      tokens: ["Some", "students", "in", "my", "class", "like", "math."], 
      targetIndices: [5], 
      targetRole: "V (動詞)", 
      hint: "【中級】この文の述語動詞（V）をなぞってください。", 
      translation: "私のクラスの何人かの生徒は数学が好きだ。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-i-9", 
      tokens: ["The", "rumor", "about", "him", "spread", "quickly."], 
      targetIndices: [4], 
      targetRole: "V (動詞)", 
      hint: "【中級】この文の述語動詞（V）をなぞってください。", 
      translation: "彼についての噂はすぐに広まった。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-i-10", 
      tokens: ["Drinking", "too", "much", "coffee", "causes", "sleep", "problems."], 
      targetIndices: [4], 
      targetRole: "V (動詞)", 
      hint: "【中級】この文の述語動詞（V）をなぞってください。", 
      translation: "コーヒーを飲みすぎることは睡眠障害を引き起こす。", 
      modifiedIndices: [],
      grammarPoints: ["gerund"] 
    },
    { 
      id: "basicFindVerb-i-11", 
      tokens: ["The", "letter", "from", "my", "friend", "arrived", "yesterday."], 
      targetIndices: [5], 
      targetRole: "V (動詞)", 
      hint: "【中級】この文の述語動詞（V）をなぞってください。", 
      translation: "私の友人からの手紙が昨日到着した。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-i-12", 
      tokens: ["People", "all", "over", "the", "world", "love", "this", "song."], 
      targetIndices: [5], 
      targetRole: "V (動詞)", 
      hint: "【中級】この文の述語動詞（V）をなぞってください。", 
      translation: "世界中の人々がこの歌を愛している。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-i-13", 
      tokens: ["A", "sudden", "change", "in", "weather", "surprised", "us."], 
      targetIndices: [5], 
      targetRole: "V (動詞)", 
      hint: "【中級】この文の述語動詞（V）をなぞってください。", 
      translation: "突然の天候の変化が私たちを驚かせた。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-i-14", 
      tokens: ["The", "road", "to", "the", "station", "goes", "through", "a", "forest."], 
      targetIndices: [5], 
      targetRole: "V (動詞)", 
      hint: "【中級】この文の述語動詞（V）をなぞってください。", 
      translation: "駅への道は森を抜けている。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-i-15", 
      tokens: ["A", "girl", "with", "long", "hair", "is", "my", "sister."], 
      targetIndices: [5], 
      targetRole: "V (動詞)", 
      hint: "【中級】この文の述語動詞（V）をなぞってください。", 
      translation: "長い髪の少女は私の妹です。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-a-1", 
      tokens: ["What", "he", "said", "yesterday", "surprised", "everyone."], 
      targetIndices: [4], 
      targetRole: "V (動詞)", 
      hint: "【上級】この文の述語動詞（V）をなぞってください。", 
      translation: "彼が昨日言ったことは全員を驚かせた。", 
      modifiedIndices: [],
      grammarPoints: ["noun_clause", "relative_pronoun"] 
    },
    { 
      id: "basicFindVerb-a-2", 
      tokens: ["Not", "only", "the", "students", "but", "also", "the", "teacher", "laughed."], 
      targetIndices: [8], 
      targetRole: "V (動詞)", 
      hint: "【上級】この文の述語動詞（V）をなぞってください。", 
      translation: "生徒たちだけでなく先生も笑った。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "basicFindVerb-a-3", 
      tokens: ["Never", "have", "I", "seen", "such", "a", "beautiful", "sunset."], 
      targetIndices: [1, 3], 
      targetRole: "V (動詞)", 
      hint: "【上級】この文の述語動詞（V）をなぞってください。", 
      translation: "こんなに美しい夕日を見たことがない。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "basicFindVerb-a-4", 
      tokens: ["Little", "did", "he", "know", "about", "the", "surprise", "party."], 
      targetIndices: [1, 3], 
      targetRole: "V (動詞)", 
      hint: "【上級】この文の述語動詞（V）をなぞってください。", 
      translation: "彼はサプライズパーティーについて全く知らなかった。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "basicFindVerb-a-5", 
      tokens: ["The", "fact", "that", "he", "passed", "the", "exam", "surprised", "me."], 
      targetIndices: [7], 
      targetRole: "V (動詞)", 
      hint: "【上級】この文の述語動詞（V）をなぞってください。", 
      translation: "彼が試験に合格したという事実は私を驚かせた。", 
      modifiedIndices: [],
      grammarPoints: ["noun_clause"] 
    },
    { 
      id: "basicFindVerb-a-6", 
      tokens: ["Among", "the", "guests", "was", "a", "famous", "writer."], 
      targetIndices: [3], 
      targetRole: "V (動詞)", 
      hint: "【上級】この文の述語動詞（V）をなぞってください。", 
      translation: "客の中には有名な作家がいた。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "basicFindVerb-a-7", 
      tokens: ["Here", "comes", "the", "bus", "we", "have", "been", "waiting", "for."], 
      targetIndices: [1], 
      targetRole: "V (動詞)", 
      hint: "【上級】この文の述語動詞（V）をなぞってください。", 
      translation: "私たちが待っていたバスが来た。", 
      modifiedIndices: [],
      grammarPoints: ["inversion", "relative_pronoun"] 
    },
    { 
      id: "basicFindVerb-a-8", 
      tokens: ["The", "man", "who", "is", "talking", "to", "Mary", "is", "my", "uncle."], 
      targetIndices: [7], 
      targetRole: "V (動詞)", 
      hint: "【上級】この文の述語動詞（V）をなぞってください。", 
      translation: "メアリーと話している男性は私の叔父です。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "basicFindVerb-a-9", 
      tokens: ["To", "make", "matters", "worse,", "it", "began", "to", "rain", "heavily."], 
      targetIndices: [5], 
      targetRole: "V (動詞)", 
      hint: "【上級】この文の述語動詞（V）をなぞってください。", 
      translation: "さらに悪いことに、激しい雨が降り始めた。", 
      modifiedIndices: [],
      grammarPoints: ["infinitive"] 
    },
    { 
      id: "basicFindVerb-a-10", 
      tokens: ["Only", "then", "did", "she", "realize", "her", "mistake."], 
      targetIndices: [2, 4], 
      targetRole: "V (動詞)", 
      hint: "【上級】この文の述語動詞（V）をなぞってください。", 
      translation: "その時になって初めて彼女は自分の間違いに気づいた。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "basicFindVerb-a-11", 
      tokens: ["Had", "he", "known", "the", "truth,", "he", "would", "have", "changed", "his", "mind."], 
      targetIndices: [6, 7, 8], 
      targetRole: "V (動詞)", 
      hint: "【上級】この文の述語動詞（V）をなぞってください。", 
      translation: "もし彼が真実を知っていたら、彼は心を変えていただろう。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "basicFindVerb-a-12", 
      tokens: ["Surrounded", "by", "his", "friends,", "he", "felt", "happy."], 
      targetIndices: [5], 
      targetRole: "V (動詞)", 
      hint: "【上級】この文の述語動詞（V）をなぞってください。", 
      translation: "友人たちに囲まれて、彼は幸せを感じた。", 
      modifiedIndices: [],
      grammarPoints: ["past_participle"] 
    },
    { 
      id: "basicFindVerb-a-13", 
      tokens: ["There", "remain", "many", "problems", "to", "be", "solved."], 
      targetIndices: [1], 
      targetRole: "V (動詞)", 
      hint: "【上級】この文の述語動詞（V）をなぞってください。", 
      translation: "解決されるべき多くの問題が残っている。", 
      modifiedIndices: [],
      grammarPoints: ["infinitive"] 
    },
    { 
      id: "basicFindVerb-a-14", 
      tokens: ["Whether", "we", "will", "go", "or", "not", "depends", "on", "the", "weather."], 
      targetIndices: [6], 
      targetRole: "V (動詞)", 
      hint: "【上級】この文の述語動詞（V）をなぞってください。", 
      translation: "我々が行くかどうかは天気次第だ。", 
      modifiedIndices: [],
      grammarPoints: ["noun_clause"] 
    },
    { 
      id: "basicFindVerb-a-15", 
      tokens: ["So", "strange", "was", "the", "situation", "that", "I", "couldn't", "speak."], 
      targetIndices: [2], 
      targetRole: "V (動詞)", 
      hint: "【上級】この文の述語動詞（V）をなぞってください。", 
      translation: "状況がとても奇妙だったので、私は話すことができなかった。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    }
  ]
};