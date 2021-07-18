/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let mapping = {
        I :1,
V   :  5,
X    :  10,
L  :  50,
C     :100,
D  :   500,
M  : 1000,
    }
    let result = 0;
    let copy = s.slice().split("");
    let specialCases = {
        IV:4,IX:9,XL:40,XC:90,CD:400,CM:900
    }
    let keys = Object.keys(specialCases)

    for (let i = 0; i < keys.length; i++) {
        if (copy.join("").includes(keys[i])) {
            result += specialCases[keys[i]];
            copy = copy.join("").replace(keys[i],"").split("");
        }
    }
    while (copy.length > 0) {
        result += mapping[copy.shift()]
    }
    return result
};
console.log(
    romanToInt("III"),//3
    romanToInt("IX"),//9
    romanToInt("LVIII"),//58
    romanToInt("MCMXCIV"),//1994
)
// var romanToInt = function(s) {
//     let map = new Map();
//     map.set("M", 1000)
//     .set("D", 500)
//     .set("C", 100)
//     .set("L", 50)
//     .set("X", 10)
//     .set("V", 5)
//     .set("I",1);
//     let total = map.get(s.charAt(s.length-1));
//     for(let i = s.length - 2; i>= 0; i--){
//         if(map.get(s.charAt (i) ) >= map.get(s.charAt(i+ 1))) {
//             total +=  map.get(s.charAt(i));
//              } else {
//                  total -= map.get(s.charAt(i))
//              }}
//     return total;
// };