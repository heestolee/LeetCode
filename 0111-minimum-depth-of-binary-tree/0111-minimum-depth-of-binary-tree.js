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
 * @return {number}
 */
var minDepth = function(root) {
  if (root === null) {
    return 0;
  }

  const queue = [];
  queue.push({ node: root, depth: 1 });

  while (queue.length > 0) {
    const { node, depth } = queue.shift();

    if (node.left === null && node.right === null) {
      return depth;
    }

    if (node.left !== null) {
      queue.push({ node: node.left, depth: depth + 1 });
    }
    if (node.right !== null) {
      queue.push({ node: node.right, depth: depth + 1 });
    }
  }
};