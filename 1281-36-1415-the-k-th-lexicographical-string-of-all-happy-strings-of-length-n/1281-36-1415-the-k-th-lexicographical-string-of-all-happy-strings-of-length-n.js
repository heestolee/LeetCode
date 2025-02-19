/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
  let count = 0;
  let kthHappyString = "";
  const letters = ["a", "b", "c"];

  function generateHappyString(current) {
    if (current.length === n) {
      count++;
      const isKthString = count === k;

      if (isKthString) {
        kthHappyString = current;
      }
      return;
    }

    const isKthStringFound = kthHappyString !== "";

    for (const letter of letters) {
      const isFirstLetter = current.length === 0;
      const isDifferentFromLastLetter = current[current.length - 1] !== letter;

      if ((isFirstLetter || isDifferentFromLastLetter) && !isKthStringFound) {
        generateHappyString(current + letter);
      }
    }
  }

  generateHappyString("");

  return kthHappyString;
};