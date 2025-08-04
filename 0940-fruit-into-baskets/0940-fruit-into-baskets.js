/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = function(fruits) {
  const fruitCountMap = new Map();
  let left = 0;
  let maxFruits = 0;

  for (let right = 0; right < fruits.length; right++) {
    const currentFruit = fruits[right];
    fruitCountMap.set(currentFruit, (fruitCountMap.get(currentFruit) || 0) + 1);

    while (fruitCountMap.size > 2) {
      const leftFruit = fruits[left];
      fruitCountMap.set(leftFruit, fruitCountMap.get(leftFruit) - 1);
      if (fruitCountMap.get(leftFruit) === 0) {
        fruitCountMap.delete(leftFruit);
      }
      left++;
    }

    const currentWindowSize = right - left + 1;
    if (currentWindowSize > maxFruits) {
      maxFruits = currentWindowSize;
    }
  }

  return maxFruits;
};
