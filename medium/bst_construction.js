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

class BSTRecur {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // time: O(log(n)) | space: O(1)
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BSTRecur(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BSTRecur(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }

  // time: O(log(n)) | space: O(1)
  contains(value) {
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      return true;
    }
  }

  // time: O(log(n)) | space: O(1)
  remove(value) {
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this);
      }
    } else {
      // we found the value located in the bst;
      // list of cases:
      if (this.left !== null && this.right !== null) {
        // if our node has both children
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else if (parent === null) {
        // if our node has no parent
        if (this.left !== null) {
          // if our node has no left child
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right !== null) {
          // if our node has no right child
          this.value = this.right.value;
          this.right = this.right.right;
          this.left = this.right.left;
        } else {
          // if our node has no children do nothing;
        }
      } else if (parent.left === this) {
        // keep track of parents
        parent.left = this.left !== null ? this.left : this.right;
      } else if (parent.right === this) {
        parent.right = this.left !== null ? this.left : this.right;
      }
    }
  }

  getMinValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }
}

let bst = new BSTRecur(10);
bst.insert(20);
bst.insert(5);
bst.insert(3);
bst.insert(1);
bst.insert(35);
bst.insert(15);
bst.insert(12);
console.log(bst);
