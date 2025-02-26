/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
  let maxSum = 0;
  let minSum = 0; 
  let curMax = 0;
  let curMin = 0;
  
  for (const num of nums) {
    curMax = Math.max(0, curMax + num);
    curMin = Math.min(0, curMin + num);
    
    maxSum = Math.max(maxSum, curMax);
    minSum = Math.min(minSum, curMin);
  }
  
  return Math.max(maxSum, Math.abs(minSum));};