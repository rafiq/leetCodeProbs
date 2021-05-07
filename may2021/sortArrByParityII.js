/**
 * @param {number[]} nums
 * @return {number[]}
 */
//  var sortArrayByParityII = function(nums) {
//     let p1 = 0;
//     let p2 = 1;

//     while (p1 < nums.length || p2 < nums.length) {

//         p1 += 2
//         p2 += 2
//     }
    // let oddsArray = [];
    // let evenArray = [];

    // nums.forEach(el => {
    //     if (el % 2 === 0) evenArray.push(el)
    //     else oddsArray.push(el)
    // });

    // return evenArray.reduce((acc,curr,idx) => {
    //     acc.push(curr);
    //     acc.push(oddsArray[idx])
    //     return acc;
    // },[])
// };
var sortArrayByParityII = function(nums) {
    let even = 0, odd =1, obj = {};
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            obj[even] = nums[i];
            even += 2;
        }else{
            obj[odd] = nums[i];
            odd += 2;
        }
    }
    return Object.values(obj)
}
console.log(
    sortArrayByParityII([4,2,5,7]),//[4,5,2,7])
    sortArrayByParityII([2,3]),//[4,5,2,7])
)

// ! genius

// I love how they are used the hash table to make just two elements, evens and odds, which they just return as an array in the end.