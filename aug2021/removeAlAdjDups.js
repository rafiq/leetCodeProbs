/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    let copy = s.split("");
    const isDups = str => {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i + 1]) return true;
        }
        return false
    }

    while (isDups(copy)) {
        for (let i = 0; i < copy.length; i++) {
            if (copy[i] === copy[i + 1]) {
                console.log(copy)
                copy = copy.slice(0,i).concat(copy.slice(i + 2))
                break
            }
        }
    }

    return copy.join("")
};
console.log(
    removeDuplicates("abbaca"),//ca
    removeDuplicates("azxxzy"),//ca
)

var removeDuplicates = function(S) {
    let newS = removeDublicateHelper(S);
    if(newS === S) return newS;

    return removeDuplicates(newS);
};

function removeDublicateHelper(s) {
    let newS = '';

    for(let i=0; i<s.length;) {
        if(s[i] === s[i+1])
            i += 2;
        else {
            newS += s[i];
            i++;
        }
    }

    return newS;
}