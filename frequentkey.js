/*
Find Most Frequent Key

Description:
Write a function called find_most_frequent_key that takes a list of dictionaries as input.
	1.	Each dictionary contains key-value pairs, where the keys are strings, and the values are integers.
	2.	Find the key that appears most frequently across all dictionaries.
	3.	Return the key and its total frequency as a tuple.
	4.	Example input:
data = [{"a": 1, "b": 2}, {"a": 3, "c": 4}, {"b": 5, "a": 6}]
Example output:
"a" // 3
//  */

const data = [
  { a: 1, b: 2 },
  { a: 3, c: 4 },
  { b: 5, a: 6 },
  { b: 1, b: 2 },
  { b: 5, c: 6 },
];

function find_most_frequent_key(dictionaries) {
  const keyFrequency = {};
  dictionaries.forEach((dictionary) => {
    Object.keys(dictionary).forEach((key) => {
      keyFrequency[key] = (keyFrequency[key] || 0) + 1;
    });
  });

  return Object.keys(keyFrequency).reduce((mostFrequentKey, currentKey) => {
    return keyFrequency[currentKey] > keyFrequency[mostFrequentKey]
      ? currentKey
      : mostFrequentKey;
  });
}

console.log("repeated", find_most_frequent_key(data));
