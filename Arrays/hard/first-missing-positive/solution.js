var firstMissingPositive = function (nums) {
  let smallestNum = nums[0]; // positive
  // also keep track of biggest num
  let biggestNum = nums[0];

  let smallestGap = Infinity; //positive
  let biggestGap = Infinity;

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num === smallestGap) smallestGap = Infinity;
    if (num === biggestGap) biggestGap = Infinity;

    if (num > 0 && num < smallestNum) {
      // check for gap
      if (smallestNum > num + 1) {
        smallestGap = num + 1;
      }
      smallestNum = num;
    }

    if (num > 0 && num > biggestNum) {
      //check for upper bound gap
      if (biggestNum + 1 < num) {
        let biggestPossibleGap = biggestNum + 1;
        if (biggestPossibleGap < biggestGap) {
          biggestGap = biggestPossibleGap;
        }
      }
      biggestNum = num;
    }
  }

  console.log(smallestNum);

  if (smallestNum !== 1 && smallestNum > 0) return 1;

  if (smallestNum !== 1 && smallestNum < 0) return 1;

  if (smallestGap !== Infinity) return smallestGap;

  if (biggestGap !== Infinity) return biggestGap;

  return biggestNum + 1;
};

// NON WORKING SOLUTION
