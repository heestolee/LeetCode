/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const revisions1 = version1.split('.').map(Number);
  const revisions2 = version2.split('.').map(Number);

  const maxLength = Math.max(revisions1.length, revisions2.length);

  for (let i = 0; i < maxLength; i++) {
    const value1 = i < revisions1.length ? revisions1[i] : 0;
    const value2 = i < revisions2.length ? revisions2[i] : 0;

    if (value1 < value2) return -1;
    if (value1 > value2) return 1;
  }

  return 0;
};
