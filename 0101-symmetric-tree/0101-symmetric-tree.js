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
var isSymmetric = function(root) {
  // === Recursive version ===
  const isMirrorRecursive = (node1, node2) => {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;

    return (
      isMirrorRecursive(node1.left, node2.right) &&
      isMirrorRecursive(node1.right, node2.left)
    );
  };

  // === Iterative version ===
  const isMirrorIterative = (node1, node2) => {
    const queue = [[node1, node2]];

    while (queue.length > 0) {
      const [a, b] = queue.shift();

      if (!a && !b) continue;
      if (!a || !b) return false;
      if (a.val !== b.val) return false;

      queue.push([a.left, b.right]);
      queue.push([a.right, b.left]);
    }

    return true;
  };

  if (!root) return true;

  // isMirrorRecursive 대신 isMirrorIterative를 넣어도 통과
  return isMirrorRecursive(root.left, root.right);
};
