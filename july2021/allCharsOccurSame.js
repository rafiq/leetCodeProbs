/**
 * @param {string} s
 * @return {boolean}
 */
 var areOccurrencesEqual = function(s) {


    let hash = s.split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1
        return acc
    },{})
    let array = Object.values(hash)

    return array.every(el => el === array[0])
    // return array
};
console.log(
    areOccurrencesEqual("abacbc"),//true
    areOccurrencesEqual("aaabb"),//false
)