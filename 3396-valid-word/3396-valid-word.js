/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
  if (word.length < 3) return false;

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let hasVowel = false;
  let hasConsonant = false;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    
    const isDigit = letter >= '0' && letter <= '9';
    const isUpper = letter >= 'A' && letter <= 'Z';
    const isLower = letter >= 'a' && letter <= 'z';

    if (!isDigit && !isUpper && !isLower) return false;

    if (isUpper || isLower) {
      const lower = letter.toLowerCase();
      if (vowels.includes(lower)) {
        hasVowel = true;
      } else {
        hasConsonant = true;
      }
    }
  }

  return hasVowel && hasConsonant;
};
