/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
  let totalScore = 0;

  const removeTargetPair = (input, firstLetter, secondLetter, pairScore) => {
    const stack = [];
    let score = 0;

    for (const letter of input) {
      const last = stack[stack.length - 1];
      if (last === firstLetter && letter === secondLetter) {
        stack.pop();
        score += pairScore;
      } else {
        stack.push(letter);
      }
    }

    return [stack.join(''), score];
  };

  if (x > y) {
    [s, addedScore] = removeTargetPair(s, 'a', 'b', x);
    totalScore += addedScore;
    [s, addedScore] = removeTargetPair(s, 'b', 'a', y);
    totalScore += addedScore;
  } else {
    [s, addedScore] = removeTargetPair(s, 'b', 'a', y);
    totalScore += addedScore;
    [s, addedScore] = removeTargetPair(s, 'a', 'b', x);
    totalScore += addedScore;
  }

  return totalScore;
};
