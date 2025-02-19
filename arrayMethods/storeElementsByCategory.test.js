const {
  groupByCategory,
  groupByCategory2,
} = require("./storeElementsByCategory");

describe("groupedByCategory should organize elements by category", () => {
  test("should return false if no elements", () => {
    expect(groupByCategory([])).toBe(false);
  });

  test("should return a object with products organized by category", () => {
    const products = [
      { name: "Teclado", category: "Periféricos", price: 100 },
      { name: "Cadeira", category: "Móveis", price: 1200 },
    ];

    const result = {
      Periféricos: [{ name: "Teclado", category: "Periféricos", price: 100 }],
      Móveis: [{ name: "Cadeira", category: "Móveis", price: 1200 }],
    };

    expect(groupByCategory(products)).toStrictEqual(result);
  });

  test("should return false if no elements", () => {
    expect(groupByCategory2([])).toBe(false);
  });

  test("should return a object with products organized by category", () => {
    const products = [
      { name: "Costa", category: "$$$%%%", price: 100 },
      { name: "Lilia", category: "&&$$", price: 1200 },
    ];

    const result = {
      "$$$%%%": [{ name: "Costa", category: "$$$%%%", price: 100 }],
      "&&$$": [{ name: "Lilia", category: "&&$$", price: 1200 }],
    };

    expect(groupByCategory2(products)).toStrictEqual(result);
  });
});
