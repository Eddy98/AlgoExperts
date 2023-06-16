function smallestSubstringContaining(bigString, smallString) {
  const charMap = createCharMap(smallString);

  let slow = 0,
    fast = 0;
  let zeroCounter = Object.keys(charMap).length;
  let smallestSubstr = bigString;

  while (fast < bigString.length) {
    const char = bigString[fast];
    if (char in charMap) {
      if (charMap[char] > 0) {
        charMap[char] -= 1;
        // check for zero counter change
        if (charMap[char] === 0) {
          zeroCounter--;
        }
      } else if (zeroCounter === 0 && charMap[char] === 0) {
        // move slow forward
        while (bigString[slow] !== char) {
          if (bigString[slow] in charMap) {
            charMap[bigString[slow]] += 1; // giving back
            zeroCounter++;
          }
          slow++;
        }
        slow++;
        while (!(bigString[slow] in charMap)) {
          slow++;
        }
      }
      if (zeroCounter === 0) {
        while (!(bigString[slow] in charMap)) {
          slow++;
        }
        // record string
        const currentSubstr = bigString.substring(slow, fast + 1);
        if (currentSubstr.length < smallestSubstr.length)
          smallestSubstr = currentSubstr;
      }
    }
    fast++;
  }

  if (smallestSubstr === bigString) {
    if (zeroCounter > 0) return '';
  }
  return smallestSubstr;
}

function createCharMap(smallString) {
  const map = {};
  for (const char of smallString) {
    if (char in map) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }
  return map;
}

smallestSubstringContaining('abcdefghijklmnopqrstuvwxyz', 'aajjttwwxxzz');
