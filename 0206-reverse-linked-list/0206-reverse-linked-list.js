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
var reverseList = function(node) {
  const nodeValueList = [];
  let currentNode = node;

  while (currentNode) {
    nodeValueList.push(currentNode.val);
    currentNode = currentNode.next;
  }

  currentNode = node;
  let reverseIndex = nodeValueList.length - 1;

  if (nodeValueList.length === 1) {
    return node;
  } else {
    while (currentNode) {
      currentNode.val = nodeValueList[reverseIndex];
      reverseIndex--;
      currentNode = currentNode.next;
    }
  }

  return node;
};