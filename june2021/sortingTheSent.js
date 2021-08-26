/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    let sentArray = s.split(" ");
    let result = [];
    sentArray.forEach(el => {
        result.push([el.match(/[^0-9]+/gi), el.match(/[0-9]/gi)])
    })
    return result.sort((a,b) => a[1] - b[1]).map(el => el[0]).join(" ")
};
console.log(
    sortSentence("is2 sentence4 This1 a3"),//"This is a sentence"
    sortSentence("Myself2 Me1 I4 and3"),//"This is a sentence"
)