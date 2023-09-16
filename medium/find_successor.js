/*
Find Successor

Write a function that takes in a Binary Tree (where nodes have an additional pointer to their parent node)
as well as a node contained in that tree and returns the given node's successor

A node's successor is the next node to be visited (immediately after the given node) when traversing its 
tree using the in-order tree-traversal technique. A node has no successor if it's the last node to be 
visited in the in-order traversal.

If a node has no successor, your function should return null.

Each BinaryTree node has an integer value, a parent node, a left child node, and a right child node. 
Children nodes can either be BinaryTree nodes themselves or null.

example:
tree =      1
          /   \
         2     3
        / \ 
       4   5 
      / 
     6
node = 5
output: 1 //  6 -> 4 -> 2 -> 5 -> 1 -> 3
1 comes immediately after 5
*/

// time: O(n) | space: O(n)
const findSuccessor = (tree, node) => {
  let inOrderTraversalOrder = getInOrderTraversalOrder(tree);
  for (let i = 0; i < inOrderTraversalOrder.length; i++) {
    if (inOrderTraversalOrder[i] === node) {
      return inOrderTraversalOrder[i + 1];
    }
  }
  return null;
};

const getInOrderTraversalOrder = (node, order = []) => {
  if (node !== null) {
    getInOrderTraversalOrder(node.left, order);
    order.push(node);
    getInOrderTraversalOrder(node.right, order);
  }
  return order;
};

// time: O(h) | space: O(1) - where h is the height of the tree
const findSuccessorRefactor = (tree, node) => {
  if (node.right !== null) return getLeftmostChild(node.right);
  return getRightmostParent(node);
};

const getLeftmostChild = (node) => {
  let currentNode = node;
  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }
  return currentNode;
};

const getRightmostParent = (node) => {
  let currentNode = node;
  while (
    currentNode.parent !== null &&
    currentNode.parent.right === currentNode
  ) {
    currentNode = currentNode.parent;
  }
  return currentNode.parent;
};
