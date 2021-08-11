/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 function ListNode(val) {
    this.val = val;
    this.next = null;
}

 var deleteNode = function(node) {
    // let obj = new ListNode(node)

    node.val = node.next.val;
    return node.val
};
console.log(
    deleteNode([4,5,1,9]),//[4,1,9]
)