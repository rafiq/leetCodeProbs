/**
 * @param {string} s
 * @return {number}
 */
 var minCut = function(s) {

};
console.log(
    minCut()
);
const isPalindrome = (s, i, j) => {
    while(i<j) {
        if (s[i++] !== s[j--]) {
            return false;
        }
    }
    return true;
}
var minCut = function(s) {
    const dp = new Array(s.length);
    const dfs = i => {
        if (i >= s.length) {
            return 0;
        }
        if (!isNaN(dp[i])) {
            return dp[i];
        }
        let min = Infinity;
        for(let j=i;j<s.length;j++) {
            if (isPalindrome(s, i, j)) {
                min = Math.min(min, 1 + dfs(j+1));
            }
        }
        dp[i] = min;

        return min;
    }

    return dfs(0)-1;
};
Tabuler O(n^3) t.c. & O(n) s.c
const isPalindrome = (s, i, j) => {
    while(i<j) {
        if (s[i++] !== s[j--]) {
            return false;
        }
    }
    return true;
}
var minCut = function(s) {
    const N = s.length;
    const t = new Array(N+1);
    t[N] = 0;
	//calculate min substring plaindrome of substrings of length 1 to N
    for(let i=N-1;i >=0;i--) {
        let min = Infinity;
        for(let j=i;j<N; j++) {
            if (isPalindrome(s, i, j)) {
                min = Math.min(min, 1+t[j+1]);
            }
        }
        t[i] = min;
    }

    return t[0]-1;
}
Tabular : O(n^2) t.c. & O(n^2)

var minCut = function(s) {
    const N = s.length;
    const p = Array.from(Array(N), () => Array(N));
	/*
	* Caching all possible substring if they are palindrome
	*/
    for(let k=0;k<N;k++) {
        for(let i=0,j=k;j<N;j++,i++) {
			/*
			* if gap between first and last index of subtring is grater then 1
			* then we can just compare if first and last charcater are same
			*   and rest of substring is palindrome.  p[i+1][j-1]
			*/
            const  mid = j-i > 1 ? p[i+1][j-1] : true;
            p[i][j] = s[i]==s[j] &&  mid;
        }
    }

    const t = new Array(N+1);
    t[N] = 0;
    for(let i=N-1;i >=0;i--) {
        let min = Infinity;
        for(let j=i;j<N; j++) {
            if (p[i][j]) {
                min = Math.min(min, 1+t[j+1]);
            }
        }
        t[i] = min;
    }

    return t[0]-1;
}
var minCut = function(s) {

    let memo = new Array(s.length).fill(-1);

    function min(i){
        if(i >= s.length)
            return 0;

        if(memo[i] > -1)
            return memo[i];

        let temp = 100000;
        for(let j = i; j < s.length; j++){
            if(isPal(i,j)){
                temp = Math.min(temp,1+min(j+1));
            }
        }

        memo[i] = temp;

        return memo[i];
    }

    function isPal(start,end){
        while(start < end){
            if(s[start] !== s[end])
                return false;

            start++;
            end--;
        }
        return true;
    };

    return min(0)-1;
};

