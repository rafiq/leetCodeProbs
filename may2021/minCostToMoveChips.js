/**
 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {
    let even=0; let odd= 0;
    for(let chip of position){
        if(chip%2===0){
            even++;
        }else{
            odd++;
        }
    }
    return Math.min(even, odd);
//    ! My answer below worked but was 5%
    //  let count = 0;
    // let min = Number.MAX_SAFE_INTEGER;
    // for (let i = 0; i < position.length; i++) {
    //     for (let j = 0; j < position.length; j++) {
    //         if (Math.abs(position[j] - position[i]) % 2 === 1) {
    //             count++;
    //         }
    //     }
    //     min = Math.min(count,min)
    //     count = 0;
    // }
    // return min;
};
console.log(
    minCostToMoveChips([2,2,2,3,3]),//2
    minCostToMoveChips([1,1000000000]),//1
    minCostToMoveChips([1,2,3]),//1
    minCostToMoveChips([2,3,3]),//1
)