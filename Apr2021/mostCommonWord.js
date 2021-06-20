/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    //  let maxCount = -Infinity;
    //  let maxWord = "";

    //  let regex = new RegExp(banned,"g")
    //  let strArray = paragraph.toLowerCase().replace(/[^a-z ]/g,"")//.split(" ");
    // strArray = strArray.replace(regex,"").split(" ").filter(el => el)

    //  strArray.forEach(el => {
    //     regex = new RegExp("\\b" + el + "\\b","g");
    //     if (maxCount < strArray.match(regex).length) {
    //         maxCount = strArray.match(regex).length;
    //         maxWord = el;
    //     }
    // })

    // return  maxWord
    // return strArray
    const bannedSet = new Set(banned);
    // Split on each alphanumeric word
    const words = paragraph.toLowerCase().split(/\W+/);
    const map = {};
    for (const w of words) {
      // Count occurrence of each word in words
      if (!bannedSet.has(w)) {
        if (map[w] == null) map[w] = 0;
        map[w]++;
      }
    }

    let res = '';
    let max = -Infinity;
    for (const w in map) {
      const count = map[w];
      if (count > max) {
        res = w;
        max = count;
      }
    }
    return res;
};
console.log(
    mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]),//ball;
)