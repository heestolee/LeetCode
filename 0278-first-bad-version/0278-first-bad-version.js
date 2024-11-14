/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  return function(n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let checkPoint = Math.floor((left + right) / 2);

      if (isBadVersion(checkPoint)) {
        right = checkPoint;
      } else {
        left = checkPoint + 1;
      }
    }

    return left;
  };
};
