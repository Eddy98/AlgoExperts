/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  if (root === null) return 0;

  const sum =
    rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);

  if (root.value >= low && root.value <= high) sum += root.value;

  return sum;
};

// Iterative solution
var rangeSumBST = function (root, low, high) {
  const queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    const { val, left, right } = queue.shift();
    if (val >= low && val <= high) sum += val;

    if (left) queue.push(left);
    if (right) queue.push(right);
  }

  return sum;
};
