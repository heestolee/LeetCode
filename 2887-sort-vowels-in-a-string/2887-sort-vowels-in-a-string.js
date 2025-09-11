/**
 * @param {string} s
 * @return {string}
 */
const sortVowels = function(s) {
  const isVowel = (letter) => {
    const lower = letter.toLowerCase();
    return lower === 'a' || lower === 'e' || lower === 'i' || lower === 'o' || lower === 'u';
  };

  const characters = s.split('');
  const vowelIndices = [];
  const vowels = [];

  for (let i = 0; i < characters.length; i++) {
    const letter = characters[i];
    if (isVowel(letter)) {
      vowelIndices.push(i);
      vowels.push(letter);
    }
  }

  vowels.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  for (let i = 0; i < vowelIndices.length; i++) {
    const index = vowelIndices[i];
    characters[index] = vowels[i];
  }

  return characters.join('');
};
