/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const uniquePalindromes = new Set();

    for (let outerIndex = 0; outerIndex < 26; outerIndex++) {
        const outerLetter = String.fromCharCode(97 + outerIndex);
        const leftIndex = s.indexOf(outerLetter);
        const rightIndex = s.lastIndexOf(outerLetter);

        if (leftIndex !== -1 && rightIndex - leftIndex > 1) {
            const middleLetters = new Set(s.slice(leftIndex + 1, rightIndex));
            for (const middleLetter of middleLetters) {
                uniquePalindromes.add(outerLetter + middleLetter + outerLetter);
            }
        }
    }

    return uniquePalindromes.size;
};
