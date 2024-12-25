/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    return points
        .sort((a, b) => {
            const distA = a[0] ** 2 + a[1] ** 2;
            const distB = b[0] ** 2 + b[1] ** 2;
            return distA - distB;
        })
        .slice(0, k);
};