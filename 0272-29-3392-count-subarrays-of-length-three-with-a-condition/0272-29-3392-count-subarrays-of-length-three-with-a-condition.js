/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    const first = nums[i];
    const middle = nums[i + 1];
    const third = nums[i + 2];

    if (first + third === middle / 2) {
      count++;
    }
  }

  return count;
};