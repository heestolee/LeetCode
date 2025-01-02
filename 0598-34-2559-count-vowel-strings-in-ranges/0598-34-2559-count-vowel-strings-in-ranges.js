/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const prefixCount = new Array(words.length + 1).fill(0);

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const startsWithVowel = vowels.has(word[0]);
        const endsWithVowel = vowels.has(word[word.length - 1]);
        prefixCount[i + 1] = prefixCount[i] + (startsWithVowel && endsWithVowel ? 1 : 0);
    }

    const result = [];
    for (const [startIndex, endIndex] of queries) {
        result.push(prefixCount[endIndex + 1] - prefixCount[startIndex]);
    }

    return result;
};
