/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    let hashMap = s.split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})
    let values = Object.entries(hashMap).sort((a,b) => b[1] - a[1])
    let result = "";

    values.forEach(el => {
        result += el[0].repeat(el[1])
    })
    return result
};
console.log(
    frequencySort("Aabb"),//"bbAa"
    frequencySort("tree"),//""
)