/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
  const map = new Map();
  
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  
  for (const value of map.values()) {
    if (value & 1) return false; // 비트연산으로 리팩터링
  }
  
  return true;
};
