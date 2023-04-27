// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*
1. Idea is to first get the total sum
2. If sum is odd, then we know the split is not possible because the nodes contain only integers
3. Else if even, we traverse the tree as well in a post order manner, checking if there is ever a sub tree that its sum is equal to HALF the total sum
4. Use an object to keep track of half sum, and if it's possible to split
*/

function splitBinaryTree(tree) {
  const totalSum = getTotalSumOfBinaryTree(tree);

  if (totalSum % 1 === 1) return 0;

  const data = {
    halfSum: totalSum / 2,
    isPossible: false,
  };

  checkForSplit(tree, data);

  return data.isPossible ? data.halfSum : 0;
}

function checkForSplit(node, data) {
  if (node === null) return 0;

  const { halfSum } = data;

  const leftSum = checkForSplit(node.left, data);
  const rightSum = checkForSplit(node.right, data);

  if (leftSum === halfSum || rightSum === halfSum) {
    data.isPossible = true;
  }

  return node.value + leftSum + rightSum;
}

function getTotalSumOfBinaryTree(node) {
  if (node === null) return 0;

  return (
    node.value +
    getTotalSumOfBinaryTree(node.right) +
    getTotalSumOfBinaryTree(node.left)
  );
}
