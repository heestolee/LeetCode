/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
  const MODULO = 1e9 + 7;
  let oddCount = 0;
  let evenCount = 1;
  let prefixSum = 0;
  let result = 0;

  for (const num of arr) {
    prefixSum += num;
    
    if (prefixSum % 2 === 0) {
      result = (result + oddCount) % MODULO;
      evenCount++;
    } else {
      result = (result + evenCount) % MODULO;
      oddCount++;
    }
  }

  return result;
};