/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const targetValue = image[sr][sc];
    const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    if (targetValue === color) return image;

    function fill (row, column) {
      if (row < 0 || row >= image.length || column < 0 || column >= image[0].length) return;

      if (image[row][column] !== targetValue) return;

      image[row][column] = color;

      direction.forEach(([dr, dc]) => {
        fill(row + dr, column + dc);
      });
    };
    fill(sr, sc);

    return image;
};  