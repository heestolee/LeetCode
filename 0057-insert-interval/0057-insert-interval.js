/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
    const result = [];
    let index = 0;

    while (index < intervals.length && intervals[index][1] < newInterval[0]) {
        result.push(intervals[index]);
        index++;
    }

    while (index < intervals.length && intervals[index][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
        index++;
    }
    result.push(newInterval);

    while (index < intervals.length) {
        result.push(intervals[index]);
        index++;
    }

    return result;
}