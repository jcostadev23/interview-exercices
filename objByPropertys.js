/*
Group Objects by Property

Description:
Write a function called group_by_property that takes a list of dictionaries and a key name as input.
	1.	Group the dictionaries by the values of the specified key.
	2.	Return a dictionary where the keys are the unique values of the specified key, and the values are lists of dictionaries with matching values.
	3.	Example input:
items = [
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 30},
    {"name": "Charlie", "age": 25},
]
key = "age"

Example output:
{25: [{"name": "Alice", "age": 25}, {"name": "Charlie", "age": 25}], 30: [{"name"
 */

function group_by_property(dictionaries, key) {
  const dictionary = {};
  dictionaries.forEach((item) => {
    if (!dictionary[item[key]]) {
      dictionary[item[key]] = [];
    }
    dictionary[item[key]].push(item);
  });

  return dictionary;
}

const group_by_property_2 = (dictionaries, key) => {
  return dictionaries.reduce((result, currentDictionary) => {
    const keyValue = currentDictionary[key];
    (result[keyValue] ??= []).push(currentDictionary);
    return result;
  }, {});
};

console.log(
  "groupBy",
  group_by_property(
    [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
    ],
    "age"
  )
);

console.log(
  "groupBy2",
  group_by_property_2(
    [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
    ],
    "age"
  )
);
