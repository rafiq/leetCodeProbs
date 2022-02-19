/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    // let result = [""]
    // let cache = new Set();

    // for (let word of strs) {
    //     let temp = {};
    //     for (let i = 0; i < word.length; i++) {
    //         temp[word[i]] ? temp[word[i]]++ : temp[word[i]] = 1;
    //     }
    //     cache.add(temp);
    //     temp = {};
    // }

    // for (let obj of cache) {

    // }
    // return cache;
    // for (let i = result.length - 1; i >= 0; i--) {

    // }

    // return result;

    // const isAnagram = word => {
    //     let temp = {};

    //     for (let i = 0; i < word.length; i++) {
    //         temp[word[i]] ? temp[word[i]]++ : temp[word[i]] = 1;
    //     }

    //     for (let el of temp) {
    //         if (!cache.has(el)) {
    //             return false
    //         }
    //     }

    //     return true
    // }
};
console.log(
    groupAnagrams(["eat","tea","tan","ate","nat","bat"])
);