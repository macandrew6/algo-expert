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

// Searching runs in O(N) time and O(1) space
// Removing methods runs in O(1) time and O(1) space
// Removing multiple nodes runs in O(N) time and O(1) space
// Setting heads and tails runs in O(1) time and O(1) space
// Setting at position runs in O(p) time and O(1) space

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1) time | O(1) space
  setHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // bug here
      this.insertBefore(this.head, node);
    }
  }

  // O(1) time | O(1) space
  setTail(node) {
    let temp = this.tail;
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.insertAfter(this.tail, node);
    }
  }

  // O(1) time | O(1) space
  insertBefore(node, nodeToInsert) {
    if (this.head === nodeToInsert && this.tail === nodeToInsert) {
      return;
    }
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (!node.prev) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  // O(1) time | O(1) space
  insertAfter(node, nodeToInsert) {
    // Write your code here.
    if (this.head === nodeToInsert && this.tail === nodeToInsert) {
      return;
    }
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (!node.next) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev =  nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  // O (N) time | O(1) space
  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
    // debugging this fn
    if (position === 1) {
      this.setHead(nodeToInsert);
    }
    let currentNode = this.head;
    let currentPosition = 1;
    while (currentNode !== null && currentPosition !== position) {
      currentNode = currentNode.next;
      currentPosition += 1;
    }
    if (currentNode !== null) { 
      this.insertBefore(currentNode, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  removeNodesWithValue(value) {
    // Write your code here.
    let node = this.head;
    /* 
    debugging
    while (node !== null) {
      let nodeToRemove = node;
      node = node.next;
      if (node.value === value) {
        this.remove(node)
      }
    }
    */
    if (this.containsNodeWithValue(node.value)) { 
      this.remove(node);
    }
  }

  // O (1) time/ O (1) space
  remove(node) {
    if (node === this.head) {
      this.head = this.head.next;
    }
    if (node === this.tail) {
      this.tail = this.tail.prev;
    }
    this.removeNodeBindings(node);
  }

  // O (N) time / O (1) space
  containsNodeWithValue(value) {
    // Write your code here.
    // return true if node with value is contained in the linked list
    // else return false
    let current = this.head;
    while (current !== null && current.value !== value) {
      current = current.next;
    }
    return Boolean(current);
  }

  // O (1) time / O (1) space
  removeNodeBindings(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    } else if (node.next !== null) {
      node.next.prev = node.prev;
    }
    node.prev = null;
    node.next = null;
  }
}