/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
  const shiftArray = new Array(s.length + 1).fill(0);

  for (const [startIndex, endIndex, direction] of shifts) {
    const move = direction === 1 ? 1 : -1;
    shiftArray[startIndex] += move;

    if (endIndex + 1 < s.length) {
      shiftArray[endIndex + 1] -= move;
    }
  }

  let currentShift = 0;
  for (let i = 0; i < s.length; i++) {
    currentShift += shiftArray[i];
    shiftArray[i] = ((currentShift % 26) + 26) % 26;
  }

  const result = Array.from(s, (letter, i) => {
    const base = "a".charCodeAt(0);
    const offset = (letter.charCodeAt(0) - base + shiftArray[i]) % 26;
    return String.fromCharCode(base + offset);
  });

  return result.join('');
};
