// Find Closest Value  in BST

// Write a function that takes in a BST and a target integer value
// and retursn the closest value to that target value contained in
// the BST

// You can assume that there will only be one closest value

// Each BST node has an integer -value-, a -left- child node, and a
// -right- child node. A node is said to be a valid BST node if and
// only if it satisfies the BST property: its -value- is greater
// than the values of every node to its left; its -value- is less
// than or equal to the value of every node to its right; and it's
// children nodes are either valid BST nodes themselves or none/null

/*
tree =   10
        /   \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14

target = 12

output = 13
*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// recursive approach =>
// average: O(log(n)) time / O(log((n))) space
// worst: O(n) / O(n)
// function findClosestValueInBst(tree, target) {
//   // init a closestValue variable
//   return helperMethod(tree, target, Number(Infinity));
// }

// function helperMethod(tree, target, closestValue) {
//   // if the  |target - current| value is less than the |target - closestValue|
//   // reassign the closestValue to the current
//   // return the closestValue
//   if (!tree) {
//     return closestValue;
//   }
//   if (Math.abs(target - closestValue) > Math.abs(target - tree.value)) {
//     closestValue = tree.value;
//   }
//   if (target < tree.value) {
//     return helperMethod(tree.left, target, closestValue);
//   } else if (target > tree.value) {
//     return helperMethod(tree.right, target, closestValue);
//   } else {
//     return closestValue;
//   }
// }

// iterative approach
// average: O(log(n)) time / O(1) space
// worst: O(n) time / O(1) space
function findClosestValueInBst(bst, target) {
  // reassign the bst if the target is less than equal to or
  // greater than the current bst value
  // new pseudo code
  // start with conditions
  let currentNode = bst;
  while (currentNode) {}
  // let closestValue = bst.value; // might change to currentNode.value

  // if (Math.abs(target - closestValue) > Math.abs(target - currentNode.value)) {
  //   // reassign currentNoden value
  //   currentNode = currentNode.value;
  // } else if (Math.abs()) {
  //   // reassign current node to currentnode.left
  //   // solving right now
  // }
}

let bst = new BST(10);
bst.left = new BST(5);
bst.left.left = new BST(2);
bst.left.right = new BST(5);
bst.left.left.left = new BST(1);
bst.right = new BST(15);
bst.right.left = new BST(13);
bst.right.right = new BST(22);
bst.right.left.right = new BST(14);

console.log(findClosestValueInBst(bst, 12));
