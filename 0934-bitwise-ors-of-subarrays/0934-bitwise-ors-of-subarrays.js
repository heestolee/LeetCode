/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
  const resultSet = new Set();
  let prevSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    const currentSet = new Set();
    currentSet.add(arr[i]);

    for (const prev of prevSet) {
      currentSet.add(prev | arr[i]);
    }

    for (const value of currentSet) {
      resultSet.add(value);
    }

    prevSet = currentSet;
  }

  return resultSet.size;
};
