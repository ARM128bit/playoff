class binaryNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export default class BinaryTree {
  constructor() {
    this.root = null;
    this.storage = [];
  }

  find = (data, root) => {
    if (root) {
      this.find(data, root.left);
      if (root.data == data) {
        this.storage.push(root);
      }
      this.find(data, root.right);
    }
  };
  insert = (data) => {
    if (!this.root) {
      this.root = new binaryNode(data[0]);
    }
    for (let i = 0; i < data.length; i++) {
      this.find(data[i], this.root);
      let parent = this.storage.pop();
      parent.left = new binaryNode(data[2 * i + 1]);
      parent.right = new binaryNode(data[2 * i + 2]);
    }
  };
}
