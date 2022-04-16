/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
 var minimumDeleteSum = function(s1, s2) {
    let dp = Array(s1.length + 1).fill(0).map(() => Array(s2.length + 1).fill(0))

    // Here we are taking the edge substrings and seeing how many letters need to be deleted in order to make the other substring
    for(let col = 1; col <= s2.length; col++){
        dp[0][col]= dp[0][col-1]+ s2.charCodeAt(col-1);
    }
    for(let row = 1; row <= s1.length; row++){
        dp[row][0] = dp[row-1][0] + s1.charCodeAt(row-1);
    }

    for (let row = 0; row < s1.length; row++) {
        for (let col = 0; col < s2.length; col++) {

            if(s1.charAt(row - 1) == s2.charAt(col - 1)){
                dp[row][col] = dp[row - 1][col - 1]
            }else{
                dp[row][col]= Math.min(dp[row - 1][col] + s1.charCodeAt(row - 1), dp[row][col-1]+ s2.charCodeAt(col - 1))
            }
            // if (s1[row - 1] !== s2[col - 1]) {
            //     dp[row][col] = Math.min(s1[row - 1].charCodeAt(), s2[col - 1].charCodeAt())
            // } else {
            //     dp[row][col] = Math.min(dp[row - 1][col],dp[row][col - 1])
            // }
            // if(s1[row-1]==s2[col-1])
            //     dp[row][col]=dp[row-1][col-1];
            // else
            //     dp[row][col]=Math.min(dp[row-1][col]+s1.charCodeAt(row-1),dp[row][col-1]+s2.charCodeAt(col-1));


        }
    }

    return dp[s1.length + 1][s2.length + 1]
};
console.log(
    minimumDeleteSum("sea", s2 = "eat")
);

var minimumDeleteSum = function(s1, s2) {
    var m=s1.length, n=s2.length, dp=[];
    for(let i=0; i<=m; i++){
        dp[i]=new Array(n+1).fill(0);
    }
    for(let i=1; i<=n; i++){
        dp[0][i]= dp[0][i-1]+ s2.charCodeAt(i-1);
    }
    for(let i=1; i<=m; i++){
        dp[i][0]= dp[i-1][0] + s1.charCodeAt(i-1);
        for(let j=1; j<=n; j++){
            if(s1.charAt(i-1) == s2.charAt(j-1)){
                dp[i][j]=dp[i-1][j-1]
            }else{
                dp[i][j]= Math.min(dp[i-1][j]+ s1.charCodeAt(i-1), dp[i][j-1]+ s2.charCodeAt(j-1))
            }
        }
    }
    return dp[m][n];
};