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
    if (left === -1) return -1;
    const right = DFS(node.right);
    if (right === -1) return -1;

    if (Math.abs(right - left) > 1) return -1;
    return Math.max(left, right) + 1;
  };

  return DFS(root) !== -1;
};
