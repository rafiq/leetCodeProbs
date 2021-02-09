var dominantIndex = function(nums) {
    // if (!nums.length) return -1;
    // var res;
    // a = nums.reduce(function (acc,val,i) {
    // if (val > acc) {
    //     res = i;
    //     return val;
    // }
    // else return acc
    // },0);
    // b = nums.reduce((acc,val,i) => (val > acc && i!=res ? val : acc),0);
    // return a/b >= 2 ? res : -1;
    // Below is a slow answer but uses the sort method
    if(nums.length === 1) return 0
    let numSort = [...nums].sort((a,b)=>b-a)

   return numSort[0]/2 >= numSort[1] ? nums.indexOf(numSort[0]) : -1
};
console.log(dominantIndex([0,1]))