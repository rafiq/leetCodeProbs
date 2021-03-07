// Here is a pretty smooth way of running a while loop that is removing each element from the original array until the original array is completely gone and inspecting each element on its way out to see if it is a zero. If it is then it is pushed to the temp array. If it is not a zero, then it is pushed to the arr array. Lastly this function pushes both back into the original array and returns undefined since nothing is indicated.
var moveZeroes = function(nums) {
    let arr=[],temp=[];
      while(nums.length>0) {
          let current=nums.shift();
         if (current!==0) arr.push(current);
         else temp.push(0);
      }
     nums.push(...arr,...temp);
  };

//   Here they are using one pointer to go through the array and see if it is not a zero.
var moveZeroes = function(arr){
    let pt = 0 //4

    //removing the zeroes and replacing them with the integers
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[pt] = arr[i]
            pt++
        }
    }

    //change the rest of the array to all zeroes
    for(let i = pt; i < arr.length; i++){
        arr[i] = 0
    }

    return arr

}