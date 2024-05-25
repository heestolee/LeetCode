/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const filteredResult = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i],i)) {
         filteredResult.push(arr[i]); 
      }  
    }
    
    return filteredResult;
};