function fourNumberSum(array, targetSum) {
  const map = {};
  const quadruplets = new Set();

  for (let i = 0; i < array.length; i++) {
    for (let k = i + 1; k < array.length; k++) {
      const currSum = array[i] + array[k];
      const desiredSum = targetSum - currSum;
      if (desiredSum in map) {
        for (const sumPair of map[desiredSum]) {
          if (checkIfValidSum([i, k], sumPair)) {
            const possibleQuad = [
              array[i],
              array[k],
              array[sumPair[0]],
              array[sumPair[1]],
            ].sort();
            quadruplets.add(possibleQuad.join(','));
          }
        }
      } else {
        if (currSum in map) {
          map[currSum].push([i, k]);
        } else {
          map[currSum] = [[i, k]];
        }
      }
    }
  }

  return [...quadruplets].map((quad) =>
    quad.split(',').map((num) => parseInt(num))
  );
}

const checkIfValidSum = (sumPair1, sumPair2) => {
  for (const index of sumPair1) {
    if (sumPair2.includes(index)) return false;
  }
  return true;
};
