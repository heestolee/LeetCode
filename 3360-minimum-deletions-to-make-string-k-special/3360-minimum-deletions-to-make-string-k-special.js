/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
  const freqMap = new Map();

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    freqMap.set(letter, (freqMap.get(letter) || 0) + 1);
  }

  const frequencies = Array.from(freqMap.values()).sort((a, b) => a - b);
  let minDeletions = word.length;

  for (let i = 0; i < frequencies.length; i++) {
    const minFreq = frequencies[i];
    const maxFreq = minFreq + k;
    let deletions = 0;

    for (let j = 0; j < frequencies.length; j++) {
      const freq = frequencies[j];

      if (freq < minFreq) {
        deletions += freq;
      } else if (freq > maxFreq) {
        deletions += freq - maxFreq;
      }
    }

    if (deletions < minDeletions) {
      minDeletions = deletions;
    }
  }

  return minDeletions;
};
