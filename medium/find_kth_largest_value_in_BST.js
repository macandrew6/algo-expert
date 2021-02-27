/*
Find Kth Largest Value in BST

Write a function that takes in a Binary Search Tree and a positive integer k and returns the kth largest 
integer contained in the BST

You can assum that there will only be integer values in the BST and that k is less than or equal to the 
number of nodes in the tree

Also, for the purpose of this question, duplicate integers will be treated as distinct values. In other
words, the second largest value in a BST containing values {5, 7, 7} will be 7 --not 5

Each BST node has an inteer value, a left child node, and a right child node. A nde is said to be a valid
BST node if and only if it satisfies the BST property: its value is strictly greater than the values of
every node to its left; its values is less than or equal to the values of every node to its right; 
and its children nodes are either valid BST nodes themselves or null.

bst = 
         15 
       /    \
      5     20 
    /  \   /   \
   2    5 17    22
 /  \             
1    3    
k = 3

result = 17
*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findKthLargestValueInBst = (tree, k) => {
  // Write your code here.
  let arr = traverseHelper(tree, []);
  return arr[arr.length - k];
};

const traverseHelper = (tree, array) => {
  if (tree !== null) {
    traverseHelper(tree.left, array);
    array.push(tree.value);
    traverseHelper(tree.right, array);
  }
  return array;
};

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
  // keep applying this logic through out the whole array
  bst.left = constructMinHeightBstRefactor2(array, startIdx, midPoint - 1);
  bst.right = constructMinHeightBstRefactor2(array, midPoint + 1, endIdx);

  return bst;
};

let array = [1, 2, 3, 5, 5, 15, 17, 20, 22];
let bst = minHeightBstRefactor2(array);
let k = 3;

console.log(findKthLargestValueInBst(bst, k));
