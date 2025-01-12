/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
  if (s.length < k) return false;
  
  const letterFrequency = new Map();
  for (const letter of s) {
    letterFrequency.set(letter, (letterFrequency.get(letter) || 0) + 1);
  }
  
  let oddCount = 0;
  for (const count of letterFrequency.values()) {
    if (count % 2 !== 0) oddCount++;
  }
  
  return oddCount <= k;
};
