/**
 * @param {number[]} nums
 * @return {number}
 */
const lenLongestFibSubseq = (nums) => {
  const n = nums.length;
  let maxLength = 0;
  const indexMap = new Map();
  const dp = Array.from({ length: n }, () => Array(n).fill(2));

  for (let i = 0; i < n; i++) {
    indexMap.set(nums[i], i);
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const fibonacciElement = nums[j] + nums[i];

      if (indexMap.has(fibonacciElement)) {
        const k = indexMap.get(fibonacciElement);
        dp[i][k] = dp[j][i] + 1;
        maxLength = Math.max(maxLength, dp[i][k]);
      }
    }
  }

  return maxLength >= 3 ? maxLength : 0;
};
