var isSameTree = function(p, q) {
    if(!p&&!q)return true
    if(!(p&&q)||p.val!==q.val)return false
    return isSameTree(p.left,q.left)&&isSameTree(p.right,q.right)
  };

  var isSameTree = function (p, q) {
    function check(p, q) {
        if (!p || !q) return p === q;
        if (p.val !== q.val) return false;
        return check(p.left, q.left) && check(p.right, q.right);
    }
    return check(p, q);
};