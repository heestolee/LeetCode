/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    const rows = new Array(numRows).fill("");
    let index = 0;
    let direction = 1;

    for (let i = 0; i < s.length; i++) {
        rows[index] += s[i];
        if (index === 0) {
            direction = 1;
        } else if (index === numRows - 1) {
            direction = -1;
        }
        index += direction;
    }

    return rows.join("");
};
