/**
 * @param {number[]} nums
 * @return {number}
 */
const maxFrequencyElements = function(nums) {
  const frequencyMap = new Map();

  for (const value of nums) {
    frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
  }

  let maxFrequency = 0;
  for (const count of frequencyMap.values()) {
    if (count > maxFrequency) {
      maxFrequency = count;
    }
  }

  let total = 0;
  for (const count of frequencyMap.values()) {
    if (count === maxFrequency) {
      total += count;
    }
  }

  return total;
};
