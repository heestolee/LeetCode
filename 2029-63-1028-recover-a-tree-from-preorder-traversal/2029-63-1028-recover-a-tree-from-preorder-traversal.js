/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
  const stack = [];
  let index = 0;

  while (index < traversal.length) {
    let depth = 0;
    while (traversal[index] === '-') {
      depth++;
      index++;
    }

    let nodeValue = 0;
    while (index < traversal.length && !isNaN(traversal[index])) {
      nodeValue = nodeValue * 10 + Number(traversal[index]);
      index++;
    }

    const node = new TreeNode(nodeValue);

    while (stack.length > depth) {
      stack.pop();
    }

    if (stack.length > 0) {
      const parentNode = stack[stack.length - 1];
      if (!parentNode.left) {
        parentNode.left = node;
      } else {
        parentNode.right = node;
      }
    }

    stack.push(node);
  }

  return stack[0];
};
