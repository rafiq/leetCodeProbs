/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    // let sum = 0;

    // for (let i = 0; i < nums.length; i++) {
    //         if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
    //             continue;
    //         }
    //         sum += nums[i];
    //     }
        // ?I have to admit that this is pretty smooth how they did this. I saw a couple other wasy to find duplicates in JS using the indexOf / reduce / and [...new Set(array)] methods.
    // console.log(nums.filter((curr,index,arr) => {
    //     if (arr.indexOf(index) === index)
    // }

    console.log(nums.reduce((acc,curr) => {
        if (acc.includes(curr)) {
            acc
        } else {
            [...acc,curr]
        }
        return acc;
    },[]))

        // return sum;

    // The code below is mine and I don't know why it is not working properly.
    // let uniques = [];
    // let p1 = 0;
    // let p2 = 1;
    // let sortedArray = nums.sort((a,b) => a - b);

    // while (p1 < sortedArray.length) {
    //     if (p2 === [] || p2 === undefined) {
    //         uniques.push(sortedArray[p1])
    //     }
    //     if (sortedArray[p1] === sortedArray[p2]) {
    //         p2++;
    //     } else if (sortedArray[p1] !== sortedArray[p2]) {
    //         uniques.push(sortedArray[p1]);
    //         p1 = p2;
    //         p2++;
    //     }
    //     return uniques;
    // }

    // let hash = {};

    // for (let i = 0; i < nums.length; i++) {
    //     if (hash[nums[i]] = undefined) {
    //         hash[nums[i]] = 1;
    //     } else {
    //         hash[nums[i]] += 1;
    //     }
    // }

    // console.log(nums)

}
sumOfUnique([1,2,3,2]); // 4
sumOfUnique([1,1,1,1,1]); // 0
sumOfUnique([1,2,3,4,5]);// 15



// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.