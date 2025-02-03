/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
  let maxLength = 1;
  let currentLength = 1;
  let direction = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      if (direction === 1 || direction === 0) {
        currentLength += 1;
      } else {
        currentLength = 2;
      }
      direction = 1;
    } else if (nums[i] < nums[i - 1]) {
      if (direction === -1 || direction === 0) {
        currentLength += 1;
      } else {
        currentLength = 2;
      }
      direction = -1;
    } else {
      direction = 0;
      currentLength = 1;
    }
    
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}