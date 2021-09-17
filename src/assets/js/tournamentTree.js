import tournamentNode from "./tournamentNode";
export default class tournamentTree {
  constructor() {
    this.root = new tournamentNode();
  }
  step = 2;
  resultSum = 0;
  insertNode(node) {
    let newNode = new tournamentNode();
    if (node.children.length < 2) {
      return node.children.push(newNode);
    } else {
      this.insertNode(node.children, newNode);
    }
  }
  buildTraveralTree(tourCount) {
    this.resultSum =
      (2 * (1 - Math.pow(this.step, tourCount))) / (1 - this.step);
    function sumLinks(total, item) {
      return total + (item.children.length === 2 ? 1 : 0);
    }

    console.log(this.reduce(sumLinks, 0, this.root));
  }
  makeTree(nodes, parentId) {
    return nodes
      .filter((node) => node.parent_id === parentId)
      .reduce(
        (tree, node) => [
          ...tree,
          {
            ...node,
            children: this.makeTree(nodes, node.id),
          },
        ],
        []
      );
  }
}
