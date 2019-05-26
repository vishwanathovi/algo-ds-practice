class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacencyList = {};
  }

  addVertex(node) {
    this.adjacencyList[node] = [];
    this.numberOfNodes++;
    return this.numberOfNodes;
  }
  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
    return this;
  }
  showConnections() {
    Object.keys(this.adjacencyList).forEach(key => {
      console.log(key, "-->", ...this.adjacencyList[key]);
    });
  }
}

let newGraph = new Graph();
newGraph.addVertex("0");
newGraph.addVertex("1");
newGraph.addVertex("2");
newGraph.addVertex("3");
newGraph.addVertex("4");
newGraph.addVertex("5");
newGraph.addVertex("6");
newGraph.addEdge("3", "1");
newGraph.addEdge("3", "4");
newGraph.addEdge("4", "2");
newGraph.addEdge("4", "5");
newGraph.addEdge("1", "2");
newGraph.addEdge("1", "0");
newGraph.addEdge("0", "2");
newGraph.addEdge("6", "5");

newGraph.showConnections();
console.table(newGraph.adjacencyList);
