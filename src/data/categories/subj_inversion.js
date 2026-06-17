export const subjInversionCategory = {
  categoryId: "subjInversion",
  title: "Sub-5: 倒置・無生物主語",
  description: "文頭のMに惑わされず、後ろに隠れたSを見つける特訓",
problems: [
    { 
      id: "subjInversion-b-1", 
      tokens: ["There", "is", "a", "book", "on", "the", "desk."], 
      targetIndices: [2, 3], 
      targetRole: "S (倒置された主語)", 
      hint: "【初級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "机の上に本があります。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-b-2", 
      tokens: ["Here", "comes", "the", "bus."], 
      targetIndices: [2, 3], 
      targetRole: "S (倒置された主語)", 
      hint: "【初級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "バスが来ましたよ。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-b-3", 
      tokens: ["There", "are", "many", "parks", "in", "this", "city."], 
      targetIndices: [2, 3], 
      targetRole: "S (倒置された主語)", 
      hint: "【初級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "この都市にはたくさんの公園があります。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-b-4", 
      tokens: ["Here", "is", "your", "bag."], 
      targetIndices: [2, 3], 
      targetRole: "S (倒置された主語)", 
      hint: "【初級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "あなたのカバンはここにあります。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-b-5", 
      tokens: ["On", "the", "table", "is", "an", "apple."], 
      targetIndices: [4, 5], 
      targetRole: "S (倒置された主語)", 
      hint: "【初級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "テーブルの上にリンゴがあります。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-b-6", 
      tokens: ["Under", "the", "tree", "sits", "a", "boy."], 
      targetIndices: [4, 5], 
      targetRole: "S (倒置された主語)", 
      hint: "【初級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "木の下に男の子が座っています。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-b-7", 
      tokens: ["There", "lived", "an", "old", "man."], 
      targetIndices: [2, 3, 4], 
      targetRole: "S (倒置された主語)", 
      hint: "【初級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "ある老人が住んでいました。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-b-8", 
      tokens: ["Here", "are", "some", "apples."], 
      targetIndices: [2, 3], 
      targetRole: "S (倒置された主語)", 
      hint: "【初級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "ここにいくつかのリンゴがあります。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-b-9", 
      tokens: ["In", "the", "box", "is", "a", "cat."], 
      targetIndices: [4, 5], 
      targetRole: "S (倒置された主語)", 
      hint: "【初級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "箱の中に猫がいます。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-b-10", 
      tokens: ["There", "goes", "our", "train."], 
      targetIndices: [2, 3], 
      targetRole: "S (倒置された主語)", 
      hint: "【初級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "私たちの電車が行ってしまいます。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-b-11", 
      tokens: ["On", "the", "wall", "hangs", "a", "picture."], 
      targetIndices: [4, 5], 
      targetRole: "S (倒置された主語)", 
      hint: "【初級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "壁に絵が掛かっています。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-b-12", 
      tokens: ["Here", "comes", "my", "father."], 
      targetIndices: [2, 3], 
      targetRole: "S (倒置された主語)", 
      hint: "【初級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "父が来ましたよ。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-b-13", 
      tokens: ["There", "was", "a", "king", "in", "the", "country."], 
      targetIndices: [2, 3], 
      targetRole: "S (倒置された主語)", 
      hint: "【初級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "その国には王様がいました。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-b-14", 
      tokens: ["By", "the", "door", "stood", "a", "girl."], 
      targetIndices: [4, 5], 
      targetRole: "S (倒置された主語)", 
      hint: "【初級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "ドアのそばに少女が立っていました。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-b-15", 
      tokens: ["Here", "is", "the", "menu."], 
      targetIndices: [2, 3], 
      targetRole: "S (倒置された主語)", 
      hint: "【初級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "こちらがメニューです。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-i-1", 
      tokens: ["In", "the", "middle", "of", "the", "room", "stood", "a", "large", "table."], 
      targetIndices: [7, 8, 9], 
      targetRole: "S (倒置された主語)", 
      hint: "【中級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "部屋の真ん中に大きなテーブルが置かれていました。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-i-2", 
      tokens: ["On", "the", "top", "of", "the", "hill", "is", "an", "old", "castle."], 
      targetIndices: [7, 8, 9], 
      targetRole: "S (倒置された主語)", 
      hint: "【中級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "丘の頂上には古い城があります。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-i-3", 
      tokens: ["Happy", "is", "the", "man", "who", "finds", "wisdom."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "S (倒置された主語)", 
      hint: "【中級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "知恵を見つける人は幸せである。", 
      modifiedIndices: [],
      grammarPoints: ["inversion", "relative_pronoun"] 
    },
    { 
      id: "subjInversion-i-4", 
      tokens: ["Among", "the", "guests", "was", "a", "famous", "writer."], 
      targetIndices: [4, 5, 6], 
      targetRole: "S (倒置された主語)", 
      hint: "【中級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "客の中には有名な作家がいました。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-i-5", 
      tokens: ["Down", "the", "street", "ran", "a", "little", "dog."], 
      targetIndices: [4, 5, 6], 
      targetRole: "S (倒置された主語)", 
      hint: "【中級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "通りを小さな犬が走っていきました。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-i-6", 
      tokens: ["Through", "the", "window", "came", "a", "cold", "wind."], 
      targetIndices: [4, 5, 6], 
      targetRole: "S (倒置された主語)", 
      hint: "【中級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "窓から冷たい風が入ってきました。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-i-7", 
      tokens: ["In", "front", "of", "the", "station", "is", "a", "big", "statue."], 
      targetIndices: [6, 7, 8], 
      targetRole: "S (倒置された主語)", 
      hint: "【中級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "駅の前には大きな銅像があります。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-i-8", 
      tokens: ["Attached", "to", "this", "email", "is", "the", "document."], 
      targetIndices: [5, 6], 
      targetRole: "S (倒置された主語)", 
      hint: "【中級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "このメールに添付されているのがその書類です。", 
      modifiedIndices: [],
      grammarPoints: ["inversion", "past_participle"] 
    },
    { 
      id: "subjInversion-i-9", 
      tokens: ["Hidden", "in", "the", "forest", "was", "a", "secret", "base."], 
      targetIndices: [5, 6, 7], 
      targetRole: "S (倒置された主語)", 
      hint: "【中級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "森の中に秘密基地が隠されていました。", 
      modifiedIndices: [],
      grammarPoints: ["inversion", "past_participle"] 
    },
    { 
      id: "subjInversion-i-10", 
      tokens: ["Beautiful", "is", "the", "view", "from", "the", "window."], 
      targetIndices: [2, 3, 4, 5, 6], 
      targetRole: "S (倒置された主語)", 
      hint: "【中級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "窓からの景色は美しい。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-i-11", 
      tokens: ["Out", "of", "the", "building", "came", "a", "lot", "of", "people."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "S (倒置された主語)", 
      hint: "【中級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "建物からたくさんの人々が出てきました。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-i-12", 
      tokens: ["Beside", "the", "bed", "lay", "a", "thick", "book."], 
      targetIndices: [4, 5, 6], 
      targetRole: "S (倒置された主語)", 
      hint: "【中級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "ベッドのそばに分厚い本が置かれていました。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-i-13", 
      tokens: ["On", "the", "wall", "were", "several", "famous", "paintings."], 
      targetIndices: [4, 5, 6], 
      targetRole: "S (倒置された主語)", 
      hint: "【中級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "壁にはいくつかの有名な絵画が掛かっていました。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-i-14", 
      tokens: ["Great", "was", "his", "surprise", "when", "he", "heard", "the", "news."], 
      targetIndices: [2, 3], 
      targetRole: "S (倒置された主語)", 
      hint: "【中級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "彼がその知らせを聞いたときの驚きは大きかった。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-i-15", 
      tokens: ["Just", "behind", "me", "stood", "my", "teacher."], 
      targetIndices: [4, 5], 
      targetRole: "S (倒置された主語)", 
      hint: "【中級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "私のすぐ後ろに先生が立っていました。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-a-1", 
      tokens: ["Never", "have", "I", "seen", "such", "a", "beautiful", "sunset."], 
      targetIndices: [2], 
      targetRole: "S (倒置された主語)", 
      hint: "【上級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "こんなに美しい夕日を見たことは一度もない。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-a-2", 
      tokens: ["Not", "only", "did", "he", "study", "hard,", "but", "also", "he", "played", "well."], 
      targetIndices: [3], 
      targetRole: "S (倒置された主語)", 
      hint: "【上級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "彼は一生懸命勉強しただけでなく、よく遊んだ。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-a-3", 
      tokens: ["Little", "did", "she", "know", "about", "the", "plan."], 
      targetIndices: [2], 
      targetRole: "S (倒置された主語)", 
      hint: "【上級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "彼女はその計画についてほとんど知らなかった。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-a-4", 
      tokens: ["Only", "then", "did", "I", "realize", "my", "mistake."], 
      targetIndices: [3], 
      targetRole: "S (倒置された主語)", 
      hint: "【上級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "その時になって初めて私は自分の間違いに気づいた。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-a-5", 
      tokens: ["Hardly", "had", "I", "left", "home", "when", "it", "began", "to", "rain."], 
      targetIndices: [2], 
      targetRole: "S (倒置された主語)", 
      hint: "【上級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "私が家を出るか出ないかのうちに雨が降り始めた。", 
      modifiedIndices: [],
      grammarPoints: ["inversion", "infinitive"] 
    },
    { 
      id: "subjInversion-a-6", 
      tokens: ["So", "busy", "is", "he", "that", "he", "cannot", "watch", "TV."], 
      targetIndices: [3], 
      targetRole: "S (倒置された主語)", 
      hint: "【上級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "彼はとても忙しいのでテレビを見ることができない。", 
      modifiedIndices: [],
      grammarPoints: ["inversion", "that_clause"] 
    },
    { 
      id: "subjInversion-a-7", 
      tokens: ["Such", "was", "her", "shock", "that", "she", "couldn't", "speak."], 
      targetIndices: [2, 3], 
      targetRole: "S (倒置された主語)", 
      hint: "【上級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "彼女のショックはとても大きく、話すことができなかった。", 
      modifiedIndices: [],
      grammarPoints: ["inversion", "that_clause"] 
    },
    { 
      id: "subjInversion-a-8", 
      tokens: ["Nowhere", "could", "we", "find", "the", "missing", "key."], 
      targetIndices: [2], 
      targetRole: "S (倒置された主語)", 
      hint: "【上級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "なくなった鍵はどこにも見つからなかった。", 
      modifiedIndices: [],
      grammarPoints: ["inversion", "present_participle"] 
    },
    { 
      id: "subjInversion-a-9", 
      tokens: ["No", "sooner", "had", "she", "arrived", "than", "the", "phone", "rang."], 
      targetIndices: [3], 
      targetRole: "S (倒置された主語)", 
      hint: "【上級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "彼女が到着するやいなや電話が鳴った。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-a-10", 
      tokens: ["Under", "no", "circumstances", "should", "you", "open", "this", "door."], 
      targetIndices: [4], 
      targetRole: "S (倒置された主語)", 
      hint: "【上級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "いかなる状況でもこのドアを開けてはならない。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-a-11", 
      tokens: ["Well", "do", "I", "remember", "the", "day", "we", "met."], 
      targetIndices: [2], 
      targetRole: "S (倒置された主語)", 
      hint: "【上級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "私たちが会った日のことを私はよく覚えている。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-a-12", 
      tokens: ["Not", "until", "yesterday", "did", "he", "tell", "me", "the", "truth."], 
      targetIndices: [4], 
      targetRole: "S (倒置された主語)", 
      hint: "【上級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "昨日になって初めて彼は私に真実を話した。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-a-13", 
      tokens: ["So", "suddenly", "did", "the", "accident", "happen", "that", "no", "one", "could", "avoid", "it."], 
      targetIndices: [3, 4], 
      targetRole: "S (倒置された主語)", 
      hint: "【上級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "その事故はとても突然起きたので、誰も避けることができなかった。", 
      modifiedIndices: [],
      grammarPoints: ["inversion", "that_clause"] 
    },
    { 
      id: "subjInversion-a-14", 
      tokens: ["Rarely", "do", "we", "see", "such", "a", "large", "bird."], 
      targetIndices: [2], 
      targetRole: "S (倒置された主語)", 
      hint: "【上級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "私たちはそんなに大きな鳥をめったに見ない。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "subjInversion-a-15", 
      tokens: ["Seldom", "has", "he", "been", "late", "for", "school."], 
      targetIndices: [2], 
      targetRole: "S (倒置された主語)", 
      hint: "【上級】文頭の修飾語や動詞の後ろに隠れている、この文の本当の主語（S）をなぞってください。", 
      translation: "彼はめったに学校に遅刻したことがない。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    }
  ]
};