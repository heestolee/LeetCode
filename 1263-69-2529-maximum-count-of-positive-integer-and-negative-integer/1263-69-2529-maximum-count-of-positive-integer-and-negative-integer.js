/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
  let positiveNumberCount = 0;
  let negativeNumberCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negativeNumberCount++;
    } else if (nums[i] > 0) {
      positiveNumberCount = nums.length - i;
      break;
    }
  }

  return Math.max(positiveNumberCount, negativeNumberCount);
};
