/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
  const count = { a: 0, b: 0, c: 0 };
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    const letter = s[right];
    count[letter] = (count[letter] || 0) + 1;

    while (count['a'] && count['b'] && count['c']) {
      result += s.length - right;
      count[s[left]]--;
      left++;
    }
  }

  return result; 
};
