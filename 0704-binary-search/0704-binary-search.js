/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let divide = Math.floor((left + right) / 2);

    if (nums[divide] === target) {
      return divide;
    } else if (nums[divide] < target) {
      left = divide + 1;
    } else {
      right = divide - 1;
    }
  }

  return -1;
};
