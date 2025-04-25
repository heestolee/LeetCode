/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
  const prefixMap = new Map();
  prefixMap.set(0, 1);

  let prefixSum = 0;
  let result = 0;

  for (const num of nums) {
    if (num % modulo === k) {
      prefixSum = (prefixSum + 1) % modulo;
    }

    const target = (prefixSum - k + modulo) % modulo;

    if (prefixMap.has(target)) {
      result += prefixMap.get(target);
    }
    prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1);
  }

  return result;
};