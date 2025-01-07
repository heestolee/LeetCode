/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i === j) continue;
      if(words[j].includes(words[i])) {
        result.push(words[i]);
        break;
      }
    }
  }
  
  return [...new Set(result)];
};