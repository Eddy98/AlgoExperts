# Largest Island

You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only 0s and 1s. Each 1 represents water, and each 0 represents part of a land mass. A land mass consists of any number of 0s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 0s forming a land mass determine its size.

Note that a land mass can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.

Write a function that returns the largest possible land mass size after changing exactly one 1 to a 0. Note that the given matrix will always contain at least one 1, and you may mutate the matrix.

Sample Input

```
matrix = [
  [0, 1, 1],
  [0, 0, 1],
  [1, 1, 0]
]
```

Sample Output

```
5 // Switching either matrix[1][2] or matrix[2][2]
// creates a land mass of size 5
```

# Hints

### Hint 1

A brute force approach to this problem would be to try changing every 1 into a 0. From there, you can check what the largest land mass size is from the newly changed index.

### Hint 2

The brute force approach potentially calculates the size of the same land mass multiple times. Can you try to optimize this?

### Hint 3

You can change values in the matrix to help keep track of additional useful information about a given index.

### Hint 4

Try first precomputing the sizes of each land mass. Changing any 1 would then create a new land mass of the combined sizes of all its adjacent land masses plus one to account for the newly changed value.

### Hint 5

To avoid double counting land masses, try updating the matrix with unique identifiers for each land mass to know which 0's are from the same land mass.

## Optimal Space & Time Complexity

O(w _ h) time | O(w _ h) space - where w is the width of the matrix, and h is the height of the matrix
