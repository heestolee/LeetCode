/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
  const original = String(num);

  const buildMax = () => {
    let targetDigit = '';
    for (let i = 0; i < original.length; i += 1) {
      if (original[i] !== '9') {
        targetDigit = original[i];
        break;
      }
    }
    if (targetDigit === '') return num;
    const candidate = Number(original.split(targetDigit).join('9'));
    return candidate;
  };

  const buildMin = () => {
    if (original[0] !== '1') {
      const targetDigit = original[0];
      const candidate = Number(original.split(targetDigit).join('1'));
      return candidate;
    }
    let targetDigit = '';
    for (let i = 1; i < original.length; i += 1) {
      const d = original[i];
      if (d !== '0' && d !== '1') {
        targetDigit = d;
        break;
      }
    }
    if (targetDigit === '') return num;
    const candidate = Number(original.split(targetDigit).join('0'));
    return candidate;
  };

  const maxVal = buildMax();
  const minVal = buildMin();
  return maxVal - minVal;
};
