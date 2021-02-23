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

  // time: O(log(n)) | space: O(1)
  insert(value) {
    let current = this;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = new BST(value);
          break;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = new BST(value);
          break;
        }
        current = current.right;
      }
    }
    return this;
  }

  // time: O(log(n)) | space: O(1)
  contains(value) {
    // Write your code here.
    let current = this;
    while (current !== null) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // time: O(log(n)) | space: O(1)
  remove(value, parentNode = null) {
    // find the node with the value
    // remove node with value
    // swap node with the lowest tree node
    let current = this;
    while (current !== null) {
      if (value < current.value) {
        parentNode = current;
        current = current.left;
      } else if (value > current.value) {
        parentNode = current;
        current = current.right;
      } else {
        if (current.left !== null && current.right !== null) {
          current.value = current.right.getMinValue();
          // current.value = smallest value of right subtree
          current.right.remove(current.value, current);
        } else if (parentNode === null) {
          // dealing with the root node case
          if (current.left !== null) {
            current.value = current.left.value;
            current.right = current.left.right;
            current.left = current.left.left;
          } else if (current.right !== null) {
            current.value = current.right.value;
            current.right = current.right.right;
            current.left = current.right.left;
          } else {
            current.value = null;
          }
        } else if (parentNode.left === current) {
          parentNode.left =
            current.left !== null ? current.left : current.right;
        } else if (parentNode.right === current) {
          parentNode.right =
            current.left !== null ? current.left : current.right;
        }
        break;
      }
    }
    return this;
  }

  getMinValue() {
    currentNode = this;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }
}

let bst = new BST(10);
