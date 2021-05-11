/**
 * @param {string} s
 * @return {boolean}
 */
 var checkRecord = function(s) {

    let isAbent = s.match(/[A]/g) ? s.match(/[A]/g).length < 2 : true;

    let isLate = s.match(/LLL/) ? false : true;

    return isAbent && isLate;

    // return s.match(/LLL/)
    // let recordMapping = {
    //     A:0,
    //     L:0,
    //     P:0
    // }
    // if (s.length < 3) {
    //     return s.match(/[A]/g) ? s.match(/[A]/g).length < 2 : true;
    // }
    // for (let i = 0; i < s.length - 2; i++) {
    //     recordMapping[s[i]] ? recordMapping[s[i]]++ : recordMapping[s[i]] += 1;
    //     if (s[i] === "L" && s[i + 1] === "L" && s[i + 2] === "L") return false;
    // }
    // console.log(recordMapping)
    // return recordMapping["A"] < 2
};
console.log(
    checkRecord("PPALLP"),//true
    checkRecord("LALL"),//true
    checkRecord("AA"),//false
    checkRecord("PPALLL"),//false
)
// ! This was a smart way to count the absences and the lates by iterating through the string and reseting the lates if something other than an L char was encountered. They also kept a record of the lates and absences and returned if they were under the limit.
var checkRecord = function(s) {
    let pointer = 0
    let late = 0
    let absent = 0
    while(absent < 2 && late < 3 && pointer < s.length){
        if(s[pointer] === "A") {
            absent++
            late = 0
        } else if (s[pointer] === "L"){
            late++
        } else late = 0
        pointer++
    }
    return absent < 2 && late < 3
};