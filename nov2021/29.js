/*
https://leetcode.com/problems/merge-two-sorted-lists/submissions/

21. Merge Two Sorted Lists
Level: Easy

Description: 

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

NOTE: 
This is a more self directed version of yesterday's challenge, for further linked list practice. 
*/

// define node
class Node {
  constructor(val = null) {
    this.val = val;
    this.next = null;
  }

  // helper functions
  // add new node
  addNode(newNode) {
    let newNext = new Node(newNode);
    if (this.val !== null) {
      let current = this.val;
      while (current.next) {
        current = current.next;
      }
      current.next = newNext;
    } else {
      this.val = newNext;
    }
  }
  // get head value
}

let foo = new Node();
console.log(foo);
foo.addNode(7);
console.log(foo);
foo.addNode(20);
console.log(foo);
foo.addNode(44);
console.log(foo);
foo.addNode(16);
console.log(foo);

// define linked list
class LinkedList {
  constructor() {
    this.head = head;
    this.size = 0;
  }

  // helper functions
  // add element to list
  // get head
}
