/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
  let maxGoodInteger = "";

  for (let i = 2; i < num.length; i++) {
    if (num[i] === num[i - 1] && num[i - 1] === num[i - 2]) {
      const candidate = num.slice(i - 2, i + 1); // length 3
      if (maxGoodInteger === "" || candidate > maxGoodInteger) {
        maxGoodInteger = candidate;
      }
    }
  }

  return maxGoodInteger;
};
