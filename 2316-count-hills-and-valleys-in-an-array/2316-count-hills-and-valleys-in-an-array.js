/**
 * @param {number[]} nums
 * @return {number}
 */
const countHillValley = function (nums) {
  const simplified = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      simplified.push(nums[i]);
    }
  }

  for (let i = 1; i < simplified.length - 1; i++) {
    const prev = simplified[i - 1];
    const curr = simplified[i];
    const next = simplified[i + 1];

    const isHill = curr > prev && curr > next;
    const isValley = curr < prev && curr < next;

    if (isHill || isValley) {
      count++;
    }
  }

  return count;
};
