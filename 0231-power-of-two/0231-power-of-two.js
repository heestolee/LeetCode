/**
 * @param {number} number
 * @return {boolean}
 */
const isPowerOfTwo = function(number) {
  if (number <= 0) {
    return false;
  }
  return (number & (number - 1)) === 0;
};
