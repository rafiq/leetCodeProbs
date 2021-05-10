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
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    }
 var reverseList = function(head) {
    if (!head) return null;


    // let curr = head;
    // let prev = null;
    // let next;

    // while (curr !== null) {
    //     next = curr.next;
    //     curr.next = prev;
    //     prev = curr;
    //     curr = next;
    // }
    // return prev;
};
let node = new ListNode([1,2,3,4,5])
console.log(
    reverseList(node),//[5,4,3,2,1]
)

// I like how this guy explained with his comments. very helpful
var reverseList = function(head) {
    // if you have 1 or less nodes, return
    if (!head || head.next == null) {
		return head;
	}
	let prev = null;
    let current = head;
	while (current) {
        // store current next so it doesn't get overwritten
		let next = current.next;
        // set the current nodes next to prev node
        // this will reverse the connection
        current.next = prev;
        // set the previous node to the current node
        // this swaps current and previous in memory
        prev = current;
        // traverse the list
        current = next;
	}

	return prev;
};
// ! recursive answer was the slowest
// I am glad someone did do the recursive way
var reverseList = function(head) {
    return reverseListHelper(head, null);
};

// ? does recursive functions always need a helper function?
var reverseListHelper = function(head, prev) {
    if(head === null) {
        return prev;
    }

    let next = head.next;
    head.next = prev;
    prev = head;

    return reverseListHelper(next, prev);
};