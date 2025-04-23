/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  const groupMap = new Map();

  for (let i = 1; i <= n; i++) {
    const digitSum = getDigitSum(i);
    groupMap.set(digitSum, (groupMap.get(digitSum) || 0) + 1);
  }

  let maxSize = 0;
  let count = 0;

  for (const size of groupMap.values()) {
    if (size > maxSize) {
      maxSize = size;
      count = 1;
    } else if (size === maxSize) {
      count++;
    }
  }

  return count;
};

function getDigitSum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};
