/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {
  const MOD = 1000000007;

  const powerValues = [];
  for (let base = 1; ; base += 1) {
    const power = base ** x;
    if (power > n) break;
    powerValues.push(power);
  }

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (const power of powerValues) {
    for (let currentSum = n; currentSum >= power; currentSum -= 1) {
      dp[currentSum] = (dp[currentSum] + dp[currentSum - power]) % MOD;
    }
  }

  return dp[n];
};
