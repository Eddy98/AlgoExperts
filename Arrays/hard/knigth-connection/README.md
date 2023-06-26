# Knight Connection

You're given the position of two knight pieces on an infinite chess board. Write a function that returns the minimum number of turns required before one of the knights is able to capture the other knight, assuming the knights are working together to achieve this goal.

The position of each knight is given as a list of 2 values, the x and y coordinates. A knight can make 1 of 8 possible moves on any given turn. Each of these moves involves moving in an "L" shape. This means they can either move 2 squares horizontally and 1 square vertically, or they can move 1 square horizontally and 2 squares vertically. For example, if a knight is currently at position [0, 0], then it can move to any of these 8 locations on its next move:

```
[
  [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]
]
```

A knight is able to capture the other knight when it is able to move onto the square currently occupied by the other knight.

Each turn allows each knight to move up to one time. For example, if both knights moved towards each other once, and then knightA captures knightB on its next move, two turns would have been used (even though knightB never made its second move).

Sample Input

```
knightA = [0, 0]
knightB = [4, 2]
```

Sample Output

```
1 // knightA moves to [2, 1], knightB captures knightA on [2, 1]
```

## Hints

### Hint 1

The number of turns needed for two knights to meet on a common square is the same as the number of moves needed for a single knight to reach the other knight divided by two (and rounded up to account for odd numbers of moves).

### Hint 2

Rather than thinking of this problem in terms of chess, try thinking about it as a graph problem. What are the nodes and what are the edges?

### Hint 3

As a graph problem, you can consider each square on the board as a node, and each possible knight move as an edge. Then you can find the distance between those nodes using standard graph algorithms, such as BFS.

## Optimal Space & Time Complexity

O(n _ m) time | O(n _ m) space - where n is horizontal distance between the knights and m is the vertical distance between the knights
