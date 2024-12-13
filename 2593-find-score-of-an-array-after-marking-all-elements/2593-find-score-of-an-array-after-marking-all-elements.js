/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    let arr = nums.map((n, i) => ({val: n, index: i}));
    const marked = new Set();
    
    arr.sort((a, b) => {
        if (a.val === b.val){
            return a.index - b.index;
        }
        return a.val - b.val;
    });

    let score = 0;
    for(let n of arr) {
        if(!marked.has(n.index)){
            marked.add(n.index);
            marked.add(n.index-1);
            marked.add(n.index+1);
            score += n.val;
        }
    }
    
    return score;
};

// var findScore = function(nums) {
//   let score = 0;
//   const copiedNums = [...nums];
//   function isAllMarked(array) {
//     const result = array.find((el) => el !== "checked");
//     return result;
//   }
//   while(isAllMarked(copiedNums)) {
//     const minValue = Math.min(...copiedNums.filter(el => el !== "checked"));
//     const minIndex = copiedNums.findIndex((el) => el === minValue);
//     score += copiedNums[minIndex];
    
//     copiedNums[minIndex] = "checked";
//     if (minIndex > 0) copiedNums[minIndex - 1] = "checked";
//     if (minIndex < copiedNums.length - 1) copiedNums[minIndex + 1] = "checked";
//   }
  
//   return score;
// };