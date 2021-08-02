/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
 var countCharacters = function(words, chars) {
    let count = 0;
    let mapping = chars.split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})
    words.forEach(word => {
        if (createCharMap(word,mapping)) count += word.length
        console.log(word,count,createCharMap(word,mapping))
    })

    return count;
};
function createCharMap(word,target) {
    let mapping = word.split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})
    for (let i = 0; i < word.length; i++) {
        // console.log(word[i],mapping[word[i]],target[word[i]])
        if (mapping[word[i]] > target[word[i]]) return false;
    }
    return true;
}
console.log(
    countCharacters(["cat","bt","hat","tree"], "atach"),//6
    countCharacters(["hello","world","leetcode"],  "welldonehoneyr"),//10
)

// ! I am upset my code did not work above. I am sure it is working, but I am not sure why it is not working
var countCharacters = function(words, chars) {
    let res = 0;
    for (let word of words) {
        if (word.length > chars.length) continue;
        if (isGoodString(word, chars)) res += word.length;
    }
    return res;
};

var isGoodString = function(word, chars) {
    let arr = chars.split("");
    for (let char of word) {
        let idx = arr.indexOf(char);
        if (idx === -1) return false;
        else arr[idx] = "";
    }
    return true;
}