/**
 * @param {string} S
 * @return {string}
 */
 var toGoatLatin = function(S) {
    return S.split(" ").reduce((acc,curr,idx) => {
        acc.push((isVowel(curr) ? curr : curr.slice(1) + curr[0]) + "ma" + "a".repeat(idx + 1));
        // acc.push(curr + "ma" + "a".repeat(idx + 1));
        return acc;
    },[]).join(" ")
};
function isVowel(word) {
    return "aeiou".includes(word[0].toLowerCase())
}
console.log(
    // toGoatLatin("I speak Goat Latin"),//"Imaa peaksmaaa oatGmaaaa atinLmaaaaa")
    toGoatLatin("Each word consists of lowercase and uppercase letters only"),//"Eachmaa ordwmaaa onsistscmaaaa ofmaaaaa owercaselmaaaaaa andmaaaaaaa uppercasemaaaaaaaa etterslmaaaaaaaaa onlymaaaaaaaaaa"
    // toGoatLatin( "The quick brown fox jumped over the lazy dog"),//"heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
)