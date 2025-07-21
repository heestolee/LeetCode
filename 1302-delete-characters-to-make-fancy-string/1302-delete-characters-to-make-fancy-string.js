/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  let result = "";
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count < 3) {
      result += s[i];
    }
  }

  return s[0] + result;
};
