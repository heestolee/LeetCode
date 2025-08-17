/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
  if (k === 0 || n >= (k - 1) + maxPts) return 1;

  const probabilities = new Array(n + 1).fill(0);
  probabilities[0] = 1;

  let windowSum = 1;
  let result = 0;

  for (let points = 1; points <= n; points += 1) {
    probabilities[points] = windowSum / maxPts;

    if (points < k) {
      windowSum += probabilities[points];
    } else {
      result += probabilities[points];
    }

    const outIndex = points - maxPts;
    if (outIndex >= 0) {
      windowSum -= probabilities[outIndex];
    }
  }

  return result;
};
