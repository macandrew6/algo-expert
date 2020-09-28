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

function findClosestValueInBst(tree, target) {
  console.log(tree);
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
