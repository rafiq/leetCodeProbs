// This is an intersting way to get this answer. They just compared all the numbers that had even digits within the test range. This is the fastest answer, but definitely not the quickest answer to type.
var findNumbers = function(nums) {
    let count = 0;

    for (const num of nums) {
        if (num >= 10 && num < 100) {
            count++;
        } else if (num >= 1000 && num < 10000) {
            count++;
        } else if (num >= 100000 && num < 1000000) {
            count++;
        }
    }

    return count;
};
// Below is the second fastest answer and I like how they were able to put the chekcing of evenness into its own function. I also thought it was smooth how they converted the number to a string by making it a template literal.
const isEven = (val) => {
    const newVal = `${val}`.length
    if (newVal%2 === 0 ) {
        return true
    }
    return false
  }
  var findNumbers = function(nums) {
      let newArray = []
      for (let i = 0; i < nums.length; i++) {
        if (isEven(nums[i])){
            newArray.push(nums[i])
        }
      }
      return newArray.length
  };

//   The below code was like fifth fastest, but I like how they converted the numbers to strings by using "" and concatenating it to the number.
var findNumbers = function(nums) {
    var temp = 0
    for(let i=0; i<nums.length;i++) {
        ('' + nums[i]).length % 2 === 0 ? temp++ : temp+=0
    }
    return temp
};