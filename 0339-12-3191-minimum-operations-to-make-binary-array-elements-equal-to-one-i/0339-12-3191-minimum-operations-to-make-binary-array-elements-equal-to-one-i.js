/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let operations = 0;

  for (let i = 0; i <= nums.length - 3; i++) {
    if (nums[i] === 0) {
      nums[i] ^= 1;
      nums[i + 1] ^= 1;
      nums[i + 2] ^= 1;
      operations++;
    }
  }

  for (let i = nums.length - 3; i < nums.length; i++) {
    if (nums[i] === 0) return -1;
  }

  return operations;
};