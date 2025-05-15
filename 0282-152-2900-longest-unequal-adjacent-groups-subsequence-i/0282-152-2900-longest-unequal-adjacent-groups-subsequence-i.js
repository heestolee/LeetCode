/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
  const result = [];

  let prevGroup = null;
  for (let i = 0; i < words.length; i++) {
    if (prevGroup === null || groups[i] !== prevGroup) {
      result.push(words[i]);
      prevGroup = groups[i];
    }
  }

  return result;
};
