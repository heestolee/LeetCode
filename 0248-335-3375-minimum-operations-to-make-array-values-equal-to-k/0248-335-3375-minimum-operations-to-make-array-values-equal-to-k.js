/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  if (Math.min(...nums) < k) return -1;

  const seen = new Set();
  const descending = [...new Set(nums)].sort((a, b) => b - a);
  let operations = 0;

  for (const val of descending) {
    if (val <= k) break;

    if (!seen.has(val)) {
      const count = nums.filter(n => n === val).length;
      if (count === 0) continue;

      seen.add(val);
      operations++;
    }
  }

  return operations;
}
