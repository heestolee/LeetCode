/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
  const stack = [];
  let result = "";
  let currentNum = 1;

  for (let i = 0; i <= pattern.length; i++) {
    stack.push(currentNum++);

    if (i === pattern.length || pattern[i] === 'I') {
      while (stack.length) {
        result += stack.pop();
      }
    }
  }
  
  return result;
};