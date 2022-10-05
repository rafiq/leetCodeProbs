/**
 * @param {number[]} arr
 * @return {number}
 */
 var minSetSize = function(arr) {
    let halfArrSize = Math.floor(arr.length / 2);

    // choose an integer and delete all occurences of it in the array

    // make a hash of arr and greedily find a number that makes half sort
    let hash = {};

    for (let el of arr) {
        hash[el] ? hash[el]++ : hash[el] = 1;
    }
    Object.keys(hash).forEach(el => {

    })
    console.log(hash,halfArrSize)

    let m = new Map();
    for (let num of arr) m.set(num, m.get(num)+1 || 1);
    let occurrences = Array.from(m.values());
    occurrences.sort((a,b) => b-a);
    let removed = 0;
    for (let i = 0; i < occurrences.length; i++) {
        removed += occurrences[i];
        if (removed >= (arr.length/2)) return i+1;
    }
    return 0;


};

minSetSize([3,3,3,3,5,5,5,2,2,7])