/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const wordCount = {};

    for (const word of magazine) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    for (const word of ransomNote) {
        if (!wordCount[word]) {
            return false;
        }
        wordCount[word]--;
    }

    return true;
};