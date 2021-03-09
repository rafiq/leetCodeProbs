/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // if (word2.length > word1.length) word1 = word1 + " ".repeat(word2.length - word1.length)
    // return word1.split("").reduce((acc,curr,idx) => {

    //         acc += curr;
    //         if (word2[idx] === undefined) acc += "";
    //         else acc += word2[idx];
    //         return acc;

    // },"")
    let a = word1.split("").filter(Boolean);

  let b = word2.split("");

  let mergedString = '';


  for(let i = 0; i < a.length || i < b.length; i++) {
   if(i < a.length)
     mergedString +=  a[i];
   if(i < b.length)
     mergedString +=  b[i];
  }
return mergedString;

};
console.log(
    // mergeAlternately("abc", "pqr"),// "apbqcr"
    mergeAlternately("ab", "pqrs"),// "apbqrs"),
    // mergeAlternately("abcd","pq"),// "apbqcd"
)

// THis answer below is really smooth
function zip(a, b) {
    var i,
        l = Math.min(a.length, b.length),
        temp = '';

    for( i = 0; i < l; i++) {
        temp += a[i] + b[i];
    }
    return temp + a.slice(i) + b.slice(i);
}
console.log(
    mergeAlternately("abc", "pqr"),// "apbqcr"
    mergeAlternately("ab", "pqrs"),// "apbqrs"),
    mergeAlternately("abcd","pq"),// "apbqcd"
)