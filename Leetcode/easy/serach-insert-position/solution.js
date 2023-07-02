/**
 * 35. Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

 */
// Binary Search solution
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middleIndex;

  while (left <= right) {
    middleIndex = Math.floor((left + right) / 2);

    if (left === right) {
      if (nums[middleIndex] < target) {
        return middleIndex + 1;
      } else {
        return middleIndex;
      }
    }

    // check right
    if (nums[middleIndex] < target) {
      left = middleIndex + 1;
      //check left
    } else if (nums[middleIndex] > target) {
      right = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }

  return middleIndex;
};
