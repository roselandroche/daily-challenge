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
  // add new next
  setNext(newNext) {
    this.next = newNext;
  }
}

// define linked list
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // helper functions
  // add element to list
  addNode(element) {
    let node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  // get head
  getHead() {
    return this.head;
  }
  // get last
  getLast() {
    let current;

    if (this.head === null) {
      return this.head;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      return current;
    }
  }
  // get size
  getSize() {
    let count = 0;
    let current;

    if (this.head === null) {
      return count;
    } else {
      current = this.head;
      count++;
      while (current.next) {
        current = current.next;
        count++;
      }
      return count;
    }
  }
}

let list1 = new LinkedList();

list1.addNode(1);
list1.addNode(5);
list1.addNode(6);
list1.addNode(51);

let list2 = new LinkedList();

list2.addNode(-51);
list2.addNode(0);
list2.addNode(22);

// here we actually start building the solution for the original problem
const mergeTwoLists = (list1, list2) => {
  let result = new LinkedList();

  // if both lists have no nodes - return null
  if (!list1 && !list2) {
    return result;
    // if only one list has nodes, return the other list
  } else if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  }

  // if both lists have node(s)
  let list1Current = list1.head;
  let list2Current = list2.head;

  while (list1Current?.val !== null || list2Current?.val !== null) {
    if (list1Current !== null && list2Current !== null) {
      if (list1Current.val <= list2Current.val) {
        result.addNode(list1Current);
        list1Current = list1Current.next;
      } else {
        result.addNode(list2Current);
        list2Current = list2Current.next;
      }
    } else if (list1Current === null && list2Current !== null) {
      result.addNode(list2Current);
      list2Current = list2Current.next;
    } else if (list2Current === null && list1Current !== null) {
      result.addNode(list1Current);
      list1Current = list1Current.next;
    } else {
      console.log("missed all catches");
      break;
    }
  }
  return result.head;
};

mergeTwoLists(list1, list2);

/*
I fully fleshed this out on my own, and debugged all errors. I feel much better about this than yesterday's code, and am 
feeling more comfortable with this data structure. I did not create a test file for this one, but tested all the code within 
the js file manually.
*/
