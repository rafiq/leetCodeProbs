/**
 * @param {string} s
 * @return {string}
 */
 var modifyString = function(s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "?") {
            if (i > 0 && r[i - 1] == "a") {
                let preva =
            }
        } else {
            result += s[i];
        }
    }
    return result;
    // return s.split("").reduce((acc,curr,idx,arr) => {
    //     if (curr === "?") {
    //         let temp = "abcdefghijklmnopqrstuvwxyz";
    //         temp = temp.replace(arr[idx - 1], "");
    //         temp = temp.replace(arr[idx + 1], "");
    //         if (temp[Math.floor(Math.random() * temp.length)] !== arr[idx - 1] && temp[Math.floor(Math.random() * temp.length)] !== arr[idx + 1]) {
    //             acc += temp[Math.floor(Math.random() * temp.length)]
    //         } else {
    //             acc += temp[Math.floor(Math.random() * temp.length)]
    //         }
    //         acc += temp[Math.floor(Math.random() * temp.length)];
    //     } else {
    //         acc += curr;
    //     }
    //     return acc;
    // },"")
};
console.log(
    // modifyString("?zs"),// "azs"),
    // modifyString("j?qg??b"),//"jaqgacb"
    // modifyString("??yw?ipkj?"),//"acywaipkja"
    // modifyString("?ob?b???"),//"aobabaca"
    modifyString("h???"),//"haca"
)