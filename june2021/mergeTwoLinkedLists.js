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
let list1 = linkedList([1,2,4, 5, 6]);
let list2 = linkedList([1,3,4])
 var mergeTwoLists = function(l1, l2) {
    let head = new ListNode();
    let cur = head;
    let cur1 = l1, cur2 = l2;
    while (cur1 !== null && cur2 !== null) {
        if (cur1.val < cur2.val) {
            cur.next = cur1;
            cur1 = cur1.next;
        } else {
            cur.next = cur2;
            cur2 = cur2.next;
        }
        cur = cur.next;
    }

    if (cur1 !== null) {
        cur.next = cur1;
    }
    if (cur2 !== null) {
        cur.next = cur2;
    }
    return head.next;
};
console.log(
    mergeTwoLists(list1,list2)
)

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function linkedList(arr){
    let list = new ListNode(arr[0]);
    let selectedNode = list;

    for(let i = 1; i < arr.length; i++){
      selectedNode.next = new ListNode(arr[i]);
      selectedNode = selectedNode.next
    }

    return list

}

function linkedListToArray(linkedList) {
    var arr = [linkedList.val]
    while(linkedList.next !== null){
        linkedList = linkedList.next;
        arr.push(linkedList.val)
    }
    return arr
}