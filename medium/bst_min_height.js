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

const minHeightBst = (array) => {
  // find a midpoint
  // find a suitable left node and a right node
};
