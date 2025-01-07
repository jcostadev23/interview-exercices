const { count_word_frequency_2 } = require("./wordfrequency");

describe("count_word_frequency_2", () => {
  test("counts how many times a word is used", () => {
    const expectedResult = {
      Hello: 2,
      world: 1,
      everyone: 1,
    };
    expect(
      count_word_frequency_2("Hello world! Hello everyone.")
    ).toStrictEqual(expectedResult);
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
      count_word_frequency_2("Hello my world! This are My Love.")
    ).toStrictEqual(expectedResult);
  });

  test("check when is an empty strings", () => {
    expect(count_word_frequency_2("")).toBe(false);
  });

  test("check when is numbers", () => {
    expect(count_word_frequency_2(2222)).toBe(false);
  });

  test("check when is symbols", () => {
    expect(count_word_frequency_2("!?$&/?!#")).toBe(false);
  });
});
