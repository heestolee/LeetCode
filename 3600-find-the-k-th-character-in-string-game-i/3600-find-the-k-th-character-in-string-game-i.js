/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
  let word = "a";

  while (word.length < k) {
    let nextPart = "";
    for (let i = 0; i < word.length; i++) {
      const code = (word.charCodeAt(i) - 97 + 1) % 26 + 97;
      nextPart += String.fromCharCode(code);
    }
    word += nextPart;
  }

  return word[k - 1];
};
