/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    const letterFrequency = Array(26).fill(0);
    const letters = "abcdefghijklmnopqrstuvwxyz";
    
    for (const letter of s) {
        letterFrequency[letter.charCodeAt(0) - 97]++;
    }
    
    let result = "";
    let prevLetter = "";
    let prevLetterCount = 0;
    
    while (true) {
        let addedLetter = false;
        
        for (let i = 25; i >= 0; i--) {
            if (letterFrequency[i] === 0) continue;
            
            const currentLetter = letters[i];
            
            if (currentLetter === prevLetter && prevLetterCount >= repeatLimit) {
                continue;
            }
            
            result += currentLetter;
            letterFrequency[i]--;
            addedLetter = true;
            
            if (currentLetter === prevLetter) {
                prevLetterCount++;
            } else {
                prevLetter =  currentLetter;
                prevLetterCount = 1;
            }
            
            break;
        }
        
        if (!addedLetter) break;
    }
    
    return result;
};