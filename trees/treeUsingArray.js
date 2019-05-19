// Create a Tree class

class treeUsingArray {
  constructor() {
    this.data = ["root", [], []];
  }

  // Insert a left node
  insertLeft(node, value) {
    let oldNode = node[1];
    if (oldNode.length) {
      // move the old node to the left of the node
      node[1] = [value, oldNode, []];
    } else {
      // create a new node and append
      node[1] = [value, [], []];
    }
  }

  // Insert a right node
  insertRight(node, value) {
    let oldNode = node[2];
    if (oldNode.length) {
      // move the old node to the left of the node
      node[2] = [value, [], oldNode];
    } else {
      // create a new node and append
      node[2] = [value, [], []];
    }
  }

  // getRoot value
  getRoot() {
    return this.data[0];
  }
  // setRoot value
  setRoot(value) {
    this.data[0] = value;
  }
  // getLeft child
  getLeft() {
    return this.data[1];
  }
  // getRight child
  getRight() {
    return this.data[2];
  }
}

let newTree = new treeUsingArray();
let root = newTree.data;
newTree.setRoot("a");
newTree.insertLeft(root, "b");
newTree.insertRight(root, "c");
newTree.insertRight(newTree.getLeft(root), "e");
newTree.insertLeft(newTree.getRight(root), "f");
newTree.insertRight(newTree.getRight(root), "g");

console.log(root);
