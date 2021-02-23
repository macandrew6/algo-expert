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

function validateBst(tree) {
  let curr = tree;
  while (true) {
    if (curr.left.value < curr.value) {
      curr = curr.left;
    } else if (curr.right.value > curr.value) {
      curr = curr.right;
    }
    return true;
  }
  return false;
}

let bst = new BSTRecur(10);
bst.insert(20);
bst.insert(5);
bst.insert(3);
bst.insert(1);
bst.insert(35);
bst.insert(15);
bst.insert(12);
console.log(bst);
