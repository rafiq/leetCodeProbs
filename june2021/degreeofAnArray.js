/**
 * @param {number[]} nums
 * @return {number}
 */

 const findShortestSubArray = nums => {
    let map = {}, degree = 0, minLen = Infinity;

     for (let i = 0; i < nums.length; i++) {
         let n = nums[i];

         if (map[n] !== undefined) { map[n][0]++; }
         else { map[n] = [1, i]; }

         if (map[n][0] > degree) {
             degree = map[n][0];
             minLen = i - map[n][1] + 1;
         } else if (map[n][0] === degree) {
             minLen = Math.min(minLen, i - map[n][1] + 1);
         }
     }

     return minLen;
 };

var findShortestSubArray = function(nums) {

    let map = nums.reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{});
    let arrayFreq = Object.entries(map)
    let maxFreqNum = 0 //Math.max(...Object.entries(map[1]));
    for (let i = 0; i < arrayFreq.length; i++) {
        if (arrayFreq[i][1] > maxFreqNum) {
            maxFreqNum = +arrayFreq[i][0];
        }
    }
    // console.log(maxFreqNum, Object.entries(map))
    return nums.slice(nums.indexOf(maxFreqNum),nums.lastIndexOf(maxFreqNum) + 1).length
};
console.log(
    findShortestSubArray([1,2,2,3,1]),//2
    findShortestSubArray([1,2,2,3,1,4,2]),//6
)