/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    const n = nums.length;
    const sameParity = Array(n - 1).fill(0);

    for (let i = 0; i < n - 1; i++) {
        sameParity[i] = (nums[i] % 2 === nums[i + 1] % 2) ? 1 : 0;
    }

    const prefix = Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + (i - 1 < sameParity.length ? sameParity[i - 1] : 0);
    }

    return queries.map(([from, to]) => {
        return prefix[to] - prefix[from] === 0;
    });
};
