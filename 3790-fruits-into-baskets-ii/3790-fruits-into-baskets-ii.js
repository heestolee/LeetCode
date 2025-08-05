/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
  const used = new Array(baskets.length).fill(false);
  let unplacedCount = 0;

  for (let i = 0; i < fruits.length; i++) {
    let placed = false;

    for (let j = 0; j < baskets.length; j++) {
      if (!used[j] && baskets[j] >= fruits[i]) {
        used[j] = true;
        placed = true;
        break;
      }
    }

    if (!placed) {
      unplacedCount++;
    }
  }

  return unplacedCount;
};
