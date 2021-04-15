function vertMirror(strng) {
    return strng.split("\n").reduce((acc,curr,idx,arr) => {
        acc.push(curr.split("").reverse().join(""))

        return acc;
    },[]).join("\n");
}
function horMirror(strng) {
    return strng.split("\n").reduce((acc,_,idx,arr) => {
        acc.push(arr[(arr.length - 1) - idx])
        return acc;
    },[]).join("\n");
}
function oper(fct, s) {
    return fct(s);
}
console.log(
    oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"),// "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw");
    oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"),// "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP");
    // oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"),// "yeCt\nCSbg\nJVhv\nlVHt");
    // oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz"),// "cEYz\nLPKo\ndbrZ\nnjMK");
)