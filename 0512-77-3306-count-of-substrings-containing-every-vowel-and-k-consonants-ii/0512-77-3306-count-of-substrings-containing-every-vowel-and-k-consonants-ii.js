/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const vowelMap = new Map();
  let validSubstringCount = 0;
  let consonantCount = 0;
  let left = 0;
  let right = 0;
  let result = 0;

  while (right < word.length) {
    const letter = word[right];

    if (vowels.has(letter)) {
      vowelMap.set(letter, (vowelMap.get(letter) || 0) + 1);
    } else {
      consonantCount++;
    }

    while (consonantCount > k) {
      const leftLetter = word[left];
      if (vowels.has(leftLetter)) {
        vowelMap.set(leftLetter, vowelMap.get(leftLetter) - 1);
        if (vowelMap.get(leftLetter) === 0) {
          vowelMap.delete(leftLetter);
        }
      } else {
        consonantCount--;
      }
      left++;
      validSubstringCount = 0;
    }

    while (vowelMap.size === 5 && consonantCount === k) {
      const leftLetter = word[left];
      if (vowels.has(leftLetter)) {
        vowelMap.set(leftLetter, vowelMap.get(leftLetter) - 1);
        if (vowelMap.get(leftLetter) === 0) {
          vowelMap.delete(leftLetter);
        }
      } else {
        consonantCount--;
      }
      validSubstringCount++;
      left++;
    }

    result += validSubstringCount;
    right++;

    if (word[right] && !vowels.has(word[right])) {
      validSubstringCount = 0;
    }
  }

  return result;
};
