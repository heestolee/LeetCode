/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  const isNoZeroInteger = (number) => {
    return !number.toString().includes('0');
  };

  for (let firstInteger = 1; firstInteger < n; firstInteger++) {
    const secondInteger = n - firstInteger;
    if (isNoZeroInteger(firstInteger) && isNoZeroInteger(secondInteger)) {
      return [firstInteger, secondInteger];
    }
  }
  
  return [];
};
