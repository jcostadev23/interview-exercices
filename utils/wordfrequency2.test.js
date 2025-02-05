const { count_word_frequency } = require("./wordfrequency");

describe("count_word_frequency", () => {
  test("counts how many times a word is used", () => {
    const expectedResult = {
      Hello: 2,
      world: 1,
      everyone: 1,
    };
    expect(count_word_frequency("Hello world! Hello everyone.")).toStrictEqual(
      expectedResult
    );
  });

  test("counts how many times a word is used", () => {
    const expectedResult = {
      Hello: 1,
      my: 1,
      My: 1,
      Love: 1,
      world: 1,
      This: 1,
      are: 1,
    };
    expect(
      count_word_frequency("Hello my world! This are My Love.")
    ).toStrictEqual(expectedResult);
  });

  test("check when is an empty strings", () => {
    expect(count_word_frequency("")).toBe(false);
  });

  test("check when is numbers", () => {
    expect(count_word_frequency(2222)).toBe(false);
  });

  test("check when is symbols", () => {
    expect(count_word_frequency("!?$&/?!#")).toBe(false);
  });
});
