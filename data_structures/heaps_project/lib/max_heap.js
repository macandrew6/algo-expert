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

  insert(value) {
    this.array.push(value);
    this.siftUp(this.array.length - 1);
  }

  siftUp(idx) {
    if (idx === 1) return;
    let parentIdx = this.getParent(idx);

    if (this.array[parentIdx] < this.array[idx]) {
      [this.array[parentIdx], this.array[idx]] = [
        this.array[idx],
        this.array[parentIdx],
      ];
      this.siftUp(parentIdx);
    }
  }

  deleteMax() {
    let max = this.array[1];

    if (this.array.length === 2) return this.array.pop();
    if (this.array.length === 1) return null;

    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }

  siftDown(idx) {
    let current = this.array[idx];
    let leftChildIdx = this.getLeftChild(idx);
    let rightChildIdx = this.getRightChild(idx);
    let leftValue = this.array[leftChildIdx];
    let rightValue = this.array[rightChildIdx];
    let targetChildIdx;

    if (leftValue === undefined) leftValue = -Infinity;
    if (rightValue === undefined) rightValue = -Infinity;

    if (leftValue < current && rightValue < current) return;

    if (leftValue > rightValue) {
      targetChildIdx = leftChildIdx;
    } else {
      targetChildIdx = rightChildIdx;
    }
    [this.array[idx], this.array[targetChildIdx]] = [
      this.array[targetChildIdx],
      this.array[idx],
    ];
    this.siftDown(targetChildIdx);
  }

  swap(i, j) {
    let array = this.array;
    [array[i], array[j]] = [array[j], array[i]];
  }

  heapify(n, i) {
    let leftIdx = this.getLeftChild(i);
    let rightIdx = this.getRightChild(i);
    let leftVal = this.array[leftIdx];
    let rightVal = this.array[rightIdx];
    let current = array[i];

    if (leftIdx >= n) leftVal = -Infinity;
    if (rightIdx >= n) rightVal = -Infinity;

    if (current > leftVal && current > rightVal) return;

    let swapIdx;
    if (leftVal < rightVal) {
      swapIdx = rightVal;
    } else {
      swapIdx = leftVal;
    }
  }
}

let maxHeap = new MaxHeap();
maxHeap.insert(29);
maxHeap.insert(50);
maxHeap.insert(100);
maxHeap.insert(36);

module.exports = {
  MaxHeap,
};
