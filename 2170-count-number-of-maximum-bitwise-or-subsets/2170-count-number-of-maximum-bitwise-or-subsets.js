/**
 * @param {number[]} nums
 * @return {number}
 */
const countMaxOrSubsets = function (nums) {
  let maxOrValue = 0;
  let count = 0;

  const dfs = (index, currentOr) => {
    if (index === nums.length) {
      if (currentOr === maxOrValue) {
        count++;
      } else if (currentOr > maxOrValue) {
        maxOrValue = currentOr;
        count = 1;
      }
      return;
    }

    dfs(index + 1, currentOr | nums[index]);
    dfs(index + 1, currentOr);
  };

  dfs(0, 0);

  return count;
};
