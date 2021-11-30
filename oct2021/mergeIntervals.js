/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    // let result = [invtervals[0]];
    // let possibilities = [];
    // intervals.sort((a, b) => {
    //     return a[0] - b[0]
    // });

    // for (let el of intervals) {

    //     possibilities.push(rangeMaker(el));

    //     console.log(rangeMaker(el))
    // }
    // return //rangeMaker(4, 6);
    if (!intervals || !intervals.length) {
        return [];
    }
    intervals.sort((a, b) => {
        return a[0] - b[0]
    });
    let res = [intervals[0]];


    for (let i = 1; i < intervals.length; i++) {
        let start1 = res[res.length - 1][0];
        let end1 = res[res.length - 1][1];
        let start2 = intervals[i][0];
        let end2 = intervals[i][1];

        if (end1 >= start2) {
            res[res.length - 1] = [start1, Math.max(end1, end2)];
        } else {
            res.push(intervals[i]);
        }
    }

    return res;
};
function rangeMaker(arr) {
    let result = Array(arr[1] - arr[0] + 1).fill(0);

    return result.reduce((acc,curr,idx) => {
        acc.push(idx + arr[0])
        return acc;
    },[]);
}
console.log(
    merge([[1,3],[2,6],[8,10],[15,18]]),//
);