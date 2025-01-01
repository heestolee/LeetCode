/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    const stringLength = s.length;
    let totalCountOfOnes = 0;

    for (const digit of s) {
        if (digit === '1') totalCountOfOnes++;
    }

    let countOfLeftZeros = 0;
    let countOfRightOnes = totalCountOfOnes;
    let maxScore = 0;

    for (let index = 0; index < stringLength - 1; index++) {
        if (s[index] === '0') {
            countOfLeftZeros++;
        } else {
            countOfRightOnes--;
        }

        const currentScore = countOfLeftZeros + countOfRightOnes;
        maxScore = Math.max(maxScore, currentScore);
    }

    return maxScore;
};
