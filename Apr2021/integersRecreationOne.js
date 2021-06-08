function listSquared(m, n) {

    return isSquared(81)
}
function isSquared(num) {
    return Math.pow(num,.5) % 1 === 0;
}
console.log(
    listSquared(1, 250),// [[1, 1], [42, 2500], [246, 84100]])
    listSquared(42, 250),// [[42, 2500], [246, 84100]])
    listSquared(250, 500),// [[287, 84100]])
)