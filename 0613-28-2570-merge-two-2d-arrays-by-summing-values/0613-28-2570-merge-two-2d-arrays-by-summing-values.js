/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
  const mergedMap = new Map();

  for (const [id, value] of nums1) {
    mergedMap.set(id, (mergedMap.get(id) || 0) + value);
  }

  for (const [id, value] of nums2) {
    mergedMap.set(id, (mergedMap.get(id) || 0) + value);
  }

  return [...mergedMap.entries()].sort((a, b) => a[0] - b[0]);
};