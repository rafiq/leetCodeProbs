 /**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let word2Indicies = null;
    let word1Indicies = null;
    let dist = Infinity;

    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word2) word2Indicies = i;
        if (wordsDict[i] === word1) word1Indicies = i;
        if (word1Indicies !== null && word2Indicies !== null) dist = Math.min(dist,Math.abs(word2Indicies - word1Indicies))
    }
    return dist
};
console.log(
    shortestDistance(["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"),//3
    shortestDistance(["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"),//3
);