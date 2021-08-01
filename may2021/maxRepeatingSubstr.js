/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
 var maxRepeating = function(sequence, word) {
    let count = 0;
    let extra = word;

    while (sequence.includes(word)) {
        word = word + extra
        count++;
    }

    return count
};
console.log(
    maxRepeating("ababc", "ab"),//2
    maxRepeating("ababc", "ba"),//1
    maxRepeating("ababc", "ac"),//0
    maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba",
    "aaaba"),//5
)