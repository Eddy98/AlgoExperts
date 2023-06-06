/*
Since all integers are positives, we can use a sliding window algo to check for the subarray
*/
function longestSubarrayWithSum(array, targetSum) {
  let sum = 0;
  let fast = 0;
  let slow = 0;
  const longestSubarray = [];

  while (fast < array.length) {
    sum += array[fast];

    if (sum === targetSum) {
      saveBounds(longestSubarray, [slow, fast]);
    }

    while (sum > targetSum) {
      sum -= array[slow];
      slow++;
      if (sum === targetSum) {
        saveBounds(longestSubarray, [slow, fast]);
      }
    }

    fast++;
  }

  return longestSubarray;
}

function saveBounds(longestSubarray, currentSubarray) {
  const [start, end] = longestSubarray;
  const [currStart, currEnd] = currentSubarray;

  if (longestSubarray.length === 0) {
    longestSubarray.push(currStart);
    longestSubarray.push(currEnd);
  }

  if (currEnd - currStart > end - start) {
    longestSubarray[0] = currStart;
    longestSubarray[1] = currEnd;
  }
}
