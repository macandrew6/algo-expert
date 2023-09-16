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

// time: O(n) | space: O(n)
const invertBinaryTreeIter = (tree) => {
  let queue = [tree];
  while (queue.length) {
    let current = queue.pop();
    if (current === null) continue;
    [current.left, current.right] = [current.right, current.left];
    queue.push(current.left);
    queue.push(current.right);
  }
  return tree;
};

// time: O(n) | space: O(h)
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

let bt = new BinaryTree(1);
bt.left = new BinaryTree(2);
bt.right = new BinaryTree(3);
bt.left.left = new BinaryTree(4);
bt.left.right = new BinaryTree(5);

console.log(bt);
console.log(invertBinaryTreeIter(bt));
