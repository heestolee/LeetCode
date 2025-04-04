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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
  const dfs = (node) => {
    if (!node) return [0, null];

    const [leftDepth, leftNode] = dfs(node.left);
    const [rightDepth, rightNode] = dfs(node.right);

    if (leftDepth === rightDepth) return [leftDepth + 1, node];
    return leftDepth > rightDepth ? [leftDepth + 1, leftNode] : [rightDepth + 1, rightNode];
  };

  return dfs(root)[1];
};
