function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
}
   /**
    @param {TreeNode} root
    * @return {number}
    */
var goodNodes = function(root) {
    // let count = 1;
    // let rootNum = root[0];
    // let curr = root[0];

    // for (let i = 0; i < root.length; i++) {
    //     for (let j = 1; j < root.length; j *= 2) {
    //         if (root[i] !== null) {
    //             curr = root[i];
    //             if (rootNum <= root[i] && root[i] >= root[i - 1]) count++;
    //         } else {

    //         }

    //     }
    // }

    // return count;
    let count = 0;

    function traverse(node, max) {
        if (node === null) {
            return;
        }

        if (node.val >= max) {
            count += 1;
        }

        traverse(node.left, Math.max(node.val, max));
        traverse(node.right, Math.max(node.val, max))
    }

    if (root !== null) {
         traverse(root, root.val)
    }

    return count;
};
console.log(
    goodNodes([3,1,4,3,null,1,5])
);