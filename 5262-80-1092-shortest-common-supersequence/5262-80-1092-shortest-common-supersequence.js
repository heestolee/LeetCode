/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
  const dp = Array.from({ length: str1.length + 1 }, () =>
    Array(str2.length + 1).fill("")
  );

  for (const [str1Index, letter1] of [...str1].entries()) {
    for (const [str2Index, letter2] of [...str2].entries()) {
      if (letter1 === letter2) {
        dp[str1Index + 1][str2Index + 1] = dp[str1Index][str2Index] + letter1;
      } else {
        dp[str1Index + 1][str2Index + 1] =
          dp[str1Index][str2Index + 1].length > dp[str1Index + 1][str2Index].length
            ? dp[str1Index][str2Index + 1]
            : dp[str1Index + 1][str2Index];
      }
    }
  }

  const lcs = dp[str1.length][str2.length];
  let str1Index = 0;
  let str2Index = 0;
  let result = "";

  for (const letter of lcs) {
    while (str1Index < str1.length && str1[str1Index] !== letter) {
      result += str1[str1Index];
      str1Index++;
    }
    while (str2Index < str2.length && str2[str2Index] !== letter) {
      result += str2[str2Index];
      str2Index++;
    }
    result += letter;
    str1Index++;
    str2Index++;
  }

  result += str1.slice(str1Index) + str2.slice(str2Index);
  return result;
};