/*
Invert Binary Tree

Write a function that takes in a Binary Tree and inversts it. In other words, the function should swap
every left node in the tree for its corresponding right node.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes 
can either be Binary Tree nodes themselves or null.

example:
tree =      1
          /   \
         2     3
        / \   / \
       4   5 6   7
      / \
     8   9

output:
tree =      1
          /   \
         3     2
        / \   / \
       7   6 5   4
                / \
               9   8
*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const invertBinaryTree = (tree) => {
  if (tree === null) return null;
  // traverse the tree
  // swapping left and right children of each current node
  // repeat logic throughout the tree
  [tree.left, tree.right] = [tree.right, tree.left];
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
  return tree;
};
