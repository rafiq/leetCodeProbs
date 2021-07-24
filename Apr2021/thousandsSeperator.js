/**
 * @param {number} n
 * @return {string}
 */
 var thousandSeparator = function(n) {

    return n.toString().split("").reverse().reduce((acc,curr,idx) => {
        if (idx % 3 === 0) {
            acc += ".";
            acc += curr;
        } else acc += curr
        return acc;
    },"").split("").reverse().join("").slice(0,-1)
};
// /**This is the fastest code which is very similar to mine except for the fact that it used a pop method to a count variable to see when they had popped three digits and then inserted a period at that point. Next they have to reverse and join the array . They also had to check for an extra period like mine did, but I just sliced it off.
//  * @param {number} n
//  * @return {string}
//  */
//  var thousandSeparator = function(n) {
//     const output = [];
//     const nums = ("" + n).split('');

//     if (nums.length < 4) {
//         return nums.join('')
//     }
//     let count = 0;

//     while (nums.length > 0) {
//         output.push(nums.pop());
//         count +=1;
//         if (count === 3) {
//             output.push('.');
//             count = 0
//         }


//     }
//     let joinedNum = output.reverse().join('');

//     return joinedNum.startsWith('.') ? joinedNum.substr(1) : joinedNum
// }
console.log(
    thousandSeparator(1234),//"1.234"
    thousandSeparator(123456789),//"123.456.789"
    thousandSeparator(987),//"123.456.789"
    thousandSeparator(0),//"123.456.789"
)