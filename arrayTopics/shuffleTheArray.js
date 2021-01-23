/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let i = 0;
    let j = n;
    let newArray = [];

    while(j < nums.length) {
        newArray.push(nums[i]);
        newArray.push(nums[j]);
        i++;
        j++;
    }

    return newArray;
};

console.log(shuffle([2,5,1,3,4,7],3)) //[2,3,5,4,1,7]
console.log(shuffle([1,2,3,4,4,3,2,1],4)) //[1,4,2,3,3,2,4,1]
console.log(shuffle([7,5,9,7,5,8,10,4,3,3,2,5,9,10],7)) //[7,4,5,3,9,3,7,2,5,5,8,9,10,10]

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
// Nice to get one right once in awhile. Hopefully this will become a habit
// Interesting that the fastest code again was a for loop when I was thinking that that was a brute force way of solving, but it most depend on the data that is being searched and the algo being used.
// var shuffle = function(nums, n) {
//     let output = [];
//     for(let i = 0, j = n; j < nums.length; i++, j++){
//         output.push(nums[i]);
//         output.push(nums[j]);
//     }
//     return output;
// };