/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
  const flat = grid.flat();
  const base = flat[0];

  for (const num of flat) {
    if ((num - base) % x !== 0) return -1;
  }

  const transformed = flat.map(num => Math.floor((num - base) / x));
  transformed.sort((a, b) => a - b);

  const mid = transformed[Math.floor(transformed.length / 2)];

  let operations = 0;
  for (const val of transformed) {
    operations += Math.abs(val - mid);
  }

  return operations;
};
