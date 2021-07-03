// Here is the fastest answer and I like how they only dealt with numbers as opposed to turning it into a string.
let isPalindrome = function(x) {
    // Taking care of any negatives here.
    if (x < 0) {
        return false;
    }

    return x === reversedInteger(x);
};
// Outside function which reverses the number by
let reversedInteger = function(x) {
    let reversed = 0;
// WOW! I am loving how this is reversing the number by arithmetic only. no function besides Math.floor. So it is starting with zero and multiplying it by 10 and adding the modulo of the original number. Then it reassigns the original number in the above equation to with the last digit cut off. Then it iterates through the loop again with new reversed number and new original number.
    while (x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    return reversed;
};
// THis only works with positive numbers.
console.log(reversedInteger(-121))

// Below is another way to reverse the string by using a for loop and pushing the last digit to a new array until the whole string has been pushed.
var isPalindrome = function(x) {
    let str = x.toString();
    let new_str= [];
    for(i=0; i<str.length; i++){
        new_str[i] = str[str.length-1-i];
    }

    return (new_str.join('') == str)

};