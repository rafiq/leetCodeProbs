/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
 var isSumEqual = function(firstWord, secondWord, targetWord) {
    const wordConverter = word => {
        let result = ""

        for (let i = 0; i < word.length; i++) {
            result += word[i].charCodeAt() - 97
        }
        return +result
    }

    let firstStr = wordConverter(firstWord)
    let secondStr = wordConverter(secondWord)

    return firstStr + secondStr === wordConverter(targetWord)
};

console.log(
    isSumEqual("acb", "cba", "cdb"),
    isSumEqual("aaa", "a", "aab"),
)