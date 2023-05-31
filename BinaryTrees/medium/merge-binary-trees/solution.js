// Recursive solution

function mergeBinaryTrees(tree1, tree2) {
  // Write your code here.
  return mergeHelper(tree1, tree2);
}

function mergeHelper(node1, node2) {
  if (node1 === null) return node2;
  if (node2 === null) return node1;

  const sumNode = new BinaryTree(node1.value + node2.value);

  sumNode.left = mergeHelper(node1.left, node2.left);
  sumNode.right = mergeHelper(node1.right, node2.right);

  return sumNode;
}

//Iterative solution, I tried coming up with this solution as well, but got stuck ]
// how to handle difference with null nodes between the 2 trees
// The solution was pretty simple, just assign the node of the tree that you are not copying over
// Or ignore any additions if the other tree node you are not copying over is null
// the important part is to recognize that we can use the structure of one of the trees as a base, overwriting with the new sum values

// O(n) time | O(h) space - where n is the number of nodes in the smaller of the
// two trees and h is the height of the shorter tree.
function mergeBinaryTrees(tree1, tree2) {
  if (tree1 === null) return tree2;

  const tree1Stack = [tree1];
  const tree2Stack = [tree2];

  while (tree1Stack.length > 0) {
    const tree1Node = tree1Stack.pop();
    const tree2Node = tree2Stack.pop();

    if (tree2Node === null) continue;

    tree1Node.value += tree2Node.value;

    if (tree1Node.left === null) {
      tree1Node.left = tree2Node.left;
    } else {
      tree1Stack.push(tree1Node.left);
      tree2Stack.push(tree2Node.left);
    }

    if (tree1Node.right === null) {
      tree1Node.right = tree2Node.right;
    } else {
      tree1Stack.push(tree1Node.right);
      tree2Stack.push(tree2Node.right);
    }
  }

  return tree1;
}
