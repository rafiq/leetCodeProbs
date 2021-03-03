// The below is actually one of the more slower answers, but it is similar to what I was trying to do before and it shows that I was supposed to decrement the j counter.
var removeDuplicates = function(nums) {

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                nums.splice(j,1);
                j -= 1;
            }
        }
    }
    return nums.length;
};

// This is the third fastest answer
var removeDuplicates = function(nums) {
    if(nums.length == 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j ++){
        if(nums[j] !== nums[i]){
           i++;
           nums[i] = nums[j];
        }
    }

    return i + 1
};