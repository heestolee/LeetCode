/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
  let totalSubarrays = 0;
  let zeroRunLength = 0;

  for (const value of nums) {
    if (value === 0) {
      zeroRunLength += 1;
      totalSubarrays += zeroRunLength;
    } else {
      zeroRunLength = 0;
    }
  }

  return totalSubarrays;
};
