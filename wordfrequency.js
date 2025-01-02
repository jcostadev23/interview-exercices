/*
Write a function called count_word_frequency that takes a string of text and performs the following:
	1.	Count how many times each word appears in the text.
	2.	Return a dictionary where the keys are words, and the values are their counts.
	3.	Ignore punctuation (size one) and make the word count case-insensitive.
	4.	Example input: "Hello world! Hello everyone."
Example output: {"hello": 2, "world": 1, "everyone": 1}
 */

function count_word_frequency() {
  const text = "Hello world! Hello everyone.";
  const dictionary = {};

  // Spliting words into a array. Using the filter to remove the empty strings
  const words = text.split(/[\s,.!?]+/).filter(Boolean);

  words.forEach((word) => {
    dictionary[word] = (dictionary[word] || 0) + 1;
  });

  return dictionary;
}

const count_word_frequency_2 = () => {
  const text = "Hello world! Hello everyone.";
  // Using this aprotch to extract words only
  const words = text.match(/\b\w+\b/g);

  return words.reduce((dictionary, currentWord) => {
    dictionary[currentWord] = (dictionary[currentWord] || 0) + 1;
    return dictionary;
  }, {});
};

console.log(count_word_frequency());
console.log(count_word_frequency_2());
