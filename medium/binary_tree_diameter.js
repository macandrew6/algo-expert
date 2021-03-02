/*
Binary Tree Diameter

Write a function that takes in a Binary Tree and returns its diameter. The diameter of a binary tree is 
defined as the length of its logest path, even if that path doesn't pass through the root of the tree

A path is a collection of connected nodes in a tree, where no node is connected to more than two other nodes. 
The length of a path is the number of edgest between the path's first node and its last node.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can
either be BinaryTree nodes themselves of null.

example:
tree =         1
             /   \
            3     2
          /  \
         7    4
        /      \
       8        5
      /          \
     9            6
output:
6 => 9 -> 8 -> 7 -> 3 -> 4 -> 5 -> 6
! there are 6 edges between the first node and the last node of this tree's longest path.
*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const binaryTreeDiameter = (tree) => {
  // Write your code here.
  return -1;
};

const addTreeLeft = (tree, value) => {
  tree.left = new BinaryTree(value);
  return tree.left;
};

const addTreeRight = (tree, value) => {
  tree.right = new BinaryTree(value);
  return tree.right;
};

let tree = new BinaryTree(1);
addTreeLeft(tree, 3).addTreeRight(tree, 7);

console.log(tree);
// console.log(binaryTreeDiameter(tree));
