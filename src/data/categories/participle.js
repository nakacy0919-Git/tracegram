export const participleCategory = {
  categoryId: "participle",
  title: "分詞構文マスター",
  description: "文全体の主語と結びつく、分詞構文（副詞の働きをする塊）を見抜くトレーニング。",
  problems: [
    {
      id: "part-1",
      tokens: ["Seen", "from", "a", "distance,", "the", "rock", "looks", "like", "a", "human", "face."],
      targetIndices: [0, 1, 2, 3], // Seen from a distance,
      targetRole: "分詞構文",
      hint: "光っている主語を意味上の主語とする、分詞構文の塊をすべてなぞってください。",
      modifiedIndices: [5] // rock を光らせる
    },
    {
      id: "part-2",
      tokens: ["Not", "knowing", "what", "to", "do,", "I", "asked", "my", "teacher", "for", "advice."],
      targetIndices: [0, 1, 2, 3, 4], // Not knowing what to do,
      targetRole: "分詞構文",
      hint: "光っている主語を意味上の主語とする、分詞構文の塊をすべてなぞってください。",
      modifiedIndices: [5] // I を光らせる
    }
  ]
};