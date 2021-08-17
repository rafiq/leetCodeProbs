/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
 var canBeTypedWords = function(text, brokenLetters) {
    let textArray = text.split(" ")
    let count = 0;

    textArray.forEach(el => {
        if (brokenLetters.split("").every(letter => {
            return !el.includes(letter)
        })) count++
    })
    return count
}
console.log(
    canBeTypedWords("leet code", "lt"),//1
    canBeTypedWords("hello world", "ad"),//1
)