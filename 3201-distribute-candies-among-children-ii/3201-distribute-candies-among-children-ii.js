/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
  let totalWays = 0;

  for (let a = 0; a <= Math.min(limit, n); a++) {
    const bMin = Math.max(0, n - a - limit);
    const bMax = Math.min(limit, n - a);

    if (bMin <= bMax) {
      totalWays += (bMax - bMin + 1);
    }
  }

  return totalWays;
};
