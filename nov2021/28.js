/* 
21. Merge Two Sorted Lists
Level: Easy

Description: 

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

 @param {ListNode} list1
 @param {ListNode} list2
 @return {ListNode}
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let list = new ListNode();
  let head = list;

  while (list1 !== null && list2 !== null) {
    // Select and add the smallest value from either linked list,
    // then increment that list forward.
    if (list1.val < list2.val) {
      list.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      list.next = new ListNode(list2.val);
      list2 = list2.next;
    }

    list = list.next;
  }

  // If one linked list is shorter than the other
  // add on the remainder of the last linked list
  if (list1 !== null) {
    list.next = list1;
  }
  if (list2 !== null) {
    list.next = list2;
  }

  // return .next because this first element in the linkedlist is empty
  return head.next;
};

module.exports = mergeTwoLists;

/* 
Note: 
I overestimated the amount of work needed for a solution. I was knee deep in defining classes and helper functions when I 
stopped to check how other coders had accessed the lists in the params. This led to the solution above being pulled from 
another user for me to look over and understand. I definitely need to work on linked lists a lot.
*/
