/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
  function isValidPartition(str, target, index = 0, currentSum = 0) {
    if (index === str.length) return currentSum === target;

    let num = 0;
    for (let i = index; i <str.length; i++) {
      num = num * 10 + Number(str[i]);
      if (isValidPartition(str, target, i + 1, currentSum + num)) {
        return true;
      }
    }
    return false;
  }

  let total = 0;
  for (let i = 1; i <= n; i++) {
    let squared = (i * i).toString();
    if (isValidPartition(squared, i)) {
      total += i * i;
    }
  }

  return total;
};