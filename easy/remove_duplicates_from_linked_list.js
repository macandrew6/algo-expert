/*
Remove Duplicates from Linked List

You're given the head of a singly linked list whose nodes are in sorted order
with respect to their values. Write a function that returns a modified version
of the Linked List that doesn't contain any nodes with duplicate values. The 
Linked List should be modified in place (i.e. you shouldn't create a brand new
list), and the modified Linked List should still have its nodes sorted with 
respect to their values.


*/
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// arr = [a, b]
// a -> b -> b -> c -> d -> null
function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  // curr = linkedList
  let curr = linkedList; // see if this can be const
  // while curr.next
  while (curr) {
    let distinctNode = curr.next;
    // check to see if current value === the last element of the arr
    while (distinctNode !== null && curr.value === distinctNode.value) {
      distinctNode = distinctNode.next;
    }
    curr.next = distinctNode;
    curr = distinctNode;
  }
  return linkedList;
}
