function maxPathSum(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    if (!root) return;

    const DFS = node => {
        if(!node) return 0;
        let left, right;

        left = Math.max(0, DFS(node.left));
        right = Math.max(0, DFS(node.right));

        maxSum = Math.max(maxSum, left + right + node.val);

        return Math.max(left, right) + node.val;
    }

    DFS(root)
    return maxSum;
}

var maxPathSum = function(root) {
    let highestSum

    function dfs(node) {
        if(node === null) return 0
        if(highestSum === undefined ||node.val > highestSum) highestSum = node.val
        if(node.right === null && node.left === null) return node.val

        let rnode = dfs(node.right)
        let lnode = dfs(node.left)

        let subsum = rnode > lnode ? node.val + rnode : node.val + lnode
        if(node.val > subsum) subsum = node.val

        if(highestSum === undefined || highestSum < subsum) highestSum = subsum

        if(node.val + lnode + rnode > highestSum) highestSum = node.val + lnode + rnode

        return subsum
    }
    dfs(root)
    return highestSum
};

/*
I think the question's defintion of a valid path is quite vague.
To reduce confusion, think of a valid path as one that become a straight line if nodes are rearranged.

Solution:
On the assumption that every sum is positive,
max path sum in a tree =
root's value
+ max path sum in left subtree
+ max path sum in right subtree

The reason I made such assumption is because we will turn any negative sum into zero
since we will always neglect negative path in order to maximise path sum.

We will traverse nodes in post-order so that we can find path sum of every subtree and get the
max path sum. One important thing to note is that we have to choose either the left sum or the right sum
in order for the current subtree to become part of a path with a new root. The whole subtree can't become
part of a path with a new root because then it will be a invalid path.
*/
var maxPathSum = function(root) {
    let max = -Infinity;
    dfs(root);
    return max;
    // T.C: O(N)
    // S.C: O(H)
    function dfs(root) {
        if (!root) {
            return 0;
        }
        let leftMaxSum = Math.max(0, dfs(root.left));
        let rightMaxSum = Math.max(0, dfs(root.right));
        max = Math.max(max, root.val + leftMaxSum + rightMaxSum);
        // we choose one path sum between left subtree's sum and right subtree's sum
        // because the whole subtree can't become part of a path because then it won't be possible
        // for the path to become a straight line when nodes are rearranged
        return root.val + Math.max(leftMaxSum, rightMaxSum);
    }
};