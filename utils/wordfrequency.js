/*
Write a function called count_word_frequency that takes a string of text and performs the following:
	1.	Count how many times each word appears in the text.
	2.	Return a dictionary where the keys are words, and the values are their counts.
	3.	Ignore punctuation (size one) and make the word count case-insensitive.
	4.	Example input: "Hello world! Hello everyone."
Example output: {"hello": 2, "world": 1, "everyone": 1}
 */

function count_word_frequency(word) {
  if (typeof word !== "string") {
    return false;
  }

  const dictionary = {};

  // Spliting words into a array. Using the filter to remove the empty strings
  const words = word.match(/\b\w+\b/g);

  if (!words) {
    return false;
  }

  words.forEach((word) => {
    dictionary[word] = (dictionary[word] || 0) + 1;
  });

  console.log("words", dictionary);
  return dictionary;
}

const count_word_frequency_2 = (word) => {
  if (typeof word !== "string") {
    return false;
  }

  // Using this aprotch to extract words only
  const words = word.match(/\b\w+\b/g);

  if (!words) {
    return false;
  }

  return words.reduce((dictionary, currentWord) => {
    dictionary[currentWord] = (dictionary[currentWord] || 0) + 1;
    return dictionary;
  }, {});
};

module.exports = { count_word_frequency_2, count_word_frequency };
