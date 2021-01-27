/**
 * @param {number[]} arr
 * @return {number}
 */

var peakIndexInMountainArray = function(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let mid = Math.floor(left + (right - left)/2);

        if(arr[mid] > arr[mid+1]){
            right = mid;
        }else {
            left = mid + 1;
        }
    }

    return left;
};

//   I see said the blind man. I found the binary code for this problem and it essentiall started in the middle and looks one element to the right. If that element is bigger, then
// var peakIndexInMountainArray = function(arr) {
//     for(let i = 1; i < arr.length-1; i++) {
//         if (arr[i-1] < arr[i] && arr[i] > arr[i+1]) {
//             return i
//         }
//     }

//     return -1
// };

// Again, I find this strange that the fastest code is the for loop. I think there is a pattern here. for loops are fast, but I guess with certain tasks. This task requires that one loop through the whole array which is what I thought intitially, so then why is this in the topic of binary search? I am totally confused by that gem of an idea.  The above is the fastest code, and below is my code that didn't work and at the bottom is my code that did work but was really slow.
//  var peakIndexInMountainArray = function(arr) {
//     let left = 0;
//     let right = 0;

//     if(arr.length === 0) {
//         return false;
//     } else if(arr.length % 2 === 1) {
//          left = Math.floor(arr.length / 2)
//          right = arr.length / 2;
//     } else {
//          left = (arr.length / 2) - 1;
//          right = arr.length / 2;
//     }

//     while (left > 0 && right < arr.length - 1) {
//         let peak = [];
//         if(arr[left] > arr[right] && peak[0] < arr[left] ) {
//             right++;
//             peak.push(arr[left]);
//         } else if(arr[left] < arr[right] && arr[right] > peak[0]) {
//             left++;
//             peak.push(arr[right]);
//         }

//         return arr.indexOf(peak);
//     }

// };

// The below code was my first attempt it seems to have passed the first test of the problem. Seemed a bit easy, and I want to use the binary search feature, so I will try to code that by hand and see if I can get it.
// var peakIndexInMountainArray = function(arr) {
//     return arr.indexOf(Math.max(...arr));
// };

console.log(peakIndexInMountainArray([3,4,5,1]));
// Let's call an array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

