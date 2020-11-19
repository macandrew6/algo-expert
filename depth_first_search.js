/*
Depth-first Search

You're given a Node class that has a name and an array of optional 
children nodes. When put together, nodes form an acyclic tree-like 
structure.

Implement the depthFirstSearch method on the Node class, which
takes in an empty array, traverses the tree using the Depth-first 
Search approach (specifically navigating the tree from left to right),
stores all the nodes' names in the input array, and returns it.
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

  /*
  space: O(V) - where V is the number of vertices
  time: O(V + E) - where V is the number of vertices in the graph 
                   and E is the number of edges
  */

  depthFirstSearch(array) {
    // establish a base case
    if (!this.children.length === 0) {
      return;
    }
    array.push(this.name);
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].depthFirstSearch(array);
    }
    return array;
  }
}
