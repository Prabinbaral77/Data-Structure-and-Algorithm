//Binary search tree
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.data);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let currentNode = this.root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  findMax() {
    let currentNode = this.root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }

  find(data) {
    let current = this.node;
    while (data !== current.data) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
  }

  isPresent(data) {
    let current = this.node;
    while (current) {
      if (current.data === data) return true;
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) return null;
      if (data == node.data) {
        if (node.left == null && node.right == null) return null;
        if (node.right == null) return node.left;
        if (node.left == null) return node.right;

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (node.data < data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}

let bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
console.log(bst.findMax());
console.log(bst.findMin());
console.log(bst.isPresent(17));

bst.remove(17);
console.log(bst.findMax());
console.log(bst.isPresent(17));
