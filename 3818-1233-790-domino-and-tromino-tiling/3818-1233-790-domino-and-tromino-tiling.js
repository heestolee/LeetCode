/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
  const MOD = 1e9 + 7;
  const dp = Array(n + 1).fill(0);
  const prefixSum = Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;
  if (n >= 2) dp[2] = 2;

  prefixSum[0] = dp[0];
  prefixSum[1] = (dp[0] + dp[1]) % MOD;
  if (n >= 2) prefixSum[2] = (prefixSum[1] + dp[2]) % MOD;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + 2 * prefixSum[i - 3]) % MOD;
    prefixSum[i] = (prefixSum[i - 1] + dp[i]) % MOD;
  }

  return dp[n];
};
