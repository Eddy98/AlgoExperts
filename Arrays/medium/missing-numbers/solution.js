function missingNumbers(nums) {
  let lenIndex = false;
  let lenPlusIndex = false;
  const L = nums.length;

  for (let i = 0; i < L; i++) {
    const value = nums[i] < 0 ? nums[i] * -1 : nums[i];
    if (value - 1 === L) {
      lenIndex = true;
    } else if (value - 1 > L) {
      lenPlusIndex = true;
    } else {
      nums[value - 1] *= -1;
    }
  }

  const missing = [];

  for (let i = 0; i < L; i++) {
    if (nums[i] > 0) {
      missing.push(i + 1);
    }
  }
  if (!lenIndex) missing.push(L + 1);
  if (!lenPlusIndex) missing.push(L + 2);

  console.log(missing);

  return missing;
}

/* another solution to this problem is to cleverly use the sum of the missing numbers that we can get by getting the sum of [1, n] - sum of nums;

In the example [1, 4, 3] we know that he sum of the missing numbers is 7

We can calculate the average, so Average = sum / 2 = 7 / 2 = 3.5

So we know that one of the missing number is less than the average and one of the missing nums in greater than the average. 

Finally we search for one of the missing nums in one half of the array, only taking into account values less than average
and do the same for the other half only taking into account greater values

*/
