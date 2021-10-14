/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
 var numOfStrings = function(patterns, word) {
        let count = 0;

        for (let sub of patterns) {
            let regex = new RegExp(sub);

            if (regex.test(word)) count++;
        }

        return count
};
console.log(
    numOfStrings(["a","abc","bc","d"], "abc"),
    numOfStrings(["a","b","c"], "aaaaabbbbb"),
    numOfStrings(["a","a","a"], "ab")
)