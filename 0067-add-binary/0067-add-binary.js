/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const parseA = BigInt(`0b${a}`);
  const parseB = BigInt(`0b${b}`);
  
  const sum = parseA + parseB;
  
  return sum.toString(2);
};