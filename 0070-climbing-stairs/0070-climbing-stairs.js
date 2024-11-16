/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  const resultArray = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    resultArray[i] = resultArray[i - 1] + resultArray[i - 2];
  }

  return resultArray[n];
};