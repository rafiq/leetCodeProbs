#!/usr/bin/env node

// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers

// Solution
// ========

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return null;
};


// Time and Space Complexity
// =========================
// Time Complexity: O(__REPLACE_ME__)
// Space Complexity: O(__REPLACE_ME__)


// Tests
// =====
//
// LeetCode Examples
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));  // Output: [7, 0, 8]
console.log(addTwoNumbers([0], [0]));  // Output: [0]
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));  // Output: [8, 9, 9, 9, 0, 0, 0, 1]

// Additional Examples
// {{ADDITIONAL_EXAMPLES}}