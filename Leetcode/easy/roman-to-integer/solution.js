/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * 
 * 
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 
12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not IIII. Instead, the number four is written as IV.
Because the one is before the five we subtract it making four. The same principle applies to the number nine,
which is written as IX. There are six instances where subtraction is used:

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */

var romanToInt = function (romanString) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const len = romanString.length;
  let sum = 0;

  for (let i = 0; i < romanString.length; i++) {
    const char = romanString[i];

    let nextChar;
    if (i !== len - 1) {
      nextChar = romanString[i + 1];
    }

    if (char === 'C') {
      if (nextChar && (nextChar === 'D' || nextChar === 'M')) {
        sum -= romanMap[char];
        continue;
      }
    } else if (char === 'X') {
      if (nextChar && (nextChar === 'L' || nextChar === 'C')) {
        sum -= romanMap[char];
        continue;
      }
    } else if (char === 'I') {
      if (nextChar && (nextChar === 'V' || nextChar === 'X')) {
        sum -= romanMap[char];
        continue;
      }
    }

    sum += romanMap[char];
  }

  return sum;
};

var romanToInt = function (romanString) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const len = romanString.length;
  let sum = 0;

  for (let i = 0; i < romanString.length; i++) {
    const char = romanString[i];

    let nextChar;
    if (i !== len - 1) {
      nextChar = romanString[i + 1];
    }

    if (romanMap[nextChar] > romanMap[char]) {
      sum += romanMap[nextChar] - romanMap[char];
      i++;
    } else {
      sum += romanMap[char];
    }
  }

  return sum;
};
