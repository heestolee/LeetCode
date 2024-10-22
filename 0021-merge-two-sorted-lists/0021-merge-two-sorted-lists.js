/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(-1);
    let current = dummy;

    while (list1 && list2) {
        current.next = list1.val <= list2.val ? list1 : list2;
        current = current.next;
        list1.val <= list2.val ? list1 = list1.next : list2 = list2.next;
    }

    current.next = list1 || list2;

    return dummy.next;
};