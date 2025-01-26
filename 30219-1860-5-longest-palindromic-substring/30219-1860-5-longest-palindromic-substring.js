/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) return s;

  let startIndex = 0;
  let maxLength = 0;

  const getPalindromeLength = (leftIndex, rightIndex) => {
    while (
      leftIndex >= 0 &&
      rightIndex < s.length &&
      s[leftIndex] === s[rightIndex]
    ) {
      leftIndex--;
      rightIndex++;
    }

    return rightIndex - leftIndex - 1;
  };

for (let centerIndex = 0; centerIndex < s.length; centerIndex++) {
    const oddLength = getPalindromeLength(centerIndex, centerIndex);
    const evenLength = getPalindromeLength(centerIndex, centerIndex + 1);
    const currentMaxLength = Math.max(oddLength, evenLength);

    if (currentMaxLength > maxLength) {
      maxLength = currentMaxLength;
      startIndex = centerIndex - Math.floor((currentMaxLength - 1) / 2);
    }
  }

  return s.substring(startIndex, startIndex + maxLength); 
};