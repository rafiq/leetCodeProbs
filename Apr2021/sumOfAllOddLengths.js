/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    // let subArrArray = [];
    // let len = 1;
    // let copy = arr;
    // while (len <= arr.length) {
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr.slice(i, i + len) && arr.slice(i, i + len).length === len) {
    //             subArrArray.push(arr.slice(i, i + len))
    //         }
    //     }
        // for (let i = 0; i < arr.length; i += 2) {
        //     if (arr.slice(i,i + len))
        // }
    //     len += 2
    // }
    //  return subArrArray//.flat().reduce((acc,curr) => {})
    // return subArrArray.flat().reduce((acc,curr) => {
    //     acc += sumDigits(curr)
    //     return acc;
    // },0)
    let sum = 0;

    for(let i = 0; i < arr.length; i ++) {
        for(let j = i; j < arr.length; j += 2) {
            for(let k = i; k <= j; k ++) {
                sum += arr[k];
            }
        }

    }

    return sum;
};
function sumDigits(num) {
    return num.toString().split("").reduce((acc,curr) => {
        acc += Number(curr)
        return acc;
    },0);
}
console.log(
    // sumOddLengthSubarrays([1,4,2,5,3]),//58
    sumOddLengthSubarrays([10,11,12]),//66
)


// // I understand this Java code below , but apparently it is really slow
// // Stores the sum
// int sum = 0;

// // Size of array
// int l = arr.length;

// // Traverse the array
// for(int i = 0; i < l; i++)
// {

//     // Generate all subarray of
//     // odd length
//     for(int j = i; j < l; j += 2)
//     {
//         for(int k = i; k <= j; k++)
//         {

//             // Add the element to sum
//             sum += arr[k];
//         }
//     }
// }

// // Return the final sum
// return sum;