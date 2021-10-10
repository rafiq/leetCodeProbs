/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 *
 * empty string?
 * characters?
 *
 * if target is not included, then return string?
 * only farthest left so interate from left with for loop
 * stop when current matches target
 * slice and reverse from 0 to i AND slice from i
 * concat new string with rest
 * return new string
 *
 */
 var reversePrefix = function(word, ch) {
    if (!word.includes(ch)) return word;
    let result = "";

    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            let newString = word.slice(0, i + 1).split("").reverse().join("")

            result = newString + word.slice(i + 1)
            return result
        }
    }

    return word.slice(0,3) + word.slice(3);
};
console.log(
    reversePrefix("abcdefd", "d"),//"dcbaefd"
    reversePrefix("xyxzxe",  "z"),//""zxyxxe""
    reversePrefix( "abcd", "z"),//""abcd""
)