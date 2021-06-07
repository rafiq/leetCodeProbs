function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function arrayToList(array) {
    // ! Using Reduce Method (Shorthand)
    return array.reverse().reduce((acc, curr) => new ListNode(curr, acc), null)
    // ! Iterative Approach
    // let list = null;

    // for (let i = array.length - 1; i >= 0; i--) {
    //     list = {val: array[i], next: list}
    // }
    // return list
}

function returnArray(head) {
    let curr = head;
    let result = [];

    while (curr !== null) {
        result.push(curr.val)
        curr = curr.next;
    }
    return result;
}
var removeElements = function(head, val) {
    if (head === null) return null;

    let curr = new ListNode(-1);
    curr.next = head;
    head = curr;

    while (curr.next !== null) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head.next

    // let dummy = new ListNode();
    // let cur = dummy;

    // while (head !== null) {
    //     if (head.val !== val) {
    //         cur.next = head;
    //         cur = cur.next;
    //     }
    //     head = head.next;
    // }
    // cur.next = null;
    // return dummy.next;
};

let listA = arrayToList([1,2,6,3,4,5,6]);

console.log(
    removeElements(listA,6),//[1,2,3,4,5]
    // listA
)