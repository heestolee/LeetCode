/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
  const reverseGraph = Array.from({ length: graph.length }, () => []);
  const outDegree = Array(graph.length).fill(0);

  for (let i = 0; i < graph.length; i++) {
    for (const neighbor of graph[i]) {
      reverseGraph[neighbor].push(i);
    }
    outDegree[i] = graph[i].length;
  }

  const queue = [];
  for (let i = 0; i < graph.length; i++) {
    if (outDegree[i] === 0) {
      queue.push(i);
    }
  }

  const safe = Array(graph.length).fill(false);
  while (queue.length > 0) {
    const node = queue.shift();
    safe[node] = true;
    for (const neighbor of reverseGraph[node]) {
      outDegree[neighbor]--;
      if (outDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  const result = [];
  for (let i = 0; i < graph.length; i++) {
    if (safe[i]) {
      result.push(i);
    }
  }
  return result;
};