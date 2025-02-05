const { FridgeAndRecipeManager } = require("./fridgeAndRecipe");

describe("FridgeAndRecipeManager", () => {
  test("Should add Milk to the fridge", () => {
    const fridge = new FridgeAndRecipeManager();
    const result = [{ id: 1, name: "Milk", quantity: 5 }];
    fridge.addProduct(1, "Milk", 5);

    expect(fridge.checkFridge()).toStrictEqual(result);
  });

  test("If the item already exist on the fridge should update quantity", () => {
    const fridge = new FridgeAndRecipeManager();
    const result = [{ id: 2, name: "Eggs", quantity: 15 }];
    fridge.addProduct(2, "Eggs", 5);
    fridge.addProduct(2, "Eggs", 10);

    expect(fridge.checkFridge()).toStrictEqual(result);
  });

  test("Adding Recipe", () => {
    const fridge = new FridgeAndRecipeManager();
    expect(
      fridge.addRecipe(1, "Pancakes", [
        { productId: 1, quantity: 2 },
        { productId: 2, quantity: 4 },
        { productId: 3, quantity: 3 },
        { productId: 4, quantity: 2 },
      ])
    ).toBe(true);
  });

  test("If the Recipe already exist should return 'Already exist'", () => {
    const fridge = new FridgeAndRecipeManager();
    fridge.addRecipe(1, "Pancakes", [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 4 },
      { productId: 3, quantity: 3 },
      { productId: 4, quantity: 2 },
    ]);

    expect(
      fridge.addRecipe(1, "Pancakes", [
        { productId: 1, quantity: 2 },
        { productId: 2, quantity: 4 },
        { productId: 3, quantity: 3 },
        { productId: 4, quantity: 2 },
      ])
    ).toEqual("Already exist");
  });

  test("if Recipe dosen't exist should return false", () => {
    const fridge = new FridgeAndRecipeManager();
    expect(fridge.cookRecipe(2)).toBe(false);
  });

  test("If Recipe exist but not enough ingredients on the fridge should return false", () => {
    const fridge = new FridgeAndRecipeManager();
    expect(fridge.cookRecipe(1)).toBe(false);
  });

  test("CookRecipe", () => {
    const fridge = new FridgeAndRecipeManager();
    const fridgeItems = [
      { id: 1, name: "Milk", quantity: 8 },
      { id: 2, name: "Eggs", quantity: 8 },
      { id: 3, name: "Flour", quantity: 2 },
      { id: 4, name: "Sugar", quantity: 6 },
    ];
    fridge.addProduct(1, "Milk", 10);
    fridge.addProduct(2, "Eggs", 12);
    fridge.addProduct(3, "Flour", 5);
    fridge.addProduct(4, "Sugar", 8);

    fridge.addRecipe(1, "Pancakes", [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 4 },
      { productId: 3, quantity: 3 },
      { productId: 4, quantity: 2 },
    ]);

    expect(fridge.cookRecipe(1)).toBe(true);
    expect(fridge.checkFridge()).toStrictEqual(fridgeItems);
  });

  test("Check items on fridge", () => {
    const fridge = new FridgeAndRecipeManager();
    const result = [
      { id: 1, name: "Milk", quantity: 10 },
      { id: 2, name: "Eggs", quantity: 12 },
      { id: 3, name: "Flour", quantity: 5 },
      { id: 4, name: "Sugar", quantity: 8 },
    ];

    fridge.addProduct(1, "Milk", 10);
    fridge.addProduct(2, "Eggs", 12);
    fridge.addProduct(3, "Flour", 5);
    fridge.addProduct(4, "Sugar", 8);

    expect(fridge.checkFridge()).toStrictEqual(result);
  });
});
