/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
  const isPossible = (k) => {
    const temp = [...nums];
    const diff = new Array(nums.length + 1).fill(0);

    for (let i = 0; i < k; i++) {
      const [left, right, value] = queries[i];
      diff[left] -= value;
      diff[right + 1] += value;
    }

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += diff[i];
      temp[i] += sum;
      if (temp[i] < 0) temp[i] = 0;
    }

    return temp.every(num => num === 0);
  };

  let left = 0;
  let right = queries.length;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isPossible(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result === -1 ? -1 : result;
};
