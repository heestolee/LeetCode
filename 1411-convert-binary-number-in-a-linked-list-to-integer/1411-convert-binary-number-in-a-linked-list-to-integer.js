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
  let result = 0;
  let current = head;
  
  while (current !== null) {
    result = (result << 1) | current.val;
    current = current.next;
  }

  return result;
};
