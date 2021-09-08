var smallestRangeI = function(nums, k) {
    if (nums.length <= 1) return 0;
    let biggest = Math.max(...nums), lowBOfBiggest = biggest - k;
    let smallest = Math.min(...nums), uppBOfSmallest = smallest + k;
    if (lowBOfBiggest - uppBOfSmallest <= 0) return 0;
    else return lowBOfBiggest - uppBOfSmallest;
};
console.log(
    smallestRangeI([1,3,6], 3),//0
)