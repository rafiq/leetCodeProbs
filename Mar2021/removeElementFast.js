// I am a little lost on the this one, I can see  it is two pointer, but I am a little confused on

var removeElement = function(nums, val) {
    let i = 0;

    for(let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};