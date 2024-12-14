/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function(nums) {
    let count = 0;
    let left = 0;
    let maxWindow = [];
    let minWindow = [];

    for (let right = 0; right < nums.length; right++) {
        while (maxWindow.length > 0 && nums[maxWindow[maxWindow.length - 1]] < nums[right]) {
            maxWindow.pop();
        }
        maxWindow.push(right);

        while (minWindow.length > 0 && nums[minWindow[minWindow.length - 1]] > nums[right]) {
            minWindow.pop();
        }
        minWindow.push(right);

        while (nums[maxWindow[0]] - nums[minWindow[0]] > 2) {
            if (maxWindow[0] === left) maxWindow.shift();
            if (minWindow[0] === left) minWindow.shift();
            left++;
        }
        count += right - left + 1;
    }

    return count;

};