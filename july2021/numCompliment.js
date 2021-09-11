/**
 * @param {number} num
 * @return {number}
 */
 var findComplement = function(num) {

    let binaryStr =  num.toString(2)
    let result = ""

    binaryStr.split("").forEach(el => {
        if (el === "0") result += "1"
        if (el === "1") result += "0"
    })

    return parseInt(result,2)

//     num = num.toString(2);
//     let newNum =[];
//    for(a of num){
//        newNum.push(a == 0 ? 1 : 0)
//    }
//     return parseInt(newNum.join(''),2)
};
console.log(
    findComplement(5),//2
)