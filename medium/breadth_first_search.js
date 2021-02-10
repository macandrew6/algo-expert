/*
Breadth-first Search

You're given a Node class that has a name and an array of optional children
nodes. When put together, nodes form an acyclic tree-like structure.

Implement the breadthFirstSearch method on the Node class, which takes in an
empty array, traverses the tree using a breadth first search approach (specifically
navigating the tree from left to right), stroes all of the nodes' names in the input 
array and returns it.


queue : []
result :[a, b, c, d, e, f]
does a have any children

      a
     / \
    b   c
   / \   \
  d  e    f

*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // time v + e | space O(v)
  breadthFirstSearch(array) {
    let queue = [this];
    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode.children.length > 0) {
        currentNode.children.forEach((child) => {
          queue.push(child);
        });
      }
    }
    return array;
  }
}

let tree = new Node('a');
tree.addChild('b');
tree.addChild('c');
tree.children[0].addChild('d');
tree.children[0].addChild('e');
tree.children[1].addChild('f');

console.log(tree.breadthFirstSearch([]));
