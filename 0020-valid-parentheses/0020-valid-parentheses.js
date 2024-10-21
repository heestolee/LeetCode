/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            stack.push(char);
        } 
        else {
            const last = stack.pop();
            if (map[last] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};