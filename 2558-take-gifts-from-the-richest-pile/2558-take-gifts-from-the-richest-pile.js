/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
  const copiedGifts = [...gifts];
  
    for(let i = 0; i < k; i++) {
      const maxiumValueIndex = copiedGifts.indexOf(Math.max(...copiedGifts));
      const sqrtValue = Math.floor(Math.sqrt(copiedGifts[maxiumValueIndex]));
      copiedGifts[maxiumValueIndex] = sqrtValue;
    }
  
  return copiedGifts.reduce((acc, cur) => acc + cur);
};