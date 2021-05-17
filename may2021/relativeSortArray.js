/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
            while (arr1.includes(arr2[i])) {
                result.push(arr2[i]);
                arr1[arr1.indexOf(arr2[i])] = ""
            }
    }

    return result.concat(arr1.sort((a,b) => a - b).filter(el => el === Number(el)))
};
console.log(
    relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]),//[2,2,2,1,4,3,3,9,6,7,19])
)
// ! fastest answer
// I can't say I really understand the below code all too well right now, but I do understand that they used a hash table to store the indices of arr2 to their numbs, then got all the remaining nums from arr1 and sorted them. Then filtered and returned arr1?
var relativeSortArray = function(arr1, arr2) {
    let map = {}
    for(let i=0;i<arr2.length;i++){
        map[arr2[i]] = i
    }
    let rem = arr1.filter(a=>map[a] == undefined).sort((a,b)=>a-b)
    let res = arr1.filter(a=>map[a] != undefined).sort((a,b)=>{
        return map[a] - map[b]
    })
    return res.concat(rem)
};