/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const triangle = [];

  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    const row = [];

    for (let colIndex = 0; colIndex <= rowIndex; colIndex++) {
      if (colIndex === 0 || colIndex === rowIndex) {
        row.push(1);
      } else {
        const upperLeft = triangle[rowIndex - 1][colIndex - 1];
        const upperRight = triangle[rowIndex - 1][colIndex];
        row.push(upperLeft + upperRight);
      }
    }

    triangle.push(row);
  }

  return triangle;
};
