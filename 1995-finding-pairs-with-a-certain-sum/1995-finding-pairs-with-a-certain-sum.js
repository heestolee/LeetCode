/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
  this.nums1 = nums1;
  this.nums2 = nums2;
  this.freq2 = new Map();

  for (const num of nums2) {
    this.freq2.set(num, (this.freq2.get(num) || 0) + 1);
  }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
  const oldVal = this.nums2[index];
  const newVal = oldVal + val;

  // update frequency map
  this.freq2.set(oldVal, this.freq2.get(oldVal) - 1);
  if (this.freq2.get(oldVal) === 0) {
    this.freq2.delete(oldVal);
  }

  this.freq2.set(newVal, (this.freq2.get(newVal) || 0) + 1);

  // update nums2 value
  this.nums2[index] = newVal;
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
  let count = 0;

  for (const num of this.nums1) {
    const target = tot - num;
    count += this.freq2.get(target) || 0;
  }

  return count;
};

/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
 