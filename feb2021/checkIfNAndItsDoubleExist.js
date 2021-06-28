/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    // let doublesArray = arr.map(num => num * 2);
    let j = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j] * 2 && i !== j) {
                return true;
            }
        }
    }
    return false;
    // This for loop did work but breaks down when there are two zeros in the array which should return true. If one zero then it returns false which is right
    // for (let doubles = 0; doubles < arr.length; doubles++) {
    //     for (let singles = 0; singles < arr.length; singles++) {
    //         if (doublesArray[doubles] === arr[singles] && arr[singles] !== 0) {
    //             return true;
    //         }
    //     }
    // }
    // return false;

};
console.log(
    checkIfExist([10,2,5,3]),//true
    checkIfExist([7,1,14,11]),//true
    checkIfExist([0,0]),//true
    checkIfExist([3,1,7,11]),//false
    checkIfExist([-2,0,10,-19,4,6,-8]),//false
)