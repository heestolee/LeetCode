/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const numsCount = {};
    const majorityCount = Math.floor(nums.length / 2);
    
    for (const num of nums) {
        numsCount[num] = (numsCount[num] || 0) + 1;
        
        if (numsCount[num] > majorityCount) {
            return num;
        }
    }
};
