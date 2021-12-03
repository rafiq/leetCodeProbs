/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {

    // while (stones.length > 1){
    //     let temp = [];
    //     let sortedArray = stones.slice().sort((a,b) => b - a);
    //     let indexOfMax = stones.indexOf(Math.max(...stones));
    //     let secondMax = sortedArray[1];
    //     let maxNum = sortedArray[0];

    //     if (indexOfMax !== stones.lastIndexOf(Math.max(...stones))) {
    //         stones = stones.filter(el => {
    //             el !== stones.indexOf(Math.max(...stones));
    //         })
    //     }

    //     for (let i = 0; i < stones.length; i++) {
    //         let el = stones[i];
    //         if (el === maxNum) {
    //             temp.push(maxNum - secondMax);
    //          } else if (el === secondMax) {
    //             continue;
    //         } else {
    //             temp.push(el);
    //         }
    //     }
    //     stones = temp;
    // }

    // return stones[0]  || 0;

    while (stones.length > 1) {
        let max1 = Math.max(...stones);
        stones.splice(stones.indexOf(max1),1);
        let max2 = Math.max(...stones);
        stones.splice(stones.indexOf(max2),1);
        if (max1 !== max2) stones.push(Math.abs(max1-max2));
    }
    return stones[0] || 0;
};
console.log(
    lastStoneWeight([2,7,4,1,8,1]),//1
    lastStoneWeight([1]),//1
    lastStoneWeight([1,3]),//2
)