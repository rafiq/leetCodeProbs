
/**
 * @param {string} boxes
 * @return {number[]}
 */
 var minOperations = function(boxes) {
    // let aResults = [];
    // let aBoxes = [...boxes];

    // for (let i = 0; i < aBoxes.length; i++){
    //     let result = 0;
    //     for (let j = 0; j < aBoxes.length; j++){
    //         if (aBoxes[j] == 1 && j !== i){
    //             result += Math.abs(i - j);
    //         }
    //     }
    //     aResults.push(result);

    // }
    // return aResults;

    let result = [];
    let total = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] != 0) {
            total += i + 1;
            result.push(i + 1)
        } else {
            result.push(+boxes[i]);
        }
    }
    for (let i = 0; i < boxes.length; i++) {
        result[i] = Math.abs(result[i] - total)
    }

    return result;
};
console.log(
    minOperations("001011")
);