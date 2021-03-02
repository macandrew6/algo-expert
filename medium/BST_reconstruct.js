/*
Reconstruct BST

The pre-order traversal of a Binary Tree is a traversal technique that starts at the tree's
root node and visits nodes in the following order:

  1. Current node
  2. Left subtree
  3. Right subtree

Given a non-empty array of integers representing the pre-order traversal of a Binary Search Tree
(BST), write a function that creates the relevant BST and returns its root node.

The input array will contain the values of BST nodes in the order in which these nodes would be visited
with a pre-order traversal.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a
valid BST node if and only if it satisfies the BST property: it values is strictly greater than the 
values of every node to its left; its values is less than or equal to the values of every node to
its right; and its children nodes are either valid BST nodes themselves or null.

preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18]

output:
            10
          /    \
         4     17
       /  \       \
      2    5      19
    /             / 
   1            18
*/

class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// time: O(n^2) | space: O(h)
const reconstructBST = (preOrderTraversalValues) => {
  if (preOrderTraversalValues.length === 0) return null;

  let currentValue = preOrderTraversalValues[0];
  let rightSubtreeRootIdx = preOrderTraversalValues.length;

  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    if (preOrderTraversalValues[i] >= currentValue) {
      rightSubtreeRootIdx = i;
      break;
    }
  }

  let leftSubtree = reconstructBST(
    preOrderTraversalValues.slice(1, rightSubtreeRootIdx)
  );
  let rightSubtree = reconstructBST(
    preOrderTraversalValues.slice(rightSubtreeRootIdx)
  );
  return new BST(currentValue, leftSubtree, rightSubtree);
};

// time: O(n) | space: O(h) but it is really O(n) space
class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}

const reconstructBstRefactor = (preOrderTraversalValues) => {
  let treeInfo = new TreeInfo(0);
  return reconstructBstFromRange(
    -Infinity,
    Infinity,
    preOrderTraversalValues,
    treeInfo
  );
};

const reconstructBstFromRange = (
  lowerBound,
  upperBound,
  preOrderTraversalValues,
  currentSubtreeInfo
) => {
  if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length)
    return null;

  let rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
  if (rootValue < lowerBound || rootValue >= upperBound) return null;

  currentSubtreeInfo.rootIdx += 1;
  let leftSubtree = reconstructBstFromRange(
    lowerBound,
    rootValue,
    preOrderTraversalValues,
    currentSubtreeInfo
  );
  let rightSubtree = reconstructBstFromRange(
    rootValue,
    upperBound,
    preOrderTraversalValues,
    currentSubtreeInfo
  );
  return new BST(rootValue, leftSubtree, rightSubtree);
};

let preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18];
console.log(reconstructBstRefactor(preOrderTraversalValues));
