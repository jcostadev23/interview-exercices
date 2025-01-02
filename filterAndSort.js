/*
You have an array of product records, where each product is represented as an object with properties like 
    name, category, price, and inStock.

Given:

A specific category (e.g., "Electronics")
A minimum price threshold
Perform operations to return a list of products from the given category whose price exceeds the threshold, 
    and include only the name, category, and price in the resulting array. Sort the resulting list by price in 
    descending order.
 */

const products = [
  {
    name: "Anjos e Demonios",
    category: "books",
    isStock: true,
    price: 12.5,
  },
  {
    name: "Lost Symbol",
    category: "books",
    isStock: true,
    price: 15,
  },
  {
    name: "Ferraduras",
    category: "books",
    isStock: true,
    price: 11.75,
  },
  {
    name: "Sirla",
    category: "sports",
    isStock: true,
    price: 15,
  },
  {
    name: "Bench",
    category: "sports",
    isStock: true,
    price: 12.5,
  },
  {
    name: "Shimano",
    category: "sports",
    isStock: true,
    price: 15.75,
  },
];

function productsByCategory(category, minPrice) {
  return products
    .filter(
      (product) => product.category === category && product.price >= minPrice
    )
    .sort((a, b) => b.price - a.price)
    .map(({ name, category, price }) => ({
      name,
      category,
      price,
    }));
}

const productsByCategory2 = (category, minPrice) => {
  const result = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.category === category && product.price >= minPrice) {
      result.push({
        name: product.name,
        category: product.category,
        price: product.price,
      });
    }
  }

  result.sort((a, b) => b.price - a.price);

  return result;
};

console.log("category", productsByCategory("sports", 15));
console.log("category2", productsByCategory2("sports", 15));
