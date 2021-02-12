/*
Invert a Binary Tree

example:
        a
       / \
      b   c
     / \   \
    d   e   f
        =
        a
       / \
      c   b
     / \   \
    e   d   f
*/

const invertBinaryTree = (tree) => {
  if (tree) {
    let left = tree.left;
    let right = tree.right;
    tree.left = right;
    tree.right = left;
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
  }
};
