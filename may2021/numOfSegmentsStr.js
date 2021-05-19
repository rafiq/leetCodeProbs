/**
 * @param {string} s
 * @return {number}
 */
 var countSegments = function(s) {

    return s.match(/[^ ]+/g) ? s.match(/[^ ]+/g).length : 0;
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === " ") count++
    // }
    // return count;
    // return s.split(" ").reduce((acc,curr) => {
    //     if (curr !== "") acc += 1;
    //     return acc
    // },0);
};
console.log(
    countSegments("Hello, my name is John"),// 5
    countSegments("love live! mu'sic forever"),// 4
    countSegments(""),// 4
    countSegments("                "),// 0
    countSegments("Of all the gin joints in all the towns in all the world,   "),// 13
)

//
var countSegments = function(s) {
    let segments =0;
    for (let i=0; i<s.length; i++){
        if ((i===0||s[i-1]===" ") && s[i]!==" ") segments++;
    }
    return segments;
};