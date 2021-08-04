/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
 var slowestKey = function(releaseTimes, keysPressed) {
    let max = 0;
    let maxletter = "a";

    let letterMap = keysPressed.split("").reduce((acc,curr,idx) => {
        acc[curr]  ?
        (acc[curr] < releaseTimes[idx] - (releaseTimes[idx - 1] || 0) ?  acc[curr] = releaseTimes[idx] - (releaseTimes[idx - 1] || 0): acc )
        : acc[curr] = releaseTimes[idx] - (releaseTimes[idx - 1] || 0);
        // console.log(releaseTimes[idx],curr, releaseTimes[idx] - (releaseTimes[idx - 1] || 0))
        return acc;
    },{})
    for (let letter of keysPressed) {
        if (letterMap[letter] >= max && letter.charCodeAt() >= maxletter.charCodeAt()) {
            max = letterMap[letter];
            maxletter = letter;
            // console.log(max,maxletter)
        }
    }
    return maxletter;
};
console.log(
    slowestKey([9,29,49,50],"cbcd"),//"c"
    slowestKey([12,23,36,46,62], "spuda"),//"a"
    slowestKey([1,2,3]
        ,"aba"),//"b"
)
let slowestKey = (A, keys, best = 0, ans = '0') => {
    keys.split('').forEach((key, i) => {
        let time = 0 < i ? A[i] - A[i - 1] : A[i];
        if (best < time || (best == time && ans.localeCompare(key) < 0))
            best = time,
            ans = key;
    });
    return ans;
};