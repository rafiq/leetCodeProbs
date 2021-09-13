/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
    let result = []
    const ROW_TOP = "qwertyuiop"
    const ROW_MIDDLE = "asdfghjkl"
    const ROW_BOTTOM = "zxcvbnm"

    for (let i = 0; i < words.length; i++) {
        let currRow = ROW_TOP.includes(words[i][0]) ? ROW_TOP : ROW_MIDDLE.includes(words[i][0] ? ROW_MIDDLE : ROW_BOTTOM)

        words[i].forEach(letter => {
            if (!currRow.includes(letter)) {

            }
        })
    }

    return words;
};
console.log(
    findWords(["omk"]),//[]
)

