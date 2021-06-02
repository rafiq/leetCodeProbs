
/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {

    let letter = coordinates.slice(0,1);

    let number = coordinates.slice(1);

    if ("aceg".includes(letter) && +number % 2 === 1) {
        return false;
    } else if ("bdfh".includes(letter) && +number % 2 === 0) {
        return false;
    } else return true;
};
console.log(
    squareIsWhite("a1"),//false;
    squareIsWhite("h3"),//true;
    squareIsWhite("c7"),//false
)