// THis is the BFS method I was trying to attempt
// This is changing in place which is a good idea
const invertTree = (root) => {
    if(!root)return root

    let data = [root]

    while(data.length){
        let curr = data.pop();
        [curr.right,curr.left] = [curr.left , curr.right];
        if(curr.right) data.push(curr.right)
        if(curr.left) data.push(curr.left)
    }
    return root
};
// THis is a DFS which will go down the length of a route and then return to the next

const invertTree = (root) => {
    if(!root)return root
    if(root.right || root.left){
        [root.right,root.left] = [root.left,root.right]
        invertTree(root.right)
        invertTree(root.left)
    }
    return root
};

var invertTree = function(root) {
    if (root == null) return null;

    return { val: root.val,
            left: invertTree(root.right),
            right: invertTree(root.left)
           }
}

