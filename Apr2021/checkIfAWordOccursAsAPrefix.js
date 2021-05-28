/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
 var isPrefixOfWord = function(sentence, searchWord) {
    let index = -1;
    let sentenceArray = sentence.split(" ");

    for (let i = 0; i < sentenceArray.length; i++) {
        if (sentenceArray[i].match("\\b" + searchWord,"i")) {
            index = i + 1 ;
            break;
        }
    }
    return index;
};
console.log(
    isPrefixOfWord("i love eating burger", "burg"),//4
    isPrefixOfWord("this problem is an easy problem", "pro"),//2
    isPrefixOfWord("i am tired", "you"),//-1
)