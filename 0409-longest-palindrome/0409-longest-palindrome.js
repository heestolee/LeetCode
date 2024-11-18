/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const wordCount = {};
    for (let word of s) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    
    let palindromeLength = 0;
    let isOdd = false;

    for (let count of Object.values(wordCount)) {
        if (count % 2 === 0) {
            palindromeLength += count;
        } else {
            palindromeLength += count - 1;
            isOdd = true;
        }
    }

    if (isOdd) {
        palindromeLength += 1;
    }

    return palindromeLength;
};