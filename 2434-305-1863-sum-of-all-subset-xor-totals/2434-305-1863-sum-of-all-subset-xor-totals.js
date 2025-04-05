/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
  let total = 0;

  function dfs(index, currentXOR) {
    if (index === nums.length) {
      total += currentXOR;
      return;
    }
    dfs(index + 1, currentXOR);
    dfs(index + 1, currentXOR ^ nums[index]);
  }
  dfs(0, 0);

  return total;    
};
