/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  const toDigitSignature = (value) => {
    const digitList = String(value).split("");
    digitList.sort();
    return digitList.join("");
  };

  const targetSignature = toDigitSignature(n);

  const powerOfTwoSignatureSet = new Set();
  for (let exponent = 0; exponent <= 30; exponent += 1) {
    const power = 2 ** exponent;
    powerOfTwoSignatureSet.add(toDigitSignature(power));
  }

  return powerOfTwoSignatureSet.has(targetSignature);
};
