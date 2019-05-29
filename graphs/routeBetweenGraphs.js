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
    // this.adjacencyList[node2].push(node1);
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
newGraph.addEdge("2", "6");
newGraph.addEdge("3", "4");
newGraph.addEdge("4", "2");
newGraph.addEdge("4", "5");
newGraph.addEdge("1", "2");
newGraph.addEdge("1", "0");
newGraph.addEdge("0", "2");
newGraph.addEdge("6", "5");

let finalValue = false;
function findIfThereIsRoute(graph, node1, node2, traversedNodes = []){
  // console.log(node1, node2, traversedNodes)
  if (graph[node1].includes(node2)){
    finalValue = true;
  }
  if (traversedNodes.includes(node2) || traversedNodes.includes(node1)){
    return;
  }

  for (let i = 0; i < graph[node1].length; i++ ){
    findIfThereIsRoute(graph, graph[node1][i], node2, traversedNodes.concat(node1));
  }
}

// Approach 1:
// take all the next nodes, recursively travel till you find the node in every path
// execution stops if the element is found or if the same node is repeated in the path
// time complexity: O(v+e) - between v & e, whichever is larger
// space complexity: O(n*e)


// newGraph.showConnections();
console.table(newGraph.adjacencyList);

findIfThereIsRoute(newGraph.adjacencyList, "4", "1")
console.log(finalValue)
