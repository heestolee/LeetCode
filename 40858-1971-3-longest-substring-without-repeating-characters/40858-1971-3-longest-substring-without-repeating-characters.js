/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLongestSubstring = function(nums) {
  let longestSubstringLength = 0;
  let left = 0;
  const letterSet = new Set();

  for (let right = 0; right < nums.length; right++) {
    while (letterSet.has(nums[right])) {
      letterSet.delete(nums[left]);
      left++;
    }
    letterSet.add(nums[right]);
    longestSubstringLength = Math.max(longestSubstringLength, right - left + 1);
  }

  return longestSubstringLength;
};
