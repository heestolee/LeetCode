/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSum = function (nums) {
    const uniqueValues = new Map();
    
    for (const num of nums) {
        if (!uniqueValues.has(num) || uniqueValues.get(num) < num) {
            uniqueValues.set(num, num);
        }
    }
    
    let maxSum = 0;
    let hasPositive = false;
    
    for (const value of uniqueValues.values()) {
        if (value > 0) {
            maxSum += value;
            hasPositive = true;
        }
    }
    
    if (!hasPositive) {
        maxSum = Math.max(...uniqueValues.values());
    }
    
    return maxSum;
};
