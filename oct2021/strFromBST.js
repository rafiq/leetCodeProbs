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
 * @return {string}
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var tree2str = function(root) {
    // let values = [];
    // if (root) values.push(root.val);


    // const preOrder = (root,values) => {
    //     if (!root) return null;

    //     if (root.val) {
    //         values.push("(" + root.val + ")");
    //         if (root.left) preOrder(root.left);
    //         if (root.right) preOrder(root.right);
    //     }
    // }

    // preOrder(root);
    // return values;
    if (!root) return "";
    if (!root.left && !root.right) return root.val.toString();

    let left = "(" + tree2str(root.left) + ")";
    let right = "(" + tree2str(root.right) + ")";

    if (left === "()") left = "";
    if (right === "()") right = "";
    return root.val + left + right;
};
console.log(
    tree2str([1,2,3,4])
);

if (!t) { return ''; }
if (!t.left && !t.right) { return t.val.toString(); }

let left = '(' + tree2str(t.left) + ')';
let right = t.right ? '(' + tree2str(t.right) + ')' : '';

if (left === "()") left = "";
if (right === "()") right = "";
return t.val + left + right;



if (!root) return '';
    var leftR = tree2str(root.left);
    var rightR = tree2str(root.right);
    if (rightR) return root.val + '(' + leftR + ')(' + rightR + ')';
    if (leftR) return root.val + '(' + leftR + ')';
    return root.val + '';