/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
    // restoreIP = (str, res = []) => {
    //     if (str.length == 0 && res.length == 4) return console.log(res)
    //     for (let i = 1; i <= Math.min(3, str.length); i++)
    //       if (parseInt(str.slice(0, i)) < 256)
    //         restoreIP(str.slice(i), res.concat(str.slice(0,i)))
    //   }

    const inRange = str => {
        return +str <= 255;
    }
    const hasCorrectZeros = str => {
        if (str.length > 1 && str[0] == "0") return false;

        return  true;
    }
    let count = 0;

    for (let i = 1; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            for (let k = j + 1; k < s.length; k++) {
                for (let y = k + 1; y < s.length ; y++) {
                    let temp = s.slice(0,i) + "." + s.slice(i,j) + "." + s.slice(j,k) + "." + s.slice(k,y) + "." + s.slice(y);
                    if (temp.split(".").every(el => hasCorrectZeros(el) && inRange(el))) {
                        count++
                        console.log(temp);
                    }


                }
            }
        }
    }

    return count
};
console.log(
    restoreIpAddresses("101023"),//
);