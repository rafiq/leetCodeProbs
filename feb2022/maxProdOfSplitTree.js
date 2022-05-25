const mod = Math.pow(10,9) +7;
var maxProduct = function(root) {


    function dfs(node){
        if(!node)return 0;

        let left = dfs(node.left)
        let right = dfs(node.right)

        return (node.val + left + right) % mod
    }

    let total =  dfs(root);

    let max = -Infinity;

    function maxP(node){
        if(!node) return 0;
        let left = maxP(node.left);
        let right = maxP(node.right)
         max = Math.max(max, left * (total- left))
         max = Math.max(max, right * (total - right))
        return (node.val + left + right) % mod
    }

    maxP(root)

    return max% mod

};
