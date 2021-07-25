/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {

    // if (head === null) return null;
    // let curr = head;

    // while (head !== null) {
    //     if (curr.next.val !== null && curr === curr.next.val) {
    //         curr.next = curr.next.next;
    //     }
    //     curr = curr.next;
    // }

    if (!head) {
        return null;
      }
      let prev = null,
        cur = head;
      while (cur !== null) {
        if (prev && prev.val === cur.val) {
          prev.next = cur.next;
        } else {
          prev = cur;
        }
        cur = cur.next;
      }
      return head;

};
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let baz = new ListNode(1,1);
baz.next = new ListNode(1,null);
baz.next.next = new ListNode(2,null);

console.log(
    deleteDuplicates(baz)

)