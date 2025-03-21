/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function(n) {
  const length = 2 * n - 1;
  const result = new Array(length).fill(-1);
  const used = new Array(n + 1).fill(false);

  const backtrack = (index) => {
    if (index === length) {
      return true;
    }
    if (result[index] !== -1) {
      return backtrack(index + 1);
    }

    for (let num = n; num >= 1; num--) {
      if (used[num]) continue;

      if (num === 1) {
        result[index] = 1;
        used[num] = true;
        if (backtrack(index + 1)) return true;
        result[index] = -1;
        used[num] = false;
      } else {
        if (
          index + num < length &&
          result[index] === -1 &&
          result[index + num] === -1
        ) {
          result[index] = num;
          result[index + num] = num;
          used[num] = true;
          if (backtrack(index + 1)) return true;
          result[index] = -1;
          result[index + num] = -1;
          used[num] = false;
        }
      }
    }
    return false;
  };

  backtrack(0);
  return result;
};
