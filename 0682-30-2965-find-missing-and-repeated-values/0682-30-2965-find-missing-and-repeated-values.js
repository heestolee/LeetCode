/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
  const flattenGrid = grid.flat();
  const result = [];
  const numberSet = new Set();

  for (const number of flattenGrid) {
    if (numberSet.has(number)) {
      result.push(number);
    }
    numberSet.add(number);
  }

  for (let i = 1; i <= flattenGrid.length; i++) {
    if (!numberSet.has(i)) {
      result.push(i);
    }
  }

  return result;
};