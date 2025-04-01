/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = (questions) => {
  const dp = new Array(questions.length + 1).fill(0);

  for (let i = questions.length - 1; i >= 0; i--) {
    const [points, brainpower] = questions[i];
    const nextIndex = i + brainpower + 1;
    const solve = points + (nextIndex < questions.length ? dp[nextIndex] : 0);
    const skip = dp[i + 1];
    dp[i] = Math.max(solve, skip);
  }

  return dp[0];
};
