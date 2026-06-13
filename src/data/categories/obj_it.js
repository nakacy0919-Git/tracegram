export const objItCategory = {
  categoryId: "objIt",
  title: "Sub-4: 形式目的語 (it)",
  description: "find it easy to do のように、後ろの真目的語とリンクさせる",
  problems: [
    { 
      id: "objIt-b-1", 
      tokens: ["I", "found", "it", "easy", "to", "read", "this", "book."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "O (真目的語)", 
      hint: "【初級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私はこの本を読むのが簡単だとわかった。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-b-2", 
      tokens: ["He", "made", "it", "clear", "that", "he", "would", "go."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "O (真目的語)", 
      hint: "【初級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼は行くことを明らかにした。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-b-3", 
      tokens: ["I", "think", "it", "important", "to", "study", "English."], 
      targetIndices: [4, 5, 6], 
      targetRole: "O (真目的語)", 
      hint: "【初級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私は英語を勉強することが重要だと思う。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-b-4", 
      tokens: ["She", "found", "it", "hard", "to", "get", "up", "early."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "O (真目的語)", 
      hint: "【初級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼女は早く起きるのが難しいとわかった。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-b-5", 
      tokens: ["We", "consider", "it", "wrong", "to", "tell", "a", "lie."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "O (真目的語)", 
      hint: "【初級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私たちは嘘をつくことは悪いことだと考えている。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-b-6", 
      tokens: ["I", "found", "it", "fun", "to", "play", "tennis."], 
      targetIndices: [4, 5, 6], 
      targetRole: "O (真目的語)", 
      hint: "【初級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私はテニスをするのが楽しいとわかった。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-b-7", 
      tokens: ["He", "made", "it", "a", "rule", "to", "get", "up", "early."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "O (真目的語)", 
      hint: "【初級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼は早く起きることを規則にしていた。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-b-8", 
      tokens: ["I", "thought", "it", "best", "to", "say", "nothing."], 
      targetIndices: [4, 5, 6], 
      targetRole: "O (真目的語)", 
      hint: "【初級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私は何も言わないのが一番良いと思った。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-b-9", 
      tokens: ["She", "believes", "it", "right", "to", "help", "others."], 
      targetIndices: [4, 5, 6], 
      targetRole: "O (真目的語)", 
      hint: "【初級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼女は他人を助けることは正しいと信じている。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-b-10", 
      tokens: ["I", "made", "it", "clear", "that", "I", "disagreed."], 
      targetIndices: [4, 5, 6], 
      targetRole: "O (真目的語)", 
      hint: "【初級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私は自分が反対であることを明らかにした。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-b-11", 
      tokens: ["He", "found", "it", "difficult", "to", "understand", "her."], 
      targetIndices: [4, 5, 6], 
      targetRole: "O (真目的語)", 
      hint: "【初級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼は彼女を理解するのが難しいとわかった。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-b-12", 
      tokens: ["I", "felt", "it", "necessary", "to", "call", "him."], 
      targetIndices: [4, 5, 6], 
      targetRole: "O (真目的語)", 
      hint: "【初級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私は彼に電話する必要があると感じた。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-b-13", 
      tokens: ["She", "found", "it", "impossible", "to", "sleep."], 
      targetIndices: [4, 5], 
      targetRole: "O (真目的語)", 
      hint: "【初級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼女は眠ることが不可能だとわかった。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-b-14", 
      tokens: ["They", "think", "it", "bad", "to", "eat", "too", "much."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "O (真目的語)", 
      hint: "【初級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼らは食べ過ぎることは悪いことだと思っている。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-b-15", 
      tokens: ["I", "found", "it", "interesting", "to", "watch", "the", "movie."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "O (真目的語)", 
      hint: "【初級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私はその映画を観るのが面白いとわかった。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-i-1", 
      tokens: ["I", "found", "it", "difficult", "to", "solve", "the", "math", "problem."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "O (真目的語)", 
      hint: "【中級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私はその数学の問題を解くのが難しいとわかった。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-i-2", 
      tokens: ["She", "made", "it", "a", "rule", "to", "take", "a", "walk", "every", "morning."], 
      targetIndices: [5, 6, 7, 8, 9, 10], 
      targetRole: "O (真目的語)", 
      hint: "【中級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼女は毎朝散歩をすることを日課にしていた。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-i-3", 
      tokens: ["He", "considers", "it", "his", "duty", "to", "protect", "his", "family."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "O (真目的語)", 
      hint: "【中級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼は家族を守ることが自分の義務だと考えている。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-i-4", 
      tokens: ["We", "took", "it", "for", "granted", "that", "he", "would", "come."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "O (真目的語)", 
      hint: "【中級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私たちは彼が来ることを当然のことと思っていた。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-i-5", 
      tokens: ["I", "think", "it", "highly", "probable", "that", "it", "will", "rain", "tomorrow."], 
      targetIndices: [5, 6, 7, 8, 9], 
      targetRole: "O (真目的語)", 
      hint: "【中級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私は明日雨が降る可能性が非常に高いと思う。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-i-6", 
      tokens: ["The", "noise", "made", "it", "impossible", "for", "me", "to", "study."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "O (真目的語)", 
      hint: "【中級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "その騒音のせいで、私は勉強することが不可能になった。", 
      modifiedIndices: [3] 
    },
    { 
      id: "objIt-i-7", 
      tokens: ["He", "thought", "it", "dangerous", "to", "swim", "in", "the", "river", "alone."], 
      targetIndices: [4, 5, 6, 7, 8, 9], 
      targetRole: "O (真目的語)", 
      hint: "【中級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼はその川で一人で泳ぐのは危険だと思った。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-i-8", 
      tokens: ["She", "felt", "it", "her", "duty", "to", "tell", "the", "truth."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "O (真目的語)", 
      hint: "【中級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼女は真実を話すことが自分の義務だと感じた。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-i-9", 
      tokens: ["I", "found", "it", "hard", "to", "keep", "up", "with", "the", "class."], 
      targetIndices: [4, 5, 6, 7, 8, 9], 
      targetRole: "O (真目的語)", 
      hint: "【中級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私はその授業についていくのが大変だとわかった。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-i-10", 
      tokens: ["The", "teacher", "made", "it", "clear", "that", "the", "exam", "was", "canceled."], 
      targetIndices: [5, 6, 7, 8, 9], 
      targetRole: "O (真目的語)", 
      hint: "【中級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "先生は試験が中止されたことを明らかにした。", 
      modifiedIndices: [3] 
    },
    { 
      id: "objIt-i-11", 
      tokens: ["We", "consider", "it", "important", "to", "respect", "other", "cultures."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "O (真目的語)", 
      hint: "【中級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私たちは他の文化を尊重することが重要だと考えている。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-i-12", 
      tokens: ["He", "made", "it", "known", "that", "he", "would", "resign."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "O (真目的語)", 
      hint: "【中級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼は自分が辞任することを公にした。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-i-13", 
      tokens: ["I", "found", "it", "exciting", "to", "travel", "around", "the", "world."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "O (真目的語)", 
      hint: "【中級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私は世界中を旅するのが刺激的だとわかった。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-i-14", 
      tokens: ["They", "thought", "it", "wise", "to", "accept", "the", "offer."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "O (真目的語)", 
      hint: "【中級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼らはその申し出を受け入れるのが賢明だと思った。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-i-15", 
      tokens: ["The", "internet", "makes", "it", "easy", "to", "get", "information."], 
      targetIndices: [5, 6, 7], 
      targetRole: "O (真目的語)", 
      hint: "【中級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "インターネットのおかげで情報を得るのが簡単になる。", 
      modifiedIndices: [3] 
    },
    { 
      id: "objIt-a-1", 
      tokens: ["I", "took", "it", "for", "granted", "that", "you", "would", "understand", "my", "situation."], 
      targetIndices: [5, 6, 7, 8, 9, 10], 
      targetRole: "O (真目的語)", 
      hint: "【上級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私はあなたが私の状況を理解してくれるのを当然だと思っていた。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-a-2", 
      tokens: ["The", "rapid", "spread", "of", "the", "disease", "made", "it", "necessary", "to", "take", "immediate", "action."], 
      targetIndices: [9, 10, 11, 12], 
      targetRole: "O (真目的語)", 
      hint: "【上級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "その病気の急速な蔓延により、即座の行動をとることが必要になった。", 
      modifiedIndices: [7] 
    },
    { 
      id: "objIt-a-3", 
      tokens: ["He", "makes", "it", "a", "point", "to", "read", "at", "least", "one", "book", "a", "week."], 
      targetIndices: [5, 6, 7, 8, 9, 10, 11, 12], 
      targetRole: "O (真目的語)", 
      hint: "【上級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼は少なくとも1週間に1冊は本を読むようにしている。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-a-4", 
      tokens: ["I", "thought", "it", "a", "pity", "that", "she", "had", "to", "leave", "so", "early."], 
      targetIndices: [5, 6, 7, 8, 9, 10, 11], 
      targetRole: "O (真目的語)", 
      hint: "【上級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私は彼女がそんなに早く出発しなければならないのを残念に思った。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-a-5", 
      tokens: ["Modern", "technology", "has", "made", "it", "possible", "for", "us", "to", "communicate", "globally."], 
      targetIndices: [6, 7, 8, 9, 10], 
      targetRole: "O (真目的語)", 
      hint: "【上級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "現代のテクノロジーにより、私たちが地球規模でコミュニケーションをとることが可能になった。", 
      modifiedIndices: [4] 
    },
    { 
      id: "objIt-a-6", 
      tokens: ["They", "found", "it", "hard", "to", "believe", "that", "he", "had", "stolen", "the", "money."], 
      targetIndices: [4, 5, 6, 7, 8, 9, 10, 11], 
      targetRole: "O (真目的語)", 
      hint: "【上級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼らは、彼がそのお金を盗んだということを信じるのが難しいとわかった。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-a-7", 
      tokens: ["The", "new", "law", "will", "make", "it", "illegal", "to", "smoke", "in", "public", "places."], 
      targetIndices: [7, 8, 9, 10, 11], 
      targetRole: "O (真目的語)", 
      hint: "【上級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "その新しい法律により、公共の場所でタバコを吸うことは違法になるだろう。", 
      modifiedIndices: [5] 
    },
    { 
      id: "objIt-a-8", 
      tokens: ["I", "consider", "it", "highly", "unlikely", "that", "he", "will", "change", "his", "mind", "now."], 
      targetIndices: [5, 6, 7, 8, 9, 10, 11], 
      targetRole: "O (真目的語)", 
      hint: "【上級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私は彼が今になって心変わりする可能性は極めて低いと考えている。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-a-9", 
      tokens: ["She", "found", "it", "challenging", "to", "balance", "her", "career", "and", "family", "life."], 
      targetIndices: [4, 5, 6, 7, 8, 9, 10], 
      targetRole: "O (真目的語)", 
      hint: "【上級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼女は自分のキャリアと家庭生活を両立させるのが難しいとわかった。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-a-10", 
      tokens: ["The", "heavy", "rain", "made", "it", "difficult", "for", "the", "rescue", "team", "to", "reach", "the", "village."], 
      targetIndices: [6, 7, 8, 9, 10, 11, 12, 13], 
      targetRole: "O (真目的語)", 
      hint: "【上級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "激しい雨のため、救助隊がその村に到達するのは困難になった。", 
      modifiedIndices: [4] 
    },
    { 
      id: "objIt-a-11", 
      tokens: ["He", "sees", "to", "it", "that", "all", "the", "doors", "are", "locked", "before", "going", "to", "bed."], 
      targetIndices: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 
      targetRole: "O (真目的語)", 
      hint: "【上級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼は寝る前に必ずすべてのドアに鍵がかかっているように取り計らう。", 
      modifiedIndices: [3] 
    },
    { 
      id: "objIt-a-12", 
      tokens: ["I", "owe", "it", "to", "my", "parents", "that", "I", "was", "able", "to", "graduate", "from", "college."], 
      targetIndices: [6, 7, 8, 9, 10, 11, 12, 13], 
      targetRole: "O (真目的語)", 
      hint: "【上級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "私が大学を卒業できたのは両親のおかげだ。", 
      modifiedIndices: [2] 
    },
    { 
      id: "objIt-a-13", 
      tokens: ["You", "must", "keep", "it", "in", "mind", "that", "smoking", "is", "harmful", "to", "your", "health."], 
      targetIndices: [6, 7, 8, 9, 10, 11, 12], 
      targetRole: "O (真目的語)", 
      hint: "【上級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "あなたは喫煙が健康に有害であることを心に留めておかなければならない。", 
      modifiedIndices: [3] 
    },
    { 
      id: "objIt-a-14", 
      tokens: ["The", "company", "considers", "it", "essential", "to", "invest", "in", "new", "technologies."], 
      targetIndices: [5, 6, 7, 8, 9], 
      targetRole: "O (真目的語)", 
      hint: "【上級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "その会社は新しい技術に投資することが不可欠だと考えている。", 
      modifiedIndices: [3] 
    },
    { 
      id: "objIt-a-15", 
      tokens: ["I", "think", "it", "no", "use", "trying", "to", "persuade", "him", "to", "change", "his", "plan."], 
      targetIndices: [5, 6, 7, 8, 9, 10, 11, 12], 
      targetRole: "O (真目的語)", 
      hint: "【上級】光っている形式目的語(it)が指し示す『真の目的語（O）』の塊をなぞってください。", 
      translation: "彼を説得して計画を変更させようとしても無駄だと思う。", 
      modifiedIndices: [2] 
    }
  ]
};