export const complementCategory = {
  categoryId: "complement",
  title: "補語（Complement）マスター",
  description: "主語や目的語の状態・性質を説明する「補語（C）」を見抜くトレーニング。",
  problems: [
    { id: "c-1", tokens: ["The", "leaves", "in", "the", "park", "turned", "red", "and", "yellow", "in", "autumn."], targetIndices: [6, 7, 8], targetRole: "C (補語)", hint: "光っている主語の状態の変化を表している補語（C）の塊をなぞってください。", translation: "秋になると、公園の葉は赤や黄色に変わった。", modifiedIndices: [1] },
    { id: "c-2", tokens: ["The", "news", "on", "TV", "made", "my", "mother", "very", "happy."], targetIndices: [7, 8], targetRole: "C (補語)", hint: "光っている目的語（O）の状態を説明している補語（C）をなぞってください。", translation: "テレビのニュースを見て、母はとても喜んだ（ニュースが母をとても幸せにした）。", modifiedIndices: [5, 6] },
    { id: "c-3", tokens: ["We", "found", "the", "exam", "much", "more", "difficult", "than", "we", "had", "expected."], targetIndices: [4, 5, 6], targetRole: "C (補語)", hint: "光っている目的語（O）の状態を説明している補語（C）をなぞってください。", translation: "私たちはその試験が予想していたよりもずっと難しいとわかった。", modifiedIndices: [2, 3] },
    { id: "c-4", tokens: ["He", "kept", "the", "window", "open", "while", "he", "was", "sleeping."], targetIndices: [4], targetRole: "C (補語)", hint: "光っている目的語（O）の状態を説明している補語（C）をなぞってください。", translation: "彼は寝ている間、窓を開けっぱなしにしていた。", modifiedIndices: [2, 3] },
    { id: "c-5", tokens: ["The", "man", "sitting", "next", "to", "me", "remained", "silent", "all", "the", "time."], targetIndices: [7], targetRole: "C (補語)", hint: "光っている主語の状態を表している補語（C）をなぞってください。", translation: "私の隣に座っている男は、終始無言のままだった。", modifiedIndices: [1] },
    { id: "c-6", tokens: ["I", "found", "the", "book", "very", "interesting."], targetIndices: [4, 5], targetRole: "C (補語)", hint: "光っている目的語（O）の状態を説明している補語（C）をなぞってください。", translation: "私はその本がとても面白いとわかった。", modifiedIndices: [2, 3] },
    { id: "c-7", tokens: ["She", "looks", "pale", "today."], targetIndices: [2], targetRole: "C (補語)", hint: "光っている主語の状態を説明している補語（C）をなぞってください。", translation: "彼女は今日、顔色が悪いように見える。", modifiedIndices: [0] },
    { id: "c-8", tokens: ["They", "elected", "him", "president", "of", "the", "club."], targetIndices: [3, 4, 5, 6], targetRole: "C (補語)", hint: "光っている目的語（O）の役職や状態を表す補語（C）をすべてなぞってください。", translation: "彼らは彼をクラブの会長に選んだ。", modifiedIndices: [2] },
    { id: "c-9", tokens: ["His", "dream", "is", "to", "become", "an", "astronaut."], targetIndices: [2, 3, 4, 5], targetRole: "C (補語)", hint: "光っている主語とイコールになる補語（C）の塊をなぞってください。", translation: "彼の夢は宇宙飛行士になることだ。", modifiedIndices: [0, 1] },
    { id: "c-10", tokens: ["The", "music", "makes", "me", "feel", "relaxed."], targetIndices: [4, 5], targetRole: "C (補語)", hint: "光っている目的語（O）の状態を表す補語（C：原形不定詞）の塊をなぞってください。", translation: "その音楽は私をリラックスさせる。", modifiedIndices: [3] },
    { id: "c-11", tokens: ["Please", "keep", "your", "room", "clean."], targetIndices: [4], targetRole: "C (補語)", hint: "光っている目的語（O）の状態を表す補語（C）をなぞってください。", translation: "自分の部屋を綺麗に保ちてください。", modifiedIndices: [2, 3] },
    { id: "c-12", tokens: ["He", "is", "called", "a", "genius", "by", "his", "friends."], targetIndices: [3, 4], targetRole: "C (補語)", hint: "光っている主語の状態（呼び名）を表す補語（C）をなぞってください。", translation: "彼は友人たちから天才と呼ばれている。", modifiedIndices: [0] },
    { id: "c-13", tokens: ["The", "fact", "is", "that", "we", "have", "no", "money."], targetIndices: [3, 4, 5, 6, 7], targetRole: "C (補語)", hint: "光っている主語とイコールになる補語（C：名詞節）の塊をなぞってください。", translation: "実のところ、私たちにはお金がない。", modifiedIndices: [0, 1] },
    { id: "c-14", tokens: ["I", "want", "this", "work", "finished", "by", "tomorrow."], targetIndices: [4], targetRole: "C (補語)", hint: "光っている目的語（O）の状態を表す補語（C：過去分詞）をなぞってください。", translation: "この仕事を明日までに終わらせてほしい。", modifiedIndices: [2, 3] },
    { id: "c-15", tokens: ["The", "milk", "went", "sour", "due", "to", "the", "heat."], targetIndices: [3], targetRole: "C (補語)", hint: "光っている主語の「変化」を表す補語（C）をなぞってください。", translation: "暑さのせいで牛乳が酸っぱくなった。", modifiedIndices: [0, 1] },
    { id: "c-16", tokens: ["He", "stood", "looking", "at", "the", "picture."], targetIndices: [2, 3, 4, 5], targetRole: "C (補語)", hint: "光っている主語が「どのような状態で」立っていたかを表す補語（C）の塊をなぞってください。", translation: "彼はその絵を見ながら立っていた。", modifiedIndices: [0] },
    { id: "c-17", tokens: ["The", "result", "proved", "to", "be", "false."], targetIndices: [2, 3, 4], targetRole: "C (補語)", hint: "光っている主語が「最終的にどうだったか」を表す補語（C）の塊をなぞってください。", translation: "その結果は間違っていることが判明した。", modifiedIndices: [0, 1] },
    { id: "c-18", tokens: ["I", "saw", "a", "dog", "running", "across", "the", "street."], targetIndices: [4, 5, 6, 7], targetRole: "C (補語)", hint: "光っている目的語（O）の動作を表す補語（C：現在分詞）の塊をなぞってください。", translation: "私は犬が通りを横切って走っているのを見た。", modifiedIndices: [2, 3] },
    { id: "c-19", tokens: ["She", "named", "her", "cat", "Tama."], targetIndices: [4], targetRole: "C (補語)", hint: "光っている目的語（O）とイコールになる補語（C）をなぞってください。", translation: "彼女は自分の猫をタマと名付けた。", modifiedIndices: [2, 3] },
    { id: "c-20", tokens: ["My", "hobby", "is", "collecting", "old", "coins."], targetIndices: [3, 4, 5], targetRole: "C (補語)", hint: "光っている主語とイコールになる補語（C：動名詞）の塊をなぞってください。", translation: "私の趣味は古い硬貨を集めることだ。", modifiedIndices: [0, 1] }
  ]
};