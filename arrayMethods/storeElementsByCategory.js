function groupByCategory(products) {
  if (!products.length) {
    return false;
  }

  const groupedByCategory = {};

  products.forEach((product) => {
    groupedByCategory[product.category] ??= [];
    groupedByCategory[product.category].push(product);
  });

  return groupedByCategory;
}

function groupByCategory2(products) {
  if (!products.length) {
    return false;
  }

  return products.reduce((groupedByCategory, product) => {
    groupedByCategory[product.category] ??= [];
    groupedByCategory[product.category].push(product);
    return groupedByCategory;
  }, {});
}

module.exports = { groupByCategory, groupByCategory2 };
