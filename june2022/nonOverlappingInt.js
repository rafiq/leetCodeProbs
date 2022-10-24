/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    intervals = intervals.sort((a,b) => a[1] - b[1]);
  let prev = intervals[0]
  let count = 0;
    for(let  i = 1; i< intervals.length; i++){
        let curr = intervals[i]
    if(prev[1] > curr[0]) count++;
        else{
            prev = curr
        }
    }
    return count
};

console.log(

)