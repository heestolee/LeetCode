/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const visitedNodes = new Set();
    let current = head;

    while (current !== null) {
        if (visitedNodes.has(current)) {
            return true;
        }
        visitedNodes.add(current);
        current = current.next;
    }

    return false;
};
