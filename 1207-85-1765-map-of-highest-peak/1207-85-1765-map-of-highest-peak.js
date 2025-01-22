/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
    const m = isWater.length;
    const n = isWater[0].length;

    const height = Array.from({ length: m }, () => Array(n));
    const queue = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                height[i][j] = 0;
                queue.push([i, j]);
            } else {
                height[i][j] = -1;
            }
        }
    }

    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    let index = 0;
    while (index < queue.length) {
        const [x, y] = queue[index++];
        const currentHeight = height[x][y];

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX >= 0 && newX < m && newY >= 0 && newY < n && height[newX][newY] === -1) {
                height[newX][newY] = currentHeight + 1;
                queue.push([newX, newY]);
            }
        }
    }

    return height;
};
