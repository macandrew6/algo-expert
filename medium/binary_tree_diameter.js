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

  addTreeLeft = (value) => {
    this.left = new BinaryTree(value);
    return this.left;
  };

  addTreeRight = (value) => {
    this.right = new BinaryTree(value);
    return this.right;
  };
}

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}

const binaryTreeDiameter = (tree) => {
  // Write your code here.
  // initialize a longestPath
  // initialize counter
  // we want to search all nodes to the left first once we've hit a null value increment the counter
  // until we reach a node on the right that has a value of null
  // save that counter as the longestPath
  // continue the search
  return getTreeInfo(tree).diameter;
};

const getTreeInfo = (tree) => {
  if (tree === null) return new TreeInfo(0, 0);

  let leftTreeData = getTreeInfo(tree.left);
  let rightTreeData = getTreeInfo(tree.right);

  let longestPathThroughRoot = leftTreeData.height + rightTreeData.height;
  let maxDiameterSoFar = Math.max(
    leftTreeData.diameter,
    rightTreeData.diameter
  );
  let currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
  let currentHeight = 1 + Math.max(leftTreeData.height, rightTreeData.height);

  return new TreeInfo(currentDiameter, currentHeight);
};

let tree = new BinaryTree(1);
tree.addTreeLeft(3).addTreeLeft(7).addTreeLeft(8).addTreeLeft(9);
tree.left.addTreeRight(4).addTreeRight(5).addTreeRight(6);
tree.addTreeRight(2);
console.log(tree);

console.log(binaryTreeDiameter(tree));
