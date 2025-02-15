// Store elemnets by category

const products = [
  { name: "Teclado", category: "Periféricos", price: 100 },
  { name: "Mouse", category: "Periféricos", price: 50 },
  { name: "Monitor", category: "Displays", price: 700 },
  { name: "Cadeira", category: "Móveis", price: 1200 },
];

function groupByCategory(products) {
  const groupedByCategory = {};

  products.forEach((product) => {
    groupedByCategory[product.category] ??= [];
    groupedByCategory[product.category].push(product);
  });

  return groupedByCategory;
}

function groupByCategory2(products) {
  return products.reduce((groupedByCategory, product) => {
    groupedByCategory[product.category] ??= [];
    groupedByCategory[product.category].push(product);
    return groupedByCategory;
  }, {});
}
