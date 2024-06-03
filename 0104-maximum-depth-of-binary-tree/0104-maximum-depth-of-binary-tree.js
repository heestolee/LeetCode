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
var maxDepth = function(root) {
    if (!root) return 0;
    
    let max = 0;
    const stack = [[root, 1]];
    
    while (stack.length > 0) {
        const [node, depth] = stack.pop();
        max = Math.max(depth, max);
        
        if (node.left) {
            stack.push([node.left, depth + 1]);
        }
        
        if (node.right) {
            stack.push([node.right, depth + 1]);
        }        
    }

    return max;
};