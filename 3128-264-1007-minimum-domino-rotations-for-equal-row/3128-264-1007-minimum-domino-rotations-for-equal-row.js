/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
  const UNREACHABLE = Number.MAX_SAFE_INTEGER;

  const getRotationCount = (targetValue) => {
    let topRotationCount = 0;
    let bottomRotationCount = 0;

    for (let i = 0; i < tops.length; i++) {
      const top = tops[i];
      const bottom = bottoms[i];

      const cannotMatch = top !== targetValue && bottom !== targetValue;
      if (cannotMatch) return UNREACHABLE;

      if (top !== targetValue) topRotationCount++;
      if (bottom !== targetValue) bottomRotationCount++;
    }

    return Math.min(topRotationCount, bottomRotationCount);
  };

  const candidateA = tops[0];
  const candidateB = bottoms[0];

  const resultA = getRotationCount(candidateA);
  const resultB = getRotationCount(candidateB);

  const minRotation = Math.min(resultA, resultB);
  return minRotation === UNREACHABLE ? -1 : minRotation;
};
