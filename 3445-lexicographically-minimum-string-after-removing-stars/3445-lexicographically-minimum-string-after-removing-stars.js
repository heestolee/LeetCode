/**
 * @param {string} string
 * @return {string}
 */
var clearStars = function(string) {
  const stack = [];
  const letterMap = new Map();

  const addLetter = (letter, index) => {
    if (!letterMap.has(letter)) {
      letterMap.set(letter, []);
    }
    letterMap.get(letter).push(index);
  };

  const removeLetter = (letter) => {
    const indexList = letterMap.get(letter);
    indexList.pop();
    if (indexList.length === 0) {
      letterMap.delete(letter);
    }
  };

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];

    if (letter === "*") {
      if (letterMap.size === 0) continue;

      const minLetter = [...letterMap.keys()].sort()[0];
      const minIndex = letterMap.get(minLetter).at(-1);

      stack[minIndex] = null;
      removeLetter(minLetter);
    } else {
      stack.push(letter);
      addLetter(letter, stack.length - 1);
    }
  }

  return stack.filter(letter => letter !== null).join("");
};
