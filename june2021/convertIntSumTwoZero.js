/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {

    // let arrayRange = [...Array(n).keys()].map(function (_, i) {return i + 1;})
    // let result = []
    // let copy = n;
    // while (copy) {
    //     if (arrayRange.includes(n - copy) && !(n - copy).toString().includes("0") && !copy.toString().includes("0")) {
    //         return [copy, n - copy]
    //         // result.push(copy);
    //         // result.push(n - copy);
    //         // break;
    //     }
    //     copy--
    // }
    // return result;

    // ! Below is the fastest answer
    for (let i=0;i<n;i++){
        if(!i.toString().includes('0') && !(n-i).toString().includes('0')){
            return [i,n-i];
        }
    }
    return [];
};
console.log(
    getNoZeroIntegers(2),//[1,1]
    getNoZeroIntegers(11),//[2,9]
)