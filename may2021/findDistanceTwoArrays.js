/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
 var findTheDistanceValue = function(arr1, arr2, d) {

    let res = 0;
    for (let x of arr1) {
        let bool = true;
        for (let y of arr2) {
            if (Math.abs(x - y) <= d) {
                bool = false;
                break;
            }
        }
        if (bool) res++;
    }
    return res;
    // ! I was trying to do this without a double for loop but it looks like I should have done that
    // let count = 0;
    // for (let i = 0; i < arr2.length; i++) {
    //     if (arr1.some(val => arr2[i] - d <= val)) {
    //         count++;
    //     }
    // }
    // return count;
};
console.log(
    findTheDistanceValue([4,5,8],  [10,9,1,8], 2)
)