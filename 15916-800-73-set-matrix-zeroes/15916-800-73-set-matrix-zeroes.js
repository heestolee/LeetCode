/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const hasZeroInFirstRow = () => {
    for (let c = 0; c < cols; c++) {
      if (matrix[0][c] === 0) return true;
    }
    return false;
  };

  const hasZeroInFirstCol = () => {
    for (let r = 0; r < rows; r++) {
      if (matrix[r][0] === 0) return true;
    }
    return false;
  };

  const markZeros = () => {
    for (let r = 1; r < rows; r++) {
      for (let c = 1; c < cols; c++) {
        if (matrix[r][c] === 0) {
          matrix[r][0] = 0;
          matrix[0][c] = 0;
        }
      }
    }
  };

  const applyMarkedZeros = () => {
    for (let r = 1; r < rows; r++) {
      for (let c = 1; c < cols; c++) {
        if (matrix[r][0] === 0 || matrix[0][c] === 0) {
          matrix[r][c] = 0;
        }
      }
    }
  };

  const zeroOutFirstRow = () => {
    for (let c = 0; c < cols; c++) {
      matrix[0][c] = 0;
    }
  };

  const zeroOutFirstCol = () => {
    for (let r = 0; r < rows; r++) {
      matrix[r][0] = 0;
    }
  };

  const firstRowHasZero = hasZeroInFirstRow();
  const firstColHasZero = hasZeroInFirstCol();

  markZeros();
  applyMarkedZeros();

  if (firstRowHasZero) zeroOutFirstRow();
  if (firstColHasZero) zeroOutFirstCol();
};
