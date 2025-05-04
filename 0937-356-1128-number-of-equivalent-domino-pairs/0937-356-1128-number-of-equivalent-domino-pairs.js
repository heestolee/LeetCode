/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  const map = new Map();
  let count = 0;

  for (const [a, b] of dominoes) {
    const key = a < b ? `${a}${b}` : `${b}${a}`;
    
    count += map.get(key) || 0;
    map.set(key, (map.get(key) || 0) + 1);
  }

  return count;
};
