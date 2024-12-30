/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    const moduloRequire = 1e9 + 7;
    const goodStringCount = new Array(high + 1).fill(0);
    let result = 0;
    goodStringCount[0] = 1;

    for (let i = 1; i <= high; i++) {
        if (i - zero >= 0) goodStringCount[i] = (goodStringCount[i] + goodStringCount[i - zero]) % moduloRequire;
        if (i - one >= 0) goodStringCount[i] = (goodStringCount[i] + goodStringCount[i - one]) % moduloRequire;
    }

    for (let i = low; i <= high; i++) {
        result = (result + goodStringCount[i]) % moduloRequire;
    }

    return result;
};