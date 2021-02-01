var runningSum = function(nums) {
    let sum = 0;
    return nums.map((num) => { sum += num; return sum; })
};

// THIS IS WHAT I was trying to do the first time I attempted this. It is so frustrating when you are just on the edge of getting something correct and you are off by a semi colon. AAAAAGGH! The one below is pretty cool too.

var runningSum = function(nums) {

    for(let i in nums){
        nums[i]=nums[i]+(nums[i-1]||0);
    }
    return nums;
};