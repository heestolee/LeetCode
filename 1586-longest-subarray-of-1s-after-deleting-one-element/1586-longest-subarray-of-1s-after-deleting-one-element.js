/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  const atMostOneZero = 1;
  let left = 0;
  let zeroCount = 0;
  let maxWindowLength = 0;

  for (let right = 0; right < nums.length; right += 1) {
    if (nums[right] === 0) zeroCount += 1;

    while (zeroCount > atMostOneZero) {
      if (nums[left] === 0) zeroCount -= 1;
      left += 1;
    }

    const currentWindowLength = right - left + 1;
    if (currentWindowLength > maxWindowLength) {
      maxWindowLength = currentWindowLength;
    }
  }

  const result = maxWindowLength - 1;

  return result < 0 ? 0 : result;
};
