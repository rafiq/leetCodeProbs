/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    let patternMap = {}
    let patternStr = "";

    for (let i = 0; i < pattern.length; i++) {
        if (patternMap[pattern[i]] === undefined) {
            patternMap[pattern[i]] = i;
        }
        patternStr = patternStr + patternMap[pattern[i]];
    }

    let result = [];

    for (let i = 0; i < words.length; i++) {
        let wordMap = {}
        let w = words[i];
        let wordStr = "";

        for (let j = 0; j < w.length; j++) {
            const c = w[j];
            if (wordMap[c] === undefined) {
                wordMap[c] = j;
            }
            wordStr = wordStr + wordMap[c];
        }
        if (wordStr === patternStr) {
            result.push(w);
        }

    }
    return result;
    // for (let i = 0; i < words.length; i++) {
    //     if (words[i].length !== pattern.length) continue;
    //     else {

    //     }
    // }
    // return pattern.split("").map(el => el.charCodeAt());

    // let res = []
    // for (let word of words) {
    //     if (word.length != pattern.length)
    //         continue
    //     let found = 1, dict = {}
    //     for (let i = 0; i < word.length; i++) {
    //         if (pattern[i] in dict) {
    //             if (dict[pattern[i]] != word[i]) {
    //                 found = 0
    //                 break
    //             }
    //         }
    //         else
    //             dict[pattern[i]] = word[i]
    //     }
    //     if (Object.values(dict).length != new Set(Object.values(dict)).size)
    //         found = 0
    //     if (found)
    //         res.push(word)
    // }
    // return res
};
function getHash(word) {

    return word.split("").reduce((acc,curr) => {
       acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})
}
console.log(
    findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb"),//]"mee","aqq"
)