/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
  const valueIndexPairs = nums.map((value, index) => [value, index]);
  const topKInOriginalOrder = valueIndexPairs
    .sort((a, b) => b[0] - a[0])
    .slice(0, k)
    .sort((a, b) => a[1] - b[1]);

  return topKInOriginalOrder.map(([val]) => val);
};
