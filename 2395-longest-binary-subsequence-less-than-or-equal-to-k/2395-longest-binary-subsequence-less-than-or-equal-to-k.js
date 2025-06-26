/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
  let count = 0;
  let value = 0;
  let weight = 1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '0') {
      count++;
    } else {
      if (weight <= k && value + weight <= k) {
        value += weight;
        count++;
      }
    }

    if (weight <= k) {
      weight *= 2;
    }
  }

  return count;
};
