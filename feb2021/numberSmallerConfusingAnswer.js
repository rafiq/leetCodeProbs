var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    // loop through array and make a new array in result.
    for(let i = 0; nums.length > i; i++){
        if(!result[i]){
            result[i] = 0;
        }
        console.log(result);

        for(let j = i + 1; nums.length > j; j++){
            if(!result[j]){
                result[j] = 0;
            }
            // THis is where the confusion comes in. Why is result[i] increasing and result[j] increasing. Seems like they should do something else.
            if(nums[i] > nums[j]){
                result[i]++;
            }else if(nums[i] < nums[j]){
                result[j]++;
            }
        }

    }

    return result;

};

smallerNumbersThanCurrent([6,5,4,8]);