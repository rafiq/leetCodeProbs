/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var rotateString = function(s, goal) {

    let count = goal.length;

    for (let i = 0; i < count; i++) {
        if (s === goal) return true

        s = s.slice(1) + s.slice(0,1)
    }

    return false
};
console.log(
    rotateString("abcde", "cdeab"),
    rotateString("abcde", "abced"),
)