/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const freqMap = {};

  for (const num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  let result = -1;

  for (const key in freqMap) {
    const num = Number(key);
    if (freqMap[num] === num) {
      result = Math.max(result, num);
    }
  }

  return result;
};
