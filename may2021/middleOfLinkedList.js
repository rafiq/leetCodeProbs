/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 var middleNode = function(head) {
    // let p1 = head;
    // let p2 = head;

    // while (p2 !== null) {
    //     p2 = p2.next;
    //     // I see this is how they are moving it two spaces at a time as opposed to the one space per time in the p1
    //     if (p2 === null) break;
    //     else p2 = p2.next;

    //     p1 = p1.next;
    // }
    // return p1
    let obj = new ListNode(head)
    let start = obj.val;
    console.log(start)

    // while (obj.next !== null) {
    //     console.log("1");
    //     obj = obj.next;
    // }
    // let dummyHead = new ListNode();

    // let slow = head, fast = head
    // while(fast !== null && fast.next !== null){
    //     slow = slow.next
    //     fast = fast.next.next
    // }
    // return slow


    // let dummyHead = new ListNode();
    // dummyHead.next = head
    // let head1 = dummyHead
    // while (dummyHead.next) {
    //     if (!dummyHead.next) break;
    //     console.log("1")
    //     head1 = head1.next;
    // }
    // dummyHead.next = head;
    // console.log(dummyHead)
    // dummyHead.next.next = head;
    // console.log(dummyHead)
    // dummyHead.next.next.next = null;
    // console.log(dummyHead)

    // let slow = dummyHead, fast = dummyHead;
    // while (fast) {
    //     fast = fast.next;
    //     if (fast == null) break;
    //     else fast = fast.next;

    //     slow = slow.next;
    // }
    // return slow;
}
console.log(
    middleNode([1,2,3,4,5]),//3
)