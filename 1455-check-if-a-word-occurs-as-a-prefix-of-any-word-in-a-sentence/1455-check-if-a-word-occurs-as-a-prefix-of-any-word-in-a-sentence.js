/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    const wordArray = sentence.split(" ");
    console.log("searchWord is", searchWord)
    for (let i = 0; i < wordArray.length; i++) {
        if(wordArray[i].startsWith(searchWord)) {
            return i + 1;
        }
    }
    
    return  -1;
};
