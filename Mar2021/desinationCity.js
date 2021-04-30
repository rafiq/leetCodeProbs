/**
 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {
    let departureArray = [];
    let destinationsArray = []

    paths.forEach(el => {
        departureArray.push(el[0]);
        destinationsArray.push(el[1]);
    })

    return destinationsArray.reduce((acc,curr) => {
        if (!departureArray.includes(curr)) acc = curr;
        return acc;
    })

    // return `${departureArray} to ${destinationsArray}`
    // My attempt below was a good effort, but it took me about twenty five minutes and it still did not cover all the test cases. The problem was in my logic where I was creating these long arrays of different
    // let result = [paths[0]];
    // if (paths.length < 2) return paths[0][1];

    // for (let i = 0; i < result.length; i++) {
    //     for (let j = i + 1; j < paths.length; j++) {
    //         if (result[i][1] === paths[j][0]) result.push(paths[j]);
    //         if (result[i][0] === paths[j][1]) result.unshift(paths[j])
    //         console.log(result)
    //     }
    // }
    // console.log(result)
    // return  result[result.length - 1][1]
};
console.log(
    destCity([["B","C"],["D","B"],["C","A"]]),//"A";
    // destCity([["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]]),//"wxAscRuzOl"
    // destCity([["A","Z"]]),//"Z";
    destCity([["qMTSlfgZlC","ePvzZaqLXj"],["xKhZXfuBeC","TtnllZpKKg"],["ePvzZaqLXj","sxrvXFcqgG"],["sxrvXFcqgG","xKhZXfuBeC"],["TtnllZpKKg","OAxMijOZgW"]]),//
    // "OAxMijOZgW"
    // destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]),//"A";
)