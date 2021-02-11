/*
Reverse a linked list

example:
// a -> b -> c -> d
// d -> c -> b -> a
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head = node;
    }
  }

  insert(node) {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
  }
  // a -> b -> c -> d
  // d -> c -> b -> a
  reverseLinkedList(head) {
    let curr = head; // d
    let prev = null; // c
    while (true) {
      let tempCurr = curr.next; // null

      curr.next = prev; // null = c

      prev = curr; // c = d

      if (!tempCurr) break;

      curr = tempCurr; // c = d
    }
    return curr;
  }
}

let llist = new LinkedList();
llist.setHead(new Node('a'));
llist.insert(new Node('b'));
llist.insert(new Node('c'));
llist.insert(new Node('d'));
llist.insert(new Node('e'));
console.log(llist.reverseLinkedList(llist.head));
