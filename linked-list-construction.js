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

  setHead(node) {
    // Write your code here.
    let temp = this.head;
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.next = this.head;
      this.head = node;
      this.head.next = temp;
      temp.prev = this.head;
    }
  }

  setTail(node) {
    // Write your code here.
    let temp = this.tail;
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.prev = this.tail;
      this.tail = node;
      temp.next = node;
      node.prev = temp;
    }
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
    // find node within the linked list O(N)
    let current = this.head;
   if (current.value === node.value) {
      nodeToInsert.next = node;
      nodeToInsert.prev = node.prev;
      node.prev = nodeToInsert;
    } 
    this.insertBefore(current.next, nodeToInsert);
    // insert nodeToInsert before found node
    // livetesting
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
    let current = this.head;
    if (current.value === node.value) {
      nodeToInsert.prev = node;
      nodeToInsert.next = node.next;
      node.next = nodeToInsert;
    } 
    this.insertAfter(current.next, nodeToInsert);
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
    // pseudo code
    let currentNode = this.head;
    // theoretically should work
    while (position !== 0) {
      if (position === 0) {
        // do the transitions
        nodeToInsert.prev = currentNode;
        nodeToInsert.next = currentNode.next;
        currentNode.next = nodeToInsert;
      } else {
        currentNode = currentNode.next;
        position -= 1;
      }
    }
  }

  removeNodesWithValue(value) {
    // Write your code here.
    let node = this.head;
    /* 
    while (node !== null) {
      let nodeToRemove = node;
      node = node.next;
      if (node.value === value) {
        this.remove(node)
      }
    }
    */
    if (this.containsNodeWithValue(node.value)) { 
      // does this even work?
      this.remove(node);
    }
  }

  remove(node) {
    if (node === this.head) {
      this.head = this.head.next;
    }
    if (node === this.tail) {
      this.tail = this.tail.prev;
    }
    this.removeNodeBindings(node);
  }

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