/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
  }

  const letterCount = {};

  for (const letter of tiles) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  const countPermutations = (counts) => {
    const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
    if (total === 0) return 0;

    let permutations = factorial(total);
    for (const count of Object.values(counts)) {
      permutations /= factorial(count);
    }
    return permutations;
  };

  let totalCount = 0;
  const letterKeys = Object.keys(letterCount);

  const generateCombinations = (index, currentCounts) => {
    if (index === letterKeys.length) {
      totalCount += countPermutations(currentCounts);
      return;
    }

    const letter = letterKeys[index];
    for (let i = 0; i <= letterCount[letter]; i++) {
      currentCounts[letter] = i;
      generateCombinations(index + 1, currentCounts);
    }
  };

  generateCombinations(0, {});
  return totalCount;
};