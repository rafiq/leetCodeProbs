/**
 * @param {string} s
 * @return {string}
 */
 var replaceDigits = function(s) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let result = ""

    for (let i = 0; i < s.length; i++) {
        if (!alpha.includes(s[i])) {
            result += alpha[+alpha.indexOf(s[i - 1]) + +s[i]]
        } else {
            result += s[i]
        }
    }
    return result;
};
console.log(
    replaceDigits("a1c1e1"),//"abcdef"
    replaceDigits("a1b2c3d4e"),//"abbdcfdhe
)
// ! fastest code used an array and then pretty much did that same as me but used more methods
var replaceDigits = function(s) {
    let charCodeArr = Array.from(s);
    for ( let i = 1; i < s.length; i += 2 ) {
        charCodeArr[i] = String.fromCharCode( s[i-1].charCodeAt(0) + parseInt( s[i] ) );
    }
    return charCodeArr.join('');
}