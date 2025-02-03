/*
You are tasked with implementing a Fridge and Recipe Manager. 
    The goal is to manage products in a fridge, track their quantities, and cook recipes using available ingredients. 
    The manager uses unique IDs for products and recipes.

Requirements:
Data Structures:
Products are stored in an object with id, name, and quantity.
Recipes are stored in an object with id, name, and ingredients (an array of product IDs with required quantities).

Functions:
addProduct(id, name, quantity): Adds a product to the fridge or updates its quantity if it already exists.
addRecipe(id, name, ingredients): Adds a recipe to the list of recipes. Each ingredient is an object containing productId and quantity.
cookRecipe(recipeId): Checks if the recipe can be cooked.
If so, reduce the quantities of the products in the fridge and return true.
If not, returns false.
checkFridge(): Returns all ingredients in the fridge
Edge Cases:
Prevent adding duplicate IDs for products or recipes.
Handle insufficient quantities when cooking recipes.

*/

/*
example:
// Adding products to the fridge
addProduct(1, "Milk", 10);
addProduct(2, "Eggs", 12);
addProduct(3, "Flour", 5);
addProduct(4, "Sugar", 8);

// Adding recipes
addRecipe(1, "Pancakes", [
    { productId: 1, quantity: 2 }, // Milk
    { productId: 2, quantity: 4 }, // Eggs
    { productId: 3, quantity: 3 }, // Flour
    { productId: 4, quantity: 2 }  // Sugar
]);

addRecipe(2, "Omelette", [
    { productId: 2, quantity: 6 }, // Eggs
    { productId: 1, quantity: 1 }, // Milk
]);

addRecipe(3, "Cake", [
    { productId: 3, quantity: 4 }, // Flour
    { productId: 4, quantity: 4 }, // Sugar
    { productId: 2, quantity: 3 }  // Eggs
]);

// Cooking recipes
console.log("Cooking Pancakes:", cookRecipe(1)); // Should succeed
console.log("Cooking Omelette:", cookRecipe(2)); // Should succeed
console.log("Cooking Cake:", cookRecipe(3)); // Should fail due to insufficient Flour

// Cooking the same recipe again
console.log("Cooking Pancakes again:", cookRecipe(1)); // Should fail due to insufficient ingredients

// Checking the fridge
checkFridge(); // Returns fridge's current ingredients.

*/

class FridgeAndRecipeManager {
  constructor() {
    this.products = {};
    this.recipes = {};
  }

  addProduct(id, name, quantity) {
    if (this.products[id]) {
      this.products[id].quantity += quantity;
      return;
    }

    this.products[id] = { id, name, quantity };
  }

  addRecipe(id, name, ingredients) {
    if (this.recipes[id]) {
      return;
    }

    this.recipes[id] = { id, name, ingredients };
  }

  cookRecipe(recipeId) {
    const recipeIngredients = this.recipes[recipeId]?.ingredients;
    if (!recipeIngredients) {
      return false;
    }

    let canCook = true;
    for (const ingredient of recipeIngredients) {
      if (
        !this.products[ingredient.productId] ||
        this.products[ingredient.productId].quantity < ingredient.quantity
      ) {
        canCook = false;
        break;
      }
    }

    if (!canCook) {
      return false;
    }

    recipeIngredients.forEach((ingredient) => {
      this.products[ingredient.productId].quantity -= ingredient.quantity;
    });

    return true;
  }

  checkFridge() {
    return Object.values(this.products);
  }
}

const fridgeAndRecipeManeger = new FridgeAndRecipeManager();

fridgeAndRecipeManeger.addProduct(1, "Milk", 10);
fridgeAndRecipeManeger.addProduct(2, "Eggs", 12);
fridgeAndRecipeManeger.addProduct(3, "Flour", 5);
fridgeAndRecipeManeger.addProduct(4, "Sugar", 8);

// Adding recipes
fridgeAndRecipeManeger.addRecipe(1, "Pancakes", [
  { productId: 1, quantity: 2 }, // Milk
  { productId: 2, quantity: 4 }, // Eggs
  { productId: 3, quantity: 3 }, // Flour
  { productId: 4, quantity: 2 }, // Sugar
]);

fridgeAndRecipeManeger.addRecipe(2, "Omelette", [
  { productId: 2, quantity: 6 }, // Eggs
  { productId: 1, quantity: 1 }, // Milk
]);

fridgeAndRecipeManeger.addRecipe(3, "Cake", [
  { productId: 3, quantity: 4 }, // Flour
  { productId: 4, quantity: 4 }, // Sugar
  { productId: 2, quantity: 3 }, // Eggs
]);

// Cooking recipes
console.log("Cooking Pancakes:", fridgeAndRecipeManeger.cookRecipe(1)); // Should succeed
console.log("Cooking Omelette:", fridgeAndRecipeManeger.cookRecipe(2)); // Should succeed
console.log("Cooking Cake:", fridgeAndRecipeManeger.cookRecipe(3)); // Should fail due to insufficient Flour

// Cooking the same recipe again
console.log("Cooking Pancakes again:", fridgeAndRecipeManeger.cookRecipe(1)); // Should fail due to insufficient ingredients

// Checking the fridge
console.log(fridgeAndRecipeManeger.checkFridge()); // Returns fridge's current ingredients.
