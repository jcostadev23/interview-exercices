class CountRepeatedWords {
  constructor() {
    this.words = {};
  }
  countWords(listWords) {
    if (!listWords.length) {
      return false;
    }

    listWords.forEach((word) => {
      this.words[word] = (this.words[word] ?? 0) + 1;
    });
    return this.words;
  }
}
const countRepeatedWords = new CountRepeatedWords();
countRepeatedWords.countWords([
  "banana",
  "maçã",
  "laranja",
  "banana",
  "maçã",
  "banana",
]);

const countWords = (listWords) =>
  listWords.reduce((words, word) => {
    words[word] = (words[word] ?? 0) + 1;
    return words;
  }, {});

module.exports = { CountRepeatedWords, countWords };
