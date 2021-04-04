/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    // return parseInt(String(head.reduce((acc,curr) => acc += curr,"")),2);
    let result = 0
    while (head) {
        result = result * 2 + head.val
        head = head.next
    }
    return result
};
console.log(
    getDecimalValue([1,0,1]),//5
    getDecimalValue([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]),//18880
    getDecimalValue([0,0]),//0
    getDecimalValue([1]),//1
)