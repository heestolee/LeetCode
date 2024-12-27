/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
	let maxScore = 0;
	let maxScoreSpot = values[0];
	
	for (let j = 1; j < values.length; j++) {
		const jValue = values[j] - j;
		maxScore = Math.max(maxScore, maxScoreSpot + jValue);
		maxScoreSpot = Math.max(maxScoreSpot, values[j] + j); 
  }
  
  return maxScore;
};