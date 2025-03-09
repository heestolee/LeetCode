/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
  colors = colors.concat(colors.slice(0, k - 1));
  
  let count = 0;
  let currentLength = 1;

  for (let i = 1; i < colors.length; i++) {
    if (colors[i] !== colors[i - 1]) {
      currentLength++;
    } else {
      currentLength = 1;
    }

    if (currentLength >= k) count++;
  }

  return count;
};