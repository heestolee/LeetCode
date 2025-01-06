/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  const answer = new Array(boxes.length).fill(0);
  let count = 0;
  let operations = 0;

  for (let i = 0; i < boxes.length; i++) {
    answer[i] += operations;
    count += boxes[i] === "1" ? 1 : 0;
    operations += count;
  }

  count = 0;
  operations = 0;
  for (let i = boxes.length - 1; i >= 0; i--) {
    answer[i] += operations;
    count += boxes[i] === "1" ? 1 : 0;
    operations += count;
  }

  return answer;
};