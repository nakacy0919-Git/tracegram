export const compCausativeCategory = {
  categoryId: "compCausative",
  title: "Sub-3: 知覚・使役動詞の補語",
  description: "Oの後にくる 原形不定詞 や 分詞(ing/ed)",
  problems: [
    { 
      id: "compCausative-b-1", 
      tokens: ["I", "made", "him", "cry."], 
      targetIndices: [3], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【初級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私は彼を泣かせた。", 
      modifiedIndices: [2],
      grammarPoints: ["causative_verb", "infinitive"] 
    },
    { 
      id: "compCausative-b-2", 
      tokens: ["She", "let", "me", "go."], 
      targetIndices: [3], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【初級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼女は私を行かせてくれた。", 
      modifiedIndices: [2],
      grammarPoints: ["causative_verb", "infinitive"] 
    },
    { 
      id: "compCausative-b-3", 
      tokens: ["He", "had", "his", "car", "washed."], 
      targetIndices: [4], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【初級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼は車を洗ってもらった。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["causative_verb", "past_participle"] 
    },
    { 
      id: "compCausative-b-4", 
      tokens: ["I", "saw", "her", "run."], 
      targetIndices: [3], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【初級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私は彼女が走るのを見た。", 
      modifiedIndices: [2],
      grammarPoints: ["perception_verb", "infinitive"] 
    },
    { 
      id: "compCausative-b-5", 
      tokens: ["We", "heard", "him", "sing."], 
      targetIndices: [3], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【初級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私たちは彼が歌うのを聞いた。", 
      modifiedIndices: [2],
      grammarPoints: ["perception_verb", "infinitive"] 
    },
    { 
      id: "compCausative-b-6", 
      tokens: ["I", "felt", "the", "house", "shake."], 
      targetIndices: [4], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【初級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私は家が揺れるのを感じた。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["perception_verb", "infinitive"] 
    },
    { 
      id: "compCausative-b-7", 
      tokens: ["She", "watched", "the", "bird", "fly."], 
      targetIndices: [4], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【初級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼女はその鳥が飛ぶのを見た。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["perception_verb", "infinitive"] 
    },
    { 
      id: "compCausative-b-8", 
      tokens: ["I", "saw", "him", "crying."], 
      targetIndices: [3], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【初級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私は彼が泣いているのを見た。", 
      modifiedIndices: [2],
      grammarPoints: ["perception_verb", "present_participle"] 
    },
    { 
      id: "compCausative-b-9", 
      tokens: ["He", "heard", "his", "name", "called."], 
      targetIndices: [4], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【初級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼は自分の名前が呼ばれるのを聞いた。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["perception_verb", "past_participle"] 
    },
    { 
      id: "compCausative-b-10", 
      tokens: ["My", "mother", "made", "me", "study."], 
      targetIndices: [4], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【初級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "母は私に勉強させた。", 
      modifiedIndices: [3],
      grammarPoints: ["causative_verb", "infinitive"] 
    },
    { 
      id: "compCausative-b-11", 
      tokens: ["He", "let", "the", "dog", "sleep."], 
      targetIndices: [4], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【初級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼はその犬を寝かせておいた。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["causative_verb", "infinitive"] 
    },
    { 
      id: "compCausative-b-12", 
      tokens: ["I", "had", "my", "hair", "cut."], 
      targetIndices: [4], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【初級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私は髪を切ってもらった。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["causative_verb", "past_participle"] 
    },
    { 
      id: "compCausative-b-13", 
      tokens: ["She", "felt", "her", "heart", "beating."], 
      targetIndices: [4], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【初級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼女は自分の心臓が鼓動しているのを感じた。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["perception_verb", "present_participle"] 
    },
    { 
      id: "compCausative-b-14", 
      tokens: ["They", "watched", "the", "sun", "rise."], 
      targetIndices: [4], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【初級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼らは太陽が昇るのを見た。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["perception_verb", "infinitive"] 
    },
    { 
      id: "compCausative-b-15", 
      tokens: ["I", "noticed", "him", "leave."], 
      targetIndices: [3], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【初級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私は彼が立ち去るのに気づいた。", 
      modifiedIndices: [2],
      grammarPoints: ["perception_verb", "infinitive"] 
    },
    { 
      id: "compCausative-i-1", 
      tokens: ["The", "teacher", "made", "the", "students", "clean", "the", "room."], 
      targetIndices: [5, 6, 7], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【中級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "先生は生徒たちに部屋の掃除をさせた。", 
      modifiedIndices: [3, 4],
      grammarPoints: ["causative_verb", "infinitive"] 
    },
    { 
      id: "compCausative-i-2", 
      tokens: ["I", "heard", "someone", "playing", "the", "piano", "in", "the", "next", "room."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【中級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私は隣の部屋で誰かがピアノを弾いているのを聞いた。", 
      modifiedIndices: [2],
      grammarPoints: ["perception_verb", "present_participle"] 
    },
    { 
      id: "compCausative-i-3", 
      tokens: ["She", "had", "her", "bag", "stolen", "on", "the", "train."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【中級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼女は電車でカバンを盗まれた。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["causative_verb", "past_participle"] 
    },
    { 
      id: "compCausative-i-4", 
      tokens: ["My", "parents", "won't", "let", "me", "travel", "alone."], 
      targetIndices: [5, 6], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【中級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "両親は私を一人で旅行させてくれないだろう。", 
      modifiedIndices: [4],
      grammarPoints: ["causative_verb", "infinitive"] 
    },
    { 
      id: "compCausative-i-5", 
      tokens: ["We", "saw", "a", "police", "officer", "running", "after", "the", "thief."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【中級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私たちは警察官が泥棒を追いかけて走っているのを見た。", 
      modifiedIndices: [2, 3, 4],
      grammarPoints: ["perception_verb", "present_participle"] 
    },
    { 
      id: "compCausative-i-6", 
      tokens: ["He", "couldn't", "make", "his", "voice", "heard", "in", "the", "crowd."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【中級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼は人ごみの中で自分の声を届かせることができなかった。", 
      modifiedIndices: [3, 4],
      grammarPoints: ["causative_verb", "past_participle"] 
    },
    { 
      id: "compCausative-i-7", 
      tokens: ["I", "felt", "something", "touching", "my", "shoulder", "in", "the", "dark."], 
      targetIndices: [3, 4, 5, 6, 7, 8], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【中級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私は暗闇で何かが私の肩に触れるのを感じた。", 
      modifiedIndices: [2],
      grammarPoints: ["perception_verb", "present_participle"] 
    },
    { 
      id: "compCausative-i-8", 
      tokens: ["She", "watched", "the", "children", "playing", "in", "the", "park."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【中級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼女は子どもたちが公園で遊んでいるのを見た。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["perception_verb", "present_participle"] 
    },
    { 
      id: "compCausative-i-9", 
      tokens: ["I", "will", "have", "my", "computer", "fixed", "by", "tomorrow."], 
      targetIndices: [5, 6, 7], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【中級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私は明日までにコンピューターを修理してもらうつもりだ。", 
      modifiedIndices: [3, 4],
      grammarPoints: ["causative_verb", "past_participle"] 
    },
    { 
      id: "compCausative-i-10", 
      tokens: ["The", "funny", "joke", "made", "everyone", "laugh", "out", "loud."], 
      targetIndices: [5, 6, 7], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【中級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "その面白い冗談は全員を大声で笑わせた。", 
      modifiedIndices: [4],
      grammarPoints: ["causative_verb", "infinitive"] 
    },
    { 
      id: "compCausative-i-11", 
      tokens: ["He", "noticed", "a", "stranger", "standing", "near", "the", "door."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【中級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼は見知らぬ人がドアの近くに立っているのに気づいた。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["perception_verb", "present_participle"] 
    },
    { 
      id: "compCausative-i-12", 
      tokens: ["I", "heard", "my", "name", "called", "from", "behind."], 
      targetIndices: [4, 5, 6], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【中級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私は後ろから自分の名前が呼ばれるのを聞いた。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["perception_verb", "past_participle"] 
    },
    { 
      id: "compCausative-i-13", 
      tokens: ["Please", "let", "me", "know", "your", "new", "address."], 
      targetIndices: [3, 4, 5, 6], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【中級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "あなたの新しい住所を私に知らせてください。", 
      modifiedIndices: [2],
      grammarPoints: ["causative_verb", "infinitive"] 
    },
    { 
      id: "compCausative-i-14", 
      tokens: ["She", "saw", "the", "man", "taking", "a", "picture."], 
      targetIndices: [4, 5, 6], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【中級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼女はその男が写真を撮っているのを見た。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["perception_verb", "present_participle"] 
    },
    { 
      id: "compCausative-i-15", 
      tokens: ["I", "felt", "the", "cold", "wind", "blowing", "through", "the", "window."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【中級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私は冷たい風が窓から吹き込んでくるのを感じた。", 
      modifiedIndices: [2, 3, 4],
      grammarPoints: ["perception_verb", "present_participle"] 
    },
    { 
      id: "compCausative-a-1", 
      tokens: ["You", "must", "make", "yourself", "understood", "in", "English."], 
      targetIndices: [4, 5, 6], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【上級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "あなたは英語で自分を理解させなければならない。", 
      modifiedIndices: [3],
      grammarPoints: ["causative_verb", "past_participle"] 
    },
    { 
      id: "compCausative-a-2", 
      tokens: ["I", "saw", "a", "large", "building", "being", "torn", "down", "yesterday."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【上級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私は昨日、大きな建物が取り壊されているところを見た。", 
      modifiedIndices: [2, 3, 4],
      grammarPoints: ["perception_verb", "present_participle", "past_participle"] 
    },
    { 
      id: "compCausative-a-3", 
      tokens: ["The", "manager", "had", "the", "documents", "copied", "before", "the", "meeting", "started."], 
      targetIndices: [5, 6, 7, 8, 9], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【上級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "マネージャーは会議が始まる前にその書類をコピーさせた。", 
      modifiedIndices: [3, 4],
      grammarPoints: ["causative_verb", "past_participle"] 
    },
    { 
      id: "compCausative-a-4", 
      tokens: ["She", "felt", "the", "tears", "running", "down", "her", "cheeks."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【上級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼女は涙が頬を伝って流れるのを感じた。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["perception_verb", "present_participle"] 
    },
    { 
      id: "compCausative-a-5", 
      tokens: ["He", "let", "his", "imagination", "run", "wild", "while", "writing", "the", "story."], 
      targetIndices: [4, 5, 6, 7, 8, 9], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【上級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼はその物語を書いている間、想像力を自由奔放に働かせた。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["causative_verb", "infinitive"] 
    },
    { 
      id: "compCausative-a-6", 
      tokens: ["I", "accidentally", "heard", "them", "talking", "about", "the", "secret", "plan."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【上級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私は彼らがその秘密の計画について話しているのを偶然聞いてしまった。", 
      modifiedIndices: [3],
      grammarPoints: ["perception_verb", "present_participle"] 
    },
    { 
      id: "compCausative-a-7", 
      tokens: ["The", "mother", "watched", "her", "son", "perform", "on", "the", "big", "stage."], 
      targetIndices: [5, 6, 7, 8, 9], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【上級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "母親は息子が大きなステージで演技するのを見守った。", 
      modifiedIndices: [3, 4],
      grammarPoints: ["perception_verb", "infinitive"] 
    },
    { 
      id: "compCausative-a-8", 
      tokens: ["We", "had", "our", "roof", "blown", "off", "by", "the", "strong", "typhoon."], 
      targetIndices: [4, 5, 6, 7, 8, 9], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【上級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私たちは強い台風によって屋根を吹き飛ばされた。", 
      modifiedIndices: [2, 3],
      grammarPoints: ["causative_verb", "past_participle"] 
    },
    { 
      id: "compCausative-a-9", 
      tokens: ["Have", "you", "ever", "seen", "such", "a", "beautiful", "star", "falling", "from", "the", "sky?"], 
      targetIndices: [8, 9, 10, 11], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【上級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "あなたはこれまでにそんな美しい星が空から落ちてくるのを見たことがありますか。", 
      modifiedIndices: [4, 5, 6, 7],
      grammarPoints: ["perception_verb", "present_participle"] 
    },
    { 
      id: "compCausative-a-10", 
      tokens: ["The", "funny", "comedian", "made", "the", "whole", "audience", "burst", "into", "laughter."], 
      targetIndices: [7, 8, 9], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【上級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "その面白いコメディアンは観客全体を爆笑させた。", 
      modifiedIndices: [4, 5, 6],
      grammarPoints: ["causative_verb", "infinitive"] 
    },
    { 
      id: "compCausative-a-11", 
      tokens: ["I", "could", "feel", "my", "heart", "beating", "fast", "with", "excitement."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【上級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私は興奮で自分の心臓が激しく鼓動しているのを感じることができた。", 
      modifiedIndices: [3, 4],
      grammarPoints: ["perception_verb", "present_participle"] 
    },
    { 
      id: "compCausative-a-12", 
      tokens: ["They", "noticed", "the", "locked", "door", "slightly", "opened", "by", "someone."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【上級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼らは鍵のかかったドアが誰かによってわずかに開けられていることに気づいた。", 
      modifiedIndices: [2, 3, 4],
      grammarPoints: ["perception_verb", "past_participle"] 
    },
    { 
      id: "compCausative-a-13", 
      tokens: ["Please", "let", "me", "explain", "the", "real", "reason", "for", "my", "absence."], 
      targetIndices: [3, 4, 5, 6, 7, 8, 9], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【上級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私の欠席の本当の理由を説明させてください。", 
      modifiedIndices: [2],
      grammarPoints: ["causative_verb", "infinitive"] 
    },
    { 
      id: "compCausative-a-14", 
      tokens: ["I", "have", "never", "heard", "that", "song", "sung", "in", "French", "before."], 
      targetIndices: [6, 7, 8, 9], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【上級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "私はその歌がフランス語で歌われるのを以前に聞いたことがない。", 
      modifiedIndices: [4, 5],
      grammarPoints: ["perception_verb", "past_participle"] 
    },
    { 
      id: "compCausative-a-15", 
      tokens: ["He", "could", "not", "make", "himself", "heard", "above", "the", "loud", "noise", "of", "the", "engine."], 
      targetIndices: [5, 6, 7, 8, 9, 10, 11, 12], 
      targetRole: "C (原形不定詞 / 分詞)", 
      hint: "【上級】光っている目的語（O）の動作や状態を表す補語（C：原形不定詞や分詞）をなぞってください。", 
      translation: "彼はエンジンの大きな音にかき消されて、自分の声を届かせることができなかった。", 
      modifiedIndices: [4],
      grammarPoints: ["causative_verb", "past_participle"] 
    }
  ]
};