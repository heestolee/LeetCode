/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (["+", "-", "*", "/"].includes(token)) {
      const secondValue = stack.pop();
      const firstValue = stack.pop();

      switch (token) {
        case "+":
          stack.push(firstValue + secondValue);
          break;
        case "-":
          stack.push(firstValue - secondValue);
          break;
        case "*":
          stack.push(firstValue * secondValue);
          break;
        case "/":
          stack.push(Math.trunc(firstValue / secondValue));
          break;
      }
    } else {
      stack.push(parseInt(token));
    }
  }

  return stack.pop();
};