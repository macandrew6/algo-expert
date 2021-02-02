/*
Remove Kth Node From End

Write a function that takes in the head of a Singly Linked List and an integer k and 
removes the kth node form the end of the list

The removal should be done in place, meaning that the original data structure should be
mutated(no new structure should be created)

Furthermore, the input head of the Linked List should remain the head of the linked list
after the removal is done, even if the head is the node that's supposed to be removed.
In other words, if the head is the node that's supposed ot be removed, your function should
simply mutate its value and next pointer.

Note that your function doesn't need to return anything.

You can assum that the input Linked List will always have at least two nodes and, more 
specifically, at least k nodes.

Each LinkedList node has an integer value as well as a next node pointing to the next node in
the list or to None / null if it's the tail of the list.
*/

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // time O (N) | space O (1)
  function removeKthNodeFromEnd(head, k) {
    // Write your code here.
    // set 2 pointers k positions apart
    // have both pointers traverse the list
      // once fast pointer reachers the end stop traversal
      // pointer one should be in the position of the target node
        // somehow must keep track of prior node to the target node
    let counter = 1;
    let first = head;
    let second = head;
    while (counter <= k) {
      second = second.next;
      counter += 1;
    }
    if (second === null) {
      head.value = head.next.value;
      head.next = head.next.next;
    }
    
  }