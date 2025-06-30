/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const countMap = new Map();
  let maxLength = 0;

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const [num, count] of countMap) {
    if (countMap.has(num + 1)) {
      const length = count + countMap.get(num + 1);
      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
};
