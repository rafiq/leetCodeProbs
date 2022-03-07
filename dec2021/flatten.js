/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    const dfs = (root) => {
        if (!root) {
            return null;
        }
        if (!root.left && !root.right) {
            return root;
        }
        let leftTail = dfs(root.left);
        let rightTail = dfs(root.right);
        // we put left subtree between root and right subtree
        if (leftTail) {
            leftTail.right = root.right;
            root.right = root.left;
            root.left = null;
        }
        // if right subtree is empty, right subtree's tail is actually left subtree's tail
        if (!rightTail) {
            rightTail = leftTail;
        }
        return rightTail;
    }

    return dfs(root)
};
console.log(
    flatten()
);

/*
We need to turn given tree into a right-most skewed tree.

At each root, if it has a left child, we do the following operation:
left subtree's right-most node = root's right subtree
right subtree = left leftsubtree
left subtree = null

Then, we traverse right because left node will be null at this point
*/
var flatten = function(root) {
    let cur = root;
    // every time root has a left child
    // we rearrange so that left subtree gets placed in the correct position of right subtree
    while (cur !== null) {
        // ensure that left subtree is moved to the right subtree
        // and hence left subtree is null
        if (cur.left) {
            rightMost = findRightMost(cur.left);
            rightMost.right = cur.right;
            cur.right = cur.left;
            cur.left = null;
        }
        // left subtree is null so there is no need to traverse left
        cur = cur.right;
    }
    return root;
    // T.C: O(N), we traverse each node twice at most
    // S.C: O(1)
};

function findRightMost(root) {
    let cur = root;
    while (cur.right) {
        cur = cur.right;
    }
    return cur;
}