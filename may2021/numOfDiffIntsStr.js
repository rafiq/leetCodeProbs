/**
 * @param {string} word
 * @return {number}
 */
 var numDifferentIntegers = function(word) {
    // let set = new Set();
    // let numStr = "0123456789"

    // for (let i = 0; i < word.length; i++) {
    //     if (numStr.includes(word[i])) {

    //     }
    // }

    return new Set(word.match(/\d+/g || []).map(Number)).size;
};
  console.log(
    numDifferentIntegers("a123bc34d8ef34"),//3
    numDifferentIntegers("a1b01c001"),//1
    numDifferentIntegers( "leet1234code234"),//2
  )

//   ! I was thinking of something like this
// it is a good one
var numDifferentIntegers = function(word) {
    let record = new Set();
    let curr = "";
    for(let i=0;i <= word.length;i++){
        if(!isNaN(word[i])){
            curr+=word[i]
        }else if(!isNaN(word[i-1]) && isNaN(word[i])){
            record.add(Number(curr))
            curr = ""
        }
    }
    return record.size
};
const set = new Set()
const iMatchInts = /\d+/g


word.replace(iMatchInts, function(text) {
    if (text !== '0') {
        text = text.replace(/^0+/, '')
    }

    set.add(text)
}, '')


let result = set.size
return result

// ! dfasdfasd

let chars = /[a-z]/g, remZeros = /^[0]*/g, set = new Set();
let arr = word.replace(chars, ' ').split(' ').map((val) => {
    if (val != '') {
        let newval = val.replace(remZeros, '');
        set.add(newval);
    }
});
return set.size;