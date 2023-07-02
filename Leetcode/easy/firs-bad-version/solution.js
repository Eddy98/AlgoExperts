/**
 * 278. First Bad Version
 * You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   *
   * We should look for the instance where:
   * 1. isBadVersion(middle) === true && isBadVersion(middle - 1) === false
   * 2. isBadVersion(middle) === true && middle === 1
   *
   * when isBadVersion(middle) is true and any of the conditions above are not met, then search on the left subarray
   *
   * when isBadVersion(middle) is false search on the subarray on the right
   */
  return function (n) {
    let lo = 1,
      hi = n;

    while (lo <= hi) {
      let middle = Math.floor((lo + hi) / 2);
      if (isBadVersion(middle) && middle === 1) return 1;
      if (isBadVersion(middle) && !isBadVersion(middle - 1)) return middle;

      if (isBadVersion(middle)) {
        hi = middle - 1;
      } else {
        lo = middle + 1;
      }
    }

    return lo;
  };
};
