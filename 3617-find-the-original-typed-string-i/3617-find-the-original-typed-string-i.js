/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
  const repeatLengths = [];
  let currentIndex = 0;
  let count = 1;

  while (currentIndex < word.length) {
    let end = currentIndex;
    while (end < word.length && word[end] === word[currentIndex]) {
      end++;
    }
    repeatLengths.push(end - currentIndex);
    currentIndex = end;
  }

  for (const length of repeatLengths) {
    if (length > 1) {
      count += length - 1;
    }
  }

  return count;
};
