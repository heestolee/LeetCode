/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
  const MOD = 1_000_000_007n;

  function modPow(base, exp, mod) {
    let result = 1n;
    base = BigInt(base);
    exp = BigInt(exp);
    while (exp > 0) {
      if (exp % 2n === 1n) {
        result = (result * base) % mod;
      }
      base = (base * base) % mod;
      exp = exp / 2n;
    }
    return result;
  }

  const evenCount = BigInt(Math.ceil(n / 2));
  const oddCount = BigInt(Math.floor(n / 2));

  const fivePow = modPow(5n, evenCount, MOD);
  const fourPow = modPow(4n, oddCount, MOD);

  return Number((fivePow * fourPow) % MOD);
};
