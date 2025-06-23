/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
  const minCharFrom = Array(s.length);
  minCharFrom[s.length - 1] = s[s.length - 1];

  for (let i = s.length - 2; i >= 0; i--) {
    minCharFrom[i] = s[i] < minCharFrom[i + 1] ? s[i] : minCharFrom[i + 1];
  }

  const stack = [];
  let result = "";
  let index = 0;

  while (index < s.length) {
    stack.push(s[index]);

    while (
      stack.length &&
      (index + 1 === s.length || stack[stack.length - 1] <= minCharFrom[index + 1])
    ) {
      result += stack.pop();
    }

    index++;
  }

  while (stack.length) {
    result += stack.pop();
  }

  return result;
};
