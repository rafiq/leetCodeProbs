/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length)
    return false;

let letters1 = s.split('');
let letters2 = t.split('');
for (let letter of letters1) {
    let position = letters2.indexOf(letter);
    if(position == -1)
        return false;
    letters2.splice(position, 1);
}
return true;

    //    let array = t.split("");

//     for (let letter of array) {
//         if (s.includes(letter) === false) {
//                        return false;
//                    } else {
//                        return true;
//                    }
//     }
//    let array = t.split("");

//    array.forEach(letter => {
//        if (s.includes(letter) === false) {
//            return false;
//        } else {
//            return true;
//        }
//     })
//    return array;






    // let length = s.length;
    // let i = 0;
    // let j = 0;

    // while (i < s.length) {
    //     if (t[j] === s[i]) {
    //         length--;
    //         i++;
    //         j++;
    //     } else if (s[i] !== t[j]) {
    //         j++;
    //     }
    // }

    // if (length === 0) {
    //     return true;
    // } else {

    //     return false;
    // }


    // for (let i = 0; i < s.length; i++) {
    //     for (let j = 0; j < t.length; j++) {
    //         if (s[i] === t[j]) {
    //             length--;
    //         }
    //     }
    // }
};

console.log(
    isAnagram("anagram","nagaram"),//true
    isAnagram("rat","car"),//false

)