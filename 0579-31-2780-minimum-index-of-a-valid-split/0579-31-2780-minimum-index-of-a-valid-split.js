/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
  const n = nums.length;
  const countMap = new Map();

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  let dominant = -1;
  for (const [num, count] of countMap.entries()) {
    if (count * 2 > n) {
      dominant = num;
      break;
    }
  }

  let leftCount = 0;
  let totalCount = countMap.get(dominant);

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === dominant) {
      leftCount++;
    }

    const leftLength = i + 1;
    const rightLength = n - leftLength;
    const rightCount = totalCount - leftCount;

    if (leftCount * 2 > leftLength && rightCount * 2 > rightLength) {
      return i;
    }
  }

  return -1;
};