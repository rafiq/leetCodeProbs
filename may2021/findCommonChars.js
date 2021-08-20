/**
 * @param {string[]} A
 * @return {string[]}
 */
 var commonChars = function(A) {
    // let mapping = A[0].split("").reduce((acc,curr) => {
    //     acc[curr] ? acc[curr]++ : acc[curr] = 1;
    //     return acc;
    // },{})
    // // return Object.values(mapping)
    // let firstWord = A[0].split("");
    // for (let i = 1; i < A.length; i++) {
    //     for (let j = 0; j < A[i].length; j++) {
    //         firstWord.filter(char => {

    //         })


    //     }
    // }

    // return firstWord;

    // for (let i = 0; i < A.length; i++) {

    //     firstWord = filterLetters(A[i], firstWord)
    // }
    // return firstWord
    let common = A[0].split('').filter(char => {
        for (var i = 1; i < A.length; i++) {
            if (!A[i].includes(char)) return false;
            else {
                A[i] = A[i].replace(char, '')
            }
        }
        return true;
    })
	return common
};
function filterLetters(word, char) {
    for (let i = 0; i < char.length; i++) {
        word.includes(char[i])
    }
    return word.includes(char)
}
console.log(

    commonChars(["bella","label","roller"])
)