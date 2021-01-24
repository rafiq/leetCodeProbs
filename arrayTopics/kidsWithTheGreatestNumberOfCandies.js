/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
//  var kidsWithCandies = function(candies, extraCandies) {
//     let biggestNum = Math.max(...candies);

//     return candies.map(num => {
//         if((num + extraCandies) >= biggestNum) {
//             return true
//         } else {
//             return false;
//         }
//     })
// };


// console.log(kidsWithCandies([2,3,5,1,3],3));
// console.log(kidsWithCandies([4,2,1,1,2],1));
console.log(findBigNum([4,2,1,1,2]));

function findBigNum(array) {
    let temp = 0;

    for (let i = 0; i < array.length; i++) {

        if(array[i] > temp) {
            temp = array[i];
        }
    }
    return temp;
}
// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.