/*
https://leetcode.com/problems/remove-duplicates-from-sorted-list/
83. Remove Duplicates from Sorted List
Level: Easy

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

@param {ListNode} head
@return {ListNode}
*/
var deleteDuplicates = function (head) {
  let current = head;
  while (current) {
    if (current.val === current.next?.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

module.exports = deleteDuplicates;

/*
Runtime: 68 ms, faster than 99.91% of JavaScript online submissions for Remove Duplicates from Sorted List.
Memory Usage: 40.8 MB, less than 33.12% of JavaScript online submissions for Remove Duplicates from Sorted List.

Note: 
I felt so much more comfortable with the linked list today! Definite progress.

Still unsure how to do test file when dealing with linked lists. All tests pass on Leetcode so I feel good about my solution.
*/
