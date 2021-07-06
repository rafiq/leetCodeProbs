/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    // let peak = 0;
    // let i = 1;

    // while (i < arr.length - 1) {
    //     i++;
    // }

    // if (arr[i] > arr[i + 1] && arr[i] < arr[i - 1]) {
    //     peak++;
    // }
    // return arr[i] !== arr[i + 1] && peak === 1

    // [0,3,2,1]
    let maxIndex = null
    for (let i = 1; i <= arr.length - 1; i++) {
      if (maxIndex === null) {
        // This is checking the ascending side of the mountain.
        if (arr[i] < arr[i - 1]) {
          maxIndex = i - 1
        } else if (arr[i] === arr[i - 1]) {
          return false
        }
        // And this is checking the descending side of the mountain.
      } else if (arr[i] >= arr[i - 1]) {
        return false
      }
    }
    return maxIndex > 0 && maxIndex < arr.length - 1

    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i - 1] === arr[i]  && !(arr[i] > arr[i - 1] && arr[i] > arr[i + 1])) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
};

console.log(
    validMountainArray([2,1]),//false
    validMountainArray([0,3,2,1]),//true
)