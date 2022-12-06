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
 var insertionSortList = function(head) {
    let result = []
    if (!head) return null;
    // iterate over list and apply insertion function on each iteration
    let curr = head
    // create insertion helper function
    const insertionFunc = node => {
        let prev = node.prev
        let next = node.next
        // first item or last item
        if (!prev) {
            // attach right
            node.next = next
            prev.next = node
            // cut next
        } else if (!next) {
            // attach left
            prev.next = node
            node.next = null
            // cut left
        } else {
            // cut left
            prev.next = node

            // cut right
            node.next = next
        }
    }

    while (curr) {
        if
        insertionFunc(curr)

        curr = curr.next
    }

    return head

    if (head === null) {
        return head
      }
      let node = head.next
      while (node) {
        let prev = head
        while (prev !== node && prev.val <= node.val) {
          prev = prev.next
        }
        if (prev === node) {
          // everyting remains sorted in this pass
          node = node.next
          continue
        }
        let temp1 = node.val
        let temp2 = null
        while (prev) {
          if (temp1 === null) {
            temp1 = prev.val
            prev.val = temp2
            temp2 = null
          } else if (temp2 === null) {
            temp2 = prev.val
            prev.val = temp1
            temp1 = null
          }
          if (prev === node) {
            break
          }
          prev = prev.next
        }
        node = node.next
      }
      return head
};


console.log(
    insertionSortList()
);

var insertionSortList = function(head) {
    if (!head || !head.next) return head;

    // create a dummy node and append the original linked list to the dummy node
    const dummy = new ListNode(-1);
    dummy.next = head;

    // lastSorted denotes the last node in the sorted part of the list
    let lastSorted = head;

    // sort the rest of nodes
    while (lastSorted.next) {
      // the node to be inserted
      let node = lastSorted.next;

      let curr = dummy;
      // find the correct position to insert the node
      while (curr !== lastSorted && node.val > curr.next.val) {
        curr = curr.next;
      }

      // special case where current node is inserted at the end
      // then nothing should be done, just advance the last sorted
      if (curr === lastSorted) {
        lastSorted = node;
        continue;
      }

      // insert the node
      const next = curr.next;
      curr.next = node;
      lastSorted.next = node.next;
      node.next = next;
    }

    return dummy.next;
  };