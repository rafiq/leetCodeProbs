/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;

    for (let item = 0; item < items.length; item++) {
            if (ruleKey === "type" && items[item][0] === ruleValue) {
                count++;
            } else if (ruleKey === "color" && items[item][1] === ruleValue) {
                count++;
            } else if (ruleKey === "name" && items[item][2] === ruleValue) {
                count++;
            }
    }
    return count;
    // return items[0][0];
};

console.log(
    countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],"color", "silver"),// Output: 1
    countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type","phone")
)