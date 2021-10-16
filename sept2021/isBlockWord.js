
function isBlockWord(str) {
    let hash =
        ["BO",
        "XK",
        "DQ",
        "CP",
        "NA",
        "GT",
        "RE",
        "FS",
        "JW",
        "HU",
        "VI",
        "LY",
        "ZM"]
    let seen = {};
    str = str.toUpperCase();

    // return isPresent(hash,"b")
    for (let i = 0; i < str.length; i++) {
        if (isPresent(hash,str[i])) {
            console.log(hash)
            hash = hash.filter(el => {
                return !el.includes(str[i])
            })
        } else {
            return false
        }
    }
    return true;

}
function isPresent(array,target) {
    return array.some(el => {
        return el.includes(target)
    })
}
console.log(
    isBlockWord('BATCH'),      // true
isBlockWord('BUTCH'),      // false
isBlockWord('jest'),           // true
)