/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
 var sumEvenAfterQueries = function(nums, queries) {
    let result = [];
    for (let i = 0; i < queries.length; i++) {

        nums[queries[i][1]] += queries[i][0]
        result.push(nums.reduce((acc,curr,idx) => {
            if (curr % 2 === 0) acc += curr;
            return acc
        },0))
    }
    return result;
};
console.log(
    sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]),//]8,6,2,4
)