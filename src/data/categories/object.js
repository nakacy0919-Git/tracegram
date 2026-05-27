export const objectCategory = {
  categoryId: "object",
  title: "目的語（O1 / O2）マスター",
  description: "「誰に（人＝O1）」「何を（モノ＝O2）」なのかを正確に捉える、第3・第4文型のトレーニング。",
  problems: [
    { id: "o-1", tokens: ["My", "grandfather", "gave", "me", "this", "beautiful", "watch", "yesterday."], targetIndices: [3], targetRole: "O (目的語)", hint: "この文の「人」を表す目的語（O1）をなぞってください。", translation: "祖父は昨日、私にこの美しい時計をくれた。", modifiedIndices: [2] },
    { id: "o-2", tokens: ["My", "grandfather", "gave", "me", "this", "beautiful", "watch", "yesterday."], targetIndices: [4, 5, 6], targetRole: "O (目的語)", hint: "この文の「モノ」を表す目的語（O2）の塊をすべてなぞってください。", translation: "祖父は昨日、私にこの美しい時計をくれた。", modifiedIndices: [2] },
    { id: "o-3", tokens: ["She", "told", "us", "that", "she", "would", "study", "abroad", "next", "year."], targetIndices: [3, 4, 5, 6, 7, 8, 9], targetRole: "名詞節 (Noun Clause)", hint: "この文の「モノ（内容）」を表す目的語（O2）の名詞節をすべてなぞってください。", translation: "彼女は私たちに、来年留学すると言った。", modifiedIndices: [2] },
    { id: "o-4", tokens: ["I", "found", "it", "difficult", "to", "solve", "this", "math", "problem."], targetIndices: [4, 5, 6, 7, 8], targetRole: "真主語 / 真目的語", hint: "光っている形式目的語(it)が指し示す「真の目的語」の塊をなぞってください。", translation: "私はこの数学の問題を解くのは難しいとわかった。", modifiedIndices: [2] },
    { id: "o-5", tokens: ["They", "discussed", "what", "they", "should", "do", "for", "the", "school", "festival."], targetIndices: [2, 3, 4, 5, 6, 7, 8, 9], targetRole: "O (目的語)", hint: "discussの目的語（O）となっている名詞節の塊をすべてなぞってください。", translation: "彼らは学園祭のために何をすべきかについて話し合った。", modifiedIndices: [1] },
    { id: "o-6", tokens: ["Can", "you", "show", "me", "the", "way", "to", "the", "station?"], targetIndices: [3], targetRole: "O (目的語)", hint: "光っている動詞に対する「人」の目的語（O1）をなぞってください。", translation: "駅までの道を私に教えてくれませんか？", modifiedIndices: [2] },
    { id: "o-7", tokens: ["Can", "you", "show", "me", "the", "way", "to", "the", "station?"], targetIndices: [4, 5, 6, 7, 8], targetRole: "O (目的語)", hint: "光っている動詞に対する「モノ」の目的語（O2）の塊をなぞってください。", translation: "駅までの道を私に教えてくれませんか？", modifiedIndices: [2] },
    { id: "o-8", tokens: ["She", "bought", "her", "son", "a", "new", "computer."], targetIndices: [4, 5, 6], targetRole: "O (目的語)", hint: "光っている動詞に対する「モノ」の目的語（O2）をなぞってください。", translation: "彼女は息子に新しいコンピューターを買ってあげた。", modifiedIndices: [1] },
    { id: "o-9", tokens: ["I", "think", "that", "he", "is", "an", "honest", "man."], targetIndices: [2, 3, 4, 5, 6, 7], targetRole: "O (目的語)", hint: "光っている動詞の目的語（O）となる名詞節をすべてなぞってください。", translation: "私は彼は正直な男だと思う。", modifiedIndices: [1] },
    { id: "o-10", tokens: ["Do", "you", "know", "when", "the", "meeting", "will", "start?"], targetIndices: [3, 4, 5, 6, 7], targetRole: "O (目的語)", hint: "光っている動詞の目的語（O）となる疑問詞節をすべてなぞってください。", translation: "会議がいつ始まるか知っていますか？", modifiedIndices: [2] },
    { id: "o-11", tokens: ["We", "enjoyed", "playing", "soccer", "in", "the", "rain."], targetIndices: [2, 3], targetRole: "O (目的語)", hint: "光っている動詞の目的語（O）となる動名詞の塊をなぞってください。", translation: "私たちは雨の中でサッカーをして楽しんだ。", modifiedIndices: [1] },
    { id: "o-12", tokens: ["He", "decided", "to", "quit", "his", "job."], targetIndices: [2, 3, 4, 5], targetRole: "O (目的語)", hint: "光っている動詞の目的語（O）となるto不定詞の塊をなぞってください。", translation: "彼は仕事を辞めることを決心した。", modifiedIndices: [1] },
    { id: "o-13", tokens: ["Please", "tell", "me", "what", "happened", "here."], targetIndices: [2], targetRole: "O (目的語)", hint: "光っている動詞に対する「人」の目的語（O1）をなぞってください。", translation: "ここで何が起きたか私に教えてください。", modifiedIndices: [1] },
    { id: "o-14", tokens: ["Please", "tell", "me", "what", "happened", "here."], targetIndices: [3, 4, 5], targetRole: "O (目的語)", hint: "光っている動詞に対する「モノ（内容）」の目的語（O2）をなぞってください。", translation: "ここで何が起きたか私に教えてください。", modifiedIndices: [1] },
    { id: "o-15", tokens: ["They", "make", "it", "a", "rule", "to", "jog", "every", "morning."], targetIndices: [5, 6, 7, 8], targetRole: "真主語 / 真目的語", hint: "光っている形式目的語(it)に対する「真の目的語」の塊をなぞってください。", translation: "彼らは毎朝ジョギングすることにしている。", modifiedIndices: [2] },
    { id: "o-16", tokens: ["I", "don't", "know", "whether", "to", "laugh", "or", "cry."], targetIndices: [3, 4, 5, 6, 7], targetRole: "O (目的語)", hint: "光っている動詞の目的語（O）の塊をすべてなぞってください。", translation: "私は笑うべきか泣くべきかわからない。", modifiedIndices: [2] },
    { id: "o-17", tokens: ["I", "will", "send", "you", "an", "email", "later."], targetIndices: [3], targetRole: "O (目的語)", hint: "光っている動詞に対する「人」の目的語（O1）をなぞってください。", translation: "後であなたにメールを送ります。", modifiedIndices: [2] },
    { id: "o-18", tokens: ["I", "will", "send", "you", "an", "email", "later."], targetIndices: [4, 5], targetRole: "O (目的語)", hint: "光っている動詞に対する「モノ」の目的語（O2）をなぞってください。", translation: "後であなたにメールを送ります。", modifiedIndices: [2] },
    { id: "o-19", tokens: ["She", "denied", "having", "stolen", "the", "money."], targetIndices: [2, 3, 4, 5], targetRole: "O (目的語)", hint: "光っている動詞の目的語（O）となる動名詞の完了形の塊をなぞってください。", translation: "彼女はそのお金を盗んだことを否定した。", modifiedIndices: [1] },
    { id: "o-20", tokens: ["He", "took", "it", "for", "granted", "that", "she", "would", "come."], targetIndices: [5, 6, 7, 8], targetRole: "真主語 / 真目的語", hint: "光っている形式目的語(it)に対する「真の目的語」の塊をなぞってください。", translation: "彼は彼女が来るのを当然のことと思った。", modifiedIndices: [2] }
  ]
};