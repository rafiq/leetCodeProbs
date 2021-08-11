/**
 * @param {number[]} arr
 * @return {number}
 */
 var findSpecialInteger = function(arr) {
    // let length = arr.length;
    // let resultArray = [];
    // // let currentNumber = arr[0];
    // let keys = arr.reduce((acc,curr) => {
    //     acc[curr] ? acc[curr]++ : acc[curr] = 1;
    //     return acc;
    // },{})
    // for (let i = 0; i < keys.length; i++) {
    //     resultArray.push(Math.floor(keys[i][1] * 100 / length ))
    //     // console.log(Math.floor(keys[i][1] * 100 / length ))
    // }
    // for (let el of resultArray) {
    //     if ()
    // }
    // return keys
    // if (isAbove25(currentNumber) && ) return currentNumber;
    // for (let i = 1; i < arr.length; i++) {
    //     if (isAbove25(arr[i]) && arr.indexOf(currentNumber) === arr.lastIndexOf(currentNumber)) {

    //     }
    // }
    // let regex = new RegExp(arr[0])
    // return arr.filter( el => el === arr[0]).length / arr.length * 100;
    // return -1
    const map = arr.reduce((map,e)=>{
        if (map[e]) {
            map[e]++
        }else{
            map[e] = 1
        }
        return map
    },{})
    let res = 0
    for(let key in map) {
        if (map[key]>res) {
            res = map[key]
        }
    }
    for(let key in map) {
        if (map[key] === res) {
            return key
        }
    }
};
function isAbove25(el,arr) {
    return arr.filter( el => el === arr[0]).length / arr.length * 100 > 25;
}
console.log(
    findSpecialInteger([1,2,2,6,6,6,6,7,10]),//6
)

// ! This is the fastest solution which is using binary search to find the first occurence and last occurence of the target number. I don't understand completely but get it a little.
var findSpecialInteger = function(arr) {
    const n = arr.length;

    if (n === 1) return arr[0]; // edge case

    const indexes = [Math.floor(n / 4), Math.floor(n / 2), Math.floor((3 * n) / 4)];

    for (let i = 0; i < 4; i++) {
        const num = arr[indexes[i]];

        const start = findFirstOcc(0, indexes[i], num);
        const end = findLastOcc(indexes[i], n, num);

        const len = end - start + 1;
        if (len > Math.floor(n / 4)) return num;
    }

    // a binary search for finding the first occurrence of the target number
    function findFirstOcc(left, right, target) {

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);

            if (arr[mid] < target) left = mid + 1;
            else right = mid;
        }

        return left;
    }

    // a binary search for finding the last occurrence of the target number
    function findLastOcc(left, right, target) {
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);

            if (arr[mid] <= target) left = mid + 1;
            else right = mid;
        }

        return left - 1;
    }
};

// ! This is the second fastest solution and it is looking for the element that occurs most in the array and it is pretty easy to understand.
var findSpecialInteger = function(arr) {
    let count = 0, max = 0, res = 0
    if (arr.length === 1)
        return arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i-1]) {
            count++
            if (count > max) {
                max = count
                res = arr[i]
            }
        } else {
            count = 0
        }
    }

    return res
};