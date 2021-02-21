// // Ok, my code almost worked and I was on the right path but I had trouble with creating the hash table and putting the unique codes in there. The youtube solution used a new Set() method which automatically screens out any duplicates for you and then he made a convertToMorse function which add new strings to that hash table, and then just returned the size of the hash table.
// /**
//  * @param {string[]} words
//  * @return {number}
//  */
// var uniqueMorseRepresentations = function(words) {
//     const MORSE_CODE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
//     const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//     let types = {};

//     let codesArray = words.map(word => {
//         word.split("").reduce((acc,curr) => {
//             acc += (MORSE_CODE[alphabet.indexOf(curr)])
//             return acc;
//         },"")
//     })

//     // for (let i = 0; i < words.length; i++) {
//     //     if (types[MORSE_CODE[alphabet.indexOf(words[i])]]) {
//     //         types[MORSE_CODE[alphabet.indexOf(words[i])]]++;
//     //     }
//     //     types[MORSE_CODE[alphabet.indexOf(words[i])]] = 1;
//     // }


//     // let wordCode = words.split("").reduce((acc,curr) => {
//     //     acc += (MORSE_CODE[alphabet.indexOf(curr)])
//     //     return acc;
//     // },"")


//     return codesArray;
// };
// // console.log(uniqueMorseRepresentations("msg")); //2
// console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])); //2

// // 804. Unique Morse Code Words
// // International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// // For convenience, the full table for the 26 letters of the English alphabet is given below:

// // [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// // Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

// // Return the number of different transformations among all words we have.

// // His code below with my conversion code using reduce.
// let representations = new Set();

// for (let word of words) {
//     representations.add(convertToMorse(word))
// }
// return representations.size;
// }

// function convertToMorse(char) {
// let code = char.charCodeAt() - "a".charCodeAt();
// return MORSE_CODE[code]
// }

const MORSE_CODE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let types = {};

for (let i = 0; i < alphabet.length; i++) {
    types[alphabet[i]] = MORSE_CODE[i];
}
console.log(types)