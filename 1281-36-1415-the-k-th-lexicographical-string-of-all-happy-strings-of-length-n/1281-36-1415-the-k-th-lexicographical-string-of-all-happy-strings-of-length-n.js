/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
  const happyStrings = [];
  const letters = ["a", "b", "c"];

  function generateHappyString(current) {
    if (current.length === n) {
      happyStrings.push(current);
      return;
    }

    for (const letter of letters) {
      const isFirstLetter = current.length === 0;
      const isDifferentFromLastLetter = current[current.length - 1] !== letter;

      if (isFirstLetter || isDifferentFromLastLetter) {
        generateHappyString(current + letter);
      }
    }
  }

  generateHappyString("");

  const hasKthString = happyStrings.length >= k;
  return hasKthString ? happyStrings[k - 1] : "";
};