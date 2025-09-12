/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  for (const letter of s) {
    if (vowels.has(letter)) return true;
  }
  return false;
};
