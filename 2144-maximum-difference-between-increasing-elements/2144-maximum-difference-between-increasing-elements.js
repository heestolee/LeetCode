/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
  let minBeforeCurrent = nums[0];
  let maxDiff = -1;

  for (let i = 1; i < nums.length; i++) {
    const value = nums[i];

    if (value > minBeforeCurrent) {
      const diff = value - minBeforeCurrent;
      if (diff > maxDiff) maxDiff = diff;
    } else {
      minBeforeCurrent = value;
    }
  }

  return maxDiff;
};
