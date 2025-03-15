/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {
  let left = Math.min(...nums);
  let right = Math.max(...nums);
  
  const canRob = (capability) => {
    let count = 0;
    let i = 0;
    
    while (i < nums.length) {
      if (nums[i] <= capability) {
        count++;
        i++;
      }
      i++;
    }
    
    return count >= k;
  };

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    if (canRob(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  
  return left;
};