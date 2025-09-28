/**
 * @param {number[]} nums
 * @return {number}
 */
const largestPerimeter = function(nums) {
  const sortedLengths = [...nums].sort((a, b) => b - a);

  for (let i = 0; i + 2 < sortedLengths.length; i++) {
    const longestSide = sortedLengths[i];
    const secondSide = sortedLengths[i + 1];
    const thirdSide = sortedLengths[i + 2];

    if (secondSide + thirdSide > longestSide) {
      return longestSide + secondSide + thirdSide;
    }
  }

  return 0;
};
