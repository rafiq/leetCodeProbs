

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    // let curr = headA;
    // let currB = headB;

    // while (curr !== null && currB !== null) {
    //     if (curr.val === currB.val) {
    //         return curr.val;
    //     }
    //     curr = curr.next
    // }
    // return null;

    // !
    // const seen = new Set();
    // while (headA) {
    //     seen.add(headA);
    //     headA = headA.next;
    // }
    // while (headB) {
    //     if (seen.has(headB)) {
    //         return headB;
    //     }
    //     headB = headB.next;
    // }
    // return null;

    // !
    if(!headA || !headB) return null;
let pA = headA;
let pB = headB;

while(pA != pB) {
    pA = pA.next;
    pB = pB.next;

    if(pA == pB) {
        return pA;
    }

    if(pA == null) {
        pA = headB
    }

    if(pB == null) {
        pB = headA;
    }
}
return pA;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let baz = new ListNode(1,1);
baz.next = new ListNode(1,null);
baz.next.next = new ListNode(2,null);

function arrayToList(array) {
    // ! Using Reduce Method (Shorthand)
    return array.reduce((acc, curr) => new ListNode(curr, acc), null)
    // ! Using Reduce Method (long version)
    // let head = array.reverse().reduce((acc, curr) => {
    //     if (acc == null) {
    //       acc = new ListNode(curr);

    //     } else {
    //       acc = new ListNode(curr, acc);
    //     }
    //     return acc;
    //   }, null);
    //   return head;
    // ! Iterative approach
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
        list = {val: array[i], next: list}
    }
    return list
}

// let ÷listB = ;
let listA = arrayToList([4,1,8,4,5]);
let listB = arrayToList([5,6,1,8,4,5])

console.log(
    // deleteDuplicates(baz)
    getIntersectionNode(listA,listB),
    getIntersectionNode(arrayToList([1,9,1,2,4]), arrayToList([3,2,4]))
)