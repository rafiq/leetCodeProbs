/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    let result = []
    let array1 = s1.split(" ")
    let array2 = s2.split(" ")

    const isOneTime = (word,arr) => {
        let count = 0

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === word) count++
        }
        return count < 2
    }

    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) === -1 && isOneTime(array1[i], array1)) {
            if (array1[i]) result.push(array1[i])
        }
    }

    for (let i = 0; i < array2.length; i++) {
        if (array1.indexOf(array2[i]) === -1 && isOneTime(array2[i],array2)  ) {
            if (array2[i]) result.push(array2[i])
        }
    }

    return result
};
console.log(
    // uncommonFromSentences("this apple is sweet", "this apple is sour"),
    // uncommonFromSentences("apple apple", "banana"),
    uncommonFromSentences(
        "abcd def abcd xyz" , "ijk def ijk"),//xyz
)