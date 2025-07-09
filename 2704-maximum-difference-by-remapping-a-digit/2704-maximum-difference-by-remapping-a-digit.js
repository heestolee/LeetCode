/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
  const originalDigits = num.toString();
  let maxResult = 0;
  let minResult = num;

  for (let fromDigit = 0; fromDigit <= 9; fromDigit++) {
    for (let toDigit = 0; toDigit <= 9; toDigit++) {
      const remappedDigits = originalDigits
        .split('')
        .map(digit => digit === String(fromDigit) ? String(toDigit) : digit)
        .join('');
      const remappedNumber = Number(remappedDigits);

      if (remappedNumber > maxResult) maxResult = remappedNumber;
      if (remappedNumber < minResult) minResult = remappedNumber;
    }
  }

  return maxResult - minResult;
};
