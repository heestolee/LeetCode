/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
  const rowCount = grid.length;
  const colCount = grid[0].length;

  let found = false;
  let minRow = 0;
  let maxRow = 0;
  let minCol = 0;
  let maxCol = 0;

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    const row = grid[rowIndex];
    for (let colIndex = 0; colIndex < colCount; colIndex += 1) {
      if (row[colIndex] === 1) {
        if (!found) {
          minRow = rowIndex;
          maxRow = rowIndex;
          minCol = colIndex;
          maxCol = colIndex;
          found = true;
        } else {
          if (rowIndex < minRow) minRow = rowIndex;
          if (rowIndex > maxRow) maxRow = rowIndex;
          if (colIndex < minCol) minCol = colIndex;
          if (colIndex > maxCol) maxCol = colIndex;
        }
      }
    }
  }

  const height = maxRow - minRow + 1;
  const width = maxCol - minCol + 1;
  return height * width;
};
