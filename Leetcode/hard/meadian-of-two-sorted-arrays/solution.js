/**
 *  Median of Two Sorted Arrays
 *
 * Example 1:
 *
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 *
 * Example 2:
 *
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 *
 *
 *
 * One solution is to merge the arrays efficiently. Based on the length of the array we know that:
 * One sorted there are 2 cases
 *  M + N is odd, so the median is at M + N / 2 index of the sorted merged array
 *
 *  M + N is even, so the median is the average of (M + N / 2) - 1 and (M + N / 2) indexes
 *
 * we'll call this one Solution 1, and i think it runs O(N + M) time complexity and O(1) space complexity
 *
 *
 * Another more efficient solution is possible using binary search
 *
 */

var findMedianSortedArrays = function (nums1, nums2) {
  const isEven = (nums1.length + nums2.length) % 2 === 0;
  const medianIndex = Math.floor((nums1.length + nums2.length) / 2);

  let m1 = 0;
  let m2 = 0;
  let p1 = 0;
  let p2 = 0;
  if (!isEven) {
    while (p1 + p2 <= medianIndex) {
      if (nums1[p1] < nums2[p2]) {
        m1 = nums1[p1];
        p1++;
      } else {
        m1 = nums2[p2];
        p2++;
      }
    }
    return m1;
  } else {
    while (p1 + p2 <= medianIndex) {
      m2 = m1;
      if (p1 !== nums1.length && p2 !== nums2.length) {
        if (nums1[p1] < nums2[p2]) {
          m1 = nums1[p1];
          p1++;
        } else {
          m1 = nums2[p2];
          p2++;
        }
      } else if (p1 < nums1.length) {
        m1 = nums1[p1];
        p1++;
      } else {
        m1 = nums2[p2];
        p2++;
      }
    }
    return (m1 + m2) / 2;
  }
};

var findMedianSortedArrays = function (nums1, nums2) {
  const isEven = (nums1.length + nums2.length) % 2 === 0;
  const medianIndex = Math.floor((nums1.length + nums2.length) / 2);

  let m1 = 0;
  let m2 = 0;
  let p1 = 0;
  let p2 = 0;
  while (p1 + p2 <= medianIndex) {
    m2 = m1;
    if (p1 !== nums1.length && p2 !== nums2.length) {
      if (nums1[p1] < nums2[p2]) {
        m1 = nums1[p1];
        p1++;
      } else {
        m1 = nums2[p2];
        p2++;
      }
    } else if (p1 < nums1.length) {
      m1 = nums1[p1];
      p1++;
    } else {
      m1 = nums2[p2];
      p2++;
    }
  }

  return isEven ? (m1 + m2) / 2 : m1;
};
