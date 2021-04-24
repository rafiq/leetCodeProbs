/**
 * @param {string} S
 * @return {string}
 */
 var reverseOnlyLetters = function(S) {
     let SArray = S.split("");
    let p1 = 0;
    let p2 = S.length - 1;
    let temp = "";
    while (p1 < p2) {

        if (!isNonLetter(SArray[p1]) && !isNonLetter(SArray[p2])) {
            temp = SArray[p1];
            SArray[p1] = SArray[p2];
            SArray[p2] = temp;
            p1++;
            p2--;
        }
        if (isNonLetter(SArray[p1])) {
            p1++;
        }
        if (isNonLetter(SArray[p2])) {
            p2--;
        }
    }

    return SArray.join("")
};
function isNonLetter(char) {
    return char.replace(/[a-z]/gi,"") ? true : false;
}
console.log(
    reverseOnlyLetters("ab-cd"),//  "dc-ba"
    reverseOnlyLetters("a-bC-dEf-ghIj"),// "j-Ih-gfE-dCba"
    reverseOnlyLetters("Test1ng-Leet=code-Q!"),//"Qedo1ct-eeLg=ntse-T!"
    )
    //  var reverseOnlyLetters = function(S) {
    //     let cleanReversedStr =  S.replace(/[^a-z]/gi,"").split("").reverse()

    //     for (let i = 0; i < S.length; i++) {
    //         if (isNonLetter(S[i])) cleanReversedStr.splice(i,0,S[i])
    //     }
    //     return cleanReversedStr.join("")
    // };
    // function isNonLetter(char) {
    //     return char.replace(/[a-z]/gi,"") ? true : false;
    // }

    // Even though I was able to refactor mine for some faster code HIYAA, I like the below solution. I wouldn't have thougth that you could use the pop() method here as he did. I didn't think that it would iterate over the string one letter at a time as it is doing. I guess because it used a callback function as an argument the underlying system does it automatically. VERY GENIUS!!!
    // var reverseOnlyLetters = function(s) {
    //     const A = s.match(/[a-z]/gi);
    //     return s.replace(/[a-z]/gi, () => A.pop());
    // };