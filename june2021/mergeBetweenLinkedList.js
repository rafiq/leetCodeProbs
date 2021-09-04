function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeInBetween = function(list1, a, b, list2) {
    let idx = 1;
    let left = list1;
    let right = list1;
    while(idx <= b){
        if(idx < a){
            left = left.next;
            right = right.next;
        }else if(idx <= b){
            right = right.next;
        }
        idx++;
    }
    right = right.next;
    left.next = list2;
    while(list2.next !== null){
        list2 = list2.next;
    }
    list2.next = right;
    return list1;

    // list1 = arrayToList(list1)
    // list2 = arrayToList(list2);
    // let p1 = list1;
    // let p2 = list2;

    // while (p1.next.val !== a) {
    //     p1 = p1.next;
    // }

    // p1.next = p2;
    // while (p1.next.val !== b) {
    //     p1 = p1.next;
    // }
    // while (p2.next !== null) {
    //     p2 = p2.next;
    // }
    // p2.next = p1;
    // return returnArray(list1)

};
function returnArray(head) {
    let curr = head;
    let result = [];

    while (curr !== null) {
        result.push(curr.val)
        curr = curr.next;
    }
    return result;
}
function arrayToList(array) {
    // ! Using Reduce Method (Shorthand)
    return array.reverse().reduce((acc, curr) => new ListNode(curr, acc), null)
}
console.log(
    mergeInBetween([0,1,2,3,4,5],  3, 4, [1000000,1000001,1000002]),//
)