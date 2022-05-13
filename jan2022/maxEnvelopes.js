/**
 * @param {number[][]} envelopes
 * @return {number}
 */
 var maxEnvelopes = function(envelopes) {
    if( envelopes.length < 2 ) {return envelopes.length;}
    if( !envelopes || !envelopes[0] ) {return 0;}

    envelopes = envelopes.sort((a,b) => {
        if (a[0] < b[0]) return -1;
        if (a[1] < b[1]) return -1;
    })
    let dp = new Array(envelopes.length).fill(1);
    let i, j, max = 1;

    for( i = 1; i < envelopes.length; i++ ) {
        for( j = 0; j < i; j++ ) {
          if( envelopes[i][1] > envelopes[j][1] && dp[i] < dp[j] + 1 ) {
            dp[i] = dp[j] + 1;
          }
        }
        max = Math.max(max, dp[i]);
    }

    return max;
};
console.log(
    maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]),
    maxEnvelopes([[2,4],[12,4],[1234,7],[1,3]])
);