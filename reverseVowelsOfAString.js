/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arrayOfVowels = s.split("");
    let pointer1 = 0;
    let pointer2 = arrayOfVowels.length - 1;

    while(pointer1 < pointer2) {
        let temp = [];

        while(pointer1 < pointer2) {
            if (!isVowel(arrayOfVowels[pointer1])) {
                pointer1++;
            } else {
                break;
            }
        }
        while(pointer1 < pointer2) {
            if(!isVowel(arrayOfVowels[pointer2])) {
                pointer2--;
            } else {
                break;
            }
        }

            temp = arrayOfVowels[pointer1];
            arrayOfVowels[pointer1] = arrayOfVowels[pointer2];
            arrayOfVowels[pointer2] = temp;
            pointer2--;
            pointer1++;

        }
        return arrayOfVowels.join("");
    };

function isVowel(letter) {
    let vowels = "aeiou";

    return vowels.includes(letter.toLowerCase());
}
console.log(reverseVowels("hello")); // "holle"
console.log(reverseVowels("leetcode")); // "leotcede"


// It is good to see that my original code was almost correct. I didn't understand why Terrible Whiteboard used a while loop in a while loop, but the fastest code did not use that. My original while loop was exactly the same as the one below with the ! and everything except for the fact that I used "includes()" instead of has because I frankly didn't know about that method. I also did not seperate my swap math into its own function which is a cool way to do it. I also liked the way that the guy above swapped out the isVowels function.
var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    s = s.split('');

    let l = 0, r = s.length - 1;

    while(l < r){
        if(vowels.has(s[l]) && vowels.has(s[r])){
            swap(s, l, r);
            l++, r--;
        }else if(!vowels.has(s[l])){
            l++;
        }else if(!vowels.has(s[r])){
            r--;
        }
    }

    return s.join('');
};

const swap = (arr, l, r) => {
    const temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
};
// Write a function that takes a string as input and reverse only the vowels of a string.

