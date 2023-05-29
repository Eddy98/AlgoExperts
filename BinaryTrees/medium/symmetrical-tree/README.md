# Symmetrical Tree

Write a function that takes in a Binary Tree and returns if that tree is symmetrical. A tree is symmetrical if the left and right subtrees are mirror images of each other.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

Sample Input

```
tree =    1
       /     \
      2       2
    /   \   /   \
   3     4 4     3
 /   \          /  \
5     6        6    5
```

Sample Output

```
True
```

## Hints

### Hint 1

It's important to first think about what it means for a binary tree to be symmetrical. The left and right subtrees do not need to be the same, but rather they need to be mirror images of each other (i.e. the same if one is inverted).

### Hint 2

It can be helpful to think about this problem one step at a time. Looking at just the first node, how can you ensure its children are symmetrical? Then looking at those children, how can you make sure they are symmetrical of each other?

### Hint 3

This problem can be solved either recursively or iteratively. Either way, try traversing through the tree, uses a mirrored traversal on one side, and check that the values of each node are the same.

## Optimal Space & Time Complexity

O(n) time | O(h) space - where n is the number of nodes in the tree and h is the height of the tree.
