/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
  let minPrefix = 0;
  let maxPrefix = 0;
  let prefixSum = 0;

  for (const diff of differences) {
    prefixSum += diff;
    minPrefix = Math.min(minPrefix, prefixSum);
    maxPrefix = Math.max(maxPrefix, prefixSum);
  }

  const minStart = lower - minPrefix;
  const maxStart = upper - maxPrefix;

  return Math.max(0, maxStart - minStart + 1);
};
