/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const freqMap = new Map();

  for (const letter of s) {
    freqMap.set(letter, (freqMap.get(letter) || 0) + 1);
  }

  let maxVowel = 0;
  let maxConsonant = 0;

  for (const [letter, count] of freqMap) {
    if (vowels.has(letter)) {
      if (count > maxVowel) {
        maxVowel = count;
      }
    } else {
      if (count > maxConsonant) {
        maxConsonant = count;
      }
    }
  }

  return maxVowel + maxConsonant;
};
