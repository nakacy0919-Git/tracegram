export const basicRemoveMCategory = {
  categoryId: "basicRemoveM",
  title: "Step 2: 飾り(M)を捨てる",
  description: "前置詞のカタマリをなぞって除外する特訓",
  problems: [
    { 
      id: "basicRemoveM-b-1", 
      tokens: ["I", "live", "in", "Tokyo."], 
      targetIndices: [2, 3], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【初級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "私は東京に住んでいる。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-b-2", 
      tokens: ["She", "goes", "to", "school."], 
      targetIndices: [2, 3], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【初級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "彼女は学校へ行く。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-b-3", 
      tokens: ["He", "plays", "tennis", "with", "his", "friends."], 
      targetIndices: [3, 4, 5], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【初級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "彼は友達とテニスをする。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-b-4", 
      tokens: ["The", "book", "on", "the", "desk", "is", "mine."], 
      targetIndices: [2, 3, 4], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【初級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "机の上の本は私のものだ。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-b-5", 
      tokens: ["Look", "at", "the", "picture."], 
      targetIndices: [1, 2, 3], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【初級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "その絵を見なさい。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-b-6", 
      tokens: ["I", "got", "up", "at", "seven."], 
      targetIndices: [3, 4], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【初級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "私は7時に起きた。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-b-7", 
      tokens: ["They", "ran", "in", "the", "park."], 
      targetIndices: [2, 3, 4], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【初級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "彼らは公園を走った。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-b-8", 
      tokens: ["We", "studied", "for", "two", "hours."], 
      targetIndices: [2, 3, 4], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【初級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "私たちは2時間勉強した。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-b-9", 
      tokens: ["She", "comes", "from", "Canada."], 
      targetIndices: [2, 3], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【初級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "彼女はカナダ出身です。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-b-10", 
      tokens: ["A", "bird", "is", "flying", "in", "the", "sky."], 
      targetIndices: [4, 5, 6], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【初級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "鳥が空を飛んでいる。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-b-11", 
      tokens: ["He", "wrote", "a", "letter", "to", "his", "mother."], 
      targetIndices: [4, 5, 6], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【初級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "彼は母親に手紙を書いた。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-b-12", 
      tokens: ["The", "cat", "slept", "under", "the", "table."], 
      targetIndices: [3, 4, 5], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【初級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "猫はテーブルの下で眠った。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-b-13", 
      tokens: ["I", "bought", "a", "present", "for", "you."], 
      targetIndices: [4, 5], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【初級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "私はあなたにプレゼントを買った。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-b-14", 
      tokens: ["They", "talked", "about", "the", "movie."], 
      targetIndices: [2, 3, 4], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【初級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "彼らはその映画について話した。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-b-15", 
      tokens: ["She", "walked", "along", "the", "river."], 
      targetIndices: [2, 3, 4], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【初級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "彼女は川沿いを歩いた。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-i-1", 
      tokens: ["The", "man", "in", "the", "black", "suit", "is", "my", "uncle."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【中級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "黒いスーツを着た男性は私の叔父です。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-i-2", 
      tokens: ["I", "have", "many", "things", "to", "do", "in", "the", "morning."], 
      targetIndices: [6, 7, 8], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【中級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "私は朝にすべきことがたくさんある。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-i-3", 
      tokens: ["We", "walked", "through", "the", "dark", "forest."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【中級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "私たちは暗い森を通り抜けた。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-i-4", 
      tokens: ["During", "the", "summer", "vacation,", "I", "went", "to", "Hawaii."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【中級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "夏休みの間、私はハワイに行った。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-i-5", 
      tokens: ["He", "is", "looking", "for", "his", "lost", "keys."], 
      targetIndices: [3, 4, 5, 6], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【中級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "彼は失くした鍵を探している。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-i-6", 
      tokens: ["The", "building", "across", "the", "street", "is", "a", "library."], 
      targetIndices: [2, 3, 4], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【中級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "通りの向こう側の建物は図書館です。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-i-7", 
      tokens: ["She", "made", "a", "beautiful", "dress", "for", "her", "daughter."], 
      targetIndices: [5, 6, 7], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【中級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "彼女は娘のために美しいドレスを作った。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-i-8", 
      tokens: ["Some", "people", "in", "this", "town", "speak", "French."], 
      targetIndices: [2, 3, 4], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【中級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "この町の何人かの人々はフランス語を話す。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-i-9", 
      tokens: ["Without", "your", "help,", "I", "couldn't", "finish", "it."], 
      targetIndices: [0, 1, 2], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【中級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "あなたの助けがなければ、私はそれを終わらせられなかった。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-i-10", 
      tokens: ["They", "played", "baseball", "until", "five", "o'clock."], 
      targetIndices: [3, 4, 5], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【中級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "彼らは5時まで野球をした。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-i-11", 
      tokens: ["There", "is", "a", "small", "park", "behind", "the", "station."], 
      targetIndices: [5, 6, 7], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【中級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "駅の後ろに小さな公園がある。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-i-12", 
      tokens: ["According", "to", "the", "news,", "it", "will", "rain", "tomorrow."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【中級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "ニュースによれば、明日は雨が降るそうだ。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-i-13", 
      tokens: ["I", "received", "a", "message", "from", "an", "old", "friend."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【中級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "私は古い友人からメッセージを受け取った。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-i-14", 
      tokens: ["In", "the", "middle", "of", "the", "night,", "he", "woke", "up."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【中級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "真夜中に、彼は目を覚ました。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-i-15", 
      tokens: ["The", "children", "are", "running", "around", "the", "big", "tree."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【中級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "子どもたちは大きな木の周りを走っている。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-a-1", 
      tokens: ["Surprisingly,", "the", "rich", "man", "took", "to", "the", "party", "his", "tiger."], 
      targetIndices: [5, 6, 7], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【上級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "驚くべきことに、その金持ちの男は、そのパーティーに彼のトラを連れていった。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-a-2", 
      tokens: ["Despite", "the", "heavy", "rain,", "the", "game", "was", "held."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【上級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "激しい雨にもかかわらず、試合は行われた。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-a-3", 
      tokens: ["Among", "the", "guests", "was", "a", "famous", "politician."], 
      targetIndices: [0, 1, 2], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【上級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "客の中には有名な政治家がいた。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-a-4", 
      tokens: ["For", "reasons", "unknown", "to", "us,", "he", "left", "the", "company."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【上級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "私たちにはわからない理由で、彼は会社を辞めた。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-a-5", 
      tokens: ["He", "devoted", "all", "his", "life", "to", "helping", "the", "poor."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【上級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "彼は貧しい人々を助けることに一生を捧げた。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-a-6", 
      tokens: ["In", "spite", "of", "his", "effort,", "he", "failed", "the", "exam."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【上級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "彼の努力にもかかわらず、彼は試験に落ちた。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-a-7", 
      tokens: ["Due", "to", "the", "bad", "weather,", "the", "flight", "was", "canceled."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【上級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "悪天候のため、そのフライトはキャンセルされた。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-a-8", 
      tokens: ["The", "differences", "between", "the", "two", "cultures", "are", "huge."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【上級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "その2つの文化間の違いは巨大だ。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-a-9", 
      tokens: ["To", "the", "great", "surprise", "of", "everyone,", "he", "won."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【上級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "皆が大変驚いたことに、彼は勝った。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-a-10", 
      tokens: ["With", "his", "eyes", "closed,", "he", "listened", "to", "the", "music."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【上級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "目を閉じたまま、彼は音楽を聴いた。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-a-11", 
      tokens: ["Instead", "of", "taking", "a", "train,", "we", "took", "a", "bus."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【上級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "電車に乗る代わりに、私たちはバスに乗った。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-a-12", 
      tokens: ["The", "key", "to", "solving", "this", "problem", "lies", "in", "patience."], 
      targetIndices: [2, 3, 4, 5], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【上級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "この問題を解決する鍵は忍耐にある。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-a-13", 
      tokens: ["In", "addition", "to", "English,", "she", "can", "speak", "Spanish."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【上級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "英語に加えて、彼女はスペイン語も話せる。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-a-14", 
      tokens: ["As", "for", "me,", "I", "have", "no", "objection", "to", "the", "plan."], 
      targetIndices: [0, 1, 2], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【上級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "私に関して言えば、その計画に異議はありません。", 
      modifiedIndices: [] 
    },
    { 
      id: "basicRemoveM-a-15", 
      tokens: ["Because", "of", "the", "heavy", "traffic,", "we", "arrived", "late."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "M (副詞句/形容詞句)", 
      hint: "【上級】文の骨格ではない、前置詞から始まる修飾語（M）の塊をなぞってください。", 
      translation: "激しい渋滞のせいで、私たちは遅れて到着した。", 
      modifiedIndices: [] 
    }
  ]
};