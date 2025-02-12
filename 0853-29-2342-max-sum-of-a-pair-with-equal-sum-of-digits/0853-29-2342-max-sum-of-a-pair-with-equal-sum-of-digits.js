/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
  const sumMap = new Map();

  function digitSum(n) {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  }

  let maxSum = -1;

  for (const num of nums) {
    const sum = digitSum(num);
    if (!sumMap.has(sum)) {
      sumMap.set(sum, [num, -1]);
    } else {
      let [first, second] = sumMap.get(sum);
      if (num > first) {
        second = first;
        first = num;
      } else if (num > second) {
        second = num;
      }
      sumMap.set(sum, [first, second]);
    }
  }

  for (const [first, second] of sumMap.values()) {
    if (second !== -1) {
      maxSum = Math.max(maxSum, first + second);
    }
  }

  return maxSum;
};