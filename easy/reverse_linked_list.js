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

  reverseLinkedList(head) {
    let curr = head;
    let prev = null;
    while (true) {
      let tempCurr = curr.next;

      curr.next = prev;

      prev = curr;

      if (!tempCurr) break;

      curr = tempCurr;
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
