/**
 * @param {number[][]} logs
 * @return {number}
 */
 var maximumPopulation = function(logs) {
    let results = {};
    for (let i = 0; i < logs.length; i++)
    //  ! I would have just added each birth year to the hash without question, because if there is one birth year, then there is at least one in that population.
      if (!results[logs[i][0]])
    //   ! I would have made the j = i + 1 because we don't need to look back over previous sets because this is sorted(assumption).
        for (let j = 0; j < logs.length; j++)
          if (logs[i][0] >= logs[j][0] && logs[i][0] < logs[j][1])
            results[logs[i][0]] = (results[logs[i][0]] ? results[logs[i][0]] : 0) + 1;

    return Object.keys(results).sort((a, b) => results[b] - results[a])[0];

    // ! I did not get the solution below, but I did do the same pseudo code as the one above which is why I picked this answer.
    // let population = 1;

    // for (let i = 0; i < logs.length - 1; i++) {
    //     let diff = logs[i][1] - logs[i + 1][0];
    //     if (diff > 0) population++;
    // }
    // return population;
};
console.log(
    maximumPopulation([[1993,1999],[2000,2010]]),//1993
    maximumPopulation([[1950,1961],[1960,1971],[1970,1981]]),//1960
)