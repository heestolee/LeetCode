/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
  const totalUnique = new Set(nums).size;
  let count = 0;

  for (let start = 0; start < nums.length; start++) {
    const seen = new Set();
    for (let end = start; end < nums.length; end++) {
      seen.add(nums[end]);
      if (seen.size === totalUnique) {
        count++;
      }
    }
  }

  return count;
};
