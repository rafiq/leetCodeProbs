/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {


    let patternMapping = mapping(pattern);

    let length = Object.values(pattern).length ? Object.values(pattern).length : 0;

    // for (let i = 0; i < words.length; i++) {
    //     if (mapping(words[i]))
    // }
    // return Object.entries(mapping(words[4]))
    return mapping(words[4])
};
function mapping(word) {
    return word.split("").reduce((acc,curr) => {
        // acc[curr] ? acc[curr]++ : acc[curr] = 1;
        // acc[curr] = 1;
        acc.push(curr)
        return acc;
    },[]);
}
const mapLetters = string => {
    /**
     * abb => map = { a:[0], b:[1,2] }
     */
    const map = {};
    const letters = string.split('');
    for (let i = 0; i < letters.length; i++) {
        const index = letters[i];
        if (map[index]) {
            map[index].push(i);
        } else {
            map[index] = [i];
        }
    }
    return map;
};
console.log(
    findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"],"abb"),//["mee","aqq"])
)