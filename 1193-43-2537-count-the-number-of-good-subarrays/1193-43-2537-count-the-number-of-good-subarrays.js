/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
  const count = new Map();
  let left = 0;
  let pairCount = 0;
  let result = 0;

  for (let right = 0; right < nums.length; right++) {
    const num = nums[right];
    const curCount = count.get(num) || 0;
    
    pairCount += curCount;
    count.set(num, curCount + 1);

    while (pairCount >= k) {
      result += nums.length - right;

      const leftNum = nums[left];
      const leftCount = count.get(leftNum);
      count.set(leftNum, leftCount - 1);
      pairCount -= leftCount - 1;

      left++;
    }
  }

  return result;
};
