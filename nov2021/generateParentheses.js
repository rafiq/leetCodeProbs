/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {



    // permutations any combination of parenths (all nested, non nested, and everything in between)
    const res = [];
    const dfs = (str,left, right) => {
        if (left < 0 || right <0) {
            return;
        }
        if (!left && !right) {
            res.push(str);
            return;
        }
        dfs(str+'(', left-1, right);
        right > left ? dfs(str+')', left, right-1) : '';
    }
    dfs('',n,n);

    return res;
};
console.log(
    generateParenthesis(3),//["((()))","(()())","(())()","()(())","()()()"]
);