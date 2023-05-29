class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function symmetricalTree(tree) {
  // We are going to have 2 stacks, one for the left sub tree, one for the right subtree
  // We are going to traverse using DFS

  const leftStack = [tree.left];
  const rightStack = [tree.right];

  while (leftStack.length > 0 && rightStack.length > 0) {
    const leftNode = leftStack.pop();
    const rightNode = rightStack.pop();

    if (leftNode === null && rightNode === null) {
      continue;
    }

    if (leftNode === null || rightNode === null) return false;

    if (leftNode && rightNode && leftNode.value !== rightNode.value)
      return false;

    leftStack.push(leftNode.left, leftNode.right);
    rightStack.push(rightNode.right, rightNode.left);
  }

  if (leftStack.length !== 0 && rightStack.length !== 0) return false;

  return true;
}

// Recursive approach

function symmetricalTree(tree) {
  return traverseSymmetrical(tree.left, tree.right);
}

function traverseSymmetrical(left, right) {
  if (left !== null && right !== null && left.value === right.value) {
    return (
      traverseSymmetrical(left.left, right.right) &&
      traverseSymmetrical(left.right, right.left)
    );
  }

  return left === right;
}
