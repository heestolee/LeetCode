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
var minimumOperations = (root) => {
    if (!root) return 0;

    const levels = [];
    const queue = [[root, 0]];

    while (queue.length > 0) {
        const [node, level] = queue.shift();

        if (levels.length === level) levels.push([]);
        levels[level].push(node.val);

        if (node.left) queue.push([node.left, level + 1]);
        if (node.right) queue.push([node.right, level + 1]);
    }

    return levels.reduce((totalOperations, levelValues) => {
        if (levelValues.length > 1) {
            totalOperations += calculateMinSwaps(levelValues);
        }
        return totalOperations;
    }, 0);
};
const calculateMinSwaps = (values) => {
    const n = values.length;
    const indexedValues = values.map((value, index) => [value, index]);
    indexedValues.sort((a, b) => a[0] - b[0]);

    let swaps = 0;
    const visited = Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (visited[i] || indexedValues[i][1] === i) continue;

        let cycleSize = 0;
        let currentIndex = i;

        while (!visited[currentIndex]) {
            visited[currentIndex] = true;
            currentIndex = indexedValues[currentIndex][1];
            cycleSize++;
        }

        if (cycleSize > 1) swaps += cycleSize - 1;
    }

    return swaps;
};

