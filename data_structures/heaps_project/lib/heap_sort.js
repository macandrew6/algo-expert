const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};

const heapify = (array, n, i) => {
  let leftIdx = 2 * i + 1;
  let rightIdx = 2 * i + 2;
  let leftVal = array[leftIdx];
  let rightVal = array[rightIdx];
  let current = array[i];

  if (leftIdx >= n) leftVal = -Infinity;
  if (rightIdx >= n) rightVal = -Infinity;

  if (current > leftVal && current > rightVal) return;

  let swapIdx;
  if (leftVal < rightVal) {
    swapIdx = rightIdx;
  } else {
    swapIdx = leftIdx;
  }
  swap(array, i, swapIdx);
  heapify(array, n, swapIdx);
};

const heapSort = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    heapify(array, array.length, i);
  }
  console.log(array);
  for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
    swap(array, endOfHeap, 0);
    heapify(array, endOfHeap, 0);
  }
  return array;
};

console.log(heapSort([7, 4, 2, 10, 20, 14]));
