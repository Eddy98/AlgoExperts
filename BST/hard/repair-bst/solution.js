/**
 * - Do in-order traversal
 * - Pass the previous node as you traverse
 * -   first look for grater node that is out of place
 * -   if curr node < prev node -> the prev node is out of place
 *
 * -   Then continue looking for smaller out of place node
 * -   if curr node < prev node ->  curr node is out of place
 *
 * - Keep track of these 2 nodes, maybe in an array, and swap their values
 *
 * in order:
 * Left
 * visit
 * right
 */
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function repairBst(tree) {
  const node1 = [];
  const node2 = [];
  const prev = [];
  findSwappedNodes(tree, prev, node1, node2);
  const tempVal = node1[0].value;
  node1[0].value = node2[0].value;
  node2[0].value = tempVal;
  return tree;
}

function findSwappedNodes(node, prev, node1, node2) {
  if (node === null) return;

  findSwappedNodes(node.left, prev, node1, node2);

  const prevValue = prev.length > 0 ? prev[0].value : null;

  if (prevValue && node.value < prevValue) {
    if (node1.length === 0) node1.push(prev[0]);
    node2.pop();
    node2.push(node);
  }

  prev.pop();
  prev.push(node);

  findSwappedNodes(node.right, prev, node1, node2);
}

// Another nicer solution is to have a class like approach

function repairBst(tree) {
  let node1 = null;
  let node2 = null;
  let prev = null;

  function inOrderTraversal(node) {
    if (node === null) return;

    inOrderTraversal(node.left);

    if (prev !== null && node.value < prev.value) {
      if (node1 === null) node1 = prev;
      node2 = node;
    }

    prev = node;

    inOrderTraversal(node.right);
  }

  inOrderTraversal(tree);

  const tempVal = node1.value;
  node1.value = node2.value;
  node2.value = tempVal;
  return tree;
}
