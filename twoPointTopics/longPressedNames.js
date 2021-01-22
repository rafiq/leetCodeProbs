/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {

}
// console.log("eara".length)
// My whack code below
// var isLongPressedName = function(name, typed) {
//     let letters = [];
//     let p1 = name.length - 1;
//     let p2 = typed.length - 1;


//     while(p1 >= 0 && p2 >= 0) {
//         if(name[p1] === typed[p2]) {
//             letters.push[typed[p2]];
//             p1--;
//             p2--;
//         } else {
//             p2--;
//         }
//     }
//     console.log(letters);
//     return name === letters;
// };

console.log(isLongPressedName("alex","aaleex")); //true
console.log(isLongPressedName("saeed","ssaaedd"));

// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.