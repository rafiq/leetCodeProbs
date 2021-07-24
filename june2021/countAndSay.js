/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    if (n === 1) return "1";
    let count = 1;
    let result = "";
    let num = 1;

    while (count < n) {
        num = +getNumOfEachChar(num)
        console.log(num)
        result = num;
        count++
    }
    return String(result);
 }
 function getNumOfEachChar(n) {
    let nStr = n.toString()
    let start = 0;
    let end = 0;
    let result = [];

    for (let i = 0; i < nStr.length; i++) {
        if (nStr[i] === nStr[i + 1]) {
            start = i;
            end = i + 1;
            while (nStr[start] === nStr[end]) {
                end++
            }
            result.push(nStr.slice(start,end))
            start = i + 1;
            i = end - 1;
        } else {
            result.push(nStr[i])
        }
    }
     return result.map(el => [el.length,el[0]].join("")).join("")
 }
console.log(
    countAndSay(4),//1211
    countAndSay(1),//
    // getNumOfEachChar(1221)
)