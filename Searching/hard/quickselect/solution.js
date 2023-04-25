function quickselect(array, k) {
  let left = 0,
    right = array.length - 1;

  while (left <= right) {
    // Pick Random Pivot
    const middle = (left + right) / 2;
    let pivotIdx = pickPivotIdx(left, right, middle, array);

    // Swap to the end of range
    swap(pivotIdx, right, array);

    pivotIdx = right;
    pivotVal = array[pivotIdx];

    let slow = left,
      fast = left;
    while (fast <= right) {
      if (array[fast] <= pivotVal) {
        swap(slow, fast, array);
        slow++;
      }
      fast++;
    }
    slow--;
    pivotIdx = slow;

    if (pivotIdx < k - 1) {
      // check right
      left = pivotIdx + 1;
    } else if (pivotIdx > k - 1) {
      // check left
      right = pivotIdx - 1;
    } else {
      return array[pivotIdx];
    }
  }
}

// Typically you want to pick a median value to get the best possible partition
// We can accomplish this by picking 3 points of the range we are partitioning, the start, the middle, and the end, and picking the median value of these 3
function pickPivotIdx(left, right, middle, array) {
  let leftVal = array[left],
    rightVal = array[right],
    middleVal = array[middle];

  if (middleVal <= rightVal && middleVal >= leftVal) return middle;
  if (leftVal <= middleVal && leftVal >= rightVal) return left;
  return right;
}

function swap(left, right, array) {
  const temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}
