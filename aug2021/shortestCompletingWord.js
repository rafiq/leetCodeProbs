
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
 var shortestCompletingWord = function(licensePlate, words) {
    // let shortest = Math.max(...words.map(el => el.length))
    // let shortestWord = words[0]
    // let cleanWord = licensePlate.replace(/[^a-z]/gi,"").toLowerCase()

    // const hashMaker = word => {
    //     let hash = {}

    //     for (let i = 0; i < word.length; i++) {
    //         hash[word[i]] ? hash[word[i]]++ : hash[word[i]] = 1
    //     }
    //     return hash
    // }

    // const isValid = (word1, word2) => {
    //     let testWord = hashMaker(word2)
    //     let needle = hashMaker(word1)

    //     return word1.split("").every(el => {
    //         return testWord[el] === needle[el]
    //     })
    // }

    // words.forEach(word => {
    //     if (isValid(cleanWord,word)) {
    //         if (word.length < shortest) {
    //             shortestWord = word
    //             shortest = shortestWord.length
    //         }
    //     }
    // })

    // return shortestWord
    let filtered = licensePlate.replace(/[^a-z]/gi,'');
    let res = "";
    for (let word of words) {
        let toReplace = filtered.slice();
        for (let char of word) {
            var regex = new RegExp(`[${char}]`,"i");
            toReplace = toReplace.replace(regex,'');
        }
        if (toReplace === "") {
            if (res === "") res = word;
            else if (res.length > word.length) res = word;
        }
    }
    return res;
};
console.log(
    shortestCompletingWord("1s3 PSt",  ["step","steps","stripe","stepple"]),
    shortestCompletingWord("1s3 456", ["looks","pest","stew","show"]),
    shortestCompletingWord("Ah71752",  ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]),
    shortestCompletingWord("OgEu755",  ["enough","these","play","wide","wonder","box","arrive","money","tax","thus"]),
    shortestCompletingWord("iMSlpe4", ["claim","consumer","student","camera","public","never","wonder","simple","thought","use"]),
)