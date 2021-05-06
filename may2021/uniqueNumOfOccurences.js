/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    let mapArry = Object.values(arr.reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{}))

    for (let i = 0; i < mapArry.length; i++) {
        if (mapArry.indexOf(mapArry[i]) !== mapArry.lastIndexOf(mapArry[i])) return false;
    }
    return true;
    // return new Set(Object.values(arr.reduce((acc,curr) => {
    //     acc[curr] ? acc[curr]++ : acc[curr] = 1;
    //     return acc;
    // },{}))).size === Object.values(arr.reduce((acc,curr) => {
    //     acc[curr] ? acc[curr]++ : acc[curr] = 1;
    //     return acc;
    // },{})).length
};
console.log(
    uniqueOccurrences([1,2,2,1,1,3]),//true;
    uniqueOccurrences([1,2]),//false
    uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]),//true
)

// ! Good optimization
// idea of using the sort and then checking if any adjacent elements are the same which is faster than my using the index of methods which probably search the entire array for both methods.
var uniqueOccurrences = function (arr1) {
    let hash = {};
    for (const i of arr1) {
      if (hash[i]) hash[i]++;
      else hash[i] = 1;
    }

    let arr = Object.values(hash).sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        return false;
      }
    }

    return true;
  };