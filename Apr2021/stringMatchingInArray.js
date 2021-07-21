/**
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
    // words = words.sort((a,b) => a.length - b.length)
    // let result = [];
    // for (let i = 0; i < words.length; i++) {
    //     for (let j = i + 1; j < words.length; j++) {
    //         if (words[j].includes(words[i])) result.push(words[i]);
    //         break;
    //     }
    // }
    // return result;
    // return "?".charCodeAt()
}
function getSubStr(word) {
    let result = [];
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length + 1; j++) {
            result.push(word.slice(i,j))
        }
    }
    return result.filter(el => el.length > 1);
}
console.log(
    stringMatching(["mass","as","hero","superhero"]),//["as","hero"])
)