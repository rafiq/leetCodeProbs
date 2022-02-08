


var diameterOfBinaryTree = function(root) {
    if (!root) return null;
    let max = 0;
    getHeight(root);
    return max;
    function getHeight(root) {
      if (!root) return 0;
      let leftHeight = getHeight(root.left);
      let rightHeight = getHeight(root.right);
      max = Math.max(max, leftHeight + rightHeight);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  };

