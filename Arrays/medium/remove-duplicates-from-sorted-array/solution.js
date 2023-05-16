/* 
Start with 2 pointers: Reader and a writer
variable to count how many instances of current number
if at the end: count > 2, then to be Written would be Count - 2
As we count the next number, we need to overwrite where the writer pointer is
*/

// does nor work
var removeDuplicates = function (nums) {
  let w = 0,
    r = 0;
  let toWrite = 0;

  while (r < nums.length) {
    const currChar = nums[r];
    let currCount = 0;
    while (r < nums.length && nums[r] === currChar) {
      currCount++;

      if (toWrite > 0) {
        nums[w] = nums[r];
        toWrite--;
      }
      if (currCount <= 2) {
        w++;
      }
      r++;
    }

    if (currCount > 2) {
      toWrite += currCount - 2;
    }
  }
};

// solution
var removeDuplicates = function (nums) {
  // Special case...
  if (nums.length <= 2) {
    return nums.length;
  }
  // Initialize an integer k that updates the kth index of the array...
  // only when the current element does not match either of the two previous indexes...
  let k = 2;
  // Traverse elements through loop...
  for (let i = 2; i < nums.length; i++) {
    // If the index does not match the (k-1)th and (k-2)th elements, count that element...
    if (nums[i] != nums[k - 2] || nums[i] != nums[k - 1]) {
      nums[k] = nums[i];
      k++;
      // If the index matches the (k-1)th and (k-2)th elements, we skip it...
    }
  }
  return k; //Return k after placing the final result in the first k slots of nums...
};
