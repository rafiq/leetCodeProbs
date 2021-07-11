/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    return String(+num1 + +num2);
};
console.log(
    addStrings("11","123"),//134
    addStrings("9333852702227987",
    "85731737104263"),//"9419584439332250"
)