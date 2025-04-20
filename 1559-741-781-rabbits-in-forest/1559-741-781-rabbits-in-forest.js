/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  const countMap = new Map();
  let total = 0;

  for (const answer of answers) {
    countMap.set(answer, (countMap.get(answer) || 0) + 1);
  }

  for (const [x, count] of countMap.entries()) {
    const groupSize = x + 1;
    const groupCount = Math.ceil(count / groupSize);
    total += groupCount * groupSize;
  }

  return total;
};