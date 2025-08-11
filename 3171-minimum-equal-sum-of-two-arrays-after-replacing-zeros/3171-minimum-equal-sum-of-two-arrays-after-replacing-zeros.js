/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
  const getSumAndZeroCount = (array) => {
    let sumWithoutZeros = 0;
    let zeroCount = 0;
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      if (value === 0) {
        zeroCount += 1;
      } else {
        sumWithoutZeros += value;
      }
    }
    return { sumWithoutZeros, zeroCount };
  };

  const { sumWithoutZeros: sum1, zeroCount: zeros1 } = getSumAndZeroCount(nums1);
  const { sumWithoutZeros: sum2, zeroCount: zeros2 } = getSumAndZeroCount(nums2);

  const minimalSum1 = sum1 + zeros1;
  const minimalSum2 = sum2 + zeros2;

  if (zeros1 === 0 && zeros2 === 0) {
    return sum1 === sum2 ? sum1 : -1;
  }

  if (zeros1 === 0) {
    return sum1 >= minimalSum2 ? sum1 : -1;
  }

  if (zeros2 === 0) {
    return sum2 >= minimalSum1 ? sum2 : -1;
  }

  return Math.max(minimalSum1, minimalSum2);
};
