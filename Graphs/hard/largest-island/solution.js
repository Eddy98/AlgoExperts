// this is the brute force approach

//How can i optimize this?

function largestIsland(matrix) {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[0].length; k++) {
      if (matrix[i][k] === 1) {
        matrix[i][k] = 0;
        max = Math.max(max, largestIslandHelper(matrix, null, i, k));
        matrix[i][k] = 1;
      }
    }
  }
  return max;
}

function largestIslandHelper(matrix, visited, row, col) {
  if (visited == null) {
    visited = new Array(matrix.length)
      .fill(null)
      .map((_) => new Array(matrix[0].length).fill(false));
  }
  //   console.log(visited);
  if (row >= matrix.length || row < 0 || col >= matrix[0].length || col < 0)
    return 0;
  if (matrix[row][col] === 1) return 0;
  if (visited[row][col] === true) return 0;

  visited[row][col] = true;

  const sum =
    1 +
    largestIslandHelper(matrix, visited, row + 1, col) +
    largestIslandHelper(matrix, visited, row - 1, col) +
    largestIslandHelper(matrix, visited, row, col + 1) +
    largestIslandHelper(matrix, visited, row, col - 1);

  return sum;
}

/* Optimal solution

Find all island, and record teh size of the land mass by changing all the 0s to a number
Keep track of the size of the land mass by using a map, key [number in matrix] -> size
Iterate through 1s and get size on new landmass by adding neighbor total sum of land mass plus 1
*/

function largestIsland(matrix) {
  let max = 0;
  const islandSizes = recordIslandSizes(matrix);

  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[0].length; k++) {
      if (matrix[i][k] === 1) {
        const set = new Set();

        const totalSize =
          1 +
          checkSize(matrix, i + 1, k, islandSizes, set) +
          checkSize(matrix, i - 1, k, islandSizes, set) +
          checkSize(matrix, i, k + 1, islandSizes, set) +
          checkSize(matrix, i, k - 1, islandSizes, set);
        max = Math.max(totalSize, max);
      }
    }
  }
  return max;
}

function checkSize(matrix, row, col, islandSizes, set) {
  if (row >= matrix.length || row < 0 || col >= matrix[0].length || col < 0)
    return 0;
  if (matrix[row][col] === 1) return 0;
  if (set.has(matrix[row][col])) return 0;

  set.add(matrix[row][col]);
  return islandSizes[matrix[row][col]];
}

function recordIslandSizes(matrix) {
  let islandId = 2;
  const islandSizes = {};

  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[0].length; k++) {
      if (matrix[i][k] === 0) {
        const size = DFS(matrix, i, k, islandId);
        islandSizes[islandId] = size;
        islandId++;
      }
    }
  }
  return islandSizes;
}

function DFS(matrix, row, col, islandId) {
  if (row >= matrix.length || row < 0 || col >= matrix[0].length || col < 0)
    return 0;
  if (matrix[row][col] !== 0) return 0;

  matrix[row][col] = islandId;

  const sum =
    1 +
    DFS(matrix, row + 1, col, islandId) +
    DFS(matrix, row - 1, col, islandId) +
    DFS(matrix, row, col + 1, islandId) +
    DFS(matrix, row, col - 1, islandId);

  return sum;
}

console.log(
  largestIsland([
    [0, 1, 1],
    [0, 0, 1],
    [1, 1, 0],
  ])
);
