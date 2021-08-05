/**
 * @param {number[]} arr
 * @return {number}
 */
 var findLucky = function(arr) {
    let result = -1;
    let arrMap = arr.reduce((acc,curr) => {
       acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc
    },{});

    for (let i = 0; i < arr.length; i++) {
        if (arrMap[arr[i]] === arr[i] && arr[i] > result)
        result = arr[i];
    }

    return result
};
console.log(
    findLucky([2,2,3,4]),//2
    findLucky([1,2,2,3,3,3]),//3
    findLucky([2,2,2,3,3]),//-1
    findLucky([7,7,7,7,7,7,7]),//7
)