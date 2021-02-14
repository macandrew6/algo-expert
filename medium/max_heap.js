/*
Max Heap

Implement a (complete) max heap 
* complete meaning all nodes have left and right children and are filled up to 
  the left completely
* all complete heaps are balanced
* not all balanced heaps are complete

heaps are useful for sorting min or max values from a list, they are partially 
sorted data structures

implement the following methods for the heap: insert, siftUp, deleteMax, siftDown
*/

class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  insert() {}
}
