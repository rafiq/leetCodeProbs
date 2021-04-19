/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    // let sIndexArray = s.split("").map(el => el.charCodeAt())
    // let max = Math.max(...sIndexArray);
    // let min = Math.min(...sIndexArray);
    // let result = [];
    // let increment = 1;

    // while(sIndexArray.length) {
    //     while (min <= max) {
    //         sIndexArray.includes(min) ? result.push(sIndexArray.splice(sIndexArray.indexOf(min))) : min + increment;
    //     }
    //     increment === 1 ? increment = -1 : increment = 1;
    // }
    // return result//.flat().reduce((acc,curr) => {
    //     acc += String.fromCharCode(curr)
    //     return acc
    // },"")
    let arr = new Array(26).fill(0); //arr[charcode diff] = freq
    let res = "";
    // //store freq
    for (let i = 0; i < s.length; i++) {
        // Here we are creating the alphabet array by iterating over the original string and putting each letter into the corresponding index of an alphabet array.
        arr[s.charCodeAt(i) - 97] += 1;
    }
    // While the new string is not as long as the original string.
    while (res.length < s.length) {
        // Loop through all the letters of the alphabet.
        for (let i = 0; i < 26; i++) {
            // BY USING THE FOR LOOP AND CYCLING THROUGH THE ALPHABET ARRAY WE ARE SURE THAT WE WILL GO UP AND NOT DECREASE AND NOT REPEAT ANY LETTERS.
            // If the letter in the alphabet arr has a number, then at that letter to the resulting string by changing the letter to its ascii value by adding 97 to it.
            if (arr[i] != 0) {
                res += (String.fromCharCode(i + 97));
                // Here we are decrementing the alphabet array letter count because it has been used.
                arr[i]--;
            }
        }
        // ?NOW THAT WE WENT UP THROUGH THE ARRAY ALPHABET WE CAN NOW GO BACK DOWN, and do the same
        for (let i = 25; i >= 0; i--) {
            if (arr[i] != 0) {
                res += (String.fromCharCode(i + 97));
                arr[i]--;
            }
        }
    }
    return res;
};
console.log(
    sortString( "aaaabbbbcccc"),//"abccbaabccba");
    // sortString( "abccbaabccba"),//"abccbaabccba");
    // sortString( "rat"),//"art");
    // sortString( "leetcode"),//"cdelotee");
    // sortString( "ggggggg"),//"ggggggg");
)