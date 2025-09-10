/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function(n, languages, friendships) {
  const knownLanguagesByUser = new Array(languages.length + 1);
  for (let userId = 1; userId <= languages.length; userId += 1) {
    knownLanguagesByUser[userId] = new Set(languages[userId - 1]);
  }

  const usersNeedingCheck = new Set();
  for (const [userA, userB] of friendships) {
    if (!haveCommonLanguage(knownLanguagesByUser[userA], knownLanguagesByUser[userB])) {
      usersNeedingCheck.add(userA);
      usersNeedingCheck.add(userB);
    }
  }

  if (usersNeedingCheck.size === 0) return 0;

  let minToTeach = usersNeedingCheck.size;
  for (let languageId = 1; languageId <= n; languageId += 1) {
    let needTeachCount = 0;
    for (const userId of usersNeedingCheck) {
      if (!knownLanguagesByUser[userId].has(languageId)) {
        needTeachCount += 1;
      }
    }
    if (needTeachCount < minToTeach) {
      minToTeach = needTeachCount;
    }
  }

  return minToTeach;

  function haveCommonLanguage(setA, setB) {
    const [smaller, larger] = setA.size <= setB.size ? [setA, setB] : [setB, setA];
    for (const lang of smaller) {
      if (larger.has(lang)) return true;
    }
    return false;
  }
};
