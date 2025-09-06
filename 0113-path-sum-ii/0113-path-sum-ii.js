/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val === undefined ? 0 : val);
 *   this.left = (left === undefined ? null : left);
 *   this.right = (right === undefined ? null : right);
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const result = [];
  const currentPath = [];

  const dfs = (node, sumSoFar) => {
    if (node === null) return;

    const nextSum = sumSoFar + node.val;
    currentPath.push(node.val);

    const isLeaf = node.left === null && node.right === null;
    if (isLeaf && nextSum === targetSum) {
      result.push([...currentPath]); // 현재 경로 스냅샷
    }

    if (node.left !== null) dfs(node.left, nextSum);
    if (node.right !== null) dfs(node.right, nextSum);

    currentPath.pop(); // 백트래킹
  };

  dfs(root, 0);
  return result;
};
