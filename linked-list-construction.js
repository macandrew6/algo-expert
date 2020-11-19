/*
Linked List Construction

Write a DoublyLinkedList class that has a head and a tail both of
which point to either a linked list Node or None / null. The class
should support:

  - Setting the head and a tail of the linked list.
  - Inserting nodes before and after other nodes as well as at
    given positions (the position of the head node is 1).
  - Removing given nodes and removing nodes with given values.
  - Searching for nodes with give values.

Note that the setHead, setTail, insertBefore, insertAfter, 
insertAtPosition, and remove methods all take in actial Nodes as 
input parameters--not integers (except for insertAtPosition, which 
also takes in an integer representing the position); this means that
you don't need to create any new Nodes in these methods.  The input
nodes can be either stand-alone nodes or nodes that are already in 
the linked list. if they're nodes that are already in the linked
list, the methods will effectively be moving the nodes within the 
linked list. You won't be told if the input nodes are already in the
linked list, so your code will have to defensively handle this 
scenario.


*/