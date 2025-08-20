/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  const rowCount = matrix.length;
  const columnCount = matrix[0].length;
  const dpTable = Array.from({ length: rowCount }, () => Array(columnCount).fill(0));
  let totalSquares = 0;

  for (let i = 0; i < rowCount; i += 1) {
    for (let j = 0; j < columnCount; j += 1) {
      if (matrix[i][j] === 1) {
        if (i === 0 || j === 0) {
          dpTable[i][j] = 1;
        } else {
          const top = dpTable[i - 1][j];
          const left = dpTable[i][j - 1];
          const topLeft = dpTable[i - 1][j - 1];
          dpTable[i][j] = Math.min(top, left, topLeft) + 1;
        }
        totalSquares += dpTable[i][j];
      }
    }
  }

  return totalSquares;
};
