/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const sorted = [...candidates].sort((a, b) => a - b);
  const results = [];
  const current = [];

  const backtrack = (startIndex, remaining) => {
    if (remaining === 0) {
      results.push([...current]);
      return;
    }

    for (let i = startIndex; i < sorted.length; i += 1) {
      const value = sorted[i];

      if (i > startIndex && value === sorted[i - 1]) continue;
      if (value > remaining) break;

      current.push(value);

      backtrack(i + 1, remaining - value);
      current.pop();
    }
  };

  backtrack(0, target);
  return results;
};
