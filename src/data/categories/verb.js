export const verbCategory = {
  categoryId: "verb_transitive",
  title: "自動詞と他動詞",
  description: "目的語（O）が不要な「自動詞」と、直後に目的語が必要な「他動詞」を正確に見極めろ！前置詞の有無が鍵だ！",
  problems: [
    // ＝＝＝ レベル1（初級：4〜6語のシンプルな文） ＝＝＝
    { 
      id: "vt-b-1", 
      level: 1, 
      tokens: ["We", "discussed", "the", "plan", "yesterday."], 
      targetIndices: [1], 
      targetRole: "V (他動詞)", 
      hint: "前置詞なしで直接目的語(O)をとる「他動詞」をなぞってください。（aboutは不要！）", 
      translation: "私たちは昨日その計画について話し合った。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-b-2", 
      level: 1, 
      tokens: ["The", "sun", "rises", "in", "the", "east."], 
      targetIndices: [2], 
      targetRole: "V (自動詞)", 
      hint: "目的語を必要としない「自動詞」をなぞってください。", 
      translation: "太陽は東から昇る。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-b-3", 
      level: 1, 
      tokens: ["She", "raised", "her", "right", "hand."], 
      targetIndices: [1], 
      targetRole: "V (他動詞)", 
      hint: "直後に目的語(O)を必要とする「他動詞」をなぞってください。", 
      translation: "彼女は右手を挙げた。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-b-4", 
      level: 1, 
      tokens: ["My", "brother", "married", "my", "best", "friend."], 
      targetIndices: [2], 
      targetRole: "V (他動詞)", 
      hint: "前置詞なしで直接目的語(O)をとる「他動詞」をなぞってください。（withは不要！）", 
      translation: "私の兄は私の親友と結婚した。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-b-5", 
      level: 1, 
      tokens: ["I", "answered", "the", "difficult", "question", "quickly."], 
      targetIndices: [1], 
      targetRole: "V (他動詞)", 
      hint: "直後に目的語(O)を必要とする「他動詞」をなぞってください。（toは不要！）", 
      translation: "私はその難しい質問に素早く答えた。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-b-6", 
      level: 1, 
      tokens: ["We", "finally", "reached", "the", "train", "station."], 
      targetIndices: [2], 
      targetRole: "V (他動詞)", 
      hint: "「〜に到着する」という意味の「他動詞」をなぞってください。（atやtoは不要！）", 
      translation: "私たちはついに駅に到着した。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-b-7", 
      level: 1, 
      tokens: ["He", "arrived", "at", "the", "school", "late."], 
      targetIndices: [1], 
      targetRole: "V (自動詞)", 
      hint: "対象を示すために前置詞(at)を必要とする「自動詞」をなぞってください。", 
      translation: "彼は学校に遅れて到着した。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-b-8", 
      level: 1, 
      tokens: ["Please", "listen", "to", "my", "story", "carefully."], 
      targetIndices: [1], 
      targetRole: "V (自動詞)", 
      hint: "対象を示すために前置詞(to)を必要とする「自動詞」をなぞってください。", 
      translation: "私の話を注意深く聞いてください。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-b-9", 
      level: 1, 
      tokens: ["I", "completely", "agree", "with", "your", "idea."], 
      targetIndices: [2], 
      targetRole: "V (自動詞)", 
      hint: "対象を示すために前置詞(with)を必要とする「自動詞」をなぞってください。", 
      translation: "私はあなたの考えに完全に賛成です。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-b-10", 
      level: 1, 
      tokens: ["She", "entered", "the", "quiet", "meeting", "room."], 
      targetIndices: [1], 
      targetRole: "V (他動詞)", 
      hint: "「〜に入る」という意味の「他動詞」をなぞってください。（intoは不要！）", 
      translation: "彼女は静かな会議室に入った。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-b-11", 
      level: 1, 
      tokens: ["They", "slowly", "approached", "the", "old", "house."], 
      targetIndices: [2], 
      targetRole: "V (他動詞)", 
      hint: "「〜に近づく」という意味の「他動詞」をなぞってください。（toは不要！）", 
      translation: "彼らはゆっくりと古い家に近づいた。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-b-12", 
      level: 1, 
      tokens: ["Please", "look", "at", "this", "beautiful", "picture."], 
      targetIndices: [1], 
      targetRole: "V (自動詞)", 
      hint: "対象を示すために前置詞(at)を必要とする「自動詞」をなぞってください。", 
      translation: "この美しい絵を見てください。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-b-13", 
      level: 1, 
      tokens: ["I", "searched", "for", "my", "lost", "keys."], 
      targetIndices: [1], 
      targetRole: "V (自動詞)", 
      hint: "「〜を探す」という意味で前置詞(for)を必要とする「自動詞」をなぞってください。", 
      translation: "私は無くした鍵を探した。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-b-14", 
      level: 1, 
      tokens: ["He", "miraculously", "survived", "the", "terrible", "crash."], 
      targetIndices: [2], 
      targetRole: "V (他動詞)", 
      hint: "「〜を生き延びる」という意味の「他動詞」をなぞってください。", 
      translation: "彼は奇跡的にその恐ろしい衝突事故を生き延びた。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-b-15", 
      level: 1, 
      tokens: ["She", "closely", "resembles", "her", "beautiful", "mother."], 
      targetIndices: [2], 
      targetRole: "V (他動詞)", 
      hint: "「〜に似ている」という意味の「他動詞」をなぞってください。（withやtoは不要！）", 
      translation: "彼女は美しい母親によく似ている。", 
      modifiedIndices: [] 
    },

    // ＝＝＝ レベル2（中級：7〜10語の少し修飾語がついた文） ＝＝＝
    { 
      id: "vt-i-1", 
      level: 2, 
      tokens: ["We", "discussed", "the", "serious", "environmental", "problem", "yesterday."], 
      targetIndices: [1], 
      targetRole: "V (他動詞)", 
      hint: "前置詞なしで直接目的語(O)をとる「他動詞」をなぞってください。（aboutは不要！）", 
      translation: "私たちは昨日、深刻な環境問題について話し合った。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-i-2", 
      level: 2, 
      tokens: ["The", "students", "attended", "the", "special", "lecture", "this", "morning."], 
      targetIndices: [2], 
      targetRole: "V (他動詞)", 
      hint: "「〜に出席する」という意味の「他動詞」をなぞってください。（toは不要！）", 
      translation: "生徒たちは今朝、特別講義に出席した。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-i-3", 
      level: 2, 
      tokens: ["He", "apologized", "to", "his", "teacher", "for", "his", "mistake."], 
      targetIndices: [1], 
      targetRole: "V (自動詞)", 
      hint: "対象を示すために前置詞(to)を必要とする「自動詞」をなぞってください。", 
      translation: "彼は自分のミスについて先生に謝罪した。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-i-4", 
      level: 2, 
      tokens: ["The", "small", "cat", "lay", "on", "the", "comfortable", "sofa", "all", "day."], 
      targetIndices: [3], 
      targetRole: "V (自動詞)", 
      hint: "「横になる」という意味の「自動詞」の過去形をなぞってください。", 
      translation: "その小さな猫は一日中、快適なソファの上で横になっていた。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-i-5", 
      level: 2, 
      tokens: ["She", "laid", "her", "heavy", "bag", "on", "the", "wooden", "desk."], 
      targetIndices: [1], 
      targetRole: "V (他動詞)", 
      hint: "「〜を置く/横たえる」という意味の「他動詞」の過去形をなぞってください。", 
      translation: "彼女は重いカバンを木製の机の上に置いた。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-i-6", 
      level: 2, 
      tokens: ["The", "new", "manager", "objected", "to", "the", "sudden", "change", "in", "schedule."], 
      targetIndices: [3], 
      targetRole: "V (自動詞)", 
      hint: "対象を示すために前置詞(to)を必要とする「自動詞」をなぞってください。", 
      translation: "新しいマネージャーはスケジュールの突然の変更に反対した。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-i-7", 
      level: 2, 
      tokens: ["Many", "people", "opposed", "the", "construction", "of", "the", "new", "highway."], 
      targetIndices: [2], 
      targetRole: "V (他動詞)", 
      hint: "「〜に反対する」という意味の「他動詞」をなぞってください。（toは不要！）", 
      translation: "多くの人々が新しい高速道路の建設に反対した。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-i-8", 
      level: 2, 
      tokens: ["He", "graduated", "from", "the", "local", "university", "with", "honors", "last", "year."], 
      targetIndices: [1], 
      targetRole: "V (自動詞)", 
      hint: "対象を示すために前置詞(from)を必要とする「自動詞」をなぞってください。", 
      translation: "彼は昨年、地元の大学を優秀な成績で卒業した。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-i-9", 
      level: 2, 
      tokens: ["The", "team", "consists", "of", "ten", "highly", "skilled", "software", "engineers."], 
      targetIndices: [2], 
      targetRole: "V (自動詞)", 
      hint: "「〜で構成される」という意味を作る「自動詞」をなぞってください。", 
      translation: "そのチームは10人の高度な技術を持つソフトウェアエンジニアで構成されている。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-i-10", 
      level: 2, 
      tokens: ["You", "should", "mention", "the", "important", "detail", "to", "the", "boss."], 
      targetIndices: [2], 
      targetRole: "V (他動詞)", 
      hint: "「〜について言及する」という意味の「他動詞」をなぞってください。（aboutは不要！）", 
      translation: "あなたはその重要な詳細について上司に言及するべきだ。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-i-11", 
      level: 2, 
      tokens: ["We", "patiently", "waited", "for", "the", "late", "train", "for", "two", "hours."], 
      targetIndices: [2], 
      targetRole: "V (自動詞)", 
      hint: "対象を示すために前置詞(for)を必要とする「自動詞」をなぞってください。", 
      translation: "私たちは遅れている電車を2時間辛抱強く待った。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-i-12", 
      level: 2, 
      tokens: ["The", "heavy", "rain", "resulted", "in", "a", "terrible", "traffic", "jam."], 
      targetIndices: [3], 
      targetRole: "V (自動詞)", 
      hint: "「〜という結果になる」という意味で前置詞(in)を必要とする「自動詞」をなぞってください。", 
      translation: "その大雨はひどい交通渋滞という結果になった。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-i-13", 
      level: 2, 
      tokens: ["The", "company", "survived", "the", "severe", "economic", "crisis", "last", "year."], 
      targetIndices: [2], 
      targetRole: "V (他動詞)", 
      hint: "「〜を切り抜けて生き残る」という意味の「他動詞」をなぞってください。", 
      translation: "その会社は昨年、深刻な経済危機を生き延びた。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-i-14", 
      level: 2, 
      tokens: ["They", "approached", "the", "summit", "of", "the", "mountain", "in", "the", "evening."], 
      targetIndices: [1], 
      targetRole: "V (他動詞)", 
      hint: "「〜に近づく」という意味の「他動詞」をなぞってください。（toは不要！）", 
      translation: "彼らは夕方にその山の頂上に近づいた。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-i-15", 
      level: 2, 
      tokens: ["The", "price", "of", "fresh", "vegetables", "rose", "rapidly", "during", "the", "winter."], 
      targetIndices: [5], 
      targetRole: "V (自動詞)", 
      hint: "目的語を必要としない「自動詞（〜が上がる）」をなぞってください。", 
      translation: "新鮮な野菜の価格は冬の間に急速に上がった。", 
      modifiedIndices: [] 
    },

    // ＝＝＝ レベル3（上級：11〜14語の構造が複雑な長文） ＝＝＝
    { 
      id: "vt-a-1", 
      level: 3, 
      tokens: ["The", "scientists", "discussed", "the", "complex", "issue", "regarding", "global", "warming", "for", "hours."], 
      targetIndices: [2], 
      targetRole: "V (他動詞)", 
      hint: "前置詞なしで直接目的語(O)をとる「他動詞」をなぞってください。（aboutは不要！）", 
      translation: "科学者たちは地球温暖化に関する複雑な問題について何時間も話し合った。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-a-2", 
      level: 3, 
      tokens: ["Despite", "the", "heavy", "snow,", "all", "the", "members", "attended", "the", "crucial", "board", "meeting."], 
      targetIndices: [7], 
      targetRole: "V (他動詞)", 
      hint: "「〜に出席する」という意味の「他動詞」をなぞってください。（toは不要！）", 
      translation: "大雪にもかかわらず、全メンバーがその重要な役員会議に出席した。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-a-3", 
      level: 3, 
      tokens: ["He", "strongly", "objected", "to", "the", "controversial", "proposal", "made", "by", "the", "new", "committee."], 
      targetIndices: [2], 
      targetRole: "V (自動詞)", 
      hint: "対象を示すために前置詞(to)を必要とする「自動詞」をなぞってください。", 
      translation: "彼は新しい委員会によって出された議論を呼ぶ提案に強く反対した。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-a-4", 
      level: 3, 
      tokens: ["The", "mysterious", "man", "approached", "the", "ancient", "castle", "standing", "on", "the", "steep", "hill."], 
      targetIndices: [3], 
      targetRole: "V (他動詞)", 
      hint: "「〜に近づく」という意味の「他動詞」をなぞってください。（toは不要！）", 
      translation: "その謎の男は、険しい丘の上に立つ古代の城に近づいた。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-a-5", 
      level: 3, 
      tokens: ["The", "successful", "businessman", "married", "a", "famous", "actress", "who", "starred", "in", "many", "movies."], 
      targetIndices: [3], 
      targetRole: "V (他動詞)", 
      hint: "前置詞なしで直接目的語(O)をとる「他動詞」をなぞってください。（withは不要！）", 
      translation: "その成功した実業家は、多くの映画で主演を務めた有名な女優と結婚した。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-a-6", 
      level: 3, 
      tokens: ["After", "a", "long", "debate,", "they", "finally", "agreed", "with", "the", "manager's", "innovative", "strategy."], 
      targetIndices: [6], 
      targetRole: "V (自動詞)", 
      hint: "対象を示すために前置詞(with)を必要とする「自動詞」をなぞってください。", 
      translation: "長い議論の末、彼らはついにマネージャーの革新的な戦略に賛成した。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-a-7", 
      level: 3, 
      tokens: ["The", "global", "economy", "finally", "recovered", "from", "the", "recent", "financial", "crisis."], 
      targetIndices: [4], 
      targetRole: "V (自動詞)", 
      hint: "「〜から回復する」という意味で前置詞(from)を必要とする「自動詞」をなぞってください。", 
      translation: "世界経済はついに最近の金融危機から回復した。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-a-8", 
      level: 3, 
      tokens: ["Please", "immediately", "contact", "the", "customer", "service", "department", "before", "the", "warranty", "period", "expires."], 
      targetIndices: [2], 
      targetRole: "V (他動詞)", 
      hint: "「〜に連絡する」という意味の「他動詞」をなぞってください。（withやtoは不要！）", 
      translation: "保証期間が切れる前に、直ちにカスタマーサービス部門に連絡してください。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-a-9", 
      level: 3, 
      tokens: ["The", "brave", "firefighters", "safely", "entered", "the", "burning", "building", "to", "rescue", "the", "children."], 
      targetIndices: [4], 
      targetRole: "V (他動詞)", 
      hint: "「〜の中に入る」という意味の「他動詞」をなぞってください。（intoは不要！）", 
      translation: "勇敢な消防士たちは子供たちを救出するために燃える建物の中に安全に進入した。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-a-10", 
      level: 3, 
      tokens: ["The", "lack", "of", "proper", "communication", "often", "results", "in", "serious", "misunderstandings", "between", "colleagues."], 
      targetIndices: [6], 
      targetRole: "V (自動詞)", 
      hint: "「〜という結果になる」という意味で前置詞(in)を必要とする「自動詞」をなぞってください。", 
      translation: "適切なコミュニケーションの不足は、しばしば同僚間の深刻な誤解という結果になる。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-a-11", 
      level: 3, 
      tokens: ["She", "carefully", "laid", "the", "fragile", "glass", "vase", "on", "the", "center", "of", "the", "table."], 
      targetIndices: [2], 
      targetRole: "V (他動詞)", 
      hint: "「〜を置く/横たえる」という意味の「他動詞」の過去形をなぞってください。", 
      translation: "彼女は壊れやすいガラスの花瓶をテーブルの中央に慎重に置いた。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-a-12", 
      level: 3, 
      tokens: ["The", "tired", "dog", "lay", "comfortably", "on", "the", "soft", "rug", "in", "front", "of", "the", "fireplace."], 
      targetIndices: [3], 
      targetRole: "V (自動詞)", 
      hint: "「横になる」という意味の「自動詞」の過去形をなぞってください。", 
      translation: "その疲れた犬は暖炉の前の柔らかいラグの上で快適に横になっていた。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-a-13", 
      level: 3, 
      tokens: ["The", "central", "bank", "raised", "the", "interest", "rate", "to", "prevent", "inflation", "from", "accelerating", "further."], 
      targetIndices: [3], 
      targetRole: "V (他動詞)", 
      hint: "直後に目的語(O)を必要とする「他動詞（〜を上げる）」の過去形をなぞってください。", 
      translation: "中央銀行はインフレがこれ以上加速するのを防ぐために金利を引き上げた。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-a-14", 
      level: 3, 
      tokens: ["Pure", "water", "consists", "of", "two", "atoms", "of", "hydrogen", "and", "one", "atom", "of", "oxygen."], 
      targetIndices: [2], 
      targetRole: "V (自動詞)", 
      hint: "「〜で構成される」という意味を作る「自動詞」をなぞってください。", 
      translation: "純粋な水は、2つの水素原子と1つの酸素原子から構成されている。", 
      modifiedIndices: [] 
    },
    { 
      id: "vt-a-15", 
      level: 3, 
      tokens: ["The", "young", "actress", "closely", "resembles", "the", "legendary", "movie", "star", "who", "won", "the", "academy", "award."], 
      targetIndices: [4], 
      targetRole: "V (他動詞)", 
      hint: "「〜に似ている」という意味の「他動詞」をなぞってください。（withやtoは不要！）", 
      translation: "その若手女優は、アカデミー賞を受賞した伝説の映画スターによく似ている。", 
      modifiedIndices: [] 
    }
  ]
};