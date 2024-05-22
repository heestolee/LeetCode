/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const mapResult = [];

    for (let i = 0; i < arr.length; i++) {
      mapResult.push(fn(arr[i], i));
    }

    return mapResult;
};