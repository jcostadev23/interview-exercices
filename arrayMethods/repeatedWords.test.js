const { CountRepeatedWords, countWords } = require("./repeatedWords");

describe("Counting how many times the word its repeated", () => {
  let countRepeatedWords;
  beforeEach(() => {
    countRepeatedWords = new CountRepeatedWords();
  });

  test("Should return false if not words", () => {
    expect(countRepeatedWords.countWords([])).toBe(false);
  });

  test("Should return { banana: 3, maçã: 3, laranja: 1 }", () => {
    const result = { banana: 3, maçã: 3, laranja: 1 };

    expect(
      countWords([
        "banana",
        "maçã",
        "maçã",
        "laranja",
        "banana",
        "maçã",
        "banana",
      ])
    ).toStrictEqual(result);
  });

  test("Should return { banana: 3, maçã: 2, laranja: 1 }", () => {
    const result = { banana: 3, maçã: 2, laranja: 1 };

    expect(
      countRepeatedWords.countWords([
        "banana",
        "maçã",
        "laranja",
        "banana",
        "maçã",
        "banana",
      ])
    ).toStrictEqual(result);
  });
});
