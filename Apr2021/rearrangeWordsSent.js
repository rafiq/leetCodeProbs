/**
 * @param {string} text
 * @return {string}
 */
 var arrangeWords = function(text) {
    let newOrderedArray = text.toLowerCase().split(" ").sort((a,b) => a.length - b.length);

    return makeFirstWordCapital(newOrderedArray[0]) + " " + newOrderedArray.slice(1).join(" ")
};
function makeFirstWordCapital(word) {
    return word[0].toUpperCase() + word.slice(1);
}
console.log(
    arrangeWords("Leetcode is cool" , "Is cool leetcode"),//
    arrangeWords("Keep calm and code on"),//
    arrangeWords("To be or not to be"),//
)