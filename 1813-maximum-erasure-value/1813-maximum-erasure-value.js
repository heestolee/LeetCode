/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
  const seenNumbers = new Set();
  let left = 0;
  let maxScore = 0;
  let currentScore = 0;

  for (let right = 0; right < nums.length; right++) {
    const value = nums[right];

    while (seenNumbers.has(value)) {
      const leftValue = nums[left];
      seenNumbers.delete(leftValue);
      currentScore -= leftValue;
      left++;
    }

    seenNumbers.add(value);
    currentScore += value;
    maxScore = Math.max(maxScore, currentScore);
  }

  return maxScore;
};
