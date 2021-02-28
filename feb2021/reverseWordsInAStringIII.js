/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let split = s.split(" ").map(word => word.split("").reverse().join(""))
    return split.join(" ");
};
// let split = s.split(" ").reduce((acc,word) => acc += word.split("").reverse(),"")
console.log(
    reverseWords("Let's take LeetCode contest")//"s'teL ekat edoCteeL tsetnoc"
)
//557. Reverse Words in a String III
// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.


