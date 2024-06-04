/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;

  const DFS = (node) => {
    if (node === null) return 0;
    const left = DFS(node.left);
    const right = DFS(node.right);
    if (Math.abs(right - left) > 1) return Infinity;
    return Math.max(left, right) + 1;
  };

  return DFS(root) !== Infinity ? true : false;
};