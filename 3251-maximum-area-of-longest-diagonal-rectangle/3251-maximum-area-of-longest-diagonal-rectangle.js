/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
  let maxDiagonal = 0;
  let maxArea = 0;

  for (let i = 0; i < dimensions.length; i++) {
    const length = dimensions[i][0];
    const width = dimensions[i][1];
    const diagonal = length * length + width * width;
    const area = length * width;

    if (diagonal > maxDiagonal) {
      maxDiagonal = diagonal;
      maxArea = area;
    } else if (diagonal === maxDiagonal && area > maxArea) {
      maxArea = area;
    }
  }

  return maxArea;
};
