/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  let leftSum = 0;
  let validSplits = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    const rightSum = totalSum - leftSum;

    if (leftSum >= rightSum) {
      validSplits++;
    }
  }
  
  return validSplits;
};