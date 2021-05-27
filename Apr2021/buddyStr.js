/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
 var buddyStrings = function(a, b) {
    if (a.split("").sort().join("") !== b.split("").sort().join("")) return false;
    let indexes = [];
    if (a == b) {
        let set = new Set(a);
        return set.size !== a.length;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            indexes.push(i)
        }
    }
    return indexes.length === 2
}
function isSwapped(str,arr) {
    let strArray = str.split("");
    [strArray[arr[0]],strArray[arr[1]]] = [strArray[arr[1]],strArray[arr[0]]]

    return strArray
}

console.log(
    buddyStrings("ab", "ba"),//true;
    buddyStrings("aa","aa"),//true;
    buddyStrings("aaaaaaabc", "aaaaaaacb"),//true;
    buddyStrings("ab", "ab"),//false
)