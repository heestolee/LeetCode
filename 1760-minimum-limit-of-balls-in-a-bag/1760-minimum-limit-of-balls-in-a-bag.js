/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    const canDivide = (penalty) => {
        let operations = 0;
        for (const num of nums) {
            operations += Math.floor((num - 1) / penalty);
            if (operations > maxOperations) return false;
        }
        return true;
    };

    let left = 1; 
    let right = Math.max(...nums);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canDivide(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
