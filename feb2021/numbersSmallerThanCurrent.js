/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // let smallerNums = [];
    // let count = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     let cv = nums[i]

    //     for ( let j = 0; j < nums.length; j++) {
    //         let num = nums[j];
    //         cv > num && cv !== num ? count++ : [];
    //     }
    //     smallerNums.push(count);
    //     count = 0;
    // }
    // return smallerNums;

    let sorted = nums.sort((a,b) => a - b)
    console.log(sorted)
}


var smallerNumbersThanCurrent = function(nums) {
    const sortedNums = [...nums].sort((a,b) => a-b);

    return nums.map(num => sortedNums.indexOf(num));
};

// Below are my failed attempts to solve this problem
// Above is the fastest answer
    // let index = 0;
// hashtable
    // let hashtable = {};

    // for (const value in nums) {
    //         for (let i = 0; i < nums.length; i++) {
    //             nums[i] < value && nums[i] !== value ? hashtable[value] += 1 : hashtable[value] = 1;
    //         }
    //     }
    //     console.log(hashtable);
    // }

// map
    // nums.forEach((value) => {
    //     return value.map()
    //     if (smaller < big && big !== smaller) {

    //     }
    // })

    // for loops
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //             if (nums[i] !== nums[j] && nums[j] < nums[i]) {
    //                 count++;
    //             }
    //         }
    //         smallerNums.push(count);
    // }
//   console.log(smallerNums)

// };

smallerNumbersThanCurrent([8,1,2,2,3]); //[4,0,1,1,3]
smallerNumbersThanCurrent([6,5,4,8]); //[2,1,0,3]
smallerNumbersThanCurrent([7,7,7,7]);// [0,0,0,0]
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.