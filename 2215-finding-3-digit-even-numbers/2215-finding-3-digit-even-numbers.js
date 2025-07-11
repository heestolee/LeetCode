/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
  const resultSet = new Set();

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) continue;

    for (let j = 0; j < digits.length; j++) {
      if (j === i) continue;

      for (let k = 0; k < digits.length; k++) {
        if (k === i || k === j) continue;
        if (digits[k] % 2 !== 0) continue;

        const number = digits[i] * 100 + digits[j] * 10 + digits[k];
        resultSet.add(number);
      }
    }
  }

  return Array.from(resultSet).sort((a, b) => a - b);  
};
