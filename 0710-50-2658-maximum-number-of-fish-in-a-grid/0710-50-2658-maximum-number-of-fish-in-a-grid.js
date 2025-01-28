/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
  const rowCount = grid.length;
  const colCount = grid[0].length;
  const visited = -1;

  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
  ];

  function dfs (row, col) {
    if (row < 0 || row >= rowCount || col < 0 || col >= colCount || grid[row][col] === 0 || grid[row][col] === visited) {
      return 0;
    }
    let currentFish = grid[row][col];
    grid[row][col] = visited;

    for (const [deltaRow, deltaCol] of directions) {
      currentFish += dfs(row + deltaRow, col + deltaCol);
    }

    return currentFish;
  }

  let maxFishCaught = 0;

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (grid[row][col] > 0) {
        const fishCaughtFromThisCell = dfs(row, col);
        maxFishCaught = Math.max(maxFishCaught, fishCaughtFromThisCell);
      }
    }
  }

  return maxFishCaught;
};