/**
 * @param {number} totalPlayers
 * @param {number} firstPlayer
 * @param {number} secondPlayer
 * @return {number[]}
 */
var earliestAndLatest = function (totalPlayers, firstPlayer, secondPlayer) {
  const memo = new Map();
  const MAX_ROUND = 30;

  const dfs = (currentPlayers, round) => {
    const key = `${currentPlayers.join(',')}|${round}`;
    if (memo.has(key)) return memo.get(key);

    const pairCount = Math.floor(currentPlayers.length / 2);
    let leftIndex = 0;
    let rightIndex = currentPlayers.length - 1;

    while (leftIndex < rightIndex) {
      const leftPlayer = currentPlayers[leftIndex];
      const rightPlayer = currentPlayers[rightIndex];

      const isFirst = (leftPlayer === firstPlayer && rightPlayer === secondPlayer);
      const isSecond = (leftPlayer === secondPlayer && rightPlayer === firstPlayer);
      if (isFirst || isSecond) return [round, round];

      leftIndex += 1;
      rightIndex -= 1;
    }

    const nextPlayerSet = new Set();

    const simulateMatchups = (pairIndex, advancingPlayers) => {
      if (pairIndex >= pairCount) {
        if (currentPlayers.length % 2 === 1) {
          const middleIndex = Math.floor(currentPlayers.length / 2);
          advancingPlayers.push(currentPlayers[middleIndex]);
        }

        const orderedNextRound = [...advancingPlayers].sort((a, b) => a - b);
        nextPlayerSet.add(orderedNextRound.join(','));

        if (currentPlayers.length % 2 === 1) {
          advancingPlayers.pop();
        }

        return;
      }

      const leftPlayer = currentPlayers[pairIndex];
      const rightPlayer = currentPlayers[currentPlayers.length - 1 - pairIndex];

      const isFirstInPair = leftPlayer === firstPlayer || rightPlayer === firstPlayer;
      const isSecondInPair = leftPlayer === secondPlayer || rightPlayer === secondPlayer;

      if (isFirstInPair) {
        advancingPlayers.push(firstPlayer);
        simulateMatchups(pairIndex + 1, advancingPlayers);
        advancingPlayers.pop();
      } else if (isSecondInPair) {
        advancingPlayers.push(secondPlayer);
        simulateMatchups(pairIndex + 1, advancingPlayers);
        advancingPlayers.pop();
      } else {
        advancingPlayers.push(leftPlayer);
        simulateMatchups(pairIndex + 1, advancingPlayers);
        advancingPlayers.pop();

        advancingPlayers.push(rightPlayer);
        simulateMatchups(pairIndex + 1, advancingPlayers);
        advancingPlayers.pop();
      }
    };

    simulateMatchups(0, []);

    let earliest = MAX_ROUND;
    let latest = 0;

    for (const next of nextPlayerSet) {
      const nextPlayers = next.split(',').map(Number);
      const [nextEarliest, nextLatest] = dfs(nextPlayers, round + 1);
      earliest = Math.min(earliest, nextEarliest);
      latest = Math.max(latest, nextLatest);
    }

    const result = [earliest, latest];
    memo.set(key, result);
    return result;
  };

  const initialLineup = [];
  for (let number = 1; number <= totalPlayers; number++) {
    initialLineup.push(number);
  }

  return dfs(initialLineup, 1);
};
