/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let result = [];
    let count = 0;

    nums.map(num => {
        for (let i = nums.indexOf(num) + 1; i < nums.length; i++) {
            if (num > nums[i]) {
                count++;
            }
        }
        result.push(count);
        count = 0;
    })
    return result;
};

countSmaller([5,2,6,1]); //[2,1,1,0]
countSmaller([-1]); // [0]
countSmaller([-1,-1])
// nums.reduce((acc,curr,idx) => {
//     let count = 0;
//     if (curr > acc) {
//         count++;
//     }
//     acc.push(count)

//     return acc;
// },[])
// console.log(result)