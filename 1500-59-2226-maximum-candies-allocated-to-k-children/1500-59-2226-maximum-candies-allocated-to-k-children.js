/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
  if (candies.reduce((sum, candy) => sum + candy, 0) < k) return 0;

  let left = 1;
  let right = Math.max(...candies);
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = candies.reduce((sum, candy) => sum + Math.floor(candy / mid), 0);
    
    if (count >= k) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};