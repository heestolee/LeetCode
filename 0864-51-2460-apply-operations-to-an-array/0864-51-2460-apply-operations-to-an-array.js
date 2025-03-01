/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
  const result = [];
  let zeroCount = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1] && nums[i] !== 0) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  for (const num of nums) {
    if (num !== 0) {
      result.push(num);
    } else {
      zeroCount++;
    }
  }

  while (zeroCount) {
    result.push(0);
    zeroCount--;
  }

  return result;
};