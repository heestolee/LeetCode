/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
  const MOD = 1e9 + 7;
  const dp = new Array(t + 1).fill(0).map(() => new Array(26).fill(0));

  for (const letter of s) {
    dp[0][letter.charCodeAt(0) - 97]++;
  }

  for (let i = 1; i <= t; i++) {
    for (let c = 0; c < 26; c++) {
      const count = dp[i - 1][c];
      if (c === 25) {
        dp[i][0] = (dp[i][0] + count) % MOD;
        dp[i][1] = (dp[i][1] + count) % MOD;
      } else {
        dp[i][c + 1] = (dp[i][c + 1] + count) % MOD;
      }
    }
  }

  return dp[t].reduce((acc, val) => (acc + val) % MOD, 0);
};
