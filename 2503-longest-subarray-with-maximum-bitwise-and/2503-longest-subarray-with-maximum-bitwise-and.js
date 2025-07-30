/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function(nums) {
  const maxValue = Math.max(...nums);
  let longestLength = 0;
  let currentLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === maxValue) {
      currentLength += 1;
      longestLength = Math.max(longestLength, currentLength);
    } else {
      currentLength = 0;
    }
  }

  return longestLength;
};
