/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
  const freqMap = new Map();

  for (const letter of s) {
    freqMap.set(letter, (freqMap.get(letter) || 0) + 1);
  }

  let maxOdd = -Infinity;
  let minEven = Infinity;

  for (const count of freqMap.values()) {
    if (count % 2 === 1) {
      maxOdd = Math.max(maxOdd, count);
    } else {
      minEven = Math.min(minEven, count);
    }
  }

  return maxOdd - minEven;
};
