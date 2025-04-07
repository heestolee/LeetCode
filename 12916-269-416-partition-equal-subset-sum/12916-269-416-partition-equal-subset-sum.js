/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  
  if (totalSum % 2 !== 0) return false;
  
  const target = totalSum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let i = target; i >= num; i--) {
      if (dp[i - num]) {
        dp[i] = true;
      }
    }
  }

  return dp[target];
};
