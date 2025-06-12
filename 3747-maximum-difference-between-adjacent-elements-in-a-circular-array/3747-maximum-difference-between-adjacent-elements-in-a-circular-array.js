/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
  let maxDiff = 0;

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const next = nums[(i + 1) % nums.length];
    const diff = Math.abs(current - next);
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }

  return maxDiff;
};
