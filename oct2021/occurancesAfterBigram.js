/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
 var findOcurrences = function(text, first, second) {
    let newArray = text.split(" ");
    let result = [];

    for (let i = 0; i < newArray.length - 2; i++) {
        let el = newArray[i];

        if (el === first && newArray[i + 1] === second) {
            let third = newArray[i + 2];
            result.push(third);
        }
    }
    return result
    // return text.split(" ").filter((el,idx,arr) => {


    // })
};
console.log(
    findOcurrences("we will we will rock you",  "we",  "will"),//[we,rock]
    findOcurrences("alice is a good girl she is a good student", first = "a", second = "good"),
    findOcurrences("ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk",
    "lnlqhmaohv",
    "ypkk"),//["ypkk","ypkk"]
)