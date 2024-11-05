/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const processedArray = [...s.toLowerCase()].filter((el) => isAlphanumeric(el));

  return processedArray.join("") === processedArray.reverse().join(""); 
};

function isAlphanumeric(letter) {
  const charCode = letter.charCodeAt()
  if((charCode >= 48 && charCode <= 57) ||
    (charCode >= 65 && charCode <= 90) ||
    (charCode >= 97 && charCode <= 122)) {
    return true;
  }
}