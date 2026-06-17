export const modAdvCategory = {
  categoryId: "modAdv",
  title: "Sub-2: 副詞のカタマリ",
  description: "動詞・文全体を修飾する前置詞句や副詞節",
  problems: [
    { 
      id: "modAdv-b-1", 
      tokens: ["I", "play", "tennis", "in", "the", "park."], 
      targetIndices: [3, 4, 5], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【初級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私は公園でテニスをします。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-b-2", 
      tokens: ["She", "studies", "English", "every", "day."], 
      targetIndices: [3, 4], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【初級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼女は毎日英語を勉強します。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-b-3", 
      tokens: ["He", "got", "up", "at", "six."], 
      targetIndices: [3, 4], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【初級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼は6時に起きました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-b-4", 
      tokens: ["They", "walked", "slowly."], 
      targetIndices: [2], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【初級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼らはゆっくり歩きました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-b-5", 
      tokens: ["I", "live", "in", "Tokyo."], 
      targetIndices: [2, 3], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【初級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私は東京に住んでいます。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-b-6", 
      tokens: ["He", "runs", "very", "fast."], 
      targetIndices: [2, 3], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【初級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼はとても速く走ります。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-b-7", 
      tokens: ["I", "will", "call", "you", "after", "dinner."], 
      targetIndices: [4, 5], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【初級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "夕食後にあなたに電話します。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-b-8", 
      tokens: ["She", "smiled", "at", "me."], 
      targetIndices: [2, 3], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【初級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼女は私に微笑みました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-b-9", 
      tokens: ["He", "studies", "hard", "to", "pass", "the", "exam."], 
      targetIndices: [3, 4, 5, 6], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【初級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼は試験に合格するために一生懸命勉強します。", 
      modifiedIndices: [],
      grammarPoints: ["infinitive"] 
    },
    { 
      id: "modAdv-b-10", 
      tokens: ["I", "stayed", "home", "all", "day."], 
      targetIndices: [3, 4], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【初級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私は一日中家にいました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-b-11", 
      tokens: ["They", "walked", "to", "the", "station."], 
      targetIndices: [2, 3, 4], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【初級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼らは駅まで歩きました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-b-12", 
      tokens: ["We", "talked", "about", "the", "movie."], 
      targetIndices: [2, 3, 4], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【初級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私たちはその映画について話しました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-b-13", 
      tokens: ["She", "cried", "in", "her", "room."], 
      targetIndices: [2, 3, 4], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【初級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼女は自分の部屋で泣きました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-b-14", 
      tokens: ["He", "painted", "the", "wall", "with", "a", "brush."], 
      targetIndices: [4, 5, 6], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【初級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼は筆で壁を塗りました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-b-15", 
      tokens: ["I", "met", "him", "by", "chance."], 
      targetIndices: [3, 4], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【初級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私は偶然彼に会いました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-i-1", 
      tokens: ["When", "I", "was", "a", "child,", "I", "lived", "in", "Kyoto."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【中級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "子どもの頃、私は京都に住んでいました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-i-2", 
      tokens: ["He", "didn't", "go", "to", "school", "because", "he", "was", "sick."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【中級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼は病気だったので学校に行きませんでした。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-i-3", 
      tokens: ["If", "it", "rains", "tomorrow,", "we", "will", "stay", "home."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【中級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "もし明日雨が降れば、私たちは家にいます。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-i-4", 
      tokens: ["She", "was", "reading", "a", "book", "while", "waiting", "for", "the", "bus."], 
      targetIndices: [5, 6, 7, 8, 9], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【中級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼女はバスを待っている間、本を読んでいました。", 
      modifiedIndices: [],
      grammarPoints: ["present_participle"] 
    },
    { 
      id: "modAdv-i-5", 
      tokens: ["Though", "he", "is", "young,", "he", "is", "very", "wise."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【中級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼は若いけれども、とても賢い。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-i-6", 
      tokens: ["You", "can", "go", "home", "after", "you", "finish", "your", "work."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【中級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "仕事が終わった後、あなたは家に帰っていいですよ。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-i-7", 
      tokens: ["I", "will", "wait", "here", "until", "she", "comes", "back."], 
      targetIndices: [4, 5, 6, 7], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【中級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼女が戻ってくるまで、私はここで待ちます。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-i-8", 
      tokens: ["As", "soon", "as", "he", "arrived,", "it", "started", "to", "rain."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【中級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼が到着するとすぐに、雨が降り始めました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-i-9", 
      tokens: ["Since", "I", "have", "no", "money,", "I", "can't", "buy", "it."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【中級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私にはお金がないので、それを買うことができません。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-i-10", 
      tokens: ["He", "worked", "hard", "so", "that", "he", "could", "succeed."], 
      targetIndices: [3, 4, 5, 6, 7], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【中級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼は成功できるように一生懸命働きました。", 
      modifiedIndices: [],
      grammarPoints: ["that_clause"] 
    },
    { 
      id: "modAdv-i-11", 
      tokens: ["Smiling", "brightly,", "she", "opened", "the", "door."], 
      targetIndices: [0, 1], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【中級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "明るく微笑みながら、彼女はドアを開けました。", 
      modifiedIndices: [],
      grammarPoints: ["present_participle"] 
    },
    { 
      id: "modAdv-i-12", 
      tokens: ["Seen", "from", "a", "distance,", "the", "rock", "looks", "like", "a", "face."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【中級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "遠くから見ると、その岩は顔のように見えます。", 
      modifiedIndices: [],
      grammarPoints: ["past_participle"] 
    },
    { 
      id: "modAdv-i-13", 
      tokens: ["In", "spite", "of", "the", "heavy", "rain,", "they", "went", "out."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【中級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "激しい雨にもかかわらず、彼らは出かけました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-i-14", 
      tokens: ["To", "make", "matters", "worse,", "he", "lost", "his", "wallet."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【中級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "さらに悪いことに、彼は財布を失くしました。", 
      modifiedIndices: [],
      grammarPoints: ["infinitive"] 
    },
    { 
      id: "modAdv-i-15", 
      tokens: ["I", "went", "to", "the", "library", "to", "borrow", "some", "books."], 
      targetIndices: [5, 6, 7, 8], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【中級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私は本を何冊か借りるために図書館へ行きました。", 
      modifiedIndices: [],
      grammarPoints: ["infinitive"] 
    },
    { 
      id: "modAdv-a-1", 
      tokens: ["Not", "knowing", "what", "to", "do,", "he", "stood", "there", "in", "silence."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【上級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "何をすべきかわからず、彼は黙ってそこに立っていました。", 
      modifiedIndices: [],
      grammarPoints: ["present_participle", "interrogative", "infinitive"] 
    },
    { 
      id: "modAdv-a-2", 
      tokens: ["Frankly", "speaking,", "I", "don't", "agree", "with", "your", "opinion."], 
      targetIndices: [0, 1], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【上級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "率直に言って、私はあなたの意見には同意できません。", 
      modifiedIndices: [],
      grammarPoints: ["present_participle"] 
    },
    { 
      id: "modAdv-a-3", 
      tokens: ["Whatever", "happens,", "I", "will", "always", "be", "on", "your", "side."], 
      targetIndices: [0, 1], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【上級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "何が起ころうとも、私はいつもあなたの味方です。", 
      modifiedIndices: [],
      grammarPoints: ["relative_pronoun"] 
    },
    { 
      id: "modAdv-a-4", 
      tokens: ["No", "matter", "how", "hard", "you", "try,", "you", "can't", "finish", "it."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【上級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "どんなに一生懸命やっても、あなたはそれを終わらせることはできません。", 
      modifiedIndices: [],
      grammarPoints: ["interrogative"] 
    },
    { 
      id: "modAdv-a-5", 
      tokens: ["Had", "I", "known", "the", "truth,", "I", "would", "have", "told", "you."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【上級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "もし真実を知っていたなら、私はあなたに話しただろうに。", 
      modifiedIndices: [],
      grammarPoints: ["inversion"] 
    },
    { 
      id: "modAdv-a-6", 
      tokens: ["As", "far", "as", "I", "know,", "he", "is", "an", "honest", "man."], 
      targetIndices: [0, 1, 2, 3, 4], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【上級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私の知る限り、彼は正直な男です。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-a-7", 
      tokens: ["The", "game", "was", "canceled", "because", "of", "the", "heavy", "snow."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【上級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "大雪のため、その試合は中止されました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-a-8", 
      tokens: ["Judging", "from", "the", "look", "on", "his", "face,", "he", "is", "angry."], 
      targetIndices: [0, 1, 2, 3, 4, 5, 6], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【上級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼の顔つきから判断すると、彼は怒っています。", 
      modifiedIndices: [],
      grammarPoints: ["present_participle"] 
    },
    { 
      id: "modAdv-a-9", 
      tokens: ["With", "his", "eyes", "closed,", "he", "listened", "to", "the", "music."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【上級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼は目を閉じたまま、その音楽に耳を傾けました。", 
      modifiedIndices: [],
      grammarPoints: ["past_participle"] 
    },
    { 
      id: "modAdv-a-10", 
      tokens: ["So", "long", "as", "you", "keep", "quiet,", "you", "can", "stay."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【上級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "静かにしている限り、あなたはここにいてよいです。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-a-11", 
      tokens: ["He", "was", "so", "tired", "that", "he", "could", "not", "walk."], 
      targetIndices: [4, 5, 6, 7, 8], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【上級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼はとても疲れていたので、歩くことができませんでした。", 
      modifiedIndices: [],
      grammarPoints: ["that_clause"] 
    },
    { 
      id: "modAdv-a-12", 
      tokens: ["Whether", "you", "like", "it", "or", "not,", "you", "must", "do", "it."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【上級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "好むと好まざるとにかかわらず、あなたはそれをしなければなりません。", 
      modifiedIndices: [],
      grammarPoints: ["whether_if_clause"] 
    },
    { 
      id: "modAdv-a-13", 
      tokens: ["Provided", "that", "the", "weather", "is", "good,", "we", "will", "go."], 
      targetIndices: [0, 1, 2, 3, 4, 5], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【上級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "天気が良ければ、私たちは行きます。", 
      modifiedIndices: [],
      grammarPoints: ["that_clause"] 
    },
    { 
      id: "modAdv-a-14", 
      tokens: ["He", "solved", "the", "problem", "with", "great", "ease."], 
      targetIndices: [4, 5, 6], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【上級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "彼はとても簡単にその問題を解きました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    },
    { 
      id: "modAdv-a-15", 
      tokens: ["Much", "to", "my", "surprise,", "the", "door", "opened."], 
      targetIndices: [0, 1, 2, 3], 
      targetRole: "M (副詞句 / 副詞節)", 
      hint: "【上級】文の骨格（SVOC）を修飾している『副詞のカタマリ（M）』をすべてなぞってください。", 
      translation: "私がとても驚いたことに、そのドアは開きました。", 
      modifiedIndices: [],
      grammarPoints: [] 
    }
  ]
};