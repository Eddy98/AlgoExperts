function majorityElement(array) {
  let i = 1;
  let c = 1;
  let guessedMajorityNumber = array[0];
  while (i < array.length) {
    if (array[i] === guessedMajorityNumber) {
      c++;
    } else {
      c--;
    }
    if (c === 0) {
      guessedMajorityNumber = array[i];
      c = 1;
    }
    i++;
  }
  return guessedMajorityNumber;
}

// Key idea of this questions was to understand the following:
// You are able to keep count of majority element, adding every time the number is seen, and subtracting
// Idea being that by the end... the count should be at least 1
// Now the key is to identify that if your count reaches 0 at any time, you can discard that majority element
// and continue checking the remaining of the subarray, the majority element should STILL be the majority element of the
// remaining subarray

/* Another idea is to implement a quickselect to search for the Length / 2  smallest element
since the majority element should always occupy the middle if list is sorted

[3,9,5,6,4]
pivot = 5
move pivot to the end
[3,9,4,6,5]
     ^
Have a fast and slow pointer
if fast > pivot

if fast <= pivot
  swap slow fast
     s
[3,4,9,6,5]
         f

[3,4,5,6,9]


           p  s
[1,2,2,2,1,2,3]
               f
pivot = 2


 */
function majorityElement(array) {
  let left = 0,
    right = array.length - 1;

  while (left <= right) {
    const middle = (left + right) / 2;
    let pivotIndex = pickPivotIdx(left, right, middle, array);

    swap(pivotIndex, right, array);

    pivotIndex = right;
    pivotVal = array[pivotIndex];

    let fast = left,
      slow = left;
    while (fast <= right) {
      if (array[fast] <= pivotVal) {
        swap(slow, fast, array);
        slow++;
      }
      fast++;
    }
    slow--;
    pivotIndex = slow;

    if (pivotIndex > array.length / 2) {
      right = pivotIndex - 1;
    } else if (pivotIndex < array.length / 2) {
      left = pivotIndex + 1;
    } else {
      return array[pivotIndex];
    }
  }
}

function pickPivot(array, i, j) {
  let middle = Math.floor((i + j) / 2);
  if (array[i] > array[j] && array[i] < array[middle]) return i;
  else if (array[j] > array[i] && array[j] < array[middle]) return j;
  else return middle;
}

function swap(left, right, array) {
  const temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}
