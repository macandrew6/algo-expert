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

If you're doing this problem in an untyped language like Python or
Javascript, you may want to look at the various function signatures
in a typed language like Java or TypeScript to get a better idea of
what each input parameter is.

Each Node has an integer value as well as a prev node and a next
node, both of which can point to either another node or None / null
*/

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // Write your code here.
  }

  setTail(node) {
    // Write your code here.
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
  }

  removeNodesWithValue(value) {
    // Write your code here.
  }

  remove(node) {
    // Write your code here.
  }

  containsNodeWithValue(value) {
    // Write your code here.
  }
}