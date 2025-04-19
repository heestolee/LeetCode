/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
  nums.sort((a, b) => a - b);
  let count = 0;

  function lowerBound(left, right, target) {
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] < target) left = mid + 1;
      else right = mid;
    }
    return left;
  }

  function upperBound(left, right, target) {
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target) left = mid + 1;
      else right = mid;
    }
    return left;
  }

  for (let i = 0; i < nums.length; i++) {
    const left = lowerBound(i + 1, nums.length, lower - nums[i]);
    const right = upperBound(i + 1, nums.length, upper - nums[i]);
    count += right - left;
  }

  return count;
};
