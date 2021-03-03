/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let slicedArray = arr.slice(i + 1)
        arr[i] = Math.max(...slicedArray)
        if (arr[i + 1] === undefined) arr[i] = -1;
    }
    return arr
};
console.log(
    replaceElements([17,18,5,4,6,1]),//[18,6,6,6,1,-1]
    replaceElements([400]),//[-1]
)

// There is some logic here that I am missing.
var replaceElements = function(arr) {
    let o = -1;
    let n = 0;
    for (let i = arr.length-1; i >= 0; i--) {
        n = Math.max(arr[i], o);
        arr[i] = o;
        o = n;
    }
    return arr;
};

// This is almost the same thing and I can see that they are swapping the components but I am not seeing the logic of how they are doing that.
var replaceElements = function(arr) {
    let max = -1;
    for(let i=arr.length-1; i>=0; i--) {
        let tmp = arr[i];
        arr[i] = max;
        max = Math.max(max, tmp);
    }
    return arr;
};