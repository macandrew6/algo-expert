/*
BST Taversal

Write three functiongs that take in a Binary Search Tree (BST) and an empty array traverse the BST,
add its nodes' values to the input array, and return that array. The three functions should traverse
the BST using in-order, pre-order, and post-order tree-traversal techniques, respectively.

If you're unfamiliar with tree traversal techniques, we recommend watching the Conceptual 
Overview section of this question's video explanation before starting to code.

Each BST node has an integer value, a left child node, and a right child node. A node is 
said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater
than the values of every node to its left; its value is less than of equal to the values of every node
to its right; and its children nodes are either valid ST nodes themselves or null.

bst = 
         10 
       /    \
      5     15
    /  \       \
   2    5      22
 /        
1           

inOrderTraverse: [1, 2, 5, 5, 10, 15, 22]
preOrderTraverse: [10, 5, 2, 1, 5, 15, 22]
postOrderTraverse: [1, 2, 5, 5, 22, 15, 10]
*/

// time: O(n) | space: O(n)
const inOrderTraverse = (tree, array) => {
  // dfs
  // Write your code here.
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
};

const preOrderTraverse = (tree, array) => {
  // Write your code here.
  if (tree !== null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
};

const postOrderTraverse = (tree, array) => {
  // Write your code here.
  if (tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
};
