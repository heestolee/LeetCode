/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
  let totalSymmetricCount = 0;

  for (let number = low; number <= high; number++) {
    const digits = number.toString();
    const digitLength = digits.length;

    if (digitLength % 2 !== 0) continue;

    const half = digitLength / 2;
    let frontSum = 0;
    let backSum = 0;

    for (let i = 0; i < half; i++) {
      frontSum += Number(digits[i]);
      backSum += Number(digits[i + half]);
    }

    if (frontSum === backSum) {
      totalSymmetricCount++;
    }
  }

  return totalSymmetricCount;
};
