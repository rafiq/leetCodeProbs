// The above answer is the fastest answer and it is a little confusing. I guess they are comparing the sorted array to the non sorted array and

var heightChecker = function(heights) {
    let newHeights = [...heights].sort((a, b) => a - b);
    return heights.filter((h, x) => newHeights[x] !== h).length
};

// Below is the second fastest answer and it is using reduce
var heightChecker = function(heights) {
    return [...heights].sort((a,b) => a-b).reduce((a,b,i) => a + (~~heights[i] !== b), 0);
   };