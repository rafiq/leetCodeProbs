/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    // nums = nums.sort((a,b) => a - b);
    let result = []

    let numsMap = nums.reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})

    let sortedArray = Object.entries(numsMap).sort((a,b) => {
        if (a[1] === b[1]) return b[0] - a[0]
        else return a[1] - b[1]
    })

    for (let i = 0; i < sortedArray.length; i++) {
        while (numsMap[sortedArray[i][0]]) {
            result.push(sortedArray[i][0])
            numsMap[sortedArray[i][0]]--;
        }

    }

    return result.map(Number);
};
console.log(
    frequencySort([1,1,2,2,2,3]),// nums
    frequencySort([2,3,1,3,2]),// nums
)
// I like how they used the spread operator and the Array fill methods to make the right number of values in the array
var frequencySort = function(nums) {
    let m = new Map();
    nums.forEach(i=>{
        m.set(i, 1+(m.get(i)||0));
    })
    let a =[...m.entries()]
        .sort((a,b)=>( a[1]-b[1] || b[0]-a[0]));
    return a.reduce((r,i)=>{
            r.push(...Array(i[1]).fill(i[0]))
            return r;
        },[]);

};