/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    // const ROMANS = {
    //     1:"I",
    //     2:"II",
    //     3:"III",
    //     4:"IV",
    //     5:"V",
    //     6:"VI",
    //     7:"VII",
    //     8:"VIII",
    //     9:"IX",
    //     10:"X",
    //     50:"L",
    //     100:"C",
    //     500:"D",
    //     1000:"M"
    // }
    // let result = [];

    // while (num > 0) {
    //     let units = num > 9 ? num / 10 : num;
    //     num = num - num % 10;
    //     num = num / 10;
    //     result.unshift(ROMANS[units]);
    // }

    // return result
    let dic = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    }
    let res = "";
    let int = 0;
    let idx = 0;
    let keyArr = Array.from(Object.keys(dic)).sort((a,b)=>b-a);
        while(idx<keyArr.length && num>0){
            let key = keyArr[idx];
            int = Math.floor(num/key);
            num = num%key;
            idx++;
            if(int>0){
                res += dic[key].repeat(int);
                continue;
            }
        }
    return res;
};
console.log(
    // intToRoman(3),//III
    // intToRoman(1994),//III
    intToRoman(233)
);