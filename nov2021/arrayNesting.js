/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayNesting = function(nums) {
    // let result = new Map();

    // for (let k of nums) {
    //     let currSet = new Map();
    //     let start = nums[k];

    //     while (!currSet.has(start)) {
    //         currSet.set(start,true);
    //         start = nums[start]
    //     }
    //     // console.log(currSet,result)
    //     result = currSet.size > result.size ? currSet : result;
    // }

    // return result.size;
    let tempSet = new Set()
    let max = -7777;
    let visited = new Array(nums.length).fill(false)
    for (let index = 0;index < nums.length;index++){
        let end = nums[index]
        if(visited[index] === false){
            while(tempSet.has(end) === false){
                visited[end] = true
                tempSet.add(end)
                end = nums[end]
            }
            max = Math.max(max,tempSet.size)
            tempSet.clear()
        }
    }

    return max
};
console.log(
    arrayNesting([5,4,0,3,1,6,2]),//4;
    arrayNesting([0,1,2]),//4;
);