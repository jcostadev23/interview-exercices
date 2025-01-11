/*
Product Management
Create a data structure to store products. Each product should have the following attributes:
id: Unique identifier for the product.
name: Name of the product.
category: Category to which the product belongs.
price: Price of the product.
Category Management:

Create a functionality to list all unique categories available in the store.
Store Functionality:
Add products to the store dynamically (e.g., addProduct(product)).
List all products under a specific category (e.g., listProductsByCategory(category)).
Cart Functionality:
Add a product by its id.
Remove a product by its id.
View all products in the cart along with their total price (e.g., viewCart()).
Products in the cart should be shown in the same order they were added.
Core Functions to Implement:
addProduct(product): Adds a new product to the store.
listProductsByCategory(category): Lists all products under the given category.
getAllCategories(): Lists all unique categories available in the store.
addToCart(productId): Adds a product to the cart by its id.
removeFromCart(productId): Removes a product from the cart by its id.
viewCart(): Returns all products in the cart and the total price.
 */

class AmazonStore {
  constructor() {
    this.cart = [];
    this.products = [
      { name: "esparguete", id: 2, category: "food", price: 130 },
      { name: "arroz", id: 3, category: "food", price: 200 },
      { name: "milho", id: 4, category: "food", price: 400 },
      { name: "downBells", id: 5, category: "sports", price: 120 },
      { name: "bicicle", id: 6, category: "sports", price: 500 },
    ];
  }

  addProduct(product) {
    this.products.push(product);
  }

  listProductsByCategory(category) {
    const productsByCategory = this.products.filter(
      (product) => product.category === category
    );

    return productsByCategory;
  }

  getAllCategories() {
    const listOfCategories = new Set(
      this.products.map((product) => product.category)
    );

    return Array.from(listOfCategories);
  }

  addToCart(id) {
    const product = this.products.find((product) => product.id === id);

    if (product) {
      this.cart.push(product);
    }

    return "There is not product with that id";
  }

  removeFromCart(id) {
    // assumindo que existira esse id.
    this.cart = this.cart.filter((product) => product.id !== id);
  }

  viewCart() {
    return this.cart.reduce(
      (totalCart, currCart) => {
        totalCart.items.push(currCart);
        totalCart.totalPrice += currCart.price;
        return totalCart;
      },
      { items: [], totalPrice: 0 }
    );
  }
}

const store = new AmazonStore();

store.addProduct({
  id: 1,
  name: "Laptop",
  category: "Electronics",
  price: 1000,
});

store.addToCart(1);
store.addToCart(2);
store.addToCart(3);
store.addToCart(4);

console.log("viewCart", store.viewCart());
console.log("allCategories", store.allCategories());
console.log("viewByCategory", store.listProductsByCategory("food"));

store.removeFromCart(1);

console.log("viewCart", store.viewCart());
