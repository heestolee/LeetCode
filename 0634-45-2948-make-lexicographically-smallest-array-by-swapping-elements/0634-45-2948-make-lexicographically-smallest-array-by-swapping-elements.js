/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
  const n = nums.length;
  const indices = nums.map((_, i) => i);

  const numWithIndex = nums.map((value, index) => [value, index]);

  numWithIndex.sort((a, b) => a[0] - b[0]);

  const groups = [];
  let currentGroup = [numWithIndex[0]];

  for (let i = 1; i < n; i++) {
    const [currValue, currIndex] = numWithIndex[i];
    const [prevValue] = numWithIndex[i - 1];
    if (currValue - prevValue <= limit) {
      currentGroup.push(numWithIndex[i]);
    } else {
      groups.push(currentGroup);
      currentGroup = [numWithIndex[i]];
    }
  }
  groups.push(currentGroup);

  for (const group of groups) {
    const sortedValues = group.map(([value]) => value).sort((a, b) => a - b);
    const sortedIndices = group.map(([, index]) => index).sort((a, b) => a - b);

    for (let i = 0; i < group.length; i++) {
      nums[sortedIndices[i]] = sortedValues[i];
    }
  }

  return nums;
  };