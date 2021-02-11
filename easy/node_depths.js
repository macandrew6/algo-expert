/*
Node Depths

The distance between a node in a Binary Tree and the tree's root is called the node's depth.

Write a function that takes in a Binary Tree and returns the sum of its nodes' depth

Each BinaryTree node has an integer value, a left child node, and a right child node.
Children nodes can either be BinaryTree nodes themselves or Null

tree =    1
        /   \
       2     3
      / \   / \
     4   5 6   7
    / \
   8   9
output = 16
* The depth of node with value 2 is 1.
* The depth of node with value 3 is 1.
* The depth of node with value 4 is 2.
* The depth of node with value 5 is 2.
* The depth of node with value 6 is 2.
* The depth of node with value 7 is 2.
* The depth of node with value 8 is 3.
* The depth of node with value 9 is 3.
* ...
* suming all of these depths yeilds 16
*/

// time O (n) | space O (n)
const nodeDepths = (root, depthSum = 0) => {
  // search method dfs
  // handle basecase of recursion
  // f(node, depth) = depth + f(lnode, depth+1) + f(rnode, depth + 1)
  if (!root) return 0; // couldn't think of this base case..........
  return (
    depthSum +
    nodeDepths(root.left, depthSum + 1) +
    nodeDepths(root.right, depthSum + 1)
  );
};

// time O (n) | space O (n) using a stack
const nodeDepthsIter = (root) => {
  // keep track of depth sum
  let depthSum = 0;
  let stack = [{ node: root, depth: 0 }];
  while (stack.length > 0) {
    let nodeInfo = stack.pop();
    let [node, depth] = [nodeInfo.node, nodeInfo.depth];
    if (!node) {
      continue;
    }
    depthSum += depth;
    stack.push({ node: root.left, depth: depth + 1 });
    stack.push({ node: root.right, depth: depth + 1 });
  }
  return depthSum;
};

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
