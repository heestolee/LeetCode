/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  let playerIndex = 0;
  let trainerIndex = 0;
  let matchCount = 0;

  while (playerIndex < players.length && trainerIndex < trainers.length) {
    if (players[playerIndex] <= trainers[trainerIndex]) {
      matchCount++;
      playerIndex++;
      trainerIndex++;
    } else {
      trainerIndex++;
    }
  }

  return matchCount;
};
