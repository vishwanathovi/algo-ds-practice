// Create a node class
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
// Create a stack class
class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }
  push(value) {
    this.data.push(value);
    this.length++;
    return this;
  }
  pop() {
    let temp = this.data.pop();
    this.length--;
    return temp;
  }
}
// Create a tree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let currentNode = this.root;

    if (!this.root) {
      this.root = new Node(value);
      return this.root;
    }

    while (1) {
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = new Node(value);
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = new Node(value);
          break;
        }
        currentNode = currentNode.left;
      }
    }
    return this.root;
  }
  lookup(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) return currentNode;
      currentNode =
        value > currentNode.value ? currentNode.right : currentNode.left;
    }
    return null;
  }
  remove(value) {
    // empty tree
    if (!this.root) {
      return false;
    }
    // tree with atleast 1 node on both the side
    let parentNode = this.root;
    let currentNode =
      value < parentNode.value ? parentNode.left : parentNode.right;

    while (currentNode.value !== value) {
      if (!currentNode) return false;
      parentNode = currentNode;
      currentNode =
        value > currentNode.value ? currentNode.right : currentNode.left;
    }

    if (!currentNode.left && !currentNode.right) {
      // Leaf
      if (parentNode.left === currentNode) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
    } else if (!currentNode.left || !currentNode.right) {
      // One child
      let nextNode = currentNode.left || currentNode.right;
      if (parentNode.left === currentNode) {
        parentNode.left = nextNode;
      } else {
        parentNode.right = nextNode;
      }
    } else {
      // two children
      if (!currentNode.right.left) {
        // if right node is the choice
        let rightNode = currentNode.right;
        parentNode.right === currentNode
          ? (parentNode.right = rightNode)
          : (parentNode.left = rightNode);
        rightNode.left = currentNode.left;
      } else {
        let parentInTraverse = currentNode;
        let replacingNode = parentInTraverse.right;
        while (replacingNode.left) {
          parentInTraverse = replacingNode;
          replacingNode = replacingNode.left;
        }
        currentNode.value = replacingNode.value;
        parentInTraverse.left = null;
      }
    }
    return this;
  }
}
// Tree creator
function stringParse(string) {
  let regex = /[(]{1}|[)]{1}|\d+|[\+\-\*\/]/g;
  let stringArray = string.match(regex);

  let stringTree = new BinarySearchTree();
  stringTree.root = new Node();

  let currentNode = stringTree.root;
  let parentNode = null;
  let parentStack = new Stack();

  for (let i = 0; i < stringArray.length; i++) {
    switch (true) {
      case /\(/.test(stringArray[i]):
        // add a node to the left and move the current node to new node
        currentNode.left = new Node();
        parentStack.push(currentNode);
        currentNode = currentNode.left;
        break;
      case /\)/.test(stringArray[i]):
        // move up to the parent node of the element
        currentNode = parentStack.pop();
        break;
      case /[\d]+/.test(stringArray[i]):
        // add the element in the current node and move up
        currentNode.value = +stringArray[i];
        currentNode = parentStack.pop();
        break;
      case /[\+\*\-\/]/.test(stringArray[i]):
        // add the operation into the node, add a new node to the right & descend to the right node
        currentNode.value = stringArray[i];
        currentNode.right = new Node();
        parentStack.push(currentNode);
        currentNode = currentNode.right;
        break;
      default:
        break;
    }
  }
  return stringTree;
}

// Evaluate parsed Tree//
function evaluateTree() {}

function inOrderTraverse(node) {
  if (!node) return;
  inOrderTraverse(node.left);
  console.log(node.value);
  inOrderTraverse(node.right);
}

let string = "((3+(4-5))*6)";
let parsedTree = stringParse(string);
console.log(parsedTree);
inOrderTraverse(parsedTree.root);
