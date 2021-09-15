import tournamentNode from "./tournamentNode";
export default class tournamentTree {
  constructor() {
    this.root = null;
  }

  insert() {
    var newNode = new tournamentNode();

    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }
  insertNode(node, newNode) {
    if (node.children.length == 2) {
      for (let i = 0; i < node.children.length; i++) {
        this.insertNode(node.children[i], newNode);
      }
    } else {
      node.children.push(newNode);
    }
  }
}
