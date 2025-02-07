/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
  const ballColors = new Map();
  const colorCount = new Map();
  const result = [];

  for (const [x, y] of queries) {
    if (ballColors.has(x)) {
      const prevColor = ballColors.get(x);
      colorCount.set(prevColor, (colorCount.get(prevColor) || 0) - 1);

      if (colorCount.get(prevColor) === 0) {
        colorCount.delete(prevColor);
      }
    }
    ballColors.set(x, y);
    colorCount.set(y, (colorCount.get(y) || 0) + 1);

    result.push(colorCount.size);
  }

  return result;
};