// keep track of the sum as you traverse the array
// save the sum in the array, if we later on we have a sum that we have seen before
// then that means that there is a subarray that must have a sum of 0
// [0, x] = sum
// [0, y] = sum    this means that [x+1, y] = 0

function zeroSumSubarray(nums) {
  const set = new Set();
  let sum = 0;
  for (const num of nums) {
    sum += num;
    if (set.has(sum) || sum === 0 || num === 0) {
      return true;
    }
    set.add(sum);
  }
  return false;
}
