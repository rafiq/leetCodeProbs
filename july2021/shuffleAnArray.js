/**
 * @param {number[]} nums
 */
//  var Solution = function(nums) {
//     this.nums = nums

    // const reset = () => nums = this.nums;
    // const shuffle = () => {
        // var currentIndex = nums.length,  randomIndex;

        // while (0 !== currentIndex) {
        //   randomIndex = Math.floor(Math.random() * currentIndex);
        //   currentIndex--;
        //   [nums[currentIndex], nums[randomIndex]] = [
        //     nums[randomIndex], nums[currentIndex]];
        // }

        // return nums;
    // }

    // return {
    //     nums,
    //     reset,
    //     shuffle,
    // }
// };

// Solution.prototype.reset = function() {
//     return this.nums;
// };

// Solution.prototype.shuffle = function() {
//     let n = this.nums.length;
//     let arr = this.nums;
//     for(let i=0;i<n;i++){
//         let randomIndex = Math.floor(Math.random() * (i+1));
//         [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
//     }
//     return arr;
// };

var Solution = function(nums) {
    this.originalConfig = [...nums];
    this.nums = nums;
};

Solution.prototype.reset = function() {
    this.nums = [...this.originalConfig];
    return this.nums
};

Solution.prototype.shuffle = function() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    for (let i = 0; i < this.nums.length; i++) {
        this.swap(i, getRandomInt(0, this.nums.length))
    }
    return this.nums
};

Solution.prototype.swap = function(first, second) {
        let temp = this.nums[first]
        this.nums[first] = this.nums[second];
        this.nums[second] = temp
}

 var obj = new Solution([1, 2, 3])
//  var param_2 = obj.shuffle()
//  var param_1 = obj.reset()
console.log(obj.shuffle())
console.log(obj.shuffle())
console.log(obj)
console.log(obj.reset())
console.log(obj)