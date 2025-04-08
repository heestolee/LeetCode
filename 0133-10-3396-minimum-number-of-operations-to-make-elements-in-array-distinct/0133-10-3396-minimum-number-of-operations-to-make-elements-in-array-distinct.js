/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  let operations = 0;

  while (true) {
    const seen = new Set();
    let hasDuplicate = false;

    for (const num of nums) {
      if (seen.has(num)) {
        hasDuplicate = true;
        break;
      }
      seen.add(num);
    }

    if (!hasDuplicate) {
      break;
    }

    nums.splice(0, 3);
    operations++;
  }

  return operations;
};
