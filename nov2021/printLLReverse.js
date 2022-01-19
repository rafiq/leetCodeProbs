/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    };
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
 var printLinkedListInReverse = function(head) {
    // iterate to the end
        // putting each node in an array
    let result = [];

        while (head) {
            result.push(this.printValue())
            head = this.getNext()
        }

        return result.reverse();
    // when we get to the end
};