/**
 * @param {string} s
 * @return {number}
 * Algorithm

LOOP: Enter recursion with the given string i.e. start with index 0.

BASE CASE: For the terminating case of the recursion we check for the end of the string. If we have reached the end of the string we return 1.

TAKE DIFFERENT PATHS: Every time we enter recursion it's for a substring of the original string. For any recursion if the first character is 0 then terminate that path by returning 0. Thus this path won't contribute to the number of ways.

CACHE THE ANSWERS: Memoization helps to reduce the complexity which would otherwise be exponential. We check the dictionary memo to see if the result for the given substring already exists.

CHECK IF CHOICE IS IN CACHE: If the result is already in memo we return the result. Otherwise the number of ways for the given string is determined by making a recursive call to the function with index + 1 for next substring string and index + 2 after checking for valid 2-digit decode. The result is also stored in memo with key as current index, for saving for future overlapping subproblems.
THE BELOW LEETCODE ANSWER WAS THE MOST CONCISE AND EASIEST TO UNDERSTAND OUT OF THE BUNCH

def recursiveWithMemo(self, index, s) -> int:
        # If you reach the end of the string
BASE    # Return 1 for success.
        if index == len(s):
            return 1

CONDITION  # If the string starts with a zero, it can't be decoded
        if s[index] == '0':
            return 0

BASE        if index == len(s)-1:
            return 1

        answer = self.recursiveWithMemo(index + 1, s)
        if int(s[index : index + 2]) <= 26:
            answer += self.recursiveWithMemo(index + 2, s)

        return answer

    def numDecodings(self, s: str) -> int:
        return self.recursiveWithMemo(0, s)

 */
 var numDecodings = function(s) {
    // let result = 0;
    // const isValid = (str) => {
    //     if (str[0] == "0") return false;
    //     return true;
    // }
    // if (!isValid(s)) return result;

    // for (let i = s.length - 2; i >= 0; i -= 1) {
    //     // if (isValid(s.slice(i,i + 2)))
    //     console.log(s.substring(i,i + 2));
    // }
    // return false;
    if(s.length==0  || s[0]=='0') return 0

    if(s.length==1) return 1

    var d = [1]

    for(var i=1 ; i < s.length; i ++){
        d[i] = s[i] == '0' ? 0 : d[i-1]
        let sub = s.substring(i-1, i+1)
        if(sub >= "10" && sub <= "26")
            d[i] += (i > 1 ? d[i-2] : 1)
    }
    return d[s.length-1]
};
console.log(
    numDecodings("011106"),//0
    numDecodings("211106"),//2
);

/**
 *  if (s.replace(/[0-9]/g, "") !== "") {
        return 0;
    }
    if (s === "") {
        return 0;
    }
    let set = new Set(), memo = new Map();
    for (let i = 1; i <= 26; i++) {
        set.add(i.toString());
    }
    return decode(s, set, memo);
    // T.C: O(N), memoization helps pruning the recursion tree
    // S.C: O(N), memo hash table can contain at most N entries
};

const decode = (s, set, memo) => {
    if (s.length === 0) {
        return 1;
    }
    if (s.length === 1) {
        return set.has(s) ? 1 : 0;
    }
    if (memo.has(s)) {
        return memo.get(s);
    }
    let numOfWays = 0;
    if (set.has(s.substring(0,1))) {
        numOfWays += decode(s.substring(1), set, memo);
    }
    if (set.has(s.substring(0,2))) {
        numOfWays += decode(s.substring(2), set, memo);
    }
    memo.set(s, numOfWays);
    return numOfWays;
}
 */