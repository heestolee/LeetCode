/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
  let minValueSoFar = nums[0];
  let maxDiff = -1;

  for (let i = 1; i < nums.length; i++) {
    const currentValue = nums[i];

    if (currentValue > minValueSoFar) {
      const diff = currentValue - minValueSoFar;
      maxDiff = Math.max(maxDiff, diff);
    } else {
      minValueSoFar = currentValue;
    }
  }

  return maxDiff;
};
