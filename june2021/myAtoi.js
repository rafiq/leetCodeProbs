/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    // let isPosititve = true;
    // let isWhiteSpace = false;
    // let result = 0;

    // for (let i = 0; i < s.length; i++) {
    //     if (s[0] === " ") {
    //         isWhiteSpace = true;
    //         while (s[i] === " ") {
    //             continue;
    //         }
    //     }
    //     else if (s[i] === "+" || s[i] === "-") {
    //         isPosititve =  s[i] === "+" ? true : false;
    //     }
    //     else if (s[i].match(/[^0-9]/i)) {
    //         return 0
    //     }
    //     else if (s[i].match(/[0-9]/i)) {

    //     }
    //     }
    // }

    // return s
    s = s.trim();
    let res = 1;
    if(s[0]==="-"){
        res = -1;
        s = s.replace("-","");
    }else if(s[0]==="+"){
        res = 1;
        s = s.replace("+","");
    }
    if(!/[0-9]/.test(s[0])) return 0;
    let arr = [];
    let regex = new RegExp(/[0-9]/);
    for(let char of s){
        if(regex.test(char)){
            arr.push(char);
        }else{
            break;
        }
    }
    let str = arr.join("");
    if(!str) return 0;
    let num = parseInt(str) * res;
    if(num>Math.pow(2,31)-1){
        num = Math.pow(2,31)-1;
    }else if(num<-1*Math.pow(2,31)){
        num = -1*Math.pow(2,31);
    }
    return num;
};
console.log(
    myAtoi("   -42"),//-42
    myAtoi("4193 with words")//4193
)