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
var middleNode = function(head) {
    const stack = [];
    let currentNode = head;

    while (currentNode !== null) {
        stack.push(currentNode);
        currentNode = currentNode.next;
    }

    const middleIndex = Math.floor(stack.length / 2);
    return stack[middleIndex];
};