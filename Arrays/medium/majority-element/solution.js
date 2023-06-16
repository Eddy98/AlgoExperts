function majorityElement(array) {
  let i = 1;
  let c = 1;
  let guessedMajorityNumber = array[0];
  while (i < array.length) {
    if (array[i] === guessedMajorityNumber) {
      c++;
    } else {
      c--;
    }
    if (c === 0) {
      guessedMajorityNumber = array[i];
      c = 1;
    }
    i++;
  }
  return guessedMajorityNumber;
}

// Key idea of this questions was to understand the following:
// You are able to keep count of majority element, adding every time the number is seen, and subtracting
// Idea being that by the end... the count should be at least 1
// Now the key is to identify that if your count reaches 0 at any time, you can discard that majority element
// and continue checking the remaining of the subarray, the majority element should STILL be the majority element of the
// remaining subarray
