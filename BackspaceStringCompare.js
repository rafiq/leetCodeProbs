// /**
//  * @param {string} S
//  * @param {string} T
//  * @return {boolean}
//  */
var backspaceCompare = function(S, T) {



    const getTyped = (input) => {
        const result = [];
        for (let char of input) {
            if(char === "#") {
                if (input.length >= 1) {
                    result.pop()
                }
            } else {
                result.push(char);
            }
        }

        return result.join("");

    }
    return getTyped(S) === getTyped(T);


//     char => {
//         if (char === "#") {
//             if (modifiedStringS.length >= 1) {
//                 modifiedStringS.pop();
//             }
//         } else {
//             modifiedStringS.push(char);
//         }
//     })

//     let modifiedStringT = T.map(char => {
//         if (char === "#") {
//             if (modifiedStringT.length >= 1) {
//                 modifiedStringT.pop();
//             }
//         } else {
//             modifiedStringT.push(char);
//         }
//     })

// return modifiedStringT

// var backspaceCompare = function(S, T) {
//     let modifiedStringS = S.split("");
//     let modifiedStringT = T.split("");
//     let indexNumS = S.indexOf("#");
//     let indexNumT = T.indexOf("#");

//     let arrayS = modifiedStringS.splice((indexNumS - 1), 2);
//     let arrayT = modifiedStringT.splice((indexNumT - 1), 2);


//     if(arrayS == arrayT) {
//         return true;
//     } else {
//         return false;
//     }

    // return `${modifiedStringS}, ${modifiedStringT}`;

//     // .map((a,b) => {
//     //     if( b === "#") {
//     //         b.pop();
//     //         a.pop();
//     //     }
//     // });

//     // ("").map((a,b) => {
//     //     if( b === "#") {
//     //         b.pop();
//     //         a.pop();
//     //     }
//     // });


};

console.log(backspaceCompare("ab#c","ad#c"));

// console.log("ab#c".indexOf("#"))
// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".