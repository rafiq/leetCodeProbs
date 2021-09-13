/**
 * @param {number} n
 * @return {number}
 */
 var numberOfMatches = function(n,) {
    // let teams = n;
    // if (teams === 1 ) return matches

    // if (teams % 2 === 0) {
    //     matches += Math.floor(teams / 2)
    //     teams = Math.floor(teams / 2)
    //     return numberOfMatches(teams, matches)
    // } else {
    //     matches += Math.floor((teams - 1) / 2);
    //     teams = (teams / 2) + 1
    //     return numberOfMatches(teams,matches)
    // }
    let matches = 0;
    while (n > 1)
        {
            matches += Math.floor(n/2)
            n = Math.round(n/2)
        }
    return matches
};
console.log(
    numberOfMatches(7),//6
    numberOfMatches(14),//13
)