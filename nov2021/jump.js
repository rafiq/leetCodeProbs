/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    const len = nums.length
    const table = new Array(len).fill(Infinity)
    table[0] = 0


    for (let i = 0; i < len; i++) {
        let stepSize = nums[i]
        // must not go beyond array's length
        stepSize = Math.min(stepSize, len - 1 - i)
        let prevOutcome = table[i]

        for (let j = 1; j <= stepSize; j++) {
            let outcome = table[i + j]
            outcome = Math.min(1 + prevOutcome, outcome)
            table[i + j] = outcome
        }
    }


    let result = table[-1 + len]
    return result

    // let jumpArr = new Array(nums.length).fill(0);
    // let lastIndex = nums.length - 1;
    // for(let index = lastIndex - 1; index >=0; index--) {
    //     if(nums[index] == 0) continue;
    //     if(lastIndex - index <= nums[index]){
    //         jumpArr[index] = 1;
    //     }
    //     else {
    //         let tempArr = jumpArr.slice(index, index+nums[index]+1)
    //         tempArr = tempArr.filter((t) => {return t>0})
    //         let minValue = Math.min(...tempArr)
    //         jumpArr[index] = minValue + 1;
    //     }
    // }
    // return jumpArr[0];
};
console.log(
    jump()
);