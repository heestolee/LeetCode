/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
  const totalPairs = (nums.length * (nums.length - 1)) / 2;
  const countMap = new Map();
  let goodPairs = 0;

  for (let i = 0; i < nums.length; i++) {
    const key = i - nums[i];

    if (countMap.has(key)) {
      goodPairs += countMap.get(key);
      countMap.set(key, countMap.get(key) + 1);
    } else {
      countMap.set(key, 1);
    }
  }

  return totalPairs - goodPairs;
};