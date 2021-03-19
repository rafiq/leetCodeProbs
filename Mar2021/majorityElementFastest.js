// I finally got one right.


var majorityElement = function(nums) {
    let currMajorityELem = nums[0];
    let currCount = 1;

    for(let i=1; i<= nums.length-1; i++)
      {
        if(currCount===0)
          {
            currMajorityELem = nums[i];
          }

        if(nums[i]==currMajorityELem)
          {
            currCount++;
          }
        else
          {
            currCount--;
          }
      }
  return currMajorityELem;
};