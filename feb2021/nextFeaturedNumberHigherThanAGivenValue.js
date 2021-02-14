function featured(num) {

    // if (num % 2 === 1 && num % 7 === 0 && isValid(num)) {
    //     return
    // }

    // return num;
    // let arr =  num.split("")
    return true;
    // return !(arr.filter((item, index) => arr.indexOf(item) != index))

}
// function isValid(num) {
//     let arr =  num.split("")
//     return !(arr.filter((item, index) => arr.indexOf(item) != index))
// }
console.log(
featured(12),           // 21
featured(20),           // 21
featured(21),           // 35
featured(997),          // 1029
featured(1029),         // 1043
featured(999999),       // 1023547
featured(999999987),    // 1023456987
featured(9876543200),   // 9876543201
featured(9876543201),   // "There is no possible number that fulfills those requirements."
)
