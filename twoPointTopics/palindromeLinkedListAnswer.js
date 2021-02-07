// This was an interesting problem, and this is the fastest code which essentially just counted the length of the array by setting a count variable that was incremented every node of the array until the tracker hit null.

// After that, they set up a for loop that was set to the length of the array and push'ed the nodes into a new array, and then reversed that array.

// Finally, they took the arrays and compared them.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // get length
    let fast = head, size = 0;
    while (fast != null) {
        size++;
        fast = fast.next;
    }
    // stack first half
    const target = Math.floor(size/2), stack = [];
    let slow = head;
    for (let i=1; i<=target; i++) {
        stack.push(slow.val);
        slow = slow.next;
    }
    stack.reverse();
    // compare
    if (size % 2 === 1) { // odd (skip middle item)
        slow = slow.next;
    }
    let result = true, i = 0;
    while (slow !== null) {
        if (stack[i++] !== slow.val) {
            result = false;
            break;
        }
        slow = slow.next;
    }

    return result;
};
