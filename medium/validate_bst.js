/*
Validate BST

Write a funtion that takes in a potentially invalid Binary Search Tree (BST)
and returns a boolean represnting whether the BST is valid.

Each BST node has an integer value, a left child node, and a right child node. A node
is said to be a valid BST node if and only if it satisfies the BST property: its value is
strictly greater than the values of every node to its left; its value is less than or equal
the values of every node to its right; and its children nodes aare either valid BST nodes
themselves or null.

A Bst is valid if and only if its nodes are valid BST nodes
   bst = 
            10 
          /    \
         5     15
       /  \   /   \
      2<   5 13   22
    /         \
   1           14
   return => true
*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// function validateBst(tree) {
//   let curr = tree;
//   while (true) {
//     if (curr.left.value < curr.value) {
//       curr = curr.left;
//     } else if (curr.right.value >= curr.value) {
//       curr = curr.right;
//     } else if (!curr.left && !curr.right) {
//     }
//     return true;
//   }
//   return false;
// }

// time: O(n) | space: O(d) where d is the depth of the tree (length of the longest branch)
const validateBst = (tree) => {
  // done recursively
  return helper(tree, -Infinity, Infinity);
};

const helper = (tree, minValue, maxValue) => {
  if (tree === null) {
    return true;
  }
  if (tree.value < minValue || tree.value >= maxValue) {
    return false;
  }
  let leftIsValid = helper(tree.left, minValue, tree.value);
  let rightIsValid = helper(tree.right, tree.value, maxValue);
  return leftIsValid && rightIsValid;
};

let bst = new BSTRecur(10);
bst.insert(20);
bst.insert(5);
bst.insert(3);
bst.insert(1);
bst.insert(35);
bst.insert(15);
bst.insert(12);
console.log(bst);
