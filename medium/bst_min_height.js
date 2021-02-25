/*
Min Height BST

Write a function that takes in a non-empty sorted array of distinnct integers, constructs a BST from
the integers, and returns the root of the BST.

The function should minimize the height of the BST.

You've been provided with a BST class that you'll have to use to construct the BST.

Each BST node has an integer value, a left child node, and a right child node. A node is
said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater
than the values of every node to its left; its value is lass than or equal to the values of every node
to its right; and its children nodes are either valid BST nodes themselves of null.

A BST is valid if and only if all of its nodes are valid BST nodes.

Note that a BST class already has an insert method which you can use if you want.

array = [1, 2, 5, 7, 10, 13, 14, 15, 22]

sample output:
bst = 
         10 
       /    \
      2     14
    /  \   /   \
   1    5 13   15
         \        \
          7       22
*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// time: O(nlog(n)) (using given insert method) O(n) otherwise | space: O(n)
const minHeightBst = (array) => {
  return constructMinHeightBst(array, null, 0, array.length - 1);
};

const constructMinHeightBst = (array, bst, startIdx, endIdx) => {
  if (endIdx < startIdx) {
    return;
  }
  // find a midpoint
  // making the array[midPoint] the root node because of the fact that these are distinct integers
  // find a suitable left node and a right node
  let midPoint = Math.floor((startIdx + endIdx) / 2);
  let valueToAdd = array[midPoint];
  if (bst === null) {
    bst = new BST(valueToAdd);
  } else {
    bst.insert(valueToAdd);
  }
  // keep applying this logic through out the whole array
  constructMinHeightBst(array, bst, startIdx, midPoint - 1);
  constructMinHeightBst(array, bst, midPoint + 1, endIdx);
  return bst;
};

// time: O(n) | space: O(n)
const minHeightBstRefactor = (array) => {
  return constructMinHeightBstRefactor(array, null, 0, array.length - 1);
};

const constructMinHeightBstRefactor = (array, bst, startIdx, endIdx) => {
  if (endIdx < startIdx) {
    return;
  }
  // find a midpoint
  // making the array[midPoint] the root node because of the fact that these are distinct integers
  // find a suitable left node and a right node
  let midPoint = Math.floor((startIdx + endIdx) / 2);
  let newBstNode = new BST(array[midPoint]);

  if (bst === null) {
    bst = newBstNode;
  } else {
    if (array[midPoint] < bst.value) {
      bst.left = newBstNode;
      bst = bst.left;
    } else {
      bst.right = newBstNode;
      bst = bst.right;
    }
  }
  // keep applying this logic through out the whole array
  constructMinHeightBst(array, bst, startIdx, midPoint - 1);
  constructMinHeightBst(array, bst, midPoint + 1, endIdx);
  return bst;
};

//just cleaner code
const minHeightBstRefactor2 = (array) => {
  return constructMinHeightBstRefactor2(array, 0, array.length - 1);
};

const constructMinHeightBstRefactor2 = (array, startIdx, endIdx) => {
  if (endIdx < startIdx) {
    return null;
  }
  // find a midpoint
  // making the array[midPoint] the root node because of the fact that these are distinct integers
  // find a suitable left node and a right node
  let midPoint = Math.floor((startIdx + endIdx) / 2);
  let bst = new BST(array[midPoint]);
  bst.left = constructMinHeightBstRefactor2(array, startIdx, midPoint - 1);
  bst.right = constructMinHeightBstRefactor2(array, midPoint + 1, endIdx);

  return bst;
};

let array = [1, 2, 5, 7, 10, 13, 14, 15, 22];
console.log(minHeightBst(array));
