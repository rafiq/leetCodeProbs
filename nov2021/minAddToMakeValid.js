/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
    let [bal, ans] = [0, 0];
    for(let i in s) {
        if(s[i] === '(') {
            bal++;
        } else {
            bal--;
        }
        if(bal === -1) {
            ans++;
            bal++;
        }
    }
    return bal+ans;
};
console.log(
    minAddToMakeValid()
);