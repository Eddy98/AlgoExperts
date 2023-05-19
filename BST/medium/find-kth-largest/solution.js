class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/* 
Idea: For a BST, in-order traversal would give us the order of the nodes, from smallest to greatest
If we do a reverse in-order traversal, that should give us the order from largest to smallest

right
visit
left

*/

function findKthLargestValueInBst(tree, k) {
  const obj = { count: 0 };
  reverseInOrderTraversal(tree, k, obj);

  return obj.KthLargest;
}

function reverseInOrderTraversal(node, k, obj) {
  if (node === null || obj.KthLargest) return;

  // right
  reverseInOrderTraversal(node.right, k, obj);

  // visit
  obj.count += 1;
  if (obj.count === k) {
    obj.KthLargest = node.value;
  }

  // left
  reverseInOrderTraversal(node.left, k, obj);
}
