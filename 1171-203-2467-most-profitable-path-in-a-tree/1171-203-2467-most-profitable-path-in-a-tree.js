/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
const mostProfitablePath = function(edges, bob, amount) {
  const nodes = edges.length + 1;
  const graph = Array.from({ length: nodes }, () => []);
  const visited = new Array(nodes).fill(false);
  const bobSteps = new Array(nodes).fill(0);

	edges.forEach(([nodeA, nodeB]) => {
    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
	});

  const trackBob = (node, step) => {
    if (visited[node]) return false;
    if (node === 0) {
      bobSteps[node] = step;
      return true;
    }
    visited[node] = true;

    for (const neighbor of graph[node]) {
      if (trackBob(neighbor, step + 1)) {
        bobSteps[node] = step;
        return true;
      }
    }
    return false;
  };

  const trackAlice = (node, step) => {
    if (visited[node]) return Number.MIN_SAFE_INTEGER;
    visited[node] = true;
    let maxProfit = Number.MIN_SAFE_INTEGER;

    graph[node].forEach((neighbor) => {
      const currentProfit = trackAlice(neighbor, step + 1);
      if (currentProfit !== Number.MIN_SAFE_INTEGER) {
        maxProfit = Math.max(maxProfit, currentProfit);
      }
    });

    if (maxProfit === Number.MIN_SAFE_INTEGER) maxProfit = 0;

    if (bobSteps[node] === 0 || step < bobSteps[node]) {
      return amount[node] + maxProfit;
    }
    if (step === bobSteps[node]) {
      return Math.floor(amount[node] / 2) + maxProfit;
    }
    return maxProfit;
  };

  trackBob(bob, 1);
  visited.fill(false);

  return trackAlice(0, 1);
};
