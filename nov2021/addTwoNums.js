/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // iterate to end and store val in two arrays
    // let head1 = l1
    // let head2 = l2
    // let arr1 = []
    // let arr2 = []


    // while (head1) {
    //     arr1.push(head1.val);
    //     arr2.push(head2.val);
    //     head1 = head1.next
    //     head2 = head2.next
    // }
    // // join arrays and add and reverse
    // arr1.join("");
    // arr2.join("");

    // let sum = parseInt(arr1) + parseInt(arr2);

    // sum = String(sum).split("").reverse();
    // // make a new array with the values
    // let curr = sum.shift();
    // let newHead = new ListNode(curr);
    // while (sum) {
    //     curr = sum.shift();
    //     newHead.next = curr;
    //     newHead = newHead.next;
    // }
    // return newHead;
    var l1p = l1; // list 1 pointer
    var l2p = l2; // list 2 pointer

    var prev = new ListNode(null);
    var prevp = prev; // prev pointer
    var carry = false;
    while(l1p || l2p) {
        var curr = l1p != null ? l1p : l2p;
        var val1 = l1p != null ? l1p.val : 0;
        var val2 = l2p != null ? l2p.val : 0;
        var val3 = carry ? 1:0;
        var sum = val1 + val2 + val3;
        if(sum > 9) {
            sum = sum - 10;
            carry = true;
        } else {
            carry = false;
        }
        curr.val = sum;
        prevp.next = curr;
        prevp = prevp.next;
        if(l1p) l1p = l1p.next;
        if(l2p) l2p = l2p.next;
    }
    if(carry) {
        prevp.next = new ListNode(1);
    }
    return prev.next;
};
console.log(
    addTwoNumbers([2,4,3], [5,6,4])
);