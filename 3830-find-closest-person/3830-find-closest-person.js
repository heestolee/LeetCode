/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
  const distance1 = Math.abs(x - z);
  const distance2 = Math.abs(y - z);

  if (distance1 < distance2) {
    return 1;
  }
  if (distance2 < distance1) {
    return 2;
  }
  return 0;
};
