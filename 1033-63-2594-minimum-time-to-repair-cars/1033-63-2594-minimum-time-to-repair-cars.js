/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
  let left = 1;
  let right = Number.MAX_SAFE_INTEGER;
  
  const isPossible = (time) => {
    let totalCars = 0;
    for (const rank of ranks) {
      totalCars += Math.floor(Math.sqrt(time / rank));
      if (totalCars >= cars) return true;
    }
    return totalCars >= cars;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (isPossible(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  
  return left;
};
