/*
Height Balanced Binary Tree

You're given the root node of a Binary Tree. Write a function that returns true if this Binary Tree is height balanced
and false if it isn't.

A Binary Tree is height balanced if for each node in the tree, the difference between the height of its left subtree
and the height of its right subtree is at most 1.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be
BinaryTree nodes themselves or null.

tree =        1
            /   \
           2     3
         /   \     \
        4     5     6
            /   \
           7     8

output: true
*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  addLeft(value) {
    this.left = new BinaryTree(value);
    return this;
  }
  addRight(value) {
    this.right = new BinaryTree(value);
    return this;
  }
}

// time: O(n) | space: O(h)
class TreeInfo {
  constructor(isBalanced = false, height) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}

const heightBalancedBinaryTree = (tree) => {
  // Write your code here.
  // init leftEdgeSum and a rightEdgeSum
  // iterate through the left subtree incrementing the leftEdgeSum and right subtree incrementing rightEdgeSum
  // at the end return if the difference between the sum is greater or less than or equal to 1
  let treeInfo = getTreeInfo(tree);
  return treeInfo.isBalanced;
};

const getTreeInfo = (node) => {
  if (node === null) {
    return new TreeInfo(true, 0);
  }

  let leftSubTreeInfo = getTreeInfo(node.left);
  let rightSubTreeInfo = getTreeInfo(node.right);

  let isBalanced =
    leftSubTreeInfo.isBalanced &&
    rightSubTreeInfo.isBalanced &&
    Math.abs(leftSubTreeInfo.height - rightSubTreeInfo.height) <= 1;

  let height = Math.max(leftSubTreeInfo.height, rightSubTreeInfo.height) + 1;

  return new TreeInfo(isBalanced, height);
};

let tree = new BinaryTree(1);
tree.addLeft(2);
tree.left.addLeft(4);
tree.addRight(3);
tree.right.addRight(6);
tree.left.addRight(5);
tree.left.right.addLeft(7);
tree.left.right.addRight(8);

console.log(tree);
console.log(heightBalancedBinaryTree(tree));
