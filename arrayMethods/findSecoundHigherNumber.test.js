const { secondHigher, bubbleSort } = require("./findSecoundHigherNumber");

describe("Sorting array and return secoundHigher number", () => {
  test("Should return false if less than 2 numbers", () => {
    expect(secondHigher([1])).toBe(false);
  });

  test("Should return 35", () => {
    expect(secondHigher([2, 4, 40, 23, 35, 22])).toBe(35);
  });

  test("Should return false if less than 2 numbers", () => {
    expect(bubbleSort([1])).toBe(false);
  });

  test("Should return 35", () => {
    expect(bubbleSort([2, 4, 40, 23, 35, 22])).toStrictEqual([
      2, 4, 22, 23, 35, 40,
    ]);
  });
});
