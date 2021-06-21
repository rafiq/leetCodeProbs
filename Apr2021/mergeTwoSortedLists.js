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
 var mergeTwoLists = function(l1, l2) {
    let p1 = 0;
    let p2 = 0;

    while (l1[p1]  && l2[p2] ) {

        if (l1[p1] > l2[p2])  {
            l1.splice(p1,0,l2[p2])
            p2++;
        } else if (l1[p1] === l2[p2]) {
            l1.splice(p1,0,l2[p2])
            p1++;
            p2++;
        } else {
                p1++;
            }
        }
    return l1;
};
console.log(
    mergeTwoLists([1,2,4],[1,3,4]),//[1,1,2,3,4,4]
)