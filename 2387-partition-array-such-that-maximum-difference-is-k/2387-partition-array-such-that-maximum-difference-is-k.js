/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
  nums.sort((a, b) => a - b);

  let groupCount = 1;
  let start = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const value = nums[i];

    if (value - start > k) {
      groupCount++;
      start = value;
    }
  }

  return groupCount;
};
