/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
  const freq = new Map();
  let length = 0;
  let hasMiddle = false;

  for (const word of words) {
    freq.set(word, (freq.get(word) || 0) + 1);
  }

  for (const [word, count] of freq.entries()) {
    const reversed = word[1] + word[0];

    if (word === reversed) {
      const pairs = Math.floor(count / 2);
      length += pairs * 4;
      if (count % 2 === 1) hasMiddle = true;
    } else if (freq.has(reversed)) {
      const pairCount = Math.min(count, freq.get(reversed));
      length += pairCount * 4;
      freq.set(word, 0);
      freq.set(reversed, 0);
    }
  }

  if (hasMiddle) length += 2;

  return length;
};
