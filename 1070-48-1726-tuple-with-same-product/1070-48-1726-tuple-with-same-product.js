/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
  let productMap = new Map();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let product = nums[i] * nums[j];

      if (productMap.has(product)) {
        let pairCount = productMap.get(product);
        count += pairCount * 8;
        productMap.set(product, pairCount + 1);
      } else {
        productMap.set(product, 1);
      }
    }
  }

  return count;
};