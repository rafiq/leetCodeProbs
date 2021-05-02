/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
    let array = new Array(encoded.length).fill(0);
    array[0] = first;

    for (let i = 0; i < encoded.length; i++) {
        array[i + 1] = encoded[i] ^ array[i]
    }

    return array;
};
console.log(
    decode([1,2,3],1)
)