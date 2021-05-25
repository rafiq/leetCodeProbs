/**
 * @param {string} s
 * @return {string}
 */
 var modifyString = function(s) {
    let possibleLetters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "?") {
            if (s[i - 1] >= "a" && s[i - 1] <= "z") {
                possibleLetters = possibleLetters.replace(s[i - 1],"");
            }
            if (s[i + 1] >= "a" && s[i + 1] <= "z") {
                possibleLetters = possibleLetters.replace(s[i + 1],"");
            }
            s = s.replace(s[i],possibleLetters[0]);
        }
        possibleLetters = "abcdefghijklmnopqrstuvwxyz";
    }
    return s;
}
;
console.log(
    modifyString("?zs"),//"azs"
    modifyString("ubv?w"),//"azs"
    modifyString("j?qg??b"),//"azs"
    modifyString("??yw?ipkj?"),//"azs"
)