/*
Kth Largest Element in an Array

Find the kth largest element in an unsorted array. Note that it is the kth largest element in
the sorted order, not the kth distinct element.

Example:
input: [3, 2, 1, 5, 6, 4] and k = 2;
output: 5

input: [3, 2, 3, 1, 2, 4, 5, 5, 6] and k = 4;
[1, 2, 2, 3, 3, 4, 5, 5, 6]
output: 4
*/

const findKthLargest = (nums, k) => {
  // sort the array
  nums.sort();
  return nums[nums.length - k];
};

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
}

const findKthLargestInHeap = (nums, k) => {
  let heap = new MaxHeap();
  nums.forEach((num) => heap.insert(num));
  for (let i = 1; i < k; i++) {
    heap.deleteMax();
  }
  return deleteMax();
};

let nums = [3, 2, 1, 5, 6, 4];
let k = 2;
console.log(findKthLargest(nums, k));
