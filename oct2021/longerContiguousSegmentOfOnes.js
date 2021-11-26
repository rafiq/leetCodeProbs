/**
 * @param {string} s
 * @return {boolean}
 */
 var checkZeroOnes = function(s) {
    let onesLength = 0;
    let zerosLength = 0;
    let onesCount = 0;
    let zerosCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            zerosCount = 0;
            onesCount++;
            if (onesCount > onesLength) {
                onesLength = onesCount;
            }
        }
        if (s[i] === "0") {
            onesCount = 0;
            zerosCount++;
            if (zerosCount > zerosLength){
                zerosLength = zerosCount;
            }
        }
    }

    return onesLength > zerosLength;
};
console.log(
    checkZeroOnes("110100010"),//false
    checkZeroOnes("111000"),//false
    checkZeroOnes("110100010"),//false
    checkZeroOnes("1101"),//true
)