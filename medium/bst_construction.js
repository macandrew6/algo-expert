/*
BST Construction

Write a BST class for a Binary Search Tree. The class should support:

  * Inserting values with the insert method.
  * Removing values with the remove method; this method should only
    remove the first instance of a given value.
  * Searching for values with the contains method.

Note that you can't remove values from a single-node tree. In other 
words, calling the remove method on a single-node tree should simply
not do anything.

Each BST node has an integer value, a left chil node, and a right child
node. A node is said to be a valid BST node if and only if it satisfies
the BST propery: its value is strictly greater than the values of every
node to its left; its value is less than or equal to the values of every
node to its right; and its chldren nodes are either valid BST nodes 
themselves or None / null.

sample usage:
            10
          /    \
         5     15
       /  \   /   \
      2    5 13   22
    /         \
   1           14

  insert(12):
            10
          /    \
         5     15
       /  \   /   \
      2    5 13   22
    /        / \
   1        12 14

  remove(10):
            12
          /    \
         5     15
       /  \   /   \
      2    5 13   22
    /         \
   1           14

  contains(15): true
*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
		let current = this;
		while (current.left !== null || current.right !== null) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			}	
		}
		current = new BST(value);
    return this;
  }

  contains(value) {
    // Write your code here.
		let current = this;
		while (current.left !== null || current.right !== null) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			}	else {
				return true;
			}
		}
		return false;
  }

  remove(value) {
		// find the node with the value
		// remove node with value
		// swap node with the lowest tree node
    return this;
  }
}

let bst = new BST(10);