# Merge Binary Trees

Given two binary trees, merge them and return the resulting tree. If two nodes overlap during the merger then sum the values, otherwise use the existing node.

Note that your solution can either mutate the existing trees or return a new tree.

Sample Input

```
tree1 =   1
        /   \
       3     2
     /   \
    7     4

tree2 =   1
        /   \
       5     9
     /      / \
    2      7   6
```

Sample Output

```
output =  2
        /   \
      8      11
    /  \    /  \
  9     4  7    6
```

## Hints

### Hint 1

If the function takes two tree nodes as parameters then what should be returned if either of the two nodes is null? Remember, if two nodes overlap during the merger then sum the values, otherwise use the existing node. How can you sum the tree node values when they overlap?

### Hint 2

If two tree nodes overlap then sum the values into either one of the nodes. This node will be returned from the function. Recursively call the function twice passing in both trees' left nodes as well as their right nodes.

### Hint 3

The iterative approach to this problem uses a stack in replacement of the recusions stack space. What would you push onto the stack in order to traverse and merge the binary trees?

### Hint 4

You can either use a single stack and push associated pairs of nodes on the stack, or you can maintain a stack for each tree.

## Optimal Space & Time Complexity

O(n) time | O(h) space - where n is the number of nodes in the smaller of the two trees and h is the height of the shorter tree.
