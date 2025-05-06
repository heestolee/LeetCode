/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    answer[i] = nums[nums[i]];
  }
  return answer;
};
