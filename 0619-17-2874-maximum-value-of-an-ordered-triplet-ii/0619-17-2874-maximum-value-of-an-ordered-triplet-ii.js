/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
  const rightMax = Array(nums.length).fill(0);
  rightMax[nums.length - 1] = nums[nums.length - 1];

  for (let index = nums.length - 2; index >= 0; index--) {
    rightMax[index] = Math.max(rightMax[index + 1], nums[index]);
  }

  let maxValue = 0;
  let maxLeftValue = nums[0];

  for (let middle = 1; middle < nums.length - 1; middle++) {
    const currentValue = (maxLeftValue - nums[middle]) * rightMax[middle + 1];
    maxValue = Math.max(maxValue, currentValue);
    maxLeftValue = Math.max(maxLeftValue, nums[middle]);
  }

  return maxValue;
};
