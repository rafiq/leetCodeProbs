/**
 * @param {string} number
 * @return {string}
 */
 var reformatNumber = function(number) {
        let cleanNum = number.replace(/[^0-9]/g,"");
        let result = [];
        for (let i = 0; i < cleanNum.length; i += 3) {
            result.push(cleanNum.substr(i,3))
        }
        if (cleanNum.length === 4) {
            return cleanNum.slice(- 4,-2) + "-" + cleanNum.slice(-2);
        } else if (result[result.length - 1].length === 1) {
            return result.slice(0,-2).join("-") + "-" + cleanNum.slice(- 4,-2) + "-" + cleanNum.slice(-2);
        } else {
            return result.join("-")
        }
    // return result//[result.length - 1];
    // return cleanNum.slice(0,-3)// cleanNum.slice(- 3,-1)
};
console.log(
    reformatNumber("1-23-45 6"),//"123-456"
    reformatNumber("123 4-567"),//"123-45-67"
    reformatNumber("--17-5 229 35-39475 "),//"175-229-353-94-75"
    reformatNumber("12"),//"12"
    reformatNumber("9964-"),//"99-64"
)