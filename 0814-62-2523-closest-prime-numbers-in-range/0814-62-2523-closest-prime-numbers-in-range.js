/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
  const findPrimes = (limit) => {
    const primeStatus = Array(limit + 1).fill(true);
    primeStatus[0] = primeStatus[1] = false;

    for (let num = 2; num * num <= limit; num++) {
      if (primeStatus[num]) {
        for (let multiple = num * num; multiple <= limit; multiple += num) {
          primeStatus[multiple] = false;
        }
      }
    }
    return primeStatus;
  };

  const primeStatus = findPrimes(right);
  const primesInRange = [];

  for (let num = left; num <= right; num++) {
    if (primeStatus[num]) primesInRange.push(num);
  }

  if (primesInRange.length < 2) return [-1, -1];

  let smallestDifference = Infinity;
  let closestPair = [-1, -1];

  for (let i = 0; i < primesInRange.length - 1; i++) {
    const gap = primesInRange[i + 1] - primesInRange[i];
    if (gap < smallestDifference) {
      smallestDifference = gap;
      closestPair = [primesInRange[i], primesInRange[i + 1]];
    }
  }

  return closestPair;
};
