/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (!init) {
        let init = nums[0]
        for (let i = 1; i < nums.length; i++) {
            fn(nums[i]);  
        }
    } 
    
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i])
    }
    
    return init;
};