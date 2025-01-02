/*
Description:
Design a class called ShoppingCart to manage an online shopping cart. The class should allow the following:
	1.	Add items by specifying the product name, quantity, and price.
	2.	Remove an item from the cart.
	3.	Calculate the total price of the cart.
	4.	Apply a discount code to reduce the total price by a percentage.
	5.	List all items in the cart with their details.
     */

const cart = {
  productName: {
    quantity: 20,
    price: 20,
  },
};

class ShoppingCart {
  constructor() {
    this.products = {};
  }

  addProduct(name, quantity, price) {
    if (this.products[name]) {
      this.products[name].quantity += quantity;
      return;
    }

    this.products[name] = { quantity, price };
  }

  removeProduct(name) {
    delete this.products[name];
  }

  totalPrice() {
    return Object.values(this.products).reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  addDiscound(percentage) {
    const discount = (this.totalPrice() * percentage) / 100;
    return this.totalPrice() - discount;
  }

  allItems() {
    return Object.entries(this.products).map(([name, details]) => ({
      name,
      quantity: details.quantity,
      price: details.price,
    }));
  }
}

const newProduct = new ShoppingCart();

newProduct.addProduct(chocolate, 30, 0.5);
