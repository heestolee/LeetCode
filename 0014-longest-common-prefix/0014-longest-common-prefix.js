/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    let commonPrefix = "";
    let shortestWordLength = Math.min(...strs.map(word => word.length));

    for (let index = 0; index < shortestWordLength; index++) {
        const currentLetter = strs[0][index];
        let isLetterCommon = true;

        for (let wordIndex = 1; wordIndex < strs.length; wordIndex++) {
            if (strs[wordIndex][index] !== currentLetter) {
                isLetterCommon = false;
                break;
            }
        }

        if (isLetterCommon) {
            commonPrefix += currentLetter;
        } else {
            break;
        }
    }

    return commonPrefix;
};