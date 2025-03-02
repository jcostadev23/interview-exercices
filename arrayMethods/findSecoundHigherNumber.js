function secondHigher(numbers) {
  if (numbers.length < 2) {
    return false;
  }

  return numbers.sort((a, b) => a - b)[numbers.length - 2];
}

function bubbleSort(numbers) {
  const numbersLength = numbers.length;
  if (numbersLength < 2) {
    return false;
  }

  for (let i = 0; i < numbersLength; i++) {
    for (let j = i + 1; j < numbersLength; j++) {
      if (numbers[i] > numbers[j]) {
        [numbers[j], numbers[i]] = [numbers[i], numbers[j]];
      }
    }
  }

  return numbers;
}

module.exports = { secondHigher, bubbleSort };
