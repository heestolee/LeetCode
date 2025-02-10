/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
  let stack = [];

  for (const element of s) {
    if (element >= "0" && element <= "9") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(element);
    }
  }

  return stack.join("");   
};