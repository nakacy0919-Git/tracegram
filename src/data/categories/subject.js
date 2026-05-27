export const subjectCategory = {
  categoryId: "subject",
  title: "主語（Subject）マスター",
  description: "to不定詞、動名詞、名詞節など、大学受験で頻出の「長い主語」を見抜くトレーニング。",
  problems: [
    {
      id: "subj-1",
      tokens: ["To", "master", "a", "foreign", "language", "requires", "a", "lot", "of", "patience."],
      targetIndices: [0, 1, 2, 3, 4], // To master a foreign language
      targetRole: "S (主語)",
      hint: "この文の主語（S）の塊をすべてなぞってください。",
      modifiedIndices: []
    },
    {
      id: "subj-2",
      tokens: ["Whether", "he", "will", "agree", "to", "our", "proposal", "remains", "to", "be", "seen."],
      targetIndices: [0, 1, 2, 3, 4, 5, 6], // Whether he will agree to our proposal
      targetRole: "S (主語)",
      hint: "この文の主語（S）となる名詞節をすべてなぞってください。",
      modifiedIndices: []
    },
    {
      id: "subj-3",
      tokens: ["The", "number", "of", "students", "studying", "abroad", "has", "increased."],
      targetIndices: [0, 1, 2, 3, 4, 5], // The number of students studying abroad
      targetRole: "S (主語)",
      hint: "この文の主語（S）の塊をすべてなぞってください。",
      modifiedIndices: []
    }
  ]
};