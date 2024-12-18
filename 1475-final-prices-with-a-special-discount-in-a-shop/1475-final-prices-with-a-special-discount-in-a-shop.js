/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  const copiedPrices = [...prices];

  for (let left = 0; left < copiedPrices.length - 1; left++) {
    for (let right = left + 1; right < copiedPrices.length; right++) {
      if (copiedPrices[left] >= copiedPrices[right]) {
        copiedPrices[left] -= copiedPrices[right];
        break;
      }
    }    
  }

  return copiedPrices;
};