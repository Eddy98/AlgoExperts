// Idea is to do a BFS on the graph

/*
1. Start at any node, in this case we start at node 0 since we are guaranteed to have at least one node

2. Assign a color to the node, and traverse using BFS

3. Make sure that the next round that is pushed into the BFS queue is the opposite color

4. Before adding to queue, check if the node has being visited, and of the color is opposite. If it's the same color
then you can return false.
*/

function twoColorable(edges) {
  const queue = [[0, 'red']];
  const colorMap = {};

  while (queue.length !== 0) {
    const [popNode, color] = queue.shift();
    colorMap[popNode] = color;

    for (const neighbor of edges[popNode]) {
      // if we have not visited the node yet
      if (!colorMap[neighbor]) {
        queue.push([neighbor, getOtherColor(color)]);
      } else {
        // invalid
        if (color === colorMap[neighbor]) {
          return false;
        }
      }
    }
  }

  return true;
}

const getOtherColor = (currentColor) => {
  if (currentColor === 'red') return 'blue';
  else return 'red';
};
