export const relativeClauseCategory = {
  categoryId: "relative-clause",
  title: "関係詞節マスター",
  description: "先行詞を修飾する形容詞節（関係代名詞・関係副詞）の範囲を正確に把握しよう。",
  problems: [
    {
      id: "rel-1",
      tokens: ["The", "man", "who", "is", "standing", "by", "the", "door", "is", "my", "uncle."],
      targetIndices: [2, 3, 4, 5, 6, 7], // who is standing by the door
      targetRole: "形容詞節 / 関係詞節",
      hint: "光っている名詞を修飾している塊（関係詞節）をなぞってください。",
      modifiedIndices: [1] // man を光らせる
    },
    {
      id: "rel-2",
      tokens: ["This", "is", "the", "only", "book", "that", "I", "want", "to", "read."],
      targetIndices: [5, 6, 7, 8, 9], // that I want to read.
      targetRole: "形容詞節 / 関係詞節",
      hint: "光っている名詞を修飾している塊（関係詞節）をなぞってください。",
      modifiedIndices: [4] // book を光らせる
    },
    {
      id: "rel-3",
      tokens: ["I", "visited", "the", "town", "where", "he", "was", "born", "and", "raised."],
      targetIndices: [4, 5, 6, 7, 8, 9], // where he was born and raised.
      targetRole: "形容詞節 / 関係詞節",
      hint: "光っている名詞を修飾している関係副詞の塊をなぞってください。",
      modifiedIndices: [3] // town を光らせる
    }
  ]
};