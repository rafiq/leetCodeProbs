/**
 * @param {string} s
 * @return {number}
 */
 var countBinarySubstrings = function(s) {
    let subStrArray = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            subStrArray.push(s.slice(i,j));
        }
    }
    let equalItemsArray = subStrArray.filter(el => {
        let half = Math.floor(el.length / 2)
        if (el.slice(0,half).match(/[1]/g) && el.slice(half).match(/[1]/g)) return false;
        return el.match(/[1]/g) && el.match(/[0]/g) ? el.match(/[1]/g).length === el.match(/[0]/g).length : false;
    });
    return equalItemsArray.filter(el => {
        let p1 = 0;
        let p2 = el.length - 1;
        let half = Math.floor(el.length / 2);
        while (p1 < p2) {
            if (el[p1] === el[p2] || el.slice(0,half) === el.slice(half)) return false;
            if (el.slice(0,half).match(/[1]/g) && el.slice(half).match(/[1]/g)) return el.slice(0,half).match(/[1]/g).length === el.slice(half).match(/[1]/g).length;

            p1++;
            p2--;
        }
        return true;
    }).length;

    // return equalItemsArray[1].slice(Math.floor(equalItemsArray[1].length / 2))
    // let curr = 1, prev = 0, ans = 0
    // for (let i = 1; i < s.length; i++)
    //     if (s[i] === s[i-1]) curr++
    //     else ans += Math.min(curr, prev), prev = curr, curr = 1
    // return ans + Math.min(curr, prev)
};
console.log(
    // countBinarySubstrings("00110011"),//6
    // countBinarySubstrings("10101"),//4
    countBinarySubstrings(
        "100111001"),//6
)