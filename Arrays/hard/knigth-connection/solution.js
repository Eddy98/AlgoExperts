/**
 * Idea: BFS from A -> B
 *
 *
 */

function knightConnection(knightA, knightB) {
  let queue = [[...knightA, 0]];
  const visited = new Set().add(knightA.toString());
  let ans = -1;

  while (queue.length > 0) {
    const [x, y, dis] = queue.shift();

    if (x === knightB[0] && y === knightB[1]) {
      ans = Math.ceil(dis / 2);
      break;
    }

    const possibleMoves = getPossibleMoves(x, y, dis);
    for (const move of possibleMoves) {
      if (!visited.has(move)) {
        queue.push([...move, dis + 1]);
        visited.add(move);
      }
    }
  }
  return ans;
}

function getPossibleMoves(x, y) {
  const moves = [];

  moves.push(
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [(x - 1, y - 2)]
  );

  return moves;
}
