/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const getMaxFrequency = (words) => {
    const maxFrequency = new Array(26).fill(0);
    for (const word of words) {
      const currentFrequency = new Array(26).fill(0);
      for (const letter of word) {
        currentFrequency[letter.charCodeAt(0) - "a".charCodeAt(0)]++;
      }
      for (let i = 0; i < 26; i++) {
        maxFrequency[i] = Math.max(maxFrequency[i], currentFrequency[i]);
      }
    }
    return maxFrequency;
  };

  const words2MaxFrequency = getMaxFrequency(words2);

  const result = [];
  for (const word of words1) {
    const wordFrequency = new Array(26).fill(0);
    for (const letter of word) {
      wordFrequency[letter.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    let isUniversal = true;
    for (let i = 0; i < 26; i++) {
      if (wordFrequency[i] < words2MaxFrequency[i]) {
        isUniversal = false;
        break;
      }
    }

    if (isUniversal) {
      result.push(word);
    }
  }

  return result;
};
