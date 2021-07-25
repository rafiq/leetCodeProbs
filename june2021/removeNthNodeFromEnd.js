/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let list = linkedList([1,2,3,4,5])
function linkedList(arr){
    let list = new ListNode(arr[0]);

    let selectedNode = list;
    for(let i = 1; i < arr.length; i++){
      selectedNode.next = new ListNode(arr[i]);
      selectedNode = selectedNode.next
    }

    return list

  }
// list.next = new ListNode(2)


// console.log(list)
var removeNthFromEnd = function(head, n) {
    // let dummy = head;
    // let lengthCount = 0;
    // let curr = head;

    // while (dummy !== null) {
    //     lengthCount++;
    //     dummy = dummy.next;
    // }
    // lengthCount = lengthCount = n;
    // while (lengthCount > 0) {
    //     curr = curr.next
    //     lengthCount--
    // }
    // curr.next = curr.next.next
    // return head;
    let t1 = head, t2 = head;
    for (let i = 0; i < n; i++) {
        t1 = t1.next
    }
    if (t1 == null) {
        return head.next
    }
    while (t1.next != null) {
        t1 = t1.next
        t2 = t2.next
    }
    t2.next = t2.next.next
    return head
};
function linkedListToArray(linkedList) {

    var arr = [linkedList.val]
    while(linkedList.next !== null){
        linkedList = linkedList.next;
        arr.push(linkedList.val)
    }
    return arr
}
console.log(
    removeNthFromEnd(list, 2)
    // linkedListToArray(list)
)