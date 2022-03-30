/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    // nums = nums.sort((a,b) => a - b);

    // let mid = Math.floor(nums.length / 2);

    // if (nums[mid] === target) return mid;

    // if (target < nums[mid]) {
    //     let lowerSlice = nums.slice(0,mid - 1);
    //     search(lowerSlice,target)
    // } else {
    //     let upperSlice = nums.slice(mid + 1);
    //     search(upperSlice,target);
    // }


    // // for (let i = 0; i < nums.length; i++) {
    // //     if (nums[i] === target) return i;
    // // }
    // return -1;

    return bsearch(nums,target,0,nums.length-1)
};

const bsearch = (nums,target,l,h)=>{
    if(l>h) return -1;

    const mid = l + Math.floor((h-l)/2);
    if(nums[mid] == target) return mid

    if(nums[mid]>= nums[l]){
       if(target >= nums[l] && target < nums[mid])
           return bsearch(nums,target,l ,mid-1)
        else
            return bsearch(nums,target,mid + 1 ,h)
    }else{
        if(target > nums[mid] && target <= nums[h] )
            return bsearch(nums,target,mid +1 ,h)
        else
            return  bsearch(nums,target,l,mid -1)
    }

}

console.log(
    search([4,5,6,7,0,1,2], target = 0)
);