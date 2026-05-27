export const verbCategory = {
  categoryId: "verb",
  title: "動詞（Verb）ハンター",
  description: "文の結論となる「述語動詞（V）」を正確に見抜くトレーニング。分詞や関係詞に騙されないように！",
  problems: [
    { id: "v-1", tokens: ["The", "boy", "playing", "baseball", "in", "the", "park", "is", "my", "brother."], targetIndices: [7], targetRole: "V (述語動詞)", hint: "この文の本当の述語動詞（V）をなぞってください。", translation: "公園で野球をしている少年は私の弟だ。", modifiedIndices: [] },
    { id: "v-2", tokens: ["The", "book", "written", "in", "easy", "English", "sold", "millions", "of", "copies."], targetIndices: [6], targetRole: "V (述語動詞)", hint: "この文の述語動詞（V）をなぞってください。（過去分詞に騙されないで！）", translation: "簡単な英語で書かれたその本は、何百万部も売れた。", modifiedIndices: [] },
    { id: "v-3", tokens: ["My", "father", "has", "been", "working", "for", "this", "company", "for", "20", "years."], targetIndices: [2, 3, 4], targetRole: "V (述語動詞)", hint: "この文の述語動詞（V）の塊をすべてなぞってください。（完了進行形）", translation: "私の父は20年間この会社で働いている。", modifiedIndices: [] },
    { id: "v-4", tokens: ["He", "may", "have", "forgotten", "the", "promise", "he", "made", "last", "week."], targetIndices: [1, 2, 3], targetRole: "V (述語動詞)", hint: "助動詞＋完了形で作られる述語動詞（V）の塊をなぞってください。", translation: "彼は先週した約束を忘れてしまったのかもしれない。", modifiedIndices: [] },
    { id: "v-5", tokens: ["The", "bridge", "was", "destroyed", "by", "the", "typhoon", "last", "night."], targetIndices: [2, 3], targetRole: "V (述語動詞)", hint: "受動態の述語動詞（V）の塊をなぞってください。", translation: "その橋は昨夜の台風で破壊された。", modifiedIndices: [] },
    { id: "v-6", tokens: ["The", "girl", "injured", "in", "the", "accident", "was", "taken", "to", "the", "hospital."], targetIndices: [6, 7], targetRole: "V (述語動詞)", hint: "この文の本当の述語動詞（V）の塊をなぞってください。", translation: "事故で負傷した少女は病院へ運ばれた。", modifiedIndices: [] },
    { id: "v-7", tokens: ["He", "did", "not", "know", "how", "to", "swim."], targetIndices: [1, 2, 3], targetRole: "V (述語動詞)", hint: "否定語を含む述語動詞（V）の塊をすべてなぞってください。", translation: "彼は泳ぎ方を知らなかった。", modifiedIndices: [] },
    { id: "v-8", tokens: ["They", "should", "have", "arrived", "by", "now."], targetIndices: [1, 2, 3], targetRole: "V (述語動詞)", hint: "助動詞＋完了形の述語動詞（V）の塊をすべてなぞってください。", translation: "彼らは今頃は到着しているはずだ。", modifiedIndices: [] },
    { id: "v-9", tokens: ["The", "new", "product", "will", "be", "released", "next", "month."], targetIndices: [3, 4, 5], targetRole: "V (述語動詞)", hint: "未来の受動態の述語動詞（V）の塊をすべてなぞってください。", translation: "新製品は来月発売される予定だ。", modifiedIndices: [] },
    { id: "v-10", tokens: ["I", "used", "to", "play", "tennis", "when", "I", "was", "young."], targetIndices: [1, 2, 3], targetRole: "V (述語動詞)", hint: "助動詞表現(used to)を含む述語動詞（V）の塊をなぞってください。", translation: "私は若い頃、よくテニスをしたものだ。", modifiedIndices: [] },
    { id: "v-11", tokens: ["She", "is", "always", "complaining", "about", "her", "job."], targetIndices: [1, 2, 3], targetRole: "V (述語動詞)", hint: "副詞(always)を挟んだ進行形の述語動詞（V）の塊をなぞってください。", translation: "彼女はいつも仕事の愚痴ばかり言っている。", modifiedIndices: [] },
    { id: "v-12", tokens: ["The", "train", "had", "already", "left", "when", "I", "reached", "the", "station."], targetIndices: [2, 3, 4], targetRole: "V (述語動詞)", hint: "副詞(already)を挟んだ過去完了形の述語動詞（V）の塊をなぞってください。", translation: "私が駅に着いた時、電車はすでに発車していた。", modifiedIndices: [] },
    { id: "v-13", tokens: ["He", "seems", "to", "be", "a", "good", "doctor."], targetIndices: [1], targetRole: "V (述語動詞)", hint: "この文の述語動詞（V）をなぞってください。", translation: "彼は良い医者であるようだ。", modifiedIndices: [] },
    { id: "v-14", tokens: ["The", "door", "remained", "locked", "all", "day."], targetIndices: [2], targetRole: "V (述語動詞)", hint: "この文の述語動詞（V）をなぞってください。", translation: "そのドアは一日中鍵がかかったままだった。", modifiedIndices: [] },
    { id: "v-15", tokens: ["I", "am", "looking", "forward", "to", "seeing", "you."], targetIndices: [1, 2], targetRole: "V (述語動詞)", hint: "現在進行形の述語動詞（V）の塊をなぞってください。（forwardは副詞）", translation: "あなたにお会いするのを楽しみにしています。", modifiedIndices: [] },
    { id: "v-16", tokens: ["The", "committee", "consists", "of", "ten", "members."], targetIndices: [2], targetRole: "V (述語動詞)", hint: "この文の述語動詞（V）をなぞってください。", translation: "その委員会は10人のメンバーで構成されている。", modifiedIndices: [] },
    { id: "v-17", tokens: ["We", "must", "not", "forget", "this", "tragedy."], targetIndices: [1, 2, 3], targetRole: "V (述語動詞)", hint: "助動詞と否定語を含む述語動詞（V）の塊をなぞってください。", translation: "私たちはこの悲劇を忘れてはならない。", modifiedIndices: [] },
    { id: "v-18", tokens: ["The", "problem", "can", "be", "solved", "easily."], targetIndices: [2, 3, 4], targetRole: "V (述語動詞)", hint: "助動詞＋受動態の述語動詞（V）の塊をなぞってください。", translation: "その問題は簡単に解決できる。", modifiedIndices: [] },
    { id: "v-19", tokens: ["He", "has", "been", "reading", "the", "book", "since", "morning."], targetIndices: [1, 2, 3], targetRole: "V (述語動詞)", hint: "現在完了進行形の述語動詞（V）の塊をなぞってください。", translation: "彼は朝からずっとその本を読んでいる。", modifiedIndices: [] },
    { id: "v-20", tokens: ["I", "do", "think", "you", "are", "right."], targetIndices: [1, 2], targetRole: "V (述語動詞)", hint: "強調のdoを含む述語動詞（V）の塊をなぞってください。", translation: "私は本当にあなたが正しいと思う。", modifiedIndices: [] }
  ]
};