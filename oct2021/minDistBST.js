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
 * @return {number}
 */
 var minDiffInBST = function(root) {
    let min = Infinity;

    const DFS = (root, min) => {
        if (!root) return null;
        let leftDif = Math.abs(root.val - root.left)
        min = leftDif > min ? leftDif : Math.abs(root.val - root.right);
        DFS(root.left, min);
        DFS(root.right, min);
    }
    return min;
};
console.log(
    minDiffInBST()
);

var minDiffInBST = function(root) {
    let minDistance = Infinity;
    var searcher = (node, values = []) => {
        values.push(node.val);
        if (node.left) searcher(node.left, values);
        if (node.right) searcher(node.right, values);
        return values;
    }
    let theValues = quicksort(searcher(root))
    for (var i = 0; i < theValues.length - 1; i++) {
        if (theValues[i+1] - theValues[i] < minDistance) {
            minDistance = theValues[i+1] - theValues[i];
        }
    }
    return minDistance
};

function quicksort(arr) {
    if (arr.length === 0) return arr;
    let newArray = [];
    let left = [];
    let right = [];
    let pivot = arr.pop();
    for (var value of arr) {
        if (value < pivot) left.push(value)
        else right.push(value)
    }
    return newArray.concat(quicksort(left), pivot, quicksort(right))
}

var minDiffInBST = function(root) {
    let result = [];

   function inOrder(root, result) {
     if (!root) return null;

     inOrder(root.left, result);
     result.push(root.val);
     inOrder(root.right, result);
   }

   inOrder(root, result);

   let min = Infinity;

   for (let i = 1; i < result.length; i++) {
     min = Math.min(result[i] - result[i - 1], min);
   }

   return min;
 };

 var minDiffInBST = function (root) {

  };