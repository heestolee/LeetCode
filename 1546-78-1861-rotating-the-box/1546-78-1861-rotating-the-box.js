/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
  const originalRows = box.length;
  const originalCols = box[0].length;

  for (let row = 0; row < originalRows; row++) {
    let write = originalCols - 1;
    for (let col = originalCols - 1; col >= 0; col--) {
      if (box[row][col] === '*') {
        write = col - 1;
      } else if (box[row][col] === '#') {
        if (col !== write) {
          box[row][write] = '#';
          box[row][col] = '.';
        }
        write--;
      }
    }
  }

  const rotatedRows = originalCols;
  const rotatedCols = originalRows;
  const rotated = Array.from({ length: rotatedRows }, () => Array(rotatedCols).fill('.'));

  for (let row = 0; row < originalRows; row++) {
    for (let col = 0; col < originalCols; col++) {
      rotated[col][rotatedCols - 1 - row] = box[row][col];
    }
  }

  return rotated;
};
