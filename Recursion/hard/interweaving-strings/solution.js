/*
Idea: We can have a pointer at the start of each string. We should iterate strings recursively
1. P1 for string 1, P2 for string 2, and P3 for string 3. If P1 == P3, then we can move forward P1 to the the iteration
2. If P2 == P3, then we move forward P2
Note: P3 = P2 + P1
3. Edge case, when both P1, and P2 are equal to P3 then we need to explore both paths, when P1 increases and when P2 increases
4. Edge case, if the length of String 1 + String 2 is not equal to String 3, then you cna return False
5. Return True, if we have reached the end of all strings

Note we should utilize some sort of cache in order to make the algorithm more efficient
In instances where the are multiple repeated String, we can save in some sort of 2D matrix if that combination of p1 and p2 has 
already returned false in a previous search

Note, for some reason Cache initialization doing this causes a bug
const cache = new Array(one.length + 1)
    .fill(new Array(two.length + 1).fill(null));

We need to fill with 0s first, then map
*/

function interweavingStrings(one, two, three) {
  if (one.length + two.length !== three.length) return false;

  const cache = new Array(one.length + 1)
    .fill(0)
    .map((_) => new Array(two.length + 1).fill(null));

  return areStringsInterweaving(0, 0, one, two, three, cache);
}

function areStringsInterweaving(p1, p2, str1, str2, str3, cache) {
  if (cache[p1][p2] !== null) return cache[p1][p2];

  const p3 = p1 + p2;
  if (p3 >= str3.length) return true;

  let isValid = false;
  if (p1 < str1.length && str1[p1] === str3[p3]) {
    isValid =
      isValid || areStringsInterweaving(p1 + 1, p2, str1, str2, str3, cache);
  }

  if (p2 < str2.length && str2[p2] === str3[p3]) {
    isValid =
      isValid || areStringsInterweaving(p1, p2 + 1, str1, str2, str3, cache);
  }

  cache[p1][p2] = isValid;
  return cache[p1][p2];
}

// Older iterative solution
function interweavingStrings(one, two, three, p1Idx = 0, p2Idx = 0, p3Idx = 0) {
  let p1 = p1Idx,
    p2 = p2Idx,
    p3 = p3Idx;

  while (p3 < three.length) {
    if (two[p2] === one[p1] && one[p1] === three[p3]) {
      return (
        interweavingStrings(one, two, three, p1 + 1, p2, p3 + 1) ||
        interweavingStrings(one, two, three, p1, p2 + 1, p3 + 1)
      );
    }
    if (p1 < one.length && three[p3] === one[p1]) {
      p1++;
    } else if (p2 < two.length && three[p3] === two[p2]) {
      p2++;
    } else {
      return false;
    }
    p3++;
  }
  return p3 === three.length && p1 === one.length && p2 === two.length;
}
