/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
  const result = new Set();
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      const start = Math.max(0, i - k);
      const end = Math.min(nums.length - 1, i + k);
      for (let j = start; j <= end; j++) {
        result.add(j);
      }
    }
  }
  
  return Array.from(result).sort((a, b) => a - b);
};
